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
const scripts = tousScripts.filter((s) => /^js\/(ingredients|categories|moteur|recettes\/)/.test(s));
scripts.forEach(charger);

const { INGREDIENTS, RECETTES, Moteur, CATEGORIES } = contexte.window;
const erreurs = [];
const avertissements = [];

// Les fichiers de recettes présents sur le disque doivent tous être chargés par index.html
fs.readdirSync(path.join(racine, 'js/recettes')).forEach((f) => {
  if (!scripts.includes('js/recettes/' + f)) erreurs.push(`js/recettes/${f} n'est pas chargé dans index.html`);
});

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
  if (kcal > 20 && Math.abs(calcule - kcal) / kcal > 0.3 && !['vin_rouge', 'vin_blanc', 'biere'].includes(id)) {
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

if (process.argv.includes('--tableau')) {
  console.log('id'.padEnd(34), 'catégorie'.padEnd(20), 'kcal', '   P', '   G', '   L');
  lignes.forEach(([id, cat, k, p, g, l]) => console.log(id.padEnd(34), cat.padEnd(20), String(k).padStart(4), String(p).padStart(4), String(g).padStart(4), String(l).padStart(4)));
}

avertissements.forEach((a) => console.warn('⚠️ ', a));
erreurs.forEach((e) => console.error('❌', e));
console.log(`\n${RECETTES.length} recettes, ${Object.keys(INGREDIENTS).length} ingrédients — ${erreurs.length} erreur(s), ${avertissements.length} avertissement(s).`);
process.exit(erreurs.length ? 1 : 0);
