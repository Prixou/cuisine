/* Budget : prix des articles chez Lidl et E.Leclerc, coût de la liste de courses et des recettes. */
(function () {
  'use strict';

  var D = window.D, M = window.Moteur, P = window.PRIX;
  var B = window.Budget = {};

  B.MAGASINS = ['lidl', 'leclerc'];
  B.nomMagasin = function (m) { return P.magasins[m] || m; };
  B.magasin = function () { return B.MAGASINS.indexOf(D.prix.magasin) !== -1 ? D.prix.magasin : 'lidl'; };
  B.definirMagasin = function (m) { D.prix.magasin = m; D.sauver('prix'); };

  /* Prix d'un ingrédient (mes corrections d'abord) : { lidl, leclerc, qte, unite, libelle, perso } ou null. */
  B.produit = function (id) {
    var perso = D.prix.perso && D.prix.perso[id];
    var base = P.produits[id];
    if (!perso && !base) return null;
    var p = base ? { lidl: base[0], leclerc: base[1], qte: base[2], unite: base[3], libelle: base[4] } : {};
    if (perso) Object.keys(perso).forEach(function (k) { p[k] = perso[k]; });
    p.perso = !!perso;
    return p.qte > 0 && (p.lidl > 0 || p.leclerc > 0) ? p : null;
  };

  B.corriger = function (id, valeurs) {
    if (!D.prix.perso) D.prix.perso = {};
    if (valeurs) D.prix.perso[id] = valeurs; else delete D.prix.perso[id];
    D.sauver('prix');
    cacheRecettes = {};
  };

  B.libelleUnite = function (p) {
    if (p.unite === 'kg') return 'au kilo';
    return p.libelle || (p.qte + ' ' + p.unite);
  };

  /* Poids (g) d'un paquet ; null si on ne sait pas convertir. */
  function grammesPaquet(id, p) {
    var i = M.infos(id);
    if (!i) return null;
    switch (p.unite) {
      case 'kg': return 1000;
      case 'g': return p.qte;
      case 'ml': return p.qte * (i.d || 1);
      case 'pc': return i.pc ? p.qte * i.pc : null;
    }
    return null;
  }

  /* Quantités cumulées de la liste de courses { g, ml, pc, cc } → grammes. */
  B.grammes = function (id, parts) {
    var i = M.infos(id);
    if (!i || !parts) return 0;
    return (parts.g || 0) + (parts.ml || 0) * (i.d || 1) + (parts.pc || 0) * (i.pc || 0) + (parts.cc || 0) * 5 * (i.d || 1);
  };

  /* Prix d'un article pour un besoin donné (g) dans un magasin.
     caisse : ce qu'on paie (paquets entiers, ou au poids) ; utilise : la part réellement utilisée.
     approx : prix pris dans l'autre magasin faute de mieux. */
  B.article = function (id, besoin, magasin) {
    var p = B.produit(id);
    if (!p) return null;
    var autre = magasin === 'lidl' ? 'leclerc' : 'lidl';
    var prix = p[magasin] > 0 ? p[magasin] : p[autre];
    var approx = !(p[magasin] > 0);
    var paquet = grammesPaquet(id, p);
    if (!paquet) return { caisse: prix, utilise: prix, paquets: 1, approx: approx, produit: p };
    if (p.unite === 'kg') {
      var c = Math.max(besoin, 0) / 1000 * prix;
      return { caisse: c, utilise: c, paquets: 0, poids: besoin, approx: approx, produit: p };
    }
    // Une petite marge : 520 g demandés pour un paquet de 500 g, on prend un seul paquet.
    var n = besoin > 0 ? Math.max(1, Math.ceil(besoin / paquet - 0.1)) : 1;
    return { caisse: n * prix, utilise: besoin > 0 ? besoin / paquet * prix : 0, paquets: n, approx: approx, produit: p };
  };

  /* Totaux pour une liste d'articles [{ cle, parts }] dans chaque magasin. */
  B.totaux = function (articles) {
    var t = {};
    B.MAGASINS.forEach(function (m) {
      var r = { caisse: 0, utilise: 0, approx: 0, inconnus: 0 };
      articles.forEach(function (a) {
        var x = B.article(a.cle, B.grammes(a.cle, a.parts), m);
        if (!x) { r.inconnus++; return; }
        r.caisse += x.caisse; r.utilise += x.utilise;
        if (x.approx) r.approx++;
      });
      t[m] = r;
    });
    return t;
  };

  /* Coût d'une recette au prorata des quantités utilisées (le reste des paquets sert ailleurs). */
  var cacheRecettes = {};
  B.coutRecette = function (r, magasin) {
    magasin = magasin || B.magasin();
    var cache = cacheRecettes[magasin] || (cacheRecettes[magasin] = new WeakMap());
    if (cache.has(r)) return cache.get(r);
    var total = 0, inconnus = 0;
    r.ing.forEach(function (l) {
      if ((l[2] || 'g') === 'qs' || l[0] === 'eau') return;
      var x = B.article(l[0], M.versGrammes(l, 1), magasin);
      if (!x) { inconnus++; return; }
      total += x.utilise;
    });
    var res = { total: total, parPortion: total / r.portions, inconnus: inconnus };
    cache.set(r, res);
    return res;
  };

  B.euros = function (v) {
    return (Math.round(v * 100) / 100).toFixed(2).replace('.', ',') + ' €';
  };
})();
