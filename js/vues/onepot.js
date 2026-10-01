/* Vue : one pot — recettes en un seul récipient, groupées par ustensile. */
(function () {
  'use strict';

  var U = window.U, D = window.D, C = window.Commun, O = window.ONE_POT;
  var etat = { style: '', rapide: false };

  function recettes() {
    return D.recettes.filter(function (r) {
      var x = O.RECETTES[r.id];
      if (!x) return false;
      if (etat.style && x[1] !== etat.style) return false;
      if (etat.rapide && r.temps > 30) return false;
      return true;
    }).sort(function (a, b) {
      // Les recettes tendance d'abord, puis par nom.
      return (b.cuisine === 'One pot') - (a.cuisine === 'One pot') || a.nom.localeCompare(b.nom, 'fr');
    });
  }

  function badge(r) {
    var x = O.RECETTES[r.id];
    return '<p class="onepot-tags"><span class="badge ' + (x[1] === 'healthy' ? 'badge-vege">🥗 Healthy' : 'badge-gourmand">🧀 Gourmand') + '</span>' +
      (r.cuisine === 'One pot' ? '<span class="badge badge-tendance">🔥 Tendance</span>' : '') + '</p>';
  }

  window.Vues.onepot = function (app) {
    document.title = 'One pot · Ma Cuisine';

    function rendre() {
      var liste = recettes();
      var tous = Object.keys(O.RECETTES).filter(function (id) { return D.parId[id]; });
      var compte = function (style) { return tous.filter(function (id) { return !style || O.RECETTES[id][1] === style; }).length; };
      var puce = function (style, nom) {
        return '<button class="puce' + (etat.style === style ? ' active' : '') + '" data-style="' + style + '">' + nom + ' <small>' + compte(style) + '</small></button>';
      };

      app.innerHTML =
        '<header class="page-entete">' +
          '<h1>🍲 One pot</h1>' +
          '<p>Tout le repas dans une seule casserole, une poêle, une plaque ou un plat : moins de vaisselle, autant de goût. Les recettes tendance du moment, healthy ou gourmandes.</p>' +
        '</header>' +
        '<nav class="puces" aria-label="Style">' +
          puce('', 'Toutes') + puce('healthy', '🥗 Healthy') + puce('gourmand', '🧀 Gourmandes') +
          '<button class="puce' + (etat.rapide ? ' active' : '') + '" data-rapide>⚡ 30 min max</button>' +
        '</nav>' +
        '<p class="stock-bilan">' + U.pluriel(liste.length, 'recette') + '</p>' +
        O.USTENSILES.map(function (u) {
          var rs = liste.filter(function (r) { return O.RECETTES[r.id][0] === u.id; });
          if (!rs.length) return '';
          return '<section class="onepot-groupe"><h2 class="section-titre">' + u.emoji + ' ' + U.esc(u.nom) + ' <small>' + rs.length + '</small></h2>' +
            C.grille(rs, badge) + '</section>';
        }).join('') +
        (liste.length ? '' : '<div class="vide"><p>Aucune recette avec ces filtres.</p></div>') +
        '<section class="bloc"><h2>Les secrets du one pot</h2><ul class="batch-regles">' + O.CONSEILS.map(function (c) {
          return '<li><span aria-hidden="true">' + c[0] + '</span><div><b>' + U.esc(c[1]) + '</b><p>' + U.esc(c[2]) + '</p></div></li>';
        }).join('') + '</ul></section>';

      app.querySelectorAll('[data-style]').forEach(function (b) {
        b.addEventListener('click', function () { etat.style = b.dataset.style; rendre(); });
      });
      app.querySelector('[data-rapide]').addEventListener('click', function () { etat.rapide = !etat.rapide; rendre(); });
    }

    rendre();
    window.scrollTo(0, 0);
  };
})();
