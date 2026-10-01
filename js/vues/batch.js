/* Vue : batch cooking — sessions clés en main, organisation, conservation. */
(function () {
  'use strict';

  var U = window.U, D = window.D, C = window.Commun, B = window.BATCH;
  var FACTEURS = [0.5, 1, 1.5, 2];
  var filtre = '';

  /* Étapes cochées et facteur de quantité, par session. */
  function etat() { return U.lire('cuisine.batch', {}); }
  function etatSession(id) { return Object.assign({ faites: [], facteur: 1 }, etat()[id] || {}); }
  function sauverSession(id, s) { var e = etat(); e[id] = s; U.ecrire('cuisine.batch', e); }

  function recettesSession(s) {
    return s.recettes.filter(function (x) { return D.parId[x[0]]; });
  }

  function dureeConservation(c) {
    if (!c) return '';
    var frigo = c.mode === 'boite' ? '🫙 ' + c.frigo + ' j' : '🧊 ' + c.frigo + ' j';
    return '<span class="conserv" title="' + (c.mode === 'boite' ? 'À température ambiante' : 'Au réfrigérateur') + '">' + frigo + '</span>' +
      (c.congel ? '<span class="conserv" title="Au congélateur">❄️ ' + c.congel + ' mois</span>' : '<span class="conserv conserv-non" title="Congélation déconseillée">❄️ non</span>');
  }

  function mosaique(s) {
    return '<div class="batch-mosaique" aria-hidden="true">' + recettesSession(s).slice(0, 4).map(function (x) {
      return '<div class="carte-visuel">' + C.visuel(D.parId[x[0]]) + '</div>';
    }).join('') + '</div>';
  }

  function totalPortions(s, facteur) {
    return recettesSession(s).reduce(function (t, x) { return t + x[1] * (facteur || 1); }, 0);
  }

  function carteSession(s) {
    return '<a class="carte batch-carte" href="#/batch/' + encodeURIComponent(s.id) + '">' + mosaique(s) +
      '<div class="carte-corps">' +
        '<div class="carte-badges">' + s.tags.map(function (t) { return '<span class="badge badge-batch">' + U.esc(B.TAGS[t] || t) + '</span>'; }).join('') + '</div>' +
        '<h3>' + U.esc(s.emoji + ' ' + s.nom) + '</h3>' +
        '<p class="carte-meta">⏱ ' + U.duree(s.duree) + ' · ' + U.pluriel(s.recettes.length, 'recette') + ' · ' + U.r(totalPortions(s)) + ' portions</p>' +
        '<p class="batch-desc">' + U.esc(s.desc) + '</p>' +
      '</div></a>';
  }

  function regles() {
    return '<section class="bloc"><h2>Les règles d\'or</h2><ul class="batch-regles">' + B.REGLES.map(function (r) {
      return '<li><span aria-hidden="true">' + r[0] + '</span><div><b>' + U.esc(r[1]) + '</b><p>' + U.esc(r[2]) + '</p></div></li>';
    }).join('') + '</ul></section>';
  }

  function liste(app) {
    document.title = 'Batch cooking · Ma Cuisine';
    var sessions = B.SESSIONS.filter(function (s) { return !filtre || s.tags.indexOf(filtre) !== -1; });
    var speciales = B.SPECIALES.map(function (id) { return D.parId[id]; }).filter(Boolean);
    var nbConservent = D.recettes.filter(function (r) { return B.CONSERVATION[r.id]; }).length;
    var tags = Object.keys(B.TAGS).filter(function (t) { return B.SESSIONS.some(function (s) { return s.tags.indexOf(t) !== -1; }); });

    app.innerHTML =
      '<header class="page-entete">' +
        '<h1>🍱 Batch cooking</h1>' +
        '<p>Cuisinez 1 à 4 h d\'un coup, mangez toute la semaine. Chaque session donne la liste de courses, l\'ordre des étapes, le planning des repas et la conservation de chaque plat.</p>' +
      '</header>' +
      '<nav class="puces" aria-label="Thèmes">' +
        '<button class="puce' + (!filtre ? ' active' : '') + '" data-tag="">Toutes <small>' + B.SESSIONS.length + '</small></button>' +
        tags.map(function (t) {
          var n = B.SESSIONS.filter(function (s) { return s.tags.indexOf(t) !== -1; }).length;
          return '<button class="puce' + (filtre === t ? ' active' : '') + '" data-tag="' + t + '">' + U.esc(B.TAGS[t]) + ' <small>' + n + '</small></button>';
        }).join('') +
      '</nav>' +
      '<h2 class="section-titre">Sessions clés en main</h2>' +
      '<div class="grille">' + sessions.map(carteSession).join('') + '</div>' +
      '<div class="batch-lien-recettes">' +
        '<a class="bouton bouton-principal" href="#/recettes/batch">🍱 Voir les ' + nbConservent + ' recettes qui se conservent bien</a>' +
      '</div>' +
      regles() +
      '<h2 class="section-titre">Recettes pensées pour le batch <small>' + speciales.length + '</small></h2>' +
      C.grille(speciales.sort(function (a, b) { return a.nom.localeCompare(b.nom, 'fr'); }), function (r) {
        return '<p class="carte-conserv">' + dureeConservation(B.conservation(r.id)) + '</p>';
      });

    app.querySelectorAll('[data-tag]').forEach(function (b) {
      b.addEventListener('click', function () { filtre = b.dataset.tag; liste(app); });
    });
  }

  /* Remplit les créneaux libres du planning avec les portions de la session. */
  function repartir(s, facteur) {
    var foyer = (D.profil && D.profil.foyer) || 1;
    var jours = [];
    for (var i = 0; i < 14; i++) {
      var d = U.ajouterJours(U.aujourdhui(), i);
      jours.push('<option value="' + U.iso(d) + '">' + (i === 0 ? 'Aujourd\'hui' : i === 1 ? 'Demain' : U.date(d, { weekday: 'long', day: 'numeric', month: 'short' })) + '</option>');
    }
    U.modal('Répartir dans le planning',
      '<p class="aide">Les repas sont placés dans les créneaux encore libres, en commençant par les plats qui se gardent le moins longtemps. Les portions en trop restent pour le congélateur.</p>' +
      '<label class="champ-groupe"><span>À partir de</span><select class="champ" data-debut>' + jours.slice(0, 8).join('') + '</select></label>' +
      '<label class="champ-groupe"><span>Pour combien de personnes ?</span><input class="champ" type="number" min="1" max="20" value="' + foyer + '" data-foyer></label>' +
      '<label class="champ-groupe"><span>Sur combien de jours ?</span><input class="champ" type="number" min="1" max="14" value="7" data-jours></label>' +
      '<div class="modal-actions"><button class="bouton bouton-principal" data-ok>📅 Répartir</button></div>',
      function (m) {
        m.el.querySelector('[data-ok]').addEventListener('click', function () {
          var n = Math.max(1, Math.round(Number(m.el.querySelector('[data-foyer]').value) || 1));
          var nbJours = Math.min(14, Math.max(1, Math.round(Number(m.el.querySelector('[data-jours]').value) || 7)));
          var debut = U.depuisIso(m.el.querySelector('[data-debut]').value);
          D.profil = Object.assign({}, D.profil || {}, { foyer: n });
          D.sauver('profil');

          // Repas disponibles par type. Un plat qui ne se congèle pas doit être mangé
          // avant sa date limite ; un plat congelable peut venir du congélateur ensuite.
          var files = { petitdej: [], collation: [], plat: [] };
          recettesSession(s).forEach(function (x) {
            var r = D.parId[x[0]];
            var type = x[2] || (r.cat === 'Petit-déjeuner' ? 'petitdej' : (r.cat === 'Desserts' || r.cat === 'Apéro') ? 'collation' : 'plat');
            if (type === 'dejeuner' || type === 'diner') type = 'plat';
            var c = B.conservation(r.id) || { frigo: 3, congel: 0 };
            var e = { id: r.id, reste: Math.floor(x[1] * facteur / n + 1e-9), garde: c.frigo, congel: c.congel, servi: -1 };
            if (e.reste > 0) files[type].push(e);
          });

          // Le plus urgent d'abord (non congelable, puis ce qui se garde le moins),
          // sans servir deux fois de suite le même plat quand on peut l'éviter.
          var tour = 0;
          function suivant(file, jour, dernier) {
            var possibles = file.filter(function (e) { return e.reste > 0 && (e.congel || jour < e.garde); });
            if (!possibles.length) return null;
            var varies = possibles.filter(function (e) { return e.id !== dernier; });
            if (varies.length) possibles = varies;
            possibles.sort(function (a, b) {
              var ua = a.congel ? 100 + a.garde : a.garde, ub = b.congel ? 100 + b.garde : b.garde;
              return ua - ub || a.servi - b.servi;
            });
            var choix = possibles[0];
            choix.reste--;
            choix.servi = tour++;
            return choix.id;
          }

          var ajoutes = 0, dernierPlat = null;
          for (var j = 0; j < nbJours; j++) {
            var iso = U.iso(U.ajouterJours(debut, j));
            var jour = D.jour(iso);
            [['petitdej', 'petitdej'], ['dejeuner', 'plat'], ['diner', 'plat'], ['collation', 'collation']].forEach(function (c) {
              if (jour[c[0]].length) return;
              var id = suivant(files[c[1]], j, c[1] === 'plat' ? dernierPlat : null);
              if (!id) return;
              if (c[1] === 'plat') dernierPlat = id;
              jour[c[0]].push({ id: id, portions: 1 });
              ajoutes++;
            });
          }
          D.sauverPlanning();
          m.fermer();
          if (!ajoutes) { U.toast('Aucun créneau libre sur cette période'); return; }
          var aCongeler = 0, enTrop = 0;
          Object.keys(files).forEach(function (k) { files[k].forEach(function (e) { if (e.congel) aCongeler += e.reste * n; else enTrop += e.reste * n; }); });
          U.toast(U.pluriel(ajoutes, 'repas ajouté', 'repas ajoutés') + ' au planning' +
            (aCongeler ? ' · ' + aCongeler + ' portions à congeler' : '') +
            (enTrop ? ' · ' + enTrop + ' portions en plus à manger vite' : ''));
          location.hash = '#/planning/' + U.iso(debut);
        });
      });
  }

  function detail(app, id) {
    var s = B.parId[id];
    if (!s) { location.hash = '#/batch'; return; }
    document.title = s.nom + ' · Batch cooking · Ma Cuisine';
    var st = etatSession(s.id);

    function rendre() {
      var f = st.facteur;
      var lignes = recettesSession(s);
      var total = { kcal: 0, p: 0, portions: 0, euros: 0 };
      lignes.forEach(function (x) {
        var n = D.parId[x[0]].nutrition.parPortion;
        total.kcal += n.kcal * x[1] * f; total.p += n.p * x[1] * f; total.portions += x[1] * f;
        total.euros += window.Budget.coutRecette(D.parId[x[0]]).parPortion * x[1] * f;
      });
      var faites = st.faites.filter(function (i) { return i < s.plan.length; }).length;

      app.innerHTML =
        '<article class="fiche batch-session">' +
          '<div class="fiche-barre"><a href="#/batch" class="retour">← Batch cooking</a></div>' +
          '<header class="batch-entete">' + mosaique(s) +
            '<div>' +
              '<p class="fiche-cat">Session de batch cooking</p>' +
              '<h1>' + U.esc(s.emoji + ' ' + s.nom) + '</h1>' +
              '<p class="fiche-desc">' + U.esc(s.desc) + '</p>' +
              '<ul class="fiche-infos">' +
                '<li>⏱ En cuisine <b>' + U.duree(Math.round(s.duree * (f > 1 ? 1 + (f - 1) * 0.4 : 1))) + '</b></li>' +
                '<li>🍽️ <b>' + U.r(total.portions) + ' portions</b></li>' +
                '<li>🔥 <b>' + U.r(total.kcal / total.portions) + ' kcal</b> par portion en moyenne</li>' +
                '<li title="Prix indicatif des quantités utilisées chez ' + U.esc(window.Budget.nomMagasin(window.Budget.magasin())) + '">💶 ≈ <b>' + window.Budget.euros(total.euros) + '</b> (' + window.Budget.euros(total.euros / total.portions) + ' / portion)</li>' +
              '</ul>' +
              '<div class="carte-badges">' + s.tags.map(function (t) { return '<span class="badge badge-batch">' + U.esc(B.TAGS[t] || t) + '</span>'; }).join('') + '</div>' +
            '</div>' +
          '</header>' +
          '<div class="batch-quantite" role="group" aria-label="Quantités">' +
            '<span>Quantités</span>' + FACTEURS.map(function (x) {
              return '<button class="bouton-pilule" data-facteur="' + x + '" aria-pressed="' + (x === f) + '">' + (x === 0.5 ? '½' : x === 1.5 ? '1,5' : x) + ' ×</button>';
            }).join('') +
          '</div>' +
          '<div class="actions-principales">' +
            '<button class="bouton bouton-principal" data-courses>🛒 Tout ajouter aux courses</button>' +
            '<button class="bouton" data-repartir>📅 Répartir dans le planning</button>' +
          '</div>' +

          '<div class="fiche-grille">' +
            '<div class="fiche-gauche">' +
              '<section class="bloc">' +
                '<h2>Au menu <small>' + U.pluriel(lignes.length, 'recette') + '</small></h2>' +
                '<ul class="batch-recettes">' + lignes.map(function (x) {
                  var r = D.parId[x[0]], n = r.nutrition.parPortion;
                  return '<li><a href="#/recette/' + encodeURIComponent(r.id) + '">' +
                    '<div class="carte-visuel" aria-hidden="true">' + C.visuel(r) + '</div>' +
                    '<div><b>' + U.esc(r.nom) + '</b>' +
                    '<small>' + U.r(x[1] * f) + ' portions · ' + U.r(n.kcal) + ' kcal · ' + U.r(n.p) + ' g prot.</small>' +
                    '<span class="carte-conserv">' + dureeConservation(B.conservation(r.id)) + '</span></div></a></li>';
                }).join('') + '</ul>' +
              '</section>' +
              '<section class="bloc">' +
                '<h2>Conservation</h2>' +
                '<div class="tableau-defilant"><table class="tableau-conserv"><thead><tr><th>Plat</th><th>Frigo</th><th>Congél.</th></tr></thead><tbody>' +
                  lignes.map(function (x) {
                    var r = D.parId[x[0]], c = B.conservation(r.id);
                    return '<tr><th>' + U.esc(r.nom) + '</th><td>' + (c ? c.frigo + ' j' + (c.mode === 'boite' ? '*' : '') : '–') + '</td><td>' + (c && c.congel ? c.congel + ' mois' : 'non') + '</td></tr>';
                  }).join('') +
                '</tbody></table></div>' +
                (lignes.some(function (x) { var c = B.conservation(x[0]); return c && c.mode === 'boite'; }) ? '<p class="aide">* en boîte hermétique, à température ambiante.</p>' : '') +
                '<p class="aide">Ouvrez une recette pour savoir comment la réchauffer.</p>' +
              '</section>' +
            '</div>' +
            '<div class="fiche-droite">' +
              '<section class="bloc">' +
                '<h2>Organisation <small data-progression>' + faites + ' / ' + s.plan.length + '</small></h2>' +
                '<p class="aide">L\'ordre conseillé pour tout cuisiner d\'affilée. Touchez une étape pour la cocher, et ⏱ pour lancer un minuteur.</p>' +
                '<ol class="etapes">' + s.plan.map(function (e, i) {
                  return '<li data-i="' + i + '"' + (st.faites.indexOf(i) !== -1 ? ' class="faite"' : '') + '><span class="etape-num">' + (i + 1) + '</span><p>' +
                    window.Minuteurs.enrichir(e, s.nom + ' · étape ' + (i + 1)) + '</p></li>';
                }).join('') + '</ol>' +
                (faites ? '<button class="lien" data-reinit>Tout décocher</button>' : '') +
                (s.astuces && s.astuces.length ? '<aside class="astuce"><b>💡 Astuces</b>' + s.astuces.map(function (a) { return '<p>' + U.esc(a) + '</p>'; }).join('') + '</aside>' : '') +
              '</section>' +
            '</div>' +
          '</div>' +
          regles() +
        '</article>';

      app.querySelectorAll('[data-facteur]').forEach(function (b) {
        b.addEventListener('click', function () { st.facteur = Number(b.dataset.facteur); sauverSession(s.id, st); rendre(); });
      });
      app.querySelector('[data-courses]').addEventListener('click', function () {
        lignes.forEach(function (x) { D.ajouterAuxCourses(x[0], x[1] * f, true); });
        window.App.majBadges();
        U.toast(U.pluriel(lignes.length, 'recette ajoutée', 'recettes ajoutées') + ' à la liste de courses');
      });
      app.querySelector('[data-repartir]').addEventListener('click', function () { repartir(s, f); });
      app.querySelector('.etapes').addEventListener('click', function (e) {
        if (e.target.closest('.minuteur-lien')) return;
        var li = e.target.closest('li[data-i]');
        if (!li) return;
        var i = Number(li.dataset.i);
        var k = st.faites.indexOf(i);
        if (k === -1) st.faites.push(i); else st.faites.splice(k, 1);
        li.classList.toggle('faite', k === -1);
        sauverSession(s.id, st);
        app.querySelector('[data-progression]').textContent = st.faites.length + ' / ' + s.plan.length;
      });
      var reinit = app.querySelector('[data-reinit]');
      if (reinit) reinit.addEventListener('click', function () { st.faites = []; sauverSession(s.id, st); rendre(); });
    }
    rendre();
  }

  window.Vues.batch = function (app, params) {
    if (params[0]) detail(app, params[0]); else liste(app);
    window.scrollTo(0, 0);
  };
})();
