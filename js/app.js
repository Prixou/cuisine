/* Routeur et navigation de l'application. */
(function () {
  'use strict';

  var D = window.D, V = window.Vues;
  var App = window.App = { installation: null };

  var NAV = [
    { route: '', emoji: '📖', nom: 'Recettes' },
    { route: 'batch', emoji: '🍱', nom: 'Batch' },
    { route: 'frigo', emoji: '🧊', nom: 'Frigo' },
    { route: 'planning', emoji: '📅', nom: 'Planning' },
    { route: 'courses', emoji: '🛒', nom: 'Courses' },
    { route: 'profil', emoji: '🎯', nom: 'Objectifs' }
  ];

  var ROUTES = {
    '': V.liste,
    recettes: V.liste,
    batch: V.batch,
    recette: V.recette,
    courses: V.courses,
    planning: V.planning,
    frigo: V.frigo,
    profil: V.profil,
    nouvelle: function (app, p, r) { V.editeur(app, [], r, 'nouvelle'); },
    modifier: function (app, p, r) { V.editeur(app, p, r, 'modifier'); },
    dupliquer: function (app, p, r) { V.editeur(app, p, r, 'dupliquer'); }
  };

  function construireNav() {
    var html = NAV.map(function (n) {
      return '<a href="#/' + n.route + '" data-route="' + n.route + '"><span class="nav-emoji" aria-hidden="true">' + n.emoji + '</span>' +
        '<span class="nav-nom">' + n.nom + '</span>' + (n.route === 'courses' ? '<span class="nav-badge" hidden></span>' : '') + '</a>';
    }).join('');
    document.querySelectorAll('[data-nav]').forEach(function (nav) { nav.innerHTML = html; });
  }

  App.majBadges = function () {
    var n = D.nombreCourses();
    document.querySelectorAll('.nav-badge').forEach(function (b) { b.hidden = !n; b.textContent = n; });
  };

  var precedente = null;

  function route() {
    var morceaux = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
    var nom = morceaux[0] || '';
    if (!ROUTES[nom]) nom = '';
    var section = nom === 'recettes' || nom === 'recette' || nom === 'nouvelle' || nom === 'modifier' || nom === 'dupliquer' ? '' : nom;
    document.querySelectorAll('[data-nav] a').forEach(function (a) {
      if (a.dataset.route === section) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    if (V.recette.quitter) V.recette.quitter();

    // Conteneur neuf à chaque navigation : aucun écouteur ne survit d'une vue à l'autre.
    var ancien = document.getElementById('app');
    var app = ancien.cloneNode(false);
    ancien.replaceWith(app);

    ROUTES[nom](app, morceaux.slice(1), precedente === 'recette');
    precedente = nom;
    App.majBadges();
  }

  construireNav();
  window.PhotosAuto.initialiser();
  window.Minuteurs.initialiser(document.getElementById('minuteurs'));
  window.addEventListener('hashchange', route);

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    App.installation = e;
  });

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }

  // Affiche la page sans attendre les photos plus d'une seconde.
  var demarre = false;
  function demarrer() { if (!demarre) { demarre = true; route(); } }
  D.photos.charger().then(function () { if (demarre) route(); else demarrer(); });
  setTimeout(demarrer, 1000);
})();
