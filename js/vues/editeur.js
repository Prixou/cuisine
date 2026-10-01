/* Vue : création / modification d'une recette personnelle. */
(function () {
  'use strict';

  var U = window.U, D = window.D, M = window.Moteur;

  var UNITES = [['g', 'g'], ['ml', 'ml'], ['pc', 'pièce(s)'], ['cs', 'c. à soupe'], ['cc', 'c. à café'], ['pincee', 'pincée'], ['qs', 'selon goût']];
  var RAYONS = [['legumes', 'Légumes'], ['fruits', 'Fruits'], ['viande', 'Viande'], ['poisson', 'Poisson'], ['cremerie', 'Crèmerie'], ['oeufs', 'Œufs'],
    ['feculents', 'Féculents'], ['epicerie', 'Épicerie'], ['condiments', 'Condiments'], ['epices', 'Épices'], ['herbes', 'Herbes']];

  function nomsIngredients() {
    var parNom = {};
    Object.keys(window.INGREDIENTS).forEach(function (id) { parNom[U.normaliser(window.INGREDIENTS[id][0])] = id; });
    return parNom;
  }

  window.Vues.editeur = function (app, params, retour, mode) {
    var source = params[0] ? D.parId[params[0]] : null;
    var base;
    if (mode === 'modifier' && source && source.perso) base = JSON.parse(JSON.stringify(D.mesRecettes.find(function (r) { return r.id === source.id; })));
    else if (mode === 'dupliquer' && source) {
      base = JSON.parse(JSON.stringify({ nom: source.nom + ' (ma version)', cat: source.cat, cuisine: source.cuisine, emoji: source.emoji, desc: source.desc,
        portions: source.portions, prep: source.prep, cuisson: source.cuisson, diff: source.diff, ing: source.ing, etapes: source.etapes, astuce: source.astuce || '' }));
    } else {
      base = { nom: '', cat: 'Viandes', cuisine: 'Maison', emoji: '🍽️', desc: '', portions: 4, prep: 15, cuisson: 30, diff: 1, ing: [], etapes: [], astuce: '' };
    }
    var modification = mode === 'modifier' && base.id;
    document.title = (modification ? 'Modifier' : 'Nouvelle recette') + ' · Ma Cuisine';
    var lignes = base.ing.map(function (l) { return { id: l[0], q: l[1], u: l[2] || 'g' }; });
    if (!lignes.length) lignes.push({ id: '', q: '', u: 'g' });
    var parNom = nomsIngredients();
    var photoAjoutee = null;

    app.innerHTML =
      '<div class="page-entete"><a href="' + (source ? '#/recette/' + encodeURIComponent(source.id) : '#/') + '" class="retour">← Retour</a>' +
        '<h1>' + (modification ? '✏️ Modifier ma recette' : mode === 'dupliquer' ? '✏️ Ma version de « ' + U.esc(source.nom) + ' »' : '＋ Nouvelle recette') + '</h1></div>' +
      '<form class="editeur" data-form novalidate>' +
        '<div class="editeur-grille">' +
        '<section class="bloc"><h2>Informations</h2>' +
          '<div class="ligne-emoji"><label class="champ-groupe"><span>Emoji</span><input class="champ champ-emoji" name="emoji" value="' + U.esc(base.emoji) + '" maxlength="8"></label>' +
          '<label class="champ-groupe"><span>Nom de la recette *</span><input class="champ" name="nom" required value="' + U.esc(base.nom) + '" placeholder="Ex. : Gratin de ma grand-mère"></label></div>' +
          '<label class="champ-groupe"><span>Description</span><input class="champ" name="desc" value="' + U.esc(base.desc) + '" placeholder="Une phrase pour donner envie"></label>' +
          '<div class="ligne-2"><label class="champ-groupe"><span>Catégorie</span><select class="champ" name="cat">' + window.CATEGORIES.map(function (c) {
            return '<option' + (c.nom === base.cat ? ' selected' : '') + '>' + U.esc(c.nom) + '</option>';
          }).join('') + '</select></label>' +
          '<label class="champ-groupe"><span>Cuisine</span><input class="champ" name="cuisine" list="liste-cuisines" value="' + U.esc(base.cuisine) + '"></label></div>' +
          '<datalist id="liste-cuisines">' + D.cuisines.map(function (c) { return '<option value="' + U.esc(c) + '">'; }).join('') + '</datalist>' +
          '<div class="ligne-4">' +
            '<label class="champ-groupe"><span>Portions</span><input class="champ" type="number" name="portions" min="1" max="100" value="' + base.portions + '"></label>' +
            '<label class="champ-groupe"><span>Préparation (min)</span><input class="champ" type="number" name="prep" min="0" value="' + base.prep + '"></label>' +
            '<label class="champ-groupe"><span>Cuisson (min)</span><input class="champ" type="number" name="cuisson" min="0" value="' + base.cuisson + '"></label>' +
            '<label class="champ-groupe"><span>Difficulté</span><select class="champ" name="diff">' + [1, 2, 3].map(function (d) {
              return '<option value="' + d + '"' + (d === base.diff ? ' selected' : '') + '>' + window.Commun.DIFFICULTES[d] + '</option>';
            }).join('') + '</select></label>' +
          '</div>' +
          '<label class="champ-groupe"><span>Photo</span><input type="file" accept="image/*" data-photo></label>' +
        '</section>' +
        '<section class="bloc editeur-apercu"><h2>Valeurs par portion</h2><div data-apercu></div></section>' +
        '</div>' +

        '<section class="bloc"><h2>Ingrédients *</h2>' +
          '<p class="aide">Commencez à taper puis choisissez dans la liste : les calories et macros sont calculées automatiquement. Ingrédient introuvable ? Créez-le.</p>' +
          '<datalist id="liste-ingredients">' + Object.keys(window.INGREDIENTS).map(function (id) { return '<option value="' + U.esc(window.INGREDIENTS[id][0]) + '">'; }).join('') + '</datalist>' +
          '<div class="lignes-ing" data-lignes></div>' +
          '<button type="button" class="bouton" data-ajouter-ligne>＋ Ajouter un ingrédient</button>' +
        '</section>' +

        '<section class="bloc"><h2>Préparation *</h2>' +
          '<label class="champ-groupe"><span>Une étape par ligne. Les durées (« 10 min », « 1 h 30 ») deviendront des minuteurs.</span>' +
          '<textarea class="champ" name="etapes" rows="8" placeholder="Préchauffez le four à 180 °C.\nMélangez…">' + U.esc(base.etapes.join('\n')) + '</textarea></label>' +
          '<label class="champ-groupe"><span>Astuce (facultatif)</span><input class="champ" name="astuce" value="' + U.esc(base.astuce || '') + '"></label>' +
        '</section>' +
        '<p class="erreur" data-erreur hidden></p>' +
        '<div class="actions-bas"><button class="bouton bouton-principal" type="submit">💾 Enregistrer la recette</button></div>' +
      '</form>';

    var form = app.querySelector('[data-form]');
    var conteneur = app.querySelector('[data-lignes]');

    function rendreLignes() {
      conteneur.innerHTML = lignes.map(function (l, i) {
        var ing = l.id && window.INGREDIENTS[l.id];
        return '<div class="ligne-ing" data-i="' + i + '">' +
          '<input class="champ" list="liste-ingredients" data-champ="nom" placeholder="Ingrédient" value="' + U.esc(ing ? ing[0] : (l.saisie || '')) + '" aria-label="Ingrédient">' +
          '<input class="champ" type="number" min="0" step="any" data-champ="q" placeholder="Qté" value="' + U.esc(l.u === 'qs' ? '' : l.q) + '" aria-label="Quantité"' + (l.u === 'qs' ? ' disabled' : '') + '>' +
          '<select class="champ" data-champ="u" aria-label="Unité">' + UNITES.map(function (u) {
            return '<option value="' + u[0] + '"' + (u[0] === l.u ? ' selected' : '') + '>' + u[1] + '</option>';
          }).join('') + '</select>' +
          '<button type="button" class="rond rond-petit" data-suppr aria-label="Retirer">✕</button>' +
          (l.saisie && !l.id ? '<p class="ligne-aide">Ingrédient inconnu. <button type="button" class="lien" data-creer>Créer « ' + U.esc(l.saisie) + ' »</button></p>' : '') +
          (l.id && l.u === 'pc' && !(window.INGREDIENTS[l.id][7] && window.INGREDIENTS[l.id][7].pc) ? '<p class="ligne-aide">Pas de poids à la pièce connu pour cet ingrédient : utilisez les grammes.</p>' : '') +
        '</div>';
      }).join('');
      apercu();
    }

    function recetteCourante() {
      var f = new FormData(form);
      return {
        nom: (f.get('nom') || '').trim(),
        emoji: (f.get('emoji') || '').trim() || '🍽️',
        desc: (f.get('desc') || '').trim(),
        cat: f.get('cat'),
        cuisine: (f.get('cuisine') || '').trim() || 'Maison',
        portions: Math.max(1, Math.round(Number(f.get('portions')) || 1)),
        prep: Math.max(0, Math.round(Number(f.get('prep')) || 0)),
        cuisson: Math.max(0, Math.round(Number(f.get('cuisson')) || 0)),
        diff: Number(f.get('diff')) || 1,
        ing: lignes.filter(function (l) { return l.id && (l.u === 'qs' || Number(l.q) > 0); }).map(function (l) {
          return [l.id, l.u === 'qs' ? 0 : Number(l.q), l.u];
        }),
        etapes: (f.get('etapes') || '').split('\n').map(function (s) { return s.trim(); }).filter(Boolean),
        astuce: (f.get('astuce') || '').trim()
      };
    }

    function apercu() {
      var r = recetteCourante();
      var n = M.analyser(r).parPortion;
      app.querySelector('[data-apercu]').innerHTML =
        '<div class="kcal"><span class="kcal-valeur">' + U.r(n.kcal) + '</span><span class="kcal-unite">kcal</span></div>' +
        '<div class="tuiles">' +
          ['p', 'g', 'l', 'f'].map(function (k, i) {
            return '<div class="tuile t-' + k + '"><span class="tuile-valeur">' + U.r(n[k]) + '<small> g</small></span><span class="tuile-nom">' + ['Protéines', 'Glucides', 'Lipides', 'Fibres'][i] + '</span></div>';
          }).join('') +
        '</div>';
    }

    conteneur.addEventListener('input', function (e) {
      var div = e.target.closest('.ligne-ing');
      if (!div) return;
      var l = lignes[Number(div.dataset.i)];
      var champ = e.target.dataset.champ;
      if (champ === 'nom') {
        var id = parNom[U.normaliser(e.target.value.trim())];
        l.saisie = e.target.value.trim();
        var avant = l.id;
        l.id = id || '';
        if (!avant !== !l.id || (l.id && l.u === 'pc')) { rendreLignes(); var c = conteneur.querySelector('[data-i="' + div.dataset.i + '"] [data-champ="nom"]'); c.focus(); c.setSelectionRange(c.value.length, c.value.length); return; }
      } else if (champ === 'q') {
        l.q = e.target.value;
      }
      apercu();
    });
    conteneur.addEventListener('change', function (e) {
      var div = e.target.closest('.ligne-ing');
      if (!div) return;
      var l = lignes[Number(div.dataset.i)];
      if (e.target.dataset.champ === 'u') { l.u = e.target.value; rendreLignes(); }
      if (e.target.dataset.champ === 'nom' && l.saisie && !l.id) rendreLignes();
    });
    conteneur.addEventListener('click', function (e) {
      var div = e.target.closest('.ligne-ing');
      if (!div) return;
      var i = Number(div.dataset.i);
      if (e.target.closest('[data-suppr]')) {
        lignes.splice(i, 1);
        if (!lignes.length) lignes.push({ id: '', q: '', u: 'g' });
        rendreLignes();
      } else if (e.target.closest('[data-creer]')) {
        creerIngredient(lignes[i]);
      }
    });
    app.querySelector('[data-ajouter-ligne]').addEventListener('click', function () {
      lignes.push({ id: '', q: '', u: 'g' });
      rendreLignes();
      var champs = conteneur.querySelectorAll('[data-champ="nom"]');
      champs[champs.length - 1].focus();
    });
    form.addEventListener('input', function (e) { if (!e.target.closest('.ligne-ing')) apercu(); });
    app.querySelector('[data-photo]').addEventListener('change', function (e) { photoAjoutee = e.target.files[0] || null; });

    function creerIngredient(ligne) {
      U.modal('Nouvel ingrédient',
        '<form data-ing class="formulaire">' +
          '<label class="champ-groupe"><span>Nom</span><input class="champ" name="nom" required value="' + U.esc(ligne.saisie || '') + '"></label>' +
          '<label class="champ-groupe"><span>Rayon</span><select class="champ" name="rayon">' + RAYONS.map(function (r) { return '<option value="' + r[0] + '">' + r[1] + '</option>'; }).join('') + '</select></label>' +
          '<p class="aide">Valeurs pour 100 g (indiquées sur l\'emballage).</p>' +
          '<div class="ligne-4">' +
            ['kcal', 'Protéines (g)', 'Glucides (g)', 'Lipides (g)'].map(function (lib, i) {
              return '<label class="champ-groupe"><span>' + lib + '</span><input class="champ" type="number" min="0" step="any" name="v' + i + '" required></label>';
            }).join('') +
          '</div>' +
          '<div class="ligne-2"><label class="champ-groupe"><span>Fibres (g)</span><input class="champ" type="number" min="0" step="any" name="v4" value="0"></label>' +
          '<label class="champ-groupe"><span>Poids d\'une pièce (g, facultatif)</span><input class="champ" type="number" min="0" step="any" name="piece"></label></div>' +
          '<p class="erreur" data-err hidden>Renseignez le nom et les 4 valeurs nutritionnelles.</p>' +
          '<div class="modal-actions"><button class="bouton bouton-principal">Créer l\'ingrédient</button></div>' +
        '</form>',
        function (m) {
          var f = m.el.querySelector('[data-ing]');
          f.addEventListener('submit', function (e) {
            e.preventDefault();
            var d = new FormData(f);
            var nom = (d.get('nom') || '').trim();
            var vals = [0, 1, 2, 3, 4].map(function (i) { return Number(d.get('v' + i)); });
            if (!nom || [0, 1, 2, 3].some(function (i) { return d.get('v' + i) === '' || !(vals[i] >= 0); })) {
              m.el.querySelector('[data-err]').hidden = false;
              return;
            }
            var id = D.ajouterIngredient(nom, d.get('rayon'), vals.map(function (v) { return v || 0; }), Number(d.get('piece')) || 0);
            parNom[U.normaliser(nom)] = id;
            var dl = app.querySelector('#liste-ingredients');
            dl.insertAdjacentHTML('beforeend', '<option value="' + U.esc(nom) + '">');
            ligne.id = id;
            ligne.saisie = nom;
            m.fermer();
            U.toast('Ingrédient créé');
            rendreLignes();
          });
        });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var r = recetteCourante();
      var erreur = !r.nom ? 'Donnez un nom à la recette.'
        : !r.ing.length ? 'Ajoutez au moins un ingrédient avec sa quantité.'
        : !r.etapes.length ? 'Décrivez au moins une étape de préparation.'
        : lignes.some(function (l) { return l.saisie && !l.id; }) ? 'Un ingrédient n\'est pas reconnu : choisissez-le dans la liste ou créez-le.'
        : '';
      var zone = app.querySelector('[data-erreur]');
      if (erreur) { zone.textContent = erreur; zone.hidden = false; zone.scrollIntoView({ block: 'center' }); return; }
      r.ing = r.ing.map(function (l) {
        var info = window.INGREDIENTS[l[0]][7];
        return l[2] === 'pc' && !(info && info.pc) ? [l[0], l[1], 'g'] : l;
      });
      r.id = modification ? base.id : 'perso-' + U.slug(r.nom) + '-' + U.aleatoire();
      D.enregistrerRecette(r);
      var suite = photoAjoutee
        ? U.redimensionner(photoAjoutee, 1000).then(function (b) { return D.photos.enregistrer(r.id, b); }).catch(function () {})
        : Promise.resolve();
      suite.then(function () {
        U.toast('Recette enregistrée');
        location.hash = '#/recette/' + encodeURIComponent(r.id);
      });
    });

    rendreLignes();
  };
})();
