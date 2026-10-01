# 🍳 Ma Cuisine

Application web de recettes : **196 plats** du monde entier, quantités ajustables au nombre de portions, **calories et macros** (protéines, glucides, lipides, fibres) calculées pour chaque recette.

## Utilisation

Aucune installation : ouvrez `index.html` dans un navigateur (ordinateur ou téléphone).
Pour y accéder partout, activez GitHub Pages sur le dépôt (Settings → Pages → branche `main`, dossier `/`).

## Fonctionnalités (V1)

- **196 recettes** réparties en 13 catégories (entrées, soupes, apéro, viandes, volailles, poissons, végétarien, pâtes & riz, tartes & pizzas, burgers, accompagnements, petit-déjeuner, desserts) et plus de 35 cuisines.
- **Portions ajustables** : toutes les quantités sont recalculées et arrondies intelligemment (fractions ½ ¼, passage en kg / L, cuillères, gousses, tranches…).
- **Valeurs nutritionnelles** par portion et au total : kcal, protéines, glucides, lipides, fibres, et répartition des calories.
- **Recherche** par nom ou par ingrédient (« poulet coco », « feta »…).
- **Filtres** : catégorie, cuisine, temps total, végétarien, vegan, sans gluten, riche en protéines, léger (< 400 kcal). **Tri** par calories, protéines, temps.
- **Favoris** et portions choisies mémorisés sur l'appareil.
- **En cuisine** : on coche les ingrédients et les étapes réalisées. Le « mode cuisine » empêche l'écran de se mettre en veille.
- Thème clair / sombre automatique, adapté au mobile.

## Comment sont calculées les macros ?

Chaque ingrédient possède ses valeurs pour 100 g (d'après les tables **CIQUAL** (Anses) et **USDA**, arrondies) dans `js/ingredients.js`.
Les recettes listent leurs ingrédients en grammes, ml, pièces ou cuillères. Le moteur (`js/moteur.js`) convertit tout en grammes (poids moyen à la pièce, densité) et additionne.
Les valeurs sont donc cohérentes quelle que soit la quantité, mais restent **indicatives** : ingrédients crus, hors ingrédients « selon goût », et l'huile de friture est estimée à la part absorbée.

## Structure

```
index.html                 page unique
css/style.css              styles (thème clair/sombre)
js/ingredients.js          base nutritionnelle (~260 ingrédients)
js/categories.js           catégories
js/moteur.js               conversions, calculs nutritionnels, arrondis
js/recettes/*.js           les recettes
js/app.js                  interface (liste, filtres, fiche recette)
tools/valider.js           vérification des données
```

## Ajouter une recette

Ajoutez un objet dans un fichier de `js/recettes/` :

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
  etapes: ['Étape 1…', 'Étape 2…'],
  astuce: 'Facultatif.'
}
```

Unités : `g`, `kg`, `ml`, `cl`, `l`, `pc` (pièce), `cs` (c. à soupe), `cc` (c. à café), `pincee`, `qs` (selon goût).
Si un ingrédient manque, ajoutez-le dans `js/ingredients.js`. Lancez ensuite la vérification :

```
node tools/valider.js            # erreurs et valeurs suspectes
node tools/valider.js --tableau  # tableau kcal / macros de toutes les recettes
```
