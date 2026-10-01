/* Lot 5 — One pot : tout cuit dans une seule casserole, une poêle, une plaque ou un plat.
 * Recettes tendance (orzo, gnocchis, French onion pasta, plaques au four…), healthy et gourmandes.
 * L'ustensile de chaque recette one pot est dans js/onepot.js. */
window.RECETTES = (window.RECETTES || []).concat([
  // ================= GOURMANDES =================
  {
    id: 'orzo-boursin-chorizo', nom: 'One pot d\'orzo au Boursin, chorizo et courgette', cat: 'Pâtes & riz', cuisine: 'One pot', emoji: '🍝',
    desc: 'La recette star de TikTok : l\'orzo cuit directement dans le bouillon et devient crémeux grâce au fromage ail et fines herbes.',
    portions: 3, prep: 10, cuisson: 15, diff: 1,
    ing: [['pates', 250, 'g', 'Orzo (risoni)'], ['fromage_frais', 150, 'g', 'Boursin ail et fines herbes'], ['chorizo', 80], ['courgette', 1, 'pc'],
      ['tomates_cerises', 200], ['bouillon', 650, 'ml', 'Bouillon de légumes'], ['parmesan', 30], ['huile_olive', 1, 'cs'], ['poivre', 0, 'qs']],
    etapes: ['Faites dorer le chorizo en dés 2 min dans une sauteuse avec l\'huile.', 'Ajoutez la courgette en dés et les tomates cerises, faites revenir 3 min.',
      'Versez l\'orzo et le bouillon chaud, posez le Boursin au centre et laissez cuire 10 min à feu moyen en remuant souvent.',
      'Quand le bouillon est presque absorbé, mélangez pour faire fondre le fromage. Servez avec le parmesan râpé et du poivre.'],
    astuce: 'Gardez un peu de bouillon chaud sous la main : l\'orzo continue d\'absorber le liquide hors du feu.'
  },
  {
    id: 'french-onion-pasta', nom: 'French onion pasta (pâtes à la soupe à l\'oignon gratinées)', cat: 'Pâtes & riz', cuisine: 'One pot', emoji: '🧅',
    desc: 'La soupe à l\'oignon en version pâtes : oignons fondants caramélisés, bouillon de bœuf, gruyère qui file. Virale et ultra réconfortante.',
    portions: 4, prep: 15, cuisson: 45, diff: 1,
    ing: [['oignon', 4, 'pc'], ['beurre', 40], ['thym', 3, 'pc'], ['vin_blanc', 100, 'ml'], ['pates', 350, 'g', 'Pâtes courtes (coquillettes, rigatoni)'],
      ['bouillon', 900, 'ml', 'Bouillon de bœuf'], ['sauce_worcestershire', 1, 'cs'], ['comte', 150, 'g', 'Gruyère ou comté râpé'], ['parmesan', 30], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Faites fondre les oignons émincés dans le beurre avec le thym à feu doux 25 min, jusqu\'à ce qu\'ils soient bien dorés.',
      'Déglacez au vin blanc, laissez réduire 2 min.', 'Ajoutez les pâtes, le bouillon et la Worcestershire. Laissez cuire 12 min à couvert en remuant de temps en temps.',
      'Incorporez le parmesan, couvrez de gruyère et passez 5 min sous le gril du four (cocotte allant au four) jusqu\'à ce que ce soit gratiné.'],
    astuce: 'Ne pressez pas les oignons : c\'est leur caramélisation lente qui donne tout le goût.'
  },
  {
    id: 'gnocchis-camembert', nom: 'Gnocchis crémeux au camembert fondu', cat: 'Pâtes & riz', cuisine: 'One pot', emoji: '🧀',
    desc: 'Un camembert entier fondu avec tomates cerises et crème, les gnocchis cuisent dedans : prêt en 15 minutes.',
    portions: 3, prep: 5, cuisson: 12, diff: 1,
    ing: [['gnocchi', 500], ['camembert', 1, 'pc'], ['tomates_cerises', 200], ['creme_15', 150, 'ml'], ['bouillon', 150, 'ml', 'Bouillon de légumes'],
      ['ail', 1, 'pc'], ['herbes_provence', 1, 'cc'], ['epinards', 80, 'g', 'Pousses d\'épinards'], ['poivre', 0, 'qs']],
    etapes: ['Dans une sauteuse, faites revenir l\'ail et les tomates cerises coupées en deux 3 min.',
      'Ajoutez le camembert en morceaux (sans la croûte si vous préférez), la crème, le bouillon et les herbes. Laissez fondre 2 min.',
      'Ajoutez les gnocchis et laissez cuire 6 à 7 min en remuant : ils cuisent dans la sauce.', 'Incorporez les épinards hors du feu et poivrez.']
  },
  {
    id: 'orzo-marry-me-poulet', nom: 'Orzo « marry me » au poulet et tomates séchées', cat: 'Volailles', cuisine: 'One pot', emoji: '💍',
    desc: 'La sauce « marry me » (crème, tomates séchées, parmesan, piment) avec le poulet et l\'orzo cuits dans la même sauteuse.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['poulet_blanc', 500], ['pates', 250, 'g', 'Orzo (risoni)'], ['tomates_sechees', 80], ['ail', 3, 'pc'], ['creme_30', 150, 'ml'],
      ['bouillon', 700, 'ml', 'Bouillon de volaille'], ['parmesan', 50], ['piment_poudre', 0.5, 'cc'], ['origan', 1, 'cc'], ['basilic', 10], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer le poulet en morceaux dans l\'huile 5 min, salez. Réservez.', 'Dans la même sauteuse, faites revenir l\'ail et les tomates séchées hachées 1 min avec le piment et l\'origan.',
      'Ajoutez l\'orzo et le bouillon, laissez cuire 10 min en remuant souvent.', 'Ajoutez la crème, le parmesan et le poulet, laissez mijoter 3 min. Parsemez de basilic.']
  },
  {
    id: 'lasagna-soup', nom: 'Soupe lasagne (lasagna soup)', cat: 'Soupes', cuisine: 'One pot', emoji: '🍲',
    desc: 'Tout le goût des lasagnes en soupe : bolognaise, feuilles cassées cuites dans le bouillon, cuillère de ricotta et mozzarella fondante.',
    portions: 6, prep: 15, cuisson: 35, diff: 1,
    ing: [['boeuf_hache_15', 500], ['oignon', 1, 'pc'], ['ail', 3, 'pc'], ['concentre_tomate', 2, 'cs'], ['tomates_concassees', 800], ['bouillon', 1200, 'ml'],
      ['lasagnes', 200], ['origan', 1, 'cc'], ['ricotta', 250], ['mozzarella', 1, 'pc'], ['parmesan', 40], ['basilic', 10], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Dans une cocotte, faites dorer la viande avec l\'oignon et l\'ail dans l\'huile.', 'Ajoutez le concentré, les tomates, le bouillon et l\'origan. Portez à frémissement 10 min.',
      'Cassez les feuilles de lasagnes en morceaux, ajoutez-les et laissez cuire 12 à 15 min en remuant.',
      'Servez avec une cuillère de ricotta mélangée au parmesan, des morceaux de mozzarella et le basilic.'],
    astuce: 'La soupe épaissit en refroidissant : rallongez-la d\'un peu de bouillon le lendemain.'
  },
  {
    id: 'cheeseburger-pasta', nom: 'Pâtes cheeseburger en une casserole', cat: 'Pâtes & riz', cuisine: 'One pot', emoji: '🍔',
    desc: 'Le goût du cheeseburger (bœuf, cheddar, ketchup, moutarde, cornichons) dans un plat de pâtes crémeux et sans vaisselle.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['boeuf_hache_15', 500], ['oignon', 1, 'pc'], ['pates', 300, 'g', 'Coquillettes ou macaronis'], ['bouillon', 600, 'ml', 'Bouillon de bœuf'], ['lait_demi', 200, 'ml'],
      ['ketchup', 3, 'cs'], ['moutarde', 1, 'cs'], ['cheddar', 8, 'pc'], ['cornichons', 50], ['paprika', 1, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer la viande avec l\'oignon haché et le paprika dans une grande casserole.', 'Ajoutez les pâtes, le bouillon, le lait, le ketchup et la moutarde.',
      'Laissez cuire 10 à 12 min à couvert en remuant souvent.', 'Hors du feu, faites fondre le cheddar en morceaux. Servez avec les cornichons hachés.']
  },
  {
    id: 'riz-poulet-chorizo-four', nom: 'Riz au four poulet-chorizo (un seul plat)', cat: 'Volailles', cuisine: 'One pot', emoji: '🥘',
    desc: 'Le riz cuit au four dans le bouillon sous les cuisses de poulet dorées : façon paella, sans surveiller.',
    portions: 4, prep: 15, cuisson: 50, diff: 1,
    ing: [['poulet_cuisse', 700], ['chorizo', 100], ['riz_blanc', 250], ['oignon', 1, 'pc'], ['poivron', 1, 'pc'], ['ail', 2, 'pc'], ['tomates_concassees', 400],
      ['bouillon', 550, 'ml', 'Bouillon de volaille'], ['paprika', 2, 'cc'], ['petits_pois', 150], ['citron', 1, 'pc'], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Préchauffez le four à 200 °C. Dans une cocotte allant au four, faites dorer le poulet assaisonné de paprika 6 min, réservez.',
      'Faites revenir le chorizo, l\'oignon, le poivron et l\'ail 4 min. Ajoutez le riz et remuez 1 min.',
      'Versez les tomates et le bouillon chaud, ajoutez les petits pois et posez le poulet dessus.', 'Enfournez 35 min sans couvercle. Laissez reposer 5 min et servez avec le citron.']
  },
  {
    id: 'gnocchis-plaque-saucisse', nom: 'Gnocchis rôtis à la plaque, saucisses et poivrons', cat: 'Pâtes & riz', cuisine: 'One pot', emoji: '🍽️',
    desc: 'Le « sheet pan gnocchi » : les gnocchis crus rôtissent sur la plaque avec les légumes et deviennent croustillants.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['gnocchi', 500], ['saucisse', 4, 'pc'], ['poivron', 2, 'pc'], ['oignon_rouge', 1, 'pc'], ['tomates_cerises', 250], ['huile_olive', 3, 'cs'],
      ['herbes_provence', 2, 'cc'], ['ail', 2, 'pc'], ['parmesan', 30], ['basilic', 10], ['sel', 0, 'qs']],
    etapes: ['Préchauffez le four à 220 °C.', 'Sur une grande plaque, mélangez les gnocchis crus, les poivrons et l\'oignon en morceaux, les tomates cerises, l\'ail, l\'huile et les herbes. Ajoutez les saucisses en tronçons.',
      'Enfournez 25 min en remuant à mi-cuisson, jusqu\'à ce que les gnocchis soient dorés.', 'Parsemez de parmesan et de basilic.'],
    astuce: 'Étalez bien en une seule couche : serrés, les gnocchis cuisent à la vapeur au lieu de dorer.'
  },
  {
    id: 'risotto-four-petits-pois', nom: 'Risotto au four petits pois, lardons et parmesan', cat: 'Pâtes & riz', cuisine: 'One pot', emoji: '🍚',
    desc: 'Le risotto sans remuer pendant 20 minutes : tout cuit au four dans la cocotte, il ne reste qu\'à ajouter le parmesan.',
    portions: 4, prep: 10, cuisson: 30, diff: 1,
    ing: [['riz_arborio', 300], ['lardons', 150], ['oignon', 1, 'pc'], ['vin_blanc', 100, 'ml'], ['bouillon', 1000, 'ml', 'Bouillon de volaille'], ['petits_pois', 200],
      ['parmesan', 60], ['beurre', 20], ['citron', 0.5, 'pc'], ['poivre', 0, 'qs']],
    etapes: ['Préchauffez le four à 200 °C. Dans une cocotte, faites dorer les lardons puis l\'oignon haché.', 'Ajoutez le riz, remuez 1 min, déglacez au vin blanc.',
      'Versez le bouillon chaud, couvrez et enfournez 20 min.', 'Sortez la cocotte, ajoutez les petits pois, le parmesan, le beurre et le zeste de citron. Remuez vivement 1 min : c\'est crémeux.']
  },
  {
    id: 'poulet-oignon-gratine', nom: 'Poulet façon soupe à l\'oignon gratiné (French onion chicken)', cat: 'Volailles', cuisine: 'One pot', emoji: '🍗',
    desc: 'Escalopes de poulet mijotées dans des oignons caramélisés au bouillon, puis gratinées au gruyère, dans une seule poêle.',
    portions: 4, prep: 10, cuisson: 40, diff: 1,
    ing: [['poulet_blanc', 600], ['oignon', 3, 'pc'], ['beurre', 30], ['thym', 2, 'pc'], ['vin_blanc', 100, 'ml'], ['bouillon', 250, 'ml', 'Bouillon de bœuf'],
      ['farine', 1, 'cs'], ['comte', 120, 'g', 'Gruyère râpé'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Faites dorer le poulet 3 min par face dans la moitié du beurre, réservez.', 'Faites fondre les oignons émincés avec le reste du beurre et le thym 20 min à feu doux.',
      'Saupoudrez de farine, déglacez au vin puis ajoutez le bouillon. Remettez le poulet et laissez mijoter 10 min.', 'Couvrez de gruyère et passez 5 min sous le gril du four.'],
    astuce: 'Servez avec une purée ou du pain grillé pour saucer.'
  },
  {
    id: 'soupe-poulet-pot-pie', nom: 'Soupe de poulet façon tourte (chicken pot pie soup)', cat: 'Soupes', cuisine: 'One pot', emoji: '🥧',
    desc: 'La garniture crémeuse de la tourte au poulet en soupe, avec des carrés de pâte feuilletée croustillants à tremper.',
    portions: 6, prep: 15, cuisson: 35, diff: 1,
    ing: [['poulet_blanc', 500], ['beurre', 40], ['oignon', 1, 'pc'], ['carotte', 2, 'pc'], ['celeri', 2, 'pc'], ['pomme_de_terre', 2, 'pc'], ['farine', 40],
      ['bouillon', 1200, 'ml', 'Bouillon de volaille'], ['creme_15', 200, 'ml'], ['petits_pois', 150], ['thym', 2, 'pc'], ['pate_feuilletee', 1, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Préchauffez le four à 200 °C. Coupez la pâte feuilletée en carrés et faites-les dorer 12 min sur une plaque pendant la soupe.',
      'Faites revenir l\'oignon, les carottes et le céleri dans le beurre 5 min. Saupoudrez de farine et remuez 1 min.',
      'Versez le bouillon en remuant, ajoutez les pommes de terre en dés, le thym et le poulet entier. Laissez cuire 20 min.',
      'Effilochez le poulet, ajoutez la crème et les petits pois, poursuivez 5 min. Servez avec les carrés feuilletés.']
  },
  {
    id: 'pates-vodka', nom: 'Pâtes alla vodka en une casserole', cat: 'Pâtes & riz', cuisine: 'One pot', emoji: '🍅',
    desc: 'La sauce rose crémeuse tomate-vodka devenue culte, avec les pâtes cuites directement dedans.',
    portions: 4, prep: 5, cuisson: 20, diff: 1,
    ing: [['pates', 350, 'g', 'Penne ou rigatoni'], ['echalote', 2, 'pc'], ['ail', 2, 'pc'], ['concentre_tomate', 4, 'cs'], ['alcool_fort', 50, 'ml', 'Vodka'],
      ['coulis_tomate', 400], ['eau', 600, 'ml'], ['creme_30', 150, 'ml'], ['parmesan', 50], ['piment_poudre', 0.5, 'cc'], ['beurre', 20], ['basilic', 10], ['sel', 0, 'qs']],
    etapes: ['Faites fondre les échalotes et l\'ail dans le beurre, ajoutez le concentré et le piment, faites revenir 2 min jusqu\'à ce qu\'il fonce.',
      'Déglacez à la vodka et laissez réduire 1 min.', 'Ajoutez le coulis, l\'eau et les pâtes. Laissez cuire 12 min en remuant souvent.',
      'Ajoutez la crème et le parmesan, mélangez 1 min. Servez avec le basilic.'],
    astuce: 'Sans alcool : remplacez la vodka par un trait de jus de citron.'
  },
  {
    id: 'poulet-cowboy-plaque', nom: 'Poulet au beurre cowboy et pommes de terre à la plaque', cat: 'Volailles', cuisine: 'One pot', emoji: '🤠',
    desc: 'Le « cowboy butter » (beurre, ail, moutarde, citron, herbes, piment) badigeonné sur le poulet et les pommes de terre rôtis ensemble.',
    portions: 4, prep: 15, cuisson: 40, diff: 1,
    ing: [['poulet_cuisse', 800], ['pomme_de_terre', 800], ['beurre', 60], ['ail', 4, 'pc'], ['moutarde', 1, 'cs'], ['citron', 1, 'pc'], ['persil', 15],
      ['ciboulette', 10], ['paprika', 1, 'cc'], ['piment_poudre', 0.5, 'cc'], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Préchauffez le four à 210 °C. Coupez les pommes de terre en quartiers, mélangez-les avec l\'huile et le sel sur la plaque.',
      'Beurre cowboy : mélangez le beurre fondu, l\'ail haché, la moutarde, le jus de citron, les herbes, le paprika et le piment.',
      'Posez le poulet sur la plaque, badigeonnez poulet et pommes de terre de la moitié du beurre. Enfournez 35 à 40 min.',
      'Arrosez du reste de beurre cowboy à la sortie du four.']
  },
  {
    id: 'gnocchis-toscane', nom: 'Gnocchis à la toscane (épinards, tomates séchées, crème)', cat: 'Végétarien', cuisine: 'One pot', emoji: '🌿',
    desc: 'Une sauteuse, dix minutes : gnocchis dorés, sauce crémeuse à l\'ail, tomates séchées, épinards et parmesan.',
    portions: 3, prep: 5, cuisson: 15, diff: 1,
    ing: [['gnocchi', 500], ['beurre', 20], ['ail', 3, 'pc'], ['tomates_sechees', 60], ['creme_30', 200, 'ml'], ['bouillon', 100, 'ml', 'Bouillon de légumes'],
      ['epinards', 100, 'g', 'Pousses d\'épinards'], ['parmesan', 40], ['origan', 1, 'cc'], ['poivre', 0, 'qs']],
    etapes: ['Faites dorer les gnocchis crus dans le beurre 5 min en remuant, jusqu\'à ce qu\'ils soient croustillants.', 'Ajoutez l\'ail et les tomates séchées, 1 min.',
      'Versez la crème, le bouillon et l\'origan, laissez épaissir 3 min.', 'Ajoutez les épinards et le parmesan, mélangez jusqu\'à ce qu\'ils tombent.']
  },
  {
    id: 'nouilles-boeuf-brocoli', nom: 'Nouilles sautées bœuf-brocoli en un wok', cat: 'Viandes', cuisine: 'One pot', emoji: '🥢',
    desc: 'Comme au restaurant chinois : bœuf saisi, brocoli croquant, sauce soja-miel-gingembre, nouilles cuites directement dans le wok.',
    portions: 4, prep: 15, cuisson: 15, diff: 1,
    ing: [['boeuf_steak', 400], ['nouilles_oeuf', 250], ['brocoli', 1, 'pc'], ['ail', 3, 'pc'], ['gingembre', 15], ['sauce_soja', 5, 'cs'], ['miel', 2, 'cs'],
      ['maizena', 1, 'cs'], ['eau', 400, 'ml'], ['huile_neutre', 2, 'cs'], ['graines_sesame', 1, 'cs'], ['oignon_nouveau', 2, 'pc']],
    etapes: ['Émincez le bœuf finement et enrobez-le de maïzena. Saisissez-le 2 min dans l\'huile très chaude, réservez.',
      'Faites revenir l\'ail et le gingembre 30 s, ajoutez le brocoli en petites fleurettes, l\'eau, la sauce soja et le miel.',
      'Ajoutez les nouilles et laissez cuire 5 à 6 min en remuant, jusqu\'à ce que la sauce nappe.', 'Remettez le bœuf, mélangez 1 min. Parsemez de sésame et d\'oignon nouveau.']
  },

  // ================= HEALTHY =================
  {
    id: 'orzo-lentilles-mediterranee', nom: 'Orzo et lentilles à la méditerranéenne', cat: 'Végétarien', cuisine: 'One pot', emoji: '🫒',
    desc: 'Riche en protéines et en fibres : orzo et lentilles vertes cuits ensemble, tomates, épinards, feta et olives.',
    portions: 4, prep: 10, cuisson: 30, diff: 1,
    ing: [['lentilles_vertes', 150], ['pates_completes', 200, 'g', 'Orzo complet (ou plombs)'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['tomates_concassees', 400],
      ['bouillon', 1000, 'ml', 'Bouillon de légumes'], ['epinards', 150], ['feta', 100], ['olives', 50], ['citron', 1, 'pc'], ['origan', 1, 'cc'], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon et l\'ail dans l\'huile 3 min.', 'Ajoutez les lentilles rincées, les tomates, l\'origan et le bouillon. Laissez cuire 15 min.',
      'Ajoutez l\'orzo et poursuivez 10 min en remuant, en rajoutant un peu d\'eau si besoin.', 'Incorporez les épinards, le jus de citron, puis la feta émiettée et les olives.'],
    astuce: 'Se garde 4 jours au frais : parfait en boîte à lunch, chaud ou tiède.'
  },
  {
    id: 'orzo-poulet-citron', nom: 'Orzo au poulet, citron et brocoli', cat: 'Volailles', cuisine: 'One pot', emoji: '🍋',
    desc: 'Le « lemon chicken orzo » : poulet, orzo et brocoli dans un bouillon citronné, léger et plein de protéines.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['poulet_blanc', 500], ['pates_completes', 250, 'g', 'Orzo'], ['brocoli', 1, 'pc'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['bouillon', 900, 'ml', 'Bouillon de volaille'],
      ['citron', 1, 'pc'], ['parmesan', 30], ['thym', 2, 'pc'], ['huile_olive', 1, 'cs'], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Faites dorer le poulet en dés dans l\'huile 4 min, réservez.', 'Faites revenir l\'oignon et l\'ail, ajoutez l\'orzo, le bouillon et le thym. Laissez cuire 6 min.',
      'Ajoutez le brocoli en petites fleurettes et le poulet, poursuivez 5 min.', 'Hors du feu, ajoutez le zeste et le jus du citron, le parmesan et le persil.']
  },
  {
    id: 'saumon-plaque-legumes', nom: 'Saumon et légumes rôtis à la plaque, sauce yaourt-aneth', cat: 'Poissons', cuisine: 'One pot', emoji: '🐟',
    desc: 'Tout sur la même plaque : pommes de terre grenaille, asperges ou haricots verts, saumon rôti et sauce fraîche au yaourt.',
    portions: 4, prep: 15, cuisson: 30, diff: 1,
    ing: [['saumon', 4, 'pc'], ['pomme_de_terre', 600], ['haricots_verts', 300], ['tomates_cerises', 200], ['huile_olive', 2, 'cs'], ['citron', 1, 'pc'],
      ['yaourt_grec', 150], ['aneth', 10], ['ail', 1, 'pc'], ['paprika', 1, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Préchauffez le four à 210 °C. Rôtissez les pommes de terre en quartiers avec la moitié de l\'huile et le paprika 15 min.',
      'Ajoutez les haricots verts et les tomates cerises sur la plaque, puis les pavés de saumon arrosés du reste d\'huile et de rondelles de citron.',
      'Enfournez encore 12 à 15 min.', 'Sauce : yaourt, aneth ciselé, ail râpé, jus de citron, sel. Servez à côté.']
  },
  {
    id: 'poulet-harissa-plaque', nom: 'Poulet harissa, patates douces et pois chiches à la plaque', cat: 'Volailles', cuisine: 'One pot', emoji: '🌶️',
    desc: 'Une plaque colorée et épicée : poulet mariné à la harissa et au miel, patates douces fondantes, pois chiches croustillants.',
    portions: 4, prep: 15, cuisson: 35, diff: 1,
    ing: [['poulet_cuisse', 700], ['patate_douce', 2, 'pc'], ['pois_chiches', 265], ['oignon_rouge', 1, 'pc'], ['harissa', 2, 'cs'], ['miel', 1, 'cs'],
      ['huile_olive', 2, 'cs'], ['cumin', 1, 'cc'], ['citron', 1, 'pc'], ['yaourt_grec', 150], ['coriandre', 10], ['sel', 0, 'qs']],
    etapes: ['Préchauffez le four à 210 °C. Mélangez la harissa, le miel, la moitié de l\'huile et le cumin, enrobez-en le poulet.',
      'Sur la plaque, mélangez les patates douces en cubes, les pois chiches égouttés et l\'oignon avec le reste de l\'huile. Posez le poulet dessus.',
      'Enfournez 35 min.', 'Servez avec le yaourt citronné et la coriandre.']
  },
  {
    id: 'shakshuka-verte', nom: 'Shakshuka verte (épinards, courgette, feta)', cat: 'Végétarien', cuisine: 'One pot', emoji: '🍳',
    desc: 'La version verte de la shakshuka : œufs pochés dans les épinards, la courgette et les herbes, feta par-dessus.',
    portions: 2, prep: 10, cuisson: 15, diff: 1,
    ing: [['oeuf', 4, 'pc'], ['epinards', 200], ['courgette', 1, 'pc'], ['poireau', 1, 'pc'], ['ail', 2, 'pc'], ['cumin', 0.5, 'cc'], ['feta', 60],
      ['citron', 0.5, 'pc'], ['coriandre', 10], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Dans une poêle, faites fondre le poireau émincé et la courgette en dés dans l\'huile 6 min avec l\'ail et le cumin.', 'Ajoutez les épinards et laissez-les tomber 2 min. Salez, citronnez.',
      'Creusez 4 puits, cassez-y les œufs, couvrez et laissez cuire 5 à 6 min.', 'Parsemez de feta et de coriandre. Servez avec du pain.']
  },
  {
    id: 'pasta-e-ceci', nom: 'Pasta e ceci (pâtes aux pois chiches)', cat: 'Végétarien', cuisine: 'One pot', emoji: '🥣',
    desc: 'Le grand classique romain, entre soupe et plat de pâtes : pois chiches à moitié écrasés, romarin, parmesan. Économique et protéiné.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['pois_chiches', 530], ['pates_completes', 200, 'g', 'Petites pâtes (ditalini, coquillettes)'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['concentre_tomate', 2, 'cs'],
      ['romarin', 1, 'pc'], ['bouillon', 1000, 'ml', 'Bouillon de légumes'], ['parmesan', 40], ['huile_olive', 2, 'cs'], ['piment_poudre', 0.25, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon, l\'ail et le romarin dans l\'huile 4 min, ajoutez le concentré et le piment.', 'Ajoutez les pois chiches et le bouillon, laissez frémir 10 min.',
      'Écrasez grossièrement un tiers des pois chiches pour épaissir. Ajoutez les pâtes et laissez cuire 10 min en remuant.', 'Servez avec le parmesan et un filet d\'huile d\'olive.']
  },
  {
    id: 'riz-dinde-mexicain', nom: 'Riz complet à la dinde façon mexicaine (one pot)', cat: 'Volailles', cuisine: 'One pot', emoji: '🌮',
    desc: 'Un burrito bowl dans une seule casserole : riz complet, dinde, haricots noirs, maïs et poivron, à garnir d\'avocat.',
    portions: 4, prep: 10, cuisson: 35, diff: 1,
    ing: [['dinde_escalope', 400], ['riz_complet', 200], ['haricots_noirs', 240], ['mais', 140], ['poivron', 1, 'pc'], ['oignon', 1, 'pc'], ['tomates_concassees', 400],
      ['bouillon', 450, 'ml', 'Bouillon de volaille'], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['citron_vert', 1, 'pc'], ['avocat', 1, 'pc'], ['coriandre', 10], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer la dinde en dés avec l\'oignon et le poivron dans l\'huile, ajoutez les épices.', 'Ajoutez le riz rincé, les tomates et le bouillon. Couvrez et laissez cuire 25 min à feu doux.',
      'Ajoutez les haricots et le maïs égouttés, poursuivez 5 min à découvert.', 'Servez avec l\'avocat, la coriandre et le citron vert.']
  },
  {
    id: 'haricots-blancs-toscane', nom: 'Haricots blancs à la toscane, kale et parmesan', cat: 'Végétarien', cuisine: 'One pot', emoji: '🫘',
    desc: 'Les « marry me beans » de TikTok en version légère : haricots blancs mijotés à l\'ail et à la tomate, chou kale, parmesan.',
    portions: 3, prep: 10, cuisson: 20, diff: 1,
    ing: [['haricots_blancs', 500], ['tomates_sechees', 40], ['tomates_cerises', 200], ['ail', 3, 'pc'], ['chou_kale', 100], ['bouillon', 250, 'ml', 'Bouillon de légumes'],
      ['fromage_frais', 60, 'g', 'Fromage frais léger'], ['parmesan', 30], ['citron', 0.5, 'pc'], ['huile_olive', 1, 'cs'], ['piment_poudre', 0.25, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'ail, les tomates séchées et les tomates cerises dans l\'huile 4 min.', 'Ajoutez les haricots égouttés et le bouillon, laissez mijoter 8 min en écrasant quelques haricots.',
      'Ajoutez le kale émincé et le fromage frais, laissez 3 min.', 'Finissez avec le parmesan, le citron et le piment. Servez avec du pain grillé.']
  },
  {
    id: 'tofu-plaque-cacahuete', nom: 'Tofu et légumes rôtis à la plaque, sauce cacahuète', cat: 'Végétarien', cuisine: 'One pot', emoji: '🥜',
    desc: '100 % végétal et riche en protéines : tofu croustillant, brocoli, poivron et patate douce rôtis, sauce cacahuète-citron vert.',
    portions: 3, prep: 15, cuisson: 30, diff: 1,
    ing: [['tofu', 360], ['brocoli', 1, 'pc'], ['poivron', 1, 'pc'], ['patate_douce', 1, 'pc'], ['huile_neutre', 2, 'cs'], ['sauce_soja', 3, 'cs'], ['maizena', 1, 'cs'],
      ['beurre_cacahuete', 3, 'cs'], ['citron_vert', 1, 'pc'], ['miel', 1, 'cs'], ['gingembre', 10], ['graines_sesame', 1, 'cs']],
    etapes: ['Préchauffez le four à 210 °C. Coupez le tofu en cubes, enrobez-le d\'1 c. à soupe de soja puis de maïzena.',
      'Sur la plaque, mélangez les légumes en morceaux avec l\'huile, ajoutez le tofu. Enfournez 30 min en remuant à mi-cuisson.',
      'Sauce : beurre de cacahuète, reste de soja, jus de citron vert, miel, gingembre râpé et 3 c. à soupe d\'eau chaude.', 'Nappez de sauce et parsemez de sésame.']
  },
  {
    id: 'curry-cabillaud-coco', nom: 'Curry de cabillaud au lait de coco et épinards', cat: 'Poissons', cuisine: 'One pot', emoji: '🍛',
    desc: 'Le poisson poche dans une sauce coco-curry légère, en une seule sauteuse et en 20 minutes.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['cabillaud', 4, 'pc'], ['lait_coco', 400, 'ml'], ['tomates_concassees', 400], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['gingembre', 15],
      ['pate_curry', 2, 'cs'], ['epinards', 150], ['citron_vert', 1, 'pc'], ['coriandre', 10], ['huile_neutre', 1, 'cs']],
    etapes: ['Faites revenir l\'oignon, l\'ail et le gingembre dans l\'huile 3 min, ajoutez la pâte de curry 1 min.', 'Ajoutez les tomates et le lait de coco, laissez frémir 8 min.',
      'Posez le cabillaud en morceaux dans la sauce, couvrez et laissez pocher 6 min.', 'Ajoutez les épinards, le citron vert et la coriandre. Servez avec un peu de riz.']
  },
  {
    id: 'quinoa-poulet-casserole', nom: 'Quinoa au poulet et légumes en une casserole', cat: 'Volailles', cuisine: 'One pot', emoji: '🥗',
    desc: 'Un plat complet et protéiné : poulet, quinoa, courgette, poivron et tomates qui cuisent ensemble.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['poulet_blanc', 450], ['quinoa', 200], ['courgette', 1, 'pc'], ['poivron', 1, 'pc'], ['oignon', 1, 'pc'], ['tomates_concassees', 400],
      ['bouillon', 450, 'ml', 'Bouillon de volaille'], ['paprika', 1, 'cc'], ['cumin', 1, 'cc'], ['persil', 10], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer le poulet en dés avec l\'oignon dans l\'huile, ajoutez les épices.', 'Ajoutez le quinoa rincé, la courgette et le poivron en dés, les tomates et le bouillon.',
      'Couvrez et laissez cuire 15 à 18 min, jusqu\'à ce que le quinoa ait absorbé le liquide.', 'Laissez reposer 5 min à couvert et parsemez de persil.']
  },
  {
    id: 'crevettes-haricots-blancs', nom: 'Crevettes à l\'ail, haricots blancs et épinards à la poêle', cat: 'Poissons', cuisine: 'One pot', emoji: '🦐',
    desc: 'Dix minutes, une poêle : crevettes saisies à l\'ail et au citron, haricots blancs crémeux et épinards. Léger et rassasiant.',
    portions: 3, prep: 5, cuisson: 12, diff: 1,
    ing: [['crevettes', 350], ['haricots_blancs', 500], ['epinards', 150], ['tomates_cerises', 200], ['ail', 4, 'pc'], ['citron', 1, 'pc'], ['huile_olive', 2, 'cs'],
      ['piment_poudre', 0.25, 'cc'], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Saisissez les crevettes 1 min par face dans la moitié de l\'huile avec la moitié de l\'ail, réservez.', 'Faites revenir le reste de l\'ail et les tomates cerises 3 min.',
      'Ajoutez les haricots égouttés avec un peu de leur jus, puis les épinards. Laissez 3 min.', 'Remettez les crevettes, ajoutez le citron, le piment et le persil.']
  },
  {
    id: 'boulgour-poulet-pilaf', nom: 'Boulgour pilaf au poulet, tomates et pois chiches', cat: 'Volailles', cuisine: 'One pot', emoji: '🍲',
    desc: 'Un pilaf oriental riche en fibres : boulgour, poulet, pois chiches, tomates et ras el hanout, cuits dans une seule cocotte.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['poulet_blanc', 450], ['boulgour', 200], ['pois_chiches', 265], ['oignon', 1, 'pc'], ['tomates_concassees', 400], ['bouillon', 400, 'ml', 'Bouillon de volaille'],
      ['ras_el_hanout', 2, 'cc'], ['cannelle', 0.25, 'cc'], ['menthe', 10], ['yaourt_nature', 1, 'pc'], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer le poulet en dés avec l\'oignon et les épices dans l\'huile.', 'Ajoutez le boulgour, les pois chiches, les tomates et le bouillon.',
      'Couvrez et laissez cuire 15 min à feu doux, puis 5 min de repos hors du feu.', 'Servez avec le yaourt et la menthe ciselée.']
  },
  {
    id: 'oeufs-plaque-legumes', nom: 'Œufs au four à la plaque, légumes et feta (sheet pan eggs)', cat: 'Petit-déjeuner', cuisine: 'One pot', emoji: '🥚',
    desc: 'Le brunch protéiné de toute la semaine : œufs battus cuits sur la plaque avec légumes et feta, à couper en parts.',
    portions: 6, prep: 10, cuisson: 20, diff: 1,
    ing: [['oeuf', 12, 'pc'], ['lait_demi', 150, 'ml'], ['poivron', 1, 'pc'], ['epinards', 100], ['tomates_cerises', 150], ['oignon_nouveau', 2, 'pc'], ['feta', 100],
      ['huile_olive', 1, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Préchauffez le four à 190 °C. Huilez une plaque à bords hauts ou un grand plat.', 'Répartissez les légumes coupés, puis versez les œufs battus avec le lait, le sel et le poivre.',
      'Parsemez de feta et enfournez 18 à 20 min, jusqu\'à ce que ce soit pris.', 'Coupez en 6 parts : elles se gardent 4 jours au frais.']
  },
  {
    id: 'poulet-grec-riz-citron', nom: 'Poulet et riz complet à la grecque, citron-origan (une cocotte)', cat: 'Volailles', cuisine: 'One pot', emoji: '🇬🇷',
    desc: 'Les saveurs grecques en un plat : poulet au citron et à l\'origan sur un riz complet, concombre, tomates et sauce yaourt.',
    portions: 4, prep: 15, cuisson: 40, diff: 1,
    ing: [['poulet_blanc', 500], ['riz_complet', 220], ['oignon', 1, 'pc'], ['ail', 3, 'pc'], ['citron', 2, 'pc'], ['origan', 2, 'cc'], ['bouillon', 550, 'ml', 'Bouillon de volaille'],
      ['concombre', 1, 'pc'], ['tomates_cerises', 200], ['yaourt_grec', 150], ['olives', 40], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Marinez le poulet avec le jus d\'un citron, l\'origan et l\'ail (10 min suffisent).', 'Faites-le dorer 5 min dans la cocotte avec l\'huile, réservez. Faites revenir l\'oignon.',
      'Ajoutez le riz, le bouillon et le zeste de citron, posez le poulet dessus. Couvrez et laissez cuire 30 min à feu doux.',
      'Servez avec le concombre et les tomates en dés, les olives et le yaourt citronné.']
  }
]);
