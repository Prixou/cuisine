/* Vue : liste de courses générée à partir des recettes choisies, groupée par rayon. */
(function () {
  'use strict';

  var U = window.U, D = window.D;

  function texteListe(groupes) {
    var lignes = ['🛒 Liste de courses', ''];
    groupes.forEach(function (g) {
      lignes.push(g.emoji + ' ' + g.nom.toUpperCase());
      g.articles.forEach(function (a) { lignes.push((D.courses.coches[a.cle] ? '✓ ' : '☐ ') + a.nom + ' — ' + a.qte); });
      lignes.push('');
    });
    if (D.courses.libres.length) {
      lignes.push('📝 AUTRES');
      D.courses.libres.forEach(function (l) { lignes.push((D.courses.coches['libre-' + l.id] ? '✓ ' : '☐ ') + l.texte); });
    }
    return lignes.join('\n').trim();
  }

  window.Vues.courses = function (app) {
    document.title = 'Liste de courses · Ma Cuisine';

    /* Sépare ce qu'il faut acheter de ce qui est déjà dans mon stock (en quantité suffisante si elle est suivie). */
    function trier(groupes) {
      var S = window.Stock, masquer = D.courses.masquerStock !== false && S.nombre() > 0;
      var aAcheter = [], chezMoi = [];
      groupes.forEach(function (g) {
        var garder = [];
        g.articles.forEach(function (a) {
          var src = masquer && S.source(a.cle);
          if (!src) { garder.push(a); return; }
          var i = window.Moteur.infos(a.cle), stock = S.grammes(src), p = a.parts;
          var besoin = p.g + p.ml * (i.d || 1) + p.pc * (i.pc || 0) + p.cc * 5 * (i.d || 1);
          if (stock !== null && besoin > 0 && stock < besoin) { a.note = 'vous en avez ' + S.texteQuantite(src); garder.push(a); }
          else chezMoi.push(a);
        });
        if (garder.length) aAcheter.push({ nom: g.nom, emoji: g.emoji, articles: garder });
      });
      return { groupes: aAcheter, chezMoi: chezMoi };
    }

    // ---------- Prix ----------
    var Bu = window.Budget;

    function blocBudget(articles, coches, chezMoi) {
      if (!articles.length) {
        return '<section class="bloc budget"><h2>💶 Prix estimé</h2><p class="aide">' +
          (chezMoi ? 'Tout ce qu\'il faut est déjà chez vous : rien à acheter pour ces recettes.'
            : 'Le prix chez Lidl et chez E.Leclerc s\'affichera ici dès que la liste contiendra des recettes. Ouvrez une recette et touchez <b>🛒 Ajouter aux courses</b>, ou ajoutez la semaine depuis le planning.') +
          (D.courses.libres.length ? ' Les articles libres (ajoutés à la main) n\'ont pas de prix.' : '') + '</p></section>';
      }
      var t = Bu.totaux(articles), m = Bu.magasin();
      var moinsCher = t.lidl.caisse <= t.leclerc.caisse ? 'lidl' : 'leclerc';
      var ecart = Math.abs(t.lidl.caisse - t.leclerc.caisse);
      var dansCaddie = coches.length ? Bu.totaux(coches)[m].caisse : 0;
      var libres = D.courses.libres.length;
      return '<section class="bloc budget">' +
        '<h2>💶 Prix estimé</h2>' +
        '<div class="budget-magasins" role="group" aria-label="Magasin">' + Bu.MAGASINS.map(function (x) {
          return '<button class="budget-magasin" data-magasin="' + x + '" aria-pressed="' + (x === m) + '">' +
            '<span>' + U.esc(Bu.nomMagasin(x)) + '</span><b>' + Bu.euros(t[x].caisse) + '</b>' +
            (x === moinsCher && ecart >= 0.01 ? '<small>💚 le moins cher (−' + Bu.euros(ecart) + ')</small>' : '<small>&nbsp;</small>') + '</button>';
        }).join('') + '</div>' +
        (coches.length ? '<p class="budget-caddie">🛒 Déjà dans le caddie : <b>' + Bu.euros(dansCaddie) + '</b> · reste <b>' + Bu.euros(t[m].caisse - dansCaddie) + '</b></p>' : '') +
        '<p class="aide">Ce que vous payez en caisse chez ' + U.esc(Bu.nomMagasin(m)) + ', en paquets entiers. Les recettes en utilisent pour <b>' + Bu.euros(t[m].utilise) +
          '</b> : le reste des paquets (huile, épices, farine…) servira pour d\'autres repas.' +
          (t[m].approx ? ' ' + U.pluriel(t[m].approx, 'article') + ' au prix de l\'autre magasin (marqué ≈).' : '') +
          (libres ? ' Articles libres non comptés.' : '') +
          ' Prix indicatifs (' + window.PRIX.date + ') : touchez un prix pour le corriger.</p>' +
      '</section>';
    }

    function boutonPrix(a) {
      var m = Bu.magasin();
      var x = Bu.article(a.cle, Bu.grammes(a.cle, a.parts), m);
      if (!x) return '<button class="article-prix vide" data-prix="' + U.esc(a.cle) + '" title="Indiquer un prix">＋ prix</button>';
      var p = x.produit;
      var detail = p.unite === 'kg' ? (x.poids ? Math.round(x.poids) + ' g au kilo' : 'au kilo') : (x.paquets > 1 ? x.paquets + ' × ' : '') + Bu.libelleUnite(p);
      return '<button class="article-prix' + (p.perso ? ' perso' : '') + '" data-prix="' + U.esc(a.cle) + '" title="' +
        (x.approx ? 'Prix ' + U.esc(Bu.nomMagasin(m === 'lidl' ? 'leclerc' : 'lidl')) + ' : produit rarement vendu chez ' + U.esc(Bu.nomMagasin(m)) + '. ' : '') + 'Toucher pour corriger le prix">' +
        '<b>' + (x.approx ? '≈ ' : '') + Bu.euros(x.caisse) + '</b><small>' + U.esc(detail) + (p.perso ? ' ✏️' : '') + '</small></button>';
    }

    function modifierPrix(id) {
      var p = Bu.produit(id) || { lidl: null, leclerc: null, qte: 1, unite: 'kg', libelle: '' };
      var i = window.Moteur.infos(id);
      var unites = [['kg', 'au kilo (prix au kg)'], ['g', 'grammes'], ['ml', 'ml']];
      if (i && i.pc) unites.push(['pc', i.u ? i.u[1] : 'pièces']);
      var champ = function (m) {
        return '<label class="champ-groupe"><span>Prix chez ' + U.esc(Bu.nomMagasin(m)) + ' (€)</span>' +
          '<input class="champ" type="number" min="0" step="0.01" inputmode="decimal" data-p="' + m + '" value="' + (p[m] > 0 ? p[m] : '') + '" placeholder="Pas vendu ici"></label>';
      };
      U.modal('Prix : ' + (i ? i.nom : id),
        champ('lidl') + champ('leclerc') +
        '<div class="champ-groupe"><span>Pour</span><div class="prix-paquet">' +
          '<input class="champ" type="number" min="0" step="any" inputmode="decimal" data-qte value="' + p.qte + '" aria-label="Quantité du paquet"' + (p.unite === 'kg' ? ' disabled' : '') + '>' +
          '<select class="champ" data-unite aria-label="Unité">' + unites.map(function (u) {
            return '<option value="' + u[0] + '"' + (u[0] === p.unite ? ' selected' : '') + '>' + U.esc(u[1]) + '</option>';
          }).join('') + '</select></div></div>' +
        '<label class="champ-groupe"><span>Conditionnement (facultatif)</span><input class="champ" data-libelle value="' + U.esc(p.unite === 'kg' ? '' : p.libelle || '') + '" placeholder="Ex. : barquette 500 g"></label>' +
        '<div class="modal-actions">' + (p.perso ? '<button class="bouton" data-defaut>Revenir au prix d\'origine</button>' : '') +
          '<button class="bouton bouton-principal" data-ok>Enregistrer</button></div>',
        function (md) {
          var unite = md.el.querySelector('[data-unite]'), qte = md.el.querySelector('[data-qte]');
          unite.addEventListener('change', function () { qte.disabled = unite.value === 'kg'; if (unite.value === 'kg') qte.value = 1; });
          md.el.querySelector('[data-ok]').addEventListener('click', function () {
            var v = {};
            Bu.MAGASINS.forEach(function (m) { var x = Number(md.el.querySelector('[data-p="' + m + '"]').value); v[m] = x > 0 ? x : null; });
            v.unite = unite.value;
            v.qte = v.unite === 'kg' ? 1 : Number(qte.value);
            v.libelle = md.el.querySelector('[data-libelle]').value.trim() || (v.unite === 'kg' ? 'au kilo' : v.qte + ' ' + (v.unite === 'pc' ? 'pièces' : v.unite));
            if (!(v.lidl > 0 || v.leclerc > 0)) { U.toast('Indiquez au moins un prix'); return; }
            if (!(v.qte > 0)) { U.toast('Indiquez la quantité du paquet'); return; }
            Bu.corriger(id, v);
            md.fermer();
            rendre();
          });
          var defaut = md.el.querySelector('[data-defaut]');
          if (defaut) defaut.addEventListener('click', function () { Bu.corriger(id, null); md.fermer(); rendre(); });
        });
    }

    function rendre() {
      var tri = trier(D.listeCourses());
      var groupes = tri.groupes;
      var recettes = D.courses.recettes.filter(function (e) { return D.parId[e.id]; });
      var total = groupes.reduce(function (s, g) { return s + g.articles.length; }, 0) + D.courses.libres.length;
      var cochesIngredients = [];
      groupes.forEach(function (g) { g.articles.forEach(function (a) { if (D.courses.coches[a.cle]) cochesIngredients.push(a); }); });
      var faitsIngredients = cochesIngredients.length;
      var faits = faitsIngredients + D.courses.libres.filter(function (l) { return D.courses.coches['libre-' + l.id]; }).length;

      var tousArticles = [];
      groupes.forEach(function (g) { tousArticles = tousArticles.concat(g.articles); });

      app.innerHTML =
        '<div class="page-entete"><h1>🛒 Liste de courses</h1>' +
          (total ? '<p>' + faits + ' / ' + total + ' articles cochés</p>' : '') + '</div>' +
        blocBudget(tousArticles, cochesIngredients, tri.chezMoi.length) +
        (recettes.length || D.courses.libres.length ? '' :
          '<div class="vide"><p>Votre liste est vide.</p><p>Ouvrez une recette et touchez <b>🛒 Ajouter aux courses</b>, ou ajoutez toute une semaine depuis le <a href="#/planning">planning</a>.</p></div>') +
        (recettes.length ? '<section class="bloc"><h2>Recettes (' + recettes.length + ')</h2><ul class="courses-recettes">' +
          recettes.map(function (e) {
            var r = D.parId[e.id];
            return '<li data-id="' + U.esc(e.id) + '"><a href="#/recette/' + encodeURIComponent(e.id) + '">' + U.esc(r.emoji) + ' ' + U.esc(r.nom) + '</a>' +
              '<div class="mini-portions"><button data-delta="-1" aria-label="Moins">−</button><span>' + U.pluriel(e.portions, 'portion') + '</span>' +
              '<button data-delta="1" aria-label="Plus">+</button><button data-retirer aria-label="Retirer">✕</button></div></li>';
          }).join('') + '</ul></section>' : '') +
        groupes.map(function (g) {
          var tries = g.articles.slice().sort(function (a, b) { return (D.courses.coches[a.cle] ? 1 : 0) - (D.courses.coches[b.cle] ? 1 : 0); });
          return '<section class="bloc rayon"><h2>' + g.emoji + ' ' + U.esc(g.nom) + '</h2><ul class="articles">' +
            tries.map(function (a) {
              var coche = D.courses.coches[a.cle];
              return '<li class="' + (coche ? 'coche' : '') + '"><label><input type="checkbox" data-cle="' + U.esc(a.cle) + '"' + (coche ? ' checked' : '') + '>' +
                '<span class="article-nom">' + U.esc(a.nom) + '<small>' + U.esc(a.recettes.join(', ')) + '</small>' +
                (a.note ? '<small class="article-stock">🏠 ' + U.esc(a.note) + '</small>' : '') + '</span>' +
                '<span class="article-qte">' + U.esc(a.qte) + '</span></label>' + boutonPrix(a) + '</li>';
            }).join('') + '</ul></section>';
        }).join('') +
        (tri.chezMoi.length ? '<details class="bloc chez-moi"><summary><b>🏠 Déjà chez moi</b> <small>' + U.pluriel(tri.chezMoi.length, 'article') + ' retiré' + (tri.chezMoi.length > 1 ? 's' : '') + ' de la liste</small></summary><ul class="articles">' +
          tri.chezMoi.map(function (a) {
            return '<li><span class="article-nom">' + U.esc(a.nom) + '<small>' + U.esc(a.recettes.join(', ')) + '</small></span><span class="article-qte">' + U.esc(a.qte) + '</span></li>';
          }).join('') + '</ul></details>' : '') +
        (window.Stock.nombre() ? '<label class="case"><input type="checkbox" data-masquer-stock' + (D.courses.masquerStock !== false ? ' checked' : '') + '> Ne pas afficher ce que j\'ai déjà dans <a href="#/frigo/stock">mon stock</a></label>' : '') +
        '<section class="bloc"><h2>📝 Autres articles</h2>' +
          '<form class="ajout-libre" data-form><input class="champ" data-libre placeholder="Ex. : éponges, café, pain…" aria-label="Article à ajouter"><button class="bouton">Ajouter</button></form>' +
          (D.courses.libres.length ? '<ul class="articles">' + D.courses.libres.map(function (l) {
            var cle = 'libre-' + l.id, coche = D.courses.coches[cle];
            return '<li class="' + (coche ? 'coche' : '') + '"><label><input type="checkbox" data-cle="' + cle + '"' + (coche ? ' checked' : '') + '>' +
              '<span class="article-nom">' + U.esc(l.texte) + '</span></label><button class="retirer-libre" data-libre-id="' + l.id + '" aria-label="Supprimer">✕</button></li>';
          }).join('') + '</ul>' : '') +
        '</section>' +
        (total ? '<div class="actions-bas">' +
          '<button class="bouton" data-partager>📤 Partager / copier</button>' +
          (faitsIngredients ? '<button class="bouton" data-ranger title="Ajoute à mon stock les ingrédients cochés">🏠 Ranger dans mon stock (' + faitsIngredients + ')</button>' : '') +
          '<button class="bouton" data-decocher>↺ Tout décocher</button>' +
          '<button class="bouton bouton-danger-doux" data-vider>🗑 Vider la liste</button></div>' : '');

      app.querySelectorAll('.courses-recettes li').forEach(function (li) {
        var e = D.courses.recettes.find(function (x) { return x.id === li.dataset.id; });
        li.querySelectorAll('[data-delta]').forEach(function (b) {
          b.addEventListener('click', function () {
            e.portions = Math.max(1, e.portions + Number(b.dataset.delta));
            D.sauver('courses');
            rendre();
          });
        });
        li.querySelector('[data-retirer]').addEventListener('click', function () {
          D.courses.recettes = D.courses.recettes.filter(function (x) { return x !== e; });
          D.sauver('courses');
          window.App.majBadges();
          rendre();
        });
      });
      app.querySelectorAll('[data-cle]').forEach(function (c) {
        c.addEventListener('change', function () {
          if (c.checked) D.courses.coches[c.dataset.cle] = true; else delete D.courses.coches[c.dataset.cle];
          D.sauver('courses');
          rendre();
        });
      });
      app.querySelector('[data-form]').addEventListener('submit', function (ev) {
        ev.preventDefault();
        var champ = app.querySelector('[data-libre]');
        var t = champ.value.trim();
        if (!t) return;
        D.courses.libres.push({ id: U.aleatoire(), texte: t });
        D.sauver('courses');
        window.App.majBadges();
        rendre();
        app.querySelector('[data-libre]').focus();
      });
      app.querySelectorAll('[data-libre-id]').forEach(function (b) {
        b.addEventListener('click', function () {
          D.courses.libres = D.courses.libres.filter(function (l) { return l.id !== b.dataset.libreId; });
          delete D.courses.coches['libre-' + b.dataset.libreId];
          D.sauver('courses');
          window.App.majBadges();
          rendre();
        });
      });
      var partager = app.querySelector('[data-partager]');
      if (partager) partager.addEventListener('click', function () {
        var texte = texteListe(groupes);
        if (tousArticles.length) {
          var tt = Bu.totaux(tousArticles), mm = Bu.magasin();
          texte += '\n\n💶 Estimation ' + Bu.nomMagasin(mm) + ' : ' + Bu.euros(tt[mm].caisse);
        }
        if (navigator.share) {
          navigator.share({ title: 'Liste de courses', text: texte }).catch(function () {});
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(texte).then(function () { U.toast('Liste copiée dans le presse-papiers'); },
            function () { U.toast('Copie impossible'); });
        }
      });
      app.querySelectorAll('[data-magasin]').forEach(function (b) {
        b.addEventListener('click', function () { Bu.definirMagasin(b.dataset.magasin); rendre(); });
      });
      app.querySelectorAll('[data-prix]').forEach(function (b) {
        b.addEventListener('click', function () { modifierPrix(b.dataset.prix); });
      });
      var masquer = app.querySelector('[data-masquer-stock]');
      if (masquer) masquer.addEventListener('change', function () { D.courses.masquerStock = masquer.checked; D.sauver('courses'); rendre(); });
      var ranger = app.querySelector('[data-ranger]');
      if (ranger) ranger.addEventListener('click', function () {
        var nouveaux = 0;
        cochesIngredients.forEach(function (a) { if (window.Stock.ranger(a.cle, a.parts)) nouveaux++; });
        U.toast(U.pluriel(cochesIngredients.length, 'article rangé', 'articles rangés') + ' dans votre stock' + (nouveaux ? ' (' + nouveaux + ' nouveaux)' : ''));
        rendre();
      });
      var decocher = app.querySelector('[data-decocher]');
      if (decocher) decocher.addEventListener('click', function () { D.courses.coches = {}; D.sauver('courses'); rendre(); });
      var vider = app.querySelector('[data-vider]');
      if (vider) vider.addEventListener('click', function () {
        U.confirmer('Vider toute la liste de courses ?', 'Vider', function () {
          D.courses = { recettes: [], coches: {}, libres: [] };
          D.sauver('courses');
          window.App.majBadges();
          rendre();
        });
      });
    }

    rendre();
  };
})();
