/* Données de l'application : recettes enrichies, données personnelles (favoris, notes, courses,
 * planning, objectifs, recettes et ingrédients perso), photos (IndexedDB), sauvegarde. */
(function () {
  'use strict';

  var U = window.U, M = window.Moteur;
  var D = window.D = {};

  // ---------- Données personnelles (localStorage) ----------
  var DEFAUTS = {
    favoris: [],
    portions: {},
    notes: {},                                   // id → { etoiles, texte }
    courses: { recettes: [], coches: {}, libres: [] },
    planning: {},                                // 'AAAA-MM-JJ' → { petitdej: [{ id, portions }], … }
    profil: null,
    mesRecettes: [],
    mesIngredients: {},
    frigo: { ingredients: [], basiques: true, quantites: {} },
    prix: { magasin: 'lidl', perso: {} }                 // magasin préféré, mes prix corrigés
  };
  Object.keys(DEFAUTS).forEach(function (cle) {
    D[cle] = U.lire('cuisine.' + cle, JSON.parse(JSON.stringify(DEFAUTS[cle])));
  });
  D.sauver = function (cle) { return U.ecrire('cuisine.' + cle, D[cle]); };

  Object.keys(D.mesIngredients).forEach(function (id) { window.INGREDIENTS[id] = D.mesIngredients[id]; });

  // ---------- Recettes enrichies ----------
  function preparer(r) {
    var a = M.analyser(r);
    var n = a.parPortion;
    var noms = r.ing.map(function (l) { var i = M.infos(l[0]); return (l[3] || '') + ' ' + (i ? i.nom : ''); }).join(' ');
    return Object.assign({}, r, {
      nutrition: a,
      temps: (r.prep || 0) + (r.cuisson || 0),
      proteine: n.kcal > 0 && n.p >= 25 && n.p * 4 / n.kcal >= 0.25,
      leger: n.kcal < 400,
      texte: U.normaliser([r.nom, r.cuisine, r.cat, r.desc, noms].join(' '))
    });
  }

  D.rafraichir = function () {
    D.recettes = window.RECETTES.concat(D.mesRecettes).map(preparer);
    D.parId = {};
    D.recettes.forEach(function (r) { D.parId[r.id] = r; });
    D.cuisines = Array.from(new Set(D.recettes.map(function (r) { return r.cuisine; })))
      .sort(function (a, b) { return a.localeCompare(b, 'fr'); });
  };
  D.rafraichir();

  D.estFavori = function (id) { return D.favoris.indexOf(id) !== -1; };
  D.basculerFavori = function (id) {
    var i = D.favoris.indexOf(id);
    if (i === -1) D.favoris.push(id); else D.favoris.splice(i, 1);
    D.sauver('favoris');
    return i === -1;
  };

  D.REGIMES = {
    vegetarien: { nom: 'Végétarien', test: function (r) { return r.nutrition.regimes.vegetarien; } },
    vegan: { nom: 'Vegan', test: function (r) { return r.nutrition.regimes.vegan; } },
    sansGluten: { nom: 'Sans gluten', test: function (r) { return r.nutrition.regimes.sansGluten; } },
    proteine: { nom: 'Riche en protéines', test: function (r) { return r.proteine; } },
    leger: { nom: 'Léger (< 400 kcal)', test: function (r) { return r.leger; } }
  };
  D.regimeOk = function (r, regime) { return !regime || D.REGIMES[regime].test(r); };

  // ---------- Recettes personnelles ----------
  D.enregistrerRecette = function (recette) {
    recette.perso = true;
    var i = D.mesRecettes.findIndex(function (r) { return r.id === recette.id; });
    if (i === -1) D.mesRecettes.push(recette); else D.mesRecettes[i] = recette;
    D.sauver('mesRecettes');
    D.rafraichir();
  };
  D.supprimerRecette = function (id) {
    D.mesRecettes = D.mesRecettes.filter(function (r) { return r.id !== id; });
    D.sauver('mesRecettes');
    D.favoris = D.favoris.filter(function (f) { return f !== id; });
    D.sauver('favoris');
    D.courses.recettes = D.courses.recettes.filter(function (e) { return e.id !== id; });
    D.sauver('courses');
    D.photos.supprimer(id);
    D.rafraichir();
  };
  D.ajouterIngredient = function (nom, rayon, valeurs, piece) {
    var id = 'perso_' + U.slug(nom).replace(/-/g, '_');
    while (window.INGREDIENTS[id]) id += '_' + U.aleatoire().slice(0, 2);
    var e = [nom, rayon].concat(valeurs);
    if (piece) e.push({ pc: piece });
    D.mesIngredients[id] = e;
    window.INGREDIENTS[id] = e;
    D.sauver('mesIngredients');
    return id;
  };

  // ---------- Objectifs nutritionnels ----------
  D.ACTIVITES = [
    [1.2, 'Sédentaire (peu ou pas de sport)'],
    [1.375, 'Légèrement actif (1 à 3 séances / semaine)'],
    [1.55, 'Actif (3 à 5 séances / semaine)'],
    [1.725, 'Très actif (6 à 7 séances / semaine)'],
    [1.9, 'Extrêmement actif (sport + travail physique)']
  ];
  D.BUTS = {
    perte: { nom: 'Perdre du poids (−20 %)', facteur: 0.8, proteines: 2.0 },
    maintien: { nom: 'Maintenir mon poids', facteur: 1, proteines: 1.6 },
    prise: { nom: 'Prendre du muscle (+10 %)', facteur: 1.1, proteines: 1.8 }
  };

  /* Métabolisme de base (Mifflin-St Jeor) × activité, ajusté selon l'objectif. */
  D.calculerCibles = function (p) {
    var mb = 10 * p.poids + 6.25 * p.taille - 5 * p.age + (p.sexe === 'h' ? 5 : -161);
    var depense = mb * p.activite;
    var but = D.BUTS[p.but] || D.BUTS.maintien;
    var kcal = depense * but.facteur;
    var proteines = p.poids * but.proteines;
    var lipides = Math.max(kcal * 0.3 / 9, p.poids * 0.8);
    var glucides = Math.max(0, (kcal - proteines * 4 - lipides * 9) / 4);
    return { kcal: Math.round(kcal), p: Math.round(proteines), g: Math.round(glucides), l: Math.round(lipides), mb: Math.round(mb), depense: Math.round(depense) };
  };

  /* Objectifs journaliers actifs (calculés ou saisis), ou null si aucun profil. */
  D.cibles = function () {
    var p = D.profil;
    if (!p) return null;
    if (p.manuel && p.cibles && p.cibles.kcal > 0) return p.cibles;
    if (p.poids && p.taille && p.age) return D.calculerCibles(p);
    return null;
  };

  /* Note d'adéquation d'une recette à un repas principal (plus c'est haut, mieux c'est). */
  D.adequation = function (r, part) {
    var c = D.cibles() || { kcal: 2000, p: 90 };
    var cibleKcal = c.kcal * (part || 0.33), cibleP = c.p * (part || 0.33);
    var n = r.nutrition.parPortion;
    if (!n.kcal) return -9;
    return Math.min(n.p / cibleP, 1.3) * 0.8 - Math.abs(n.kcal - cibleKcal) / cibleKcal;
  };

  // ---------- Planning ----------
  D.REPAS = [
    { id: 'petitdej', nom: 'Petit-déjeuner', emoji: '🥐', part: 0.25, cats: ['Petit-déjeuner'] },
    { id: 'dejeuner', nom: 'Déjeuner', emoji: '🍽️', part: 0.35, cats: null },
    { id: 'diner', nom: 'Dîner', emoji: '🌙', part: 0.3, cats: null },
    { id: 'collation', nom: 'Collation', emoji: '🍎', part: 0.1, cats: ['Petit-déjeuner', 'Desserts', 'Apéro'] }
  ];
  D.CATS_PLATS = ['Viandes', 'Volailles', 'Poissons', 'Végétarien', 'Pâtes & riz', 'Tartes & pizzas', 'Burgers & sandwichs', 'Soupes', 'Entrées & salades'];

  D.jour = function (iso) {
    if (!D.planning[iso]) D.planning[iso] = {};
    D.REPAS.forEach(function (r) { if (!D.planning[iso][r.id]) D.planning[iso][r.id] = []; });
    return D.planning[iso];
  };
  D.sauverPlanning = function () {
    Object.keys(D.planning).forEach(function (iso) {
      var j = D.planning[iso];
      if (D.REPAS.every(function (r) { return !j[r.id] || !j[r.id].length; })) delete D.planning[iso];
    });
    D.sauver('planning');
  };
  D.planifier = function (iso, repas, id, portions) {
    D.jour(iso)[repas].push({ id: id, portions: portions });
    D.sauverPlanning();
  };
  D.totauxJour = function (iso) {
    var t = { kcal: 0, p: 0, g: 0, l: 0, f: 0 };
    var j = D.planning[iso];
    if (!j) return t;
    D.REPAS.forEach(function (repas) {
      (j[repas.id] || []).forEach(function (e) {
        var r = D.parId[e.id];
        if (!r) return;
        Object.keys(t).forEach(function (k) { t[k] += r.nutrition.parPortion[k] * e.portions; });
      });
    });
    return t;
  };

  /* Remplit les repas vides d'une journée avec des recettes adaptées aux objectifs. */
  D.completerJour = function (iso, dejaPris) {
    var c = D.cibles() || { kcal: 2000, p: 90, g: 250, l: 70 };
    var regime = D.profil && D.profil.regime;
    var j = D.jour(iso);
    var ajoutes = 0;
    D.REPAS.forEach(function (repas) {
      if (j[repas.id].length) return;
      var cible = { kcal: c.kcal * repas.part, p: c.p * repas.part, g: c.g * repas.part, l: c.l * repas.part };
      var cats = repas.cats || D.CATS_PLATS;
      var candidats = D.recettes.filter(function (r) {
        var k = r.nutrition.parPortion.kcal;
        if (cats.indexOf(r.cat) === -1 || !D.regimeOk(r, regime) || dejaPris[r.id] || !k) return false;
        if (!repas.cats && k < 300) return false;               // un plat principal doit nourrir
        return k > cible.kcal * 0.4 && k < cible.kcal * 1.8;
      }).map(function (r) {
        var n = r.nutrition.parPortion;
        var portions = Math.min(2, Math.max(0.5, Math.round(cible.kcal / n.kcal * 2) / 2));
        // Distance aux cibles du repas (calories et macros), protéines en priorité.
        var ecart = Math.abs(n.kcal * portions - cible.kcal) / cible.kcal +
          0.8 * Math.max(0, cible.p - n.p * portions) / cible.p +
          0.4 * Math.abs(n.g * portions - cible.g) / cible.g +
          0.5 * Math.abs(n.l * portions - cible.l) / cible.l;
        return { r: r, portions: portions, score: -ecart + Math.random() * 0.3 };
      }).sort(function (a, b) { return b.score - a.score; });
      var choix = candidats[Math.floor(Math.random() * Math.min(5, candidats.length))];
      if (!choix) return;
      j[repas.id].push({ id: choix.r.id, portions: choix.portions });
      dejaPris[choix.r.id] = true;
      ajoutes++;
    });
    D.sauverPlanning();
    return ajoutes;
  };

  // ---------- Liste de courses ----------
  D.RAYONS = [
    { nom: 'Fruits & légumes', emoji: '🥬', rayons: ['legumes', 'fruits', 'herbes'] },
    { nom: 'Boucherie', emoji: '🥩', rayons: ['viande'] },
    { nom: 'Poissonnerie', emoji: '🐟', rayons: ['poisson'] },
    { nom: 'Crèmerie & œufs', emoji: '🧀', rayons: ['cremerie', 'oeufs'] },
    { nom: 'Pains, pâtes & féculents', emoji: '🍞', rayons: ['feculents'] },
    { nom: 'Épicerie', emoji: '🥫', rayons: ['epicerie'] },
    { nom: 'Condiments & sauces', emoji: '🫙', rayons: ['condiments'] },
    { nom: 'Épices', emoji: '🧂', rayons: ['epices'] }
  ];

  D.ajouterAuxCourses = function (id, portions, cumuler) {
    var e = D.courses.recettes.find(function (x) { return x.id === id; });
    if (e) e.portions = cumuler ? e.portions + portions : portions;
    else D.courses.recettes.push({ id: id, portions: portions });
    D.sauver('courses');
  };

  D.nombreCourses = function () { return D.courses.recettes.length + D.courses.libres.length; };

  /* Agrège les ingrédients de toutes les recettes de la liste, groupés par rayon. */
  D.listeCourses = function () {
    var agregat = {};
    D.courses.recettes.forEach(function (e) {
      var r = D.parId[e.id];
      if (!r) return;
      var f = e.portions / r.portions;
      r.ing.forEach(function (l) {
        var id = l[0], ing = M.infos(id);
        if (!ing || id === 'eau') return;
        var a = agregat[id] || (agregat[id] = { id: id, rayon: ing.rayon, parts: { pc: 0, g: 0, ml: 0, cc: 0 }, recettes: [] });
        if (a.recettes.indexOf(r.nom) === -1) a.recettes.push(r.nom);
        var q = l[1] * f;
        switch (l[2] || 'g') {
          case 'g': a.parts.g += q; break;
          case 'kg': a.parts.g += q * 1000; break;
          case 'ml': a.parts.ml += q; break;
          case 'cl': a.parts.ml += q * 10; break;
          case 'l': a.parts.ml += q * 1000; break;
          case 'pc': a.parts.pc += q; break;
          case 'cs': a.parts.cc += q * 3; break;
          case 'cc': a.parts.cc += q; break;
        }
      });
    });
    return D.RAYONS.map(function (groupe) {
      var articles = Object.keys(agregat).map(function (k) { return agregat[k]; })
        .filter(function (a) { return groupe.rayons.indexOf(a.rayon) !== -1; })
        .map(function (a) {
          var aff = M.afficherParties(a.id, a.parts);
          return { cle: a.id, nom: aff.nom, qte: aff.qte || 'selon besoin', recettes: a.recettes, parts: a.parts };
        })
        .sort(function (x, y) { return x.nom.localeCompare(y.nom, 'fr'); });
      return { nom: groupe.nom, emoji: groupe.emoji, articles: articles };
    }).filter(function (g) { return g.articles.length; });
  };

  // ---------- Photos (IndexedDB) ----------
  D.photos = (function () {
    var urls = {};
    var base = null;
    function ouvrir() {
      if (base) return base;
      base = new Promise(function (ok, ko) {
        if (!window.indexedDB) { ko(new Error('IndexedDB indisponible')); return; }
        var req = indexedDB.open('cuisine', 1);
        req.onupgradeneeded = function () { req.result.createObjectStore('photos'); };
        req.onsuccess = function () { ok(req.result); };
        req.onerror = function () { ko(req.error); };
      });
      return base;
    }
    function transaction(mode, action) {
      return ouvrir().then(function (db) {
        return new Promise(function (ok, ko) {
          var tx = db.transaction('photos', mode);
          var res = action(tx.objectStore('photos'));
          tx.oncomplete = function () { ok(res && res.result); };
          tx.onerror = function () { ko(tx.error); };
        });
      });
    }
    return {
      url: function (id) { return urls[id] || null; },
      charger: function () {
        return ouvrir().then(function (db) {
          return new Promise(function (ok) {
            var tx = db.transaction('photos', 'readonly');
            var req = tx.objectStore('photos').openCursor();
            req.onsuccess = function () {
              var c = req.result;
              if (!c) { ok(); return; }
              urls[c.key] = URL.createObjectURL(c.value);
              c.continue();
            };
            req.onerror = function () { ok(); };
          });
        }).catch(function () {});
      },
      enregistrer: function (id, blob) {
        return transaction('readwrite', function (s) { return s.put(blob, id); }).then(function () {
          if (urls[id]) URL.revokeObjectURL(urls[id]);
          urls[id] = URL.createObjectURL(blob);
        });
      },
      supprimer: function (id) {
        if (urls[id]) { URL.revokeObjectURL(urls[id]); delete urls[id]; }
        return transaction('readwrite', function (s) { return s.delete(id); }).catch(function () {});
      }
    };
  })();

  // ---------- Sauvegarde / restauration ----------
  D.exporter = function () {
    var donnees = { application: 'Ma Cuisine', version: 2, date: new Date().toISOString() };
    Object.keys(DEFAUTS).forEach(function (cle) { donnees[cle] = D[cle]; });
    return JSON.stringify(donnees, null, 1);
  };
  D.importer = function (texte) {
    var donnees = JSON.parse(texte);
    if (!donnees || donnees.application !== 'Ma Cuisine') throw new Error('Fichier non reconnu');
    Object.keys(DEFAUTS).forEach(function (cle) {
      if (donnees[cle] !== undefined) { D[cle] = donnees[cle]; D.sauver(cle); }
    });
  };
  D.toutEffacer = function () {
    Object.keys(DEFAUTS).concat(['minuteurs', 'photosAuto', 'reglages', 'batch']).forEach(function (cle) {
      try { localStorage.removeItem('cuisine.' + cle); } catch (e) { /* ignoré */ }
    });
    try { indexedDB.deleteDatabase('cuisine'); } catch (e) { /* ignoré */ }
  };
})();
