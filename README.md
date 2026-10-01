# 🍳 Ma Cuisine

Application web de cuisine : **569 recettes** du monde entier, dont des recettes healthy tendance et un grand volet **batch cooking**. Les quantités s'ajustent au nombre de portions, et chaque plat affiche ses **calories et macros**. L'application propose aussi un planning des repas, une liste de courses, un mode frigo, des objectifs nutritionnels et vos recettes personnelles. Elle s'installe sur le téléphone et fonctionne hors ligne.

## Utilisation

- **En local** : ouvrez `index.html` dans un navigateur. Tout fonctionne, sauf l'installation et le hors-ligne, qui exigent une adresse http(s).
- **En ligne (recommandé)** : dans Settings → Pages, choisissez la source **GitHub Actions**. Le workflow `.github/workflows/pages.yml` vérifie les recettes puis publie l'application à chaque mise à jour de `main` (relance manuelle possible dans l'onglet Actions). Ouvrez ensuite `https://<utilisateur>.github.io/cuisine/` sur votre téléphone puis « Ajouter à l'écran d'accueil ».

## Fonctionnalités

| | |
|---|---|
| 📖 **Recettes** | 569 recettes, 14 catégories, plus de 60 cuisines, dont 36 recettes healthy tendance (cottage cheese, protéines, fibres, chou…). Recherche par nom ou ingrédient. Filtres par cuisine, temps, régime (végétarien, vegan, sans gluten), riche en protéines, léger. Tri par calories, protéines, temps, mes notes ou « adapté à mes objectifs ». |
| 🍱 **Batch cooking** | 8 sessions clés en main (healthy, gourmande en famille, végétarienne, protéinée, petit budget, congélateur plein, express 1 h, mijotés d'hiver). Chaque session donne l'ordre des étapes avec minuteurs, la quantité ajustable (½ à 2×), tout l'ajout aux courses en un geste et la **répartition automatique dans le planning** : ce qui se garde le moins est mangé en premier, ce qui ne se congèle pas avant sa date limite. 33 recettes pensées pour cuisiner en quantité, durée de conservation (frigo / congélateur) et façon de réchauffer pour plus de 210 recettes, filtre « 🍱 Batch cooking » dans la liste. |
| ⚖️ **Portions** | Toutes les quantités sont recalculées et arrondies intelligemment (½, ¼, kg, L, cuillères, gousses, tranches…). |
| 🔥 **Macros** | kcal, protéines, glucides, lipides, fibres par portion et au total, répartition des calories, part de vos besoins du jour. |
| 🛒 **Liste de courses** | Ajout d'une recette (ou de toute la semaine du planning) avec ses portions. Les ingrédients sont additionnés et rangés par rayon. Articles libres, cases à cocher, partage / copie. |
| 📅 **Planning** | Repas de la semaine (petit-déjeuner, déjeuner, dîner, collation), totaux journaliers face aux objectifs, **génération automatique** des repas selon vos calories et macros. |
| 🎯 **Objectifs** | Calcul des besoins (formule de Mifflin-St Jeor, niveau d'activité, perte / maintien / prise de muscle) ou saisie manuelle, régime préféré, suggestions de plats et de petits-déjeuners adaptés. |
| 🧊 **Mode frigo** | Indiquez vos ingrédients : les recettes réalisables apparaissent d'abord, avec les ingrédients manquants. Les ingrédients équivalents sont pris en compte (les différents riz, les crèmes, etc.). |
| ✏️ **Mes recettes** | Créez vos recettes avec calcul automatique des macros, ajoutez vos propres ingrédients (valeurs de l'étiquette), ou « adaptez à votre façon » une recette existante. |
| ⏱ **Minuteurs** | Les durées des étapes (« 10 min », « 1 h 30 ») deviennent des boutons. Plusieurs minuteurs en parallèle, alarme sonore, vibration et notification. |
| 🖼️ **Photos des plats** | Chaque recette affiche une vraie photo libre de droits de Wikimedia Commons, avec son auteur et sa licence. Elle est cherchée à l'affichage, puis gardée pour le hors-ligne. « Pas la bonne photo ? » passe à la suivante. Désactivable dans Objectifs. |
| 📷 **Notes & photos perso** | Note de 1 à 5 étoiles, remarques personnelles et photo de votre plat (prioritaire sur la photo Wikimedia). |
| 📱 **Application** | Installable (PWA), hors ligne, mode « cuisine » qui garde l'écran allumé, thème sombre automatique. |
| 💾 **Sauvegarde** | Vos données restent sur l'appareil. Elles s'exportent et s'importent en un fichier pour changer de téléphone. |

## Calcul des macros

Chaque ingrédient a ses valeurs pour 100 g dans `js/ingredients.js` (≈ 320 ingrédients, d'après les tables **CIQUAL** (Anses) et **USDA**, arrondies).
Les recettes indiquent leurs ingrédients en g, ml, pièces ou cuillères. Le moteur (`js/moteur.js`) convertit tout en grammes (poids moyen d'une pièce, densité) puis additionne.
Les valeurs sont **indicatives** : elles portent sur les ingrédients crus, sans les ingrédients « selon goût », et l'huile de friture est comptée pour la seule part absorbée.

## Structure

```
index.html                  page unique
manifest.webmanifest, sw.js application installable et hors ligne
icones/                     icônes de l'application
css/style.css               styles (thème clair / sombre)
js/outils.js                stockage, texte, dates, fenêtres, images
js/ingredients.js           base nutritionnelle
js/categories.js            catégories
js/moteur.js                conversions, calculs nutritionnels, arrondis
js/recettes/*.js            les 569 recettes
js/photos-recettes.js       où chercher la photo de chaque recette (Wikipédia, Commons)
js/batch.js                 batch cooking : conservation, réchauffage, sessions
js/donnees.js               données perso, objectifs, planning, courses, photos
js/photos-auto.js           recherche des photos sur Wikimedia, cache, crédits
js/minuteurs.js             minuteurs de cuisine
js/vues/*.js                écrans (liste, fiche, batch, courses, planning, frigo, objectifs, éditeur)
js/app.js                   navigation
tools/valider.js            vérification des données (dont les doublons)
tools/ajouter-fichier.py    déclare un nouveau fichier de recettes
```

## Ajouter des recettes au catalogue

Ajoutez un objet dans un fichier de `js/recettes/` (ou créez un fichier, puis lancez `python3 tools/ajouter-fichier.py js/recettes/mon-fichier.js`) :

```js
{
  id: 'mon-plat', nom: 'Mon plat', cat: 'Viandes', cuisine: 'Française', emoji: '🍲',
  desc: 'Une phrase de description.',
  portions: 4, prep: 15, cuisson: 30, diff: 1,          // diff : 1 facile, 2 moyen, 3 difficile
  ing: [
    ['poulet_blanc', 600],                              // 600 g (unité par défaut)
    ['oignon', 2, 'pc'],                                // 2 pièces
    ['huile_olive', 2, 'cs'],                           // 2 cuillères à soupe
    ['pates', 400, 'g', 'Spaghetti'],                   // libellé personnalisé
    ['sel', 0, 'qs']                                    // selon goût
  ],
  etapes: ['Étape 1…', 'Faites cuire 10 min.'],          // « 10 min » devient un minuteur
  astuce: 'Facultatif.'
}
```

Ajoutez aussi la source de sa photo dans `js/photos-recettes.js` : `'mon-plat': 'w:Titre de l\'article Wikipédia|c:recherche en anglais'`. Les candidats sont essayés dans l'ordre : `w:` prend l'image principale de l'article Wikipédia en français, `c:` cherche des photos sur Wikimedia Commons.

Si le plat se prête au batch cooking, indiquez sa conservation dans `js/batch.js` : `'mon-plat': [4, 3, 'mijote']` (jours au réfrigérateur, mois au congélateur ou 0, façon de réchauffer). Les durées suivent les repères de l'Anses et de l'USDA : 3 à 4 jours pour un plat cuisiné, 2 pour le poisson.

Unités : `g`, `kg`, `ml`, `cl`, `l`, `pc` (pièce), `cs` (c. à soupe), `cc` (c. à café), `pincee`, `qs` (selon goût).

Ensuite, lancez la vérification :

```
node tools/valider.js            # ingrédients inconnus, unités, doublons, valeurs suspectes
node tools/valider.js --tableau  # tableau kcal / macros de toutes les recettes
```

La détection des doublons compare les noms normalisés (sans accents, pluriels, mots vides ni ordre des mots) et signale les noms très proches. Les paires proches mais bien distinctes se déclarent dans `tools/doublons-autorises.json`.
