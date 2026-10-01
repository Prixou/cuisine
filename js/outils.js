/* Utilitaires partagés : stockage local, texte, dates, notifications, fenêtres modales, images. */
(function () {
  'use strict';

  var U = window.U = {};

  // ---------- Stockage local ----------
  U.lire = function (cle, defaut) {
    try { var v = localStorage.getItem(cle); return v ? JSON.parse(v) : defaut; } catch (e) { return defaut; }
  };
  U.ecrire = function (cle, valeur) {
    try { localStorage.setItem(cle, JSON.stringify(valeur)); return true; } catch (e) {
      U.toast('Enregistrement impossible : stockage plein ou désactivé.');
      return false;
    }
  };

  // ---------- Texte ----------
  U.esc = function (t) {
    return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  U.normaliser = function (t) {
    return String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/œ/g, 'oe').replace(/æ/g, 'ae');
  };
  U.slug = function (t) {
    return U.normaliser(t).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'recette';
  };
  U.duree = function (min) {
    if (min < 60) return min + ' min';
    var h = Math.floor(min / 60), m = min % 60;
    return h + ' h' + (m ? ' ' + String(m).padStart(2, '0') : '');
  };
  U.r = function (v) { return Math.round(v); };
  U.pluriel = function (n, singulier, pluriel) {
    return String(n).replace('.', ',') + ' ' + (n > 1 ? (pluriel || singulier + 's') : singulier);
  };
  U.aleatoire = function () { return Math.random().toString(36).slice(2, 7); };

  // ---------- Dates (heure locale) ----------
  function deux(n) { return String(n).padStart(2, '0'); }
  U.iso = function (d) { return d.getFullYear() + '-' + deux(d.getMonth() + 1) + '-' + deux(d.getDate()); };
  U.depuisIso = function (s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); };
  U.aujourdhui = function () { var d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  U.ajouterJours = function (d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; };
  U.lundi = function (d) { var x = new Date(d); x.setHours(0, 0, 0, 0); x.setDate(x.getDate() - (x.getDay() + 6) % 7); return x; };
  U.date = function (d, options) { return d.toLocaleDateString('fr-FR', options); };

  // ---------- Notification éphémère ----------
  var minuterieToast;
  U.toast = function (message) {
    var el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add('visible');
    clearTimeout(minuterieToast);
    minuterieToast = setTimeout(function () { el.classList.remove('visible'); }, 2600);
  };

  // ---------- Fenêtre modale ----------
  U.modal = function (titre, contenu, auMontage) {
    var fond = document.createElement('div');
    fond.className = 'modal-fond';
    fond.innerHTML =
      '<div class="modal" role="dialog" aria-modal="true" aria-label="' + U.esc(titre) + '">' +
        '<div class="modal-entete"><h2>' + U.esc(titre) + '</h2>' +
        '<button class="modal-fermer" aria-label="Fermer">×</button></div>' +
        '<div class="modal-corps">' + contenu + '</div>' +
      '</div>';
    document.body.appendChild(fond);
    document.body.classList.add('sans-defilement');
    function fermer() {
      document.removeEventListener('keydown', echap);
      fond.remove();
      if (!document.querySelector('.modal-fond')) document.body.classList.remove('sans-defilement');
    }
    function echap(e) { if (e.key === 'Escape') fermer(); }
    document.addEventListener('keydown', echap);
    fond.addEventListener('click', function (e) { if (e.target === fond) fermer(); });
    fond.querySelector('.modal-fermer').addEventListener('click', fermer);
    var api = { el: fond.querySelector('.modal-corps'), fermer: fermer };
    if (auMontage) auMontage(api);
    var champ = fond.querySelector('input:not([type=hidden]), select, textarea');
    if (champ && window.matchMedia('(pointer: fine)').matches) champ.focus();
    return api;
  };

  U.confirmer = function (message, libelle, action) {
    U.modal('Confirmation', '<p>' + U.esc(message) + '</p><div class="modal-actions">' +
      '<button class="bouton" data-non>Annuler</button><button class="bouton bouton-danger" data-oui>' + U.esc(libelle) + '</button></div>',
      function (m) {
        m.el.querySelector('[data-non]').addEventListener('click', m.fermer);
        m.el.querySelector('[data-oui]').addEventListener('click', function () { m.fermer(); action(); });
      });
  };

  // ---------- Images ----------
  /* Redimensionne une image choisie par l'utilisateur et la renvoie en JPEG (Blob). */
  U.redimensionner = function (fichier, max) {
    return new Promise(function (ok, ko) {
      var img = new Image();
      var url = URL.createObjectURL(fichier);
      img.onload = function () {
        var echelle = Math.min(1, max / Math.max(img.width, img.height));
        var c = document.createElement('canvas');
        c.width = Math.round(img.width * echelle);
        c.height = Math.round(img.height * echelle);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        c.toBlob(function (b) { if (b) ok(b); else ko(new Error('conversion')); }, 'image/jpeg', 0.82);
      };
      img.onerror = function () { URL.revokeObjectURL(url); ko(new Error('image illisible')); };
      img.src = url;
    });
  };

  U.telecharger = function (nom, texte, type) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([texte], { type: type || 'application/json' }));
    a.download = nom;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  };
})();
