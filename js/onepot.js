/* One pot : une seule casserole, poêle, plaque ou plat pour tout le repas.
   id: [ustensile, style] — ustensile : casserole, poele, plaque, plat ; style : healthy ou gourmand. */
(function () {
  'use strict';

  var USTENSILES = [
    { id: 'casserole', nom: 'Une casserole ou une cocotte', emoji: '🍲' },
    { id: 'poele', nom: 'Une poêle, une sauteuse ou un wok', emoji: '🍳' },
    { id: 'plaque', nom: 'Une plaque au four', emoji: '🔥' },
    { id: 'plat', nom: 'Un plat ou une cocotte au four', emoji: '🥘' }
  ];

  var RECETTES = {
    // ---------- Recettes tendance (js/recettes/one-pot.js) ----------
    'orzo-boursin-chorizo': ['poele', 'gourmand'],
    'french-onion-pasta': ['casserole', 'gourmand'],
    'gnocchis-camembert': ['poele', 'gourmand'],
    'orzo-marry-me-poulet': ['poele', 'gourmand'],
    'lasagna-soup': ['casserole', 'gourmand'],
    'cheeseburger-pasta': ['casserole', 'gourmand'],
    'riz-poulet-chorizo-four': ['plat', 'gourmand'],
    'gnocchis-plaque-saucisse': ['plaque', 'gourmand'],
    'risotto-four-petits-pois': ['plat', 'gourmand'],
    'poulet-oignon-gratine': ['poele', 'gourmand'],
    'soupe-poulet-pot-pie': ['casserole', 'gourmand'],
    'pates-vodka': ['casserole', 'gourmand'],
    'poulet-cowboy-plaque': ['plaque', 'gourmand'],
    'gnocchis-toscane': ['poele', 'gourmand'],
    'nouilles-boeuf-brocoli': ['poele', 'gourmand'],
    'orzo-lentilles-mediterranee': ['casserole', 'healthy'],
    'orzo-poulet-citron': ['casserole', 'healthy'],
    'saumon-plaque-legumes': ['plaque', 'healthy'],
    'poulet-harissa-plaque': ['plaque', 'healthy'],
    'shakshuka-verte': ['poele', 'healthy'],
    'pasta-e-ceci': ['casserole', 'healthy'],
    'riz-dinde-mexicain': ['casserole', 'healthy'],
    'haricots-blancs-toscane': ['poele', 'healthy'],
    'tofu-plaque-cacahuete': ['plaque', 'healthy'],
    'curry-cabillaud-coco': ['poele', 'healthy'],
    'quinoa-poulet-casserole': ['casserole', 'healthy'],
    'crevettes-haricots-blancs': ['poele', 'healthy'],
    'boulgour-poulet-pilaf': ['casserole', 'healthy'],
    'oeufs-plaque-legumes': ['plaque', 'healthy'],
    'poulet-grec-riz-citron': ['casserole', 'healthy'],

    // ---------- Recettes du catalogue qui se font déjà en un seul récipient ----------
    'one-pot-pasta': ['casserole', 'healthy'],
    'riz-pilaf-poulet': ['casserole', 'healthy'],
    'dahl-lentilles': ['casserole', 'healthy'],
    'chili-sin-carne': ['casserole', 'healthy'],
    'chili-dinde': ['casserole', 'healthy'],
    'curry-pois-chiches': ['casserole', 'healthy'],
    'poulet-basquaise': ['casserole', 'healthy'],
    'tajine-poulet-citron': ['casserole', 'healthy'],
    'poulet-effiloche': ['casserole', 'healthy'],
    'mujaddara': ['casserole', 'healthy'],
    'soupe-lentilles-corail': ['casserole', 'healthy'],
    'minestrone': ['casserole', 'healthy'],
    'harira': ['casserole', 'healthy'],
    'soupe-legumes': ['casserole', 'healthy'],
    'soupe-lentilles-chou': ['casserole', 'healthy'],
    'soupe-butternut-lentilles': ['casserole', 'healthy'],
    'shakshuka': ['poele', 'healthy'],
    'pois-chiches-marry-me': ['poele', 'healthy'],
    'frittata': ['poele', 'healthy'],
    'riz-saute-kimchi': ['poele', 'healthy'],
    'tofu-brocoli': ['poele', 'healthy'],
    'poulet-yaourt-curcuma': ['plaque', 'healthy'],
    'dorade-four': ['plat', 'healthy'],
    'chili-mac': ['casserole', 'gourmand'],
    'jambalaya': ['casserole', 'gourmand'],
    'chili-con-carne': ['casserole', 'gourmand'],
    'poulet-curry-coco': ['casserole', 'gourmand'],
    'risotto-champignons': ['casserole', 'gourmand'],
    'risotto-courge': ['casserole', 'gourmand'],
    'saucisses-lentilles': ['casserole', 'gourmand'],
    'curry-vert-poulet': ['casserole', 'gourmand'],
    'porc-curry-coco': ['casserole', 'gourmand'],
    'carbonnade-flamande': ['casserole', 'gourmand'],
    'goulash': ['casserole', 'gourmand'],
    'paella': ['poele', 'gourmand'],
    'poulet-creme-champignons': ['poele', 'gourmand'],
    'tortilla-espagnole': ['poele', 'gourmand'],
    'pates-feta-four': ['plat', 'gourmand'],
    'boeuf-barbacoa': ['plat', 'gourmand'],
    'poulet-40-gousses': ['plat', 'gourmand'],
    'poulet-roti': ['plat', 'gourmand']
  };

  var CONSEILS = [
    ['💧', 'Le bon volume de liquide', 'Pour des pâtes cuites dans la sauce, comptez environ 2,5 fois leur poids en liquide (350 g de pâtes pour 900 ml). Gardez un peu de bouillon chaud pour ajuster.'],
    ['🥄', 'Remuer souvent', 'Sans grande eau de cuisson, l\'amidon reste dans la casserole : remuer souvent évite que ça attache et rend la sauce crémeuse.'],
    ['🥬', 'Les légumes fragiles à la fin', 'Épinards, petits pois, herbes et fromage s\'ajoutent dans les dernières minutes, hors du feu pour les fromages.'],
    ['🔥', 'Plaque au four : une seule couche', 'Four bien chaud (210–220 °C) et ingrédients bien étalés : serrés, ils cuisent à la vapeur au lieu de dorer.'],
    ['⏱', 'Tailles régulières', 'Coupez tout à la même taille pour que tout soit cuit en même temps ; les légumes durs (pommes de terre, patates douces) un peu plus petits.']
  ];

  var O = window.ONE_POT = { USTENSILES: USTENSILES, RECETTES: RECETTES, CONSEILS: CONSEILS };
  O.infos = function (id) {
    var x = RECETTES[id];
    if (!x) return null;
    var u = USTENSILES.find(function (u) { return u.id === x[0]; });
    return { ustensile: u, style: x[1] };
  };
})();
