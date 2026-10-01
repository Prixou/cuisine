/* Mon stock : les ingrédients que j'ai chez moi, et ce qu'ils permettent de cuisiner. */
(function () {
  'use strict';

  var U = window.U, D = window.D, M = window.Moteur;
  var S = window.Stock = {};

  /* Ingrédients interchangeables : en avoir un compte pour les autres. */
  var FAMILLES = [
    ['pates', 'pates_completes'],
    ['riz_blanc', 'riz_arborio', 'riz_complet'],
    ['oignon', 'oignon_rouge'],
    ['lait_demi', 'lait_entier'],
    ['creme_30', 'creme_15', 'creme_epaisse'],
    ['yaourt_nature', 'yaourt_grec', 'skyr'],
    ['fromage_blanc_0', 'fromage_blanc_3'],
    ['emmental', 'comte', 'cheddar'],
    ['boeuf_hache_5', 'boeuf_hache_15'],
    ['boeuf_steak', 'boeuf_bavette'],
    ['poulet_blanc', 'poulet_cuisse', 'dinde_escalope'],
    ['tomate', 'tomates_cerises'],
    ['tomates_concassees', 'coulis_tomate'],
    ['huile_olive', 'huile_neutre'],
    ['citron', 'citron_vert'],
    ['sucre', 'cassonade'],
    ['pain', 'pain_campagne', 'pain_complet'],
    ['champignons', 'champignons_shiitake'],
    ['lentilles_vertes', 'lentilles_corail'],
    ['haricots_rouges', 'haricots_noirs'],
    ['pois_chiches', 'pois_chiches_secs'],
    ['cabillaud', 'poisson_blanc', 'bar'],
    ['chocolat_noir', 'chocolat_lait', 'pepites_chocolat'],
    ['salade', 'roquette'],
    ['chou', 'chou_rouge'],
    ['agneau_epaule', 'agneau_gigot'],
    ['porc_filet', 'porc_echine', 'porc_cote'],
    ['lardons', 'poitrine_fumee'],
    ['jambon_blanc', 'jambon_cru'],
    ['fruits_rouges', 'fraises', 'myrtilles'],
    ['vinaigre', 'vinaigre_balsamique', 'vinaigre_riz'],
    ['lait_amande', 'lait_soja']
  ];
  var famille = {};
  FAMILLES.forEach(function (f) { f.forEach(function (id) { famille[id] = f; }); });

  /* Ce que presque tout le monde a : compté comme présent si l'option est cochée. */
  var BASIQUES = ['sel', 'poivre', 'huile_olive', 'huile_neutre', 'sucre', 'farine', 'vinaigre'];

  /* Où l'on range les ingrédients chez soi. */
  S.ZONES = [
    { id: 'frigo', nom: 'Frigo & congélateur', emoji: '🧊', rayons: ['viande', 'poisson', 'cremerie', 'oeufs'] },
    { id: 'frais', nom: 'Fruits, légumes & herbes', emoji: '🥕', rayons: ['legumes', 'fruits', 'herbes'] },
    { id: 'placard', nom: 'Placard', emoji: '🥫', rayons: ['feculents', 'epicerie'] },
    { id: 'condiments', nom: 'Huiles, sauces & condiments', emoji: '🫙', rayons: ['condiments'] },
    { id: 'epices', nom: 'Épices', emoji: '🧂', rayons: ['epices'] }
  ];
  var zoneDuRayon = {};
  S.ZONES.forEach(function (z) { z.rayons.forEach(function (r) { zoneDuRayon[r] = z.id; }); });
  S.zone = function (id) { var i = M.infos(id); return i ? zoneDuRayon[i.rayon] : null; };

  /* Kits pour remplir son stock en quelques touches. */
  S.KITS = [
    { id: 'placard', nom: 'Placard de base', emoji: '🥫', ids: ['sel', 'poivre', 'huile_olive', 'huile_neutre', 'vinaigre', 'farine', 'sucre', 'pates', 'riz_blanc', 'moutarde', 'concentre_tomate', 'tomates_concassees', 'bouillon', 'levure_chimique', 'maizena', 'miel', 'sauce_soja', 'lentilles_vertes', 'pois_chiches'] },
    { id: 'epices', nom: 'Épices courantes', emoji: '🧂', ids: ['cumin', 'paprika', 'curry', 'curcuma', 'cannelle', 'muscade', 'herbes_provence', 'origan', 'thym', 'laurier', 'piment_poudre', 'gingembre_poudre'] },
    { id: 'frigo', nom: 'Frigo classique', emoji: '🧊', ids: ['oeuf', 'beurre', 'lait_demi', 'creme_15', 'emmental', 'parmesan', 'yaourt_nature', 'jambon_blanc', 'lardons'] },
    { id: 'legumes', nom: 'Légumes de base', emoji: '🧅', ids: ['oignon', 'ail', 'echalote', 'carotte', 'pomme_de_terre', 'tomate', 'citron', 'persil'] },
    { id: 'petitdej', nom: 'Petit-déjeuner', emoji: '🥣', ids: ['flocons_avoine', 'banane', 'pain', 'confiture', 'cafe', 'lait_demi', 'miel'] }
  ];

  function f() {
    var x = D.frigo;
    if (!x.ingredients) x.ingredients = [];
    if (!x.quantites) x.quantites = {};
    if (x.basiques === undefined) x.basiques = true;
    return x;
  }
  function sauver() { D.sauver('frigo'); }

  S.liste = function () { return f().ingredients.slice(); };
  S.nombre = function () { return f().ingredients.length; };
  S.possede = function (id) { return f().ingredients.indexOf(id) !== -1; };
  S.basiques = function () { return f().basiques; };
  S.definirBasiques = function (oui) { f().basiques = !!oui; sauver(); };
  S.nom = function (id) { var i = M.infos(id); return i ? i.nom : id; };

  S.estBasique = function (id) {
    if (id === 'eau') return true;
    if (!f().basiques) return false;
    var i = M.infos(id);
    return BASIQUES.indexOf(id) !== -1 || !!(i && i.rayon === 'epices');
  };

  /* L'ingrédient du stock qui répond au besoin (lui-même ou un équivalent), sinon null. */
  S.source = function (id) {
    if (S.possede(id)) return id;
    var fam = famille[id];
    if (!fam) return null;
    for (var i = 0; i < fam.length; i++) if (S.possede(fam[i])) return fam[i];
    return null;
  };

  S.ajouter = function (ids) {
    var x = f(), n = 0;
    [].concat(ids).forEach(function (id) {
      if (window.INGREDIENTS[id] && x.ingredients.indexOf(id) === -1) { x.ingredients.push(id); n++; }
    });
    if (n) sauver();
    return n;
  };
  S.retirer = function (ids) {
    var x = f();
    [].concat(ids).forEach(function (id) { delete x.quantites[id]; });
    x.ingredients = x.ingredients.filter(function (id) { return [].concat(ids).indexOf(id) === -1; });
    sauver();
  };
  S.vider = function () { var x = f(); x.ingredients = []; x.quantites = {}; sauver(); };

  // ---------- Quantités (facultatives) ----------

  /* Unités proposées pour un ingrédient : pièces s'il a un poids unitaire, ml pour les liquides. */
  /* La première est celle proposée par défaut : pièces pour ce qui se compte (œufs, fruits, légumes, pots…),
     ml pour les liquides, grammes sinon. */
  S.unites = function (id) {
    var i = M.infos(id);
    if (!i) return ['g'];
    var liquide = /^(lait|creme_(15|30)|huile|vinaigre|sauce_|bouillon|jus_|vin_|biere|cidre|lait_coco|alcool)/.test(id);
    var compte = i.pc && (['oeufs', 'fruits', 'legumes'].indexOf(i.rayon) !== -1 || i.u);
    var u = [];
    if (compte) u.push('pc');
    if (liquide) u.push('ml');
    u.push('g');
    if (i.pc && u.indexOf('pc') === -1) u.push('pc');
    return u;
  };
  S.quantite = function (id) { return f().quantites[id] || null; };
  S.definirQuantite = function (id, q, u) {
    var x = f();
    if (q > 0) x.quantites[id] = { q: q, u: u };
    else delete x.quantites[id];
    sauver();
  };
  function enGrammes(id, q, u) {
    var i = M.infos(id);
    if (!i) return null;
    if (u === 'g') return q;
    if (u === 'ml') return q * (i.d || 1);
    if (u === 'pc') return i.pc ? q * i.pc : null;
    return null;
  }
  function depuisGrammes(id, g, u) {
    var i = M.infos(id);
    if (u === 'ml') return g / (i.d || 1);
    if (u === 'pc') return g / i.pc;
    return g;
  }
  /* Grammes en stock, ou null si la quantité n'est pas suivie (on suppose qu'il y en a assez). */
  S.grammes = function (id) {
    var q = S.quantite(id);
    return q ? enGrammes(id, q.q, q.u) : null;
  };
  S.texteQuantite = function (id) {
    var q = S.quantite(id);
    return q ? S.formater(id, q.q, q.u) : '';
  };
  S.formater = function (id, valeur, unite) {
    var q = { q: valeur, u: unite };
    var i = M.infos(id);
    var n = Math.round(q.q * 10) / 10;
    if (q.u === 'pc') return String(n).replace('.', ',') + ' ' + (i && i.u ? (n > 1 ? i.u[1] : i.u[0]) : (n > 1 ? 'pièces' : 'pièce'));
    if (q.u === 'ml') return n >= 1000 ? String(Math.round(n / 100) / 10).replace('.', ',') + ' L' : Math.round(n) + ' ml';
    return n >= 1000 ? String(Math.round(n / 100) / 10).replace('.', ',') + ' kg' : Math.round(n) + ' g';
  };

  /* Besoins d'une recette par portion, en grammes, hors basiques et « selon goût ». */
  function besoins(r) {
    var b = {}, ordre = [];
    r.ing.forEach(function (l) {
      var id = l[0];
      if ((l[2] || 'g') === 'qs' || !window.INGREDIENTS[id] || S.estBasique(id)) return;
      if (!(id in b)) { b[id] = 0; ordre.push(id); }
      b[id] += M.versGrammes(l, 1 / r.portions);
    });
    return { parPortion: b, ids: ordre };
  }

  /* Ce que la recette demande et ce qui manque.
     maxPortions : portions possibles avec les quantités suivies (Infinity si aucune n'est suivie). */
  S.analyser = function (r) {
    var b = besoins(r);
    var manquants = [], insuffisants = [], frais = 0, max = Infinity;
    b.ids.forEach(function (id) {
      var src = S.source(id);
      if (!src) { manquants.push(id); return; }
      var z = S.zone(src);
      if (z === 'frigo' || z === 'frais') frais++;
      var g = S.grammes(src), besoin = b.parPortion[id];
      if (g === null || !besoin) return;
      var possible = g / besoin;
      if (possible < 1) { manquants.push(id); insuffisants.push(id); } else max = Math.min(max, possible);
    });
    return {
      requis: b.ids.length, presents: b.ids.length - manquants.length,
      manquants: manquants, insuffisants: insuffisants, frais: frais,
      maxPortions: max === Infinity ? Infinity : Math.floor(max + 1e-9)
    };
  };

  /* Après avoir cuisiné : retire les quantités suivies. Renvoie les ingrédients du stock utilisés. */
  S.utilises = function (r, portions) {
    var b = besoins(r), res = [];
    b.ids.forEach(function (id) {
      var src = S.source(id);
      if (!src || res.some(function (x) { return x.id === src; })) return;
      var q = S.quantite(src), g = S.grammes(src);
      var reste = null;
      if (q && g !== null) {
        var besoin = b.parPortion[id] * portions;
        reste = Math.max(0, depuisGrammes(src, g - besoin, q.u));
      }
      res.push({ id: src, suivi: !!q, reste: reste, unite: q ? q.u : null });
    });
    return res;
  };
  S.consommer = function (utilises, finis) {
    var x = f();
    utilises.forEach(function (e) {
      if (finis.indexOf(e.id) !== -1) return;
      if (e.suivi) {
        if (e.reste > 0.01) x.quantites[e.id] = { q: e.reste, u: e.unite };
        else delete x.quantites[e.id];
      }
    });
    x.ingredients = x.ingredients.filter(function (id) { return finis.indexOf(id) === -1; });
    finis.forEach(function (id) { delete x.quantites[id]; });
    sauver();
  };

  /* Rangement des courses : ajoute les articles achetés, et leur quantité si elle est déjà suivie. */
  S.ranger = function (id, parts) {
    var x = f();
    var i = M.infos(id);
    if (!i) return false;
    var nouveau = x.ingredients.indexOf(id) === -1;
    if (nouveau) x.ingredients.push(id);
    var q = x.quantites[id];
    if (q && parts) {
      var g = (parts.g || 0) + (parts.ml || 0) * (i.d || 1) + (parts.pc || 0) * (i.pc || 0) + (parts.cc || 0) * 5 * (i.d || 1);
      if (g > 0) q.q += depuisGrammes(id, g, q.u);
    }
    sauver();
    return nouveau;
  };

  /* Nombre de recettes qui utilisent chaque ingrédient : sert à proposer les plus utiles d'abord. */
  var popularite = null;
  S.popularite = function (id) {
    if (!popularite) {
      popularite = {};
      D.recettes.forEach(function (r) {
        var vus = {};
        r.ing.forEach(function (l) { if (!vus[l[0]]) { vus[l[0]] = 1; popularite[l[0]] = (popularite[l[0]] || 0) + 1; } });
      });
    }
    return popularite[id] || 0;
  };

  /* Recherche d'ingrédients par nom (sans accents, tous les mots). */
  S.chercher = function (texte, limite) {
    var mots = U.normaliser(texte).split(/\s+/).filter(Boolean);
    if (!mots.length) return [];
    return Object.keys(window.INGREDIENTS).filter(function (id) {
      if (id === 'eau') return false;
      var n = U.normaliser(S.nom(id));
      return mots.every(function (m) { return n.indexOf(m) !== -1; });
    }).sort(function (a, b) {
      var na = U.normaliser(S.nom(a)), nb = U.normaliser(S.nom(b));
      var q = mots.join(' ');
      return (nb === q) - (na === q) || S.popularite(b) - S.popularite(a) || na.length - nb.length;
    }).slice(0, limite || 10);
  };
})();
