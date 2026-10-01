/* Service worker : application disponible hors ligne.
 * Stratégie « stale-while-revalidate » : réponse immédiate depuis le cache,
 * mise à jour en arrière-plan pour la visite suivante. */
'use strict';

var CACHE = 'ma-cuisine-v2';
var FICHIERS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/style.css',
  'icones/icone.svg',
  'icones/icone-180.png',
  'icones/icone-192.png',
  'icones/icone-512.png',
  'icones/icone-maskable-512.png',
  'js/outils.js',
  'js/ingredients.js',
  'js/categories.js',
  'js/moteur.js',
  'js/recettes/entrees-soupes.js',
  'js/recettes/viandes-volailles.js',
  'js/recettes/poissons-vege-pates.js',
  'js/recettes/tartes-accomp-sucre.js',
  'js/donnees.js',
  'js/minuteurs.js',
  'js/vues/commun.js',
  'js/vues/liste.js',
  'js/vues/fiche.js',
  'js/vues/courses.js',
  'js/vues/planning.js',
  'js/vues/frigo.js',
  'js/vues/profil.js',
  'js/vues/editeur.js',
  'js/app.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FICHIERS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (cles) {
    return Promise.all(cles.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(function (cache) {
    return cache.match(req, { ignoreSearch: true }).then(function (enCache) {
      var reseau = fetch(req).then(function (rep) {
        if (rep && rep.ok) cache.put(req, rep.clone());
        return rep;
      }).catch(function () { return enCache; });
      return enCache || reseau;
    });
  }));
});
