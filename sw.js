/* Service worker : application disponible hors ligne.
 * Stratégie « stale-while-revalidate » : réponse immédiate depuis le cache,
 * mise à jour en arrière-plan pour la visite suivante. */
'use strict';

var CACHE = 'ma-cuisine-v5';
var CACHE_PHOTOS = 'ma-cuisine-photos';
var PHOTOS_MAX = 700;
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
  'js/recettes/monde-entrees-soupes-apero.js',
  'js/recettes/monde-viandes.js',
  'js/recettes/monde-volailles-poissons.js',
  'js/recettes/monde-vege-pates.js',
  'js/recettes/monde-tartes-sandwichs-accomp-sauces.js',
  'js/recettes/monde-petitdej-desserts.js',
  'js/photos-recettes.js',
  'js/recettes/healthy-tendances.js',
  'js/recettes/batch-cooking.js',
  'js/batch.js',
  'js/donnees.js',
  'js/stock.js',
  'js/photos-auto.js',
  'js/minuteurs.js',
  'js/vues/commun.js',
  'js/vues/liste.js',
  'js/vues/fiche.js',
  'js/vues/courses.js',
  'js/vues/planning.js',
  'js/vues/frigo.js',
  'js/vues/profil.js',
  'js/vues/editeur.js',
  'js/vues/batch.js',
  'js/app.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FICHIERS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (cles) {
    return Promise.all(cles.filter(function (k) { return k !== CACHE && k !== CACHE_PHOTOS; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  // Photos Wikimedia : cache d'abord (une photo ne change pas), pour le hors-ligne.
  if (url.hostname === 'upload.wikimedia.org') {
    e.respondWith(caches.open(CACHE_PHOTOS).then(function (cache) {
      return cache.match(req).then(function (enCache) {
        return enCache || fetch(req).then(function (rep) {
          if (rep && rep.ok) {
            cache.put(req, rep.clone()).then(function () { return limiter(cache); });
          }
          return rep;
        });
      });
    }));
    return;
  }
  if (url.origin !== location.origin) return;
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

/* Garde au plus PHOTOS_MAX photos (les plus anciennes partent d'abord). */
function limiter(cache) {
  return cache.keys().then(function (cles) {
    var trop = cles.length - PHOTOS_MAX;
    return trop > 0 ? Promise.all(cles.slice(0, trop).map(function (k) { return cache.delete(k); })) : null;
  });
}
