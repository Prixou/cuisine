/* Vue : liste des recettes avec recherche, catégories, filtres et tri. */
(function () {
  'use strict';

  var U = window.U, D = window.D, C = window.Commun;
  var PAGE = 48;

  var etat = { recherche: '', cat: '', cuisine: '', temps: '', regime: '', tri: 'nom', limite: PAGE };
  var defilement = 0;

  var TRIS = {
    nom: { nom: 'Nom (A → Z)', f: function (a, b) { return a.nom.localeCompare(b.nom, 'fr'); } },
    objectifs: { nom: 'Adapté à mes objectifs', profil: true, f: function (a, b) { return D.adequation(b) - D.adequation(a); } },
    kcalAsc: { nom: 'Calories ↑', f: function (a, b) { return a.nutrition.parPortion.kcal - b.nutrition.parPortion.kcal; } },
    kcalDesc: { nom: 'Calories ↓', f: function (a, b) { return b.nutrition.parPortion.kcal - a.nutrition.parPortion.kcal; } },
    proteines: { nom: 'Protéines ↓', f: function (a, b) { return b.nutrition.parPortion.p - a.nutrition.parPortion.p; } },
    temps: { nom: 'Plus rapide', f: function (a, b) { return a.temps - b.temps; } },
    prix: { nom: 'Moins chère par portion', f: function (a, b) { return window.Budget.coutRecette(a).parPortion - window.Budget.coutRecette(b).parPortion; } },
    notes: { nom: 'Mes meilleures notes', f: function (a, b) { return note(b) - note(a) || a.nom.localeCompare(b.nom, 'fr'); } }
  };

  function note(r) { return (D.notes[r.id] && D.notes[r.id].etoiles) || 0; }

  function filtrer() {
    var mots = U.normaliser(etat.recherche).split(/\s+/).filter(Boolean);
    var tri = TRIS[etat.tri] && (!TRIS[etat.tri].profil || D.cibles()) ? TRIS[etat.tri] : TRIS.nom;
    return D.recettes.filter(function (r) {
      if (etat.cat === '♥' ? !D.estFavori(r.id) : etat.cat === '★' ? !r.perso : etat.cat === '🍱' ? !window.BATCH.CONSERVATION[r.id] : etat.cat === '🍲' ? !window.ONE_POT.RECETTES[r.id] : (etat.cat && r.cat !== etat.cat)) return false;
      if (etat.cuisine && r.cuisine !== etat.cuisine) return false;
      if (etat.temps && r.temps > Number(etat.temps)) return false;
      if (!D.regimeOk(r, etat.regime)) return false;
      return mots.every(function (m) { return r.texte.indexOf(m) !== -1; });
    }).sort(tri.f);
  }

  function options(liste, valeur, defaut) {
    return (defaut ? '<option value="">' + defaut + '</option>' : '') + liste.map(function (o) {
      return '<option value="' + U.esc(o[0]) + '"' + (o[0] === valeur ? ' selected' : '') + '>' + U.esc(o[1]) + '</option>';
    }).join('');
  }

  function puce(valeur, libelle, nombre) {
    return '<button class="puce' + (etat.cat === valeur ? ' active' : '') + '" data-cat="' + U.esc(valeur) + '">' + libelle + ' <small>' + nombre + '</small></button>';
  }

  function rendre(app) {
    document.title = 'Ma Cuisine';
    var resultats = filtrer();
    var parCat = {};
    D.recettes.forEach(function (r) { parCat[r.cat] = (parCat[r.cat] || 0) + 1; });
    var nbPerso = D.recettes.filter(function (r) { return r.perso; }).length;
    var nbBatch = D.recettes.filter(function (r) { return window.BATCH.CONSERVATION[r.id]; }).length;
    var nbOnePot = D.recettes.filter(function (r) { return window.ONE_POT.RECETTES[r.id]; }).length;

    var tris = Object.keys(TRIS).filter(function (k) { return !TRIS[k].profil || D.cibles(); })
      .map(function (k) { return [k, TRIS[k].nom]; });
    var actifs = etat.cuisine || etat.temps || etat.regime || etat.cat || etat.recherche;

    app.innerHTML =
      '<div class="liste-entete">' +
        '<div class="recherche"><input id="recherche" type="search" placeholder="Rechercher parmi ' + D.recettes.length + ' recettes, un ingrédient…" autocomplete="off" aria-label="Rechercher" value="' + U.esc(etat.recherche) + '"></div>' +
        '<a class="bouton bouton-principal bouton-creer" href="#/nouvelle">＋ <span>Créer une recette</span></a>' +
      '</div>' +
      '<div class="themes">' +
        '<a class="theme" href="#/onepot"><span aria-hidden="true">🍲</span><b>One pot</b><small>' + nbOnePot + ' recettes en une seule casserole</small></a>' +
        '<a class="theme" href="#/batch"><span aria-hidden="true">🍱</span><b>Batch cooking</b><small>' + window.BATCH.SESSIONS.length + ' sessions pour la semaine</small></a>' +
      '</div>' +
      '<nav class="puces" aria-label="Catégories">' +
        puce('', 'Tout', D.recettes.length) +
        puce('♥', '♥ Favoris', D.favoris.length) +
        (nbPerso ? puce('★', '⭐ Mes recettes', nbPerso) : '') +
        puce('🍲', '🍲 One pot', nbOnePot) +
        puce('🍱', '🍱 Batch cooking', nbBatch) +
        window.CATEGORIES.map(function (c) { return puce(c.nom, c.emoji + ' ' + U.esc(c.nom), parCat[c.nom] || 0); }).join('') +
      '</nav>' +
      '<div class="filtres">' +
        '<label><span>Cuisine</span><select data-filtre="cuisine">' + options(D.cuisines.map(function (c) { return [c, c]; }), etat.cuisine, 'Toutes') + '</select></label>' +
        '<label><span>Temps total</span><select data-filtre="temps">' + options([['15', '≤ 15 min'], ['30', '≤ 30 min'], ['45', '≤ 45 min'], ['60', '≤ 1 h'], ['120', '≤ 2 h']], etat.temps, 'Peu importe') + '</select></label>' +
        '<label><span>Régime / objectif</span><select data-filtre="regime">' + options(Object.keys(D.REGIMES).map(function (k) { return [k, D.REGIMES[k].nom]; }), etat.regime, 'Tous') + '</select></label>' +
        '<label><span>Trier par</span><select data-filtre="tri">' + options(tris, etat.tri) + '</select></label>' +
      '</div>' +
      (D.sansLactose() ? '<p class="mode-lactose">🥛 Mode sans lactose : les recettes sont adaptées automatiquement (<a href="#/profil">réglage</a>).</p>' : '') +
      '<div class="resultats-entete"><p>' + U.pluriel(resultats.length, 'recette') + '</p>' +
        (actifs ? '<button class="lien" data-reinit>Réinitialiser les filtres</button>' : '') + '</div>' +
      (resultats.length
        ? C.grille(resultats.slice(0, etat.limite)) +
          (resultats.length > etat.limite ? '<div class="plus"><button class="bouton" data-plus>Afficher plus (' + (resultats.length - etat.limite) + ' restantes)</button></div>' : '')
        : '<div class="vide"><p>' + (etat.cat === '♥' && !D.favoris.length
            ? 'Aucun favori pour l\'instant. Ouvrez une recette et touchez ♡ pour l\'ajouter.'
            : 'Aucune recette ne correspond à ces critères.') + '</p></div>');

    var champ = app.querySelector('#recherche');
    var minuterie;
    champ.addEventListener('input', function () {
      clearTimeout(minuterie);
      minuterie = setTimeout(function () {
        etat.recherche = champ.value;
        etat.limite = PAGE;
        var pos = champ.selectionStart;
        rendre(app);
        var nouveau = app.querySelector('#recherche');
        nouveau.focus();
        nouveau.setSelectionRange(pos, pos);
      }, 150);
    });
    app.querySelectorAll('.puce').forEach(function (b) {
      b.addEventListener('click', function () { etat.cat = b.dataset.cat; etat.limite = PAGE; rendre(app); });
    });
    app.querySelectorAll('[data-filtre]').forEach(function (s) {
      s.addEventListener('change', function () { etat[s.dataset.filtre] = s.value; etat.limite = PAGE; rendre(app); });
    });
    var reinit = app.querySelector('[data-reinit]');
    if (reinit) reinit.addEventListener('click', function () {
      etat = { recherche: '', cat: '', cuisine: '', temps: '', regime: '', tri: etat.tri, limite: PAGE };
      rendre(app);
    });
    var plus = app.querySelector('[data-plus]');
    if (plus) plus.addEventListener('click', function () {
      var y = window.scrollY;
      etat.limite += PAGE;
      rendre(app);
      window.scrollTo(0, y);
    });

    var active = app.querySelector('.puce.active');
    if (active && active.scrollIntoView) active.scrollIntoView({ block: 'nearest', inline: 'center' });
  }

  /* app est un conteneur neuf à chaque navigation : les écouteurs posés dessus ne s'accumulent pas. */
  window.Vues.liste = function (app, params, retour) {
    // #/recettes/batch : arrive directement sur les recettes qui se conservent.
    var pseudo = { batch: '🍱', onepot: '🍲' }[params[0]];
    if (pseudo && !(retour && etat.cat !== pseudo)) { etat.cat = pseudo; if (!retour) etat.limite = PAGE; }
    rendre(app);
    window.scrollTo(0, retour ? defilement : 0);
    app.addEventListener('click', function (e) { if (e.target.closest('.carte')) defilement = window.scrollY; });
  };
})();
