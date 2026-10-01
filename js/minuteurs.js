/* Minuteurs de cuisine : détection des durées dans les étapes, comptes à rebours persistants,
 * alarme sonore + vibration + notification. */
(function () {
  'use strict';

  var U = window.U;
  var liste = U.lire('cuisine.minuteurs', []);          // [{ id, label, duree, fin, reste, sonne }]
  var barre, intervalle, audio, bip;

  // ---------- Détection des durées ----------
  // « 1 h 30 », « 2 h », « 10 min », « 8 à 10 min », « 1 min 30 », « 30 secondes »
  var RE = /(\d+(?:[.,]\d+)?)(?:\s*(?:à|-)\s*(\d+(?:[.,]\d+)?))?\s*(heures?|h|minutes?|min|secondes?)(?![a-zà-ÿ])(?:\s*(\d{1,2})(?![\d,.])(?:\s*min(?:utes?)?)?(?!\s*(?:°|%|g\b|kg|ml|cl|cm|c\.|fois|pièces?|tranches?|gousses?|portions?)))?/gi;

  function nombre(t) { return parseFloat(String(t).replace(',', '.')); }

  /* Renvoie le texte échappé avec des boutons de minuteur sur chaque durée trouvée. */
  function enrichir(texte, contexte) {
    var html = '', dernier = 0, m;
    RE.lastIndex = 0;
    while ((m = RE.exec(texte))) {
      var unite = m[3].toLowerCase();
      var valeur = nombre(m[1]);
      var secondes;
      if (unite[0] === 'h') secondes = valeur * 3600 + (m[4] ? nombre(m[4]) * 60 : 0);
      else if (unite[0] === 'm') secondes = valeur * 60 + (m[4] ? nombre(m[4]) : 0);
      else secondes = valeur;
      if (!(secondes >= 10 && secondes <= 24 * 3600)) continue;
      html += U.esc(texte.slice(dernier, m.index)) +
        '<button type="button" class="minuteur-lien" data-secondes="' + Math.round(secondes) + '" data-label="' + U.esc(contexte) + '" ' +
        'title="Lancer un minuteur de ' + U.esc(m[0]) + '">⏱ ' + U.esc(m[0]) + '</button>';
      dernier = m.index + m[0].length;
    }
    return html + U.esc(texte.slice(dernier));
  }

  // ---------- Alarme ----------
  function sonner() {
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      [0, 0.25, 0.5].forEach(function (t) {
        var o = audio.createOscillator(), g = audio.createGain();
        o.type = 'sine';
        o.frequency.value = 880;
        g.gain.setValueAtTime(0.0001, audio.currentTime + t);
        g.gain.exponentialRampToValueAtTime(0.4, audio.currentTime + t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + t + 0.2);
        o.connect(g).connect(audio.destination);
        o.start(audio.currentTime + t);
        o.stop(audio.currentTime + t + 0.22);
      });
    } catch (e) { /* audio indisponible */ }
    if (navigator.vibrate) navigator.vibrate([300, 150, 300, 150, 300]);
  }

  function notifier(m) {
    try {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('⏱ Minuteur terminé', { body: m.label, tag: m.id });
      }
    } catch (e) { /* notifications indisponibles */ }
  }

  // ---------- Gestion ----------
  function sauver() { U.ecrire('cuisine.minuteurs', liste); }

  function restant(m) {
    if (m.reste != null) return m.reste;
    return Math.max(0, Math.ceil((m.fin - Date.now()) / 1000));
  }

  function format(s) {
    var h = Math.floor(s / 3600), mn = Math.floor(s % 3600 / 60), sec = s % 60;
    return (h ? h + ':' + String(mn).padStart(2, '0') : mn) + ':' + String(sec).padStart(2, '0');
  }

  function demarrer(label, secondes) {
    // l'audio doit être débloqué par un geste de l'utilisateur
    try { audio = audio || new (window.AudioContext || window.webkitAudioContext)(); audio.resume(); } catch (e) { /* ignoré */ }
    if ('Notification' in window && Notification.permission === 'default') {
      try { Notification.requestPermission(); } catch (e) { /* ignoré */ }
    }
    liste.push({ id: 'm' + Date.now(), label: label, duree: secondes, fin: Date.now() + secondes * 1000, reste: null, sonne: false });
    sauver();
    rendre();
    U.toast('Minuteur lancé : ' + format(secondes));
  }

  function tic() {
    var sonnerie = false;
    liste.forEach(function (m) {
      if (!m.sonne && m.reste == null && restant(m) === 0) {
        m.sonne = true;
        notifier(m);
        sauver();
      }
      if (m.sonne) sonnerie = true;
    });
    if (sonnerie && Date.now() - (bip || 0) > 2000) { bip = Date.now(); sonner(); }
    rendre();
  }

  function rendre() {
    if (!barre) return;
    if (!liste.length) {
      barre.hidden = true;
      barre.innerHTML = '';
      clearInterval(intervalle);
      intervalle = null;
      document.body.classList.remove('avec-minuteurs');
      return;
    }
    barre.hidden = false;
    document.body.classList.add('avec-minuteurs');
    barre.innerHTML = liste.map(function (m) {
      var s = restant(m);
      var pct = m.duree ? (1 - s / m.duree) * 100 : 100;
      return '<div class="minuteur' + (m.sonne ? ' sonne' : '') + '" data-id="' + m.id + '">' +
        '<div class="minuteur-progression" style="width:' + pct + '%"></div>' +
        '<span class="minuteur-temps">' + (m.sonne ? '⏰ Terminé !' : format(s)) + '</span>' +
        '<span class="minuteur-label">' + U.esc(m.label) + '</span>' +
        (m.sonne ? '' : '<button data-action="pause" aria-label="' + (m.reste != null ? 'Reprendre' : 'Pause') + '">' + (m.reste != null ? '▶' : '❚❚') + '</button>') +
        '<button data-action="stop" aria-label="Arrêter">' + (m.sonne ? 'OK' : '✕') + '</button>' +
      '</div>';
    }).join('');
    if (!intervalle) intervalle = setInterval(tic, 1000);
  }

  function initialiser(element) {
    barre = element;
    barre.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      var id = b.closest('.minuteur').dataset.id;
      var m = liste.find(function (x) { return x.id === id; });
      if (!m) return;
      if (b.dataset.action === 'stop') {
        liste = liste.filter(function (x) { return x !== m; });
        if (navigator.vibrate) navigator.vibrate(0);
      } else if (m.reste != null) {
        m.fin = Date.now() + m.reste * 1000;
        m.reste = null;
      } else {
        m.reste = restant(m);
      }
      sauver();
      rendre();
    });
    document.addEventListener('click', function (e) {
      var b = e.target.closest('.minuteur-lien');
      if (!b) return;
      e.stopPropagation();
      demarrer(b.dataset.label, Number(b.dataset.secondes));
    }, true);
    rendre();
    if (liste.length) tic();
  }

  window.Minuteurs = { enrichir: enrichir, demarrer: demarrer, initialiser: initialiser, RE: RE };
})();
