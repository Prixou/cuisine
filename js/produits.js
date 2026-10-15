/* Produits du commerce : recherche par code-barres dans Open Food Facts (base collaborative et libre,
 * plusieurs millions de produits, licence ODbL), cache local pour le hors-ligne, historique des scans. */
(function () {
  'use strict';

  var U = window.U;
  var API = 'https://world.openfoodfacts.org';
  var CHAMPS = ['code', 'product_name', 'product_name_fr', 'generic_name_fr', 'brands', 'quantity', 'image_front_small_url', 'image_front_url',
    'nutriscore_grade', 'nova_group', 'ecoscore_grade', 'nutriments', 'allergens_tags', 'traces_tags', 'labels_tags', 'additives_tags',
    'ingredients_text_fr', 'ingredients_text', 'serving_quantity', 'serving_size', 'categories_tags'].join(',');
  var CLE = 'cuisine.produits';
  var MAX_CACHE = 200;
  var FRAICHEUR = 30 * 24 * 3600 * 1000;   // une fiche de plus de 30 jours est rafraîchie si possible

  var P = window.Produits = {};

  function lire() { return U.lire(CLE, { cache: {}, historique: [] }); }
  function ecrire(d) { U.ecrire(CLE, d); }

  /* Garde les chiffres ; un code UPC-A (12 chiffres) devient un EAN-13. */
  P.normaliser = function (texte) {
    var c = String(texte || '').replace(/\D/g, '');
    return c.length === 12 ? '0' + c : c;
  };

  /* Clé de contrôle EAN-8 / EAN-13 / GTIN-14 : écarte les lectures erronées de la caméra. */
  P.valide = function (code) {
    if (!/^(\d{8}|\d{13}|\d{14})$/.test(code)) return false;
    var chiffres = code.split('').map(Number), cle = chiffres.pop(), somme = 0;
    chiffres.reverse().forEach(function (d, i) { somme += d * (i % 2 === 0 ? 3 : 1); });
    return (10 - somme % 10) % 10 === cle;
  };

  function nombre(v) { var n = parseFloat(v); return isFinite(n) ? n : null; }

  function nomAllergene(tag) {
    var noms = {
      'en:milk': 'lait', 'en:gluten': 'gluten', 'en:eggs': 'œufs', 'en:nuts': 'fruits à coque', 'en:peanuts': 'arachides', 'en:soybeans': 'soja',
      'en:fish': 'poisson', 'en:crustaceans': 'crustacés', 'en:molluscs': 'mollusques', 'en:celery': 'céleri', 'en:mustard': 'moutarde',
      'en:sesame-seeds': 'sésame', 'en:sulphur-dioxide-and-sulphites': 'sulfites', 'en:lupin': 'lupin'
    };
    return noms[tag] || tag.replace(/^\w+:/, '').replace(/-/g, ' ');
  }

  /* Fiche Open Food Facts → objet simple utilisé par l'application (valeurs pour 100 g ou 100 ml). */
  P.simplifier = function (p) {
    var n = p.nutriments || {};
    var kcal = nombre(n['energy-kcal_100g']);
    if (kcal === null && nombre(n.energy_100g) !== null) kcal = nombre(n.energy_100g) / 4.184;
    var labels = p.labels_tags || [];
    var allergenes = p.allergens_tags || [];
    return {
      code: p.code,
      nom: p.product_name_fr || p.product_name || p.generic_name_fr || 'Produit sans nom',
      marque: (p.brands || '').split(',')[0].trim(),
      quantite: p.quantity || '',
      image: p.image_front_small_url || '',
      imageGrande: p.image_front_url || p.image_front_small_url || '',
      nutriscore: /^[a-e]$/.test(p.nutriscore_grade) ? p.nutriscore_grade : null,
      nova: [1, 2, 3, 4].indexOf(Number(p.nova_group)) !== -1 ? Number(p.nova_group) : null,
      eco: /^[a-e]$/.test(p.ecoscore_grade) ? p.ecoscore_grade : null,
      n100: {
        kcal: kcal, p: nombre(n.proteins_100g), g: nombre(n.carbohydrates_100g), l: nombre(n.fat_100g), f: nombre(n.fiber_100g),
        sucres: nombre(n.sugars_100g), ags: nombre(n['saturated-fat_100g']), sel: nombre(n.salt_100g)
      },
      portionG: nombre(p.serving_quantity),
      portionTexte: p.serving_size || '',
      allergenes: allergenes.map(nomAllergene),
      traces: (p.traces_tags || []).map(nomAllergene),
      additifs: (p.additives_tags || []).map(function (t) { return t.replace(/^\w+:/, '').toUpperCase(); }),
      ingredients: p.ingredients_text_fr || p.ingredients_text || '',
      categories: p.categories_tags || [],
      lait: allergenes.indexOf('en:milk') !== -1,
      sansLactose: labels.some(function (l) { return /no-lactose|lactose-free|sans-lactose/.test(l); }),
      bio: labels.some(function (l) { return /organic|bio/.test(l); }),
      date: Date.now()
    };
  };

  /* Le produit a-t-il des valeurs nutritionnelles utilisables ? */
  P.complet = function (pr) { return pr && pr.n100.kcal !== null; };

  function memoriser(pr, dansHistorique) {
    var d = lire();
    d.cache[pr.code] = pr;
    if (dansHistorique) d.historique = [pr.code].concat(d.historique.filter(function (c) { return c !== pr.code; })).slice(0, 60);
    var codes = Object.keys(d.cache);
    if (codes.length > MAX_CACHE) {
      codes.sort(function (a, b) { return (d.cache[a].date || 0) - (d.cache[b].date || 0); })
        .slice(0, codes.length - MAX_CACHE)
        .forEach(function (c) { if (d.historique.indexOf(c) === -1) delete d.cache[c]; });
    }
    ecrire(d);
  }

  P.enCache = function (code) { return lire().cache[code] || null; };

  /* Produit par code-barres : le cache s'il est récent, sinon Open Food Facts (et le cache si le réseau manque).
     Résout null si le produit n'existe pas dans la base. */
  P.chercher = function (code, dansHistorique) {
    code = P.normaliser(code);
    var cache = P.enCache(code);
    if (cache && Date.now() - cache.date < FRAICHEUR) {
      if (dansHistorique) memoriser(cache, true);
      return Promise.resolve(cache);
    }
    return fetch(API + '/api/v2/product/' + encodeURIComponent(code) + '.json?fields=' + CHAMPS)
      .then(function (rep) {
        if (rep.status === 404) return { status: 0 };
        if (!rep.ok) throw new Error('HTTP ' + rep.status);
        return rep.json();
      })
      .then(function (json) {
        if (!json || json.status !== 1 || !json.product) return null;
        var pr = P.simplifier(Object.assign({ code: code }, json.product));
        memoriser(pr, dansHistorique);
        return pr;
      })
      .catch(function (e) {
        if (cache) return cache;
        throw e;
      });
  };

  /* Recherche par nom (produits vendus en France d'abord). */
  P.rechercher = function (texte) {
    var url = API + '/cgi/search.pl?action=process&json=1&search_simple=1&page_size=24&sort_by=unique_scans_n' +
      '&tagtype_0=countries&tag_contains_0=contains&tag_0=france&fields=' + CHAMPS + '&search_terms=' + encodeURIComponent(texte);
    return fetch(url).then(function (rep) {
      if (!rep.ok) throw new Error('HTTP ' + rep.status);
      return rep.json();
    }).then(function (json) {
      return (json.products || []).filter(function (p) { return p.code; }).map(P.simplifier);
    });
  };

  var RANG = { a: 1, b: 2, c: 3, d: 4, e: 5 };

  /* Alternatives mieux notées dans la catégorie la plus précise du produit. */
  P.alternatives = function (pr) {
    var cat = pr.categories[pr.categories.length - 1];
    if (!cat) return Promise.resolve([]);
    var url = API + '/cgi/search.pl?action=process&json=1&page_size=40&sort_by=unique_scans_n' +
      '&tagtype_0=categories&tag_contains_0=contains&tag_0=' + encodeURIComponent(cat) +
      '&tagtype_1=countries&tag_contains_1=contains&tag_1=france&fields=' + CHAMPS;
    var limite = pr.nutriscore ? RANG[pr.nutriscore] : 6;
    return fetch(url).then(function (rep) {
      if (!rep.ok) throw new Error('HTTP ' + rep.status);
      return rep.json();
    }).then(function (json) {
      return (json.products || []).map(P.simplifier).filter(function (x) {
        return x.code !== pr.code && x.nutriscore && RANG[x.nutriscore] < limite && P.complet(x);
      }).sort(function (a, b) { return RANG[a.nutriscore] - RANG[b.nutriscore]; }).slice(0, 8);
    });
  };

  P.historique = function () {
    var d = lire();
    return d.historique.map(function (c) { return d.cache[c]; }).filter(Boolean);
  };
  P.viderHistorique = function () { var d = lire(); d.historique = []; ecrire(d); };

  /* Valeurs pour une quantité en grammes (ou ml). */
  P.valeurs = function (pr, grammes) {
    var v = {};
    Object.keys(pr.n100).forEach(function (k) { v[k] = pr.n100[k] === null ? null : pr.n100[k] * grammes / 100; });
    return v;
  };

  P.urlFiche = function (code) { return 'https://fr.openfoodfacts.org/produit/' + encodeURIComponent(code); };
  P.urlAjout = function (code) { return 'https://fr.openfoodfacts.org/cgi/product.pl?type=search_or_add&action=process&code=' + encodeURIComponent(code); };

  P.NUTRISCORE = { a: 'Excellente qualité nutritionnelle', b: 'Bonne qualité nutritionnelle', c: 'Qualité nutritionnelle moyenne', d: 'Qualité nutritionnelle médiocre', e: 'Mauvaise qualité nutritionnelle' };
  P.NOVA = { 1: 'Aliment pas ou peu transformé', 2: 'Ingrédient culinaire transformé', 3: 'Aliment transformé', 4: 'Aliment ultra-transformé' };

  /* Repères « feux tricolores » pour 100 g (Food Standards Agency) : bas, moyen, élevé. */
  P.niveau = function (nutriment, v) {
    var seuils = { l: [3, 17.5], ags: [1.5, 5], sucres: [5, 22.5], sel: [0.3, 1.5] }[nutriment];
    if (!seuils || v === null) return '';
    return v <= seuils[0] ? 'bas' : v > seuils[1] ? 'eleve' : 'moyen';
  };
})();
