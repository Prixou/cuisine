/* Vue : liste de courses générée à partir des recettes choisies, groupée par rayon. */
(function () {
  'use strict';

  var U = window.U, D = window.D;

  function texteListe(groupes) {
    var lignes = ['🛒 Liste de courses', ''];
    groupes.forEach(function (g) {
      lignes.push(g.emoji + ' ' + g.nom.toUpperCase());
      g.articles.forEach(function (a) { lignes.push((D.courses.coches[a.cle] ? '✓ ' : '☐ ') + a.nom + ' — ' + a.qte); });
      lignes.push('');
    });
    if (D.courses.libres.length) {
      lignes.push('📝 AUTRES');
      D.courses.libres.forEach(function (l) { lignes.push((D.courses.coches['libre-' + l.id] ? '✓ ' : '☐ ') + l.texte); });
    }
    return lignes.join('\n').trim();
  }

  window.Vues.courses = function (app) {
    document.title = 'Liste de courses · Ma Cuisine';

    function rendre() {
      var groupes = D.listeCourses();
      var recettes = D.courses.recettes.filter(function (e) { return D.parId[e.id]; });
      var total = groupes.reduce(function (s, g) { return s + g.articles.length; }, 0) + D.courses.libres.length;
      var faits = Object.keys(D.courses.coches).filter(function (k) { return D.courses.coches[k]; }).length;

      app.innerHTML =
        '<div class="page-entete"><h1>🛒 Liste de courses</h1>' +
          (total ? '<p>' + faits + ' / ' + total + ' articles cochés</p>' : '') + '</div>' +
        (recettes.length || D.courses.libres.length ? '' :
          '<div class="vide"><p>Votre liste est vide.</p><p>Ouvrez une recette et touchez <b>🛒 Ajouter aux courses</b>, ou ajoutez toute une semaine depuis le <a href="#/planning">planning</a>.</p></div>') +
        (recettes.length ? '<section class="bloc"><h2>Recettes (' + recettes.length + ')</h2><ul class="courses-recettes">' +
          recettes.map(function (e) {
            var r = D.parId[e.id];
            return '<li data-id="' + U.esc(e.id) + '"><a href="#/recette/' + encodeURIComponent(e.id) + '">' + U.esc(r.emoji) + ' ' + U.esc(r.nom) + '</a>' +
              '<div class="mini-portions"><button data-delta="-1" aria-label="Moins">−</button><span>' + U.pluriel(e.portions, 'portion') + '</span>' +
              '<button data-delta="1" aria-label="Plus">+</button><button data-retirer aria-label="Retirer">✕</button></div></li>';
          }).join('') + '</ul></section>' : '') +
        groupes.map(function (g) {
          var tries = g.articles.slice().sort(function (a, b) { return (D.courses.coches[a.cle] ? 1 : 0) - (D.courses.coches[b.cle] ? 1 : 0); });
          return '<section class="bloc rayon"><h2>' + g.emoji + ' ' + U.esc(g.nom) + '</h2><ul class="articles">' +
            tries.map(function (a) {
              var coche = D.courses.coches[a.cle];
              return '<li class="' + (coche ? 'coche' : '') + '"><label><input type="checkbox" data-cle="' + U.esc(a.cle) + '"' + (coche ? ' checked' : '') + '>' +
                '<span class="article-nom">' + U.esc(a.nom) + '<small>' + U.esc(a.recettes.join(', ')) + '</small></span>' +
                '<span class="article-qte">' + U.esc(a.qte) + '</span></label></li>';
            }).join('') + '</ul></section>';
        }).join('') +
        '<section class="bloc"><h2>📝 Autres articles</h2>' +
          '<form class="ajout-libre" data-form><input class="champ" data-libre placeholder="Ex. : éponges, café, pain…" aria-label="Article à ajouter"><button class="bouton">Ajouter</button></form>' +
          (D.courses.libres.length ? '<ul class="articles">' + D.courses.libres.map(function (l) {
            var cle = 'libre-' + l.id, coche = D.courses.coches[cle];
            return '<li class="' + (coche ? 'coche' : '') + '"><label><input type="checkbox" data-cle="' + cle + '"' + (coche ? ' checked' : '') + '>' +
              '<span class="article-nom">' + U.esc(l.texte) + '</span></label><button class="retirer-libre" data-libre-id="' + l.id + '" aria-label="Supprimer">✕</button></li>';
          }).join('') + '</ul>' : '') +
        '</section>' +
        (total ? '<div class="actions-bas">' +
          '<button class="bouton" data-partager>📤 Partager / copier</button>' +
          '<button class="bouton" data-decocher>↺ Tout décocher</button>' +
          '<button class="bouton bouton-danger-doux" data-vider>🗑 Vider la liste</button></div>' : '');

      app.querySelectorAll('.courses-recettes li').forEach(function (li) {
        var e = D.courses.recettes.find(function (x) { return x.id === li.dataset.id; });
        li.querySelectorAll('[data-delta]').forEach(function (b) {
          b.addEventListener('click', function () {
            e.portions = Math.max(1, e.portions + Number(b.dataset.delta));
            D.sauver('courses');
            rendre();
          });
        });
        li.querySelector('[data-retirer]').addEventListener('click', function () {
          D.courses.recettes = D.courses.recettes.filter(function (x) { return x !== e; });
          D.sauver('courses');
          window.App.majBadges();
          rendre();
        });
      });
      app.querySelectorAll('[data-cle]').forEach(function (c) {
        c.addEventListener('change', function () {
          if (c.checked) D.courses.coches[c.dataset.cle] = true; else delete D.courses.coches[c.dataset.cle];
          D.sauver('courses');
          rendre();
        });
      });
      app.querySelector('[data-form]').addEventListener('submit', function (ev) {
        ev.preventDefault();
        var champ = app.querySelector('[data-libre]');
        var t = champ.value.trim();
        if (!t) return;
        D.courses.libres.push({ id: U.aleatoire(), texte: t });
        D.sauver('courses');
        window.App.majBadges();
        rendre();
        app.querySelector('[data-libre]').focus();
      });
      app.querySelectorAll('[data-libre-id]').forEach(function (b) {
        b.addEventListener('click', function () {
          D.courses.libres = D.courses.libres.filter(function (l) { return l.id !== b.dataset.libreId; });
          delete D.courses.coches['libre-' + b.dataset.libreId];
          D.sauver('courses');
          window.App.majBadges();
          rendre();
        });
      });
      var partager = app.querySelector('[data-partager]');
      if (partager) partager.addEventListener('click', function () {
        var texte = texteListe(groupes);
        if (navigator.share) {
          navigator.share({ title: 'Liste de courses', text: texte }).catch(function () {});
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(texte).then(function () { U.toast('Liste copiée dans le presse-papiers'); },
            function () { U.toast('Copie impossible'); });
        }
      });
      var decocher = app.querySelector('[data-decocher]');
      if (decocher) decocher.addEventListener('click', function () { D.courses.coches = {}; D.sauver('courses'); rendre(); });
      var vider = app.querySelector('[data-vider]');
      if (vider) vider.addEventListener('click', function () {
        U.confirmer('Vider toute la liste de courses ?', 'Vider', function () {
          D.courses = { recettes: [], coches: {}, libres: [] };
          D.sauver('courses');
          window.App.majBadges();
          rendre();
        });
      });
    }

    rendre();
  };
})();
