/* Batch cooking : conservation des plats et sessions de cuisine clés en main.
   Durées de conservation prudentes, d'après les repères de l'Anses et de l'USDA
   (restes cuits : 3 à 4 jours au réfrigérateur à 4 °C au plus, poisson et riz plutôt 2 à 3 jours ;
   congélation à −18 °C : 2 à 4 mois pour garder le goût et la texture). */
(function () {
  'use strict';

  /* Façons de réchauffer (ou de servir), réutilisées par toutes les recettes. */
  var MODES = {
    mijote: 'À la casserole, à couvert et à feu doux avec un trait d\'eau, 8 à 10 min ; ou 3 à 4 min au micro-ondes en remuant à mi-temps.',
    soupe: 'À la casserole jusqu\'à frémissement, ou 3 min au micro-ondes. Rallongez d\'un peu d\'eau ou de bouillon si elle a épaissi.',
    four: 'Au four à 170 °C, couvert d\'aluminium : 15 à 20 min pour une part, 35 à 45 min pour un plat entier décongelé. Ou 3 min au micro-ondes.',
    micro: '2 à 3 min au micro-ondes, couvercle entrouvert, en remuant à mi-temps.',
    pates: 'Au micro-ondes ou à la poêle avec 1 à 2 c. à soupe d\'eau pour détendre la sauce.',
    sauce: 'À feu doux à la casserole, directement surgelée ou décongelée la veille au réfrigérateur. Une base pour plusieurs repas.',
    poele: 'À la poêle, 3 à 4 min avec un filet d\'huile, pour retrouver le croustillant.',
    croustillant: 'Au four à 200 °C ou à l\'air fryer, 8 à 12 min, directement surgelé. Évitez le micro-ondes, qui ramollit.',
    grillepain: 'Au grille-pain ou 20 à 30 s au micro-ondes, directement surgelé.',
    burrito: 'Retirez l\'aluminium et entourez d\'un essuie-tout humide : 2 à 3 min au micro-ondes en retournant à mi-temps, puis 2 min à la poêle pour dorer.',
    muffin: 'Froid ou 20 s au micro-ondes. Surgelé : une nuit au réfrigérateur, ou 40 s au micro-ondes.',
    gateau: 'Se garde emballé dans un film. Tranches surgelées : 30 min à température ambiante, ou un passage au grille-pain.',
    boite: 'En boîte hermétique, au sec et à température ambiante.',
    froid: 'Se mange froid : sortez-le du réfrigérateur 10 min avant.',
    base: 'Décongelez une nuit au réfrigérateur avant de l\'utiliser.'
  };

  /* id : [jours au réfrigérateur, mois au congélateur (0 = déconseillé), mode, conseil facultatif]
     Pour le mode « boite », le premier nombre est la durée à température ambiante. */
  var CONSERVATION = {
    // ---------- Recettes pensées pour le batch cooking ----------
    'poulet-effiloche': [4, 3, 'micro', 'Congelez-le à plat en sachets de 150 g avec un peu de jus : il se décongèle en quelques minutes.'],
    'boulettes-dinde-epinards': [4, 3, 'micro', 'Congelez-les d\'abord à plat sur une plaque, puis en sac : elles ne collent pas entre elles.'],
    'bowls-quinoa-poulet': [4, 0, 'micro', 'Gardez la sauce yaourt à part et ajoutez-la après réchauffage.'],
    'soupe-butternut-lentilles': [4, 3, 'soupe'],
    'curry-lentilles-patate-douce': [4, 3, 'mijote', 'Congelez le curry sans le riz ; le riz se garde 3 jours au frais.'],
    'bolognaise-legumes-caches': [4, 4, 'sauce', 'Congelez à plat en sacs de 2 à 4 portions : ils s\'empilent et dégèlent vite.'],
    'burritos-petit-dej': [3, 3, 'burrito', 'Laissez refroidir la garniture avant de rouler, sinon la tortilla détrempe.'],
    'saumon-riz-brocoli': [2, 0, 'micro', 'Le poisson se mange dans les 2 jours : prévoyez ces boîtes en début de semaine.'],
    'dinde-patate-douce-meal-prep': [4, 2, 'micro'],
    'burritos-poulet': [3, 3, 'burrito', 'Emballez chaque burrito dans du film puis de l\'aluminium et notez la date.'],
    'gratin-proteine-poulet-brocoli': [4, 2, 'four'],
    'muffins-sales-courgette': [4, 3, 'muffin'],
    'barres-proteinees': [7, 3, 'froid', 'Séparez les barres avec du papier cuisson avant de les congeler.'],
    'curry-vert-poulet': [4, 3, 'mijote'],
    'lasagnes-courgettes': [3, 2, 'four', 'Les courgettes rendent de l\'eau à la décongélation : ne sautez pas l\'étape où on les fait dégorger au four.'],
    'parmentier-patate-douce-lentilles': [4, 3, 'four'],
    'quiche-sans-pate': [4, 2, 'micro', 'Se mange aussi froide, en parts, dans une boîte à lunch.'],
    'bouillon-poulet': [4, 4, 'soupe', 'Congelez-en une partie en bacs à glaçons : des cubes de bouillon maison pour les sauces et les risottos.'],
    'taboule-quinoa': [4, 0, 'froid', 'Ajoutez les herbes fraîches le jour même si vous le préparez plus de 2 jours à l\'avance.'],
    'gratin-macaronis-jambon': [3, 2, 'four', 'Pâtes cuites 2 min de moins : elles finissent de cuire au réchauffage sans devenir molles.'],
    'lasagnes-poulet-champignons': [3, 3, 'four', 'Coupez les parts avant de congeler : vous sortirez juste ce qu\'il faut.'],
    'cannellonis-viande': [3, 3, 'four'],
    'boeuf-barbacoa': [4, 3, 'mijote', 'Congelez la viande avec son jus pour qu\'elle reste moelleuse.'],
    'tourte-poulet': [3, 3, 'four', 'Se congèle aussi crue : cuisez-la directement surgelée, 1 h à 180 °C.'],
    'boulettes-suedoises': [4, 3, 'mijote'],
    'chili-mac': [4, 2, 'pates'],
    'baked-ziti': [4, 3, 'four'],
    'blanquette-poulet': [3, 3, 'mijote', 'Réchauffez sans faire bouillir pour que la sauce ne tranche pas.'],
    'gratin-poireaux-lardons': [3, 2, 'four'],
    'muffins-chocolat': [4, 3, 'muffin'],
    'ragu-boeuf': [4, 3, 'sauce', 'Encore meilleur le lendemain. Une portion de 150 g suffit pour 100 g de pâtes.'],
    'porc-curry-coco': [4, 3, 'mijote'],
    'lasagnes-saumon-epinards': [2, 2, 'four'],

    // ---------- Soupes ----------
    'veloute-butternut': [4, 3, 'soupe'],
    'soupe-oignon': [3, 3, 'soupe', 'Congelez la soupe seule ; pain et fromage se gratinent au moment de servir.'],
    'minestrone': [4, 3, 'soupe', 'Congelez-la sans les pâtes, à cuire directement dans la soupe au réchauffage.'],
    'soupe-lentilles-corail': [4, 3, 'soupe'],
    'veloute-poireaux': [3, 2, 'soupe', 'La pomme de terre devient un peu granuleuse après congélation : un coup de mixeur au réchauffage suffit.'],
    'veloute-champignons': [3, 3, 'soupe'],
    'veloute-brocoli': [3, 3, 'soupe'],
    'veloute-carotte-coco': [4, 3, 'soupe'],
    'harira': [4, 3, 'soupe'],
    'soupe-tomate': [4, 3, 'soupe'],
    'veloute-petits-pois': [3, 3, 'soupe'],
    'creme-du-barry': [3, 3, 'soupe'],
    'soupe-legumes': [4, 3, 'soupe'],
    'soupe-pistou': [3, 3, 'soupe', 'Congelez-la sans le pistou, à ajouter au moment de servir.'],
    'garbure': [4, 3, 'soupe'],
    'bortsch': [4, 3, 'soupe'],
    'veloute-patate-douce': [4, 3, 'soupe'],
    'soupe-pois-casses': [4, 3, 'soupe', 'Elle épaissit beaucoup en refroidissant : rallongez-la d\'eau au réchauffage.'],
    'veloute-courgettes': [3, 2, 'soupe'],
    'veloute-chataignes': [3, 3, 'soupe'],
    'veloute-panais': [3, 3, 'soupe'],
    'caldo-verde': [3, 2, 'soupe'],
    'soupe-lentilles-chou': [4, 3, 'soupe'],
    'gaspacho': [3, 0, 'froid'],

    // ---------- Viandes ----------
    'boeuf-bourguignon': [4, 3, 'mijote', 'Encore meilleur réchauffé : préparez-le la veille.'],
    'blanquette-veau': [3, 3, 'mijote', 'Réchauffez sans faire bouillir pour que la sauce ne tranche pas.'],
    'pot-au-feu': [4, 3, 'mijote', 'Congelez le bouillon à part : il fera une soupe ou un risotto.'],
    'hachis-parmentier': [3, 3, 'four'],
    'chili-con-carne': [4, 4, 'mijote', 'Un classique du batch cooking : il se congèle parfaitement, sans le riz.'],
    'polpette': [4, 3, 'mijote'],
    'carbonnade-flamande': [4, 3, 'mijote'],
    'porc-caramel': [4, 3, 'mijote'],
    'saucisses-lentilles': [4, 3, 'mijote'],
    'navarin-agneau': [4, 3, 'mijote'],
    'tajine-agneau-pruneaux': [4, 3, 'mijote'],
    'couscous-royal': [3, 3, 'mijote', 'Congelez bouillon, viandes et légumes ; la semoule se prépare en 5 min au dernier moment.'],
    'moussaka': [3, 3, 'four'],
    'osso-buco': [4, 3, 'mijote'],
    'endives-jambon': [3, 2, 'four'],
    'cassoulet': [4, 3, 'four', 'Ajoutez un peu de bouillon avant de le repasser au four.'],
    'choucroute': [4, 3, 'mijote'],
    'tomates-farcies': [3, 2, 'four'],
    'boeuf-mironton': [3, 3, 'mijote'],
    'daube-provencale': [4, 3, 'mijote'],
    'goulash': [4, 3, 'mijote'],
    'feijoada': [4, 3, 'mijote'],
    'irish-stew': [3, 2, 'mijote', 'Les pommes de terre supportent moyennement la congélation : mangez-le plutôt dans la semaine.'],
    'rogan-josh': [4, 3, 'mijote'],
    'souris-agneau': [4, 3, 'mijote'],
    'potee-auvergnate': [4, 3, 'mijote'],
    'baeckeoffe': [3, 2, 'four'],
    'pain-de-viande': [4, 3, 'four', 'Froid, il se tranche pour des sandwichs.'],
    'boeuf-carottes': [4, 3, 'mijote'],
    'rendang': [4, 3, 'mijote', 'Comme tous les currys secs, il gagne en goût après une nuit.'],
    'curry-massaman': [4, 3, 'mijote'],
    'rougail-saucisse': [4, 3, 'mijote'],
    'colombo-porc': [4, 3, 'mijote'],
    'chou-farci': [3, 3, 'four'],
    'veau-marengo': [4, 3, 'mijote'],
    'pulled-pork': [4, 3, 'mijote', 'Congelez la viande effilochée à plat, avec un peu de jus de cuisson.'],

    // ---------- Volailles ----------
    'poulet-basquaise': [4, 3, 'mijote'],
    'poulet-curry-coco': [4, 3, 'mijote'],
    'poulet-tikka-masala': [4, 3, 'mijote'],
    'tajine-poulet-citron': [4, 3, 'mijote'],
    'poulet-creme-champignons': [3, 2, 'mijote'],
    'poulet-yassa': [4, 3, 'mijote'],
    'nuggets-maison': [3, 3, 'croustillant', 'Congelez-les panés et crus, à plat sur une plaque, puis en sac. Comptez 5 min de cuisson en plus.'],
    'coq-au-vin': [4, 3, 'mijote'],
    'poulet-korma': [4, 3, 'mijote'],
    'poulet-chasseur': [4, 3, 'mijote'],
    'mafe-poulet': [4, 3, 'mijote'],
    'poulet-paprikash': [3, 3, 'mijote'],
    'enchiladas-poulet': [3, 3, 'four'],
    'parmentier-canard': [3, 3, 'four'],
    'curry-dinde-lentilles': [4, 3, 'mijote'],
    'waterzooi': [3, 2, 'mijote'],
    'poulet-vallee-auge': [3, 2, 'mijote'],
    'lapin-moutarde': [3, 3, 'mijote'],
    'chili-dinde': [4, 4, 'mijote'],
    'poulet-yaourt-curcuma': [4, 3, 'micro', 'Le poulet mariné cru se congèle aussi dans sa marinade : il marine pendant la décongélation.'],

    // ---------- Végétarien ----------
    'dahl-lentilles': [4, 3, 'mijote'],
    'chili-sin-carne': [4, 4, 'mijote'],
    'curry-pois-chiches': [4, 3, 'mijote'],
    'ratatouille': [4, 4, 'mijote', 'Se mange aussi froide, en salade ou sur une tartine.'],
    'falafels': [3, 3, 'croustillant', 'Congelez les boulettes crues : elles se cuisent directement surgelées.'],
    'gratin-courgettes': [3, 0, 'four'],
    'aubergines-parmigiana': [4, 3, 'four'],
    'lasagnes-epinards-ricotta': [3, 3, 'four'],
    'curry-vert-legumes': [3, 2, 'mijote'],
    'poivrons-farcis-vege': [3, 2, 'four'],
    'palak-paneer': [3, 2, 'mijote'],
    'aloo-gobi': [3, 2, 'mijote'],
    'mujaddara': [4, 2, 'micro'],
    'patates-douces-farcies': [3, 2, 'four'],
    'caponata': [5, 3, 'froid'],
    'couscous-legumes': [4, 3, 'mijote', 'La semoule se prépare au dernier moment.'],
    'frittata': [3, 0, 'froid'],
    'bolognaise-lentilles': [4, 3, 'sauce'],
    'spanakopita': [3, 3, 'four', 'Se congèle crue : cuisez-la surgelée en ajoutant 15 min.'],
    'pois-chiches-marry-me': [4, 3, 'mijote'],
    'tofu-croustillant': [4, 0, 'croustillant'],

    // ---------- Pâtes, riz, tartes ----------
    'spaghetti-bolognaise': [4, 3, 'sauce', 'Congelez la sauce seule et faites cuire les pâtes au moment.'],
    'lasagnes-bolognaise': [4, 3, 'four', 'Coupez les parts avant de congeler.'],
    'mac-and-cheese': [3, 2, 'four', 'Ajoutez un trait de lait avant de réchauffer.'],
    'biryani-poulet': [3, 2, 'micro', 'Refroidissez le riz en moins d\'une heure avant de le mettre au frais.'],
    'jambalaya': [3, 2, 'micro', 'Refroidissez le riz en moins d\'une heure avant de le mettre au frais.'],
    'riz-pilaf-poulet': [3, 2, 'micro'],
    'riz-jollof': [3, 2, 'micro'],
    'pates-poulet-brocoli': [3, 0, 'pates'],
    'pates-lentilles-bolognaise': [3, 2, 'pates'],
    'quiche-lorraine': [3, 2, 'four'],
    'quiche-poireaux-chevre': [3, 2, 'four'],
    'quiche-saumon-epinards': [2, 2, 'four'],
    'tourte-lorraine': [3, 2, 'four'],
    'tarte-oignon': [3, 2, 'four'],
    'pate-pizza-maison': [2, 3, 'base', 'Congelez-la en pâtons huilés, un par pizza.'],
    'pate-brisee-maison': [3, 3, 'base'],
    'pate-sablee-maison': [3, 3, 'base'],

    // ---------- Sauces ----------
    'sauce-tomate-maison': [5, 4, 'sauce', 'La base à avoir toujours d\'avance : pâtes, pizzas, shakshuka, boulettes…'],
    'pesto-genovese': [5, 4, 'sauce', 'Congelez-le en bacs à glaçons, couvert d\'un filet d\'huile.'],
    'bechamel': [3, 0, 'sauce'],
    'sauce-barbecue': [10, 3, 'sauce'],

    // ---------- Petit-déjeuner et goûters ----------
    'pancakes': [3, 2, 'grillepain', 'Congelez-les séparés par du papier cuisson.'],
    'pancakes-proteines': [3, 2, 'grillepain', 'Congelez-les séparés par du papier cuisson.'],
    'crepes': [3, 2, 'poele', 'Empilez-les avec du papier cuisson entre chaque crêpe.'],
    'gaufres': [3, 2, 'grillepain'],
    'overnight-oats': [4, 0, 'froid', 'Préparez 4 bocaux d\'un coup ; ajoutez les fruits fragiles le matin même.'],
    'bircher-muesli': [3, 0, 'froid'],
    'chia-pudding': [4, 0, 'froid'],
    'pudding-chia-chocolat': [4, 0, 'froid'],
    'granola': [21, 0, 'boite'],
    'barres-cereales': [7, 3, 'boite'],
    'energy-balls': [7, 3, 'froid'],
    'baked-oats': [4, 2, 'micro'],
    'egg-muffins': [4, 2, 'micro', 'Réchauffez-les 30 à 40 s au micro-ondes, ou emportez-les froids.'],
    'muffins-myrtilles': [3, 3, 'muffin'],
    'muffins-proteines': [4, 3, 'muffin'],
    'banana-bread': [4, 3, 'gateau', 'Congelez-le en tranches : on n\'en sort qu\'une à la fois.'],
    'scones': [2, 3, 'gateau'],
    'cake-sale': [4, 3, 'froid', 'Congelez-le en tranches pour les apéros et les boîtes à lunch.'],

    // ---------- Desserts ----------
    'cookies': [7, 3, 'boite', 'Congelez plutôt la pâte en boules : elles se cuisent surgelées en ajoutant 2 min.'],
    'brownies': [5, 3, 'boite'],
    'gateau-yaourt': [4, 3, 'gateau'],
    'quatre-quarts': [5, 3, 'gateau'],
    'marbre': [5, 3, 'gateau'],
    'madeleines': [5, 3, 'boite'],
    'compote-pommes': [5, 6, 'froid', 'Congelez-la en petits pots ou en bacs à glaçons pour les enfants.'],
    'riz-au-lait': [3, 0, 'froid'],
    'mousse-chocolat-cottage': [3, 0, 'froid'],
    'gelee-yaourt': [3, 0, 'froid'],

    // ---------- Entrées, accompagnements, apéro ----------
    'houmous': [4, 2, 'froid'],
    'houmous-edamame': [4, 2, 'froid'],
    'tzatziki': [3, 0, 'froid'],
    'salade-lentilles': [4, 0, 'froid'],
    'salade-quinoa': [4, 0, 'froid'],
    'salade-pates-pesto': [3, 0, 'froid'],
    'salade-pois-chiches': [4, 0, 'froid'],
    'dense-bean-salad': [4, 0, 'froid', 'La salade de meal prep par excellence : elle s\'améliore en marinant.'],
    'carottes-rapees': [3, 0, 'froid'],
    'riz-pilaf': [3, 2, 'micro', 'Refroidissez le riz en moins d\'une heure avant de le mettre au frais.'],
    'legumes-rotis': [4, 0, 'micro'],
    'puree-maison': [3, 2, 'micro'],
    'puree-patate-douce': [4, 3, 'micro'],
    'puree-chou-fleur': [3, 2, 'micro'],
    'riz-chou-fleur': [3, 2, 'poele'],
    'flageolets': [4, 3, 'mijote'],
    'chou-rouge-braise': [4, 3, 'mijote'],
    'samoussas': [2, 3, 'croustillant', 'Congelez-les crus et cuisez-les directement surgelés.'],
    'nems': [2, 3, 'croustillant', 'Congelez-les crus et cuisez-les directement surgelés.'],
    'empanadas': [3, 3, 'four', 'Congelez-les crues et cuisez-les surgelées en ajoutant 10 min.'],
    'gyozas': [1, 3, 'poele', 'Congelez-les crus sur une plaque farinée, puis en sac ; ils se cuisent surgelés.'],
    'friands-saucisse': [2, 3, 'four'],
    'croquetas': [2, 3, 'croustillant'],
    'pois-chiches-croustillants': [5, 0, 'boite'],
    'burger-vege': [3, 3, 'poele', 'Congelez les galettes crues, séparées par du papier cuisson.'],
    'burrito-boeuf': [3, 3, 'burrito'],
    'curry-crevettes': [2, 2, 'mijote'],
    'tajine-poisson': [2, 2, 'mijote'],
    'brandade-morue': [2, 3, 'four'],
    'salmon-rice-bowl': [2, 0, 'micro']
  };

  /* Sessions clés en main. recettes : [id, portions, repas imposé facultatif].
     Le plan suit l'ordre de la cuisine : ce qui cuit longtemps d'abord, le four utilisé en continu. */
  var SESSIONS = [
    {
      id: 'semaine-healthy', nom: 'Ma semaine healthy', emoji: '🥗', duree: 150,
      tags: ['healthy', 'proteine'],
      desc: 'Bowls complets, soupe, boulettes de dinde et muffins aux œufs : déjeuners, dîners et petits-déjeuners équilibrés pour 5 jours.',
      recettes: [['bowls-quinoa-poulet', 5], ['soupe-butternut-lentilles', 8], ['boulettes-dinde-epinards', 6], ['egg-muffins', 6, 'petitdej'], ['dense-bean-salad', 4]],
      plan: [
        'Préchauffez le four à 210 °C. Coupez les légumes des bowls, mélangez-les avec les pois chiches, l\'huile et la moitié des épices, puis enfournez pour 30 min.',
        'Pendant ce temps, lancez la soupe : faites revenir les oignons et le gingembre avec le curry, ajoutez la courge, les carottes, les lentilles et le bouillon, et laissez cuire 25 min.',
        'Faites cuire le quinoa 12 min, puis étalez-le sur un plat pour qu\'il refroidisse vite.',
        'Préparez les boulettes de dinde (épinards bien pressés, dinde, flocons, œuf, parmesan) et formez-les sur une plaque.',
        'Sortez les légumes rôtis, baissez le four à 200 °C et enfournez les boulettes pour 20 min.',
        'Faites cuire le poulet des bowls 6 min par face, puis tranchez-le.',
        'Mixez la soupe avec le lait de coco et posez la casserole dans un évier d\'eau froide pour la refroidir.',
        'Baissez le four à 180 °C. Garnissez les moules des muffins aux œufs, versez les œufs battus et enfournez 20 min.',
        'Pendant la cuisson, coupez les légumes de la dense bean salad en petits dés et mélangez-les avec les légumineuses, la feta et la vinaigrette.',
        'Montez les 5 boîtes de bowls (sauce à part), répartissez la soupe en pots et les boulettes en boîtes, puis étiquetez.'
      ],
      astuces: ['Mangez les bowls et la salade dans les 4 jours ; congelez la moitié de la soupe et des boulettes pour la semaine suivante.', 'Les muffins aux œufs s\'emportent froids pour un petit-déjeuner ou une collation protéinée.']
    },
    {
      id: 'famille-gourmande', nom: 'Gourmand en famille', emoji: '🧀', duree: 180,
      tags: ['gourmand', 'congelation'],
      desc: 'Lasagnes, chili mac, gratin de macaronis, boulettes suédoises et muffins au chocolat : des plats réconfortants qui plaisent à tous.',
      recettes: [['lasagnes-poulet-champignons', 8], ['chili-mac', 6], ['gratin-macaronis-jambon', 6], ['boulettes-suedoises', 6], ['muffins-chocolat', 12, 'collation']],
      plan: [
        'Préchauffez le four à 180 °C. Mettez une grande casserole d\'eau à bouillir pour les macaronis.',
        'Faites dorer le poulet des lasagnes, puis les champignons, l\'oignon et l\'ail.',
        'Préparez les deux béchamels à la suite dans la même casserole (lasagnes, puis gratin) : roux beurre-farine, lait, muscade.',
        'Faites cuire les macaronis 2 min de moins que le temps indiqué et égouttez-les.',
        'Montez les lasagnes et enfournez-les pour 45 min.',
        'Préparez la pâte des muffins, remplissez 12 moules et glissez-les sous les lasagnes pour 20 min.',
        'Chili mac : faites dorer la viande avec l\'oignon, l\'ail et les épices, ajoutez les tomates, le bouillon, les haricots et les pâtes crues, et laissez cuire 15 min à couvert en remuant souvent. Incorporez le cheddar hors du feu.',
        'Boulettes suédoises : formez-les, faites-les dorer au beurre, puis préparez la sauce crème et remettez-les dedans.',
        'Montez le gratin de macaronis. Gratinez-le 20 min à 200 °C après les lasagnes, ou congelez-le cru.',
        'Laissez tout refroidir (moins de 2 h à température ambiante), coupez les parts et répartissez entre réfrigérateur et congélateur.'
      ],
      astuces: ['Un gratin congelé cru se cuit sans décongélation : 1 h à 180 °C sous aluminium, puis 15 min à découvert.', 'Les muffins se congèlent un par un : un goûter tout prêt à glisser dans le cartable le matin.']
    },
    {
      id: 'vegetarien', nom: '100 % végétarien', emoji: '🌱', duree: 150,
      tags: ['vege', 'healthy', 'budget'],
      desc: 'Curry, chili, parmentier, quiche sans pâte et houmous : riches en fibres et en protéines végétales, et très économiques.',
      recettes: [['curry-lentilles-patate-douce', 6], ['chili-sin-carne', 4], ['parmentier-patate-douce-lentilles', 6], ['quiche-sans-pate', 6], ['houmous', 6, 'collation']],
      plan: [
        'Préchauffez le four à 180 °C. Faites revenir rapidement la courgette, le poivron et les épinards de la quiche, fouettez l\'appareil, montez la quiche et enfournez 40 min.',
        'Curry : faites revenir les oignons, l\'ail et le gingembre avec les épices, ajoutez les lentilles, la patate douce, les tomates, le lait de coco et l\'eau, et laissez mijoter 30 min.',
        'Chili : faites revenir l\'oignon, l\'ail et le poivron 5 min, ajoutez les épices puis les tomates, et laissez mijoter 15 min.',
        'Parmentier : faites revenir l\'oignon, l\'ail, les carottes et les champignons, ajoutez les lentilles, le concentré, le thym et le bouillon, et cuisez 25 min. En parallèle, faites cuire les patates douces à l\'eau.',
        'Ajoutez les haricots et le maïs au chili et poursuivez 15 min.',
        'Lancez le riz complet pour le curry et le chili ; étalez-le dès qu\'il est cuit pour le refroidir vite.',
        'Écrasez les patates douces avec le lait et le beurre, montez le parmentier, montez le four à 200 °C après la quiche et gratinez 20 min.',
        'Pendant ce temps, mixez le houmous.',
        'Ajoutez les épinards au curry hors du feu, laissez refroidir et répartissez en boîtes.'
      ],
      astuces: ['Curry et chili se congèlent sans le riz pendant 3 à 4 mois.', 'Le houmous accompagne les crudités des collations toute la semaine.']
    },
    {
      id: 'proteines', nom: 'Spécial protéines', emoji: '💪', duree: 140,
      tags: ['proteine', 'healthy'],
      desc: 'Pour la prise de muscle ou la sèche : poulet effiloché à décliner, gratin protéiné, chili de dinde, boîtes dinde-patate douce et barres maison.',
      recettes: [['poulet-effiloche', 8], ['gratin-proteine-poulet-brocoli', 6], ['chili-dinde', 5], ['dinde-patate-douce-meal-prep', 4], ['barres-proteinees', 10, 'collation']],
      plan: [
        'Commencez par les barres protéinées : mélangez, tassez dans le moule, nappez de chocolat et réfrigérez 2 h.',
        'Préchauffez le four à 210 °C et rôtissez les patates douces en cubes 30 min.',
        'Poulet effiloché : faites revenir l\'oignon, l\'ail et les épices 2 min, ajoutez le poulet et le bouillon, et laissez frémir 25 min à couvert.',
        'Chili de dinde : faites revenir l\'oignon, l\'ail et les poivrons, ajoutez la dinde et les épices, puis les tomates et les haricots, et laissez mijoter 25 min.',
        'Faites cuire les pâtes du gratin en ajoutant le brocoli les 4 dernières minutes. Dans une autre casserole, faites cuire les haricots verts 7 min.',
        'Faites dorer les escalopes de dinde 4 min par face, tranchez-les et répartissez-les dans 4 boîtes avec les patates douces et les haricots verts.',
        'Gratin : faites dorer le poulet en dés, mélangez avec le fromage blanc, les œufs, la moutarde et le fromage, puis gratinez 20 min à 200 °C.',
        'Effilochez le poulet dans la cocotte, laissez-le absorber le jus 5 min, ajoutez le citron vert et portionnez en sachets de 150 g.',
        'Coupez les barres en 10 et emballez-les une par une.'
      ],
      astuces: ['Le poulet effiloché se décline toute la semaine : wraps, salades, bowls, tacos, pâtes.', 'Comptez environ 35 à 45 g de protéines par boîte repas.']
    },
    {
      id: 'petit-budget', nom: 'Petit budget', emoji: '💶', duree: 160,
      tags: ['budget', 'gourmand'],
      desc: 'Légumineuses, viande hachée, légumes de saison : cinq recettes généreuses à moins de 2 € la portion.',
      recettes: [['chili-con-carne', 6], ['hachis-parmentier', 6], ['saucisses-lentilles', 4], ['soupe-legumes', 6], ['banana-bread', 10, 'collation']],
      plan: [
        'Préchauffez le four à 175 °C. Préparez le banana bread avec les bananes bien mûres et enfournez-le 55 min.',
        'Chili : faites revenir l\'oignon, l\'ail et le poivron, faites dorer la viande, ajoutez les épices, les tomates, le concentré et un verre d\'eau, et laissez mijoter 40 min à couvert.',
        'Faites cuire les pommes de terre du hachis 25 min à l\'eau salée. Pendant ce temps, épluchez et coupez les légumes de la soupe.',
        'Soupe : faites suer les légumes 5 min dans le beurre, couvrez de bouillon et laissez cuire 35 min.',
        'Saucisses aux lentilles : faites dorer les saucisses, puis les lardons, l\'oignon et les carottes ; ajoutez les lentilles, le bouillon et les herbes, et laissez mijoter 35 min.',
        'Hachis : faites revenir la viande avec les oignons, écrasez la purée, montez le plat. Gratinez-le 20 min à 200 °C après le banana bread.',
        'Ajoutez les haricots et le chocolat au chili et poursuivez 15 min.',
        'Mixez la soupe. Laissez tout refroidir, puis portionnez et étiquetez.'
      ],
      astuces: ['Achetez la viande hachée en grand format et les légumineuses sèches : c\'est là que se fait l\'économie.', 'Le chili et la soupe se congèlent : une semaine de cuisine en donne deux de repas.']
    },
    {
      id: 'congelateur', nom: 'Congélateur plein', emoji: '❄️', duree: 240,
      tags: ['congelation', 'gourmand', 'proteine'],
      desc: 'Une grosse session pour remplir le congélateur : bolognaise et ragù en grande quantité, 16 burritos et 12 muffins salés, pour un mois de soirs sans cuisiner.',
      recettes: [['ragu-boeuf', 8], ['bolognaise-legumes-caches', 10], ['burritos-poulet', 8], ['burritos-petit-dej', 8, 'petitdej'], ['muffins-sales-courgette', 12, 'collation']],
      plan: [
        'Ragù : faites dorer la viande en gros morceaux, réservez-la, faites revenir le hachis de légumes et le concentré, déglacez au vin, ajoutez les tomates, les herbes et la viande, puis laissez mijoter 3 h à feu très doux.',
        'Bolognaise : mixez finement les légumes, faites-les revenir 10 min, ajoutez la viande, déglacez, puis ajoutez les tomates, les lentilles et l\'eau. Laissez mijoter 1 h.',
        'Faites cuire le riz des burritos, étalez-le pour qu\'il refroidisse vite, puis ajoutez le citron vert et la coriandre.',
        'Garniture des burritos au poulet : faites dorer le poulet avec les épices, ajoutez le coulis, les haricots et le maïs. Laissez tiédir.',
        'Burritos du petit-déjeuner : faites revenir l\'oignon, le poivron, les épinards et les haricots ; brouillez les œufs à part en les gardant crémeux. Laissez tiédir.',
        'Préchauffez le four à 180 °C. Muffins salés : râpez et pressez les courgettes, mélangez la pâte et enfournez les 12 muffins 25 min.',
        'Roulez les 16 burritos bien serrés, emballez chacun dans du film puis de l\'aluminium, et notez le contenu et la date.',
        'Laissez refroidir la bolognaise, puis congelez-la à plat en sacs de 2 à 4 portions.',
        'Effilochez le ragù dans sa sauce, laissez refroidir et congelez en portions.'
      ],
      astuces: ['Refroidissez vite les grosses quantités : répartissez-les dans plusieurs plats peu profonds.', 'Notez sur chaque sac le nom, la date et le nombre de portions.', 'Gardez une liste de ce qui est au congélateur sur la porte.']
    },
    {
      id: 'express', nom: 'Express en 1 h', emoji: '⚡', duree: 60,
      tags: ['healthy', 'express'],
      desc: 'Une heure le dimanche pour 4 jours de déjeuners et de petits-déjeuners : deux plaques au four, une cocotte, des bocaux.',
      recettes: [['poulet-yaourt-curcuma', 4], ['saumon-riz-brocoli', 4], ['curry-lentilles-patate-douce', 6], ['overnight-oats', 4, 'petitdej']],
      plan: [
        'Préchauffez le four à 210 °C. Marinez le poulet avec le yaourt, les épices, l\'ail et le citron.',
        'Lancez la cuisson du riz complet.',
        'Curry : faites revenir les oignons, l\'ail et le gingembre avec les épices, ajoutez les lentilles, la patate douce, les tomates, le lait de coco et l\'eau, et laissez mijoter 30 min.',
        'Étalez le poulet, le brocoli, les pois chiches et l\'oignon sur une plaque et enfournez 30 min.',
        'Sur une seconde plaque, posez le saumon et le brocoli, badigeonnez de soja et de miel, et enfournez 15 min avec le poulet.',
        'Préparez les 4 bocaux d\'overnight oats.',
        'Ajoutez les épinards au curry, puis répartissez le tout en boîtes.'
      ],
      astuces: ['Mangez le saumon en premier (2 jours au réfrigérateur).', 'Le curry se congèle : gardez-en 2 portions pour une semaine chargée.']
    },
    {
      id: 'mijotes-hiver', nom: 'Mijotés d\'hiver', emoji: '🍲', duree: 210,
      tags: ['gourmand', 'congelation'],
      desc: 'Bourguignon, carbonnade, blanquette et soupe de pois cassés : les grands classiques qui gagnent à être réchauffés.',
      recettes: [['boeuf-bourguignon', 6], ['carbonnade-flamande', 6], ['blanquette-poulet', 6], ['soupe-pois-casses', 6], ['compote-pommes', 4, 'collation']],
      plan: [
        'Bourguignon : faites dorer la viande en plusieurs fois, puis les lardons, les oignons et les carottes ; ajoutez la farine, le concentré, le vin et le bouillon, et laissez mijoter 2 h 30 à couvert.',
        'Carbonnade : faites dorer la viande, fondre les oignons 10 min, ajoutez la cassonade, le vinaigre et la bière, couvrez de pain d\'épices à la moutarde, et laissez mijoter 2 h 30.',
        'Soupe de pois cassés : faites revenir les lardons et les légumes, ajoutez les pois cassés, le bouillon et les herbes, et laissez cuire 1 h.',
        'Blanquette : pochez le poulet avec les carottes, l\'oignon et les herbes 30 min, puis faites le roux et la sauce avec les champignons, et liez à la crème sans faire bouillir.',
        'Compote : faites cuire les pommes 20 min à couvert, puis écrasez-les.',
        'Faites sauter les champignons du bourguignon et ajoutez-les 30 min avant la fin.',
        'Mixez la soupe, laissez tout refroidir, puis répartissez entre réfrigérateur et congélateur.'
      ],
      astuces: ['Les mijotés sont encore meilleurs le lendemain : prévoyez-les pour le début de semaine.', 'Lancez les deux cocottes en premier : le reste se prépare pendant qu\'elles mijotent.']
    }
  ];

  var TAGS = {
    healthy: '🥗 Healthy', gourmand: '🧀 Gourmand', vege: '🌱 Végétarien', proteine: '💪 Protéiné',
    budget: '💶 Petit budget', congelation: '❄️ Congélation', express: '⚡ Express'
  };

  var REGLES = [
    ['🌡️', 'Refroidir vite', 'Moins de 2 h entre la fin de la cuisson et le réfrigérateur. Pour les grandes quantités, répartissez dans des plats peu profonds ou posez la cocotte dans un évier d\'eau froide.'],
    ['🏷️', 'Étiqueter', 'Nom du plat, date de cuisson et nombre de portions sur chaque boîte ou sachet.'],
    ['🧊', 'Décongeler au frais', 'Une nuit au réfrigérateur, ou directement à la casserole ou au micro-ondes. Jamais à température ambiante, et on ne recongèle pas un plat décongelé.'],
    ['🔥', 'Réchauffer à cœur', 'Jusqu\'à ce que ce soit brûlant au centre, et une seule fois : sortez seulement la portion du repas.'],
    ['🍝', 'Séparer ce qui ramollit', 'Pâtes al dente, riz et sauces à part, salade non assaisonnée, croustillant ajouté au dernier moment.'],
    ['🐟', 'Poisson et riz d\'abord', 'Ce sont les plus fragiles : prévoyez-les dans les 2 premiers jours.'],
    ['🫙', 'Bonnes boîtes', 'Verre pour réchauffer, sacs de congélation à plat pour gagner de la place, bacs à glaçons pour les sauces et bouillons.']
  ];

  /* Recettes du fichier js/recettes/batch-cooking.js, conçues pour cuisiner en quantité. */
  var SPECIALES = [
    'poulet-effiloche',
    'boulettes-dinde-epinards',
    'bowls-quinoa-poulet',
    'soupe-butternut-lentilles',
    'curry-lentilles-patate-douce',
    'bolognaise-legumes-caches',
    'burritos-petit-dej',
    'saumon-riz-brocoli',
    'dinde-patate-douce-meal-prep',
    'burritos-poulet',
    'gratin-proteine-poulet-brocoli',
    'muffins-sales-courgette',
    'barres-proteinees',
    'curry-vert-poulet',
    'lasagnes-courgettes',
    'parmentier-patate-douce-lentilles',
    'quiche-sans-pate',
    'bouillon-poulet',
    'taboule-quinoa',
    'gratin-macaronis-jambon',
    'lasagnes-poulet-champignons',
    'cannellonis-viande',
    'boeuf-barbacoa',
    'tourte-poulet',
    'boulettes-suedoises',
    'chili-mac',
    'baked-ziti',
    'blanquette-poulet',
    'gratin-poireaux-lardons',
    'muffins-chocolat',
    'ragu-boeuf',
    'porc-curry-coco',
    'lasagnes-saumon-epinards'
  ];

  var B = window.BATCH = {
    MODES: MODES, CONSERVATION: CONSERVATION, SESSIONS: SESSIONS, TAGS: TAGS, REGLES: REGLES, SPECIALES: SPECIALES,
    parId: {}
  };
  SESSIONS.forEach(function (s) { B.parId[s.id] = s; });

  /* Conservation d'une recette : { frigo, congel, mode, reprise, conseil } ou null. */
  B.conservation = function (id) {
    var c = CONSERVATION[id];
    if (!c) return null;
    return { frigo: c[0], congel: c[1], mode: c[2], reprise: MODES[c[2]], conseil: c[3] || '' };
  };

  /* Sessions qui contiennent une recette. */
  B.sessionsAvec = function (id) {
    return SESSIONS.filter(function (s) { return s.recettes.some(function (x) { return x[0] === id; }); });
  };
})();
