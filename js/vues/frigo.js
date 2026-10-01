/* Vue : mode frigo — trouver des recettes avec les ingrédients disponibles. */
(function () {
  'use strict';

  var U = window.U, D = window.D, M = window.Moteur, C = window.Commun;

  /* Ingrédients interchangeables : en avoir un compte pour les autres. */
  var FAMILLES = [
    ['pates', 'pates_completes', 'lasagnes'],
    ['riz_blanc', 'riz_arborio', 'riz_complet'],
    ['oignon', 'oignon_rouge'],
    ['lait_demi', 'lait_entier'],
    ['creme_30', 'creme_15', 'creme_epaisse'],
    ['yaourt_nature', 'yaourt_grec', 'skyr'],
    ['fromage_blanc_0', 'fromage_blanc_3'],
    ['emmental', 'comte', 'cheddar'],
    ['boeuf_hache_5', 'boeuf_hache_15'],
    ['boeuf_steak', 'boeuf_bavette'],
    ['poulet_blanc', 'poulet_cuisse', 'dinde_escalope'],
    ['tomate', 'tomates_cerises'],
    ['tomates_concassees', 'coulis_tomate'],
    ['huile_olive', 'huile_neutre'],
    ['citron', 'citron_vert'],
    ['sucre', 'cassonade'],
    ['pain', 'pain_campagne', 'pain_complet'],
    ['champignons', 'champignons_shiitake'],
    ['lentilles_vertes', 'lentilles_corail'],
    ['haricots_rouges', 'haricots_noirs'],
    ['pois_chiches', 'pois_chiches_secs'],
    ['cabillaud', 'poisson_blanc', 'bar'],
    ['chocolat_noir', 'chocolat_lait', 'pepites_chocolat'],
    ['salade', 'roquette'],
    ['chou', 'chou_rouge'],
    ['agneau_epaule', 'agneau_gigot'],
    ['porc_filet', 'porc_echine', 'porc_cote'],
    ['lardons', 'poitrine_fumee'],
    ['jambon_blanc', 'jambon_cru']
  ];
  var famille = {};
  FAMILLES.forEach(function (f) { f.forEach(function (id) { famille[id] = f; }); });

  var BASIQUES = ['eau', 'sel', 'poivre', 'huile_olive', 'huile_neutre', 'sucre', 'farine', 'vinaigre'];
  var RAPIDES = ['oeuf', 'poulet_blanc', 'boeuf_hache_15', 'jambon_blanc', 'lardons', 'thon_boite', 'saumon', 'pates', 'riz_blanc',
    'pomme_de_terre', 'tomate', 'oignon', 'ail', 'carotte', 'courgette', 'poivron', 'champignons', 'epinards', 'emmental',
    'mozzarella', 'feta', 'creme_15', 'lait_demi', 'beurre', 'citron', 'pois_chiches', 'lentilles_corail', 'tofu', 'avocat', 'banane'];

  function estBasique(id) {
    var i = M.infos(id);
    return BASIQUES.indexOf(id) !== -1 || (i && i.rayon === 'epices');
  }

  function analyser(r, dispo, basiques) {
    var requis = [];
    r.ing.forEach(function (l) {
      if ((l[2] || 'g') === 'qs') return;
      if (basiques && estBasique(l[0])) return;
      if (requis.indexOf(l[0]) === -1) requis.push(l[0]);
    });
    var manquants = requis.filter(function (id) {
      return !dispo[id] && !(famille[id] && famille[id].some(function (x) { return dispo[x]; }));
    });
    return { requis: requis.length, presents: requis.length - manquants.length, manquants: manquants };
  }

  window.Vues.frigo = function (app) {
    document.title = 'Mon frigo · Ma Cuisine';
    var f = D.frigo;
    var recherche = '';

    function nom(id) { var i = M.infos(id); return i ? i.nom : id; }

    function suggestionsIngredients() {
      var mots = U.normaliser(recherche).split(/\s+/).filter(Boolean);
      if (!mots.length) return [];
      return Object.keys(window.INGREDIENTS).filter(function (id) {
        if (id === 'eau' || f.ingredients.indexOf(id) !== -1) return false;
        var n = U.normaliser(nom(id));
        return mots.every(function (m) { return n.indexOf(m) !== -1; });
      }).sort(function (a, b) { return nom(a).length - nom(b).length; }).slice(0, 10);
    }

    function rendre(garderFocus) {
      var dispo = {};
      f.ingredients.forEach(function (id) { dispo[id] = true; });
      var resultats = [];
      if (f.ingredients.length) {
        D.recettes.forEach(function (r) {
          var a = analyser(r, dispo, f.basiques);
          if (a.presents > 0) resultats.push({ r: r, a: a });
        });
        // Réalisables d'abord, puis part des ingrédients déjà disponibles, en favorisant celles qui en utilisent beaucoup.
        var score = function (a) { return (a.manquants.length ? 0 : 10) + a.presents / a.requis + a.presents * 0.1; };
        resultats.sort(function (x, y) {
          return score(y.a) - score(x.a) || x.a.manquants.length - y.a.manquants.length || x.r.nom.localeCompare(y.r.nom, 'fr');
        });
      }
      var complets = resultats.filter(function (x) { return !x.a.manquants.length; }).length;
      var sugg = suggestionsIngredients();

      app.innerHTML =
        '<div class="page-entete"><h1>🧊 Mon frigo</h1><p>Indiquez ce que vous avez sous la main : les recettes réalisables s\'affichent en premier.</p></div>' +
        '<section class="bloc">' +
          '<div class="frigo-recherche"><input class="champ" type="search" data-recherche placeholder="Ajouter un ingrédient (ex. : poulet, courgette…)" value="' + U.esc(recherche) + '" autocomplete="off" aria-label="Ajouter un ingrédient">' +
          (sugg.length ? '<ul class="suggestions">' + sugg.map(function (id) {
            return '<li><button data-ajout="' + id + '">＋ ' + U.esc(nom(id)) + '</button></li>';
          }).join('') + '</ul>' : '') + '</div>' +
          (f.ingredients.length
            ? '<div class="frigo-choisis">' + f.ingredients.map(function (id) {
                return '<button class="puce active" data-retirer="' + id + '">' + U.esc(nom(id)) + ' ✕</button>';
              }).join('') + '<button class="lien" data-vider>Tout retirer</button></div>'
            : '') +
          '<p class="frigo-sous-titre">Ajout rapide</p>' +
          '<div class="frigo-rapides">' + RAPIDES.filter(function (id) { return !dispo[id] && window.INGREDIENTS[id]; }).map(function (id) {
            return '<button class="puce" data-ajout="' + id + '">＋ ' + U.esc(nom(id)) + '</button>';
          }).join('') + '</div>' +
          '<label class="case"><input type="checkbox" data-basiques' + (f.basiques ? ' checked' : '') + '> J\'ai aussi les basiques du placard (sel, poivre, huile, sucre, farine, vinaigre, épices)</label>' +
        '</section>' +
        (f.ingredients.length
          ? '<div class="resultats-entete"><p>' + (complets ? '✅ ' + U.pluriel(complets, 'recette réalisable', 'recettes réalisables') + ' avec ce que vous avez · ' : '') +
              U.pluriel(resultats.length, 'recette utilise', 'recettes utilisent') + ' vos ingrédients</p></div>' +
            (resultats.length ? C.grille(resultats.slice(0, 60).map(function (x) { return x.r; }), function (r) {
              var a = resultats.find(function (x) { return x.r === r; }).a;
              return '<p class="frigo-etat ' + (a.manquants.length ? '' : 'ok') + '">' +
                (a.manquants.length
                  ? '<b>' + a.presents + ' / ' + a.requis + '</b> · Il manque : ' + U.esc(a.manquants.slice(0, 4).map(nom).join(', ')) + (a.manquants.length > 4 ? '…' : '')
                  : '✅ Vous avez tout !') + '</p>';
            }) : '<div class="vide"><p>Aucune recette n\'utilise ces ingrédients.</p></div>')
          : '<div class="vide"><p>Ajoutez au moins un ingrédient pour voir les recettes possibles.</p></div>');

      var champ = app.querySelector('[data-recherche]');
      champ.addEventListener('input', function () {
        recherche = champ.value;
        rendre(true);
      });
      champ.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          var premier = app.querySelector('.suggestions [data-ajout]');
          if (premier) premier.click();
        }
      });
      if (garderFocus) { champ.focus(); champ.setSelectionRange(champ.value.length, champ.value.length); }

      app.querySelectorAll('[data-ajout]').forEach(function (b) {
        b.addEventListener('click', function () {
          f.ingredients.push(b.dataset.ajout);
          D.sauver('frigo');
          var depuisRecherche = !!b.closest('.suggestions');
          if (depuisRecherche) recherche = '';
          rendre(depuisRecherche);
        });
      });
      app.querySelectorAll('[data-retirer]').forEach(function (b) {
        b.addEventListener('click', function () {
          f.ingredients = f.ingredients.filter(function (x) { return x !== b.dataset.retirer; });
          D.sauver('frigo');
          rendre();
        });
      });
      var vider = app.querySelector('[data-vider]');
      if (vider) vider.addEventListener('click', function () { f.ingredients = []; D.sauver('frigo'); rendre(); });
      app.querySelector('[data-basiques]').addEventListener('change', function (e) {
        f.basiques = e.target.checked;
        D.sauver('frigo');
        rendre();
      });
    }

    rendre();
  };
})();
