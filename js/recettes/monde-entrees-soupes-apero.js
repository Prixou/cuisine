/* Lot 2 — Entrées & salades, Soupes, Apéro (cuisines du monde) */
window.RECETTES = (window.RECETTES || []).concat([
  // ================= ENTRÉES & SALADES =================
  {
    id: 'salade-pommes-de-terre', nom: 'Salade de pommes de terre à la française', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🥔',
    desc: 'Pommes de terre tièdes, échalotes, cornichons et vinaigrette moutardée.',
    portions: 4, prep: 15, cuisson: 20, diff: 1,
    ing: [['pomme_de_terre', 800, 'g', 'Pommes de terre à chair ferme'], ['echalote', 2, 'pc'], ['cornichons', 40], ['persil', 15], ['moutarde', 1, 'cs'],
      ['vinaigre', 2, 'cs'], ['huile_neutre', 4, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Faites cuire les pommes de terre avec la peau 20 min à l\'eau salée.', 'Préparez la vinaigrette : moutarde, vinaigre, sel, poivre, puis l\'huile.',
      'Pelez les pommes de terre encore chaudes, coupez-les en rondelles et arrosez-les aussitôt de vinaigrette.', 'Ajoutez les échalotes ciselées, les cornichons en rondelles et le persil.'],
    astuce: 'Assaisonnées chaudes, les pommes de terre absorbent mieux la vinaigrette.'
  },
  {
    id: 'salade-piemontaise', nom: 'Salade piémontaise', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🥚',
    desc: 'Pommes de terre, jambon, œufs durs, tomates et cornichons à la mayonnaise.',
    portions: 4, prep: 20, cuisson: 20, diff: 1,
    ing: [['pomme_de_terre', 600], ['jambon_blanc', 150], ['oeuf', 3, 'pc'], ['tomate', 2, 'pc'], ['cornichons', 50], ['mayonnaise', 4, 'cs'],
      ['moutarde', 1, 'cc'], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Faites cuire les pommes de terre 20 min et les œufs 10 min. Laissez refroidir.', 'Coupez pommes de terre, jambon, œufs, tomates et cornichons en dés.',
      'Mélangez avec la mayonnaise et la moutarde, salez, parsemez de persil. Servez frais.']
  },
  {
    id: 'salade-betterave-feta', nom: 'Salade betterave, feta et noix', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🟣',
    desc: 'Le sucré de la betterave, le salé de la feta et le croquant des noix.',
    portions: 4, prep: 10, cuisson: 0, diff: 1,
    ing: [['betterave', 3, 'pc'], ['feta', 120], ['noix', 40], ['roquette', 60], ['oignon_rouge', 0.5, 'pc'], ['huile_olive', 3, 'cs'],
      ['vinaigre_balsamique', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Coupez les betteraves en cubes et l\'oignon en fines lamelles.', 'Disposez la roquette, la betterave, la feta émiettée et les noix concassées.',
      'Arrosez d\'huile et de vinaigre balsamique.']
  },
  {
    id: 'concombre-creme', nom: 'Concombre à la crème et à l\'aneth', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🥒',
    desc: 'L\'entrée fraîche de l\'été, en 10 minutes.',
    portions: 4, prep: 10, cuisson: 0, diff: 1,
    ing: [['concombre', 2, 'pc'], ['creme_15', 100, 'ml'], ['aneth', 5], ['citron', 0.5, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Épluchez le concombre en laissant une bande de peau sur deux et coupez-le en fines rondelles.', 'Salez et laissez dégorger 15 min, puis égouttez.',
      'Mélangez avec la crème, le jus de citron, l\'aneth et le poivre.']
  },
  {
    id: 'salade-endives-roquefort', nom: 'Salade d\'endives au roquefort et aux noix', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🥬',
    desc: 'Endives croquantes, roquefort, pomme et noix.',
    portions: 4, prep: 10, cuisson: 0, diff: 1,
    ing: [['endive', 4, 'pc'], ['bleu', 100, 'g', 'Roquefort'], ['noix', 50], ['pomme', 1, 'pc'], ['huile_neutre', 3, 'cs'], ['vinaigre', 1, 'cs'], ['moutarde', 1, 'cc']],
    etapes: ['Émincez les endives et la pomme.', 'Préparez la vinaigrette avec la moutarde, le vinaigre et l\'huile.', 'Mélangez avec le roquefort émietté et les noix.']
  },
  {
    id: 'celeri-remoulade', nom: 'Céleri rémoulade', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🥗',
    desc: 'Céleri-rave râpé dans une mayonnaise bien moutardée.',
    portions: 4, prep: 15, cuisson: 0, diff: 1,
    ing: [['celeri_rave', 1, 'pc'], ['mayonnaise', 5, 'cs'], ['moutarde', 1, 'cs'], ['citron', 1, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Épluchez le céleri-rave et râpez-le finement. Arrosez-le immédiatement de jus de citron.', 'Mélangez la mayonnaise et la moutarde, salez, poivrez.',
      'Enrobez le céleri de sauce et réservez 1 h au frais.']
  },
  {
    id: 'salade-riz-composee', nom: 'Salade de riz au thon', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🍚',
    desc: 'La salade de riz des pique-niques : thon, maïs, tomates, œufs.',
    portions: 4, prep: 20, cuisson: 15, diff: 1,
    ing: [['riz_blanc', 250], ['thon_boite', 200], ['mais', 150], ['tomate', 3, 'pc'], ['poivron', 1, 'pc'], ['oeuf', 3, 'pc'], ['olives', 50],
      ['huile_olive', 4, 'cs'], ['vinaigre', 2, 'cs'], ['moutarde', 1, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Faites cuire le riz, rincez-le à l\'eau froide. Faites durcir les œufs 10 min.', 'Coupez les tomates, le poivron et les œufs en dés.',
      'Mélangez le riz avec le thon émietté, le maïs, les légumes et les olives.', 'Assaisonnez de vinaigrette moutardée.']
  },
  {
    id: 'fattouche', nom: 'Fattouche', cat: 'Entrées & salades', cuisine: 'Libanaise', emoji: '🥙',
    desc: 'Salade libanaise aux légumes croquants, herbes et pain pita grillé.',
    portions: 4, prep: 20, cuisson: 5, diff: 1,
    ing: [['pain_pita', 2, 'pc'], ['salade', 200, 'g', 'Laitue romaine'], ['tomate', 3, 'pc'], ['concombre', 1, 'pc'], ['radis', 100], ['oignon_nouveau', 3, 'pc'],
      ['persil', 20], ['menthe', 10], ['citron', 1, 'pc'], ['huile_olive', 4, 'cs'], ['paprika', 1, 'cc', 'Sumac (ou paprika)'], ['sel', 0, 'qs']],
    etapes: ['Coupez les pitas en morceaux et faites-les griller au four 5 min avec 1 c. à soupe d\'huile.', 'Coupez les légumes en morceaux, ciselez les herbes.',
      'Mélangez le jus de citron, le reste d\'huile, le sumac et le sel.', 'Mélangez le tout et ajoutez le pain au dernier moment.']
  },
  {
    id: 'salade-waldorf', nom: 'Salade Waldorf', cat: 'Entrées & salades', cuisine: 'Américaine', emoji: '🍏',
    desc: 'Céleri, pomme, noix et raisins, sauce crémeuse : un classique new-yorkais.',
    portions: 4, prep: 15, cuisson: 0, diff: 1,
    ing: [['celeri', 4, 'pc'], ['pomme', 2, 'pc'], ['noix', 60], ['raisins_secs', 30], ['mayonnaise', 3, 'cs'], ['yaourt_grec', 100], ['citron', 0.5, 'pc'], ['salade', 100]],
    etapes: ['Coupez le céleri et les pommes en dés, arrosez de citron.', 'Mélangez la mayonnaise et le yaourt.',
      'Ajoutez les noix concassées et les raisins, enrobez de sauce. Servez sur les feuilles de salade.']
  },
  {
    id: 'salade-pasteque-feta', nom: 'Salade pastèque, feta et menthe', cat: 'Entrées & salades', cuisine: 'Grecque', emoji: '🍉',
    desc: 'Sucrée-salée et ultra rafraîchissante.',
    portions: 4, prep: 10, cuisson: 0, diff: 1,
    ing: [['pasteque', 800, 'g', 'Pastèque (chair)'], ['feta', 150], ['menthe', 10], ['oignon_rouge', 0.5, 'pc'], ['huile_olive', 2, 'cs'], ['citron_vert', 1, 'pc'], ['poivre', 0, 'qs']],
    etapes: ['Coupez la pastèque en cubes et l\'oignon en fines lamelles.', 'Ajoutez la feta émiettée et la menthe ciselée.', 'Arrosez d\'huile et de jus de citron vert, poivrez.']
  },
  {
    id: 'salade-chou-poulet-asiatique', nom: 'Salade de chou au poulet, sauce sésame', cat: 'Entrées & salades', cuisine: 'Asiatique', emoji: '🥢',
    desc: 'Chou croquant, poulet, carottes et cacahuètes, sauce soja-sésame.',
    portions: 4, prep: 25, cuisson: 12, diff: 1,
    ing: [['poulet_blanc', 400], ['chou', 300], ['chou_rouge', 150], ['carotte', 2, 'pc'], ['oignon_nouveau', 3, 'pc'], ['coriandre', 15], ['cacahuetes', 40],
      ['sauce_soja', 3, 'cs'], ['vinaigre_riz', 2, 'cs'], ['huile_sesame', 2, 'cs'], ['miel', 1, 'cs'], ['gingembre', 10]],
    etapes: ['Pochez le poulet 12 min dans l\'eau frémissante, laissez refroidir et effilochez-le.', 'Émincez finement les choux, râpez les carottes.',
      'Sauce : sauce soja, vinaigre, huile de sésame, miel et gingembre râpé.', 'Mélangez le tout avec la coriandre et les cacahuètes concassées.']
  },
  {
    id: 'salade-pois-chiches', nom: 'Salade de pois chiches', cat: 'Entrées & salades', cuisine: 'Méditerranéenne', emoji: '🫘',
    desc: 'Pois chiches, tomates, concombre et persil au cumin.',
    portions: 4, prep: 10, cuisson: 0, diff: 1,
    ing: [['pois_chiches', 500], ['tomate', 2, 'pc'], ['concombre', 1, 'pc'], ['oignon_rouge', 0.5, 'pc'], ['persil', 20], ['citron', 1, 'pc'],
      ['huile_olive', 3, 'cs'], ['cumin', 0.5, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Rincez et égouttez les pois chiches.', 'Coupez les légumes en dés, ciselez l\'oignon et le persil.', 'Assaisonnez avec le citron, l\'huile, le cumin et le sel.']
  },
  {
    id: 'salade-lyonnaise', nom: 'Salade lyonnaise', cat: 'Entrées & salades', cuisine: 'Lyonnaise', emoji: '🍳',
    desc: 'Frisée, lardons, croûtons et œuf poché coulant.',
    portions: 4, prep: 15, cuisson: 15, diff: 2,
    ing: [['salade', 300, 'g', 'Frisée'], ['lardons', 200], ['oeuf', 4, 'pc'], ['pain', 100, 'g', 'Pain rassis (croûtons)'], ['echalote', 1, 'pc'],
      ['vinaigre', 3, 'cs', 'Vinaigre de vin'], ['huile_neutre', 3, 'cs'], ['moutarde', 1, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer les lardons, puis les croûtons dans leur graisse.', 'Pochez les œufs 3 min dans l\'eau frémissante additionnée d\'1 c. à soupe de vinaigre.',
      'Assaisonnez la frisée avec une vinaigrette moutarde-échalote.', 'Ajoutez lardons et croûtons chauds, posez un œuf poché sur chaque assiette.']
  },
  {
    id: 'salade-haricots-verts', nom: 'Salade de haricots verts et tomates', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🫛',
    desc: 'Haricots verts croquants, tomates et échalotes.',
    portions: 4, prep: 10, cuisson: 8, diff: 1,
    ing: [['haricots_verts', 600], ['tomate', 3, 'pc'], ['echalote', 2, 'pc'], ['huile_olive', 3, 'cs'], ['vinaigre', 1, 'cs'], ['moutarde', 1, 'cc'], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Faites cuire les haricots 7 min à l\'eau salée et plongez-les dans l\'eau glacée.', 'Coupez les tomates en quartiers, ciselez les échalotes.',
      'Mélangez avec la vinaigrette moutardée et le persil.']
  },
  {
    id: 'carpaccio-boeuf', nom: 'Carpaccio de bœuf', cat: 'Entrées & salades', cuisine: 'Italienne', emoji: '🥩',
    desc: 'Fines tranches de bœuf cru, parmesan, roquette et huile d\'olive.',
    portions: 4, prep: 20, cuisson: 0, diff: 2,
    ing: [['boeuf_steak', 400, 'g', 'Filet de bœuf extra-frais'], ['parmesan', 40], ['roquette', 60], ['huile_olive', 4, 'cs'], ['citron', 1, 'pc'],
      ['capres', 1, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Placez la viande 1 h au congélateur pour la raffermir.', 'Tranchez-la très finement et disposez les tranches sur les assiettes.',
      'Arrosez d\'huile et de jus de citron, salez, poivrez.', 'Ajoutez la roquette, les câpres et des copeaux de parmesan.']
  },
  {
    id: 'ceviche', nom: 'Ceviche de poisson', cat: 'Entrées & salades', cuisine: 'Péruvienne', emoji: '🐟',
    desc: 'Poisson cru « cuit » dans le citron vert, oignon rouge, piment et coriandre.',
    portions: 4, prep: 25, cuisson: 20, diff: 2,
    ing: [['bar', 500, 'g', 'Filet de poisson blanc extra-frais'], ['citron_vert', 5, 'pc'], ['oignon_rouge', 1, 'pc'], ['piment', 1, 'pc'], ['coriandre', 15],
      ['patate_douce', 1, 'pc'], ['mais', 100], ['sel', 0, 'qs']],
    etapes: ['Faites cuire la patate douce en rondelles 15 min à l\'eau.', 'Coupez le poisson en cubes, l\'oignon en fines lamelles, le piment finement.',
      'Couvrez le poisson de jus de citron vert, ajoutez sel, piment et oignon. Laissez mariner 10 min au frais.', 'Servez avec la coriandre, la patate douce et le maïs.']
  },
  {
    id: 'oeufs-cocotte', nom: 'Œufs cocotte au jambon', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🥚',
    desc: 'Œufs cuits au bain-marie sur un lit de crème et de jambon, avec mouillettes.',
    portions: 4, prep: 10, cuisson: 12, diff: 1,
    ing: [['oeuf', 4, 'pc'], ['creme_15', 100, 'ml'], ['jambon_blanc', 1, 'pc'], ['ciboulette', 5], ['beurre', 10], ['pain', 100, 'g', 'Pain (mouillettes)'], ['sel', 0, 'qs']],
    etapes: ['Beurrez 4 ramequins, répartissez le jambon en dés et la moitié de la crème.', 'Cassez un œuf dans chaque ramequin, ajoutez le reste de crème, sel et poivre.',
      'Faites cuire au bain-marie 10 à 12 min à 180 °C : le blanc doit être pris, le jaune coulant.', 'Parsemez de ciboulette, servez avec les mouillettes.']
  },
  {
    id: 'terrine-campagne', nom: 'Terrine de campagne', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🥖',
    desc: 'Pâté maison au porc et au foie, à préparer la veille.',
    portions: 10, prep: 30, cuisson: 120, diff: 2,
    ing: [['porc_hache', 600], ['foie_veau', 200, 'g', 'Foie (volaille ou veau)'], ['lardons', 100], ['oeuf', 1, 'pc'], ['echalote', 2, 'pc'],
      ['alcool_fort', 3, 'cs', 'Cognac'], ['thym', 2, 'pc'], ['laurier', 2, 'pc'], ['sel', 2, 'cc'], ['poivre', 1, 'cc']],
    etapes: ['Hachez le foie, mélangez-le avec la chair à saucisse, les lardons, l\'œuf, les échalotes, le cognac, le thym, le sel et le poivre.',
      'Tassez dans une terrine, posez les feuilles de laurier dessus et couvrez.', 'Faites cuire au bain-marie 2 h à 160 °C.',
      'Laissez refroidir sous un poids, puis 24 h au réfrigérateur avant de déguster.']
  },
  {
    id: 'avocat-crevettes', nom: 'Avocat aux crevettes, sauce cocktail', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🦐',
    desc: 'L\'entrée rétro qui revient toujours.',
    portions: 4, prep: 15, cuisson: 0, diff: 1,
    ing: [['avocat', 2, 'pc'], ['crevettes', 200, 'g', 'Crevettes cuites décortiquées'], ['mayonnaise', 3, 'cs'], ['ketchup', 1, 'cs'], ['alcool_fort', 1, 'cc', 'Cognac'],
      ['citron', 0.5, 'pc'], ['salade', 50], ['paprika', 1, 'pincee']],
    etapes: ['Sauce cocktail : mélangez mayonnaise, ketchup, cognac et un trait de citron.', 'Coupez les avocats en deux, retirez le noyau, arrosez de citron.',
      'Mélangez les crevettes avec la sauce et garnissez les avocats. Saupoudrez de paprika.']
  },
  {
    id: 'gravlax', nom: 'Saumon gravlax', cat: 'Entrées & salades', cuisine: 'Scandinave', emoji: '🐟',
    desc: 'Saumon mariné au sel, sucre et aneth, sauce moutarde douce.',
    portions: 8, prep: 20, cuisson: 0, diff: 2,
    ing: [['saumon', 800, 'g', 'Filet de saumon extra-frais avec la peau'], ['sucre', 60], ['sel', 60], ['aneth', 30], ['poivre', 1, 'cc'],
      ['moutarde', 2, 'cs'], ['miel', 1, 'cs'], ['huile_neutre', 3, 'cs']],
    etapes: ['Mélangez le sel, le sucre, le poivre concassé et l\'aneth haché.', 'Couvrez la chair du saumon de ce mélange, filmez et placez sous un poids au réfrigérateur 36 à 48 h.',
      'Rincez, séchez et tranchez finement.', 'Sauce : fouettez moutarde, miel et huile avec un peu d\'aneth.'],
    astuce: 'Une grande partie du sel et du sucre est éliminée au rinçage : les valeurs sont légèrement surestimées.'
  },
  {
    id: 'larb-gai', nom: 'Larb gai (salade thaï de poulet)', cat: 'Entrées & salades', cuisine: 'Thaïlandaise', emoji: '🌿',
    desc: 'Poulet haché, citron vert, herbes et riz grillé, à manger dans des feuilles de salade.',
    portions: 4, prep: 20, cuisson: 10, diff: 1,
    ing: [['poulet_blanc', 500, 'g', 'Poulet haché'], ['oignon_rouge', 1, 'pc'], ['oignon_nouveau', 2, 'pc'], ['menthe', 15], ['coriandre', 15], ['citron_vert', 2, 'pc'],
      ['nuoc_mam', 2, 'cs'], ['piment', 1, 'pc'], ['riz_blanc', 20, 'g', 'Riz cru (à griller)'], ['salade', 150], ['huile_neutre', 1, 'cs']],
    etapes: ['Faites griller le riz à sec jusqu\'à ce qu\'il soit doré, puis mixez-le en poudre.', 'Faites cuire le poulet haché dans l\'huile 6 à 8 min en l\'émiettant.',
      'Hors du feu, ajoutez le jus de citron vert, le nuoc-mâm, le piment, les oignons et les herbes.', 'Parsemez de poudre de riz et servez dans les feuilles de salade.']
  },
  {
    id: 'sunomono', nom: 'Sunomono (salade de concombre japonaise)', cat: 'Entrées & salades', cuisine: 'Japonaise', emoji: '🥒',
    desc: 'Concombre mariné au vinaigre de riz et sésame.',
    portions: 4, prep: 15, cuisson: 0, diff: 1,
    ing: [['concombre', 2, 'pc'], ['vinaigre_riz', 4, 'cs'], ['sucre', 1, 'cs'], ['sauce_soja', 1, 'cs'], ['graines_sesame', 1, 'cs'], ['sel', 1, 'cc']],
    etapes: ['Coupez le concombre en très fines rondelles, salez et laissez dégorger 10 min. Pressez.', 'Mélangez vinaigre, sucre et sauce soja jusqu\'à dissolution.',
      'Versez sur le concombre et parsemez de sésame grillé.']
  },
  {
    id: 'salade-carottes-marocaine', nom: 'Salade de carottes à la marocaine', cat: 'Entrées & salades', cuisine: 'Marocaine', emoji: '🥕',
    desc: 'Carottes fondantes au cumin, ail, citron et coriandre.',
    portions: 4, prep: 10, cuisson: 12, diff: 1,
    ing: [['carotte', 600], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['ail', 1, 'pc'], ['citron', 1, 'pc'], ['huile_olive', 3, 'cs'], ['coriandre', 10], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Coupez les carottes en rondelles et faites-les cuire 10 à 12 min à l\'eau : elles doivent rester un peu fermes.',
      'Mélangez l\'huile, le jus de citron, l\'ail écrasé, le cumin, le paprika et le sel.', 'Assaisonnez les carottes tièdes, ajoutez les herbes. Servez frais.']
  },
  {
    id: 'melon-jambon', nom: 'Melon au jambon cru', cat: 'Entrées & salades', cuisine: 'Italienne', emoji: '🍈',
    desc: 'Le sucré-salé de l\'été, prêt en 5 minutes.',
    portions: 4, prep: 5, cuisson: 0, diff: 1,
    ing: [['melon', 1, 'pc'], ['jambon_cru', 8, 'pc'], ['menthe', 3], ['poivre', 0, 'qs']],
    etapes: ['Coupez le melon en tranches, retirez les graines et l\'écorce.', 'Enroulez les tranches de jambon ou disposez-les à côté.', 'Poivrez et ajoutez quelques feuilles de menthe.']
  },
  {
    id: 'salade-fenouil-orange', nom: 'Salade de fenouil à l\'orange', cat: 'Entrées & salades', cuisine: 'Sicilienne', emoji: '🍊',
    desc: 'Fenouil croquant, oranges et olives noires.',
    portions: 4, prep: 15, cuisson: 0, diff: 1,
    ing: [['fenouil', 2, 'pc'], ['orange', 2, 'pc'], ['olives', 40, 'g', 'Olives noires'], ['oignon_rouge', 0.5, 'pc'], ['huile_olive', 2, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Émincez très finement le fenouil.', 'Pelez les oranges à vif et coupez-les en rondelles en récupérant le jus.',
      'Mélangez avec l\'oignon, les olives, l\'huile et le jus d\'orange. Salez, poivrez.']
  },

  // ================= SOUPES =================
  {
    id: 'bouillabaisse', nom: 'Bouillabaisse', cat: 'Soupes', cuisine: 'Provençale', emoji: '🍲',
    desc: 'La soupe de poissons marseillaise au safran, servie avec croûtons et rouille.',
    portions: 6, prep: 40, cuisson: 45, diff: 3,
    ing: [['bar', 800, 'g', 'Poissons de roche (rascasse, rouget, bar…)'], ['poisson_blanc', 600, 'g', 'Lotte ou congre'], ['moules', 500], ['oignon', 1, 'pc'],
      ['poireau', 1, 'pc'], ['fenouil', 1, 'pc'], ['tomate', 4, 'pc'], ['ail', 4, 'pc'], ['safran', 1, 'pc'], ['huile_olive', 6, 'cs'],
      ['bouillon', 2000, 'ml', 'Fumet de poisson'], ['pain', 200, 'g', 'Baguette (croûtons)'], ['mayonnaise', 6, 'cs', 'Mayonnaise (rouille)'], ['piment_poudre', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon, le poireau, le fenouil et 2 gousses d\'ail dans l\'huile.', 'Ajoutez les tomates, le safran et le fumet. Portez à ébullition 15 min.',
      'Plongez les poissons fermes, puis 5 min après les plus tendres et les moules. Cuisez à gros bouillons 10 min.',
      'Rouille : mayonnaise, ail écrasé, piment et une pincée de safran.', 'Servez le bouillon avec les croûtons frottés à l\'ail et la rouille, puis les poissons.']
  },
  {
    id: 'soupe-miso', nom: 'Soupe miso', cat: 'Soupes', cuisine: 'Japonaise', emoji: '🥣',
    desc: 'Bouillon miso, tofu soyeux, algues et oignon nouveau.',
    portions: 4, prep: 5, cuisson: 10, diff: 1,
    ing: [['miso', 60], ['tofu_soyeux', 200], ['bouillon', 1000, 'ml', 'Dashi ou bouillon de légumes'], ['oignon_nouveau', 2, 'pc'], ['nori', 1, 'pc', 'Algue wakame ou nori']],
    etapes: ['Faites chauffer le bouillon sans le faire bouillir.', 'Délayez le miso dans une louche de bouillon puis reversez dans la casserole.',
      'Ajoutez le tofu en petits cubes et l\'algue. Chauffez 2 min.', 'Servez avec l\'oignon nouveau émincé.'],
    astuce: 'Ne faites jamais bouillir le miso : il perdrait son goût.'
  },
  {
    id: 'tom-yum', nom: 'Tom yum aux crevettes', cat: 'Soupes', cuisine: 'Thaïlandaise', emoji: '🍤',
    desc: 'Soupe thaï aigre et piquante à la citronnelle.',
    portions: 4, prep: 15, cuisson: 15, diff: 1,
    ing: [['crevettes', 400], ['champignons', 200, 'g', 'Champignons de paille ou de Paris'], ['citronnelle', 2, 'pc'], ['gingembre', 20, 'g', 'Galanga ou gingembre'],
      ['citron_vert', 2, 'pc'], ['nuoc_mam', 3, 'cs'], ['piment', 2, 'pc'], ['tomates_cerises', 150], ['bouillon', 1200, 'ml'], ['coriandre', 10], ['sucre', 1, 'cc']],
    etapes: ['Portez le bouillon à ébullition avec la citronnelle écrasée, le gingembre en tranches et les piments.', 'Ajoutez les champignons et les tomates, cuisez 5 min.',
      'Ajoutez les crevettes 3 min.', 'Hors du feu, assaisonnez avec le nuoc-mâm, le sucre et le jus de citron vert. Parsemez de coriandre.']
  },
  {
    id: 'tom-kha-kai', nom: 'Tom kha kai (soupe poulet-coco)', cat: 'Soupes', cuisine: 'Thaïlandaise', emoji: '🥥',
    desc: 'Soupe thaï onctueuse au lait de coco, galanga et citron vert.',
    portions: 4, prep: 15, cuisson: 20, diff: 1,
    ing: [['poulet_blanc', 400], ['lait_coco', 400, 'ml'], ['bouillon', 600, 'ml'], ['citronnelle', 2, 'pc'], ['gingembre', 20, 'g', 'Galanga ou gingembre'],
      ['champignons', 150], ['citron_vert', 2, 'pc'], ['nuoc_mam', 2, 'cs'], ['sucre', 1, 'cc'], ['coriandre', 10], ['piment', 1, 'pc']],
    etapes: ['Faites frémir le lait de coco et le bouillon avec la citronnelle et le gingembre 5 min.', 'Ajoutez le poulet émincé et les champignons, cuisez 10 min.',
      'Assaisonnez avec le nuoc-mâm, le sucre et le citron vert.', 'Servez avec la coriandre et le piment.']
  },
  {
    id: 'veloute-petits-pois', nom: 'Velouté de petits pois à la menthe', cat: 'Soupes', cuisine: 'Française', emoji: '🫛',
    desc: 'Velouté vert vif, doux et frais.',
    portions: 4, prep: 5, cuisson: 15, diff: 1,
    ing: [['petits_pois', 600], ['oignon', 1, 'pc'], ['bouillon', 800, 'ml'], ['menthe', 10], ['creme_15', 80, 'ml'], ['beurre', 15], ['sel', 0, 'qs']],
    etapes: ['Faites fondre l\'oignon dans le beurre.', 'Ajoutez les petits pois et le bouillon, cuisez 10 min.', 'Mixez avec la menthe et la crème.']
  },
  {
    id: 'creme-du-barry', nom: 'Crème Du Barry (velouté de chou-fleur)', cat: 'Soupes', cuisine: 'Française', emoji: '🥣',
    desc: 'Le velouté de chou-fleur à l\'ancienne, très onctueux.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['chou_fleur', 1, 'pc'], ['pomme_de_terre', 1, 'pc'], ['oignon', 1, 'pc'], ['bouillon', 900, 'ml'], ['creme_15', 100, 'ml'], ['muscade', 1, 'pincee'],
      ['ciboulette', 5], ['beurre', 15], ['sel', 0, 'qs']],
    etapes: ['Faites fondre l\'oignon dans le beurre.', 'Ajoutez le chou-fleur en fleurettes, la pomme de terre et le bouillon. Cuisez 20 min.',
      'Mixez avec la crème et la muscade. Servez avec la ciboulette.']
  },
  {
    id: 'soupe-legumes', nom: 'Soupe de légumes de grand-mère', cat: 'Soupes', cuisine: 'Française', emoji: '🥕',
    desc: 'La soupe moulinée de toujours, avec tous les légumes du marché.',
    portions: 6, prep: 20, cuisson: 40, diff: 1,
    ing: [['carotte', 3, 'pc'], ['poireau', 2, 'pc'], ['pomme_de_terre', 3, 'pc'], ['navet', 2, 'pc'], ['celeri', 2, 'pc'], ['oignon', 1, 'pc'],
      ['bouillon', 2000, 'ml'], ['beurre', 20], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Épluchez et coupez tous les légumes en morceaux.', 'Faites-les suer 5 min dans le beurre.', 'Couvrez de bouillon et laissez cuire 35 min.',
      'Mixez ou passez au moulin à légumes. Parsemez de persil.']
  },
  {
    id: 'soupe-pistou', nom: 'Soupe au pistou', cat: 'Soupes', cuisine: 'Provençale', emoji: '🌿',
    desc: 'Soupe d\'été aux haricots et légumes, relevée d\'un pistou à l\'ail et basilic.',
    portions: 6, prep: 30, cuisson: 40, diff: 1,
    ing: [['haricots_blancs', 250, 'g', 'Haricots blancs ou cocos'], ['haricots_verts', 200], ['courgette', 2, 'pc'], ['carotte', 2, 'pc'], ['pomme_de_terre', 2, 'pc'],
      ['tomate', 2, 'pc'], ['pates', 80, 'g', 'Coquillettes'], ['bouillon', 2000, 'ml'], ['basilic', 30], ['ail', 3, 'pc'], ['parmesan', 50], ['huile_olive', 5, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Coupez tous les légumes en dés et faites-les cuire 25 min dans le bouillon.', 'Ajoutez les haricots blancs et les pâtes, cuisez 10 min.',
      'Pistou : mixez le basilic, l\'ail, le parmesan et l\'huile d\'olive.', 'Hors du feu, incorporez le pistou dans la soupe.']
  },
  {
    id: 'garbure', nom: 'Garbure', cat: 'Soupes', cuisine: 'Béarnaise', emoji: '🍲',
    desc: 'Soupe paysanne du Sud-Ouest au chou, haricots et confit de canard.',
    portions: 6, prep: 30, cuisson: 120, diff: 2,
    ing: [['chou', 600, 'g', 'Chou vert'], ['pomme_de_terre', 4, 'pc'], ['carotte', 3, 'pc'], ['navet', 2, 'pc'], ['poireau', 1, 'pc'], ['haricots_blancs', 300, 'g', 'Haricots tarbais cuits'],
      ['canard_cuisse_confite', 2, 'pc'], ['poitrine_fumee', 6, 'pc', 'Ventrèche'], ['oignon', 1, 'pc'], ['ail', 3, 'pc'], ['bouillon', 2500, 'ml'], ['thym', 2, 'pc'], ['laurier', 1, 'pc']],
    etapes: ['Faites revenir la ventrèche et l\'oignon dans un peu de graisse du confit.', 'Ajoutez le bouillon, les carottes, navets, poireau, ail et herbes. Laissez cuire 45 min.',
      'Ajoutez le chou émincé et les pommes de terre, poursuivez 40 min.', 'Ajoutez les haricots et les cuisses de confit 20 min avant la fin.'],
    astuce: 'Traditionnellement, on termine son assiette par un trait de vin rouge : c\'est « faire chabrot ».'
  },
  {
    id: 'bortsch', nom: 'Bortsch', cat: 'Soupes', cuisine: 'Ukrainienne', emoji: '🟣',
    desc: 'Soupe de betterave au bœuf et au chou, servie avec crème et aneth.',
    portions: 6, prep: 30, cuisson: 90, diff: 2,
    ing: [['betterave', 4, 'pc'], ['chou', 300], ['pomme_de_terre', 2, 'pc'], ['carotte', 2, 'pc'], ['oignon', 1, 'pc'], ['tomates_concassees', 200],
      ['boeuf_paleron', 400], ['bouillon', 2000, 'ml'], ['vinaigre', 1, 'cs'], ['aneth', 10], ['creme_epaisse', 120], ['sel', 0, 'qs']],
    etapes: ['Faites cuire la viande dans le bouillon 1 h.', 'Ajoutez les pommes de terre et le chou émincé, cuisez 15 min.',
      'Faites revenir l\'oignon, la carotte et la betterave râpées avec les tomates et le vinaigre 10 min, ajoutez-les à la soupe.', 'Servez avec une cuillère de crème et de l\'aneth.']
  },
  {
    id: 'soupe-nouilles-poulet', nom: 'Soupe de nouilles au poulet', cat: 'Soupes', cuisine: 'Américaine', emoji: '🍜',
    desc: 'La « chicken noodle soup » réconfortante.',
    portions: 4, prep: 15, cuisson: 35, diff: 1,
    ing: [['poulet_cuisse', 500], ['pates', 150, 'g', 'Nouilles aux œufs ou coquillettes'], ['carotte', 2, 'pc'], ['celeri', 2, 'pc'], ['oignon', 1, 'pc'],
      ['bouillon', 1600, 'ml', 'Bouillon de volaille'], ['thym', 2, 'pc'], ['persil', 10], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon, la carotte et le céleri en dés dans l\'huile.', 'Ajoutez le poulet entier, le bouillon et le thym, laissez mijoter 25 min.',
      'Effilochez le poulet et remettez-le dans la soupe avec les pâtes. Cuisez selon le paquet.', 'Parsemez de persil.']
  },
  {
    id: 'veloute-patate-douce', nom: 'Velouté de patate douce au gingembre', cat: 'Soupes', cuisine: 'Fusion', emoji: '🍠',
    desc: 'Doux, épicé et velouté grâce au lait de coco.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['patate_douce', 800], ['oignon', 1, 'pc'], ['gingembre', 10], ['lait_coco', 200, 'ml'], ['bouillon', 800, 'ml'], ['paprika', 1, 'cc'], ['huile_neutre', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon et le gingembre dans l\'huile.', 'Ajoutez la patate douce en cubes, le paprika et le bouillon, cuisez 20 min.', 'Mixez avec le lait de coco.']
  },
  {
    id: 'soupe-pois-casses', nom: 'Soupe de pois cassés', cat: 'Soupes', cuisine: 'Française', emoji: '🟢',
    desc: 'Potage épais et nourrissant aux lardons et croûtons.',
    portions: 6, prep: 15, cuisson: 75, diff: 1,
    ing: [['pois_casses', 400], ['lardons', 150], ['carotte', 2, 'pc'], ['oignon', 1, 'pc'], ['celeri', 1, 'pc'], ['bouillon', 2000, 'ml'], ['laurier', 1, 'pc'],
      ['thym', 1, 'pc'], ['pain', 100, 'g', 'Croûtons'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir les lardons, l\'oignon, la carotte et le céleri.', 'Ajoutez les pois cassés rincés, le bouillon et les herbes. Laissez cuire 1 h.',
      'Retirez les herbes et mixez. Servez avec des croûtons grillés.']
  },
  {
    id: 'veloute-courgettes', nom: 'Velouté de courgettes au fromage frais', cat: 'Soupes', cuisine: 'Française', emoji: '🥒',
    desc: 'Léger et crémeux, prêt en 20 minutes.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [['courgette', 1000], ['oignon', 1, 'pc'], ['fromage_frais', 80], ['bouillon', 600, 'ml'], ['huile_olive', 1, 'cs'], ['basilic', 5], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon dans l\'huile.', 'Ajoutez les courgettes en rondelles et le bouillon, cuisez 15 min.', 'Mixez avec le fromage frais et le basilic.']
  },
  {
    id: 'laksa', nom: 'Laksa', cat: 'Soupes', cuisine: 'Malaisienne', emoji: '🍜',
    desc: 'Soupe de nouilles au curry et lait de coco, crevettes et poulet.',
    portions: 4, prep: 20, cuisson: 20, diff: 2,
    ing: [['nouilles_riz', 250], ['crevettes', 300], ['poulet_blanc', 200], ['lait_coco', 400, 'ml'], ['pate_curry', 3, 'cs', 'Pâte laksa ou curry rouge'],
      ['bouillon', 800, 'ml'], ['pousses_soja', 150], ['tofu', 150], ['oeuf', 2, 'pc'], ['citron_vert', 1, 'pc'], ['nuoc_mam', 1, 'cs'], ['sucre', 1, 'cc'], ['coriandre', 10]],
    etapes: ['Faites cuire les œufs 8 min, écalez-les.', 'Faites revenir la pâte de curry 1 min, ajoutez le lait de coco et le bouillon.',
      'Ajoutez le poulet émincé et le tofu 8 min, puis les crevettes 3 min. Assaisonnez de nuoc-mâm et sucre.',
      'Faites tremper les nouilles, répartissez-les dans les bols avec les pousses de soja.', 'Versez la soupe, ajoutez les œufs coupés en deux, la coriandre et le citron vert.']
  },
  {
    id: 'veloute-asperges', nom: 'Velouté d\'asperges vertes', cat: 'Soupes', cuisine: 'Française', emoji: '🌱',
    desc: 'Le goût du printemps en velouté.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['asperges', 600], ['pomme_de_terre', 1, 'pc'], ['echalote', 1, 'pc'], ['bouillon', 800, 'ml'], ['creme_15', 100, 'ml'], ['beurre', 15], ['sel', 0, 'qs']],
    etapes: ['Coupez les pointes des asperges et réservez-les. Tronçonnez les tiges.', 'Faites fondre l\'échalote dans le beurre, ajoutez les tiges, la pomme de terre et le bouillon. Cuisez 15 min.',
      'Mixez avec la crème. Faites cuire les pointes 4 min dans le velouté avant de servir.']
  },
  {
    id: 'veloute-chataignes', nom: 'Velouté de châtaignes', cat: 'Soupes', cuisine: 'Française', emoji: '🌰',
    desc: 'Velouté d\'automne doux et boisé.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['chataignes', 400], ['oignon', 1, 'pc'], ['celeri', 1, 'pc'], ['bouillon', 900, 'ml'], ['creme_15', 100, 'ml'], ['beurre', 15], ['sel', 0, 'qs']],
    etapes: ['Faites fondre l\'oignon et le céleri dans le beurre.', 'Ajoutez les châtaignes et le bouillon, laissez cuire 20 min.', 'Mixez finement avec la crème.']
  },
  {
    id: 'caldo-verde', nom: 'Caldo verde', cat: 'Soupes', cuisine: 'Portugaise', emoji: '🥬',
    desc: 'Soupe portugaise au chou vert, pommes de terre et chorizo.',
    portions: 4, prep: 15, cuisson: 30, diff: 1,
    ing: [['pomme_de_terre', 600], ['chou', 300, 'g', 'Chou vert (ou kale)'], ['chorizo', 120], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['huile_olive', 3, 'cs'],
      ['bouillon', 1200, 'ml'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon et l\'ail dans l\'huile, ajoutez les pommes de terre et le bouillon. Cuisez 20 min.', 'Mixez la soupe.',
      'Ajoutez le chou très finement émincé et cuisez 5 min.', 'Faites griller le chorizo en rondelles et ajoutez-le au moment de servir.']
  },
  {
    id: 'veloute-panais', nom: 'Velouté de panais aux noisettes', cat: 'Soupes', cuisine: 'Française', emoji: '🥣',
    desc: 'Panais et pomme, éclats de noisettes grillées.',
    portions: 4, prep: 15, cuisson: 25, diff: 1,
    ing: [['panais', 600], ['pomme', 1, 'pc'], ['oignon', 1, 'pc'], ['bouillon', 900, 'ml'], ['creme_15', 80, 'ml'], ['noisettes', 30], ['beurre', 15], ['sel', 0, 'qs']],
    etapes: ['Faites fondre l\'oignon dans le beurre.', 'Ajoutez les panais et la pomme en morceaux, puis le bouillon. Cuisez 20 min.',
      'Mixez avec la crème. Servez avec les noisettes grillées concassées.']
  },
  {
    id: 'soupe-wontons', nom: 'Soupe de wontons', cat: 'Soupes', cuisine: 'Chinoise', emoji: '🥟',
    desc: 'Raviolis porc-crevettes dans un bouillon parfumé au gingembre.',
    portions: 4, prep: 40, cuisson: 15, diff: 2,
    ing: [['feuilles_gyoza', 24, 'pc', 'Feuilles à wontons'], ['porc_hache', 250], ['crevettes', 100], ['bouillon', 1500, 'ml', 'Bouillon de volaille'], ['chou_chinois', 2, 'pc'],
      ['oignon_nouveau', 2, 'pc'], ['sauce_soja', 3, 'cs'], ['gingembre', 15], ['huile_sesame', 1, 'cs']],
    etapes: ['Mélangez le porc, les crevettes hachées, 1 c. à soupe de sauce soja, la moitié du gingembre râpé et un oignon nouveau.',
      'Déposez une cuillère de farce au centre de chaque feuille, mouillez les bords et refermez en aumônière.',
      'Faites chauffer le bouillon avec le reste du gingembre et de la sauce soja. Pochez les wontons 5 min et le pak choï 2 min.', 'Servez avec l\'oignon nouveau et l\'huile de sésame.']
  },

  // ================= APÉRO =================
  {
    id: 'friands-saucisse', nom: 'Friands à la saucisse', cat: 'Apéro', cuisine: 'Française', emoji: '🥐',
    desc: 'Pâte feuilletée et chair à saucisse : 16 petits friands dorés.',
    portions: 8, prep: 20, cuisson: 25, diff: 1,
    ing: [['pate_feuilletee', 2, 'pc'], ['porc_hache', 400], ['oignon', 0.5, 'pc'], ['persil', 10], ['oeuf', 1, 'pc'], ['poivre', 0, 'qs']],
    etapes: ['Mélangez la chair à saucisse avec l\'oignon et le persil hachés.', 'Découpez chaque pâte en 8 rectangles. Garnissez la moitié d\'un boudin de farce, refermez et soudez.',
      'Dorez à l\'œuf battu et enfournez 25 min à 200 °C.']
  },
  {
    id: 'accras-morue', nom: 'Accras de morue', cat: 'Apéro', cuisine: 'Antillaise', emoji: '🐟',
    desc: 'Beignets créoles de morue aux herbes et piment.',
    portions: 6, prep: 30, cuisson: 15, diff: 2,
    ing: [['morue', 300], ['farine', 200], ['levure_chimique', 1, 'cc'], ['oeuf', 1, 'pc'], ['eau', 150, 'ml'], ['oignon_nouveau', 3, 'pc'], ['persil', 15],
      ['ail', 2, 'pc'], ['piment', 1, 'pc'], ['thym', 2, 'pc'], ['huile_neutre', 80, 'ml', 'Huile de friture (part absorbée)']],
    etapes: ['Dessalez la morue 24 h en changeant l\'eau, puis pochez-la 10 min et émiettez-la.', 'Mélangez la farine, la levure, l\'œuf et l\'eau en une pâte épaisse.',
      'Ajoutez la morue, les herbes, l\'ail, l\'oignon et le piment hachés. Laissez reposer 1 h.', 'Faites frire des petites cuillerées de pâte 3 min à 180 °C. Égouttez.']
  },
  {
    id: 'samoussas', nom: 'Samoussas au bœuf', cat: 'Apéro', cuisine: 'Indienne', emoji: '🔺',
    desc: 'Triangles croustillants farcis au bœuf épicé et petits pois (24 pièces).',
    portions: 6, prep: 40, cuisson: 20, diff: 2,
    ing: [['pate_filo', 12, 'pc', 'Feuilles de brick'], ['boeuf_hache_15', 300], ['oignon', 1, 'pc'], ['petits_pois', 100], ['pomme_de_terre', 1, 'pc'],
      ['curry', 2, 'cc'], ['coriandre', 10], ['huile_neutre', 4, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites cuire la pomme de terre en petits dés 8 min.', 'Faites revenir l\'oignon et la viande avec le curry, ajoutez les petits pois, la pomme de terre et la coriandre.',
      'Coupez les feuilles en deux, pliez en bandes, garnissez et pliez en triangles.', 'Badigeonnez d\'huile et enfournez 15 min à 200 °C en les retournant.']
  },
  {
    id: 'nems', nom: 'Nems au porc', cat: 'Apéro', cuisine: 'Vietnamienne', emoji: '🥢',
    desc: 'Rouleaux frits croustillants, à manger avec salade, menthe et nuoc-mâm (20 pièces).',
    portions: 6, prep: 45, cuisson: 20, diff: 3,
    ing: [['feuilles_riz', 20, 'pc'], ['porc_hache', 300], ['crevettes', 150], ['nouilles_riz', 50, 'g', 'Vermicelles de riz'], ['carotte', 1, 'pc'],
      ['champignons_shiitake', 50, 'g', 'Champignons noirs réhydratés'], ['oignon', 1, 'pc'], ['oeuf', 1, 'pc'], ['nuoc_mam', 5, 'cs'],
      ['huile_neutre', 60, 'ml', 'Huile de friture (part absorbée)'], ['salade', 100], ['menthe', 10], ['sucre', 2, 'cs'], ['citron_vert', 1, 'pc'], ['ail', 1, 'pc']],
    etapes: ['Faites tremper les vermicelles et coupez-les. Hachez crevettes, champignons, carotte et oignon.', 'Mélangez avec le porc, l\'œuf et 2 c. à soupe de nuoc-mâm.',
      'Humidifiez les galettes, garnissez et roulez serré en repliant les bords.', 'Faites frire 8 à 10 min à 170 °C jusqu\'à ce qu\'ils soient dorés.',
      'Sauce : 3 c. à soupe de nuoc-mâm, sucre, citron vert, ail et 10 cl d\'eau. Servez avec salade et menthe.']
  },
  {
    id: 'pico-de-gallo', nom: 'Pico de gallo et chips de maïs', cat: 'Apéro', cuisine: 'Mexicaine', emoji: '🌶️',
    desc: 'Salsa fraîche de tomates, oignon, piment et coriandre.',
    portions: 6, prep: 15, cuisson: 0, diff: 1,
    ing: [['tomate', 4, 'pc'], ['oignon_rouge', 1, 'pc'], ['piment', 1, 'pc', 'Piment jalapeño'], ['coriandre', 15], ['citron_vert', 1, 'pc'], ['chips_tortilla', 200], ['sel', 0, 'qs']],
    etapes: ['Coupez les tomates en petits dés en retirant les graines.', 'Hachez l\'oignon, le piment et la coriandre.',
      'Mélangez avec le jus de citron vert et le sel, laissez reposer 15 min.', 'Servez avec les chips de maïs.']
  },
  {
    id: 'muhammara', nom: 'Muhammara', cat: 'Apéro', cuisine: 'Syrienne', emoji: '🫑',
    desc: 'Tartinade de poivrons rôtis et noix, légèrement piquante.',
    portions: 6, prep: 15, cuisson: 30, diff: 1,
    ing: [['poivron', 3, 'pc', 'Poivrons rouges'], ['noix', 80], ['chapelure', 30], ['ail', 1, 'pc'], ['citron', 0.5, 'pc'], ['huile_olive', 3, 'cs'],
      ['cumin', 1, 'cc'], ['piment_poudre', 1, 'pincee'], ['miel', 1, 'cs', 'Miel (ou mélasse de grenade)'], ['sel', 0, 'qs']],
    etapes: ['Faites rôtir les poivrons 30 min à 220 °C, laissez-les tiédir dans un sac puis pelez-les.', 'Mixez-les avec les noix, la chapelure, l\'ail, le citron, le cumin, le piment, le miel et le sel.',
      'Ajoutez l\'huile et servez avec du pain pita.']
  },
  {
    id: 'rillettes-saumon', nom: 'Rillettes de saumon', cat: 'Apéro', cuisine: 'Française', emoji: '🐟',
    desc: 'Saumon frais et fumé, fromage frais, citron et aneth.',
    portions: 6, prep: 15, cuisson: 10, diff: 1,
    ing: [['saumon', 200], ['saumon_fume', 100], ['fromage_frais', 120], ['citron', 0.5, 'pc'], ['aneth', 5], ['ciboulette', 5], ['poivre', 0, 'qs']],
    etapes: ['Pochez le saumon frais 8 min dans l\'eau frémissante, laissez refroidir et émiettez.', 'Hachez le saumon fumé.',
      'Mélangez avec le fromage frais, le citron et les herbes. Réservez au frais.']
  },
  {
    id: 'pain-ail', nom: 'Pain à l\'ail', cat: 'Apéro', cuisine: 'Américaine', emoji: '🧄',
    desc: 'Baguette croustillante au beurre d\'ail et persil.',
    portions: 6, prep: 10, cuisson: 12, diff: 1,
    ing: [['pain', 1, 'pc'], ['beurre', 80], ['ail', 3, 'pc'], ['persil', 15], ['sel', 1, 'pincee']],
    etapes: ['Mélangez le beurre mou avec l\'ail écrasé, le persil haché et le sel.', 'Entaillez la baguette tous les 2 cm sans couper jusqu\'en bas, garnissez de beurre.',
      'Enveloppez dans du papier aluminium et enfournez 10 min à 200 °C, puis 2 min ouvert.']
  },
  {
    id: 'croquetas', nom: 'Croquetas au jambon', cat: 'Apéro', cuisine: 'Espagnole', emoji: '🧆',
    desc: 'Croquettes espagnoles crémeuses au jambon serrano (24 pièces).',
    portions: 6, prep: 40, cuisson: 15, diff: 2,
    ing: [['jambon_cru', 120, 'g', 'Jambon serrano'], ['beurre', 60], ['farine', 70], ['lait_entier', 600, 'ml'], ['oeuf', 2, 'pc'], ['chapelure', 100],
      ['huile_neutre', 60, 'ml', 'Huile de friture (part absorbée)'], ['muscade', 1, 'pincee']],
    etapes: ['Faites une béchamel épaisse : beurre, farine, puis le lait chaud en fouettant 10 min. Ajoutez le jambon haché et la muscade.',
      'Étalez dans un plat, filmez au contact et réfrigérez au moins 4 h.', 'Formez des croquettes, passez-les dans l\'œuf battu puis la chapelure.', 'Faites-les frire 2 à 3 min à 180 °C.']
  },
  {
    id: 'arancini', nom: 'Arancini', cat: 'Apéro', cuisine: 'Sicilienne', emoji: '🍙',
    desc: 'Boulettes de risotto safrané au cœur de mozzarella, panées et frites.',
    portions: 6, prep: 45, cuisson: 40, diff: 3,
    ing: [['riz_arborio', 250], ['bouillon', 800, 'ml'], ['parmesan', 50], ['beurre', 20], ['safran', 1, 'pc'], ['mozzarella', 1, 'pc'], ['oeuf', 2, 'pc'],
      ['farine', 50], ['chapelure', 120], ['huile_neutre', 80, 'ml', 'Huile de friture (part absorbée)']],
    etapes: ['Préparez un risotto avec le riz, le bouillon safrané, le beurre et le parmesan. Laissez refroidir complètement.',
      'Formez des boules en glissant un dé de mozzarella au centre.', 'Passez-les dans la farine, l\'œuf battu et la chapelure.', 'Faites frire 4 min à 175 °C.']
  },
  {
    id: 'focaccia', nom: 'Focaccia aux tomates cerises', cat: 'Apéro', cuisine: 'Italienne', emoji: '🍞',
    desc: 'Pain moelleux à l\'huile d\'olive, romarin et tomates cerises.',
    portions: 8, prep: 20, cuisson: 25, diff: 2,
    ing: [['farine', 500], ['eau', 400, 'ml', 'Eau tiède'], ['levure_boulangere', 1, 'pc'], ['huile_olive', 6, 'cs'], ['sel', 2, 'cc'], ['romarin', 2, 'pc'],
      ['tomates_cerises', 150], ['olives', 50]],
    etapes: ['Mélangez la farine, la levure, le sel, l\'eau et 2 c. à soupe d\'huile. Pétrissez 5 min (pâte collante).', 'Laissez lever 2 h, couvert.',
      'Étalez dans un plat huilé, enfoncez les doigts pour former des creux. Garnissez de tomates, olives et romarin, arrosez du reste d\'huile.', 'Laissez lever 30 min et enfournez 25 min à 220 °C.']
  },
  {
    id: 'gyozas', nom: 'Gyozas au porc', cat: 'Apéro', cuisine: 'Japonaise', emoji: '🥟',
    desc: 'Raviolis grillés puis cuits à la vapeur, sauce soja-vinaigre (30 pièces).',
    portions: 6, prep: 45, cuisson: 15, diff: 2,
    ing: [['feuilles_gyoza', 30, 'pc'], ['porc_hache', 300], ['chou', 150, 'g', 'Chou chinois'], ['oignon_nouveau', 2, 'pc'], ['ail', 2, 'pc'], ['gingembre', 10],
      ['sauce_soja', 4, 'cs'], ['huile_sesame', 1, 'cs'], ['huile_neutre', 2, 'cs'], ['vinaigre_riz', 2, 'cs']],
    etapes: ['Hachez très finement le chou, salez-le 10 min et pressez-le.', 'Mélangez avec le porc, l\'ail, le gingembre, l\'oignon, 1 c. à soupe de sauce soja et l\'huile de sésame.',
      'Garnissez les feuilles, mouillez les bords et pliez en formant des plis.', 'Faites dorer le fond 2 min dans l\'huile, versez 10 cl d\'eau, couvrez et cuisez 6 min.',
      'Sauce : reste de sauce soja et vinaigre de riz.']
  },
  {
    id: 'edamame-ail', nom: 'Edamame sautés ail-soja', cat: 'Apéro', cuisine: 'Japonaise', emoji: '🫛',
    desc: 'Fèves de soja sautées, à grignoter.',
    portions: 4, prep: 5, cuisson: 6, diff: 1,
    ing: [['edamame', 400], ['ail', 2, 'pc'], ['sauce_soja', 2, 'cs'], ['huile_sesame', 1, 'cs'], ['piment_poudre', 1, 'pincee'], ['graines_sesame', 1, 'cc']],
    etapes: ['Faites cuire les edamame 3 min à l\'eau bouillante, égouttez.', 'Faites-les sauter avec l\'huile de sésame et l\'ail 2 min.', 'Ajoutez la sauce soja, le piment et le sésame.']
  },
  {
    id: 'nachos', nom: 'Nachos gratinés', cat: 'Apéro', cuisine: 'Tex-Mex', emoji: '🧀',
    desc: 'Chips de maïs, haricots noirs, cheddar fondu, salsa et guacamole.',
    portions: 6, prep: 10, cuisson: 8, diff: 1,
    ing: [['chips_tortilla', 250], ['cheddar', 150, 'g', 'Cheddar râpé'], ['haricots_noirs', 200], ['tomate', 2, 'pc'], ['oignon_rouge', 0.5, 'pc'],
      ['piment', 1, 'pc', 'Jalapeño'], ['creme_epaisse', 100], ['avocat', 1, 'pc'], ['coriandre', 10]],
    etapes: ['Étalez les chips sur une plaque, parsemez de haricots et de cheddar.', 'Enfournez 6 à 8 min à 200 °C jusqu\'à ce que le fromage fonde.',
      'Garnissez de tomates, oignon et piment en dés, d\'avocat écrasé, de crème et de coriandre.']
  },
  {
    id: 'mozzarella-sticks', nom: 'Mozzarella sticks', cat: 'Apéro', cuisine: 'Américaine', emoji: '🧀',
    desc: 'Bâtonnets de mozzarella panés et filants, sauce tomate.',
    portions: 4, prep: 20, cuisson: 10, diff: 2,
    ing: [['mozzarella', 250, 'g', 'Mozzarella ferme (pour pizza)'], ['farine', 50], ['oeuf', 2, 'pc'], ['chapelure', 100], ['origan', 1, 'cc'],
      ['huile_neutre', 60, 'ml', 'Huile de friture (part absorbée)'], ['coulis_tomate', 200]],
    etapes: ['Coupez la mozzarella en bâtonnets.', 'Passez-les dans la farine, l\'œuf, la chapelure à l\'origan, puis de nouveau dans l\'œuf et la chapelure.',
      'Congelez 30 min pour qu\'ils tiennent à la cuisson.', 'Faites-les frire 1 à 2 min à 180 °C. Servez avec le coulis chaud.']
  },
  {
    id: 'cervelle-canut', nom: 'Cervelle de canut', cat: 'Apéro', cuisine: 'Lyonnaise', emoji: '🧀',
    desc: 'Fromage blanc aux herbes et échalote, la spécialité des canuts lyonnais.',
    portions: 6, prep: 15, cuisson: 0, diff: 1,
    ing: [['fromage_blanc_3', 500], ['echalote', 2, 'pc'], ['ail', 1, 'pc'], ['ciboulette', 15], ['persil', 10], ['creme_epaisse', 50], ['vinaigre', 1, 'cs'],
      ['huile_olive', 1, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Égouttez le fromage blanc si besoin.', 'Mélangez-le avec la crème, le vinaigre et l\'huile.', 'Ajoutez l\'échalote, l\'ail et les herbes hachés. Salez, poivrez, réservez au frais.']
  },
  {
    id: 'camembert-roti', nom: 'Camembert rôti au miel et romarin', cat: 'Apéro', cuisine: 'Normande', emoji: '🧀',
    desc: 'Camembert fondant au four, à partager avec des mouillettes.',
    portions: 4, prep: 5, cuisson: 15, diff: 1,
    ing: [['camembert', 1, 'pc'], ['ail', 1, 'pc'], ['romarin', 1, 'pc'], ['miel', 1, 'cs'], ['pain', 1, 'pc']],
    etapes: ['Retirez le papier du camembert et remettez-le dans sa boîte en bois.', 'Entaillez le dessus, piquez de lamelles d\'ail et de romarin, arrosez de miel.',
      'Enfournez 15 min à 200 °C. Servez avec la baguette en mouillettes.']
  },
  {
    id: 'empanadas', nom: 'Empanadas au bœuf', cat: 'Apéro', cuisine: 'Argentine', emoji: '🥟',
    desc: 'Chaussons farcis au bœuf, poivron, œuf et olives.',
    portions: 6, prep: 40, cuisson: 25, diff: 2,
    ing: [['pate_brisee', 2, 'pc'], ['boeuf_hache_15', 400], ['oignon', 1, 'pc'], ['poivron', 1, 'pc'], ['oeuf', 2, 'pc'], ['olives', 40, 'g', 'Olives vertes'],
      ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon et le poivron, ajoutez la viande et les épices. Laissez refroidir.', 'Ajoutez 1 œuf dur haché et les olives.',
      'Découpez des disques de pâte, garnissez, refermez et repliez le bord en torsade.', 'Dorez à l\'œuf battu et enfournez 20 à 25 min à 200 °C.']
  },
  {
    id: 'blinis-saumon', nom: 'Blinis au saumon fumé', cat: 'Apéro', cuisine: 'Russe', emoji: '🥞',
    desc: 'Petits blinis maison, crème à l\'aneth et saumon fumé (environ 24).',
    portions: 6, prep: 20, cuisson: 15, diff: 1,
    ing: [['farine', 125], ['lait_demi', 150, 'ml'], ['oeuf', 1, 'pc'], ['levure_chimique', 1, 'cc'], ['saumon_fume', 150], ['creme_epaisse', 100], ['aneth', 5], ['citron', 0.5, 'pc'], ['sel', 1, 'pincee']],
    etapes: ['Mélangez la farine, la levure, le sel, l\'œuf et le lait en une pâte épaisse.', 'Faites cuire des petites cuillerées dans une poêle beurrée, 1 min par face.',
      'Mélangez la crème avec l\'aneth et le citron.', 'Garnissez chaque blini de crème et d\'un morceau de saumon.']
  },
  {
    id: 'labneh', nom: 'Labneh à l\'huile d\'olive', cat: 'Apéro', cuisine: 'Libanaise', emoji: '🥣',
    desc: 'Yaourt égoutté crémeux, huile d\'olive et menthe.',
    portions: 6, prep: 10, cuisson: 0, diff: 1,
    ing: [['yaourt_grec', 500], ['huile_olive', 3, 'cs'], ['menthe', 5, 'g', 'Menthe séchée ou fraîche'], ['sel', 1, 'cc']],
    etapes: ['Mélangez le yaourt et le sel, versez dans un torchon fin posé sur une passoire.', 'Laissez égoutter 12 à 24 h au réfrigérateur.',
      'Étalez dans une assiette, creusez des sillons, arrosez d\'huile et parsemez de menthe.']
  },
  {
    id: 'fougasse-olives', nom: 'Fougasse aux olives', cat: 'Apéro', cuisine: 'Provençale', emoji: '🌾',
    desc: 'Pain plat ajouré à l\'huile d\'olive, olives et herbes de Provence.',
    portions: 8, prep: 20, cuisson: 20, diff: 2,
    ing: [['farine', 500], ['eau', 300, 'ml', 'Eau tiède'], ['levure_boulangere', 1, 'pc'], ['huile_olive', 4, 'cs'], ['sel', 2, 'cc'], ['olives', 100], ['herbes_provence', 1, 'cs']],
    etapes: ['Pétrissez la farine, la levure, le sel, l\'eau et 2 c. à soupe d\'huile 10 min, puis incorporez les olives hachées et les herbes.', 'Laissez lever 1 h 30.',
      'Étalez en forme de feuille, faites des entailles et écartez-les. Laissez lever 30 min.', 'Badigeonnez du reste d\'huile et enfournez 20 min à 220 °C.']
  }
]);
