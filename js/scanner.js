/* Lecture des codes-barres avec la caméra : le lecteur intégré du navigateur (BarcodeDetector, Android)
 * s'il existe, sinon la bibliothèque ZXing embarquée (iPhone, ordinateurs), chargée à la demande. */
(function () {
  'use strict';

  var S = window.Scanner = {};
  var FORMATS = ['ean_13', 'ean_8', 'upc_a', 'upc_e'];
  var zxing = null;

  S.disponible = function () {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) && window.isSecureContext !== false;
  };

  function chargerZXing() {
    if (window.ZXing) return Promise.resolve(window.ZXing);
    if (zxing) return zxing;
    zxing = new Promise(function (ok, ko) {
      var s = document.createElement('script');
      s.src = 'js/lib/zxing.min.js';
      s.onload = function () { ok(window.ZXing); };
      s.onerror = function () { zxing = null; ko(new Error('Lecteur de codes-barres introuvable')); };
      document.head.appendChild(s);
    });
    return zxing;
  }

  function lecteurNatif() {
    if (!('BarcodeDetector' in window)) return Promise.resolve(null);
    return window.BarcodeDetector.getSupportedFormats().then(function (f) {
      var ok = FORMATS.filter(function (x) { return f.indexOf(x) !== -1; });
      return ok.length ? new window.BarcodeDetector({ formats: ok }) : null;
    }).catch(function () { return null; });
  }

  var CONTRAINTES = { audio: false, video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } } };

  /* Démarre la lecture dans l'élément <video>. surCode(code) est appelé à chaque code lu.
     Résout { arreter(), lampe (bool), basculerLampe() }. */
  S.demarrer = function (video, surCode) {
    video.setAttribute('playsinline', '');
    video.muted = true;
    return lecteurNatif().then(function (detecteur) {
      if (detecteur) {
        return navigator.mediaDevices.getUserMedia(CONTRAINTES).then(function (flux) {
          video.srcObject = flux;
          return video.play().then(function () {
            var actif = true, occupe = false;
            var minuterie = setInterval(function () {
              if (!actif || occupe || video.readyState < 2) return;
              occupe = true;
              detecteur.detect(video).then(function (codes) {
                occupe = false;
                if (actif && codes.length) surCode(codes[0].rawValue);
              }).catch(function () { occupe = false; });
            }, 200);
            return controles(flux, function () { actif = false; clearInterval(minuterie); });
          });
        });
      }
      return chargerZXing().then(function (Z) {
        var indices = new Map();
        indices.set(Z.DecodeHintType.POSSIBLE_FORMATS, [Z.BarcodeFormat.EAN_13, Z.BarcodeFormat.EAN_8, Z.BarcodeFormat.UPC_A, Z.BarcodeFormat.UPC_E]);
        indices.set(Z.DecodeHintType.TRY_HARDER, true);
        var lecteur = new Z.BrowserMultiFormatReader(indices, 250);
        return lecteur.decodeFromConstraints(CONTRAINTES, video, function (resultat) {
          if (resultat) surCode(resultat.getText());
        }).then(function () {
          return controles(video.srcObject, function () { lecteur.reset(); });
        });
      });
    });
  };

  function controles(flux, arretLecture) {
    var piste = flux && flux.getVideoTracks ? flux.getVideoTracks()[0] : null;
    var capacites = piste && piste.getCapabilities ? piste.getCapabilities() : {};
    var lampe = false;
    return {
      lampe: !!capacites.torch,
      basculerLampe: function () {
        lampe = !lampe;
        return piste.applyConstraints({ advanced: [{ torch: lampe }] }).then(function () { return lampe; });
      },
      arreter: function () {
        arretLecture();
        if (flux) flux.getTracks().forEach(function (t) { t.stop(); });
      }
    };
  }

  /* Message clair selon l'erreur de la caméra. */
  S.messageErreur = function (e) {
    var n = e && e.name;
    if (n === 'NotAllowedError' || n === 'SecurityError') return 'L\'accès à la caméra a été refusé. Autorisez-le dans les réglages du navigateur (icône à gauche de l\'adresse), ou saisissez le code-barres.';
    if (n === 'NotFoundError' || n === 'OverconstrainedError') return 'Aucune caméra trouvée sur cet appareil. Saisissez le code-barres à la main.';
    if (n === 'NotReadableError') return 'La caméra est déjà utilisée par une autre application.';
    return 'Impossible de démarrer la caméra (' + ((e && e.message) || 'erreur inconnue') + '). Saisissez le code-barres à la main.';
  };
})();
