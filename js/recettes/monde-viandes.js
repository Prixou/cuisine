/* Lot 2 — Viandes (bœuf, porc, veau, agneau) */
window.RECETTES = (window.RECETTES || []).concat([
  {
    id: 'boeuf-mironton', nom: 'Bœuf miroton', cat: 'Viandes', cuisine: 'Française', emoji: '🧅',
    desc: 'Bœuf mijoté dans une sauce aux oignons fondants, idéal pour les restes de pot-au-feu.',
    portions: 4, prep: 15, cuisson: 45, diff: 1,
    ing: [['boeuf_paleron', 600, 'g', 'Bœuf bouilli (restes de pot-au-feu)'], ['oignon', 4, 'pc'], ['vin_blanc', 100, 'ml'], ['bouillon', 300, 'ml'],
      ['concentre_tomate', 1, 'cs'], ['farine', 1, 'cs'], ['beurre', 30], ['vinaigre', 1, 'cs'], ['persil', 10], ['chapelure', 20], ['sel', 0, 'qs']],
    etapes: ['Faites fondre les oignons émincés dans le beurre 15 min.', 'Saupoudrez de farine, ajoutez le vin, le bouillon, le concentré et le vinaigre. Laissez épaissir 10 min.',
      'Disposez la viande en tranches dans un plat, nappez de sauce, saupoudrez de chapelure.', 'Enfournez 20 min à 180 °C. Parsemez de persil.']
  },
  {
    id: 'daube-provencale', nom: 'Daube provençale', cat: 'Viandes', cuisine: 'Provençale', emoji: '🍷',
    desc: 'Bœuf mariné et mijoté au vin rouge, olives et zeste d\'orange.',
    portions: 6, prep: 30, cuisson: 210, diff: 2,
    ing: [['boeuf_paleron', 1500], ['vin_rouge', 750, 'ml'], ['carotte', 3, 'pc'], ['oignon', 2, 'pc'], ['ail', 4, 'pc'], ['tomate', 2, 'pc'], ['lardons', 150],
      ['orange', 0.5, 'pc', 'Zeste d\'orange'], ['olives', 80, 'g', 'Olives noires'], ['farine', 1, 'cs'], ['huile_olive', 3, 'cs'], ['thym', 3, 'pc'], ['laurier', 2, 'pc'], ['sel', 0, 'qs']],
    etapes: ['La veille, faites mariner la viande en morceaux avec le vin, les carottes, les oignons, l\'ail, le zeste et les herbes.', 'Égouttez la viande, faites-la dorer dans l\'huile avec les lardons, saupoudrez de farine.',
      'Ajoutez la marinade et les tomates, portez à ébullition puis laissez mijoter 3 h à feu très doux.', 'Ajoutez les olives 30 min avant la fin.'],
    astuce: 'Servie traditionnellement avec des pâtes ou de la polenta.'
  },
  {
    id: 'roti-boeuf', nom: 'Rôti de bœuf', cat: 'Viandes', cuisine: 'Française', emoji: '🥩',
    desc: 'Rôti saisi puis cuit au four, rosé à cœur.',
    portions: 6, prep: 10, cuisson: 40, diff: 1,
    ing: [['boeuf_steak', 1200, 'g', 'Rôti de bœuf'], ['beurre', 30], ['huile_neutre', 1, 'cs'], ['ail', 3, 'pc'], ['thym', 2, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Sortez le rôti 1 h avant. Préchauffez le four à 220 °C.', 'Faites-le dorer sur toutes les faces dans l\'huile et le beurre.',
      'Enfournez avec l\'ail et le thym : 15 min par livre pour une viande rosée.', 'Laissez reposer 10 min sous aluminium avant de trancher. Salez, poivrez.']
  },
  {
    id: 'steak-poivre', nom: 'Steak au poivre', cat: 'Viandes', cuisine: 'Française', emoji: '🥩',
    desc: 'Pavé enrobé de poivre concassé, flambé au cognac, sauce crème.',
    portions: 4, prep: 10, cuisson: 15, diff: 2,
    ing: [['boeuf_steak', 720, 'g', 'Pavés de bœuf (4)'], ['poivre', 2, 'cs', 'Poivre en grains concassé'], ['creme_30', 150, 'ml'], ['alcool_fort', 3, 'cs', 'Cognac'],
      ['beurre', 30], ['huile_neutre', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Pressez le poivre concassé sur les deux faces des pavés.', 'Saisissez-les dans l\'huile et le beurre 3 min par face. Salez, réservez au chaud.',
      'Flambez la poêle au cognac, ajoutez la crème et laissez réduire 2 min.', 'Nappez les steaks de sauce.']
  },
  {
    id: 'bavette-echalote', nom: 'Bavette à l\'échalote', cat: 'Viandes', cuisine: 'Française', emoji: '🥩',
    desc: 'Le classique des bistrots : bavette saisie et échalotes confites.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [['boeuf_bavette', 700], ['echalote', 6, 'pc'], ['beurre', 40], ['vin_rouge', 100, 'ml'], ['vinaigre', 1, 'cs'], ['persil', 10], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Faites fondre les échalotes émincées dans la moitié du beurre 8 min.', 'Ajoutez le vin et le vinaigre, laissez réduire. Réservez.',
      'Saisissez la bavette dans le reste du beurre très chaud, 2 min par face.', 'Servez nappée d\'échalotes, salez, poivrez, parsemez de persil.']
  },
  {
    id: 'boeuf-wellington', nom: 'Bœuf Wellington', cat: 'Viandes', cuisine: 'Anglaise', emoji: '🥮',
    desc: 'Filet de bœuf en croûte feuilletée, duxelles de champignons et jambon cru.',
    portions: 8, prep: 60, cuisson: 45, diff: 3,
    ing: [['boeuf_steak', 1200, 'g', 'Filet de bœuf'], ['pate_feuilletee', 2, 'pc'], ['champignons', 500], ['echalote', 2, 'pc'], ['jambon_cru', 8, 'pc'],
      ['moutarde', 2, 'cs'], ['oeuf', 1, 'pc'], ['beurre', 20], ['thym', 2, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Saisissez le filet sur toutes les faces, badigeonnez-le de moutarde et laissez refroidir.', 'Duxelles : hachez finement champignons et échalotes, faites-les sécher au beurre avec le thym jusqu\'à évaporation complète.',
      'Sur un film, étalez le jambon, la duxelles, posez le filet et roulez serré. Réfrigérez 20 min.',
      'Enveloppez dans la pâte feuilletée, dorez à l\'œuf et enfournez 35 à 40 min à 200 °C (52 °C à cœur pour une viande rosée).', 'Laissez reposer 10 min avant de trancher.']
  },
  {
    id: 'goulash', nom: 'Goulash hongrois', cat: 'Viandes', cuisine: 'Hongroise', emoji: '🌶️',
    desc: 'Ragoût de bœuf au paprika, poivrons et pommes de terre.',
    portions: 6, prep: 25, cuisson: 150, diff: 2,
    ing: [['boeuf_paleron', 1200], ['oignon', 3, 'pc'], ['paprika', 3, 'cs'], ['poivron', 2, 'pc'], ['tomates_concassees', 400], ['pomme_de_terre', 600],
      ['ail', 2, 'pc'], ['cumin', 1, 'cc'], ['bouillon', 1000, 'ml'], ['huile_neutre', 2, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites fondre les oignons dans l\'huile 10 min.', 'Ajoutez la viande en cubes, faites-la dorer, puis le paprika et le cumin hors du feu.',
      'Ajoutez l\'ail, les tomates et le bouillon. Laissez mijoter 1 h 30.', 'Ajoutez les poivrons et les pommes de terre en cubes, poursuivez 40 min.']
  },
  {
    id: 'boeuf-lok-lak', nom: 'Bœuf lok lak', cat: 'Viandes', cuisine: 'Cambodgienne', emoji: '🥩',
    desc: 'Dés de bœuf sautés, sauce poivre-citron vert, salade croquante et riz.',
    portions: 4, prep: 20, cuisson: 10, diff: 1,
    ing: [['boeuf_steak', 600], ['sauce_soja', 3, 'cs'], ['sauce_huitre', 2, 'cs'], ['sucre', 1, 'cs'], ['ail', 2, 'pc'], ['poivre', 1, 'cc'], ['salade', 100],
      ['tomate', 2, 'pc'], ['oignon_rouge', 1, 'pc'], ['citron_vert', 2, 'pc'], ['huile_neutre', 1, 'cs'], ['riz_blanc', 280]],
    etapes: ['Marinez la viande en cubes avec les sauces, le sucre et l\'ail 30 min.', 'Faites cuire le riz.',
      'Saisissez la viande à feu très vif 3 min.', 'Servez sur la salade, les tomates et l\'oignon, avec une sauce citron vert-poivre-sel pour tremper.']
  },
  {
    id: 'bulgogi', nom: 'Bulgogi', cat: 'Viandes', cuisine: 'Coréenne', emoji: '🔥',
    desc: 'Fines lamelles de bœuf marinées au soja, poire et sésame, grillées.',
    portions: 4, prep: 20, cuisson: 10, diff: 1,
    ing: [['boeuf_steak', 600, 'g', 'Bœuf (entrecôte) très finement tranché'], ['sauce_soja', 5, 'cs'], ['poire', 0.5, 'pc'], ['sucre', 2, 'cs'], ['ail', 3, 'pc'],
      ['gingembre', 10], ['huile_sesame', 2, 'cs'], ['oignon', 1, 'pc'], ['oignon_nouveau', 3, 'pc'], ['graines_sesame', 1, 'cs'], ['riz_blanc', 280]],
    etapes: ['Mixez la poire, l\'ail, le gingembre avec la sauce soja, le sucre et l\'huile de sésame.', 'Marinez la viande et l\'oignon émincé au moins 1 h.',
      'Faites griller à feu très vif en petites quantités, 2 à 3 min.', 'Parsemez d\'oignon nouveau et de sésame. Servez avec le riz.']
  },
  {
    id: 'lomo-saltado', nom: 'Lomo saltado', cat: 'Viandes', cuisine: 'Péruvienne', emoji: '🍟',
    desc: 'Bœuf sauté au wok avec tomates, oignon et frites : la fusion sino-péruvienne.',
    portions: 4, prep: 20, cuisson: 30, diff: 2,
    ing: [['boeuf_steak', 600], ['oignon_rouge', 1, 'pc'], ['tomate', 3, 'pc'], ['piment', 1, 'pc'], ['sauce_soja', 3, 'cs'], ['vinaigre', 2, 'cs'], ['ail', 2, 'pc'],
      ['cumin', 1, 'cc'], ['coriandre', 15], ['pomme_de_terre', 600], ['huile_neutre', 4, 'cs'], ['riz_blanc', 200]],
    etapes: ['Faites des frites au four avec les pommes de terre et 2 c. à soupe d\'huile (35 min à 220 °C). Faites cuire le riz.',
      'Saisissez la viande en lanières à feu très vif dans le reste d\'huile, réservez.', 'Faites sauter l\'oignon en quartiers, l\'ail et le piment 2 min, ajoutez les tomates.',
      'Remettez la viande, la sauce soja, le vinaigre et le cumin. Mélangez avec les frites et la coriandre. Servez avec le riz.']
  },
  {
    id: 'feijoada', nom: 'Feijoada', cat: 'Viandes', cuisine: 'Brésilienne', emoji: '🫘',
    desc: 'Le plat national brésilien : haricots noirs mijotés avec porc et saucisses.',
    portions: 8, prep: 30, cuisson: 120, diff: 2,
    ing: [['haricots_noirs', 1200], ['porc_echine', 600], ['saucisse', 4, 'pc', 'Saucisses fumées'], ['lardons', 200], ['oignon', 2, 'pc'], ['ail', 4, 'pc'],
      ['laurier', 2, 'pc'], ['bouillon', 1000, 'ml'], ['riz_blanc', 400], ['orange', 2, 'pc', 'Oranges (pour servir)'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer les lardons, puis le porc en cubes et les saucisses en tronçons.', 'Ajoutez l\'oignon et l\'ail, puis les haricots, le laurier et le bouillon.',
      'Laissez mijoter 1 h 30 en écrasant un peu de haricots pour épaissir.', 'Servez avec le riz et des quartiers d\'orange.']
  },
  {
    id: 'irish-stew', nom: 'Irish stew', cat: 'Viandes', cuisine: 'Irlandaise', emoji: '🍀',
    desc: 'Ragoût irlandais d\'agneau, pommes de terre et carottes.',
    portions: 6, prep: 25, cuisson: 120, diff: 1,
    ing: [['agneau_epaule', 1200], ['pomme_de_terre', 1000], ['carotte', 3, 'pc'], ['oignon', 3, 'pc'], ['bouillon', 1000, 'ml'], ['thym', 3, 'pc'], ['persil', 10], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Dans une cocotte, alternez couches de viande, oignons, carottes et pommes de terre, en assaisonnant chaque couche.',
      'Versez le bouillon, ajoutez le thym.', 'Couvrez et laissez cuire 2 h à feu très doux ou au four à 160 °C.', 'Parsemez de persil.']
  },
  {
    id: 'souvlaki-porc', nom: 'Souvlaki de porc et tzatziki', cat: 'Viandes', cuisine: 'Grecque', emoji: '🍢',
    desc: 'Brochettes de porc marinées au citron et origan, pita et tzatziki.',
    portions: 4, prep: 25, cuisson: 12, diff: 1,
    ing: [['porc_filet', 600], ['huile_olive', 3, 'cs'], ['citron', 1, 'pc'], ['origan', 2, 'cc'], ['ail', 3, 'pc'], ['pain_pita', 4, 'pc'], ['tomate', 2, 'pc'],
      ['oignon_rouge', 1, 'pc'], ['yaourt_grec', 200], ['concombre', 0.5, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Marinez le porc en cubes avec l\'huile, le citron, l\'origan, 2 gousses d\'ail et le sel (1 h).', 'Tzatziki : yaourt, concombre râpé pressé, ail râpé, sel.',
      'Enfilez sur des brochettes et faites griller 10 à 12 min en les retournant.', 'Servez avec les pitas chaudes, tomates, oignon et tzatziki.']
  },
  {
    id: 'cotes-porc-miel-soja', nom: 'Côtes de porc caramélisées miel-soja', cat: 'Viandes', cuisine: 'Fusion', emoji: '🍯',
    desc: 'Côtes de porc laquées, prêtes en 20 minutes.',
    portions: 4, prep: 5, cuisson: 15, diff: 1,
    ing: [['porc_cote', 700, 'g', 'Côtes de porc (4)'], ['miel', 3, 'cs'], ['sauce_soja', 3, 'cs'], ['ail', 2, 'pc'], ['huile_neutre', 1, 'cs'], ['thym', 1, 'pc']],
    etapes: ['Mélangez le miel, la sauce soja et l\'ail écrasé.', 'Faites dorer les côtes 4 min par face dans l\'huile.',
      'Versez la sauce et laissez caraméliser 3 à 4 min en retournant les côtes.']
  },
  {
    id: 'roti-porc-pommes-cidre', nom: 'Rôti de porc aux pommes et au cidre', cat: 'Viandes', cuisine: 'Normande', emoji: '🍏',
    desc: 'Rôti fondant, pommes caramélisées et jus au cidre.',
    portions: 6, prep: 15, cuisson: 75, diff: 1,
    ing: [['porc_echine', 1000, 'g', 'Rôti de porc (échine)'], ['pomme', 4, 'pc'], ['oignon', 2, 'pc'], ['cidre', 250, 'ml'], ['beurre', 20], ['thym', 2, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Faites dorer le rôti sur toutes ses faces dans le beurre.', 'Ajoutez les oignons et les pommes en quartiers, le thym et le cidre.',
      'Enfournez 1 h à 180 °C en arrosant régulièrement.', 'Laissez reposer 10 min avant de trancher.']
  },
  {
    id: 'travers-porc-laques', nom: 'Travers de porc laqués (spare ribs)', cat: 'Viandes', cuisine: 'Américaine', emoji: '🍖',
    desc: 'Ribs fondants cuits longtemps puis laqués au barbecue.',
    portions: 4, prep: 15, cuisson: 150, diff: 2,
    ing: [['porc_travers', 900, 'g', 'Travers de porc (≈ 1,5 kg avec les os)'], ['sauce_bbq', 100], ['miel', 3, 'cs'], ['sauce_soja', 4, 'cs'], ['ail', 3, 'pc'], ['paprika', 1, 'cs'], ['ketchup', 2, 'cs']],
    etapes: ['Frottez les travers avec le paprika et l\'ail, enveloppez-les de papier aluminium.', 'Faites cuire 2 h à 150 °C.',
      'Mélangez la sauce barbecue, le miel, la sauce soja et le ketchup.', 'Badigeonnez les travers et enfournez 20 min à 220 °C en les laquant 2 ou 3 fois.']
  },
  {
    id: 'char-siu', nom: 'Porc laqué char siu', cat: 'Viandes', cuisine: 'Chinoise', emoji: '🥢',
    desc: 'Filet de porc laqué à la cantonaise, hoisin et cinq-épices.',
    portions: 4, prep: 15, cuisson: 40, diff: 2,
    ing: [['porc_filet', 600], ['sauce_hoisin', 3, 'cs'], ['sauce_soja', 2, 'cs'], ['miel', 3, 'cs'], ['cinq_epices', 1, 'cc'], ['ail', 2, 'pc'], ['riz_blanc', 280], ['chou_chinois', 2, 'pc']],
    etapes: ['Mélangez la sauce hoisin, la sauce soja, 2 c. à soupe de miel, le cinq-épices et l\'ail. Marinez le porc au moins 4 h.',
      'Enfournez sur une grille 30 min à 200 °C en badigeonnant de marinade.', 'Laquez avec le reste du miel et passez 5 min sous le grill.',
      'Tranchez, servez avec le riz et le pak choï sauté.']
  },
  {
    id: 'tonkatsu', nom: 'Tonkatsu', cat: 'Viandes', cuisine: 'Japonaise', emoji: '🍱',
    desc: 'Côtelette de porc panée au panko, chou émincé et sauce tonkatsu.',
    portions: 4, prep: 20, cuisson: 15, diff: 2,
    ing: [['porc_filet', 600, 'g', 'Côtelettes de porc désossées'], ['farine', 50], ['oeuf', 2, 'pc'], ['chapelure', 120, 'g', 'Chapelure panko'],
      ['huile_neutre', 80, 'ml', 'Huile de friture (part absorbée)'], ['chou', 200], ['ketchup', 3, 'cs'], ['sauce_worcestershire', 2, 'cs'], ['sauce_soja', 1, 'cs'], ['riz_blanc', 280]],
    etapes: ['Aplatissez légèrement la viande, salez. Passez-la dans la farine, l\'œuf puis le panko.', 'Faites frire 5 à 6 min à 170 °C jusqu\'à ce qu\'elle soit dorée.',
      'Sauce : ketchup, Worcestershire et sauce soja.', 'Tranchez, servez avec le chou très finement émincé et le riz.']
  },
  {
    id: 'saltimbocca', nom: 'Saltimbocca alla romana', cat: 'Viandes', cuisine: 'Italienne', emoji: '🌿',
    desc: 'Escalopes de veau, jambon cru et sauge, déglacées au vin blanc.',
    portions: 4, prep: 15, cuisson: 10, diff: 1,
    ing: [['veau_escalope', 600], ['jambon_cru', 8, 'pc'], ['sauge', 8, 'pc'], ['beurre', 30], ['vin_blanc', 100, 'ml'], ['farine', 1, 'cs'], ['poivre', 0, 'qs']],
    etapes: ['Aplatissez les escalopes, coupez-les en deux.', 'Posez une feuille de sauge et une tranche de jambon sur chacune, fixez avec un pique.',
      'Farinez légèrement et faites dorer 2 min de chaque côté dans le beurre.', 'Déglacez au vin blanc et laissez réduire 1 min. Nappez.']
  },
  {
    id: 'escalope-normande', nom: 'Escalope de veau à la normande', cat: 'Viandes', cuisine: 'Normande', emoji: '🍄',
    desc: 'Veau, champignons, crème et une pointe de calvados.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['veau_escalope', 600], ['champignons', 250], ['creme_30', 200, 'ml'], ['alcool_fort', 2, 'cs', 'Calvados'], ['beurre', 20], ['farine', 1, 'cs'], ['echalote', 1, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Farinez les escalopes et faites-les dorer 3 min par face dans le beurre. Réservez.', 'Faites revenir l\'échalote et les champignons 6 min.',
      'Flambez au calvados, ajoutez la crème et laissez réduire 3 min.', 'Remettez les escalopes 2 min dans la sauce.']
  },
  {
    id: 'vitello-tonnato', nom: 'Vitello tonnato', cat: 'Viandes', cuisine: 'Italienne', emoji: '🐟',
    desc: 'Veau froid en fines tranches, sauce onctueuse au thon et câpres.',
    portions: 6, prep: 30, cuisson: 60, diff: 2,
    ing: [['veau_escalope', 1000, 'g', 'Noix de veau (rôti)'], ['thon_boite', 160], ['mayonnaise', 6, 'cs'], ['capres', 2, 'cs'], ['anchois', 4, 'pc'], ['citron', 1, 'pc'],
      ['vin_blanc', 200, 'ml'], ['carotte', 1, 'pc'], ['oignon', 1, 'pc'], ['celeri', 1, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Pochez le veau 1 h dans de l\'eau avec le vin, la carotte, l\'oignon et le céleri. Laissez refroidir dans le bouillon.',
      'Mixez le thon, les anchois, la mayonnaise, la moitié des câpres, le jus de citron et un peu de bouillon.', 'Tranchez finement le veau, nappez de sauce et parsemez de câpres. Servez frais.']
  },
  {
    id: 'paupiettes-veau', nom: 'Paupiettes de veau', cat: 'Viandes', cuisine: 'Française', emoji: '🎀',
    desc: 'Escalopes roulées autour d\'une farce, mijotées au vin blanc.',
    portions: 4, prep: 30, cuisson: 50, diff: 2,
    ing: [['veau_escalope', 480, 'g', 'Escalopes de veau fines (4)'], ['porc_hache', 250], ['echalote', 1, 'pc'], ['persil', 10], ['carotte', 2, 'pc'], ['oignon', 1, 'pc'],
      ['vin_blanc', 150, 'ml'], ['bouillon', 200, 'ml'], ['concentre_tomate', 1, 'cs'], ['beurre', 20], ['thym', 1, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Mélangez la chair à saucisse avec l\'échalote et le persil hachés.', 'Garnissez les escalopes, roulez-les et ficelez-les.',
      'Faites-les dorer dans le beurre, ajoutez l\'oignon et les carottes.', 'Ajoutez le vin, le bouillon, le concentré et le thym. Couvrez et laissez mijoter 45 min.']
  },
  {
    id: 'rogan-josh', nom: 'Curry d\'agneau rogan josh', cat: 'Viandes', cuisine: 'Indienne', emoji: '🍛',
    desc: 'Agneau mijoté dans une sauce rouge parfumée au yaourt et aux épices.',
    portions: 4, prep: 20, cuisson: 90, diff: 2,
    ing: [['agneau_epaule', 800], ['yaourt_nature', 1, 'pc'], ['oignon', 2, 'pc'], ['ail', 3, 'pc'], ['gingembre', 20], ['tomates_concassees', 400],
      ['garam_masala', 2, 'cc'], ['paprika', 2, 'cc'], ['cumin', 1, 'cc'], ['cardamome', 0.5, 'cc'], ['cannelle', 0.5, 'cc'], ['huile_neutre', 2, 'cs'],
      ['riz_blanc', 280, 'g', 'Riz basmati'], ['coriandre', 10], ['sel', 0, 'qs']],
    etapes: ['Faites dorer les oignons dans l\'huile, ajoutez l\'ail, le gingembre et les épices 1 min.', 'Ajoutez l\'agneau en cubes et faites-le colorer.',
      'Incorporez le yaourt cuillère par cuillère, puis les tomates. Laissez mijoter 1 h 15 à couvert.', 'Servez avec le riz et la coriandre.']
  },
  {
    id: 'souris-agneau', nom: 'Souris d\'agneau confites', cat: 'Viandes', cuisine: 'Française', emoji: '🍖',
    desc: 'Cuites 3 heures, la viande se détache toute seule de l\'os.',
    portions: 4, prep: 15, cuisson: 180, diff: 2,
    ing: [['agneau_gigot', 1000, 'g', 'Souris d\'agneau (4, partie comestible)'], ['ail', 8, 'pc'], ['romarin', 2, 'pc'], ['thym', 2, 'pc'], ['vin_blanc', 200, 'ml'],
      ['bouillon', 300, 'ml'], ['oignon', 2, 'pc'], ['carotte', 2, 'pc'], ['huile_olive', 2, 'cs'], ['miel', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer les souris dans l\'huile, réservez.', 'Faites revenir les oignons et les carottes, ajoutez l\'ail en chemise, les herbes, le vin et le bouillon.',
      'Remettez les souris, couvrez et enfournez 3 h à 150 °C en les retournant à mi-cuisson.', 'Ajoutez le miel au jus et faites réduire avant de servir.']
  },
  {
    id: 'cotelettes-agneau', nom: 'Côtelettes d\'agneau en persillade', cat: 'Viandes', cuisine: 'Française', emoji: '🌿',
    desc: 'Côtelettes grillées minute, ail et persil.',
    portions: 4, prep: 10, cuisson: 8, diff: 1,
    ing: [['agneau_epaule', 800, 'g', 'Côtelettes d\'agneau (12)'], ['ail', 3, 'pc'], ['persil', 20], ['huile_olive', 2, 'cs'], ['thym', 1, 'pc'], ['citron', 0.5, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Badigeonnez les côtelettes d\'huile et de thym.', 'Faites-les griller 2 à 3 min par face à feu vif.',
      'Persillade : hachez l\'ail et le persil. Parsemez sur les côtelettes chaudes avec un trait de citron.']
  },
  {
    id: 'boudin-pommes', nom: 'Boudin noir aux pommes', cat: 'Viandes', cuisine: 'Normande', emoji: '🍎',
    desc: 'Boudin poêlé et pommes caramélisées au beurre.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['boudin_noir', 4, 'pc'], ['pomme', 4, 'pc'], ['beurre', 30], ['oignon', 1, 'pc'], ['sucre', 1, 'cs']],
    etapes: ['Coupez les pommes en quartiers et faites-les dorer dans le beurre avec le sucre 10 min.', 'Faites fondre l\'oignon émincé à côté.',
      'Piquez le boudin et faites-le cuire à feu doux 10 min en le retournant.', 'Servez avec les pommes et les oignons.']
  },
  {
    id: 'potee-auvergnate', nom: 'Potée auvergnate', cat: 'Viandes', cuisine: 'Auvergnate', emoji: '🥬',
    desc: 'Chou, palette, saucisses et légumes mijotés ensemble.',
    portions: 6, prep: 30, cuisson: 150, diff: 1,
    ing: [['chou', 1000, 'g', 'Chou vert'], ['porc_echine', 800, 'g', 'Palette de porc demi-sel'], ['saucisse', 4, 'pc'], ['lardons', 200], ['pomme_de_terre', 1000],
      ['carotte', 4, 'pc'], ['navet', 3, 'pc'], ['poireau', 2, 'pc'], ['oignon', 1, 'pc'], ['laurier', 2, 'pc'], ['thym', 2, 'pc']],
    etapes: ['Faites dessaler la palette 2 h dans l\'eau froide si besoin.', 'Mettez-la dans un grand faitout d\'eau froide avec l\'oignon et les herbes, laissez cuire 1 h.',
      'Ajoutez le chou blanchi et coupé en quartiers, les carottes, navets, poireaux et lardons. Cuisez 40 min.', 'Ajoutez les pommes de terre et les saucisses, poursuivez 30 min.']
  },
  {
    id: 'raclette', nom: 'Raclette', cat: 'Viandes', cuisine: 'Savoyarde', emoji: '🧀',
    desc: 'Fromage fondu sur pommes de terre, charcuterie et cornichons.',
    portions: 6, prep: 10, cuisson: 25, diff: 1,
    ing: [['pomme_de_terre', 1500, 'g', 'Pommes de terre (grenailles)'], ['fromage_raclette', 1200], ['jambon_cru', 150], ['jambon_blanc', 200], ['cornichons', 100], ['oignon_rouge', 1, 'pc']],
    etapes: ['Faites cuire les pommes de terre avec la peau 25 min à l\'eau salée. Gardez-les au chaud.', 'Coupez le fromage en tranches.',
      'Chacun fait fondre son fromage dans les coupelles et le verse sur les pommes de terre.', 'Servez avec la charcuterie, les cornichons et l\'oignon.'],
    astuce: 'Comptez environ 200 g de fromage par personne.'
  },
  {
    id: 'baeckeoffe', nom: 'Baeckeoffe', cat: 'Viandes', cuisine: 'Alsacienne', emoji: '🍲',
    desc: 'Trois viandes marinées au riesling et cuites lentement avec les pommes de terre.',
    portions: 8, prep: 40, cuisson: 210, diff: 2,
    ing: [['boeuf_paleron', 600], ['porc_echine', 600], ['agneau_epaule', 600], ['pomme_de_terre', 1500], ['oignon', 3, 'pc'], ['poireau', 1, 'pc'], ['carotte', 2, 'pc'],
      ['vin_blanc', 750, 'ml', 'Riesling'], ['ail', 3, 'pc'], ['thym', 2, 'pc'], ['laurier', 2, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['La veille, marinez les viandes en cubes avec le vin, l\'ail, un oignon et les herbes.', 'Dans une terrine, alternez pommes de terre, viandes et légumes émincés.',
      'Versez la marinade, fermez le couvercle (traditionnellement soudé avec un cordon de pâte).', 'Enfournez 3 h 30 à 180 °C.']
  },
  {
    id: 'foie-veau-venitienne', nom: 'Foie de veau à la vénitienne', cat: 'Viandes', cuisine: 'Italienne', emoji: '🧅',
    desc: 'Lanières de foie saisies et oignons fondants.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['foie_veau', 600], ['oignon', 4, 'pc'], ['beurre', 30], ['huile_olive', 1, 'cs'], ['vin_blanc', 100, 'ml'], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Faites fondre les oignons émincés dans l\'huile et la moitié du beurre 20 min à feu doux.', 'Coupez le foie en fines lanières.',
      'Saisissez-le 2 min à feu vif dans le reste du beurre.', 'Ajoutez les oignons et le vin, mélangez 1 min. Parsemez de persil.']
  },
  {
    id: 'pain-de-viande', nom: 'Pain de viande (meatloaf)', cat: 'Viandes', cuisine: 'Américaine', emoji: '🍞',
    desc: 'Viande hachée moelleuse cuite en terrine, glaçage au ketchup.',
    portions: 6, prep: 20, cuisson: 60, diff: 1,
    ing: [['boeuf_hache_15', 500], ['porc_hache', 300], ['oeuf', 2, 'pc'], ['chapelure', 60], ['lait_demi', 100, 'ml'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'],
      ['ketchup', 4, 'cs'], ['moutarde', 1, 'cs'], ['sauce_worcestershire', 1, 'cs'], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Faites tremper la chapelure dans le lait.', 'Mélangez avec les viandes, les œufs, l\'oignon et l\'ail hachés, la Worcestershire, le persil et le sel.',
      'Tassez dans un moule à cake. Mélangez ketchup et moutarde et étalez sur le dessus.', 'Enfournez 1 h à 180 °C. Laissez reposer 10 min avant de trancher.']
  },
  {
    id: 'boeuf-carottes', nom: 'Bœuf carottes', cat: 'Viandes', cuisine: 'Française', emoji: '🥕',
    desc: 'Le mijoté de grand-mère : bœuf fondant et carottes confites.',
    portions: 6, prep: 20, cuisson: 180, diff: 1,
    ing: [['boeuf_paleron', 1200, 'g', 'Bœuf à braiser (paleron, macreuse)'], ['carotte', 1200], ['oignon', 2, 'pc'], ['lardons', 100], ['vin_blanc', 300, 'ml'],
      ['bouillon', 300, 'ml'], ['thym', 2, 'pc'], ['laurier', 1, 'pc'], ['huile_neutre', 2, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer la viande en morceaux dans l\'huile, puis les lardons et les oignons.', 'Ajoutez le vin, le bouillon et les herbes. Laissez mijoter 2 h.',
      'Ajoutez les carottes en rondelles et poursuivez 1 h.']
  },
  {
    id: 'rendang', nom: 'Rendang de bœuf', cat: 'Viandes', cuisine: 'Indonésienne', emoji: '🥥',
    desc: 'Bœuf caramélisé dans le lait de coco et les épices jusqu\'à ce que la sauce disparaisse.',
    portions: 6, prep: 30, cuisson: 180, diff: 2,
    ing: [['boeuf_paleron', 1200], ['lait_coco', 400, 'ml'], ['citronnelle', 3, 'pc'], ['gingembre', 30], ['ail', 4, 'pc'], ['echalote', 6, 'pc'], ['piment', 4, 'pc'],
      ['curcuma', 1, 'cc'], ['coco_rapee', 50], ['cassonade', 1, 'cs'], ['huile_neutre', 2, 'cs'], ['riz_blanc', 420], ['sel', 0, 'qs']],
    etapes: ['Mixez les échalotes, l\'ail, le gingembre, les piments et le curcuma en pâte.', 'Faites revenir la pâte dans l\'huile 5 min, ajoutez la viande en cubes.',
      'Versez le lait de coco, ajoutez la citronnelle écrasée et la cassonade. Laissez mijoter 2 h 30 à découvert en remuant.',
      'Faites griller la noix de coco à sec et ajoutez-la : cuisez jusqu\'à ce que la sauce soit presque absorbée. Servez avec le riz.']
  },
  {
    id: 'curry-massaman', nom: 'Curry massaman au bœuf', cat: 'Viandes', cuisine: 'Thaïlandaise', emoji: '🍛',
    desc: 'Curry doux et parfumé aux pommes de terre et cacahuètes.',
    portions: 4, prep: 20, cuisson: 120, diff: 2,
    ing: [['boeuf_paleron', 700], ['lait_coco', 400, 'ml'], ['pate_curry', 3, 'cs', 'Pâte de curry massaman'], ['pomme_de_terre', 400], ['oignon', 1, 'pc'],
      ['cacahuetes', 40], ['nuoc_mam', 2, 'cs'], ['cassonade', 1, 'cs'], ['cannelle', 0.5, 'cc'], ['riz_blanc', 280, 'g', 'Riz thaï']],
    etapes: ['Faites revenir la pâte de curry dans un peu de lait de coco, ajoutez la viande en cubes.', 'Ajoutez le reste du lait de coco, la cannelle et 20 cl d\'eau. Laissez mijoter 1 h 15.',
      'Ajoutez les pommes de terre, l\'oignon en quartiers et les cacahuètes, poursuivez 30 min.', 'Assaisonnez avec le nuoc-mâm et la cassonade. Servez avec le riz.']
  },
  {
    id: 'rougail-saucisse', nom: 'Rougail saucisse', cat: 'Viandes', cuisine: 'Réunionnaise', emoji: '🌶️',
    desc: 'Saucisses fumées mijotées dans une sauce tomate-gingembre-piment.',
    portions: 6, prep: 20, cuisson: 45, diff: 1,
    ing: [['saucisse', 6, 'pc', 'Saucisses fumées'], ['tomate', 6, 'pc'], ['oignon', 3, 'pc'], ['ail', 3, 'pc'], ['gingembre', 15], ['piment', 1, 'pc'],
      ['curcuma', 1, 'cc'], ['thym', 2, 'pc'], ['huile_neutre', 2, 'cs'], ['riz_blanc', 450], ['sel', 0, 'qs']],
    etapes: ['Piquez les saucisses et faites-les blanchir 10 min dans l\'eau bouillante. Coupez-les en rondelles.', 'Faites-les dorer dans l\'huile.',
      'Ajoutez les oignons, l\'ail, le gingembre et le piment écrasés, le curcuma et le thym.', 'Ajoutez les tomates en dés et laissez mijoter 30 min. Servez avec le riz.']
  },
  {
    id: 'colombo-porc', nom: 'Colombo de porc', cat: 'Viandes', cuisine: 'Antillaise', emoji: '🍛',
    desc: 'Curry antillais au porc et légumes, parfumé au citron vert.',
    portions: 6, prep: 25, cuisson: 75, diff: 1,
    ing: [['porc_echine', 1200], ['pomme_de_terre', 3, 'pc'], ['courgette', 1, 'pc'], ['aubergine', 1, 'pc'], ['oignon', 2, 'pc'], ['ail', 3, 'pc'],
      ['curry', 2, 'cs', 'Poudre à colombo'], ['citron_vert', 1, 'pc'], ['thym', 2, 'pc'], ['piment', 1, 'pc'], ['huile_neutre', 2, 'cs'], ['bouillon', 400, 'ml'], ['riz_blanc', 450]],
    etapes: ['Marinez la viande en cubes avec le jus de citron vert, l\'ail et la moitié du colombo (1 h).', 'Faites-la dorer dans l\'huile avec les oignons.',
      'Ajoutez le reste du colombo, le thym, le piment entier et le bouillon. Laissez mijoter 30 min.',
      'Ajoutez les légumes en morceaux et poursuivez 40 min. Servez avec le riz.']
  },
  {
    id: 'chou-farci', nom: 'Chou farci', cat: 'Viandes', cuisine: 'Française', emoji: '🥬',
    desc: 'Chou vert garni d\'une farce de viande, braisé au bouillon.',
    portions: 6, prep: 45, cuisson: 120, diff: 2,
    ing: [['chou', 1200, 'g', 'Chou vert (1 pomme)'], ['porc_hache', 500], ['boeuf_hache_15', 200], ['oignon', 1, 'pc'], ['oeuf', 1, 'pc'], ['pain', 60, 'g', 'Pain rassis'],
      ['lait_demi', 100, 'ml'], ['carotte', 2, 'pc'], ['bouillon', 400, 'ml'], ['lardons', 100], ['thym', 2, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Blanchissez le chou entier 10 min, détachez délicatement les feuilles.', 'Farce : viandes, oignon, œuf, pain trempé dans le lait, thym, sel et poivre.',
      'Reconstituez le chou en alternant feuilles et farce dans un saladier tapissé d\'un torchon, puis ficelez.',
      'Placez-le dans une cocotte avec les lardons, les carottes et le bouillon. Couvrez et enfournez 2 h à 170 °C.']
  },
  {
    id: 'mapo-tofu', nom: 'Mapo tofu', cat: 'Viandes', cuisine: 'Chinoise', emoji: '🌶️',
    desc: 'Tofu fondant et porc haché dans une sauce pimentée du Sichuan.',
    portions: 4, prep: 15, cuisson: 15, diff: 2,
    ing: [['tofu', 500], ['porc_hache', 200], ['sauce_sriracha', 2, 'cs', 'Pâte de piment (doubanjiang)'], ['sauce_soja', 2, 'cs'], ['ail', 3, 'pc'], ['gingembre', 10],
      ['maizena', 1, 'cs'], ['bouillon', 250, 'ml'], ['oignon_nouveau', 2, 'pc'], ['poivre', 1, 'cc', 'Poivre du Sichuan'], ['huile_neutre', 2, 'cs'], ['riz_blanc', 280]],
    etapes: ['Coupez le tofu en cubes et pochez-le 2 min dans l\'eau salée.', 'Faites revenir le porc dans l\'huile, puis l\'ail, le gingembre et la pâte de piment.',
      'Ajoutez le bouillon, la sauce soja et le tofu. Laissez mijoter 5 min.', 'Épaississez avec la maïzena délayée, parsemez de poivre du Sichuan et d\'oignon. Servez avec le riz.']
  },
  {
    id: 'veau-marengo', nom: 'Sauté de veau Marengo', cat: 'Viandes', cuisine: 'Française', emoji: '🍅',
    desc: 'Veau mijoté aux tomates, vin blanc et champignons.',
    portions: 6, prep: 25, cuisson: 90, diff: 1,
    ing: [['veau_epaule', 1200], ['tomates_concassees', 400], ['champignons', 250], ['oignon', 2, 'pc'], ['ail', 2, 'pc'], ['vin_blanc', 200, 'ml'],
      ['farine', 1, 'cs'], ['huile_olive', 3, 'cs'], ['thym', 2, 'pc'], ['laurier', 1, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer le veau en morceaux dans l\'huile, ajoutez les oignons.', 'Saupoudrez de farine, mouillez avec le vin, ajoutez les tomates, l\'ail et les herbes.',
      'Laissez mijoter 1 h 15 à couvert.', 'Ajoutez les champignons 20 min avant la fin.']
  }
]);
