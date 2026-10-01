/* Éléments d'interface partagés entre les vues. */
(function () {
  'use strict';

  var U = window.U, D = window.D;
  window.Vues = {};
  var C = window.Commun = {};

  C.DIFFICULTES = ['', 'Facile', 'Moyen', 'Difficile'];

  C.badges = function (r) {
    var b = [];
    if (r.perso) b.push('<span class="badge badge-perso">Ma recette</span>');
    if (r.nutrition.regimes.vegan) b.push('<span class="badge badge-vege">Vegan</span>');
    else if (r.nutrition.regimes.vegetarien) b.push('<span class="badge badge-vege">Végé</span>');
    if (r.proteine) b.push('<span class="badge badge-proteine">Protéiné</span>');
    var c = window.BATCH.conservation(r.id);
    if (c && c.congel) b.push('<span class="badge badge-batch" title="Se congèle ' + c.congel + ' mois">❄️ Batch</span>');
    else if (c) b.push('<span class="badge badge-batch" title="Se garde ' + c.frigo + ' jours">Batch</span>');
    return b.join('');
  };

  C.etoiles = function (n) {
    return n ? '<span class="etoiles" aria-label="' + n + ' étoiles sur 5">' + '★★★★★'.slice(0, n) + '<span>' + '★★★★★'.slice(n) + '</span></span>' : '';
  };

  /* Ma photo d'abord, sinon la photo Wikimedia (cherchée quand la carte devient visible), sinon l'emoji. */
  C.visuel = function (r) {
    var photo = D.photos.url(r.id);
    if (photo) return '<img src="' + photo + '" alt="" loading="lazy">';
    var auto = window.PhotosAuto.connue(r.id);
    if (auto) return window.PhotosAuto.balise(auto, '', r.emoji);
    var attente = window.PhotosAuto.actif() && !r.perso ? ' data-photo-auto="' + U.esc(r.id) + '"' : '';
    return '<span' + attente + '>' + U.esc(r.emoji || '🍽️') + '</span>';
  };

  C.carte = function (r, supplement) {
    var n = r.nutrition.parPortion;
    var note = D.notes[r.id] && D.notes[r.id].etoiles;
    return '<a class="carte" href="#/recette/' + encodeURIComponent(r.id) + '">' +
      '<div class="carte-visuel" aria-hidden="true">' + C.visuel(r) +
        (D.estFavori(r.id) ? '<span class="carte-coeur">♥</span>' : '') + '</div>' +
      '<div class="carte-corps">' +
        '<div class="carte-badges">' + C.badges(r) + '</div>' +
        '<h3>' + U.esc(r.nom) + '</h3>' +
        '<p class="carte-meta">⏱ ' + U.duree(r.temps) + ' · ' + U.esc(r.cuisine) + (note ? ' · ' + C.etoiles(note) : '') + '</p>' +
        (supplement || '') +
        '<div class="carte-nutri">' +
          '<strong>' + U.r(n.kcal) + ' kcal</strong>' +
          '<span title="Protéines"><i class="pt-p"></i>' + U.r(n.p) + ' g</span>' +
          '<span title="Glucides"><i class="pt-g"></i>' + U.r(n.g) + ' g</span>' +
          '<span title="Lipides"><i class="pt-l"></i>' + U.r(n.l) + ' g</span>' +
        '</div>' +
        '<p class="carte-portion">par portion</p>' +
      '</div></a>';
  };

  C.grille = function (recettes, supplement) {
    return '<div class="grille">' + recettes.map(function (r) { return C.carte(r, supplement && supplement(r)); }).join('') + '</div>';
  };

  C.barre = function (valeur, cible, classe) {
    var pct = cible ? Math.min(100, valeur / cible * 100) : 0;
    var depasse = cible && valeur > cible * 1.1;
    return '<div class="jauge ' + (classe || '') + (depasse ? ' depasse' : '') + '"><span style="width:' + pct + '%"></span></div>';
  };

  /* Fenêtre de choix d'une recette (recherche + liste). */
  C.choisirRecette = function (titre, categories, auChoix) {
    U.modal(titre,
      '<input type="search" class="champ" placeholder="Rechercher une recette…" data-recherche>' +
      '<label class="case"><input type="checkbox" data-toutes' + (categories ? '' : ' checked') + '> Toutes les catégories</label>' +
      '<ul class="choix-liste" data-liste></ul>',
      function (m) {
        var champ = m.el.querySelector('[data-recherche]');
        var toutes = m.el.querySelector('[data-toutes]');
        var ul = m.el.querySelector('[data-liste]');
        function rendre() {
          var mots = U.normaliser(champ.value).split(/\s+/).filter(Boolean);
          var regime = D.profil && D.profil.regime;
          var res = D.recettes.filter(function (r) {
            if (!toutes.checked && categories && categories.indexOf(r.cat) === -1) return false;
            return mots.every(function (mot) { return r.texte.indexOf(mot) !== -1; });
          }).sort(function (a, b) {
            return (D.regimeOk(b, regime) - D.regimeOk(a, regime)) || (D.estFavori(b.id) - D.estFavori(a.id)) || a.nom.localeCompare(b.nom, 'fr');
          }).slice(0, 80);
          ul.innerHTML = res.map(function (r) {
            return '<li><button data-id="' + U.esc(r.id) + '"><span class="choix-emoji">' + U.esc(r.emoji) + '</span>' +
              '<span class="choix-nom">' + U.esc(r.nom) + '<small>' + U.esc(r.cat) + '</small></span>' +
              '<span class="choix-kcal">' + U.r(r.nutrition.parPortion.kcal) + ' kcal</span></button></li>';
          }).join('') || '<li class="vide-petit">Aucune recette trouvée.</li>';
        }
        champ.addEventListener('input', rendre);
        toutes.addEventListener('change', rendre);
        ul.addEventListener('click', function (e) {
          var b = e.target.closest('button[data-id]');
          if (!b) return;
          m.fermer();
          auChoix(D.parId[b.dataset.id]);
        });
        rendre();
      });
  };

  /* Fenêtre « Planifier » : jour, repas, portions. */
  C.planifier = function (r, portionsParDefaut) {
    var jours = [];
    for (var i = 0; i < 14; i++) {
      var d = U.ajouterJours(U.aujourdhui(), i);
      jours.push('<option value="' + U.iso(d) + '">' + (i === 0 ? 'Aujourd\'hui' : i === 1 ? 'Demain' : U.date(d, { weekday: 'long', day: 'numeric', month: 'short' })) + '</option>');
    }
    var repasDefaut = r.cat === 'Petit-déjeuner' ? 'petitdej' : (r.cat === 'Desserts' || r.cat === 'Apéro') ? 'collation' : (new Date().getHours() < 14 ? 'dejeuner' : 'diner');
    U.modal('Planifier « ' + r.nom + ' »',
      '<label class="champ-groupe"><span>Jour</span><select class="champ" data-jour>' + jours.join('') + '</select></label>' +
      '<label class="champ-groupe"><span>Repas</span><select class="champ" data-repas>' + D.REPAS.map(function (x) {
        return '<option value="' + x.id + '"' + (x.id === repasDefaut ? ' selected' : '') + '>' + x.emoji + ' ' + x.nom + '</option>';
      }).join('') + '</select></label>' +
      '<label class="champ-groupe"><span>Portions mangées (par personne)</span><input class="champ" type="number" min="0.5" max="20" step="0.5" value="' + (portionsParDefaut || 1) + '" data-portions></label>' +
      '<div class="modal-actions"><button class="bouton bouton-principal" data-ok>📅 Ajouter au planning</button></div>',
      function (m) {
        m.el.querySelector('[data-ok]').addEventListener('click', function () {
          var iso = m.el.querySelector('[data-jour]').value;
          var p = Math.max(0.5, Number(m.el.querySelector('[data-portions]').value) || 1);
          D.planifier(iso, m.el.querySelector('[data-repas]').value, r.id, p);
          m.fermer();
          U.toast('Ajouté au planning');
        });
      });
  };
})();
