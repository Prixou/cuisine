/* Vue : objectifs nutritionnels, suggestions personnalisées, installation et sauvegarde. */
(function () {
  'use strict';

  var U = window.U, D = window.D, C = window.Commun;

  function suggestions() {
    var regime = D.profil && D.profil.regime;
    var principales = D.recettes.filter(function (r) {
      return D.CATS_PLATS.indexOf(r.cat) !== -1 && D.regimeOk(r, regime) && r.nutrition.parPortion.kcal >= 300;
    }).sort(function (a, b) { return D.adequation(b) - D.adequation(a); }).slice(0, 8);
    var petitsDej = D.recettes.filter(function (r) {
      return r.cat === 'Petit-déjeuner' && D.regimeOk(r, regime);
    }).sort(function (a, b) { return D.adequation(b, 0.25) - D.adequation(a, 0.25); }).slice(0, 4);
    return { principales: principales, petitsDej: petitsDej };
  }

  window.Vues.profil = function (app) {
    document.title = 'Mes objectifs · Ma Cuisine';
    var p = Object.assign({ sexe: 'f', age: '', poids: '', taille: '', activite: 1.375, but: 'maintien', regime: '', manuel: false, cibles: null, foyer: 1 }, D.profil || {});

    function champ(nom, libelle, type, valeur, attrs) {
      return '<label class="champ-groupe"><span>' + libelle + '</span><input class="champ" type="' + type + '" name="' + nom + '" value="' + U.esc(valeur) + '" ' + (attrs || '') + '></label>';
    }

    /* Met à jour uniquement les besoins et les suggestions (le formulaire garde le focus). */
    function majResultats() {
      var calc = p.poids && p.taille && p.age ? D.calculerCibles(p) : null;
      var cibles = D.cibles();
      app.querySelector('[data-besoins]').innerHTML = cibles
        ? '<div class="kcal"><span class="kcal-valeur">' + cibles.kcal + '</span><span class="kcal-unite">kcal / jour</span></div>' +
          '<div class="tuiles tuiles-3">' +
            '<div class="tuile t-p"><span class="tuile-valeur">' + cibles.p + '<small> g</small></span><span class="tuile-nom">Protéines</span></div>' +
            '<div class="tuile t-g"><span class="tuile-valeur">' + cibles.g + '<small> g</small></span><span class="tuile-nom">Glucides</span></div>' +
            '<div class="tuile t-l"><span class="tuile-valeur">' + cibles.l + '<small> g</small></span><span class="tuile-nom">Lipides</span></div>' +
          '</div>' +
          (calc && !p.manuel ? '<p class="aide">Métabolisme de base : ' + calc.mb + ' kcal (formule de Mifflin-St Jeor). Dépense estimée avec votre activité : ' + calc.depense + ' kcal. ' +
            'Protéines : ' + String(D.BUTS[p.but].proteines).replace('.', ',') + ' g par kg. Lipides : 30 % des calories. Glucides : le reste.</p>' : '') +
          '<p class="aide">Estimation indicative, qui ne remplace pas l\'avis d\'un professionnel de santé.</p>'
        : '<p class="aide">Renseignez votre âge, votre poids et votre taille pour calculer vos besoins.</p>';
      var s = cibles ? suggestions() : null;
      app.querySelector('[data-suggestions]').innerHTML = s
        ? '<section class="section-suggestions"><h2>🍽️ Plats suggérés pour vous</h2>' +
          '<p class="aide">Environ un tiers de vos calories, et le plus de protéines possible par rapport à votre objectif' + (p.regime ? ' · ' + D.REGIMES[p.regime].nom : '') + '.</p>' +
          C.grille(s.principales) +
          '<h2>🥐 Petits-déjeuners suggérés</h2>' + C.grille(s.petitsDej) + '</section>'
        : '';
    }

    function rendre() {
      var calc = p.poids && p.taille && p.age ? D.calculerCibles(p) : null;
      var installable = window.App.installation;
      var ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.navigator.standalone;

      app.innerHTML =
        '<div class="page-entete"><h1>🎯 Mes objectifs</h1><p>Calculez vos besoins pour suivre vos journées dans le planning et recevoir des suggestions adaptées.</p></div>' +
        '<div class="profil-grille">' +
        '<section class="bloc"><h2>Mon profil</h2><form data-form class="formulaire">' +
          '<div class="champ-groupe"><span>Sexe</span><div class="segments">' +
            '<label><input type="radio" name="sexe" value="f"' + (p.sexe === 'f' ? ' checked' : '') + '><span>Femme</span></label>' +
            '<label><input type="radio" name="sexe" value="h"' + (p.sexe === 'h' ? ' checked' : '') + '><span>Homme</span></label></div></div>' +
          '<div class="ligne-3">' +
            champ('age', 'Âge', 'number', p.age, 'min="12" max="100" inputmode="numeric"') +
            champ('poids', 'Poids (kg)', 'number', p.poids, 'min="30" max="250" step="0.1" inputmode="decimal"') +
            champ('taille', 'Taille (cm)', 'number', p.taille, 'min="120" max="230" inputmode="numeric"') +
          '</div>' +
          '<label class="champ-groupe"><span>Activité physique</span><select class="champ" name="activite">' + D.ACTIVITES.map(function (a) {
            return '<option value="' + a[0] + '"' + (Number(p.activite) === a[0] ? ' selected' : '') + '>' + a[1] + '</option>';
          }).join('') + '</select></label>' +
          '<label class="champ-groupe"><span>Objectif</span><select class="champ" name="but">' + Object.keys(D.BUTS).map(function (k) {
            return '<option value="' + k + '"' + (p.but === k ? ' selected' : '') + '>' + D.BUTS[k].nom + '</option>';
          }).join('') + '</select></label>' +
          '<label class="champ-groupe"><span>Régime alimentaire (pour les suggestions et menus générés)</span><select class="champ" name="regime">' +
            '<option value="">Aucun</option>' + ['vegetarien', 'vegan', 'sansGluten'].map(function (k) {
              return '<option value="' + k + '"' + (p.regime === k ? ' selected' : '') + '>' + D.REGIMES[k].nom + '</option>';
            }).join('') + '</select></label>' +
          '<label class="case"><input type="checkbox" name="manuel"' + (p.manuel ? ' checked' : '') + '> Je saisis mes objectifs moi-même</label>' +
          '<div class="ligne-4" data-manuels' + (p.manuel ? '' : ' hidden') + '>' +
            champ('c_kcal', 'kcal / jour', 'number', (p.cibles && p.cibles.kcal) || (calc && calc.kcal) || 2000, 'min="800" max="6000"') +
            champ('c_p', 'Protéines (g)', 'number', (p.cibles && p.cibles.p) || (calc && calc.p) || 100, 'min="0" max="400"') +
            champ('c_g', 'Glucides (g)', 'number', (p.cibles && p.cibles.g) || (calc && calc.g) || 230, 'min="0" max="900"') +
            champ('c_l', 'Lipides (g)', 'number', (p.cibles && p.cibles.l) || (calc && calc.l) || 70, 'min="0" max="300"') +
          '</div>' +
        '</form></section>' +

        '<section class="bloc"><h2>Mes besoins par jour</h2><div data-besoins></div></section>' +
        '</div>' +
        '<div data-suggestions></div>' +
        '<div class="profil-grille">' +
        '<section class="bloc"><h2>📱 Installer l\'application</h2>' +
          (window.matchMedia('(display-mode: standalone)').matches
            ? '<p>✅ L\'application est installée sur cet appareil.</p>'
            : installable
              ? '<p>Ajoutez Ma Cuisine à votre écran d\'accueil : elle fonctionnera même sans connexion.</p><button class="bouton bouton-principal" data-installer>📲 Installer</button>'
              : ios
                ? '<p>Sur iPhone / iPad : touchez le bouton <b>Partager</b> de Safari puis <b>« Sur l\'écran d\'accueil »</b>.</p>'
                : '<p>Depuis le menu de votre navigateur, choisissez <b>« Installer l\'application »</b> ou <b>« Ajouter à l\'écran d\'accueil »</b>. Une fois installée, elle fonctionne hors ligne.</p>') +
        '</section>' +
        '<section class="bloc"><h2>🥛 Intolérance au lactose</h2>' +
          '<label class="case"><input type="checkbox" data-sans-lactose' + (D.sansLactose() ? ' checked' : '') + '> Je suis intolérant(e) au lactose</label>' +
          '<p class="aide">Toutes les recettes s\'affichent alors dans leur version sans lactose : lait, crème, yaourts, fromages frais et mozzarella sans lactose, margarine à la place du beurre. ' +
          'Les fromages affinés (parmesan, comté, emmental, cheddar, camembert…) sont gardés : ils sont naturellement presque sans lactose. Quantités, valeurs nutritionnelles, courses et prix suivent. ' +
          'Sur chaque recette, vous pouvez toujours revoir la version d\'origine.</p>' +
        '</section>' +
        '<section class="bloc"><h2>🔄 Version</h2>' +
          '<p>Ma Cuisine <b>version ' + window.App.VERSION + '</b> · prix indicatifs de ' + U.esc(window.PRIX.date) + '.</p>' +
          '<p class="aide">L\'application se met à jour toute seule quand elle est ouverte avec une connexion. Si une nouveauté n\'apparaît pas, touchez ce bouton, ou fermez complètement l\'application puis rouvrez-la.</p>' +
          '<div class="actions-bas"><button class="bouton" data-maj>🔄 Rechercher une mise à jour</button></div>' +
        '</section>' +
        '<section class="bloc"><h2>📷 Photos des recettes</h2>' +
          '<label class="case"><input type="checkbox" data-photos-auto' + (window.PhotosAuto.actif() ? ' checked' : '') + '> Afficher automatiquement une photo de chaque plat</label>' +
          '<p class="aide">Les photos sont des images libres de droits de <a href="https://commons.wikimedia.org" target="_blank" rel="noopener">Wikimedia Commons</a> (la photothèque de Wikipédia), ' +
          'chargées la première fois qu\'une recette s\'affiche puis gardées pour le hors-ligne. L\'auteur et la licence de chaque photo sont indiqués sur la fiche. ' +
          'Si une photo ne correspond pas, touchez « Pas la bonne photo ? » sous l\'image. Votre propre photo est toujours prioritaire.</p>' +
          '<p class="aide">' + U.pluriel(window.PhotosAuto.nombre(), 'photo déjà trouvée', 'photos déjà trouvées') + '.</p>' +
          '<div class="actions-bas"><button class="bouton" data-photos-vider>↺ Rechercher à nouveau toutes les photos</button></div>' +
        '</section>' +
        '<section class="bloc"><h2>💾 Mes données</h2>' +
          '<p class="aide">Favoris, notes, planning, courses, objectifs et recettes perso sont enregistrés uniquement sur cet appareil. Sauvegardez-les pour les transférer sur un autre appareil (les photos ne sont pas incluses).</p>' +
          '<div class="actions-bas">' +
            '<button class="bouton" data-exporter>⬇️ Sauvegarder</button>' +
            '<label class="bouton">⬆️ Restaurer<input type="file" accept="application/json,.json" data-importer hidden></label>' +
            '<button class="bouton bouton-danger-doux" data-effacer>🗑 Tout effacer</button>' +
          '</div>' +
        '</section>' +
        '</div>';

      majResultats();
      var form = app.querySelector('[data-form]');
      form.addEventListener('change', function () {
        var f = new FormData(form);
        p.sexe = f.get('sexe');
        p.age = Number(f.get('age')) || '';
        p.poids = Number(f.get('poids')) || '';
        p.taille = Number(f.get('taille')) || '';
        p.activite = Number(f.get('activite'));
        p.but = f.get('but');
        p.regime = f.get('regime');
        var etaitManuel = p.manuel;
        p.manuel = f.get('manuel') === 'on';
        if (p.manuel && etaitManuel) {
          p.cibles = { kcal: Number(f.get('c_kcal')) || 0, p: Number(f.get('c_p')) || 0, g: Number(f.get('c_g')) || 0, l: Number(f.get('c_l')) || 0 };
        } else if (p.manuel && !p.cibles) {
          var c = p.poids && p.taille && p.age ? D.calculerCibles(p) : { kcal: 2000, p: 100, g: 230, l: 70 };
          p.cibles = { kcal: c.kcal, p: c.p, g: c.g, l: c.l };
        }
        D.profil = p;
        D.sauver('profil');
        var manuels = form.querySelector('[data-manuels]');
        if (p.manuel && manuels.hidden) {
          ['kcal', 'p', 'g', 'l'].forEach(function (k) { form.querySelector('[name=c_' + k + ']').value = p.cibles[k]; });
        }
        manuels.hidden = !p.manuel;
        majResultats();
      });

      var installer = app.querySelector('[data-installer]');
      if (installer) installer.addEventListener('click', function () {
        var ev = window.App.installation;
        ev.prompt();
        ev.userChoice.finally(function () { window.App.installation = null; rendre(); });
      });
      app.querySelector('[data-photos-auto]').addEventListener('change', function (e) {
        window.PhotosAuto.activer(e.target.checked);
        U.toast(e.target.checked ? 'Photos activées' : 'Photos désactivées : les emojis sont affichés');
        setTimeout(function () { location.reload(); }, 700);
      });
      app.querySelector('[data-maj]').addEventListener('click', function () { window.App.verifierMiseAJour(); });
      app.querySelector('[data-sans-lactose]').addEventListener('change', function (e) {
        p.sansLactose = e.target.checked;
        D.profil = Object.assign({}, D.profil || {}, { sansLactose: p.sansLactose });
        D.sauver('profil');
        D.rafraichir();
        majResultats();
        U.toast(p.sansLactose ? '🥛 Recettes sans lactose activées partout' : 'Recettes d\'origine rétablies');
      });
      app.querySelector('[data-photos-vider]').addEventListener('click', function () {
        window.PhotosAuto.vider();
        U.toast('Les photos seront recherchées à nouveau');
        rendre();
      });
      app.querySelector('[data-exporter]').addEventListener('click', function () {
        U.telecharger('ma-cuisine-' + U.iso(new Date()) + '.json', D.exporter());
      });
      app.querySelector('[data-importer]').addEventListener('change', function (e) {
        var f = e.target.files[0];
        if (!f) return;
        f.text().then(function (t) {
          D.importer(t);
          U.toast('Données restaurées');
          setTimeout(function () { location.reload(); }, 600);
        }).catch(function () { U.toast('Fichier de sauvegarde invalide'); });
      });
      app.querySelector('[data-effacer]').addEventListener('click', function () {
        U.confirmer('Effacer toutes vos données (favoris, notes, planning, courses, recettes perso, photos) ? Cette action est irréversible.', 'Tout effacer', function () {
          window.PhotosAuto.vider();
          D.toutEffacer();
          location.hash = '#/';
          location.reload();
        });
      });
    }

    rendre();
  };
})();
