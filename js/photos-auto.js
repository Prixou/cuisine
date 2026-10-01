/* Photos automatiques des recettes, récupérées sur Wikimedia Commons (photos libres de droits).
 *
 * Pour chaque recette, window.PHOTOS_RECETTES donne une liste de candidats séparés par « | » :
 *   w:Titre   → image principale de l'article Wikipédia en français
 *   c:requête → recherche de photos sur Wikimedia Commons (5 résultats au plus)
 * Les résultats (adresse, auteur, licence) sont gardés en cache dans localStorage ; les images
 * elles-mêmes sont gardées par le service worker pour le hors-ligne.
 * « Pas la bonne photo » passe au résultat suivant (rang + 1).
 */
(function () {
  'use strict';

  var U = window.U;
  var VERSION = 1;
  var LARGEUR = 640;
  var RECHERCHE_MAX = 5;
  var NOUVEL_ESSAI_JOURS = 14;
  var SIMULTANEES = 3;
  var WIKI = 'https://fr.wikipedia.org/w/api.php';
  var COMMONS = 'https://commons.wikimedia.org/w/api.php';
  var TYPES = /^image\/(jpeg|png|webp)$/;

  var CLE = 'cuisine.photosAuto';
  var cache = U.lire(CLE, {});            // id → { v, rang, url, auteur, licence, licenceUrl, page } ou { v, rang, absent, date }
  var reglages = U.lire('cuisine.reglages', { photosAuto: true });
  var enCours = {};
  var file = [];
  var actives = 0;
  var observateur = null;

  function sauver() { U.ecrire(CLE, cache); }

  function actif() { return reglages.photosAuto !== false; }

  function candidats(r) {
    var m = window.PHOTOS_RECETTES && window.PHOTOS_RECETTES[r.id];
    if (m) return m.split('|');
    return r.perso ? [] : ['w:' + r.nom, 'c:' + r.nom];
  }

  // ---------- Appels aux API Wikimedia (CORS anonyme via origin=*) ----------
  function api(base, params) {
    var qs = Object.keys(params).map(function (k) { return k + '=' + encodeURIComponent(params[k]); }).join('&');
    return fetch(base + '?' + qs + '&format=json&formatversion=2&origin=*').then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    });
  }

  function texte(html) {
    var d = document.createElement('div');
    d.innerHTML = html || '';
    return (d.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function decrire(info) {
    if (!info || !info.thumburl || !TYPES.test(info.mime || '')) return null;
    var meta = info.extmetadata || {};
    return {
      url: info.thumburl,
      page: info.descriptionurl,
      auteur: texte(meta.Artist && meta.Artist.value) || 'Auteur inconnu',
      licence: texte(meta.LicenseShortName && meta.LicenseShortName.value) || 'Licence libre',
      licenceUrl: (meta.LicenseUrl && meta.LicenseUrl.value) || ''
    };
  }

  var CHAMPS = { prop: 'imageinfo', iiprop: 'url|mime|extmetadata', iiurlwidth: LARGEUR, iiextmetadatafilter: 'Artist|LicenseShortName|LicenseUrl' };

  /* Image principale d'un article Wikipédia → [photo] ou []. */
  function depuisWikipedia(titre) {
    return api(WIKI, { action: 'query', prop: 'pageimages', piprop: 'name', redirects: 1, titles: titre }).then(function (d) {
      var p = d.query && d.query.pages && d.query.pages[0];
      if (!p || p.missing || !p.pageimage) return [];
      var fichier = 'File:' + p.pageimage;
      return api(COMMONS, Object.assign({ action: 'query', titles: fichier }, CHAMPS)).then(function (c) {
        var f = c.query && c.query.pages && c.query.pages[0];
        if (f && !f.missing && f.imageinfo) return f.imageinfo;
        // Fichier hébergé directement sur Wikipédia en français
        return api(WIKI, Object.assign({ action: 'query', titles: fichier }, CHAMPS)).then(function (w) {
          var g = w.query && w.query.pages && w.query.pages[0];
          return (g && g.imageinfo) || [];
        });
      }).then(function (infos) { var x = decrire(infos[0]); return x ? [x] : []; });
    });
  }

  /* Recherche de photos sur Commons → jusqu'à 5 photos, dans l'ordre de pertinence. */
  function depuisCommons(requete) {
    return api(COMMONS, Object.assign({
      action: 'query', generator: 'search', gsrsearch: requete + ' filetype:bitmap', gsrnamespace: 6, gsrlimit: RECHERCHE_MAX
    }, CHAMPS)).then(function (d) {
      var pages = (d.query && d.query.pages) || [];
      return pages.slice().sort(function (a, b) { return (a.index || 0) - (b.index || 0); })
        .map(function (p) { return decrire(p.imageinfo && p.imageinfo[0]); })
        .filter(Boolean);
    });
  }

  /* Parcourt les candidats et renvoie la photo de rang « rang » (0 = la première trouvée). */
  function resoudre(r, rang) {
    var liste = candidats(r);
    var saut = rang;
    var i = 0;
    function suivant() {
      if (i >= liste.length) return Promise.resolve(null);
      var c = liste[i++];
      var type = c.slice(0, 2), valeur = c.slice(2).trim();
      var recherche = type === 'w:' ? depuisWikipedia(valeur) : depuisCommons(valeur);
      return recherche.then(function (photos) {
        if (saut < photos.length) return photos[saut];
        saut -= photos.length;
        return suivant();
      });
    }
    return suivant();
  }

  // ---------- File d'attente (quelques requêtes à la fois) ----------
  function lancer() {
    while (actives < SIMULTANEES && file.length) {
      var t = file.shift();
      actives++;
      t().then(fin, fin);
    }
  }
  function fin() { actives--; lancer(); }
  function planifier(tache) {
    return new Promise(function (ok, ko) {
      file.push(function () { return tache().then(ok, ko); });
      lancer();
    });
  }

  function aJour(e) {
    if (!e || e.v !== VERSION) return false;
    if (e.absent) return Date.now() - e.date < NOUVEL_ESSAI_JOURS * 864e5;
    return true;
  }

  /* Renvoie (Promise) la photo d'une recette, ou null. */
  function obtenir(r) {
    if (!r || !actif() || !window.fetch) return Promise.resolve(null);
    var e = cache[r.id];
    if (aJour(e)) return Promise.resolve(e.absent ? null : e);
    if (enCours[r.id]) return enCours[r.id];
    var rang = (e && e.rang) || 0;
    enCours[r.id] = planifier(function () { return resoudre(r, rang); }).then(function (photo) {
      cache[r.id] = photo ? Object.assign({ v: VERSION, rang: rang }, photo) : { v: VERSION, rang: rang, absent: true, date: Date.now() };
      sauver();
      delete enCours[r.id];
      if (photo) afficherPartout(r.id, photo);
      return photo;
    }, function () {
      delete enCours[r.id];           // hors ligne ou erreur réseau : on réessaiera plus tard
      return null;
    });
    return enCours[r.id];
  }

  function balise(photo, alt, emoji, classe) {
    return '<img src="' + U.esc(photo.url) + '" alt="' + U.esc(alt || '') + '" loading="lazy" crossorigin="anonymous" referrerpolicy="no-referrer"' +
      ' data-photo-wiki data-emoji="' + U.esc(emoji || '🍽️') + '"' + (classe ? ' class="' + classe + '"' : '') + '>';
  }

  /* Image injoignable (hors ligne, supprimée…) : on remet l'emoji. */
  document.addEventListener('error', function (e) {
    var img = e.target;
    if (!img || img.tagName !== 'IMG' || !img.hasAttribute('data-photo-wiki')) return;
    var span = document.createElement('span');
    span.textContent = img.getAttribute('data-emoji');
    if (img.classList.contains('fiche-photo')) span.className = 'fiche-emoji';
    img.replaceWith(span);
  }, true);

  /* Remplace les emojis en attente par la photo trouvée. */
  function afficherPartout(id, photo) {
    document.querySelectorAll('[data-photo-auto="' + CSS.escape(id) + '"]').forEach(function (el) {
      el.outerHTML = balise(photo, '', el.textContent);
    });
  }

  // ---------- Chargement à l'affichage ----------
  function surveiller(el) {
    if (!observateur) {
      observateur = 'IntersectionObserver' in window ? new IntersectionObserver(function (entrees) {
        entrees.forEach(function (en) {
          if (!en.isIntersecting) return;
          observateur.unobserve(en.target);
          obtenir(window.D.parId[en.target.getAttribute('data-photo-auto')]);
        });
      }, { rootMargin: '300px' }) : { observe: function (x) { obtenir(window.D.parId[x.getAttribute('data-photo-auto')]); } };
    }
    observateur.observe(el);
  }

  function initialiser() {
    if (!actif() || !('MutationObserver' in window)) return;
    new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (n) {
          if (n.nodeType !== 1) return;
          if (n.hasAttribute('data-photo-auto')) surveiller(n);
          n.querySelectorAll('[data-photo-auto]').forEach(surveiller);
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  }

  window.PhotosAuto = {
    actif: actif,
    /* Photo déjà connue (synchrone), ou null. */
    connue: function (id) {
      var e = cache[id];
      return actif() && e && e.v === VERSION && !e.absent ? e : null;
    },
    obtenir: obtenir,
    balise: balise,
    /* La photo ne correspond pas au plat : on passe au résultat suivant. */
    suivante: function (r) {
      var e = cache[r.id] || {};
      cache[r.id] = { v: -1, rang: (e.rang || 0) + 1 };   // v périmée : force une nouvelle recherche
      sauver();
      return obtenir(r);
    },
    activer: function (oui) {
      reglages.photosAuto = !!oui;
      U.ecrire('cuisine.reglages', reglages);
    },
    vider: function () {
      cache = {};
      sauver();
      if ('caches' in window) caches.delete('ma-cuisine-photos').catch(function () {});
    },
    nombre: function () { return Object.keys(cache).filter(function (k) { return cache[k].url; }).length; },
    initialiser: initialiser,
    candidats: candidats
  };
})();
