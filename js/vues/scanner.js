/* Vues : scanner de codes-barres et fiche produit (données Open Food Facts). */
(function () {
  'use strict';

  var U = window.U, D = window.D, P = window.Produits, S = window.Scanner;

  function lettre(type, valeur, titre) {
    if (!valeur) return '<span class="score score-vide" title="' + U.esc(titre) + ' inconnu">' + (type === 'nova' ? 'NOVA ?' : '?') + '</span>';
    return '<span class="score score-' + type + ' score-' + type + '-' + valeur + '" title="' + U.esc(titre) + '">' + (type === 'nova' ? 'NOVA ' + valeur : String(valeur).toUpperCase()) + '</span>';
  }

  function vignette(pr) {
    return pr.image ? '<img src="' + U.esc(pr.image) + '" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.outerHTML=\'📦\'">' : '<span aria-hidden="true">📦</span>';
  }

  /* Ligne de liste : image, nom, marque, Nutri-Score, kcal. */
  function ligneProduit(pr, cible) {
    return '<li><a class="produit-ligne" href="#/produit/' + encodeURIComponent(pr.code) + (cible || '') + '">' +
      '<div class="produit-vignette">' + vignette(pr) + '</div>' +
      '<div class="produit-texte"><b>' + U.esc(pr.nom) + '</b><small>' + U.esc([pr.marque, pr.quantite].filter(Boolean).join(' · ')) + '</small></div>' +
      '<div class="produit-score">' + lettre('nutri', pr.nutriscore, 'Nutri-Score') +
        '<small>' + (pr.n100.kcal !== null ? U.r(pr.n100.kcal) + ' kcal' : '') + '</small></div></a></li>';
  }

  // ---------- Scanner ----------
  window.Vues.scanner = function (app, params) {
    document.title = 'Scanner · Ma Cuisine';
    // #/scanner/AAAA-MM-JJ/repas : le produit scanné sera proposé pour ce repas du planning.
    var cible = params[0] && params[1] ? '/' + params[0] + '/' + params[1] : '';
    var repas = cible && D.REPAS.find(function (r) { return r.id === params[1]; });
    var session = null, fini = false;

    function arreter() {
      if (session) { session.arreter(); session = null; }
      var zone = app.querySelector('[data-camera]');
      if (zone) zone.classList.remove('active');
    }
    window.App.quitter = function () { fini = true; arreter(); };

    function ouvrir(code) {
      fini = true;
      arreter();
      if (navigator.vibrate) navigator.vibrate(80);
      location.hash = '#/produit/' + encodeURIComponent(code) + cible;
    }

    function rendreHistorique() {
      var h = P.historique();
      var zone = app.querySelector('[data-historique]');
      zone.innerHTML = h.length
        ? '<div class="historique-titre"><h2>🕘 Derniers produits</h2><button class="lien" data-vider-historique>Effacer</button></div><ul class="produits-liste">' + h.slice(0, 20).map(function (pr) { return ligneProduit(pr, cible); }).join('') + '</ul>'
        : '';
      var v = zone.querySelector('[data-vider-historique]');
      if (v) v.addEventListener('click', function () { P.viderHistorique(); rendreHistorique(); });
    }

    app.innerHTML =
      '<header class="page-entete"><h1>📷 Scanner un produit</h1>' +
        '<p>' + (repas ? 'Pour le ' + U.esc(repas.nom.toLowerCase()) + ' du ' + U.esc(U.date(U.depuisIso(params[0]), { weekday: 'long', day: 'numeric', month: 'long' })) + '. ' : '') +
        'Visez le code-barres : Nutri-Score, valeurs nutritionnelles, allergènes et additifs s\'affichent aussitôt, grâce à la base libre Open Food Facts.</p></header>' +
      '<section class="bloc scanner">' +
        '<div class="camera" data-camera>' +
          '<video data-video muted playsinline aria-label="Image de la caméra"></video>' +
          '<div class="camera-viseur" aria-hidden="true"></div>' +
          '<div class="camera-accueil" data-accueil>' +
            (S.disponible()
              ? '<button class="bouton bouton-principal" data-demarrer>📷 Activer la caméra</button>'
              : '<p>La caméra n\'est pas disponible ici (elle demande une adresse https). Saisissez le code-barres ci-dessous.</p>') +
          '</div>' +
          '<div class="camera-actions"><button class="bouton bouton-petit" data-lampe hidden>🔦 Lampe</button><button class="bouton bouton-petit" data-arreter>⏹ Arrêter</button></div>' +
        '</div>' +
        '<p class="aide" data-etat></p>' +
        '<form class="scanner-saisie" data-saisie><input class="champ" inputmode="numeric" autocomplete="off" placeholder="Ou tapez le code-barres (13 chiffres)" aria-label="Code-barres" data-code>' +
          '<button class="bouton">Voir</button></form>' +
      '</section>' +
      '<section class="bloc">' +
        '<h2>🔎 Chercher par nom</h2>' +
        '<form class="scanner-saisie" data-recherche><input class="champ" type="search" placeholder="Ex. : skyr, pain de mie complet, Nutella…" aria-label="Nom du produit" data-terme>' +
          '<button class="bouton">Chercher</button></form>' +
        '<div data-resultats></div>' +
      '</section>' +
      '<section class="bloc" data-historique></section>' +
      '<p class="note">Données <a href="https://fr.openfoodfacts.org" target="_blank" rel="noopener">Open Food Facts</a>, base collaborative et libre (licence ODbL). Vérifiez toujours l\'emballage en cas d\'allergie.</p>';

    var etat = app.querySelector('[data-etat]');
    var zone = app.querySelector('[data-camera]');

    function demarrer() {
      etat.textContent = 'Démarrage de la caméra…';
      S.demarrer(app.querySelector('[data-video]'), function (texte) {
        var code = P.normaliser(texte);
        if (!fini && P.valide(code)) ouvrir(code);
      }).then(function (s) {
        if (fini) { s.arreter(); return; }
        session = s;
        zone.classList.add('active');
        etat.textContent = 'Placez le code-barres dans le cadre, à 10–15 cm.';
        var lampe = app.querySelector('[data-lampe]');
        lampe.hidden = !s.lampe;
        lampe.onclick = function () { s.basculerLampe().catch(function () {}); };
      }).catch(function (e) {
        etat.textContent = S.messageErreur(e);
      });
    }

    var bouton = app.querySelector('[data-demarrer]');
    if (bouton) bouton.addEventListener('click', demarrer);
    app.querySelector('[data-arreter]').addEventListener('click', function () { arreter(); etat.textContent = ''; });
    // Caméra déjà autorisée : on démarre directement.
    if (bouton && navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'camera' }).then(function (p) { if (p.state === 'granted' && !fini) demarrer(); }).catch(function () {});
    }
    document.addEventListener('visibilitychange', function arretArrierePlan() {
      if (fini) { document.removeEventListener('visibilitychange', arretArrierePlan); return; }
      if (document.hidden) arreter();
    });

    app.querySelector('[data-saisie]').addEventListener('submit', function (e) {
      e.preventDefault();
      var code = P.normaliser(app.querySelector('[data-code]').value);
      if (!P.valide(code)) { U.toast('Code-barres invalide : vérifiez les 8 ou 13 chiffres'); return; }
      ouvrir(code);
    });

    app.querySelector('[data-recherche]').addEventListener('submit', function (e) {
      e.preventDefault();
      var terme = app.querySelector('[data-terme]').value.trim();
      var res = app.querySelector('[data-resultats]');
      if (!terme) return;
      res.innerHTML = '<p class="aide">Recherche…</p>';
      P.rechercher(terme).then(function (liste) {
        res.innerHTML = liste.length ? '<ul class="produits-liste">' + liste.map(function (pr) { return ligneProduit(pr, cible); }).join('') + '</ul>'
          : '<p class="vide-petit">Aucun produit trouvé.</p>';
      }).catch(function () { res.innerHTML = '<p class="vide-petit">Recherche impossible : vérifiez votre connexion.</p>'; });
    });

    rendreHistorique();
  };

  // ---------- Fiche produit ----------
  function ligneNutri(nom, cle, pr, g, cibles, indent) {
    var v100 = pr.n100[cle];
    if (v100 === null) return '';
    var v = v100 * g / 100;
    var niveau = P.niveau(cle, v100);
    var part = cibles && { kcal: 'kcal', p: 'p', g: 'g', l: 'l' }[cle] ? '<small>' + U.r(v / cibles[cle] * 100) + ' %</small>' : '';
    var unite = cle === 'kcal' ? ' kcal' : ' g';
    var arrondi = function (x) { return cle === 'sel' ? String(Math.round(x * 100) / 100).replace('.', ',') : U.r(x); };
    return '<tr' + (indent ? ' class="sous"' : '') + '><th>' + (niveau ? '<i class="niveau niveau-' + niveau + '"></i>' : '') + nom + '</th>' +
      '<td>' + arrondi(v100) + unite + '</td><td><b>' + arrondi(v) + unite + '</b>' + part + '</td></tr>';
  }

  function modalJournal(pr, grammes, iso, repasId) {
    var jours = [];
    for (var i = -1; i < 8; i++) {
      var d = U.ajouterJours(U.aujourdhui(), i), v = U.iso(d);
      jours.push('<option value="' + v + '"' + (v === (iso || U.iso(U.aujourdhui())) ? ' selected' : '') + '>' + (i === 0 ? 'Aujourd\'hui' : i === -1 ? 'Hier' : i === 1 ? 'Demain' : U.date(d, { weekday: 'long', day: 'numeric', month: 'short' })) + '</option>');
    }
    var heure = new Date().getHours();
    var defaut = repasId || (heure < 10 ? 'petitdej' : heure < 15 ? 'dejeuner' : heure < 18 ? 'collation' : 'diner');
    U.modal('Ajouter « ' + pr.nom + ' »',
      '<label class="champ-groupe"><span>Jour</span><select class="champ" data-jour>' + jours.join('') + '</select></label>' +
      '<label class="champ-groupe"><span>Repas</span><select class="champ" data-repas>' + D.REPAS.map(function (x) {
        return '<option value="' + x.id + '"' + (x.id === defaut ? ' selected' : '') + '>' + x.emoji + ' ' + x.nom + '</option>';
      }).join('') + '</select></label>' +
      '<label class="champ-groupe"><span>Quantité mangée (g ou ml)</span><input class="champ" type="number" min="1" step="any" inputmode="decimal" value="' + U.r(grammes) + '" data-g></label>' +
      '<div class="modal-actions"><button class="bouton bouton-principal" data-ok>📅 Ajouter au planning</button></div>',
      function (m) {
        m.el.querySelector('[data-ok]').addEventListener('click', function () {
          var g = Number(m.el.querySelector('[data-g]').value);
          if (!(g > 0)) { U.toast('Indiquez la quantité'); return; }
          var jour = m.el.querySelector('[data-jour]').value;
          D.planifierProduit(jour, m.el.querySelector('[data-repas]').value, pr, g);
          m.fermer();
          U.toast('Ajouté au planning');
          location.hash = '#/planning/' + jour;
        });
      });
  }

  window.Vues.produit = function (app, params) {
    var code = P.normaliser(params[0]);
    var iso = params[1], repasId = params[2];
    document.title = 'Produit · Ma Cuisine';
    var retour = '<div class="fiche-barre"><a href="#/scanner' + (iso && repasId ? '/' + iso + '/' + repasId : '') + '" class="retour">← Scanner</a></div>';
    app.innerHTML = retour + '<div class="vide"><p>🔎 Recherche du produit ' + U.esc(code) + '…</p></div>';
    var actif = true;
    window.App.quitter = function () { actif = false; };

    P.chercher(code, true).then(function (pr) {
      if (!actif) return;
      if (!pr) {
        app.innerHTML = retour + '<div class="vide"><p>Ce produit (' + U.esc(code) + ') n\'est pas encore dans Open Food Facts.</p>' +
          '<p>Vous pouvez l\'ajouter en quelques photos sur l\'application ou le site Open Food Facts : il profitera à tout le monde.</p>' +
          '<p><a class="bouton" href="' + P.urlAjout(code) + '" target="_blank" rel="noopener">➕ Ajouter sur Open Food Facts</a></p>' +
          '<p><a class="bouton bouton-principal" href="#/scanner">📷 Scanner un autre produit</a></p></div>';
        return;
      }
      afficher(pr);
    }).catch(function () {
      if (!actif) return;
      app.innerHTML = retour + '<div class="vide"><p>Impossible de joindre Open Food Facts : vérifiez votre connexion internet.</p>' +
        '<p>Les produits déjà consultés restent disponibles hors ligne.</p><p><button class="bouton" data-reessayer>↻ Réessayer</button></p></div>';
      app.querySelector('[data-reessayer]').addEventListener('click', function () { window.Vues.produit(app, params); });
    });

    function afficher(pr) {
      document.title = pr.nom + ' · Ma Cuisine';
      var grammes = pr.portionG || 100;
      var cibles = D.cibles();
      var complet = P.complet(pr);

      function rendreNutrition() {
        var g = grammes;
        app.querySelector('[data-nutrition]').innerHTML =
          '<table class="tableau-nutri"><thead><tr><th></th><th>100 g</th><th>' + U.r(g) + ' g' + (cibles ? ' <small>% du jour</small>' : '') + '</th></tr></thead><tbody>' +
            ligneNutri('Énergie', 'kcal', pr, g, cibles) +
            ligneNutri('Protéines', 'p', pr, g, cibles) +
            ligneNutri('Glucides', 'g', pr, g, cibles) +
            ligneNutri('dont sucres', 'sucres', pr, g, null, true) +
            ligneNutri('Lipides', 'l', pr, g, cibles) +
            ligneNutri('dont saturés', 'ags', pr, g, null, true) +
            ligneNutri('Fibres', 'f', pr, g, null) +
            ligneNutri('Sel', 'sel', pr, g, null) +
          '</tbody></table>' +
          '<p class="aide"><i class="niveau niveau-bas"></i> faible <i class="niveau niveau-moyen"></i> modéré <i class="niveau niveau-eleve"></i> élevé (repères pour 100 g)</p>';
      }

      var alerteLactose = pr.sansLactose ? '<p class="produit-alerte ok">🥛 Étiqueté sans lactose.</p>'
        : pr.lait ? '<p class="produit-alerte' + (D.sansLactose() ? ' danger' : '') + '">🥛 Contient du lait : il contient probablement du lactose' + (D.sansLactose() ? ', attention à votre intolérance.' : '.') + '</p>' : '';

      app.innerHTML = retour +
        '<article class="produit">' +
          '<header class="produit-entete">' +
            '<div class="produit-image">' + (pr.imageGrande ? '<img src="' + U.esc(pr.imageGrande) + '" alt="" referrerpolicy="no-referrer" onerror="this.outerHTML=\'📦\'">' : '<span aria-hidden="true">📦</span>') + '</div>' +
            '<div><p class="fiche-cat">' + U.esc([pr.marque, pr.quantite].filter(Boolean).join(' · ') || 'Produit') + '</p>' +
              '<h1>' + U.esc(pr.nom) + '</h1>' +
              '<p class="produit-code">Code-barres ' + U.esc(pr.code) + (pr.bio ? ' · 🌱 Bio' : '') + '</p>' +
              '<div class="produit-scores">' +
                '<div>' + lettre('nutri', pr.nutriscore, 'Nutri-Score') + '<small>' + U.esc(pr.nutriscore ? P.NUTRISCORE[pr.nutriscore] : 'Nutri-Score inconnu') + '</small></div>' +
                '<div>' + lettre('nova', pr.nova, 'Groupe NOVA') + '<small>' + U.esc(pr.nova ? P.NOVA[pr.nova] : 'Transformation inconnue') + '</small></div>' +
                (pr.eco ? '<div>' + lettre('eco', pr.eco, 'Green-Score') + '<small>Impact environnemental</small></div>' : '') +
              '</div>' +
            '</div>' +
          '</header>' +
          alerteLactose +
          '<div class="actions-principales">' +
            (complet ? '<button class="bouton bouton-principal" data-journal>📅 Ajouter à mon planning</button>' +
              '<button class="bouton" data-ingredient>🧾 Utiliser dans mes recettes</button>' : '') +
            '<a class="bouton" href="#/scanner' + (iso && repasId ? '/' + iso + '/' + repasId : '') + '">📷 Scanner un autre</a>' +
          '</div>' +
          '<div class="fiche-grille">' +
            '<div class="fiche-gauche">' +
              '<section class="bloc">' +
                '<h2>Valeurs nutritionnelles</h2>' +
                (complet
                  ? '<div class="portion-produit"><label>Ma portion <input class="champ" type="number" min="1" step="any" inputmode="decimal" value="' + U.r(grammes) + '" data-portion> g</label>' +
                      (pr.portionTexte ? '<small>Portion indiquée : ' + U.esc(pr.portionTexte) + '</small>' : '') + '</div>' +
                    '<div data-nutrition></div>'
                  : '<p class="vide-petit">Les valeurs nutritionnelles de ce produit ne sont pas encore renseignées dans Open Food Facts.</p>') +
              '</section>' +
            '</div>' +
            '<div class="fiche-droite">' +
              '<section class="bloc">' +
                '<h2>Allergènes</h2>' +
                (pr.allergenes.length ? '<div class="produit-puces">' + pr.allergenes.map(function (a) { return '<span class="puce-info danger">' + U.esc(a) + '</span>'; }).join('') + '</div>' : '<p class="aide">Aucun allergène déclaré.</p>') +
                (pr.traces.length ? '<p class="aide">Traces possibles : ' + U.esc(pr.traces.join(', ')) + '.</p>' : '') +
                '<h2 class="sous-titre">Additifs</h2>' +
                (pr.additifs.length ? '<div class="produit-puces">' + pr.additifs.map(function (a) { return '<span class="puce-info">' + U.esc(a) + '</span>'; }).join('') + '</div>' : '<p class="aide">Aucun additif.</p>') +
                (pr.ingredients ? '<details class="produit-ingredients"><summary>Liste des ingrédients</summary><p>' + U.esc(pr.ingredients) + '</p></details>' : '') +
              '</section>' +
              '<section class="bloc" data-alternatives-bloc>' +
                '<h2>🌿 Alternatives mieux notées</h2>' +
                (pr.nutriscore === 'a' ? '<p class="aide">Ce produit a déjà le meilleur Nutri-Score.</p>'
                  : '<p class="aide">Des produits de la même catégorie avec un meilleur Nutri-Score.</p><button class="bouton" data-alternatives>Voir les alternatives</button><div data-alternatives-liste></div>') +
              '</section>' +
            '</div>' +
          '</div>' +
          '<p class="note">Données <a href="' + P.urlFiche(pr.code) + '" target="_blank" rel="noopener">Open Food Facts</a> (licence ODbL), complétées par les contributeurs : vérifiez l\'emballage en cas d\'allergie. ' +
            'Une erreur ? Vous pouvez corriger la fiche sur Open Food Facts.</p>' +
        '</article>';

      if (complet) {
        rendreNutrition();
        var champ = app.querySelector('[data-portion]');
        champ.addEventListener('input', function () { var v = Number(champ.value); if (v > 0) { grammes = v; rendreNutrition(); } });
        app.querySelector('[data-journal]').addEventListener('click', function () { modalJournal(pr, grammes, iso, repasId); });
        app.querySelector('[data-ingredient]').addEventListener('click', function () {
          var n = pr.n100;
          var id = D.ajouterIngredient(pr.nom + (pr.marque ? ' (' + pr.marque + ')' : ''), 'epicerie', [U.r(n.kcal), n.p || 0, n.g || 0, n.l || 0, n.f || 0], pr.portionG || null);
          U.toast('Ajouté à vos ingrédients : il est disponible dans « Créer une recette »');
          return id;
        });
      }
      var alt = app.querySelector('[data-alternatives]');
      if (alt) alt.addEventListener('click', function () {
        var zone = app.querySelector('[data-alternatives-liste]');
        alt.hidden = true;
        zone.innerHTML = '<p class="aide">Recherche…</p>';
        P.alternatives(pr).then(function (liste) {
          zone.innerHTML = liste.length ? '<ul class="produits-liste">' + liste.map(function (x) { return ligneProduit(x, iso && repasId ? '/' + iso + '/' + repasId : ''); }).join('') + '</ul>'
            : '<p class="vide-petit">Pas d\'alternative mieux notée trouvée dans cette catégorie.</p>';
        }).catch(function () { zone.innerHTML = '<p class="vide-petit">Recherche impossible : vérifiez votre connexion.</p>'; alt.hidden = false; });
      });
    }
  };
})();
