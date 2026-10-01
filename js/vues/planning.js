/* Vue : planning des repas de la semaine, totaux journaliers face aux objectifs. */
(function () {
  'use strict';

  var U = window.U, D = window.D, C = window.Commun;

  function jauge(nom, valeur, cible, classe, unite) {
    return '<div class="jauge-ligne"><span class="jauge-nom">' + nom + '</span>' + C.barre(valeur, cible, classe) +
      '<span class="jauge-valeur">' + U.r(valeur) + (cible ? ' / ' + cible : '') + ' ' + unite + '</span></div>';
  }

  window.Vues.planning = function (app, params) {
    var choisi = params[0] && /^\d{4}-\d{2}-\d{2}$/.test(params[0]) ? U.depuisIso(params[0]) : U.aujourdhui();
    var iso = U.iso(choisi);
    var lundi = U.lundi(choisi);
    var semaine = [];
    for (var i = 0; i < 7; i++) semaine.push(U.ajouterJours(lundi, i));
    var isoAujourdhui = U.iso(U.aujourdhui());
    var cibles = D.cibles();
    document.title = 'Planning · Ma Cuisine';

    function aller(d) { location.hash = '#/planning/' + U.iso(d); }

    function rendre() {
      var jour = D.jour(iso);
      var t = D.totauxJour(iso);

      app.innerHTML =
        '<div class="page-entete"><h1>📅 Planning des repas</h1></div>' +
        '<div class="semaine-nav">' +
          '<button class="rond" data-semaine="-7" aria-label="Semaine précédente">‹</button>' +
          '<span>Semaine du ' + U.date(lundi, { day: 'numeric', month: 'long' }) + '</span>' +
          '<button class="rond" data-semaine="7" aria-label="Semaine suivante">›</button>' +
          (U.iso(U.lundi(U.aujourdhui())) !== U.iso(lundi) ? '<button class="lien" data-aujourdhui>Aujourd\'hui</button>' : '') +
        '</div>' +
        '<div class="jours">' + semaine.map(function (d) {
          var k = U.iso(d), kcal = D.totauxJour(k).kcal;
          return '<button class="jour' + (k === iso ? ' actif' : '') + (k === isoAujourdhui ? ' aujourdhui' : '') + '" data-jour="' + k + '">' +
            '<span>' + U.date(d, { weekday: 'short' }).replace('.', '') + '</span><b>' + d.getDate() + '</b>' +
            '<small>' + (kcal ? U.r(kcal) : '—') + '</small></button>';
        }).join('') + '</div>' +

        '<section class="bloc">' +
          '<div class="jour-titre"><h2>' + U.date(choisi, { weekday: 'long', day: 'numeric', month: 'long' }) + '</h2>' +
            '<div class="jour-actions"><button class="bouton bouton-petit" data-completer-jour>✨ Compléter la journée</button>' +
            '<button class="bouton bouton-petit bouton-danger-doux" data-vider-jour>Vider</button></div></div>' +
          '<div class="jauges">' +
            jauge('Calories', t.kcal, cibles && cibles.kcal, 'j-kcal', 'kcal') +
            jauge('Protéines', t.p, cibles && cibles.p, 'j-p', 'g') +
            jauge('Glucides', t.g, cibles && cibles.g, 'j-g', 'g') +
            jauge('Lipides', t.l, cibles && cibles.l, 'j-l', 'g') +
          '</div>' +
          (cibles ? '' : '<p class="aide"><a href="#/profil">🎯 Définissez vos objectifs</a> pour comparer chaque journée à vos besoins et générer des menus adaptés.</p>') +
          D.REPAS.map(function (repas) {
            var entrees = jour[repas.id];
            var kcal = entrees.reduce(function (s, e) { var r = D.parId[e.id]; return s + (r ? r.nutrition.parPortion.kcal * e.portions : 0); }, 0);
            return '<div class="repas">' +
              '<div class="repas-titre"><h3>' + repas.emoji + ' ' + repas.nom + '</h3><span>' + (kcal ? U.r(kcal) + ' kcal' : '') + '</span></div>' +
              '<ul>' + entrees.map(function (e, i) {
                var r = D.parId[e.id];
                if (!r) return '<li class="repas-ligne"><span>Recette supprimée</span><button data-retirer="' + repas.id + ':' + i + '" aria-label="Retirer">✕</button></li>';
                return '<li class="repas-ligne"><a href="#/recette/' + encodeURIComponent(r.id) + '">' + U.esc(r.emoji) + ' ' + U.esc(r.nom) + '</a>' +
                  '<div class="mini-portions"><button data-delta="' + repas.id + ':' + i + ':-0.5" aria-label="Moins">−</button>' +
                  '<span>' + U.pluriel(e.portions, 'portion') + '</span>' +
                  '<button data-delta="' + repas.id + ':' + i + ':0.5" aria-label="Plus">+</button>' +
                  '<span class="repas-kcal">' + U.r(r.nutrition.parPortion.kcal * e.portions) + ' kcal</span>' +
                  '<button data-retirer="' + repas.id + ':' + i + '" aria-label="Retirer">✕</button></div></li>';
              }).join('') + '</ul>' +
              '<button class="lien" data-ajouter="' + repas.id + '">＋ Ajouter</button></div>';
          }).join('') +
        '</section>' +

        '<section class="bloc">' +
          '<h2>Semaine</h2>' +
          '<div class="tableau-defilant"><table class="tableau-semaine"><thead><tr><th></th><th>kcal</th><th>Prot.</th><th>Gluc.</th><th>Lip.</th></tr></thead><tbody>' +
          semaine.map(function (d) {
            var x = D.totauxJour(U.iso(d));
            return '<tr' + (U.iso(d) === iso ? ' class="actif"' : '') + '><th>' + U.date(d, { weekday: 'short', day: 'numeric' }) + '</th>' +
              '<td>' + (x.kcal ? U.r(x.kcal) : '—') + '</td><td>' + (x.kcal ? U.r(x.p) + ' g' : '') + '</td><td>' + (x.kcal ? U.r(x.g) + ' g' : '') + '</td><td>' + (x.kcal ? U.r(x.l) + ' g' : '') + '</td></tr>';
          }).join('') +
          (cibles ? '<tr class="cible"><th>Objectif</th><td>' + cibles.kcal + '</td><td>' + cibles.p + ' g</td><td>' + cibles.g + ' g</td><td>' + cibles.l + ' g</td></tr>' : '') +
          '</tbody></table></div>' +
          '<div class="actions-bas">' +
            '<button class="bouton bouton-principal" data-completer-semaine>✨ Compléter la semaine</button>' +
            '<button class="bouton" data-courses-semaine>🛒 Ajouter la semaine aux courses</button>' +
            '<button class="bouton bouton-danger-doux" data-vider-semaine>Vider la semaine</button>' +
          '</div>' +
        '</section>';

      // Navigation
      app.querySelectorAll('[data-semaine]').forEach(function (b) {
        b.addEventListener('click', function () { aller(U.ajouterJours(choisi, Number(b.dataset.semaine))); });
      });
      var auj = app.querySelector('[data-aujourdhui]');
      if (auj) auj.addEventListener('click', function () { aller(U.aujourdhui()); });
      app.querySelectorAll('[data-jour]').forEach(function (b) {
        b.addEventListener('click', function () { location.hash = '#/planning/' + b.dataset.jour; });
      });

      // Repas
      app.querySelectorAll('[data-ajouter]').forEach(function (b) {
        b.addEventListener('click', function () {
          var repas = D.REPAS.find(function (x) { return x.id === b.dataset.ajouter; });
          C.choisirRecette(repas.emoji + ' ' + repas.nom, repas.cats || D.CATS_PLATS, function (r) {
            D.planifier(iso, repas.id, r.id, 1);
            rendre();
          });
        });
      });
      app.querySelectorAll('[data-delta]').forEach(function (b) {
        b.addEventListener('click', function () {
          var p = b.dataset.delta.split(':');
          var e = jour[p[0]][Number(p[1])];
          e.portions = Math.max(0.5, e.portions + Number(p[2]));
          D.sauverPlanning();
          rendre();
        });
      });
      app.querySelectorAll('[data-retirer]').forEach(function (b) {
        b.addEventListener('click', function () {
          var p = b.dataset.retirer.split(':');
          jour[p[0]].splice(Number(p[1]), 1);
          D.sauverPlanning();
          rendre();
        });
      });

      // Génération et actions
      function dejaPrisSemaine() {
        var pris = {};
        semaine.forEach(function (d) {
          var j = D.planning[U.iso(d)];
          if (j) D.REPAS.forEach(function (r) { (j[r.id] || []).forEach(function (e) { pris[e.id] = true; }); });
        });
        return pris;
      }
      app.querySelector('[data-completer-jour]').addEventListener('click', function () {
        var n = D.completerJour(iso, dejaPrisSemaine());
        U.toast(n ? U.pluriel(n, 'repas ajouté', 'repas ajoutés') : 'La journée est déjà complète');
        rendre();
      });
      app.querySelector('[data-completer-semaine]').addEventListener('click', function () {
        var pris = dejaPrisSemaine(), n = 0;
        semaine.forEach(function (d) { n += D.completerJour(U.iso(d), pris); });
        U.toast(n ? U.pluriel(n, 'repas ajouté', 'repas ajoutés') : 'La semaine est déjà complète');
        rendre();
      });
      app.querySelector('[data-vider-jour]').addEventListener('click', function () {
        delete D.planning[iso];
        D.sauverPlanning();
        rendre();
      });
      app.querySelector('[data-vider-semaine]').addEventListener('click', function () {
        U.confirmer('Vider tous les repas de cette semaine ?', 'Vider', function () {
          semaine.forEach(function (d) { delete D.planning[U.iso(d)]; });
          D.sauverPlanning();
          rendre();
        });
      });
      app.querySelector('[data-courses-semaine]').addEventListener('click', function () {
        var parRecette = {};
        semaine.forEach(function (d) {
          var j = D.planning[U.iso(d)];
          if (j) D.REPAS.forEach(function (r) {
            (j[r.id] || []).forEach(function (e) { if (D.parId[e.id]) parRecette[e.id] = (parRecette[e.id] || 0) + e.portions; });
          });
        });
        var ids = Object.keys(parRecette);
        if (!ids.length) { U.toast('Aucun repas planifié cette semaine'); return; }
        var foyer = (D.profil && D.profil.foyer) || 1;
        U.modal('Ajouter la semaine aux courses',
          '<p>' + U.pluriel(ids.length, 'recette') + ' planifiée' + (ids.length > 1 ? 's' : '') + ' cette semaine.</p>' +
          '<label class="champ-groupe"><span>Pour combien de personnes ?</span><input class="champ" type="number" min="1" max="20" value="' + foyer + '" data-foyer></label>' +
          '<p class="aide">Les portions du planning sont celles d\'une personne : elles seront multipliées par ce nombre.</p>' +
          '<div class="modal-actions"><button class="bouton bouton-principal" data-ok>🛒 Ajouter</button></div>',
          function (m) {
            m.el.querySelector('[data-ok]').addEventListener('click', function () {
              var n = Math.max(1, Math.round(Number(m.el.querySelector('[data-foyer]').value) || 1));
              D.profil = Object.assign({}, D.profil || {}, { foyer: n });
              D.sauver('profil');
              ids.forEach(function (id) { D.ajouterAuxCourses(id, Math.ceil(parRecette[id] * n * 2) / 2, true); });
              m.fermer();
              window.App.majBadges();
              U.toast('Ingrédients de la semaine ajoutés aux courses');
            });
          });
      });
    }

    rendre();
  };
})();
