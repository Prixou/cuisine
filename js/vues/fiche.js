/* Vue : fiche détaillée d'une recette. */
(function () {
  'use strict';

  var U = window.U, D = window.D, M = window.Moteur, C = window.Commun;
  var verrouEcran = null;

  function libererEcran() {
    if (verrouEcran) { verrouEcran.release().catch(function () {}); verrouEcran = null; }
  }

  function tuile(classe, nom, valeur) {
    return '<div class="tuile ' + classe + '"><span class="tuile-valeur">' + valeur + '<small> g</small></span><span class="tuile-nom">' + nom + '</span></div>';
  }

  /* Batch cooking : durée de conservation, réchauffage et sessions qui contiennent la recette. */
  function blocConservation(r) {
    var B = window.BATCH, c = B.conservation(r.id);
    if (!c) return '';
    var sessions = B.sessionsAvec(r.id);
    return '<section class="bloc conservation">' +
      '<h2>🍱 Batch cooking</h2>' +
      '<ul class="conserv-liste">' +
        '<li><span aria-hidden="true">' + (c.mode === 'boite' ? '🫙' : '🧊') + '</span><div><b>' + c.frigo + ' jours</b><small>' + (c.mode === 'boite' ? 'en boîte hermétique' : 'au réfrigérateur') + '</small></div></li>' +
        '<li><span aria-hidden="true">❄️</span><div><b>' + (c.congel ? c.congel + ' mois' : 'Déconseillé') + '</b><small>au congélateur</small></div></li>' +
      '</ul>' +
      '<p><b>' + (c.mode === 'froid' || c.mode === 'boite' ? 'Pour servir' : c.mode === 'base' ? 'Pour l\'utiliser' : 'Pour réchauffer') + ' :</b> ' + U.esc(c.reprise) + '</p>' +
      (c.conseil ? '<p>💡 ' + U.esc(c.conseil) + '</p>' : '') +
      (sessions.length ? '<p class="conserv-sessions">Dans ' + (sessions.length > 1 ? 'les sessions' : 'la session') + ' ' + sessions.map(function (x) {
        return '<a href="#/batch/' + encodeURIComponent(x.id) + '">' + U.esc(x.emoji + ' ' + x.nom) + '</a>';
      }).join(', ') + '</p>' : '') +
    '</section>';
  }

  window.Vues.recette = function (app, params) {
    var id = params[0];
    var r = D.parId[id];
    if (!r) {
      app.innerHTML = '<div class="vide"><p>Cette recette n\'existe pas ou a été supprimée.</p><a class="bouton" href="#/">← Retour aux recettes</a></div>';
      return;
    }
    document.title = r.nom + ' · Ma Cuisine';
    var portions = D.portions[id] || r.portions;
    var coches = {};
    var faites = {};
    var notes = D.notes[id] || { etoiles: 0, texte: '' };
    var photo = D.photos.url(id);

    app.innerHTML =
      '<article class="fiche">' +
        '<div class="fiche-barre">' +
          '<a href="#/" class="retour">← Recettes</a>' +
          '<div class="fiche-actions">' +
            ('wakeLock' in navigator ? '<button class="bouton-pilule" data-cuisine aria-pressed="false" title="Empêche l\'écran de se mettre en veille">🔆 Mode cuisine</button>' : '') +
            '<button class="bouton-pilule" data-favori></button>' +
          '</div>' +
        '</div>' +
        '<header class="fiche-entete">' +
          '<div class="fiche-visuel" data-fiche-visuel></div>' +
          '<div>' +
            '<p class="fiche-cat">' + U.esc(r.cat) + ' · ' + U.esc(r.cuisine) + (r.perso ? ' · Ma recette' : '') + '</p>' +
            '<h1>' + U.esc(r.nom) + '</h1>' +
            (r.desc ? '<p class="fiche-desc">' + U.esc(r.desc) + '</p>' : '') +
            '<ul class="fiche-infos">' +
              '<li>🔪 Préparation <b>' + U.duree(r.prep) + '</b></li>' +
              (r.cuisson ? '<li>🔥 Cuisson <b>' + U.duree(r.cuisson) + '</b></li>' : '<li>❄️ Sans cuisson</li>') +
              '<li>📊 <b>' + C.DIFFICULTES[r.diff] + '</b></li>' +
              (r.nutrition.regimes.vegan ? '<li>🌱 Vegan</li>' : r.nutrition.regimes.vegetarien ? '<li>🥕 Végétarien</li>' : '') +
              (r.nutrition.regimes.sansGluten ? '<li>🌾 Sans gluten*</li>' : '') +
              (notes.etoiles ? '<li>' + C.etoiles(notes.etoiles) + '</li>' : '') +
            '</ul>' +
          '</div>' +
        '</header>' +
        '<div class="actions-principales">' +
          '<button class="bouton" data-planifier>📅 Planifier</button>' +
          '<button class="bouton" data-courses>🛒 Ajouter aux courses</button>' +
          '<button class="bouton" data-cuisinee hidden title="Retirer de mon stock ce que j\'ai utilisé">✅ Je l\'ai cuisinée</button>' +
          (r.perso
            ? '<a class="bouton" href="#/modifier/' + encodeURIComponent(id) + '">✏️ Modifier</a><button class="bouton bouton-danger-doux" data-supprimer>🗑 Supprimer</button>'
            : '<a class="bouton" href="#/dupliquer/' + encodeURIComponent(id) + '" title="Créer votre propre version modifiable">✏️ Adapter à ma façon</a>') +
        '</div>' +

        '<div class="fiche-grille">' +
          '<div class="fiche-gauche">' +
            '<section class="bloc portions-bloc">' +
              '<h2>Portions</h2>' +
              '<div class="portions">' +
                '<button class="rond" data-delta="-1" aria-label="Une portion de moins">−</button>' +
                '<input id="portions" type="number" inputmode="numeric" min="1" max="100" value="' + portions + '" aria-label="Nombre de portions">' +
                '<button class="rond" data-delta="1" aria-label="Une portion de plus">+</button>' +
              '</div>' +
              '<button class="lien" data-portions-reinit hidden>Revenir à ' + r.portions + '</button>' +
            '</section>' +
            '<section class="bloc nutrition">' +
              '<h2>Valeurs nutritionnelles</h2>' +
              '<p class="nutri-sous">par portion</p>' +
              '<div data-nutri></div>' +
            '</section>' +
            '<section class="bloc">' +
              '<h2>Ingrédients <small data-ing-pour></small></h2>' +
              '<div class="stock-resume" data-stock-resume hidden></div>' +
              '<ul class="ingredients" data-ingredients></ul>' +
            '</section>' +
            blocConservation(r) +
          '</div>' +

          '<div class="fiche-droite">' +
            '<section class="bloc">' +
              '<h2>Préparation</h2>' +
              '<p class="aide">Touchez une étape pour la marquer comme faite, et ⏱ pour lancer un minuteur.</p>' +
              '<ol class="etapes">' + r.etapes.map(function (e, i) {
                return '<li data-i="' + i + '"><span class="etape-num">' + (i + 1) + '</span><p>' +
                  window.Minuteurs.enrichir(e, r.nom + ' · étape ' + (i + 1)) + '</p></li>';
              }).join('') + '</ol>' +
              (r.astuce ? '<aside class="astuce"><b>💡 Astuce</b><p>' + U.esc(r.astuce) + '</p></aside>' : '') +
            '</section>' +
            '<section class="bloc">' +
              '<h2>Mes notes</h2>' +
              '<div class="etoiles-saisie" role="radiogroup" aria-label="Ma note">' +
                [1, 2, 3, 4, 5].map(function (n) {
                  return '<button role="radio" aria-checked="' + (notes.etoiles === n) + '" data-etoile="' + n + '" aria-label="' + n + ' étoile' + (n > 1 ? 's' : '') + '">★</button>';
                }).join('') +
              '</div>' +
              '<textarea class="champ" data-texte rows="3" placeholder="Vos remarques : cuisson, variantes, à refaire…">' + U.esc(notes.texte) + '</textarea>' +
              '<div class="photo-actions">' +
                '<label class="bouton">📷 ' + (photo ? 'Changer la photo' : 'Ajouter ma photo') + '<input type="file" accept="image/*" data-photo hidden></label>' +
                (photo ? '<button class="bouton bouton-danger-doux" data-photo-suppr>Retirer la photo</button>' : '') +
              '</div>' +
            '</section>' +
          '</div>' +
        '</div>' +
        '<p class="note">Valeurs calculées à partir des ingrédients crus (tables CIQUAL / USDA), hors ingrédients « selon goût ». Elles sont indicatives. ' +
          '* Sans gluten d\'après les ingrédients : vérifiez les étiquettes (bouillon, épices…).</p>' +
      '</article>';

    var $ = function (s) { return app.querySelector(s); };

    // Visuel : ma photo, sinon photo Wikimedia (avec crédit obligatoire), sinon emoji.
    var PA = window.PhotosAuto;
    function rendreVisuel(auto) {
      var zone = $('[data-fiche-visuel]');
      if (!zone) return;
      var html;
      if (photo) {
        html = '<img class="fiche-photo" src="' + photo + '" alt="Ma photo de ' + U.esc(r.nom) + '">';
      } else if (auto) {
        html = PA.balise(auto, 'Photo : ' + r.nom, r.emoji, 'fiche-photo') +
          '<p class="credit-photo">📷 ' + (auto.page ? '<a href="' + U.esc(auto.page) + '" target="_blank" rel="noopener">Photo</a>' : 'Photo') +
          ' : ' + U.esc(auto.auteur) + ' · ' +
          (auto.licenceUrl ? '<a href="' + U.esc(auto.licenceUrl) + '" target="_blank" rel="noopener">' + U.esc(auto.licence) + '</a>' : U.esc(auto.licence)) +
          ' · Wikimedia Commons<br><button class="lien" data-photo-suivante>Pas la bonne photo ?</button></p>';
      } else {
        html = '<div class="fiche-emoji" aria-hidden="true">' + U.esc(r.emoji) + '</div>';
      }
      zone.innerHTML = html;
      var suivante = zone.querySelector('[data-photo-suivante]');
      if (suivante) suivante.addEventListener('click', function () {
        suivante.disabled = true;
        suivante.textContent = 'Recherche d\'une autre photo…';
        PA.suivante(r).then(function (p) {
          if (!document.contains(zone)) return;
          rendreVisuel(p);
          U.toast(p ? 'Nouvelle photo trouvée' : 'Aucune autre photo trouvée : l\'emoji est affiché');
        });
      });
    }
    var connue = !photo && !r.perso && PA.connue(id);
    rendreVisuel(connue);
    if (!photo && !connue && !r.perso && PA.actif()) {
      PA.obtenir(r).then(function (p) { if (p && document.contains(app)) rendreVisuel(p); });
    }
    var champ = $('#portions');

    function majPortions() {
      var facteur = portions / r.portions;
      champ.value = portions;
      $('[data-portions-reinit]').hidden = portions === r.portions;
      if (portions === r.portions) delete D.portions[id]; else D.portions[id] = portions;
      D.sauver('portions');

      $('[data-ing-pour]').textContent = 'pour ' + U.pluriel(portions, 'portion');
      var S = window.Stock, avecStock = S.nombre() > 0;
      $('[data-ingredients]').innerHTML = r.ing.map(function (ligne, i) {
        var a = M.afficherLigne(ligne, facteur);
        var marque = '';
        if (avecStock && (ligne[2] || 'g') !== 'qs' && ligne[0] !== 'eau') {
          var src = S.source(ligne[0]), g = src && S.grammes(src);
          if (src && g !== null && g < M.versGrammes(ligne, facteur)) marque = '<span class="ing-stock peu" title="Votre stock : ' + U.esc(S.texteQuantite(src)) + '">🏠 pas assez</span>';
          else if (src) marque = '<span class="ing-stock" title="' + (src === ligne[0] ? 'Dans mon stock' : 'J\'ai : ' + U.esc(S.nom(src))) + '">🏠</span>';
        }
        return '<li class="' + (coches[i] ? 'coche' : '') + '"><label>' +
          '<input type="checkbox" data-i="' + i + '"' + (coches[i] ? ' checked' : '') + '>' +
          '<span class="ing-qte">' + U.esc(a.qte) + '</span><span class="ing-nom">' + U.esc(a.nom) + marque + '</span></label></li>';
      }).join('');
      majStock();

      var n = r.nutrition.parPortion, t = r.nutrition.total, rep = M.repartition(n);
      var cibles = D.cibles();
      $('[data-nutri]').innerHTML =
        '<div class="kcal"><span class="kcal-valeur">' + U.r(n.kcal) + '</span><span class="kcal-unite">kcal</span></div>' +
        '<div class="tuiles">' + tuile('t-p', 'Protéines', U.r(n.p)) + tuile('t-g', 'Glucides', U.r(n.g)) + tuile('t-l', 'Lipides', U.r(n.l)) + tuile('t-f', 'Fibres', U.r(n.f)) + '</div>' +
        '<div class="repartition" role="img" aria-label="Répartition des calories : protéines ' + U.r(rep.p) + ' %, glucides ' + U.r(rep.g) + ' %, lipides ' + U.r(rep.l) + ' %">' +
          '<span class="r-p" style="width:' + rep.p + '%"></span><span class="r-g" style="width:' + rep.g + '%"></span><span class="r-l" style="width:' + rep.l + '%"></span>' +
        '</div>' +
        '<div class="repartition-legende"><span><i class="pt-p"></i>Protéines ' + U.r(rep.p) + ' %</span><span><i class="pt-g"></i>Glucides ' + U.r(rep.g) + ' %</span><span><i class="pt-l"></i>Lipides ' + U.r(rep.l) + ' %</span></div>' +
        (cibles
          ? '<div class="objectif-part"><b>🎯 Une portion =</b> ' + U.r(n.kcal / cibles.kcal * 100) + ' % de vos calories du jour · ' + U.r(n.p / cibles.p * 100) + ' % de vos protéines</div>'
          : '<p class="objectif-part"><a href="#/profil">🎯 Définir mes objectifs</a> pour voir la part de mes besoins du jour.</p>') +
        '<div class="total"><b>Total pour ' + U.pluriel(portions, 'portion') + '</b>' +
          '<span>' + U.r(t.kcal * facteur) + ' kcal · P ' + U.r(t.p * facteur) + ' g · G ' + U.r(t.g * facteur) + ' g · L ' + U.r(t.l * facteur) + ' g</span></div>';
    }

    // Mon stock : ce que j'ai déjà, ce qui manque pour le nombre de portions choisi.
    function manquantes() {
      var S = window.Stock, facteur = portions / r.portions;
      return r.ing.filter(function (l) {
        if ((l[2] || 'g') === 'qs' || l[0] === 'eau' || S.estBasique(l[0])) return false;
        var src = S.source(l[0]);
        if (!src) return true;
        var g = S.grammes(src);
        return g !== null && g < M.versGrammes(l, facteur);
      });
    }
    function majStock() {
      var S = window.Stock, zone = $('[data-stock-resume]');
      $('[data-cuisinee]').hidden = !S.nombre() || !S.utilises(r, portions).length;
      if (!S.nombre()) { zone.hidden = true; return; }
      var a = S.analyser(r), manque = manquantes();
      var nbManque = manque.map(function (l) { return l[0]; }).filter(function (id, i, t) { return t.indexOf(id) === i; }).length;
      zone.hidden = false;
      zone.className = 'stock-resume' + (manque.length ? '' : ' ok');
      zone.innerHTML = manque.length
        ? '🏠 Vous avez <b>' + (a.requis - nbManque) + ' / ' + a.requis + '</b> ingrédients' +
          (a.maxPortions < portions && a.maxPortions >= 1 ? ' (assez pour ' + U.pluriel(a.maxPortions, 'portion') + ')' : '') +
          ' <button class="lien" data-manquants>🛒 Ajouter ' + (nbManque > 1 ? 'les ' + nbManque + ' manquants' : 'le manquant') + ' aux courses</button>'
        : '🏠 <b>Vous avez tout ce qu\'il faut</b>' + (S.basiques() ? ' (avec les basiques du placard)' : '') + ' !';
    }

    function changer(v) {
      v = Math.round(Number(v));
      portions = Math.min(100, Math.max(1, v || 1));
      majPortions();
    }

    app.querySelectorAll('[data-delta]').forEach(function (b) {
      b.addEventListener('click', function () { changer(portions + Number(b.dataset.delta)); });
    });
    champ.addEventListener('change', function () { changer(champ.value); });
    $('[data-portions-reinit]').addEventListener('click', function () { changer(r.portions); });

    $('[data-ingredients]').addEventListener('change', function (e) {
      coches[e.target.dataset.i] = e.target.checked;
      e.target.closest('li').classList.toggle('coche', e.target.checked);
    });
    app.querySelectorAll('.etapes li').forEach(function (li) {
      li.addEventListener('click', function () {
        faites[li.dataset.i] = !faites[li.dataset.i];
        li.classList.toggle('faite', faites[li.dataset.i]);
      });
    });

    // Favori
    var favori = $('[data-favori]');
    function majFavori() {
      var actif = D.estFavori(id);
      favori.setAttribute('aria-pressed', actif);
      favori.textContent = actif ? '♥ Favori' : '♡ Favori';
    }
    favori.addEventListener('click', function () { D.basculerFavori(id); majFavori(); });
    majFavori();

    // Mode cuisine (écran toujours allumé)
    var modeCuisine = $('[data-cuisine]');
    if (modeCuisine) modeCuisine.addEventListener('click', function () {
      if (verrouEcran) { libererEcran(); modeCuisine.setAttribute('aria-pressed', 'false'); return; }
      navigator.wakeLock.request('screen').then(function (v) {
        verrouEcran = v;
        modeCuisine.setAttribute('aria-pressed', 'true');
        v.addEventListener('release', function () { verrouEcran = null; modeCuisine.setAttribute('aria-pressed', 'false'); });
      }).catch(function () { U.toast('Mode cuisine indisponible sur cet appareil'); });
    });

    // Planning & courses
    $('[data-planifier]').addEventListener('click', function () { C.planifier(r, 1); });
    $('[data-courses]').addEventListener('click', function () {
      D.ajouterAuxCourses(id, portions, false);
      U.toast('Ajouté aux courses pour ' + U.pluriel(portions, 'portion'));
      window.App.majBadges();
    });
    $('[data-stock-resume]').addEventListener('click', function (e) {
      if (!e.target.closest('[data-manquants]')) return;
      var facteur = portions / r.portions, n = 0;
      manquantes().forEach(function (l) {
        // S'il en reste un peu, on n'achète que la différence.
        var src = window.Stock.source(l[0]), g = src && window.Stock.grammes(src), besoin = M.versGrammes(l, facteur);
        var part = g !== null && g > 0 && besoin > 0 ? (besoin - g) / besoin : 1;
        var a = M.afficherLigne(l, facteur * part);
        var texte = a.nom + ' — ' + a.qte + ' (' + r.nom + ')';
        if (D.courses.libres.some(function (x) { return x.texte === texte; })) return;
        D.courses.libres.push({ id: U.aleatoire(), texte: texte });
        n++;
      });
      D.sauver('courses');
      window.App.majBadges();
      U.toast(n ? U.pluriel(n, 'article ajouté', 'articles ajoutés') + ' aux courses' : 'Déjà dans la liste de courses');
    });
    $('[data-cuisinee]').addEventListener('click', function () {
      var S = window.Stock, utilises = S.utilises(r, portions);
      U.modal('Vous avez cuisiné « ' + r.nom + ' »',
        '<p class="aide">Pour ' + U.pluriel(portions, 'portion') + '. Les quantités suivies sont déduites de votre stock. Cochez ce qu\'il ne vous reste plus.</p>' +
        '<ul class="stock-cuisinee">' + utilises.map(function (e) {
          var fini = e.suivi && !(e.reste > 0.01);
          var reste = e.suivi ? (fini ? 'épuisé' : 'reste ' + S.formater(e.id, e.reste, e.unite)) : '';
          return '<li><label class="case"><input type="checkbox" data-fini="' + e.id + '"' + (fini ? ' checked' : '') + '> Plus de ' + U.esc(S.nom(e.id)) +
            (reste ? ' <small>(' + reste + ')</small>' : '') + '</label></li>';
        }).join('') + '</ul>' +
        '<div class="modal-actions"><button class="bouton bouton-principal" data-ok>Mettre à jour mon stock</button></div>',
        function (m) {
          m.el.querySelector('[data-ok]').addEventListener('click', function () {
            var finis = [].slice.call(m.el.querySelectorAll('[data-fini]:checked')).map(function (c) { return c.dataset.fini; });
            S.consommer(utilises, finis);
            m.fermer();
            U.toast('Stock mis à jour' + (finis.length ? ' · ' + U.pluriel(finis.length, 'ingrédient retiré', 'ingrédients retirés') : ''));
            majPortions();
          });
        });
    });
    var suppr = $('[data-supprimer]');
    if (suppr) suppr.addEventListener('click', function () {
      U.confirmer('Supprimer définitivement « ' + r.nom + ' » ?', 'Supprimer', function () {
        D.supprimerRecette(id);
        U.toast('Recette supprimée');
        location.hash = '#/';
      });
    });

    // Notes, étoiles, photo
    function sauverNotes() {
      if (!notes.etoiles && !notes.texte) delete D.notes[id]; else D.notes[id] = notes;
      D.sauver('notes');
    }
    app.querySelectorAll('[data-etoile]').forEach(function (b) {
      b.addEventListener('click', function () {
        var n = Number(b.dataset.etoile);
        notes.etoiles = notes.etoiles === n ? 0 : n;
        app.querySelectorAll('[data-etoile]').forEach(function (x) {
          x.setAttribute('aria-checked', Number(x.dataset.etoile) === notes.etoiles);
          x.classList.toggle('pleine', Number(x.dataset.etoile) <= notes.etoiles);
        });
        sauverNotes();
      });
      b.classList.toggle('pleine', Number(b.dataset.etoile) <= notes.etoiles);
    });
    var minuterie;
    $('[data-texte]').addEventListener('input', function (e) {
      clearTimeout(minuterie);
      minuterie = setTimeout(function () { notes.texte = e.target.value.trim(); sauverNotes(); }, 400);
    });
    $('[data-photo]').addEventListener('change', function (e) {
      var f = e.target.files[0];
      if (!f) return;
      U.redimensionner(f, 1000).then(function (blob) { return D.photos.enregistrer(id, blob); })
        .then(function () { U.toast('Photo enregistrée'); window.Vues.recette(app, params); })
        .catch(function () { U.toast('Impossible d\'enregistrer cette photo'); });
    });
    var photoSuppr = $('[data-photo-suppr]');
    if (photoSuppr) photoSuppr.addEventListener('click', function () {
      D.photos.supprimer(id).then(function () { window.Vues.recette(app, params); });
    });

    majPortions();
    window.scrollTo(0, 0);
  };

  window.Vues.recette.quitter = libererEcran;
})();
