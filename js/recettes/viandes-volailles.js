/* Viandes, Volailles */
window.RECETTES = (window.RECETTES || []).concat([
  // ================= VIANDES =================
  {
    id: 'boeuf-bourguignon', nom: 'Bœuf bourguignon', cat: 'Viandes', cuisine: 'Française', emoji: '🍷',
    desc: 'Le mijoté bourguignon : bœuf fondant au vin rouge, lardons, champignons et carottes.',
    portions: 6, prep: 30, cuisson: 180, diff: 2,
    ing: [
      ['boeuf_paleron', 1200], ['lardons', 150], ['carotte', 3, 'pc'], ['oignon', 2, 'pc'], ['champignons', 250], ['ail', 2, 'pc'],
      ['vin_rouge', 750, 'ml', 'Vin rouge (bourgogne)'], ['bouillon', 250, 'ml'], ['concentre_tomate', 1, 'cs'], ['farine', 2, 'cs'],
      ['beurre', 20], ['huile_neutre', 2, 'cs'], ['thym', 2, 'pc'], ['laurier', 2, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Coupez la viande en gros cubes de 5 cm. Faites-la dorer en plusieurs fois dans une cocotte avec l\'huile. Réservez.',
      'Faites revenir les lardons, les oignons émincés et les carottes en rondelles 5 min.',
      'Remettez la viande, saupoudrez de farine et mélangez 2 min. Ajoutez le concentré de tomate et l\'ail.',
      'Versez le vin et le bouillon, ajoutez le thym et le laurier. Portez à ébullition puis laissez mijoter 2 h 30 à couvert à feu très doux.',
      'Faites sauter les champignons au beurre et ajoutez-les 30 min avant la fin. Rectifiez l\'assaisonnement.'
    ],
    astuce: 'Encore meilleur réchauffé le lendemain. Servez avec des pommes de terre vapeur ou des pâtes fraîches.'
  },
  {
    id: 'blanquette-veau', nom: 'Blanquette de veau', cat: 'Viandes', cuisine: 'Française', emoji: '🥘',
    desc: 'Veau poché, sauce crémeuse au citron, carottes et champignons.',
    portions: 6, prep: 30, cuisson: 120, diff: 2,
    ing: [
      ['veau_epaule', 1200], ['carotte', 3, 'pc'], ['oignon', 1, 'pc'], ['champignons', 250], ['bouillon', 1500, 'ml', 'Bouillon de volaille'],
      ['beurre', 40], ['farine', 40], ['creme_30', 200, 'ml'], ['jaune_oeuf', 1, 'pc'], ['citron', 0.5, 'pc'],
      ['thym', 2, 'pc'], ['laurier', 1, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Mettez la viande en morceaux dans une cocotte, couvrez de bouillon froid. Portez à ébullition et écumez.',
      'Ajoutez les carottes, l\'oignon, le thym et le laurier. Laissez mijoter 1 h 30 à couvert.',
      'Égouttez la viande et les légumes, gardez le bouillon.',
      'Faites un roux avec le beurre et la farine, versez 75 cl de bouillon en fouettant, laissez épaissir 10 min. Ajoutez les champignons.',
      'Hors du feu, ajoutez la crème mélangée au jaune d\'œuf et au jus de citron. Remettez la viande et les légumes, réchauffez sans bouillir.'
    ],
    astuce: 'Servez avec du riz blanc.'
  },
  {
    id: 'pot-au-feu', nom: 'Pot-au-feu', cat: 'Viandes', cuisine: 'Française', emoji: '🍲',
    desc: 'Bœuf et légumes d\'hiver longuement pochés dans un bouillon parfumé.',
    portions: 6, prep: 30, cuisson: 210, diff: 1,
    ing: [
      ['boeuf_paleron', 1500, 'g', 'Bœuf (paleron, plat de côtes, jarret)'], ['carotte', 6, 'pc'], ['poireau', 3, 'pc'], ['navet', 4, 'pc'],
      ['pomme_de_terre', 6, 'pc'], ['oignon', 1, 'pc'], ['celeri', 2, 'pc'], ['thym', 3, 'pc'], ['laurier', 2, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs'],
      ['moutarde', 2, 'cs', 'Moutarde (pour servir)']
    ],
    etapes: [
      'Mettez la viande dans un grand faitout, couvrez d\'eau froide, portez à ébullition et écumez soigneusement.',
      'Ajoutez l\'oignon, le thym, le laurier, le sel et le poivre. Laissez frémir 2 h.',
      'Ajoutez les carottes, poireaux, navets et céleri, poursuivez 45 min.',
      'Ajoutez les pommes de terre et cuisez encore 30 min.',
      'Servez la viande et les légumes avec de la moutarde, gros sel et cornichons. Gardez le bouillon pour une soupe.'
    ]
  },
  {
    id: 'hachis-parmentier', nom: 'Hachis parmentier', cat: 'Viandes', cuisine: 'Française', emoji: '🥔',
    desc: 'Viande hachée mijotée sous une purée maison gratinée.',
    portions: 6, prep: 30, cuisson: 45, diff: 1,
    ing: [
      ['boeuf_hache_15', 600], ['pomme_de_terre', 1200], ['oignon', 2, 'pc'], ['ail', 1, 'pc'], ['concentre_tomate', 1, 'cs'],
      ['lait_demi', 200, 'ml'], ['beurre', 50], ['emmental', 80], ['persil', 10], ['muscade', 1, 'pincee'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les pommes de terre épluchées 25 min dans l\'eau salée.',
      'Pendant ce temps, faites revenir les oignons et l\'ail, ajoutez la viande et faites-la dorer. Ajoutez le concentré, le persil, salez, poivrez.',
      'Écrasez les pommes de terre avec le beurre, le lait chaud et la muscade.',
      'Dans un plat, étalez la viande puis la purée. Parsemez de fromage.',
      'Gratinez 20 min à 200 °C.'
    ]
  },
  {
    id: 'chili-con-carne', nom: 'Chili con carne', cat: 'Viandes', cuisine: 'Tex-Mex', emoji: '🌶️',
    desc: 'Bœuf, haricots rouges et épices, servi avec du riz.',
    portions: 6, prep: 15, cuisson: 60, diff: 1,
    ing: [
      ['boeuf_hache_15', 600], ['haricots_rouges', 500], ['tomates_concassees', 800], ['oignon', 2, 'pc'], ['poivron', 1, 'pc'],
      ['ail', 2, 'pc'], ['concentre_tomate', 2, 'cs'], ['cumin', 2, 'cc'], ['paprika', 2, 'cc'], ['piment_poudre', 0.5, 'cc'],
      ['huile_neutre', 1, 'cs'], ['chocolat_noir', 10], ['riz_blanc', 360, 'g', 'Riz (pour servir)'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'oignon, l\'ail et le poivron en dés dans l\'huile 5 min.',
      'Ajoutez la viande et faites-la dorer en l\'émiettant, puis les épices 1 min.',
      'Ajoutez les tomates, le concentré et un verre d\'eau. Laissez mijoter 40 min à couvert.',
      'Ajoutez les haricots égouttés et le chocolat, poursuivez 15 min.',
      'Servez avec le riz cuit.'
    ],
    astuce: 'Une cuillère de crème fraîche, de la coriandre et un peu de cheddar pour la touche finale.'
  },
  {
    id: 'burger-maison', nom: 'Burger maison', cat: 'Burgers & sandwichs', cuisine: 'Américaine', emoji: '🍔',
    desc: 'Steak juteux, cheddar fondu, crudités et sauce maison.',
    portions: 4, prep: 15, cuisson: 10, diff: 1,
    ing: [
      ['pain_burger', 4, 'pc'], ['boeuf_hache_15', 600], ['cheddar', 4, 'pc'], ['tomate', 1, 'pc'], ['salade', 50],
      ['oignon_rouge', 1, 'pc'], ['cornichons', 40], ['ketchup', 2, 'cs'], ['moutarde', 1, 'cs'], ['mayonnaise', 2, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Formez 4 steaks de 150 g un peu plus larges que les pains. Salez et poivrez juste avant cuisson.',
      'Mélangez mayonnaise, ketchup, moutarde et cornichons hachés pour la sauce.',
      'Faites cuire les steaks 3 min par face à feu vif. Posez le cheddar dessus la dernière minute, couvrez pour le faire fondre.',
      'Toastez les pains. Montez : sauce, salade, steak, tomate, oignon, sauce.'
    ]
  },
  {
    id: 'steak-frites', nom: 'Steak frites au four', cat: 'Viandes', cuisine: 'Française', emoji: '🥩',
    desc: 'Pièce de bœuf saisie et frites croustillantes cuites au four.',
    portions: 4, prep: 15, cuisson: 40, diff: 1,
    ing: [
      ['boeuf_steak', 600], ['pomme_de_terre', 1000], ['huile_neutre', 3, 'cs'], ['beurre', 20], ['echalote', 1, 'pc'],
      ['paprika', 1, 'cc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Coupez les pommes de terre en bâtonnets, rincez-les et séchez-les bien.',
      'Mélangez-les avec 2 c. à soupe d\'huile, le paprika et le sel. Étalez sur une plaque et enfournez 35 à 40 min à 220 °C en les retournant à mi-cuisson.',
      'Sortez la viande 30 min avant. Saisissez-la dans le reste d\'huile très chaude, 2 à 3 min par face selon l\'épaisseur.',
      'Ajoutez le beurre et l\'échalote ciselée, arrosez la viande. Laissez reposer 3 min avant de servir.'
    ]
  },
  {
    id: 'tartare-boeuf', nom: 'Tartare de bœuf', cat: 'Viandes', cuisine: 'Française', emoji: '🥩',
    desc: 'Bœuf cru haché au couteau, condiments et jaune d\'œuf.',
    portions: 4, prep: 20, cuisson: 0, diff: 2,
    ing: [
      ['boeuf_steak', 600, 'g', 'Bœuf extra-frais (filet, rumsteck)'], ['jaune_oeuf', 4, 'pc'], ['echalote', 2, 'pc'], ['capres', 20], ['cornichons', 40],
      ['persil', 10], ['moutarde', 1, 'cs'], ['ketchup', 1, 'cs'], ['sauce_worcestershire', 1, 'cc'], ['huile_olive', 2, 'cs'],
      ['piment_poudre', 1, 'pincee'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Hachez la viande au couteau très finement. Gardez-la au frais.',
      'Hachez l\'échalote, les câpres, les cornichons et le persil.',
      'Mélangez la moutarde, le ketchup, la Worcestershire, l\'huile, le sel, le poivre et le piment.',
      'Mélangez la viande avec les condiments et la sauce. Dressez avec un jaune d\'œuf au centre.'
    ],
    astuce: 'À servir immédiatement, avec des frites et une salade verte.'
  },
  {
    id: 'boeuf-stroganoff', nom: 'Bœuf Stroganoff', cat: 'Viandes', cuisine: 'Russe', emoji: '🍄',
    desc: 'Lamelles de bœuf, champignons et sauce crème-paprika, avec des tagliatelles.',
    portions: 4, prep: 15, cuisson: 25, diff: 1,
    ing: [
      ['boeuf_steak', 600], ['champignons', 300], ['oignon', 1, 'pc'], ['creme_15', 200, 'ml'], ['moutarde', 1, 'cs'], ['paprika', 1, 'cc'],
      ['bouillon', 150, 'ml'], ['beurre', 20], ['pates', 300, 'g', 'Tagliatelles'], ['persil', 10], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Coupez la viande en fines lanières. Saisissez-la à feu vif dans la moitié du beurre 2 min, réservez.',
      'Faites revenir l\'oignon émincé et les champignons dans le reste du beurre 8 min.',
      'Ajoutez le paprika, le bouillon, la moutarde et la crème. Laissez réduire 5 min.',
      'Remettez la viande 1 min. Servez sur les tagliatelles cuites, avec le persil.'
    ]
  },
  {
    id: 'boeuf-oignons-wok', nom: 'Bœuf aux oignons au wok', cat: 'Viandes', cuisine: 'Chinoise', emoji: '🥢',
    desc: 'Bœuf sauté minute, oignons et poivron, sauce soja-huître.',
    portions: 4, prep: 15, cuisson: 10, diff: 1,
    ing: [
      ['boeuf_steak', 500], ['oignon', 2, 'pc'], ['poivron', 1, 'pc'], ['sauce_soja', 4, 'cs'], ['sauce_huitre', 2, 'cs'],
      ['maizena', 1, 'cs'], ['gingembre', 10], ['ail', 2, 'pc'], ['huile_neutre', 2, 'cs'], ['riz_blanc', 280, 'g', 'Riz (pour servir)']
    ],
    etapes: [
      'Émincez finement la viande et mélangez-la avec la maïzena et 2 c. à soupe de sauce soja.',
      'Faites cuire le riz.',
      'Dans un wok très chaud avec l\'huile, saisissez la viande 2 min. Réservez.',
      'Faites sauter les oignons, le poivron, l\'ail et le gingembre 4 min.',
      'Remettez la viande, ajoutez le reste de sauce soja et la sauce d\'huître, mélangez 1 min. Servez avec le riz.'
    ]
  },
  {
    id: 'tajine-kefta', nom: 'Tajine de kefta aux œufs', cat: 'Viandes', cuisine: 'Marocaine', emoji: '🧆',
    desc: 'Boulettes épicées mijotées dans une sauce tomate, œufs pochés dessus.',
    portions: 4, prep: 20, cuisson: 30, diff: 1,
    ing: [
      ['boeuf_hache_15', 500], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['persil', 15], ['coriandre', 15], ['cumin', 2, 'cc'],
      ['paprika', 2, 'cc'], ['tomates_concassees', 800], ['oeuf', 4, 'pc'], ['huile_olive', 2, 'cs'], ['piment_poudre', 1, 'pincee'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Mélangez la viande avec la moitié des herbes hachées, la moitié des épices, sel et poivre. Formez des petites boulettes.',
      'Dans un tajine ou une sauteuse, faites revenir l\'oignon et l\'ail dans l\'huile. Ajoutez les tomates et le reste des épices, laissez mijoter 10 min.',
      'Ajoutez les boulettes et laissez cuire 15 min à couvert.',
      'Cassez les œufs dans la sauce, couvrez et cuisez 5 min. Parsemez du reste des herbes.'
    ],
    astuce: 'Servez avec du pain pour saucer.'
  },
  {
    id: 'polpette', nom: 'Boulettes à la sauce tomate', cat: 'Viandes', cuisine: 'Italienne', emoji: '🍝',
    desc: 'Polpette moelleuses au parmesan, mijotées dans la sauce tomate.',
    portions: 4, prep: 20, cuisson: 30, diff: 1,
    ing: [
      ['boeuf_hache_15', 500], ['chapelure', 50], ['oeuf', 1, 'pc'], ['parmesan', 30], ['ail', 2, 'pc'], ['persil', 10],
      ['coulis_tomate', 700], ['oignon', 1, 'pc'], ['huile_olive', 2, 'cs'], ['basilic', 10], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Mélangez la viande, la chapelure, l\'œuf, le parmesan, 1 gousse d\'ail hachée, le persil, sel et poivre. Formez des boulettes.',
      'Faites-les dorer dans l\'huile, réservez.',
      'Faites revenir l\'oignon et le reste d\'ail, ajoutez le coulis et laissez mijoter 10 min.',
      'Ajoutez les boulettes et laissez cuire 15 min à feu doux. Parsemez de basilic.'
    ],
    astuce: 'Parfait avec des spaghetti ou de la polenta.'
  },
  {
    id: 'tacos-boeuf', nom: 'Tacos au bœuf', cat: 'Burgers & sandwichs', cuisine: 'Mexicaine', emoji: '🌮',
    desc: 'Petites tortillas garnies de bœuf épicé, crudités, avocat et cheddar.',
    portions: 4, prep: 20, cuisson: 10, diff: 1,
    ing: [
      ['tortilla', 240, 'g', 'Petites tortillas (8)'], ['boeuf_hache_15', 500], ['oignon', 1, 'pc'], ['tomate', 2, 'pc'], ['salade', 80],
      ['cheddar', 100, 'g', 'Cheddar râpé'], ['avocat', 1, 'pc'], ['creme_epaisse', 100], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'],
      ['citron_vert', 1, 'pc'], ['coriandre', 10], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'oignon haché, ajoutez la viande et les épices, faites dorer 8 min. Salez.',
      'Coupez les tomates en dés, la salade en lanières, l\'avocat en tranches arrosées de citron vert.',
      'Réchauffez les tortillas à sec dans une poêle.',
      'Garnissez de viande, crudités, fromage, avocat, crème et coriandre.'
    ]
  },
  {
    id: 'carbonnade-flamande', nom: 'Carbonnade flamande', cat: 'Viandes', cuisine: 'Belge', emoji: '🍺',
    desc: 'Bœuf mijoté à la bière brune et au pain d\'épices.',
    portions: 6, prep: 20, cuisson: 180, diff: 2,
    ing: [
      ['boeuf_paleron', 1200], ['oignon', 4, 'pc'], ['biere', 750, 'ml', 'Bière brune'], ['pain_epices', 3, 'pc'], ['moutarde', 2, 'cs'],
      ['cassonade', 1, 'cs'], ['vinaigre', 1, 'cs'], ['beurre', 30], ['thym', 2, 'pc'], ['laurier', 2, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites dorer la viande en morceaux dans le beurre, réservez.',
      'Faites fondre les oignons émincés 10 min, ajoutez la cassonade et le vinaigre.',
      'Remettez la viande, versez la bière, ajoutez thym et laurier.',
      'Tartinez le pain d\'épices de moutarde et posez-le sur le dessus. Laissez mijoter 2 h 30 à couvert à feu très doux.'
    ],
    astuce: 'Servez avec des frites, comme en Belgique.'
  },
  {
    id: 'filet-mignon-moutarde', nom: 'Filet mignon à la moutarde', cat: 'Viandes', cuisine: 'Française', emoji: '🐖',
    desc: 'Filet mignon doré, sauce crème-moutarde à l\'échalote.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [
      ['porc_filet', 600], ['creme_15', 200, 'ml'], ['moutarde', 2, 'cs'], ['echalote', 2, 'pc'], ['vin_blanc', 100, 'ml'],
      ['beurre', 20], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites dorer le filet mignon entier dans le beurre sur toutes les faces, 8 min.',
      'Ajoutez les échalotes ciselées, puis déglacez au vin blanc.',
      'Couvrez et laissez cuire 12 min à feu doux en retournant la viande.',
      'Retirez la viande, ajoutez la crème et la moutarde, laissez réduire 3 min. Tranchez et nappez de sauce.'
    ],
    astuce: 'Avec des tagliatelles ou des haricots verts.'
  },
  {
    id: 'porc-caramel', nom: 'Porc au caramel', cat: 'Viandes', cuisine: 'Vietnamienne', emoji: '🍯',
    desc: 'Échine fondante laquée au caramel et nuoc-mâm, servie avec du riz.',
    portions: 4, prep: 15, cuisson: 50, diff: 2,
    ing: [
      ['porc_echine', 700], ['sucre', 60], ['nuoc_mam', 3, 'cs'], ['sauce_soja', 2, 'cs'], ['echalote', 3, 'pc'], ['ail', 2, 'pc'],
      ['gingembre', 10], ['oignon_nouveau', 2, 'pc'], ['riz_blanc', 280, 'g', 'Riz (pour servir)'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Coupez la viande en cubes de 3 cm.',
      'Faites un caramel ambré avec le sucre et 2 c. à soupe d\'eau dans une cocotte.',
      'Ajoutez la viande, l\'échalote, l\'ail et le gingembre, mélangez pour enrober.',
      'Ajoutez le nuoc-mâm, la sauce soja et 20 cl d\'eau. Laissez mijoter 45 min, jusqu\'à ce que la sauce soit sirupeuse.',
      'Parsemez d\'oignon nouveau, poivrez généreusement. Servez avec le riz.'
    ]
  },
  {
    id: 'porc-aigre-doux', nom: 'Porc aigre-doux à l\'ananas', cat: 'Viandes', cuisine: 'Chinoise', emoji: '🍍',
    desc: 'Porc sauté, poivrons, ananas et sauce sucrée-acidulée.',
    portions: 4, prep: 20, cuisson: 15, diff: 1,
    ing: [
      ['porc_filet', 600], ['ananas', 200], ['poivron', 2, 'pc'], ['oignon', 1, 'pc'], ['ketchup', 3, 'cs'], ['vinaigre_riz', 3, 'cs'],
      ['sucre', 2, 'cs'], ['sauce_soja', 3, 'cs'], ['maizena', 2, 'cs'], ['huile_neutre', 2, 'cs'], ['riz_blanc', 280, 'g', 'Riz (pour servir)']
    ],
    etapes: [
      'Coupez la viande en cubes, enrobez-les d\'1 c. à soupe de maïzena et d\'1 c. à soupe de sauce soja.',
      'Mélangez ketchup, vinaigre, sucre, le reste de sauce soja et de maïzena avec 10 cl d\'eau.',
      'Faites dorer la viande dans l\'huile chaude, réservez. Faites sauter les poivrons et l\'oignon 4 min.',
      'Ajoutez l\'ananas, la viande et la sauce, laissez épaissir 2 min. Servez avec le riz.'
    ]
  },
  {
    id: 'saucisses-lentilles', nom: 'Saucisses aux lentilles', cat: 'Viandes', cuisine: 'Française', emoji: '🌭',
    desc: 'Le plat mijoté rustique et généreux.',
    portions: 4, prep: 15, cuisson: 45, diff: 1,
    ing: [
      ['saucisse', 4, 'pc'], ['lentilles_vertes', 300], ['carotte', 2, 'pc'], ['oignon', 1, 'pc'], ['lardons', 100],
      ['bouillon', 1000, 'ml'], ['thym', 2, 'pc'], ['laurier', 1, 'pc'], ['moutarde', 1, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites dorer les saucisses dans une cocotte, réservez.',
      'Faites revenir les lardons, l\'oignon et les carottes en dés 5 min.',
      'Ajoutez les lentilles rincées, le bouillon, le thym et le laurier. Remettez les saucisses.',
      'Laissez mijoter 35 min à couvert. Ajoutez la moutarde en fin de cuisson.'
    ]
  },
  {
    id: 'tartiflette', nom: 'Tartiflette', cat: 'Viandes', cuisine: 'Savoyarde', emoji: '🧀',
    desc: 'Pommes de terre, lardons, oignons et reblochon fondant.',
    portions: 6, prep: 20, cuisson: 50, diff: 1,
    ing: [
      ['pomme_de_terre', 1500], ['reblochon', 1, 'pc'], ['lardons', 200], ['oignon', 2, 'pc'], ['creme_epaisse', 100],
      ['vin_blanc', 100, 'ml'], ['beurre', 10], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les pommes de terre 20 min à l\'eau, épluchez-les et coupez-les en rondelles.',
      'Faites revenir les lardons et les oignons émincés, déglacez au vin blanc.',
      'Dans un plat beurré, alternez pommes de terre et lardons-oignons, ajoutez la crème.',
      'Coupez le reblochon en deux dans l\'épaisseur et posez-le croûte vers le haut.',
      'Enfournez 25 min à 200 °C.'
    ]
  },
  {
    id: 'croque-monsieur', nom: 'Croque-monsieur', cat: 'Burgers & sandwichs', cuisine: 'Française', emoji: '🥪',
    desc: 'Pain de mie, jambon, béchamel et fromage gratiné.',
    portions: 4, prep: 15, cuisson: 15, diff: 1,
    ing: [
      ['pain_mie', 8, 'pc'], ['jambon_blanc', 4, 'pc'], ['comte', 120, 'g', 'Comté ou emmental râpé'], ['beurre', 30],
      ['lait_demi', 150, 'ml'], ['farine', 1, 'cs'], ['muscade', 1, 'pincee'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Béchamel express : faites fondre 15 g de beurre, ajoutez la farine puis le lait en fouettant. Laissez épaissir, ajoutez la muscade.',
      'Beurrez légèrement les tranches de pain avec le reste du beurre.',
      'Garnissez 4 tranches de béchamel, jambon et un peu de fromage. Refermez.',
      'Nappez le dessus de béchamel et de fromage. Enfournez 12 à 15 min à 200 °C.'
    ],
    astuce: 'Ajoutez un œuf au plat dessus pour un croque-madame.'
  },
  {
    id: 'navarin-agneau', nom: 'Navarin d\'agneau', cat: 'Viandes', cuisine: 'Française', emoji: '🐑',
    desc: 'Ragoût d\'agneau printanier aux petits légumes.',
    portions: 6, prep: 30, cuisson: 120, diff: 2,
    ing: [
      ['agneau_epaule', 1200], ['pomme_de_terre', 600], ['carotte', 4, 'pc'], ['navet', 3, 'pc'], ['petits_pois', 200], ['oignon', 2, 'pc'],
      ['ail', 2, 'pc'], ['concentre_tomate', 1, 'cs'], ['farine', 1, 'cs'], ['bouillon', 600, 'ml'], ['huile_olive', 2, 'cs'],
      ['thym', 2, 'pc'], ['laurier', 1, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites dorer l\'agneau en morceaux dans l\'huile, ajoutez les oignons.',
      'Saupoudrez de farine, ajoutez le concentré, l\'ail, le bouillon, le thym et le laurier. Laissez mijoter 1 h.',
      'Ajoutez les carottes, navets et pommes de terre en morceaux, poursuivez 40 min.',
      'Ajoutez les petits pois 10 min avant la fin.'
    ]
  },
  {
    id: 'tajine-agneau-pruneaux', nom: 'Tajine d\'agneau aux pruneaux', cat: 'Viandes', cuisine: 'Marocaine', emoji: '🫕',
    desc: 'Agneau confit aux épices douces, pruneaux et amandes grillées.',
    portions: 6, prep: 20, cuisson: 120, diff: 2,
    ing: [
      ['agneau_epaule', 1200], ['pruneaux', 200], ['oignon', 2, 'pc'], ['amandes', 50], ['miel', 2, 'cs'], ['cannelle', 1, 'cc'],
      ['ras_el_hanout', 2, 'cc'], ['gingembre_poudre', 1, 'cc'], ['safran', 1, 'pc'], ['huile_olive', 3, 'cs'],
      ['bouillon', 400, 'ml'], ['coriandre', 10], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir la viande et les oignons émincés dans l\'huile avec les épices (sauf la cannelle).',
      'Ajoutez le bouillon, couvrez et laissez mijoter 1 h 30.',
      'Ajoutez les pruneaux, le miel et la cannelle, poursuivez 20 min à découvert.',
      'Faites griller les amandes à sec. Servez parsemé d\'amandes et de coriandre.'
    ],
    astuce: 'Accompagnez de semoule ou de pain.'
  },
  {
    id: 'couscous-royal', nom: 'Couscous royal', cat: 'Viandes', cuisine: 'Maghrébine', emoji: '🍲',
    desc: 'Agneau, poulet, merguez, légumes et bouillon épicé sur semoule.',
    portions: 8, prep: 40, cuisson: 90, diff: 2,
    ing: [
      ['agneau_epaule', 600], ['poulet_cuisse', 600], ['merguez', 6, 'pc'], ['semoule', 500], ['carotte', 4, 'pc'], ['courgette', 3, 'pc'],
      ['navet', 2, 'pc'], ['pois_chiches', 400], ['tomates_concassees', 400], ['oignon', 2, 'pc'], ['ras_el_hanout', 1, 'cs'],
      ['harissa', 1, 'cs'], ['huile_olive', 3, 'cs'], ['bouillon', 2000, 'ml'], ['beurre', 30], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites dorer l\'agneau et le poulet en morceaux dans l\'huile avec les oignons et le ras el hanout.',
      'Ajoutez les tomates et le bouillon, laissez mijoter 45 min.',
      'Ajoutez carottes et navets, 15 min après les courgettes et les pois chiches. Cuisez encore 20 min.',
      'Faites griller les merguez.',
      'Préparez la semoule : versez le même volume d\'eau bouillante salée, couvrez 5 min, égrenez avec le beurre.',
      'Servez la semoule, les viandes, les légumes et le bouillon relevé de harissa.'
    ]
  },
  {
    id: 'moussaka', nom: 'Moussaka', cat: 'Viandes', cuisine: 'Grecque', emoji: '🍆',
    desc: 'Aubergines, viande épicée à la cannelle et béchamel gratinée.',
    portions: 6, prep: 40, cuisson: 60, diff: 2,
    ing: [
      ['aubergine', 3, 'pc'], ['agneau_hache', 700, 'g', 'Agneau ou bœuf haché'], ['oignon', 2, 'pc'], ['ail', 2, 'pc'], ['tomates_concassees', 400],
      ['cannelle', 1, 'cc'], ['huile_olive', 5, 'cs'], ['lait_demi', 500, 'ml'], ['beurre', 40], ['farine', 40], ['oeuf', 1, 'pc'],
      ['parmesan', 50], ['muscade', 1, 'pincee'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Coupez les aubergines en tranches, badigeonnez-les d\'huile et faites-les rôtir 20 min à 200 °C.',
      'Faites revenir les oignons et l\'ail, ajoutez la viande, puis les tomates et la cannelle. Laissez mijoter 20 min.',
      'Béchamel : roux beurre-farine, ajoutez le lait en fouettant, épaississez. Hors du feu, ajoutez l\'œuf, la moitié du parmesan et la muscade.',
      'Dans un plat, alternez aubergines et viande. Terminez par la béchamel et le reste de parmesan.',
      'Enfournez 40 min à 180 °C. Laissez reposer 10 min avant de servir.'
    ]
  },
  {
    id: 'gigot-agneau', nom: 'Gigot d\'agneau rôti à l\'ail', cat: 'Viandes', cuisine: 'Française', emoji: '🍖',
    desc: 'Le rôti des grandes tablées, piqué d\'ail et de romarin.',
    portions: 8, prep: 15, cuisson: 75, diff: 2,
    ing: [
      ['agneau_gigot', 1600, 'g', 'Gigot (≈ 2,2 kg avec l\'os)'], ['ail', 6, 'pc'], ['romarin', 3, 'pc'], ['thym', 4, 'pc'],
      ['huile_olive', 3, 'cs'], ['beurre', 30], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Sortez le gigot 1 h avant. Piquez-le de lamelles d\'ail et de brins de romarin.',
      'Massez-le avec l\'huile, salez et poivrez. Posez-le dans un plat avec le thym, le beurre et le reste d\'ail en chemise.',
      'Enfournez à 210 °C pendant 15 min puis baissez à 180 °C : comptez 15 min par livre pour une viande rosée.',
      'Arrosez régulièrement. Laissez reposer 15 min sous papier aluminium avant de découper.'
    ],
    astuce: 'Servez avec des flageolets ou un gratin dauphinois.'
  },
  {
    id: 'escalope-milanaise', nom: 'Escalope milanaise', cat: 'Viandes', cuisine: 'Italienne', emoji: '🍋',
    desc: 'Veau pané au parmesan, doré au beurre, avec un trait de citron.',
    portions: 4, prep: 15, cuisson: 10, diff: 1,
    ing: [
      ['veau_escalope', 600], ['chapelure', 100], ['farine', 50], ['oeuf', 2, 'pc'], ['parmesan', 30], ['huile_olive', 3, 'cs'],
      ['beurre', 30], ['citron', 1, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Aplatissez les escalopes. Salez-les.',
      'Passez-les dans la farine, puis l\'œuf battu, puis la chapelure mélangée au parmesan.',
      'Faites-les dorer 3 min de chaque côté dans l\'huile et le beurre.',
      'Servez avec des quartiers de citron.'
    ]
  },
  {
    id: 'osso-buco', nom: 'Osso buco', cat: 'Viandes', cuisine: 'Italienne', emoji: '🦴',
    desc: 'Jarret de veau braisé aux tomates et vin blanc, gremolata au citron.',
    portions: 4, prep: 20, cuisson: 120, diff: 2,
    ing: [
      ['veau_epaule', 1000, 'g', 'Jarret de veau en tranches (viande)'], ['carotte', 2, 'pc'], ['celeri', 2, 'pc'], ['oignon', 1, 'pc'],
      ['ail', 2, 'pc'], ['tomates_concassees', 400], ['vin_blanc', 200, 'ml'], ['bouillon', 300, 'ml'], ['farine', 2, 'cs'],
      ['huile_olive', 3, 'cs'], ['citron', 1, 'pc'], ['persil', 15], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Farinez les tranches de jarret et faites-les dorer dans l\'huile. Réservez.',
      'Faites revenir carotte, céleri et oignon en petits dés 5 min.',
      'Remettez la viande, déglacez au vin, ajoutez les tomates et le bouillon. Laissez mijoter 1 h 45 à couvert.',
      'Gremolata : hachez le zeste de citron, l\'ail et le persil. Parsemez au moment de servir.'
    ],
    astuce: 'Traditionnellement servi avec un risotto au safran.'
  },
  {
    id: 'endives-jambon', nom: 'Endives au jambon', cat: 'Viandes', cuisine: 'Belge', emoji: '🥬',
    desc: 'Endives braisées roulées dans le jambon, béchamel gratinée.',
    portions: 4, prep: 20, cuisson: 50, diff: 1,
    ing: [
      ['endive', 8, 'pc'], ['jambon_blanc', 8, 'pc'], ['beurre', 50], ['farine', 50], ['lait_demi', 600, 'ml'], ['comte', 100],
      ['muscade', 1, 'pincee'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites braiser les endives 25 min dans une sauteuse avec 10 g de beurre et un fond d\'eau. Égouttez-les bien en les pressant.',
      'Béchamel : roux avec le reste du beurre et la farine, ajoutez le lait en fouettant, épaississez. Ajoutez la muscade et la moitié du fromage.',
      'Roulez chaque endive dans une tranche de jambon, disposez dans un plat.',
      'Nappez de béchamel, parsemez du reste de fromage. Gratinez 20 min à 200 °C.'
    ]
  },
  {
    id: 'pulled-pork', nom: 'Pulled pork burger', cat: 'Burgers & sandwichs', cuisine: 'Américaine', emoji: '🐷',
    desc: 'Échine effilochée après une longue cuisson, sauce barbecue.',
    portions: 8, prep: 20, cuisson: 300, diff: 2,
    ing: [
      ['porc_echine', 1600], ['sauce_bbq', 200], ['cassonade', 2, 'cs'], ['paprika', 2, 'cs'], ['ail', 3, 'pc'], ['oignon', 2, 'pc'],
      ['vinaigre', 3, 'cs', 'Vinaigre de cidre'], ['pain_burger', 8, 'pc'], ['chou', 200], ['sel', 1, 'cs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Frottez la viande avec la cassonade, le paprika, le sel et le poivre.',
      'Posez-la dans une cocotte sur les oignons émincés et l\'ail, ajoutez le vinaigre et 20 cl d\'eau.',
      'Couvrez et laissez cuire 5 h à 150 °C jusqu\'à ce que la viande s\'effiloche à la fourchette.',
      'Effilochez la viande, mélangez-la avec la sauce barbecue et un peu de jus de cuisson.',
      'Servez dans les pains avec le chou émincé.'
    ]
  },
  {
    id: 'cassoulet', nom: 'Cassoulet', cat: 'Viandes', cuisine: 'Française', emoji: '🫘',
    desc: 'Haricots blancs, confit de canard, saucisse et porc, gratinés lentement.',
    portions: 8, prep: 30, cuisson: 150, diff: 3,
    ing: [
      ['haricots_blancs', 1500, 'g', 'Haricots lingots cuits'], ['canard_cuisse_confite', 4, 'pc'], ['saucisse', 4, 'pc'], ['porc_echine', 400],
      ['tomates_concassees', 400], ['oignon', 2, 'pc'], ['ail', 4, 'pc'], ['bouillon', 500, 'ml'], ['chapelure', 30],
      ['thym', 2, 'pc'], ['laurier', 2, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites dorer les cuisses de canard pour récupérer la graisse. Faites-y dorer les saucisses et le porc en morceaux.',
      'Faites revenir les oignons et l\'ail dans la graisse, ajoutez les tomates, le thym, le laurier.',
      'Dans une cassole, alternez haricots et viandes, versez le bouillon à hauteur.',
      'Saupoudrez de chapelure et enfournez 2 h à 160 °C. Enfoncez la croûte qui se forme 2 ou 3 fois en cours de cuisson.'
    ]
  },
  {
    id: 'choucroute', nom: 'Choucroute garnie', cat: 'Viandes', cuisine: 'Alsacienne', emoji: '🌭',
    desc: 'Choucroute au vin blanc, saucisses, échine et pommes de terre.',
    portions: 6, prep: 20, cuisson: 120, diff: 2,
    ing: [
      ['choucroute', 1500], ['saucisse', 6, 'pc', 'Saucisses (Strasbourg, Morteau…)'], ['porc_echine', 600, 'g', 'Palette ou échine fumée'],
      ['lardons', 200], ['pomme_de_terre', 1200], ['oignon', 2, 'pc'], ['vin_blanc', 300, 'ml', 'Riesling'], ['laurier', 2, 'pc'],
      ['graines_fenouil', 1, 'cc', 'Baies de genièvre / carvi'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Rincez la choucroute 2 fois et pressez-la.',
      'Faites revenir les oignons et les lardons dans une grande cocotte.',
      'Ajoutez la choucroute, les épices, le laurier, la viande et le vin. Couvrez et laissez cuire 1 h 30 à feu doux.',
      'Ajoutez les pommes de terre épluchées et les saucisses pour les 30 dernières minutes.'
    ]
  },
  {
    id: 'tomates-farcies', nom: 'Tomates farcies', cat: 'Viandes', cuisine: 'Française', emoji: '🍅',
    desc: 'Grosses tomates garnies de chair à saucisse, cuites au four sur un lit de riz.',
    portions: 4, prep: 25, cuisson: 50, diff: 1,
    ing: [
      ['tomate', 8, 'pc', 'Grosses tomates'], ['porc_hache', 400], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['persil', 15],
      ['chapelure', 30], ['oeuf', 1, 'pc'], ['riz_blanc', 150], ['huile_olive', 2, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Coupez un chapeau aux tomates, videz-les. Gardez la pulpe hachée.',
      'Mélangez la chair à saucisse avec l\'oignon, l\'ail, le persil hachés, la chapelure et l\'œuf.',
      'Farcissez les tomates, remettez les chapeaux.',
      'Versez le riz cru et la pulpe au fond du plat avec 25 cl d\'eau. Posez les tomates dessus, arrosez d\'huile.',
      'Enfournez 50 min à 180 °C.'
    ]
  },

  // ================= VOLAILLES =================
  {
    id: 'poulet-basquaise', nom: 'Poulet basquaise', cat: 'Volailles', cuisine: 'Basque', emoji: '🫑',
    desc: 'Poulet mijoté aux poivrons, tomates et piment d\'Espelette.',
    portions: 6, prep: 20, cuisson: 60, diff: 1,
    ing: [
      ['poulet_cuisse', 1200], ['poivron', 3, 'pc'], ['tomates_concassees', 800], ['oignon', 2, 'pc'], ['ail', 3, 'pc'],
      ['jambon_cru', 4, 'pc', 'Jambon de Bayonne'], ['piment_poudre', 1, 'cc', 'Piment d\'Espelette'], ['vin_blanc', 150, 'ml'],
      ['huile_olive', 3, 'cs'], ['thym', 2, 'pc'], ['laurier', 1, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites dorer les morceaux de poulet dans l\'huile, réservez.',
      'Faites revenir les oignons, les poivrons en lanières et le jambon en morceaux 10 min.',
      'Ajoutez l\'ail, les tomates, le vin, le piment, le thym et le laurier. Remettez le poulet.',
      'Laissez mijoter 40 min à couvert.'
    ],
    astuce: 'Servez avec du riz blanc.'
  },
  {
    id: 'poulet-curry-coco', nom: 'Poulet curry coco', cat: 'Volailles', cuisine: 'Indienne', emoji: '🍛',
    desc: 'Le curry doux et crémeux qui plaît à tout le monde.',
    portions: 4, prep: 15, cuisson: 25, diff: 1,
    ing: [
      ['poulet_blanc', 600], ['lait_coco', 400, 'ml'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['gingembre', 15], ['curry', 2, 'cs'],
      ['tomates_concassees', 200], ['huile_neutre', 2, 'cs'], ['coriandre', 10], ['riz_blanc', 280, 'g', 'Riz basmati'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'oignon, l\'ail et le gingembre dans l\'huile 3 min. Ajoutez le curry 1 min.',
      'Ajoutez le poulet en cubes et faites-le dorer.',
      'Versez les tomates et le lait de coco, laissez mijoter 15 min.',
      'Servez avec le riz et la coriandre.'
    ]
  },
  {
    id: 'poulet-tikka-masala', nom: 'Poulet tikka masala', cat: 'Volailles', cuisine: 'Indienne', emoji: '🍛',
    desc: 'Poulet mariné au yaourt et épices, sauce tomate-crème parfumée.',
    portions: 4, prep: 20, cuisson: 30, diff: 2,
    ing: [
      ['poulet_blanc', 700], ['yaourt_nature', 1, 'pc'], ['garam_masala', 2, 'cc'], ['curcuma', 1, 'cc'], ['paprika', 1, 'cc'], ['cumin', 1, 'cc'],
      ['oignon', 1, 'pc'], ['ail', 3, 'pc'], ['gingembre', 20], ['coulis_tomate', 400], ['creme_30', 150, 'ml'], ['beurre', 30],
      ['coriandre', 10], ['riz_blanc', 280, 'g', 'Riz basmati'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Marinez le poulet en cubes avec le yaourt, la moitié des épices et du sel (30 min minimum).',
      'Faites griller le poulet dans une poêle très chaude ou sous le grill du four. Réservez.',
      'Faites fondre l\'oignon, l\'ail et le gingembre dans le beurre, ajoutez le reste des épices.',
      'Ajoutez le coulis, laissez mijoter 10 min, puis la crème et le poulet. Cuisez encore 5 min.',
      'Servez avec le riz et la coriandre.'
    ]
  },
  {
    id: 'poulet-roti', nom: 'Poulet rôti et pommes de terre', cat: 'Volailles', cuisine: 'Française', emoji: '🍗',
    desc: 'Le poulet du dimanche : peau croustillante, pommes de terre fondantes.',
    portions: 6, prep: 15, cuisson: 80, diff: 1,
    ing: [
      ['poulet_entier', 1100, 'g', 'Poulet de 1,6 kg (partie comestible)'], ['pomme_de_terre', 1000, 'g', 'Grenailles'], ['beurre', 40],
      ['ail', 6, 'pc'], ['thym', 4, 'pc'], ['citron', 1, 'pc'], ['huile_olive', 2, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Préchauffez le four à 200 °C. Glissez le citron coupé et 2 branches de thym à l\'intérieur du poulet.',
      'Badigeonnez-le de beurre mou, salez et poivrez.',
      'Disposez les pommes de terre et l\'ail autour, arrosez d\'huile.',
      'Enfournez 1 h 15 à 1 h 20 en arrosant toutes les 20 min. Le jus doit être clair en piquant la cuisse.',
      'Laissez reposer 10 min avant de découper.'
    ]
  },
  {
    id: 'tajine-poulet-citron', nom: 'Tajine de poulet au citron et olives', cat: 'Volailles', cuisine: 'Marocaine', emoji: '🍋',
    desc: 'Poulet fondant, citron confit, olives vertes et épices.',
    portions: 4, prep: 15, cuisson: 60, diff: 1,
    ing: [
      ['poulet_cuisse', 1000], ['citron', 2, 'pc', 'Citrons confits'], ['olives', 120, 'g', 'Olives vertes'], ['oignon', 2, 'pc'], ['ail', 3, 'pc'],
      ['gingembre_poudre', 1, 'cc'], ['curcuma', 1, 'cc'], ['safran', 1, 'pc'], ['coriandre', 20], ['persil', 20],
      ['huile_olive', 4, 'cs'], ['bouillon', 300, 'ml'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir les oignons émincés et l\'ail dans l\'huile avec les épices.',
      'Ajoutez le poulet, faites-le dorer, puis versez le bouillon et la moitié des herbes.',
      'Couvrez et laissez mijoter 40 min.',
      'Ajoutez les citrons en quartiers et les olives, poursuivez 15 min. Parsemez du reste des herbes.'
    ]
  },
  {
    id: 'poulet-creme-champignons', nom: 'Poulet à la crème et aux champignons', cat: 'Volailles', cuisine: 'Française', emoji: '🍄',
    desc: 'Blancs de poulet dorés, champignons et sauce crème au vin blanc.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [
      ['poulet_blanc', 600], ['champignons', 400], ['echalote', 2, 'pc'], ['creme_15', 250, 'ml'], ['vin_blanc', 100, 'ml'],
      ['beurre', 20], ['persil', 10], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites dorer le poulet en morceaux dans le beurre 6 min. Réservez.',
      'Faites revenir les échalotes et les champignons émincés 8 min.',
      'Déglacez au vin blanc, ajoutez la crème et le poulet. Laissez mijoter 10 min.',
      'Parsemez de persil. Servez avec du riz ou des pâtes.'
    ]
  },
  {
    id: 'poulet-teriyaki', nom: 'Poulet teriyaki', cat: 'Volailles', cuisine: 'Japonaise', emoji: '🍱',
    desc: 'Poulet laqué sucré-salé, sésame et riz blanc.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [
      ['poulet_cuisse', 700], ['sauce_soja', 6, 'cs'], ['miel', 3, 'cs'], ['vinaigre_riz', 2, 'cs'], ['gingembre', 10], ['ail', 2, 'pc'],
      ['maizena', 1, 'cc'], ['huile_neutre', 1, 'cs'], ['graines_sesame', 1, 'cs'], ['oignon_nouveau', 2, 'pc'], ['riz_blanc', 280, 'g', 'Riz japonais']
    ],
    etapes: [
      'Mélangez sauce soja, miel, vinaigre, gingembre et ail râpés, maïzena et 5 cl d\'eau.',
      'Faites dorer le poulet, peau côté poêle, 8 min, retournez et cuisez 5 min.',
      'Versez la sauce et laissez-la réduire en enrobant le poulet jusqu\'à ce qu\'il soit laqué.',
      'Tranchez, parsemez de sésame et d\'oignon nouveau. Servez avec le riz.'
    ]
  },
  {
    id: 'poulet-yassa', nom: 'Poulet yassa', cat: 'Volailles', cuisine: 'Sénégalaise', emoji: '🧅',
    desc: 'Poulet mariné au citron, oignons fondants et moutarde.',
    portions: 6, prep: 20, cuisson: 60, diff: 1,
    ing: [
      ['poulet_cuisse', 1200], ['oignon', 6, 'pc'], ['citron', 4, 'pc'], ['moutarde', 2, 'cs'], ['ail', 3, 'pc'], ['piment', 1, 'pc'],
      ['huile_neutre', 4, 'cs'], ['bouillon', 300, 'ml'], ['olives', 60, 'g', 'Olives vertes'], ['riz_blanc', 450], ['sel', 0, 'qs']
    ],
    etapes: [
      'Marinez le poulet avec les oignons émincés, le jus de citron, la moutarde, l\'ail et le piment (2 h idéalement).',
      'Égouttez le poulet et faites-le dorer dans l\'huile. Réservez.',
      'Faites fondre les oignons de la marinade 15 min, ajoutez la marinade et le bouillon.',
      'Remettez le poulet et les olives, laissez mijoter 30 min. Servez avec le riz.'
    ]
  },
  {
    id: 'poulet-satay', nom: 'Poulet satay', cat: 'Volailles', cuisine: 'Indonésienne', emoji: '🥜',
    desc: 'Brochettes de poulet mariné et sauce cacahuète-coco.',
    portions: 4, prep: 20, cuisson: 15, diff: 1,
    ing: [
      ['poulet_blanc', 600], ['beurre_cacahuete', 80], ['lait_coco', 200, 'ml'], ['sauce_soja', 3, 'cs'], ['citron_vert', 1, 'pc'],
      ['curry', 1, 'cc'], ['miel', 1, 'cs'], ['ail', 1, 'pc'], ['cacahuetes', 30], ['riz_blanc', 280]
    ],
    etapes: [
      'Marinez le poulet en lanières avec 2 c. à soupe de sauce soja, le curry, le miel et l\'ail (20 min).',
      'Enfilez sur des brochettes et faites griller 8 à 10 min en les retournant.',
      'Sauce : chauffez le lait de coco avec le beurre de cacahuète, le reste de sauce soja et le jus de citron vert.',
      'Servez avec le riz, la sauce et les cacahuètes concassées.'
    ]
  },
  {
    id: 'nuggets-maison', nom: 'Nuggets de poulet au four', cat: 'Volailles', cuisine: 'Américaine', emoji: '🍗',
    desc: 'Croustillants sans friture, les enfants adorent.',
    portions: 4, prep: 20, cuisson: 20, diff: 1,
    ing: [
      ['poulet_blanc', 600], ['chapelure', 100], ['farine', 40], ['oeuf', 2, 'pc'], ['paprika', 1, 'cc'], ['huile_neutre', 2, 'cs'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Coupez le poulet en morceaux. Mélangez la chapelure avec le paprika, le sel et l\'huile.',
      'Passez les morceaux dans la farine, l\'œuf battu puis la chapelure.',
      'Disposez sur une plaque et enfournez 18 à 20 min à 210 °C en les retournant à mi-cuisson.'
    ]
  },
  {
    id: 'fajitas-poulet', nom: 'Fajitas au poulet', cat: 'Burgers & sandwichs', cuisine: 'Tex-Mex', emoji: '🌯',
    desc: 'Poulet épicé et poivrons sautés dans des tortillas chaudes.',
    portions: 4, prep: 20, cuisson: 15, diff: 1,
    ing: [
      ['poulet_blanc', 600], ['poivron', 3, 'pc'], ['oignon', 2, 'pc'], ['tortilla', 8, 'pc'], ['cumin', 1, 'cc'], ['paprika', 2, 'cc'],
      ['piment_poudre', 0.5, 'cc'], ['citron_vert', 1, 'pc'], ['huile_neutre', 2, 'cs'], ['creme_epaisse', 100], ['coriandre', 10], ['sel', 0, 'qs']
    ],
    etapes: [
      'Coupez le poulet, les poivrons et les oignons en lanières.',
      'Mélangez le poulet avec les épices, le jus de citron vert et 1 c. à soupe d\'huile.',
      'Faites sauter le poulet à feu vif 6 min, réservez. Faites sauter les légumes 6 min, remettez le poulet.',
      'Servez dans les tortillas chaudes avec la crème et la coriandre.'
    ]
  },
  {
    id: 'kebab-maison', nom: 'Kebab maison', cat: 'Burgers & sandwichs', cuisine: 'Turque', emoji: '🥙',
    desc: 'Poulet mariné aux épices, pain pita, crudités et sauce blanche.',
    portions: 4, prep: 20, cuisson: 15, diff: 1,
    ing: [
      ['poulet_cuisse', 600], ['yaourt_nature', 1, 'pc'], ['cumin', 1, 'cc'], ['paprika', 2, 'cc'], ['ail', 3, 'pc'], ['citron', 1, 'pc'],
      ['pain_pita', 4, 'pc'], ['tomate', 2, 'pc'], ['oignon_rouge', 1, 'pc'], ['salade', 100], ['yaourt_grec', 150], ['menthe', 5], ['sel', 0, 'qs']
    ],
    etapes: [
      'Marinez le poulet émincé avec le yaourt nature, les épices, 2 gousses d\'ail, le jus de citron et le sel (1 h).',
      'Faites-le dorer à feu vif dans une poêle 10 à 12 min.',
      'Sauce blanche : yaourt grec, ail râpé, menthe ciselée, sel.',
      'Garnissez les pitas chaudes de poulet, crudités et sauce.'
    ]
  },
  {
    id: 'magret-miel', nom: 'Magret de canard au miel', cat: 'Volailles', cuisine: 'Française', emoji: '🦆',
    desc: 'Magret rosé, sauce miel-balsamique.',
    portions: 4, prep: 10, cuisson: 20, diff: 2,
    ing: [
      ['canard_magret', 2, 'pc'], ['miel', 3, 'cs'], ['vinaigre_balsamique', 3, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Quadrillez la peau des magrets sans entailler la chair.',
      'Faites-les cuire côté peau à feu moyen 10 min en retirant la graisse au fur et à mesure.',
      'Retournez et cuisez 4 min côté chair. Laissez reposer 5 min sous aluminium.',
      'Videz la graisse, déglacez la poêle avec le miel et le vinaigre, réduisez 2 min.',
      'Tranchez les magrets et nappez de sauce.'
    ],
    astuce: 'Gardez la graisse de canard pour faire des pommes sarladaises.'
  },
  {
    id: 'dinde-moutarde', nom: 'Émincé de dinde à la moutarde', cat: 'Volailles', cuisine: 'Française', emoji: '🦃',
    desc: 'Plat léger et riche en protéines, prêt en 20 minutes.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [
      ['dinde_escalope', 600], ['moutarde', 2, 'cs'], ['creme_15', 200, 'ml'], ['echalote', 1, 'pc'], ['huile_neutre', 1, 'cs'],
      ['haricots_verts', 400], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les haricots verts 8 min à l\'eau salée.',
      'Émincez la dinde et faites-la dorer dans l\'huile 5 min avec l\'échalote.',
      'Ajoutez la crème et la moutarde, laissez réduire 5 min.',
      'Servez avec les haricots verts.'
    ]
  },
  {
    id: 'poulet-tandoori', nom: 'Poulet tandoori', cat: 'Volailles', cuisine: 'Indienne', emoji: '🔥',
    desc: 'Cuisses marinées au yaourt et épices, rôties au four.',
    portions: 4, prep: 15, cuisson: 35, diff: 1,
    ing: [
      ['poulet_cuisse', 800], ['yaourt_nature', 2, 'pc'], ['garam_masala', 2, 'cc'], ['paprika', 2, 'cc'], ['curcuma', 1, 'cc'],
      ['piment_poudre', 0.5, 'cc'], ['citron', 1, 'pc'], ['ail', 3, 'pc'], ['gingembre', 15], ['sel', 1, 'cc']
    ],
    etapes: [
      'Mélangez le yaourt, les épices, le jus de citron, l\'ail et le gingembre râpés, le sel.',
      'Entaillez la viande et enrobez-la de marinade. Laissez mariner au moins 2 h (idéalement une nuit).',
      'Enfournez 30 à 35 min à 220 °C, puis 3 min sous le grill pour colorer.'
    ],
    astuce: 'Servez avec du riz basmati et un raïta (yaourt-concombre-menthe).'
  },
  {
    id: 'poulet-general-tso', nom: 'Poulet du Général Tso', cat: 'Volailles', cuisine: 'Chinoise', emoji: '🥡',
    desc: 'Poulet croustillant, sauce sucrée-piquante.',
    portions: 4, prep: 20, cuisson: 20, diff: 2,
    ing: [
      ['poulet_cuisse', 700], ['maizena', 50], ['sauce_soja', 4, 'cs'], ['vinaigre_riz', 2, 'cs'], ['sucre', 3, 'cs'], ['ail', 2, 'pc'],
      ['gingembre', 10], ['piment', 1, 'pc'], ['huile_neutre', 4, 'cs'], ['graines_sesame', 1, 'cs'], ['riz_blanc', 280]
    ],
    etapes: [
      'Coupez le poulet en morceaux et enrobez-les de 40 g de maïzena.',
      'Faites-les frire dans l\'huile chaude jusqu\'à ce qu\'ils soient dorés et croustillants. Réservez.',
      'Mélangez sauce soja, vinaigre, sucre, reste de maïzena et 10 cl d\'eau.',
      'Faites revenir l\'ail, le gingembre et le piment, ajoutez la sauce et laissez épaissir.',
      'Ajoutez le poulet, enrobez bien, parsemez de sésame. Servez avec le riz.'
    ]
  },
  {
    id: 'lapin-moutarde', nom: 'Lapin à la moutarde', cat: 'Volailles', cuisine: 'Française', emoji: '🐇',
    desc: 'Lapin mijoté au vin blanc, sauce crème-moutarde.',
    portions: 4, prep: 15, cuisson: 60, diff: 2,
    ing: [
      ['lapin', 1000, 'g', 'Lapin découpé'], ['moutarde', 4, 'cs'], ['creme_15', 200, 'ml'], ['vin_blanc', 200, 'ml'], ['echalote', 3, 'pc'],
      ['thym', 2, 'pc'], ['beurre', 20], ['huile_neutre', 1, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Badigeonnez les morceaux de lapin avec la moitié de la moutarde.',
      'Faites-les dorer dans le beurre et l\'huile, ajoutez les échalotes.',
      'Déglacez au vin blanc, ajoutez le thym, couvrez et laissez mijoter 45 min.',
      'Ajoutez la crème et le reste de moutarde, laissez réduire 5 min.'
    ]
  },
  {
    id: 'coq-au-vin', nom: 'Coq au vin', cat: 'Volailles', cuisine: 'Française', emoji: '🐓',
    desc: 'Volaille mijotée au vin rouge, lardons et champignons.',
    portions: 6, prep: 30, cuisson: 120, diff: 2,
    ing: [
      ['poulet_cuisse', 1500, 'g', 'Coq ou poulet en morceaux'], ['lardons', 150], ['champignons', 250], ['oignon', 2, 'pc'], ['carotte', 2, 'pc'],
      ['vin_rouge', 750, 'ml'], ['farine', 2, 'cs'], ['beurre', 30], ['ail', 2, 'pc'], ['thym', 2, 'pc'], ['laurier', 2, 'pc'],
      ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites dorer les morceaux de volaille dans le beurre, réservez.',
      'Faites revenir les lardons, les oignons et les carottes.',
      'Remettez la volaille, saupoudrez de farine, mélangez. Versez le vin, ajoutez ail, thym, laurier.',
      'Laissez mijoter 1 h 30 à couvert (2 h 30 pour un vrai coq). Ajoutez les champignons 20 min avant la fin.'
    ]
  },
  {
    id: 'wrap-poulet', nom: 'Wraps poulet-avocat', cat: 'Burgers & sandwichs', cuisine: 'Américaine', emoji: '🌯',
    desc: 'Le déjeuner à emporter : poulet grillé, avocat, crudités et sauce yaourt.',
    portions: 4, prep: 15, cuisson: 10, diff: 1,
    ing: [
      ['tortilla', 4, 'pc'], ['poulet_blanc', 400], ['avocat', 1, 'pc'], ['tomate', 2, 'pc'], ['salade', 80], ['yaourt_grec', 100],
      ['citron', 0.5, 'pc'], ['paprika', 1, 'cc'], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Assaisonnez le poulet de paprika et sel, faites-le griller dans l\'huile 5 min par face. Tranchez.',
      'Mélangez le yaourt avec le jus de citron et une pincée de sel.',
      'Garnissez les tortillas de sauce, salade, tomate, avocat et poulet. Roulez serré.'
    ]
  }
]);
