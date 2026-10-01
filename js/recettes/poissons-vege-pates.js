/* Poissons, Végétarien, Pâtes & riz */
window.RECETTES = (window.RECETTES || []).concat([
  // ================= POISSONS =================
  {
    id: 'saumon-papillote', nom: 'Saumon en papillote', cat: 'Poissons', cuisine: 'Française', emoji: '🐟',
    desc: 'Saumon fondant cuit à l\'étouffée avec courgettes, tomates et aneth.',
    portions: 4, prep: 15, cuisson: 20, diff: 1,
    ing: [
      ['saumon', 4, 'pc'], ['courgette', 2, 'pc'], ['tomates_cerises', 200], ['citron', 1, 'pc'], ['aneth', 10],
      ['huile_olive', 2, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Préchauffez le four à 200 °C. Coupez les courgettes en fines rondelles et les tomates en deux.',
      'Sur 4 feuilles de papier cuisson, répartissez les légumes, posez le saumon dessus.',
      'Ajoutez des rondelles de citron, l\'aneth, un filet d\'huile, sel et poivre. Fermez hermétiquement.',
      'Enfournez 15 à 20 min.'
    ]
  },
  {
    id: 'saumon-creme-citron', nom: 'Pavé de saumon sauce crème-citron', cat: 'Poissons', cuisine: 'Française', emoji: '🍋',
    desc: 'Saumon poêlé côté peau et sauce onctueuse au citron et à l\'aneth.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [
      ['saumon', 4, 'pc'], ['creme_15', 200, 'ml'], ['citron', 1, 'pc'], ['echalote', 1, 'pc'], ['aneth', 5], ['beurre', 10],
      ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites cuire le saumon côté peau dans le beurre 6 min, retournez et cuisez 2 min. Réservez.',
      'Faites fondre l\'échalote ciselée dans la poêle, ajoutez la crème, le jus et le zeste de citron.',
      'Laissez réduire 3 min, ajoutez l\'aneth. Nappez le saumon.'
    ],
    astuce: 'Servez avec du riz ou des haricots verts.'
  },
  {
    id: 'cabillaud-provencale', nom: 'Cabillaud à la provençale', cat: 'Poissons', cuisine: 'Provençale', emoji: '🐠',
    desc: 'Dos de cabillaud sur une sauce tomate aux olives et herbes.',
    portions: 4, prep: 15, cuisson: 25, diff: 1,
    ing: [
      ['cabillaud', 4, 'pc'], ['tomate', 4, 'pc'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['olives', 60, 'g', 'Olives noires'], ['capres', 1, 'cs'],
      ['huile_olive', 3, 'cs'], ['herbes_provence', 1, 'cc'], ['basilic', 10], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'oignon et l\'ail dans 2 c. à soupe d\'huile, ajoutez les tomates en dés et les herbes. Laissez compoter 10 min.',
      'Ajoutez les olives et les câpres, versez dans un plat.',
      'Posez le cabillaud dessus, arrosez du reste d\'huile, salez, poivrez.',
      'Enfournez 12 à 15 min à 200 °C. Parsemez de basilic.'
    ]
  },
  {
    id: 'fish-and-chips', nom: 'Fish and chips', cat: 'Poissons', cuisine: 'Anglaise', emoji: '🍟',
    desc: 'Poisson en pâte à bière croustillante et frites.',
    portions: 4, prep: 20, cuisson: 30, diff: 2,
    ing: [
      ['poisson_blanc', 600, 'g', 'Cabillaud ou églefin'], ['farine', 150], ['biere', 200, 'ml', 'Bière blonde bien froide'], ['levure_chimique', 1, 'cc'],
      ['pomme_de_terre', 1000], ['huile_neutre', 80, 'ml', 'Huile de friture (part absorbée)'], ['citron', 1, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Coupez les pommes de terre en frites épaisses, rincez et séchez-les.',
      'Faites-les frire une première fois 6 min à 160 °C, égouttez.',
      'Pâte : fouettez la farine, la levure, le sel et la bière froide.',
      'Trempez les morceaux de poisson dans la pâte et faites-les frire 5 à 6 min à 180 °C.',
      'Refaites frire les frites 2 min à 180 °C. Servez avec du citron.'
    ]
  },
  {
    id: 'moules-marinieres', nom: 'Moules marinières', cat: 'Poissons', cuisine: 'Française', emoji: '🦪',
    desc: 'Moules ouvertes au vin blanc, échalotes et persil.',
    portions: 4, prep: 20, cuisson: 10, diff: 1,
    ing: [
      ['moules', 2000], ['echalote', 3, 'pc'], ['vin_blanc', 200, 'ml'], ['beurre', 30], ['persil', 20], ['ail', 2, 'pc'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Grattez et lavez les moules, jetez celles qui sont ouvertes ou cassées.',
      'Faites fondre les échalotes et l\'ail dans le beurre dans un grand faitout.',
      'Ajoutez le vin, portez à ébullition, puis les moules. Couvrez et cuisez 5 à 7 min en remuant jusqu\'à ce qu\'elles s\'ouvrent.',
      'Parsemez de persil et poivrez. Servez aussitôt avec le jus.'
    ],
    astuce: 'Avec des frites, c\'est le célèbre « moules-frites ».'
  },
  {
    id: 'gambas-ail', nom: 'Crevettes à l\'ail (gambas al ajillo)', cat: 'Poissons', cuisine: 'Espagnole', emoji: '🦐',
    desc: 'Crevettes sautées dans l\'huile d\'olive à l\'ail et au piment.',
    portions: 4, prep: 10, cuisson: 5, diff: 1,
    ing: [
      ['crevettes', 600], ['ail', 6, 'pc'], ['huile_olive', 4, 'cs'], ['persil', 15], ['piment', 1, 'pc'], ['citron', 1, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Chauffez l\'huile avec l\'ail émincé et le piment à feu doux 2 min.',
      'Montez le feu, ajoutez les crevettes et faites-les sauter 2 à 3 min jusqu\'à ce qu\'elles soient roses.',
      'Salez, ajoutez le persil et un trait de citron.'
    ]
  },
  {
    id: 'paella', nom: 'Paella', cat: 'Poissons', cuisine: 'Espagnole', emoji: '🥘',
    desc: 'Riz safrané au poulet, crevettes, moules et calamars.',
    portions: 6, prep: 30, cuisson: 45, diff: 3,
    ing: [
      ['riz_blanc', 450, 'g', 'Riz rond (bomba)'], ['poulet_cuisse', 500], ['crevettes', 300], ['moules', 600], ['calamar', 300],
      ['poivron', 1, 'pc'], ['petits_pois', 150], ['tomate', 2, 'pc'], ['oignon', 1, 'pc'], ['ail', 3, 'pc'], ['safran', 1, 'pc'],
      ['paprika', 1, 'cc'], ['bouillon', 1200, 'ml'], ['huile_olive', 4, 'cs'], ['citron', 1, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites dorer le poulet en morceaux dans l\'huile dans une grande poêle à paella. Ajoutez les calamars 3 min.',
      'Ajoutez l\'oignon, l\'ail, le poivron, puis les tomates râpées et le paprika. Laissez compoter 5 min.',
      'Ajoutez le riz, mélangez 1 min, puis versez le bouillon chaud safrané. Ne remuez plus.',
      'Laissez cuire 15 min à feu moyen, puis disposez crevettes, moules et petits pois sur le dessus.',
      'Poursuivez 8 à 10 min. Couvrez d\'un torchon 5 min hors du feu. Servez avec des quartiers de citron.'
    ]
  },
  {
    id: 'thon-sesame', nom: 'Thon mi-cuit au sésame', cat: 'Poissons', cuisine: 'Japonaise', emoji: '🍣',
    desc: 'Pavés de thon en croûte de sésame, saisis 1 minute par face.',
    portions: 4, prep: 10, cuisson: 5, diff: 2,
    ing: [
      ['thon_frais', 600], ['graines_sesame', 40], ['sauce_soja', 3, 'cs'], ['huile_sesame', 1, 'cs'], ['gingembre', 10],
      ['citron_vert', 1, 'pc'], ['roquette', 100]
    ],
    etapes: [
      'Marinez le thon 10 min dans 2 c. à soupe de sauce soja et le gingembre râpé.',
      'Roulez les pavés dans les graines de sésame.',
      'Saisissez-les 1 min par face dans une poêle très chaude avec l\'huile de sésame.',
      'Tranchez et servez sur la roquette avec le reste de sauce soja et le citron vert.'
    ]
  },
  {
    id: 'poke-bowl-saumon', nom: 'Poke bowl au saumon', cat: 'Poissons', cuisine: 'Hawaïenne', emoji: '🥗',
    desc: 'Riz vinaigré, saumon cru mariné, avocat, edamame, mangue.',
    portions: 4, prep: 25, cuisson: 15, diff: 1,
    ing: [
      ['riz_blanc', 300, 'g', 'Riz à sushi'], ['saumon', 400, 'g', 'Saumon extra-frais'], ['avocat', 2, 'pc'], ['edamame', 150], ['concombre', 1, 'pc'],
      ['mangue', 1, 'pc'], ['sauce_soja', 4, 'cs'], ['vinaigre_riz', 2, 'cs'], ['huile_sesame', 1, 'cs'], ['graines_sesame', 1, 'cs'], ['oignon_nouveau', 2, 'pc']
    ],
    etapes: [
      'Faites cuire le riz, assaisonnez-le avec le vinaigre de riz et laissez tiédir.',
      'Coupez le saumon en cubes et marinez-le avec la sauce soja et l\'huile de sésame 10 min.',
      'Coupez l\'avocat, le concombre et la mangue en dés.',
      'Composez les bols : riz, saumon, légumes, edamame. Parsemez de sésame et d\'oignon nouveau.'
    ]
  },
  {
    id: 'curry-crevettes', nom: 'Curry de crevettes au lait de coco', cat: 'Poissons', cuisine: 'Thaïlandaise', emoji: '🍤',
    desc: 'Curry rouge thaï rapide aux crevettes et poivron.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [
      ['crevettes', 500], ['lait_coco', 400, 'ml'], ['pate_curry', 2, 'cs', 'Pâte de curry rouge'], ['poivron', 1, 'pc'], ['oignon', 1, 'pc'],
      ['nuoc_mam', 1, 'cs'], ['citron_vert', 1, 'pc'], ['coriandre', 10], ['huile_neutre', 1, 'cs'], ['riz_blanc', 280, 'g', 'Riz thaï']
    ],
    etapes: [
      'Faites revenir l\'oignon et le poivron émincés dans l\'huile 3 min.',
      'Ajoutez la pâte de curry 1 min, puis le lait de coco. Laissez frémir 5 min.',
      'Ajoutez les crevettes et cuisez 3 à 4 min. Assaisonnez avec le nuoc-mâm et le citron vert.',
      'Servez avec le riz et la coriandre.'
    ]
  },
  {
    id: 'tacos-poisson', nom: 'Tacos de poisson', cat: 'Poissons', cuisine: 'Mexicaine', emoji: '🌮',
    desc: 'Poisson épicé grillé, chou croquant et sauce yaourt-citron vert.',
    portions: 4, prep: 20, cuisson: 10, diff: 1,
    ing: [
      ['poisson_blanc', 500], ['tortilla', 240, 'g', 'Petites tortillas (8)'], ['chou_rouge', 150], ['avocat', 1, 'pc'], ['yaourt_grec', 100],
      ['citron_vert', 2, 'pc'], ['coriandre', 10], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['huile_neutre', 2, 'cs'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Assaisonnez le poisson avec les épices, le sel et le jus d\'un citron vert.',
      'Faites-le cuire 3 min par face dans l\'huile, émiettez-le en gros morceaux.',
      'Mélangez le yaourt avec le jus du second citron vert.',
      'Garnissez les tortillas chaudes de chou émincé, poisson, avocat, sauce et coriandre.'
    ]
  },
  {
    id: 'saint-jacques-poireaux', nom: 'Saint-Jacques sur fondue de poireaux', cat: 'Poissons', cuisine: 'Française', emoji: '🐚',
    desc: 'Noix de Saint-Jacques snackées, poireaux fondants à la crème.',
    portions: 4, prep: 15, cuisson: 25, diff: 2,
    ing: [
      ['st_jacques', 16, 'pc'], ['poireau', 3, 'pc'], ['beurre', 40], ['creme_15', 100, 'ml'], ['citron', 0.5, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Émincez les poireaux et faites-les fondre dans 30 g de beurre 20 min à feu doux. Ajoutez la crème, salez.',
      'Séchez les noix de Saint-Jacques avec du papier absorbant.',
      'Saisissez-les dans le reste de beurre bien chaud, 1 min 30 par face.',
      'Servez sur la fondue de poireaux avec un trait de citron.'
    ]
  },
  {
    id: 'dorade-four', nom: 'Bar au four, fenouil et citron', cat: 'Poissons', cuisine: 'Méditerranéenne', emoji: '🐟',
    desc: 'Filets de bar rôtis sur un lit de fenouil.',
    portions: 4, prep: 15, cuisson: 30, diff: 1,
    ing: [
      ['bar', 600], ['fenouil', 2, 'pc'], ['citron', 1, 'pc'], ['huile_olive', 3, 'cs'], ['thym', 2, 'pc'], ['ail', 2, 'pc'],
      ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Émincez le fenouil, mélangez-le avec 2 c. à soupe d\'huile, l\'ail et le thym. Rôtissez 15 min à 200 °C.',
      'Posez les filets de poisson dessus avec des rondelles de citron, arrosez du reste d\'huile.',
      'Enfournez 12 à 15 min.'
    ]
  },
  {
    id: 'makis-saumon', nom: 'Makis saumon-avocat', cat: 'Poissons', cuisine: 'Japonaise', emoji: '🍣',
    desc: 'Rouleaux de riz vinaigré, algue nori, saumon et avocat (environ 32 pièces).',
    portions: 4, prep: 45, cuisson: 15, diff: 3,
    ing: [
      ['riz_blanc', 300, 'g', 'Riz à sushi'], ['vinaigre_riz', 4, 'cs'], ['sucre', 1, 'cs'], ['sel', 1, 'cc'], ['nori', 4, 'pc'],
      ['saumon', 200, 'g', 'Saumon extra-frais'], ['avocat', 1, 'pc'], ['concombre', 0.5, 'pc'], ['sauce_soja', 4, 'cs']
    ],
    etapes: [
      'Rincez le riz jusqu\'à ce que l\'eau soit claire, faites-le cuire. Assaisonnez-le avec le vinaigre, le sucre et le sel dissous. Laissez refroidir.',
      'Coupez le saumon, l\'avocat et le concombre en bâtonnets.',
      'Sur une natte, posez une feuille de nori, étalez une fine couche de riz en laissant 2 cm en haut.',
      'Disposez la garniture, roulez en serrant. Coupez en 8 avec un couteau mouillé.',
      'Servez avec la sauce soja.'
    ]
  },

  // ================= VÉGÉTARIEN =================
  {
    id: 'dahl-lentilles', nom: 'Dahl de lentilles corail', cat: 'Végétarien', cuisine: 'Indienne', emoji: '🍛',
    desc: 'Lentilles fondantes au lait de coco, épinards et épices. 100 % végétal.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [
      ['lentilles_corail', 300], ['lait_coco', 400, 'ml'], ['tomates_concassees', 400], ['oignon', 1, 'pc'], ['ail', 3, 'pc'], ['gingembre', 15],
      ['curry', 1, 'cs'], ['cumin', 1, 'cc'], ['curcuma', 1, 'cc'], ['huile_neutre', 2, 'cs'], ['epinards', 150], ['coriandre', 10],
      ['riz_blanc', 280, 'g', 'Riz basmati'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'oignon, l\'ail et le gingembre dans l\'huile, ajoutez les épices 1 min.',
      'Ajoutez les lentilles rincées, les tomates, le lait de coco et 40 cl d\'eau.',
      'Laissez mijoter 20 min en remuant. Ajoutez les épinards en fin de cuisson.',
      'Servez avec le riz et la coriandre.'
    ]
  },
  {
    id: 'chili-sin-carne', nom: 'Chili sin carne', cat: 'Végétarien', cuisine: 'Tex-Mex', emoji: '🌶️',
    desc: 'Le chili végétarien aux haricots, maïs et épices.',
    portions: 4, prep: 15, cuisson: 35, diff: 1,
    ing: [
      ['haricots_rouges', 500], ['haricots_noirs', 250], ['mais', 150], ['tomates_concassees', 800], ['oignon', 1, 'pc'], ['poivron', 1, 'pc'],
      ['ail', 2, 'pc'], ['cumin', 2, 'cc'], ['paprika', 2, 'cc'], ['piment_poudre', 0.5, 'cc'], ['huile_olive', 2, 'cs'],
      ['riz_blanc', 280], ['coriandre', 10], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'oignon, l\'ail et le poivron dans l\'huile 5 min. Ajoutez les épices.',
      'Ajoutez les tomates et laissez mijoter 15 min.',
      'Ajoutez les haricots et le maïs égouttés, poursuivez 15 min.',
      'Servez avec le riz et la coriandre.'
    ]
  },
  {
    id: 'curry-pois-chiches', nom: 'Curry de pois chiches et épinards', cat: 'Végétarien', cuisine: 'Indienne', emoji: '🥘',
    desc: 'Chana masala crémeux, prêt en 25 minutes.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [
      ['pois_chiches', 500], ['epinards', 200], ['lait_coco', 400, 'ml'], ['tomates_concassees', 400], ['oignon', 1, 'pc'], ['ail', 2, 'pc'],
      ['gingembre', 15], ['garam_masala', 2, 'cc'], ['curcuma', 1, 'cc'], ['huile_neutre', 1, 'cs'], ['riz_blanc', 280], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'oignon, l\'ail et le gingembre dans l\'huile, ajoutez les épices.',
      'Ajoutez les tomates, le lait de coco et les pois chiches égouttés. Laissez mijoter 15 min.',
      'Ajoutez les épinards et laissez-les tomber 2 min. Servez avec le riz.'
    ]
  },
  {
    id: 'ratatouille', nom: 'Ratatouille', cat: 'Végétarien', cuisine: 'Provençale', emoji: '🍆',
    desc: 'Légumes du soleil mijotés à l\'huile d\'olive.',
    portions: 6, prep: 30, cuisson: 60, diff: 1,
    ing: [
      ['aubergine', 2, 'pc'], ['courgette', 3, 'pc'], ['poivron', 3, 'pc'], ['tomate', 6, 'pc'], ['oignon', 2, 'pc'], ['ail', 4, 'pc'],
      ['huile_olive', 6, 'cs'], ['herbes_provence', 1, 'cc'], ['thym', 2, 'pc'], ['laurier', 1, 'pc'], ['basilic', 10], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Coupez tous les légumes en cubes.',
      'Faites revenir séparément dans l\'huile les aubergines, les courgettes et les poivrons pour bien les colorer.',
      'Faites fondre les oignons et l\'ail, ajoutez les tomates, le thym, le laurier et les herbes.',
      'Réunissez tous les légumes et laissez mijoter 40 min à feu doux. Ajoutez le basilic au moment de servir.'
    ],
    astuce: 'Encore meilleure le lendemain, chaude ou froide.'
  },
  {
    id: 'falafels', nom: 'Falafels et sauce tahini', cat: 'Végétarien', cuisine: 'Libanaise', emoji: '🧆',
    desc: 'Boulettes de pois chiches aux herbes, croustillantes, en pita.',
    portions: 4, prep: 30, cuisson: 15, diff: 2,
    ing: [
      ['pois_chiches_secs', 250, 'g', 'Pois chiches secs (trempés 12 h)'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['persil', 30], ['coriandre', 30],
      ['cumin', 2, 'cc'], ['farine', 2, 'cs'], ['levure_chimique', 1, 'cc'], ['huile_neutre', 60, 'ml', 'Huile de friture (part absorbée)'],
      ['pain_pita', 4, 'pc'], ['tomate', 2, 'pc'], ['salade', 80], ['tahini', 50], ['citron', 1, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Égouttez les pois chiches trempés (non cuits !). Mixez-les avec l\'oignon, l\'ail, les herbes, le cumin et le sel en une semoule fine.',
      'Ajoutez la farine et la levure, laissez reposer 30 min au frais.',
      'Formez des boulettes et faites-les frire 3 à 4 min à 175 °C.',
      'Sauce : tahini, jus de citron, sel et eau froide jusqu\'à consistance crémeuse.',
      'Servez dans les pitas avec les crudités et la sauce.'
    ]
  },
  {
    id: 'gratin-courgettes', nom: 'Gratin de courgettes', cat: 'Végétarien', cuisine: 'Française', emoji: '🥒',
    desc: 'Courgettes fondantes, appareil à la crème et fromage gratiné.',
    portions: 4, prep: 15, cuisson: 40, diff: 1,
    ing: [
      ['courgette', 1000], ['oeuf', 3, 'pc'], ['creme_15', 200, 'ml'], ['emmental', 100], ['ail', 1, 'pc'], ['huile_olive', 1, 'cs'],
      ['muscade', 1, 'pincee'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Coupez les courgettes en rondelles et faites-les revenir 10 min dans l\'huile avec l\'ail pour qu\'elles rendent leur eau.',
      'Battez les œufs avec la crème, la muscade, la moitié du fromage, sel et poivre.',
      'Disposez les courgettes dans un plat, versez l\'appareil, parsemez du reste de fromage.',
      'Enfournez 30 min à 180 °C.'
    ]
  },
  {
    id: 'tortilla-espagnole', nom: 'Tortilla espagnole', cat: 'Végétarien', cuisine: 'Espagnole', emoji: '🍳',
    desc: 'Omelette épaisse aux pommes de terre et oignons confits.',
    portions: 4, prep: 15, cuisson: 35, diff: 2,
    ing: [
      ['oeuf', 8, 'pc'], ['pomme_de_terre', 600], ['oignon', 1, 'pc'], ['huile_olive', 5, 'cs'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Coupez les pommes de terre en fines lamelles et l\'oignon en fines tranches.',
      'Faites-les confire 20 min à feu doux dans l\'huile, sans les colorer. Égouttez.',
      'Battez les œufs avec le sel, ajoutez les pommes de terre, laissez reposer 5 min.',
      'Versez dans une poêle huilée, cuisez 5 min à feu moyen, retournez à l\'aide d\'une assiette et cuisez encore 3 min.'
    ]
  },
  {
    id: 'shakshuka', nom: 'Shakshuka', cat: 'Végétarien', cuisine: 'Moyen-Orient', emoji: '🍳',
    desc: 'Œufs pochés dans une sauce tomate-poivron épicée, feta et herbes.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [
      ['oeuf', 6, 'pc'], ['tomates_concassees', 800], ['poivron', 2, 'pc'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['cumin', 1, 'cc'],
      ['paprika', 1, 'cc'], ['piment_poudre', 1, 'pincee'], ['huile_olive', 2, 'cs'], ['feta', 80], ['coriandre', 10], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'oignon, l\'ail et les poivrons en lanières dans l\'huile 8 min.',
      'Ajoutez les épices puis les tomates, laissez mijoter 10 min.',
      'Creusez 6 puits et cassez-y les œufs. Couvrez et cuisez 6 à 8 min.',
      'Parsemez de feta et de coriandre. Servez avec du pain.'
    ]
  },
  {
    id: 'buddha-bowl', nom: 'Buddha bowl patate douce-pois chiches', cat: 'Végétarien', cuisine: 'Fusion', emoji: '🥗',
    desc: 'Bol complet : quinoa, légumes rôtis, pois chiches croustillants et sauce tahini.',
    portions: 4, prep: 20, cuisson: 30, diff: 1,
    ing: [
      ['quinoa', 200], ['patate_douce', 2, 'pc'], ['pois_chiches', 400], ['avocat', 2, 'pc'], ['chou_rouge', 150], ['carotte', 2, 'pc'],
      ['huile_olive', 2, 'cs'], ['paprika', 1, 'cc'], ['tahini', 4, 'cs'], ['citron', 1, 'pc'], ['sauce_soja', 1, 'cs'], ['graines_sesame', 1, 'cs'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Coupez les patates douces en cubes, mélangez-les avec les pois chiches égouttés, l\'huile, le paprika et le sel. Rôtissez 30 min à 200 °C.',
      'Faites cuire le quinoa 12 min.',
      'Sauce : tahini, jus de citron, sauce soja et un peu d\'eau.',
      'Composez les bols avec le quinoa, les légumes rôtis, le chou émincé, la carotte râpée et l\'avocat. Nappez de sauce, parsemez de sésame.'
    ]
  },
  {
    id: 'tofu-brocoli', nom: 'Tofu sauté au brocoli', cat: 'Végétarien', cuisine: 'Chinoise', emoji: '🥦',
    desc: 'Tofu doré et croustillant, brocoli et sauce soja-gingembre.',
    portions: 4, prep: 15, cuisson: 15, diff: 1,
    ing: [
      ['tofu', 400], ['brocoli', 1, 'pc'], ['sauce_soja', 4, 'cs'], ['maizena', 2, 'cs'], ['ail', 2, 'pc'], ['gingembre', 10],
      ['huile_neutre', 2, 'cs'], ['huile_sesame', 1, 'cs'], ['sucre', 1, 'cc'], ['graines_sesame', 1, 'cs'], ['riz_blanc', 280]
    ],
    etapes: [
      'Pressez le tofu dans un torchon, coupez-le en cubes et enrobez-les de maïzena.',
      'Faites-les dorer dans l\'huile neutre sur toutes les faces. Réservez.',
      'Faites sauter le brocoli en fleurettes 5 min avec l\'ail et le gingembre et un fond d\'eau.',
      'Ajoutez le tofu, la sauce soja, le sucre et l\'huile de sésame. Parsemez de sésame et servez avec le riz.'
    ]
  },
  {
    id: 'aubergines-parmigiana', nom: 'Aubergines à la parmigiana', cat: 'Végétarien', cuisine: 'Italienne', emoji: '🍆',
    desc: 'Couches d\'aubergines, sauce tomate, mozzarella et parmesan.',
    portions: 6, prep: 30, cuisson: 60, diff: 2,
    ing: [
      ['aubergine', 4, 'pc'], ['coulis_tomate', 700], ['mozzarella', 2, 'pc'], ['parmesan', 80], ['huile_olive', 6, 'cs'], ['basilic', 15],
      ['ail', 2, 'pc'], ['oignon', 1, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Tranchez les aubergines dans la longueur, badigeonnez-les d\'huile et rôtissez-les 20 min à 200 °C.',
      'Faites revenir l\'oignon et l\'ail, ajoutez le coulis et laissez mijoter 15 min.',
      'Alternez dans un plat : sauce, aubergines, mozzarella, parmesan, basilic. Terminez par sauce et parmesan.',
      'Enfournez 30 min à 180 °C.'
    ]
  },
  {
    id: 'burger-vege', nom: 'Burger végétarien aux haricots noirs', cat: 'Burgers & sandwichs', cuisine: 'Américaine', emoji: '🍔',
    desc: 'Galette de haricots noirs épicée, cheddar et crudités.',
    portions: 4, prep: 20, cuisson: 15, diff: 1,
    ing: [
      ['haricots_noirs', 400], ['flocons_avoine', 60], ['oignon', 1, 'pc'], ['ail', 1, 'pc'], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'],
      ['oeuf', 1, 'pc'], ['pain_burger', 4, 'pc'], ['cheddar', 4, 'pc'], ['tomate', 1, 'pc'], ['salade', 50], ['mayonnaise', 2, 'cs'],
      ['huile_neutre', 1, 'cs'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Écrasez les haricots égouttés à la fourchette, ajoutez l\'oignon et l\'ail hachés, les flocons, les épices, l\'œuf et le sel.',
      'Formez 4 galettes et laissez-les raffermir 15 min au frais.',
      'Faites-les dorer 4 min par face dans l\'huile, posez le cheddar la dernière minute.',
      'Montez les burgers avec la mayonnaise, la salade et la tomate.'
    ]
  },
  {
    id: 'gratin-chou-fleur', nom: 'Gratin de chou-fleur', cat: 'Végétarien', cuisine: 'Française', emoji: '🥦',
    desc: 'Chou-fleur tendre sous une béchamel gratinée au comté.',
    portions: 4, prep: 15, cuisson: 35, diff: 1,
    ing: [
      ['chou_fleur', 1, 'pc'], ['lait_demi', 500, 'ml'], ['beurre', 40], ['farine', 40], ['comte', 100], ['muscade', 1, 'pincee'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites cuire le chou-fleur en fleurettes 10 min à l\'eau salée. Égouttez.',
      'Béchamel : roux beurre-farine, ajoutez le lait en fouettant, épaississez. Ajoutez la muscade et la moitié du fromage.',
      'Mettez le chou-fleur dans un plat, nappez de béchamel, parsemez du reste de fromage.',
      'Gratinez 20 min à 200 °C.'
    ]
  },
  {
    id: 'lasagnes-epinards-ricotta', nom: 'Lasagnes épinards-ricotta', cat: 'Végétarien', cuisine: 'Italienne', emoji: '🥬',
    desc: 'Lasagnes végétariennes généreuses et fondantes.',
    portions: 6, prep: 25, cuisson: 45, diff: 2,
    ing: [
      ['lasagnes', 250], ['epinards', 600], ['ricotta', 500], ['coulis_tomate', 700], ['mozzarella', 2, 'pc'], ['parmesan', 60],
      ['oeuf', 1, 'pc'], ['ail', 2, 'pc'], ['huile_olive', 1, 'cs'], ['muscade', 1, 'pincee'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites tomber les épinards avec l\'ail dans l\'huile, pressez-les pour retirer l\'eau.',
      'Mélangez-les avec la ricotta, l\'œuf, la muscade, la moitié du parmesan, sel et poivre.',
      'Dans un plat : coulis, lasagnes, mélange ricotta, coulis, mozzarella. Répétez 3 fois.',
      'Terminez par coulis, mozzarella et parmesan. Enfournez 40 min à 180 °C.'
    ]
  },
  {
    id: 'curry-vert-legumes', nom: 'Curry vert de légumes au tofu', cat: 'Végétarien', cuisine: 'Thaïlandaise', emoji: '🥥',
    desc: 'Curry thaï parfumé au basilic, légumes croquants et tofu.',
    portions: 4, prep: 15, cuisson: 15, diff: 1,
    ing: [
      ['lait_coco', 400, 'ml'], ['pate_curry', 2, 'cs', 'Pâte de curry vert'], ['tofu', 300], ['courgette', 1, 'pc'], ['poivron', 1, 'pc'],
      ['haricots_verts', 150], ['sauce_soja', 2, 'cs'], ['sucre', 1, 'cc'], ['citron_vert', 1, 'pc'], ['basilic', 15, 'g', 'Basilic thaï'],
      ['huile_neutre', 1, 'cs'], ['riz_blanc', 280, 'g', 'Riz thaï']
    ],
    etapes: [
      'Faites revenir la pâte de curry dans l\'huile 1 min, ajoutez la moitié du lait de coco et laissez frémir 2 min.',
      'Ajoutez les légumes coupés, le tofu en cubes et le reste du lait de coco. Cuisez 8 min.',
      'Assaisonnez avec la sauce soja, le sucre et le citron vert. Ajoutez le basilic.',
      'Servez avec le riz.'
    ],
    astuce: 'Pour une version 100 % végétale, vérifiez que la pâte de curry ne contient pas de crevettes.'
  },
  {
    id: 'poivrons-farcis-vege', nom: 'Poivrons farcis au quinoa et feta', cat: 'Végétarien', cuisine: 'Méditerranéenne', emoji: '🫑',
    desc: 'Poivrons rôtis garnis de quinoa, tomates, olives et feta.',
    portions: 4, prep: 20, cuisson: 40, diff: 1,
    ing: [
      ['poivron', 4, 'pc'], ['quinoa', 150], ['tomates_concassees', 200], ['feta', 150], ['olives', 50], ['oignon', 1, 'pc'],
      ['huile_olive', 2, 'cs'], ['origan', 1, 'cc'], ['persil', 10], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites cuire le quinoa 12 min.',
      'Faites revenir l\'oignon dans l\'huile, ajoutez les tomates et l\'origan 5 min.',
      'Mélangez avec le quinoa, les olives, la feta émiettée et le persil.',
      'Coupez le chapeau des poivrons, videz-les, farcissez-les. Enfournez 30 min à 190 °C.'
    ]
  },

  // ================= PÂTES & RIZ =================
  {
    id: 'spaghetti-bolognaise', nom: 'Spaghetti bolognaise', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🍝',
    desc: 'La sauce bolognaise mijotée et ses spaghetti.',
    portions: 4, prep: 15, cuisson: 60, diff: 1,
    ing: [
      ['pates', 400, 'g', 'Spaghetti'], ['boeuf_hache_15', 400], ['tomates_concassees', 400], ['concentre_tomate', 1, 'cs'], ['oignon', 1, 'pc'],
      ['carotte', 1, 'pc'], ['celeri', 1, 'pc'], ['ail', 2, 'pc'], ['vin_rouge', 100, 'ml'], ['huile_olive', 2, 'cs'], ['parmesan', 40],
      ['laurier', 1, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Hachez finement oignon, carotte, céleri et ail. Faites-les revenir dans l\'huile 8 min.',
      'Ajoutez la viande et faites-la dorer. Déglacez au vin rouge.',
      'Ajoutez les tomates, le concentré, le laurier et un verre d\'eau. Laissez mijoter 45 min à feu doux.',
      'Faites cuire les spaghetti al dente, mélangez-les à la sauce. Servez avec le parmesan.'
    ]
  },
  {
    id: 'spaghetti-carbonara', nom: 'Spaghetti carbonara', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🥓',
    desc: 'La vraie : œufs, pecorino, guanciale et poivre. Sans crème !',
    portions: 4, prep: 10, cuisson: 15, diff: 2,
    ing: [
      ['pates', 400, 'g', 'Spaghetti'], ['lardons', 200, 'g', 'Guanciale ou pancetta'], ['jaune_oeuf', 4, 'pc'], ['oeuf', 1, 'pc'],
      ['parmesan', 80, 'g', 'Pecorino ou parmesan'], ['poivre', 1, 'cc']
    ],
    etapes: [
      'Faites dorer le guanciale en lardons à sec jusqu\'à ce qu\'il soit croustillant.',
      'Battez les jaunes, l\'œuf, le fromage râpé et beaucoup de poivre.',
      'Faites cuire les pâtes al dente, gardez un verre d\'eau de cuisson.',
      'Hors du feu, mélangez les pâtes avec le guanciale, puis l\'appareil aux œufs et un peu d\'eau de cuisson pour obtenir une sauce crémeuse. Servez aussitôt.'
    ],
    astuce: 'Le secret : mélanger hors du feu pour que les œufs nappent sans cuire en omelette.'
  },
  {
    id: 'lasagnes-bolognaise', nom: 'Lasagnes à la bolognaise', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🍝',
    desc: 'Bolognaise, béchamel et fromage gratiné, couche après couche.',
    portions: 6, prep: 40, cuisson: 90, diff: 2,
    ing: [
      ['lasagnes', 300], ['boeuf_hache_15', 600], ['tomates_concassees', 800], ['oignon', 1, 'pc'], ['carotte', 1, 'pc'], ['ail', 2, 'pc'],
      ['huile_olive', 2, 'cs'], ['beurre', 50], ['farine', 50], ['lait_demi', 700, 'ml'], ['parmesan', 60], ['emmental', 80],
      ['muscade', 1, 'pincee'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Bolognaise : faites revenir oignon, carotte et ail dans l\'huile, ajoutez la viande puis les tomates. Mijotez 40 min.',
      'Béchamel : roux beurre-farine, ajoutez le lait en fouettant, épaississez, ajoutez la muscade.',
      'Dans un plat : béchamel, lasagnes, bolognaise, béchamel, parmesan. Répétez jusqu\'en haut.',
      'Terminez par béchamel et emmental. Enfournez 40 min à 180 °C. Laissez reposer 10 min.'
    ]
  },
  {
    id: 'pates-pesto', nom: 'Pâtes au pesto', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🌿',
    desc: 'Rapide et parfumé, avec des tomates cerises et des pignons.',
    portions: 4, prep: 5, cuisson: 12, diff: 1,
    ing: [
      ['pates', 400, 'g', 'Trofie ou linguine'], ['pesto', 120], ['parmesan', 30], ['pignons', 20], ['tomates_cerises', 200], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les pâtes al dente, gardez un peu d\'eau de cuisson.',
      'Faites griller les pignons à sec.',
      'Mélangez les pâtes avec le pesto et un peu d\'eau de cuisson.',
      'Ajoutez les tomates coupées, les pignons et le parmesan.'
    ]
  },
  {
    id: 'penne-arrabbiata', nom: 'Penne all\'arrabbiata', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🌶️',
    desc: 'Sauce tomate pimentée à l\'ail, simple et efficace.',
    portions: 4, prep: 5, cuisson: 20, diff: 1,
    ing: [
      ['pates', 400, 'g', 'Penne'], ['coulis_tomate', 600], ['ail', 3, 'pc'], ['piment', 1, 'pc'], ['huile_olive', 3, 'cs'], ['persil', 10],
      ['parmesan', 30], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'ail et le piment émincés dans l\'huile 1 min.',
      'Ajoutez le coulis, salez et laissez mijoter 15 min.',
      'Faites cuire les penne al dente, mélangez-les à la sauce. Parsemez de persil et de parmesan.'
    ]
  },
  {
    id: 'tagliatelles-saumon', nom: 'Tagliatelles au saumon', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🐟',
    desc: 'Saumon, crème légère, citron et aneth.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [
      ['pates', 400, 'g', 'Tagliatelles'], ['saumon', 300], ['creme_15', 250, 'ml'], ['citron', 1, 'pc'], ['echalote', 1, 'pc'], ['aneth', 5],
      ['beurre', 10], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les tagliatelles al dente.',
      'Faites fondre l\'échalote dans le beurre, ajoutez le saumon en dés et faites-le dorer 3 min.',
      'Ajoutez la crème, le zeste et le jus de citron, laissez réduire 3 min.',
      'Mélangez avec les pâtes et l\'aneth.'
    ]
  },
  {
    id: 'pates-feta-four', nom: 'Pâtes à la feta au four', cat: 'Pâtes & riz', cuisine: 'Grecque', emoji: '🧀',
    desc: 'La recette virale : feta et tomates cerises rôties, mélangées aux pâtes.',
    portions: 4, prep: 5, cuisson: 35, diff: 1,
    ing: [
      ['pates', 400], ['feta', 200], ['tomates_cerises', 500], ['huile_olive', 4, 'cs'], ['ail', 3, 'pc'], ['basilic', 10], ['origan', 1, 'cc'],
      ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Mettez les tomates cerises et l\'ail dans un plat, la feta entière au milieu. Arrosez d\'huile, ajoutez l\'origan, sel et poivre.',
      'Enfournez 30 min à 200 °C.',
      'Faites cuire les pâtes, gardez un peu d\'eau de cuisson.',
      'Écrasez la feta et les tomates, mélangez avec les pâtes et un peu d\'eau de cuisson. Ajoutez le basilic.'
    ]
  },
  {
    id: 'mac-and-cheese', nom: 'Mac and cheese', cat: 'Pâtes & riz', cuisine: 'Américaine', emoji: '🧀',
    desc: 'Macaronis dans une sauce au cheddar, gratinés.',
    portions: 4, prep: 10, cuisson: 30, diff: 1,
    ing: [
      ['pates', 350, 'g', 'Macaronis'], ['cheddar', 200], ['lait_demi', 500, 'ml'], ['beurre', 40], ['farine', 40], ['moutarde', 1, 'cc'],
      ['chapelure', 30], ['paprika', 1, 'pincee'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les pâtes 2 min de moins que le temps indiqué.',
      'Béchamel : roux beurre-farine, ajoutez le lait en fouettant. Hors du feu, ajoutez 150 g de cheddar râpé et la moutarde.',
      'Mélangez avec les pâtes, versez dans un plat. Parsemez du reste de cheddar, de chapelure et de paprika.',
      'Gratinez 15 min à 200 °C.'
    ]
  },
  {
    id: 'one-pot-pasta', nom: 'One pot pasta tomate-épinards', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🍲',
    desc: 'Tout cuit dans la même casserole en 15 minutes.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [
      ['pates', 400, 'g', 'Linguine'], ['tomates_cerises', 300], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['basilic', 10], ['epinards', 100],
      ['bouillon', 1000, 'ml'], ['huile_olive', 2, 'cs'], ['parmesan', 40], ['sel', 0, 'qs']
    ],
    etapes: [
      'Mettez dans une grande casserole les pâtes crues, les tomates coupées, l\'oignon émincé, l\'ail, le basilic et l\'huile.',
      'Versez le bouillon et portez à ébullition.',
      'Laissez cuire 12 min en remuant souvent, jusqu\'à ce que le liquide soit presque absorbé.',
      'Ajoutez les épinards et le parmesan, mélangez 1 min.'
    ]
  },
  {
    id: 'risotto-champignons', nom: 'Risotto aux champignons', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🍄',
    desc: 'Riz crémeux, champignons dorés et parmesan.',
    portions: 4, prep: 10, cuisson: 30, diff: 2,
    ing: [
      ['riz_arborio', 320], ['champignons', 400], ['echalote', 2, 'pc'], ['vin_blanc', 150, 'ml'], ['bouillon', 1200, 'ml'], ['parmesan', 60],
      ['beurre', 40], ['huile_olive', 1, 'cs'], ['persil', 10], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites dorer les champignons émincés dans la moitié du beurre, réservez.',
      'Faites revenir l\'échalote dans l\'huile, ajoutez le riz et nacrez-le 2 min.',
      'Déglacez au vin blanc. Ajoutez le bouillon chaud louche par louche en remuant, en attendant qu\'il soit absorbé (18 min).',
      'Hors du feu, ajoutez les champignons, le reste du beurre et le parmesan. Couvrez 2 min, servez avec le persil.'
    ]
  },
  {
    id: 'gnocchis-gratines', nom: 'Gnocchis gratinés tomate-mozzarella', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🍅',
    desc: 'Gnocchis à la sorrentina : sauce tomate et mozzarella filante.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [
      ['gnocchi', 1000], ['coulis_tomate', 500], ['mozzarella', 1, 'pc'], ['parmesan', 30], ['basilic', 10], ['ail', 1, 'pc'],
      ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'ail dans l\'huile, ajoutez le coulis et laissez mijoter 10 min. Ajoutez le basilic.',
      'Faites cuire les gnocchis jusqu\'à ce qu\'ils remontent à la surface.',
      'Mélangez-les avec la sauce dans un plat, ajoutez la mozzarella en morceaux et le parmesan.',
      'Gratinez 10 min à 220 °C.'
    ]
  },
  {
    id: 'pad-thai', nom: 'Pad thaï aux crevettes', cat: 'Pâtes & riz', cuisine: 'Thaïlandaise', emoji: '🍤',
    desc: 'Nouilles de riz sautées, crevettes, œuf, cacahuètes et citron vert.',
    portions: 4, prep: 20, cuisson: 15, diff: 2,
    ing: [
      ['nouilles_riz', 250], ['crevettes', 300], ['oeuf', 2, 'pc'], ['tofu', 150], ['pousses_soja', 150], ['oignon_nouveau', 3, 'pc'],
      ['cacahuetes', 50], ['citron_vert', 2, 'pc'], ['nuoc_mam', 3, 'cs'], ['cassonade', 2, 'cs'], ['vinaigre_riz', 2, 'cs'],
      ['huile_neutre', 3, 'cs'], ['ail', 2, 'pc'], ['coriandre', 10]
    ],
    etapes: [
      'Faites tremper les nouilles 10 min dans l\'eau tiède.',
      'Sauce : mélangez le nuoc-mâm, la cassonade, le vinaigre et le jus d\'un citron vert.',
      'Dans un wok chaud avec l\'huile, faites sauter l\'ail, le tofu en dés et les crevettes 3 min. Poussez-les sur le côté et brouillez les œufs.',
      'Ajoutez les nouilles égouttées et la sauce, faites sauter 3 min.',
      'Ajoutez les pousses de soja et l\'oignon nouveau. Servez avec les cacahuètes, la coriandre et le citron vert.'
    ]
  },
  {
    id: 'riz-cantonais', nom: 'Riz cantonais', cat: 'Pâtes & riz', cuisine: 'Chinoise', emoji: '🍚',
    desc: 'Riz sauté aux œufs, jambon, crevettes et petits pois.',
    portions: 4, prep: 15, cuisson: 15, diff: 1,
    ing: [
      ['riz_blanc', 300], ['oeuf', 3, 'pc'], ['jambon_blanc', 150], ['petits_pois', 150], ['crevettes', 150], ['oignon_nouveau', 3, 'pc'],
      ['sauce_soja', 3, 'cs'], ['huile_neutre', 3, 'cs']
    ],
    etapes: [
      'Faites cuire le riz la veille idéalement (ou laissez-le bien refroidir).',
      'Faites une omelette fine avec les œufs, coupez-la en lanières.',
      'Dans un wok très chaud avec l\'huile, faites sauter les crevettes et les petits pois 3 min.',
      'Ajoutez le riz, le jambon en dés et la sauce soja, faites sauter 5 min. Ajoutez l\'omelette et l\'oignon nouveau.'
    ]
  },
  {
    id: 'nouilles-sautees-poulet', nom: 'Nouilles sautées au poulet', cat: 'Pâtes & riz', cuisine: 'Chinoise', emoji: '🍜',
    desc: 'Chow mein : nouilles aux œufs, poulet et légumes croquants.',
    portions: 4, prep: 20, cuisson: 15, diff: 1,
    ing: [
      ['nouilles_oeuf', 300], ['poulet_blanc', 400], ['chou', 200], ['carotte', 2, 'pc'], ['poivron', 1, 'pc'], ['oignon', 1, 'pc'],
      ['sauce_soja', 4, 'cs'], ['sauce_huitre', 2, 'cs'], ['huile_sesame', 1, 'cs'], ['huile_neutre', 2, 'cs'], ['ail', 2, 'pc'], ['gingembre', 10]
    ],
    etapes: [
      'Faites cuire les nouilles 3 min, égouttez-les.',
      'Faites sauter le poulet émincé dans l\'huile neutre 5 min, réservez.',
      'Faites sauter les légumes en julienne avec l\'ail et le gingembre 4 min.',
      'Ajoutez les nouilles, le poulet et les sauces, faites sauter 2 min. Terminez par l\'huile de sésame.'
    ]
  },
  {
    id: 'biryani-poulet', nom: 'Biryani au poulet', cat: 'Pâtes & riz', cuisine: 'Indienne', emoji: '🍛',
    desc: 'Riz basmati parfumé cuit avec un poulet mariné aux épices.',
    portions: 6, prep: 30, cuisson: 50, diff: 3,
    ing: [
      ['riz_blanc', 450, 'g', 'Riz basmati'], ['poulet_cuisse', 800], ['yaourt_nature', 2, 'pc'], ['oignon', 3, 'pc'], ['ail', 3, 'pc'], ['gingembre', 20],
      ['garam_masala', 1, 'cs'], ['curcuma', 1, 'cc'], ['cumin', 1, 'cc'], ['piment_poudre', 0.5, 'cc'], ['beurre', 40, 'g', 'Ghee ou beurre'],
      ['coriandre', 15], ['menthe', 10], ['safran', 1, 'pc'], ['raisins_secs', 40], ['amandes', 40], ['sel', 0, 'qs']
    ],
    etapes: [
      'Marinez le poulet en morceaux avec le yaourt, l\'ail, le gingembre, les épices et le sel (1 h).',
      'Faites frire les oignons émincés dans le beurre jusqu\'à ce qu\'ils soient bien dorés. Réservez-en la moitié.',
      'Ajoutez le poulet et sa marinade, cuisez 15 min.',
      'Faites précuire le riz 6 min à l\'eau salée, égouttez-le.',
      'Couvrez le poulet de riz, des herbes, du safran infusé, des oignons frits, des raisins et amandes. Couvrez hermétiquement et cuisez 25 min à feu très doux.'
    ]
  },
  {
    id: 'jambalaya', nom: 'Jambalaya', cat: 'Pâtes & riz', cuisine: 'Cajun', emoji: '🍤',
    desc: 'Riz cajun au poulet, chorizo et crevettes.',
    portions: 6, prep: 20, cuisson: 40, diff: 2,
    ing: [
      ['riz_blanc', 400], ['poulet_cuisse', 500], ['chorizo', 150], ['crevettes', 300], ['poivron', 2, 'pc'], ['oignon', 1, 'pc'],
      ['celeri', 2, 'pc'], ['ail', 3, 'pc'], ['tomates_concassees', 400], ['bouillon', 900, 'ml'], ['paprika', 2, 'cc'],
      ['piment_poudre', 0.5, 'cc'], ['thym', 2, 'pc'], ['huile_neutre', 2, 'cs'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites dorer le poulet en dés et le chorizo en rondelles dans l\'huile. Réservez.',
      'Faites revenir oignon, poivrons, céleri et ail 5 min avec les épices.',
      'Ajoutez le riz, les tomates, le bouillon, le thym, le poulet et le chorizo. Couvrez et cuisez 20 min.',
      'Ajoutez les crevettes et poursuivez 5 min.'
    ]
  },
  {
    id: 'bibimbap', nom: 'Bibimbap', cat: 'Pâtes & riz', cuisine: 'Coréenne', emoji: '🍚',
    desc: 'Bol de riz, bœuf mariné, légumes sautés et œuf au plat.',
    portions: 4, prep: 30, cuisson: 25, diff: 2,
    ing: [
      ['riz_blanc', 300, 'g', 'Riz rond'], ['boeuf_hache_5', 300], ['oeuf', 4, 'pc'], ['epinards', 200], ['carotte', 2, 'pc'], ['courgette', 1, 'pc'],
      ['pousses_soja', 150], ['champignons_shiitake', 100], ['sauce_soja', 3, 'cs'], ['huile_sesame', 2, 'cs'],
      ['sauce_sriracha', 2, 'cs', 'Gochujang ou sriracha'], ['ail', 2, 'pc'], ['sucre', 1, 'cc'], ['graines_sesame', 1, 'cs']
    ],
    etapes: [
      'Faites cuire le riz.',
      'Faites revenir le bœuf avec l\'ail, 2 c. à soupe de sauce soja et le sucre.',
      'Faites sauter séparément chaque légume quelques minutes avec un peu d\'huile de sésame.',
      'Faites cuire les œufs au plat.',
      'Dans chaque bol : riz, légumes en rosace, bœuf, œuf. Servez avec le gochujang et le sésame. Mélangez avant de manger.'
    ]
  },
  {
    id: 'aglio-olio', nom: 'Spaghetti aglio, olio e peperoncino', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🧄',
    desc: 'Ail, huile d\'olive et piment : le plat de minuit italien.',
    portions: 4, prep: 5, cuisson: 12, diff: 1,
    ing: [
      ['pates', 400, 'g', 'Spaghetti'], ['ail', 6, 'pc'], ['huile_olive', 6, 'cs'], ['piment', 1, 'pc'], ['persil', 20], ['parmesan', 30], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les spaghetti al dente, gardez une tasse d\'eau de cuisson.',
      'Faites dorer doucement l\'ail émincé et le piment dans l\'huile, sans brûler.',
      'Ajoutez les pâtes et un peu d\'eau de cuisson, mélangez vivement pour émulsionner.',
      'Ajoutez le persil, servez avec le parmesan.'
    ]
  },
  {
    id: 'pates-poulet-brocoli', nom: 'Pâtes complètes poulet-brocoli', cat: 'Pâtes & riz', cuisine: 'Healthy', emoji: '💪',
    desc: 'Le plat « meal prep » équilibré, riche en protéines.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [
      ['pates_completes', 320], ['poulet_blanc', 500], ['brocoli', 1, 'pc'], ['ail', 2, 'pc'], ['parmesan', 40], ['huile_olive', 2, 'cs'],
      ['citron', 0.5, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les pâtes, ajoutez les fleurettes de brocoli 4 min avant la fin.',
      'Faites dorer le poulet en cubes dans l\'huile avec l\'ail 6 à 8 min.',
      'Mélangez les pâtes et le brocoli égouttés avec le poulet, le jus de citron et le parmesan.'
    ],
    astuce: 'Se conserve 3 jours au frais en boîtes individuelles.'
  },
  {
    id: 'riz-pilaf-poulet', nom: 'Riz au poulet façon one pot', cat: 'Pâtes & riz', cuisine: 'Française', emoji: '🍗',
    desc: 'Poulet, riz et légumes cuits ensemble dans une sauteuse.',
    portions: 4, prep: 10, cuisson: 30, diff: 1,
    ing: [
      ['riz_blanc', 280], ['poulet_blanc', 500], ['oignon', 1, 'pc'], ['carotte', 2, 'pc'], ['petits_pois', 150], ['bouillon', 700, 'ml'],
      ['paprika', 1, 'cc'], ['curcuma', 0.5, 'cc'], ['huile_olive', 2, 'cs'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites dorer le poulet en cubes dans l\'huile avec les épices. Réservez.',
      'Faites revenir l\'oignon et les carottes en dés 5 min, ajoutez le riz et nacrez-le 1 min.',
      'Versez le bouillon, remettez le poulet. Couvrez et cuisez 15 min à feu doux.',
      'Ajoutez les petits pois, poursuivez 5 min.'
    ]
  }
]);
