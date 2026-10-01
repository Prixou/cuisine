/* Vue : chez moi — mon stock d'ingrédients et les recettes possibles sans rien acheter. */
(function () {
  'use strict';

  var U = window.U, D = window.D, C = window.Commun, S = window.Stock;
  var PAGE = 24;

  var TYPES = [
    { id: '', nom: 'Tout' },
    { id: 'plats', nom: '🍽️ Plats', cats: ['Viandes', 'Volailles', 'Poissons', 'Végétarien', 'Pâtes & riz', 'Tartes & pizzas', 'Burgers & sandwichs', 'Soupes'] },
    { id: 'entrees', nom: '🥗 Entrées & à-côtés', cats: ['Entrées & salades', 'Apéro', 'Accompagnements', 'Sauces & bases'] },
    { id: 'petitdej', nom: '🥐 Petit-déj', cats: ['Petit-déjeuner'] },
    { id: 'desserts', nom: '🍰 Desserts', cats: ['Desserts'] }
  ];

  // État gardé d'une visite à l'autre (pas les données : elles sont dans D.frigo).
  var etat = { onglet: null, type: '', temps: '', personnes: null, recherche: '', ouvertes: {}, limites: {} };

  function classer() {
    var type = TYPES.find(function (t) { return t.id === etat.type; });
    var groupes = { faisables: [], manque1: [], manque2: [] };
    D.recettes.forEach(function (r) {
      if (type && type.cats && type.cats.indexOf(r.cat) === -1) return;
      if (etat.temps && r.temps > Number(etat.temps)) return;
      var a = S.analyser(r);
      if (!a.presents) return;
      var x = { r: r, a: a };
      if (!a.manquants.length) groupes.faisables.push(x);
      else if (a.manquants.length === 1) groupes.manque1.push(x);
      else if (a.manquants.length === 2) groupes.manque2.push(x);
    });
    var p = etat.personnes;
    // Ce qui suffit pour tout le monde d'abord, puis ce qui écoule le plus de produits frais (anti-gaspi).
    var score = function (x) {
      return (x.a.maxPortions >= p ? 1000 : 0) + x.a.frais * 3 + x.a.presents +
        (D.estFavori(x.r.id) ? 2 : 0) + ((D.notes[x.r.id] && D.notes[x.r.id].etoiles) || 0) * 0.5;
    };
    Object.keys(groupes).forEach(function (k) {
      groupes[k].sort(function (a, b) { return score(b) - score(a) || a.r.temps - b.r.temps || a.r.nom.localeCompare(b.r.nom, 'fr'); });
    });
    return groupes;
  }

  function etatCarte(x) {
    var a = x.a, p = etat.personnes;
    if (!a.manquants.length) {
      return '<p class="frigo-etat ok">✅ Tout est chez vous' +
        (a.maxPortions < p ? ' · <b>assez pour ' + U.pluriel(a.maxPortions, 'portion') + '</b>' : '') + '</p>';
    }
    return '<p class="frigo-etat">🛒 Il manque : ' + a.manquants.map(function (id) {
      return U.esc(S.nom(id)) + (a.insuffisants.indexOf(id) !== -1 ? ' (pas assez)' : '');
    }).join(', ') + '</p>';
  }

  function section(cle, titre, aide, liste) {
    if (!liste.length) return '';
    var limite = etat.limites[cle] || PAGE;
    return '<section class="stock-resultats">' +
      '<h2 class="section-titre">' + titre + ' <small>' + liste.length + '</small></h2>' +
      (aide ? '<p class="aide">' + aide + '</p>' : '') +
      C.grille(liste.slice(0, limite).map(function (x) { return x.r; }), function (r) {
        return etatCarte(liste.find(function (x) { return x.r === r; }));
      }) +
      (liste.length > limite ? '<div class="plus"><button class="bouton" data-plus="' + cle + '">Afficher plus (' + (liste.length - limite) + ' restantes)</button></div>' : '') +
      '</section>';
  }

  function vueCuisiner() {
    if (!S.nombre()) {
      return '<div class="vide"><p>Votre stock est vide.</p><p>Indiquez ce que vous avez chez vous : les recettes faisables sans rien acheter apparaîtront ici.</p>' +
        '<p><button class="bouton bouton-principal" data-onglet="stock">📦 Remplir mon stock</button></p></div>';
    }
    var g = classer();
    return '<div class="stock-filtres">' +
        '<nav class="puces" aria-label="Type de recette">' + TYPES.map(function (t) {
          return '<button class="puce' + (etat.type === t.id ? ' active' : '') + '" data-type="' + t.id + '">' + t.nom + '</button>';
        }).join('') + '</nav>' +
        '<div class="stock-options">' +
          '<label><span>Pour</span><span class="mini-portions"><button data-pers="-1" aria-label="Une personne de moins">−</button>' +
            '<span>' + U.pluriel(etat.personnes, 'personne') + '</span><button data-pers="1" aria-label="Une personne de plus">+</button></span></label>' +
          '<label><span>Temps</span><select data-temps>' +
            [['', 'Peu importe'], ['20', '≤ 20 min'], ['30', '≤ 30 min'], ['45', '≤ 45 min'], ['60', '≤ 1 h']].map(function (o) {
              return '<option value="' + o[0] + '"' + (etat.temps === o[0] ? ' selected' : '') + '>' + o[1] + '</option>';
            }).join('') + '</select></label>' +
        '</div>' +
      '</div>' +
      '<p class="stock-bilan">' + (g.faisables.length
        ? '✅ <b>' + U.pluriel(g.faisables.length, 'recette faisable', 'recettes faisables') + '</b> sans rien acheter'
        : 'Aucune recette faisable avec seulement votre stock pour l\'instant') +
        ' · ' + U.pluriel(S.nombre(), 'ingrédient') + ' en stock' + (S.basiques() ? ' + les basiques' : '') + '</p>' +
      section('faisables', '✅ Sans rien acheter', 'Les recettes qui utilisent le plus vos produits frais passent en premier, pour ne rien gaspiller.', g.faisables) +
      section('manque1', '🛒 Il manque un seul ingrédient', '', g.manque1) +
      section('manque2', '🛒 Il manque deux ingrédients', '', g.manque2) +
      (!g.faisables.length && !g.manque1.length && !g.manque2.length
        ? '<div class="vide"><p>Aucune recette ne correspond. Ajoutez des ingrédients ou changez les filtres.</p></div>' : '');
  }

  function vueStock() {
    var sugg = S.chercher(etat.recherche, 12);
    var mesIds = S.liste();
    return '<section class="bloc">' +
        '<div class="frigo-recherche"><input class="champ" type="search" data-recherche placeholder="Ajouter un ingrédient (ex. : poulet, courgette, riz…)" value="' + U.esc(etat.recherche) + '" autocomplete="off" aria-label="Ajouter un ingrédient">' +
        (sugg.length ? '<ul class="suggestions">' + sugg.map(function (id) {
          return S.possede(id)
            ? '<li><button data-retirer="' + id + '" class="deja">✓ ' + U.esc(S.nom(id)) + '</button></li>'
            : '<li><button data-ajout="' + id + '">＋ ' + U.esc(S.nom(id)) + '</button></li>';
        }).join('') + '</ul>' : (etat.recherche ? '<p class="vide-petit">Aucun ingrédient de ce nom.</p>' : '')) + '</div>' +
        '<p class="frigo-sous-titre">Remplir en un geste</p>' +
        '<div class="stock-kits">' + S.KITS.map(function (k) {
          var manquent = k.ids.filter(function (id) { return !S.possede(id) && window.INGREDIENTS[id]; }).length;
          return '<button class="bouton bouton-petit" data-kit="' + k.id + '"' + (manquent ? '' : ' disabled') + '>' + k.emoji + ' ' + U.esc(k.nom) +
            ' <small>' + (manquent ? '＋' + manquent : '✓') + '</small></button>';
        }).join('') + '</div>' +
        '<label class="case"><input type="checkbox" data-basiques' + (S.basiques() ? ' checked' : '') + '> Toujours compter les basiques comme présents : sel, poivre, huile, sucre, farine, vinaigre et épices</label>' +
      '</section>' +
      S.ZONES.map(function (z) {
        var miens = mesIds.filter(function (id) { return S.zone(id) === z.id; })
          .sort(function (a, b) { return S.nom(a).localeCompare(S.nom(b), 'fr'); });
        var autres = Object.keys(window.INGREDIENTS).filter(function (id) { return id !== 'eau' && S.zone(id) === z.id && !S.possede(id); });
        var tout = etat.ouvertes[z.id];
        autres = tout
          ? autres.sort(function (a, b) { return S.nom(a).localeCompare(S.nom(b), 'fr'); })
          : autres.sort(function (a, b) { return S.popularite(b) - S.popularite(a); }).slice(0, 12);
        var total = Object.keys(window.INGREDIENTS).filter(function (id) { return S.zone(id) === z.id && !S.possede(id) && id !== 'eau'; }).length;
        return '<section class="bloc stock-zone">' +
          '<h2>' + z.emoji + ' ' + U.esc(z.nom) + ' <small>' + miens.length + '</small></h2>' +
          (miens.length ? '<ul class="stock-liste">' + miens.map(function (id) {
            var q = S.texteQuantite(id);
            return '<li><span class="stock-nom">' + U.esc(S.nom(id)) + '</span>' +
              '<button class="stock-qte' + (q ? ' suivie' : '') + '" data-qte="' + id + '" title="Indiquer la quantité (facultatif)">' + (q ? U.esc(q) : 'quantité ?') + '</button>' +
              '<button class="stock-retirer" data-retirer="' + id + '" aria-label="Retirer ' + U.esc(S.nom(id)) + '">✕</button></li>';
          }).join('') + '</ul>' : '<p class="vide-petit">Rien pour l\'instant.</p>') +
          (autres.length ? '<p class="frigo-sous-titre">' + (tout ? 'Tous les ingrédients' : 'Les plus utilisés') + '</p>' +
            '<div class="frigo-rapides">' + autres.map(function (id) {
              return '<button class="puce" data-ajout="' + id + '">＋ ' + U.esc(S.nom(id)) + '</button>';
            }).join('') + '</div>' +
            (total > 12 ? '<button class="lien" data-zone="' + z.id + '">' + (tout ? 'Afficher moins' : 'Tout afficher (' + total + ')') + '</button>' : '') : '') +
        '</section>';
      }).join('') +
      (S.nombre() ? '<div class="actions-bas"><button class="bouton bouton-danger-doux" data-vider>🗑 Vider mon stock</button></div>' : '');
  }

  function modalQuantite(id, apres) {
    var q = S.quantite(id) || {};
    var unites = S.unites(id);
    var libelles = { pc: 'pièce(s)', g: 'g', ml: 'ml' };
    var i = window.Moteur.infos(id);
    if (i && i.u) libelles.pc = i.u[1];
    U.modal('Combien de « ' + S.nom(id) + ' » ?',
      '<p class="aide">Facultatif. Avec la quantité, l\'application vérifie qu\'il y en a assez pour le nombre de personnes, et la déduit quand vous cuisinez.</p>' +
      '<div class="stock-saisie"><input class="champ" type="number" min="0" step="any" inputmode="decimal" data-q value="' + (q.q ? Math.round(q.q * 10) / 10 : '') + '" aria-label="Quantité">' +
      '<select class="champ" data-u aria-label="Unité">' + unites.map(function (u) {
        return '<option value="' + u + '"' + ((q.u || unites[0]) === u ? ' selected' : '') + '>' + U.esc(libelles[u]) + '</option>';
      }).join('') + '</select></div>' +
      '<div class="modal-actions"><button class="bouton" data-sans>Je ne sais pas</button><button class="bouton bouton-principal" data-ok>Enregistrer</button></div>',
      function (m) {
        var champ = m.el.querySelector('[data-q]');
        champ.focus();
        function ok() {
          S.definirQuantite(id, Number(champ.value) || 0, m.el.querySelector('[data-u]').value);
          m.fermer(); apres();
        }
        m.el.querySelector('[data-ok]').addEventListener('click', ok);
        champ.addEventListener('keydown', function (e) { if (e.key === 'Enter') ok(); });
        m.el.querySelector('[data-sans]').addEventListener('click', function () { S.definirQuantite(id, 0); m.fermer(); apres(); });
      });
  }

  window.Vues.frigo = function (app, params) {
    document.title = 'Chez moi · Ma Cuisine';
    if (params[0] === 'stock' || params[0] === 'cuisiner') etat.onglet = params[0];
    if (!etat.onglet) etat.onglet = S.nombre() ? 'cuisiner' : 'stock';
    if (!etat.personnes) etat.personnes = (D.profil && D.profil.foyer) || 2;

    function rendre(garderFocus) {
      app.innerHTML =
        '<div class="page-entete"><h1>🏠 Chez moi</h1><p>Listez ce que vous avez à la maison : l\'application trouve ce que vous pouvez cuisiner sans rien acheter.</p></div>' +
        '<div class="onglets" role="tablist">' +
          '<button role="tab" data-onglet="cuisiner" aria-selected="' + (etat.onglet === 'cuisiner') + '">🍳 Que cuisiner ?</button>' +
          '<button role="tab" data-onglet="stock" aria-selected="' + (etat.onglet === 'stock') + '">📦 Mon stock <small>' + S.nombre() + '</small></button>' +
        '</div>' +
        (etat.onglet === 'stock' ? vueStock() : vueCuisiner());

      var champ = app.querySelector('[data-recherche]');
      if (champ) {
        champ.addEventListener('input', function () { etat.recherche = champ.value; rendre(true); });
        champ.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') { var premier = app.querySelector('.suggestions [data-ajout]'); if (premier) premier.click(); }
        });
        if (garderFocus) { champ.focus(); champ.setSelectionRange(champ.value.length, champ.value.length); }
      }
    }

    // Un seul écouteur : le contenu est reconstruit à chaque changement.
    app.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b || b.disabled) return;
      var d = b.dataset;
      if (d.onglet) { etat.onglet = d.onglet; rendre(); window.scrollTo(0, 0); return; }
      if (d.ajout) {
        S.ajouter(d.ajout);
        var depuisRecherche = !!b.closest('.suggestions');
        if (depuisRecherche) etat.recherche = '';
        var y = window.scrollY; rendre(depuisRecherche); if (!depuisRecherche) window.scrollTo(0, y);
        return;
      }
      if (d.retirer) { var y2 = window.scrollY; S.retirer(d.retirer); rendre(!!b.closest('.suggestions')); window.scrollTo(0, y2); return; }
      if (d.kit) {
        var kit = S.KITS.find(function (k) { return k.id === d.kit; });
        U.toast(U.pluriel(S.ajouter(kit.ids), 'ingrédient ajouté', 'ingrédients ajoutés'));
        rendre();
        return;
      }
      if (d.zone) { etat.ouvertes[d.zone] = !etat.ouvertes[d.zone]; rendre(); return; }
      if (d.qte) { modalQuantite(d.qte, function () { var y3 = window.scrollY; rendre(); window.scrollTo(0, y3); }); return; }
      if (d.type !== undefined) { etat.type = d.type; etat.limites = {}; rendre(); return; }
      if (d.pers) { etat.personnes = Math.min(20, Math.max(1, etat.personnes + Number(d.pers))); rendre(); return; }
      if (d.plus) { var y4 = window.scrollY; etat.limites[d.plus] = (etat.limites[d.plus] || PAGE) + PAGE; rendre(); window.scrollTo(0, y4); return; }
      if (b.hasAttribute('data-vider')) {
        U.confirmer('Retirer tous les ingrédients de votre stock ?', 'Vider', function () { S.vider(); rendre(); });
      }
    });
    app.addEventListener('change', function (e) {
      if (e.target.matches('[data-basiques]')) { S.definirBasiques(e.target.checked); rendre(); }
      if (e.target.matches('[data-temps]')) { etat.temps = e.target.value; etat.limites = {}; rendre(); }
    });

    rendre();
  };
})();
