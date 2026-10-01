/* Interface : liste filtrable des recettes et fiche détaillée avec portions ajustables. */
(function () {
  'use strict';

  var M = window.Moteur;
  var app = document.getElementById('app');
  var champRecherche = document.getElementById('recherche');
  var boutonFavoris = document.getElementById('btn-favoris');

  // ---------- Stockage local (favoris, portions choisies) ----------
  function lire(cle, defaut) {
    try { var v = localStorage.getItem(cle); return v ? JSON.parse(v) : defaut; } catch (e) { return defaut; }
  }
  function ecrire(cle, valeur) {
    try { localStorage.setItem(cle, JSON.stringify(valeur)); } catch (e) { /* stockage indisponible */ }
  }

  var favoris = lire('cuisine.favoris', []);
  var portionsChoisies = lire('cuisine.portions', {});

  // ---------- Préparation des données ----------
  function normaliser(t) {
    return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  var recettes = window.RECETTES.map(function (r) {
    var a = M.analyser(r);
    var noms = r.ing.map(function (l) { var i = M.infos(l[0]); return (l[3] || '') + ' ' + (i ? i.nom : ''); }).join(' ');
    var n = a.parPortion;
    return Object.assign({}, r, {
      nutrition: a,
      temps: r.prep + r.cuisson,
      proteine: n.p >= 25 && n.p * 4 / n.kcal >= 0.25,
      leger: n.kcal < 400,
      texte: normaliser([r.nom, r.cuisine, r.cat, r.desc, noms].join(' '))
    });
  });
  var parId = {};
  recettes.forEach(function (r) { parId[r.id] = r; });

  var cuisines = Array.from(new Set(recettes.map(function (r) { return r.cuisine; }))).sort(function (a, b) { return a.localeCompare(b, 'fr'); });

  // ---------- État de la liste ----------
  var etat = { recherche: '', cat: '', cuisine: '', temps: '', regime: '', tri: 'nom', favoris: false };
  var defilementListe = 0;

  var REGIMES = {
    vegetarien: { nom: 'Végétarien', test: function (r) { return r.nutrition.regimes.vegetarien; } },
    vegan: { nom: 'Vegan', test: function (r) { return r.nutrition.regimes.vegan; } },
    sansGluten: { nom: 'Sans gluten', test: function (r) { return r.nutrition.regimes.sansGluten; } },
    proteine: { nom: 'Riche en protéines', test: function (r) { return r.proteine; } },
    leger: { nom: 'Léger (< 400 kcal)', test: function (r) { return r.leger; } }
  };

  var TRIS = {
    nom: { nom: 'Nom (A → Z)', f: function (a, b) { return a.nom.localeCompare(b.nom, 'fr'); } },
    kcalAsc: { nom: 'Calories ↑', f: function (a, b) { return a.nutrition.parPortion.kcal - b.nutrition.parPortion.kcal; } },
    kcalDesc: { nom: 'Calories ↓', f: function (a, b) { return b.nutrition.parPortion.kcal - a.nutrition.parPortion.kcal; } },
    proteines: { nom: 'Protéines ↓', f: function (a, b) { return b.nutrition.parPortion.p - a.nutrition.parPortion.p; } },
    temps: { nom: 'Plus rapide', f: function (a, b) { return a.temps - b.temps; } }
  };

  var DIFFICULTES = ['', 'Facile', 'Moyen', 'Difficile'];

  // ---------- Utilitaires d'affichage ----------
  function esc(t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function duree(min) {
    if (min < 60) return min + ' min';
    var h = Math.floor(min / 60), m = min % 60;
    return h + ' h' + (m ? ' ' + String(m).padStart(2, '0') : '');
  }

  function arrondi(v) { return Math.round(v); }

  function estFavori(id) { return favoris.indexOf(id) !== -1; }

  function basculerFavori(id) {
    var i = favoris.indexOf(id);
    if (i === -1) favoris.push(id); else favoris.splice(i, 1);
    ecrire('cuisine.favoris', favoris);
  }

  function badges(r) {
    var b = [];
    if (r.nutrition.regimes.vegan) b.push('<span class="badge badge-vege">Vegan</span>');
    else if (r.nutrition.regimes.vegetarien) b.push('<span class="badge badge-vege">Végé</span>');
    if (r.proteine) b.push('<span class="badge badge-proteine">Protéiné</span>');
    return b.join('');
  }

  // ---------- Liste ----------
  function filtrer() {
    var mots = normaliser(etat.recherche).split(/\s+/).filter(Boolean);
    return recettes.filter(function (r) {
      if (etat.favoris && !estFavori(r.id)) return false;
      if (etat.cat && r.cat !== etat.cat) return false;
      if (etat.cuisine && r.cuisine !== etat.cuisine) return false;
      if (etat.temps && r.temps > Number(etat.temps)) return false;
      if (etat.regime && !REGIMES[etat.regime].test(r)) return false;
      return mots.every(function (m) { return r.texte.indexOf(m) !== -1; });
    }).sort(TRIS[etat.tri].f);
  }

  function options(liste, valeur, defaut) {
    return '<option value="">' + defaut + '</option>' + liste.map(function (o) {
      return '<option value="' + esc(o[0]) + '"' + (o[0] === valeur ? ' selected' : '') + '>' + esc(o[1]) + '</option>';
    }).join('');
  }

  function carte(r) {
    var n = r.nutrition.parPortion;
    return '<a class="carte" href="#/recette/' + r.id + '">' +
      '<div class="carte-visuel" aria-hidden="true"><span>' + r.emoji + '</span>' +
        (estFavori(r.id) ? '<span class="carte-coeur">♥</span>' : '') + '</div>' +
      '<div class="carte-corps">' +
        '<div class="carte-badges">' + badges(r) + '</div>' +
        '<h3>' + esc(r.nom) + '</h3>' +
        '<p class="carte-meta">⏱ ' + duree(r.temps) + ' · ' + esc(r.cuisine) + '</p>' +
        '<div class="carte-nutri">' +
          '<strong>' + arrondi(n.kcal) + ' kcal</strong>' +
          '<span><i class="pt-p"></i>' + arrondi(n.p) + ' g</span>' +
          '<span><i class="pt-g"></i>' + arrondi(n.g) + ' g</span>' +
          '<span><i class="pt-l"></i>' + arrondi(n.l) + ' g</span>' +
        '</div>' +
        '<p class="carte-portion">par portion</p>' +
      '</div></a>';
  }

  function afficherListe() {
    document.title = 'Ma Cuisine';
    var resultats = filtrer();
    var compteParCat = {};
    recettes.forEach(function (r) { compteParCat[r.cat] = (compteParCat[r.cat] || 0) + 1; });

    var puces = '<button class="puce' + (etat.cat ? '' : ' active') + '" data-cat="">Tout <small>' + recettes.length + '</small></button>' +
      window.CATEGORIES.map(function (c) {
        return '<button class="puce' + (etat.cat === c.nom ? ' active' : '') + '" data-cat="' + esc(c.nom) + '">' +
          c.emoji + ' ' + esc(c.nom) + ' <small>' + (compteParCat[c.nom] || 0) + '</small></button>';
      }).join('');

    var filtresActifs = etat.cuisine || etat.temps || etat.regime || etat.cat || etat.recherche || etat.favoris;

    app.innerHTML =
      '<nav class="puces" aria-label="Catégories">' + puces + '</nav>' +
      '<div class="filtres">' +
        '<label><span>Cuisine</span><select data-filtre="cuisine">' + options(cuisines.map(function (c) { return [c, c]; }), etat.cuisine, 'Toutes') + '</select></label>' +
        '<label><span>Temps total</span><select data-filtre="temps">' + options([['15', '≤ 15 min'], ['30', '≤ 30 min'], ['45', '≤ 45 min'], ['60', '≤ 1 h'], ['120', '≤ 2 h']], etat.temps, 'Peu importe') + '</select></label>' +
        '<label><span>Régime / objectif</span><select data-filtre="regime">' + options(Object.keys(REGIMES).map(function (k) { return [k, REGIMES[k].nom]; }), etat.regime, 'Tous') + '</select></label>' +
        '<label><span>Trier par</span><select data-filtre="tri">' + Object.keys(TRIS).map(function (k) {
          return '<option value="' + k + '"' + (etat.tri === k ? ' selected' : '') + '>' + TRIS[k].nom + '</option>';
        }).join('') + '</select></label>' +
      '</div>' +
      '<div class="resultats-entete"><p>' + resultats.length + ' recette' + (resultats.length > 1 ? 's' : '') +
        (etat.favoris ? ' en favoris' : '') + '</p>' +
        (filtresActifs ? '<button class="lien" id="reinit">Réinitialiser les filtres</button>' : '') + '</div>' +
      (resultats.length
        ? '<div class="grille">' + resultats.map(carte).join('') + '</div>'
        : '<div class="vide"><p>' + (etat.favoris && !favoris.length
            ? 'Aucun favori pour l\'instant. Ouvrez une recette et touchez ♡ pour l\'ajouter.'
            : 'Aucune recette ne correspond à ces critères.') + '</p></div>');

    app.querySelectorAll('.puce').forEach(function (b) {
      b.addEventListener('click', function () { etat.cat = b.dataset.cat; afficherListe(); });
    });
    app.querySelectorAll('[data-filtre]').forEach(function (s) {
      s.addEventListener('change', function () { etat[s.dataset.filtre] = s.value; afficherListe(); });
    });
    var reinit = document.getElementById('reinit');
    if (reinit) reinit.addEventListener('click', function () {
      etat = { recherche: '', cat: '', cuisine: '', temps: '', regime: '', tri: etat.tri, favoris: false };
      champRecherche.value = '';
      majBoutonFavoris();
      afficherListe();
    });
    var active = app.querySelector('.puce.active');
    if (active && active.scrollIntoView) active.scrollIntoView({ block: 'nearest', inline: 'center' });
  }

  // ---------- Fiche recette ----------
  var verrouEcran = null;

  function libererEcran() {
    if (verrouEcran) { verrouEcran.release().catch(function () {}); verrouEcran = null; }
  }

  function tuile(classe, nom, valeur, unite) {
    return '<div class="tuile ' + classe + '"><span class="tuile-valeur">' + valeur + '<small>' + unite + '</small></span><span class="tuile-nom">' + nom + '</span></div>';
  }

  function afficherRecette(id) {
    var r = parId[id];
    if (!r) { location.hash = '#/'; return; }
    document.title = r.nom + ' · Ma Cuisine';
    var portions = portionsChoisies[id] || r.portions;
    var coches = {};
    var etapesFaites = {};

    app.innerHTML =
      '<article class="fiche">' +
        '<div class="fiche-barre">' +
          '<a href="#/" class="retour">← Recettes</a>' +
          '<div class="fiche-actions">' +
            ('wakeLock' in navigator ? '<button class="bouton-secondaire" id="mode-cuisine" aria-pressed="false" title="Empêche l\'écran de se mettre en veille">🔆 Mode cuisine</button>' : '') +
            '<button class="bouton-coeur" id="favori" aria-pressed="' + estFavori(id) + '"></button>' +
          '</div>' +
        '</div>' +
        '<header class="fiche-entete">' +
          '<div class="fiche-emoji" aria-hidden="true">' + r.emoji + '</div>' +
          '<div>' +
            '<p class="fiche-cat">' + esc(r.cat) + ' · ' + esc(r.cuisine) + '</p>' +
            '<h1>' + esc(r.nom) + '</h1>' +
            '<p class="fiche-desc">' + esc(r.desc) + '</p>' +
            '<ul class="fiche-infos">' +
              '<li>🔪 Préparation <b>' + duree(r.prep) + '</b></li>' +
              (r.cuisson ? '<li>🔥 Cuisson <b>' + duree(r.cuisson) + '</b></li>' : '<li>❄️ Sans cuisson</li>') +
              '<li>📊 <b>' + DIFFICULTES[r.diff] + '</b></li>' +
              (r.nutrition.regimes.vegan ? '<li>🌱 Vegan</li>' : r.nutrition.regimes.vegetarien ? '<li>🥕 Végétarien</li>' : '') +
              (r.nutrition.regimes.sansGluten ? '<li>🌾 Sans gluten*</li>' : '') +
            '</ul>' +
          '</div>' +
        '</header>' +

        '<div class="fiche-grille">' +
          '<div class="fiche-gauche">' +
            '<section class="bloc portions-bloc">' +
              '<h2>Portions</h2>' +
              '<div class="portions">' +
                '<button class="rond" data-delta="-1" aria-label="Une portion de moins">−</button>' +
                '<input id="portions" type="number" inputmode="numeric" min="1" max="100" value="' + portions + '" aria-label="Nombre de portions">' +
                '<button class="rond" data-delta="1" aria-label="Une portion de plus">+</button>' +
              '</div>' +
              '<button class="lien" id="portions-reinit" hidden>Revenir à ' + r.portions + '</button>' +
            '</section>' +

            '<section class="bloc nutrition">' +
              '<h2>Valeurs nutritionnelles</h2>' +
              '<p class="nutri-sous">par portion</p>' +
              '<div id="nutri"></div>' +
            '</section>' +

            '<section class="bloc">' +
              '<h2>Ingrédients <small id="ing-pour"></small></h2>' +
              '<ul class="ingredients" id="ingredients"></ul>' +
            '</section>' +
          '</div>' +

          '<div class="fiche-droite">' +
            '<section class="bloc">' +
              '<h2>Préparation</h2>' +
              '<ol class="etapes">' + r.etapes.map(function (e, i) {
                return '<li data-i="' + i + '"><span class="etape-num">' + (i + 1) + '</span><p>' + esc(e) + '</p></li>';
              }).join('') + '</ol>' +
              (r.astuce ? '<aside class="astuce"><b>💡 Astuce</b><p>' + esc(r.astuce) + '</p></aside>' : '') +
            '</section>' +
          '</div>' +
        '</div>' +
        '<p class="note">Valeurs calculées à partir des ingrédients crus (tables CIQUAL / USDA), hors ingrédients « selon goût ». Elles sont indicatives. ' +
          '* Sans gluten d\'après les ingrédients : vérifiez les étiquettes (bouillon, épices…).</p>' +
      '</article>';

    var champ = document.getElementById('portions');
    var reinit = document.getElementById('portions-reinit');

    function majPortions() {
      var facteur = portions / r.portions;
      champ.value = portions;
      reinit.hidden = portions === r.portions;
      if (portions === r.portions) delete portionsChoisies[id]; else portionsChoisies[id] = portions;
      ecrire('cuisine.portions', portionsChoisies);

      document.getElementById('ing-pour').textContent = 'pour ' + portions + ' portion' + (portions > 1 ? 's' : '');
      document.getElementById('ingredients').innerHTML = r.ing.map(function (ligne, i) {
        var a = M.afficherLigne(ligne, facteur);
        return '<li class="' + (coches[i] ? 'coche' : '') + '"><label>' +
          '<input type="checkbox" data-i="' + i + '"' + (coches[i] ? ' checked' : '') + '>' +
          '<span class="ing-qte">' + esc(a.qte) + '</span><span class="ing-nom">' + esc(a.nom) + '</span></label></li>';
      }).join('');

      var n = r.nutrition.parPortion;
      var t = r.nutrition.total;
      var rep = M.repartition(n);
      document.getElementById('nutri').innerHTML =
        '<div class="kcal"><span class="kcal-valeur">' + arrondi(n.kcal) + '</span><span class="kcal-unite">kcal</span></div>' +
        '<div class="tuiles">' +
          tuile('t-p', 'Protéines', arrondi(n.p), ' g') +
          tuile('t-g', 'Glucides', arrondi(n.g), ' g') +
          tuile('t-l', 'Lipides', arrondi(n.l), ' g') +
          tuile('t-f', 'Fibres', arrondi(n.f), ' g') +
        '</div>' +
        '<div class="repartition" role="img" aria-label="Répartition des calories : protéines ' + arrondi(rep.p) + ' %, glucides ' + arrondi(rep.g) + ' %, lipides ' + arrondi(rep.l) + ' %">' +
          '<span class="r-p" style="width:' + rep.p + '%"></span><span class="r-g" style="width:' + rep.g + '%"></span><span class="r-l" style="width:' + rep.l + '%"></span>' +
        '</div>' +
        '<div class="repartition-legende"><span><i class="pt-p"></i>Protéines ' + arrondi(rep.p) + ' %</span><span><i class="pt-g"></i>Glucides ' + arrondi(rep.g) + ' %</span><span><i class="pt-l"></i>Lipides ' + arrondi(rep.l) + ' %</span></div>' +
        '<div class="total">' +
          '<b>Total pour ' + portions + ' portion' + (portions > 1 ? 's' : '') + '</b>' +
          '<span>' + arrondi(t.kcal * facteur) + ' kcal · P ' + arrondi(t.p * facteur) + ' g · G ' + arrondi(t.g * facteur) + ' g · L ' + arrondi(t.l * facteur) + ' g</span>' +
        '</div>';
    }

    function changer(v) {
      v = Math.round(Number(v));
      if (!(v >= 1)) v = 1;
      if (v > 100) v = 100;
      portions = v;
      majPortions();
    }

    app.querySelectorAll('[data-delta]').forEach(function (b) {
      b.addEventListener('click', function () { changer(portions + Number(b.dataset.delta)); });
    });
    champ.addEventListener('change', function () { changer(champ.value); });
    reinit.addEventListener('click', function () { changer(r.portions); });

    document.getElementById('ingredients').addEventListener('change', function (e) {
      var i = e.target.dataset.i;
      coches[i] = e.target.checked;
      e.target.closest('li').classList.toggle('coche', e.target.checked);
    });

    app.querySelectorAll('.etapes li').forEach(function (li) {
      li.addEventListener('click', function () {
        etapesFaites[li.dataset.i] = !etapesFaites[li.dataset.i];
        li.classList.toggle('faite', etapesFaites[li.dataset.i]);
      });
    });

    var favori = document.getElementById('favori');
    function majFavori() {
      var actif = estFavori(id);
      favori.setAttribute('aria-pressed', actif);
      favori.textContent = actif ? '♥ Favori' : '♡ Ajouter aux favoris';
    }
    favori.addEventListener('click', function () { basculerFavori(id); majFavori(); });
    majFavori();

    var modeCuisine = document.getElementById('mode-cuisine');
    if (modeCuisine) modeCuisine.addEventListener('click', function () {
      if (verrouEcran) {
        libererEcran();
        modeCuisine.setAttribute('aria-pressed', 'false');
        return;
      }
      navigator.wakeLock.request('screen').then(function (v) {
        verrouEcran = v;
        modeCuisine.setAttribute('aria-pressed', 'true');
        v.addEventListener('release', function () { verrouEcran = null; modeCuisine.setAttribute('aria-pressed', 'false'); });
      }).catch(function () {});
    });

    majPortions();
    window.scrollTo(0, 0);
  }

  // ---------- Navigation ----------
  function route() {
    var m = location.hash.match(/^#\/recette\/([a-z0-9-]+)/);
    libererEcran();
    if (m) {
      afficherRecette(m[1]);
    } else {
      afficherListe();
      window.scrollTo(0, defilementListe);
    }
  }

  window.addEventListener('hashchange', route);
  app.addEventListener('click', function (e) {
    if (e.target.closest('.carte')) defilementListe = window.scrollY;
  });

  var minuterie;
  champRecherche.addEventListener('input', function () {
    clearTimeout(minuterie);
    minuterie = setTimeout(function () {
      etat.recherche = champRecherche.value;
      if (location.hash.indexOf('#/recette/') === 0) { defilementListe = 0; location.hash = '#/'; } else afficherListe();
    }, 120);
  });

  function majBoutonFavoris() {
    boutonFavoris.setAttribute('aria-pressed', etat.favoris);
    boutonFavoris.firstChild.textContent = etat.favoris ? '♥ ' : '♡ ';
  }
  boutonFavoris.addEventListener('click', function () {
    etat.favoris = !etat.favoris;
    majBoutonFavoris();
    if (location.hash.indexOf('#/recette/') === 0) { defilementListe = 0; location.hash = '#/'; } else afficherListe();
  });

  route();
})();
