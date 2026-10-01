#!/usr/bin/env node
/*
 * Vérifie la cohérence des données : ingrédients connus, unités valides,
 * champs obligatoires, identifiants uniques, valeurs nutritionnelles plausibles.
 * Usage : node tools/valider.js [--tableau]
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const racine = path.join(__dirname, '..');
const contexte = { window: {} };
vm.createContext(contexte);

const charger = (fichier) => vm.runInContext(fs.readFileSync(path.join(racine, fichier), 'utf8'), contexte, { filename: fichier });

const html = fs.readFileSync(path.join(racine, 'index.html'), 'utf8');
const tousScripts = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1]);
// Seules les données et le moteur sont chargés ici (pas l'interface).
const scripts = tousScripts.filter((s) => /^js\/(ingredients|categories|moteur|photos-recettes|batch|prix|onepot|recettes\/)/.test(s));
scripts.forEach(charger);

const { INGREDIENTS, RECETTES, Moteur, CATEGORIES, PHOTOS_RECETTES, BATCH, PRIX, ONE_POT } = contexte.window;
const erreurs = [];
const avertissements = [];

// Les fichiers de recettes présents sur le disque doivent tous être chargés par index.html
fs.readdirSync(path.join(racine, 'js/recettes')).forEach((f) => {
  if (!scripts.includes('js/recettes/' + f)) erreurs.push(`js/recettes/${f} n'est pas chargé dans index.html`);
});

// La version affichée dans l'application doit suivre le nom du cache du service worker
{
  const v = (fs.readFileSync(path.join(racine, 'js/app.js'), 'utf8').match(/VERSION: (\d+)/) || [])[1];
  const c = (fs.readFileSync(path.join(racine, 'sw.js'), 'utf8').match(/var CACHE = 'ma-cuisine-v(\d+)'/) || [])[1];
  if (!v || v !== c) erreurs.push(`Version incohérente : App.VERSION = ${v}, cache du service worker v${c}`);
}

// Le service worker doit mettre en cache tous les fichiers de l'application
const sw = fs.readFileSync(path.join(racine, 'sw.js'), 'utf8');
const feuilles = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map((m) => m[1]);
tousScripts.concat(feuilles).forEach((f) => {
  if (!sw.includes("'" + f + "'")) erreurs.push(`${f} absent de la liste de cache de sw.js`);
});

Object.entries(INGREDIENTS).forEach(([id, e]) => {
  if (e.length < 7 || e.slice(2, 7).some((v) => typeof v !== 'number')) erreurs.push(`Ingrédient ${id} : valeurs invalides`);
  const [, , kcal, p, g, l, f] = e;
  const calcule = p * 4 + g * 4 + l * 9 + f * 2;
  // Tolérance large : l'alcool, les fibres et les polyols apportent aussi des calories
  if (kcal > 20 && Math.abs(calcule - kcal) / kcal > 0.3 && !['vin_rouge', 'vin_blanc', 'biere', 'cidre', 'mirin', 'alcool_fort'].includes(id)) {
    avertissements.push(`Ingrédient ${id} : ${kcal} kcal annoncées vs ${Math.round(calcule)} calculées depuis les macros`);
  }
});

const ids = new Set();
const requis = ['id', 'nom', 'cat', 'cuisine', 'emoji', 'desc', 'portions', 'prep', 'cuisson', 'diff', 'ing', 'etapes'];
const lignes = [];

RECETTES.forEach((r) => {
  const ref = r.id || r.nom;
  requis.forEach((c) => { if (r[c] === undefined) erreurs.push(`${ref} : champ "${c}" manquant`); });
  if (ids.has(r.id)) erreurs.push(`${ref} : identifiant en double`);
  ids.add(r.id);
  if (!/^[a-z0-9-]+$/.test(r.id)) erreurs.push(`${ref} : identifiant invalide`);
  if (CATEGORIES && !CATEGORIES.some((c) => c.nom === r.cat)) erreurs.push(`${ref} : catégorie inconnue "${r.cat}"`);
  if (![1, 2, 3].includes(r.diff)) erreurs.push(`${ref} : difficulté invalide`);
  if (!(r.portions > 0)) erreurs.push(`${ref} : portions invalides`);

  r.ing.forEach((ligne) => {
    const [id, q, unite = 'g'] = ligne;
    const ing = INGREDIENTS[id];
    if (!ing) { erreurs.push(`${ref} : ingrédient inconnu "${id}"`); return; }
    if (!Moteur.UNITES.includes(unite)) erreurs.push(`${ref} : unité inconnue "${unite}" pour ${id}`);
    if (unite === 'pc' && !(ing[7] && ing[7].pc)) erreurs.push(`${ref} : ${id} n'a pas de poids à la pièce`);
    if (typeof q !== 'number' || (unite !== 'qs' && !(q > 0))) erreurs.push(`${ref} : quantité invalide pour ${id}`);
  });

  const { parPortion: n } = Moteur.analyser(r);
  if (n.kcal < 30 || n.kcal > 1300) avertissements.push(`${ref} : ${Math.round(n.kcal)} kcal par portion, à vérifier`);
  lignes.push([r.id, r.cat, Math.round(n.kcal), Math.round(n.p), Math.round(n.g), Math.round(n.l)]);
});

// ---------- Photos ----------
if (PHOTOS_RECETTES) {
  const idsRecettes = new Set(RECETTES.map((r) => r.id));
  RECETTES.forEach((r) => { if (!PHOTOS_RECETTES[r.id]) avertissements.push(`${r.id} : aucune source de photo dans js/photos-recettes.js`); });
  Object.entries(PHOTOS_RECETTES).forEach(([id, sources]) => {
    if (!idsRecettes.has(id)) erreurs.push(`photos-recettes.js : recette inconnue "${id}"`);
    sources.split('|').forEach((c) => { if (!/^[wc]:\S/.test(c)) erreurs.push(`photos-recettes.js : source invalide "${c}" pour ${id}`); });
  });
}

// ---------- Batch cooking ----------
if (BATCH) {
  const parId = new Map(RECETTES.map((r) => [r.id, r]));
  Object.entries(BATCH.CONSERVATION).forEach(([id, c]) => {
    if (!parId.has(id)) erreurs.push(`batch.js : recette inconnue "${id}"`);
    if (!(c[0] > 0) || !(c[1] >= 0) || !BATCH.MODES[c[2]]) erreurs.push(`batch.js : conservation invalide pour ${id}`);
    // Repères Anses / USDA : 4 jours au plus pour un plat cuisiné, 2 pour le poisson et les fruits de mer.
    const r = parId.get(id);
    if (r && c[2] !== 'boite' && !['sauce', 'froid', 'base', 'gateau'].includes(c[2]) && c[0] > 4) avertissements.push(`batch.js : ${id} gardé ${c[0]} jours au frais, est-ce prudent ?`);
    if (r && ['Poissons'].includes(r.cat) && c[0] > 2) avertissements.push(`batch.js : ${id} (poisson) gardé ${c[0]} jours au frais`);
  });
  RECETTES.filter((r) => r.cuisine === 'Batch cooking' && !BATCH.CONSERVATION[r.id]).forEach((r) => erreurs.push(`batch.js : conservation manquante pour ${r.id}`));
  BATCH.SPECIALES.forEach((id) => {
    if (!parId.has(id)) erreurs.push(`batch.js : recette spéciale inconnue "${id}"`);
    else if (!BATCH.CONSERVATION[id]) erreurs.push(`batch.js : conservation manquante pour ${id}`);
  });
  const idsSessions = new Set();
  BATCH.SESSIONS.forEach((s) => {
    if (idsSessions.has(s.id)) erreurs.push(`batch.js : session en double "${s.id}"`);
    idsSessions.add(s.id);
    ['nom', 'emoji', 'desc', 'duree', 'tags', 'recettes', 'plan'].forEach((c) => { if (s[c] === undefined) erreurs.push(`session ${s.id} : champ "${c}" manquant`); });
    s.tags.forEach((t) => { if (!BATCH.TAGS[t]) erreurs.push(`session ${s.id} : thème inconnu "${t}"`); });
    s.recettes.forEach(([id, portions, repas]) => {
      if (!parId.has(id)) erreurs.push(`session ${s.id} : recette inconnue "${id}"`);
      else if (!BATCH.CONSERVATION[id]) erreurs.push(`session ${s.id} : ${id} n'a pas de durée de conservation`);
      if (!(portions > 0)) erreurs.push(`session ${s.id} : portions invalides pour ${id}`);
      if (repas && !['petitdej', 'dejeuner', 'diner', 'collation'].includes(repas)) erreurs.push(`session ${s.id} : repas inconnu "${repas}"`);
    });
  });
}

// ---------- One pot ----------
if (ONE_POT) {
  const idsR = new Set(RECETTES.map((r) => r.id));
  const ustensiles = new Set(ONE_POT.USTENSILES.map((u) => u.id));
  Object.entries(ONE_POT.RECETTES).forEach(([id, [u, style]]) => {
    if (!idsR.has(id)) erreurs.push(`onepot.js : recette inconnue "${id}"`);
    if (!ustensiles.has(u)) erreurs.push(`onepot.js : ustensile inconnu "${u}" pour ${id}`);
    if (!['healthy', 'gourmand'].includes(style)) erreurs.push(`onepot.js : style inconnu "${style}" pour ${id}`);
  });
  RECETTES.filter((r) => r.cuisine === 'One pot' && !ONE_POT.RECETTES[r.id]).forEach((r) => erreurs.push(`onepot.js : ${r.id} n'a pas d'ustensile`));
}

// ---------- Prix ----------
if (PRIX) {
  Object.keys(INGREDIENTS).forEach((id) => { if (id !== 'eau' && !PRIX.produits[id]) erreurs.push(`prix.js : aucun prix pour ${id}`); });
  Object.entries(PRIX.produits).forEach(([id, p]) => {
    const i = Moteur.infos(id);
    if (!i) { erreurs.push(`prix.js : ingrédient inconnu "${id}"`); return; }
    const [lidl, leclerc, qte, unite, libelle] = p;
    if (![lidl, leclerc].some((x) => x > 0)) erreurs.push(`prix.js : ${id} n'a de prix dans aucun magasin`);
    if ([lidl, leclerc].some((x) => x !== null && !(x > 0))) erreurs.push(`prix.js : prix invalide pour ${id}`);
    if (!['g', 'ml', 'pc', 'kg'].includes(unite) || !(qte > 0) || !libelle) erreurs.push(`prix.js : conditionnement invalide pour ${id}`);
    if (unite === 'pc' && !i.pc) erreurs.push(`prix.js : ${id} vendu à la pièce sans poids unitaire dans ingredients.js`);
    if (unite === 'kg' && qte !== 1) erreurs.push(`prix.js : ${id} au kilo doit avoir la quantité 1`);
    // Écart suspect entre les deux enseignes (erreur de saisie ?)
    if (lidl > 0 && leclerc > 0 && Math.max(lidl, leclerc) / Math.min(lidl, leclerc) > 1.5) avertissements.push(`prix.js : écart Lidl / Leclerc important pour ${id}`);
  });
}

// ---------- Doublons ----------
// Clé = mots significatifs du nom (sans accents, pluriels, mots vides, ordre).
const MOTS_VIDES = new Set(['de', 'du', 'des', 'la', 'le', 'les', 'l', 'd', 'au', 'aux', 'a', 'et', 'en', 'sur', 'avec', 'sauce',
  'facon', 'maison', 'mon', 'ma', 'mes', 'un', 'une', 'the', 'al', 'alla', 'all', 'el', 'con', 'di', 'ou']);
const mots = (nom) => [...new Set(nom.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/œ/g, 'oe')
  .replace(/\([^)]*\)/g, ' ').split(/[^a-z0-9]+/).filter((m) => m && !MOTS_VIDES.has(m)).map((m) => m.replace(/(s|x)$/, '')))].sort();
// Paires proches mais bien distinctes (vérifiées à la main)
const AUTORISES = new Set((require('./doublons-autorises.json') || []).map((p) => p.slice().sort().join(' | ')));
const parCle = {};
RECETTES.forEach((r) => {
  const cle = mots(r.nom).join(' ');
  if (parCle[cle]) erreurs.push(`Doublon : « ${r.nom} » et « ${parCle[cle]} »`);
  else parCle[cle] = r.nom;
});
for (let i = 0; i < RECETTES.length; i++) {
  const a = mots(RECETTES[i].nom);
  for (let j = i + 1; j < RECETTES.length; j++) {
    const b = mots(RECETTES[j].nom);
    const communs = a.filter((m) => b.includes(m)).length;
    const union = new Set(a.concat(b)).size;
    if (communs >= 2 && communs / union >= 0.6 && !AUTORISES.has([RECETTES[i].nom, RECETTES[j].nom].sort().join(' | '))) {
      avertissements.push(`Noms proches : « ${RECETTES[i].nom} » / « ${RECETTES[j].nom} »`);
    }
  }
}

if (process.argv.includes('--tableau')) {
  console.log('id'.padEnd(34), 'catégorie'.padEnd(20), 'kcal', '   P', '   G', '   L');
  lignes.forEach(([id, cat, k, p, g, l]) => console.log(id.padEnd(34), cat.padEnd(20), String(k).padStart(4), String(p).padStart(4), String(g).padStart(4), String(l).padStart(4)));
}

avertissements.forEach((a) => console.warn('⚠️ ', a));
erreurs.forEach((e) => console.error('❌', e));
console.log(`\n${RECETTES.length} recettes, ${Object.keys(INGREDIENTS).length} ingrédients — ${erreurs.length} erreur(s), ${avertissements.length} avertissement(s).`);
process.exit(erreurs.length ? 1 : 0);
