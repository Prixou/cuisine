/* Tartes & pizzas, Accompagnements, Petit-déjeuner, Desserts */
window.RECETTES = (window.RECETTES || []).concat([
  // ================= TARTES & PIZZAS =================
  {
    id: 'quiche-lorraine', nom: 'Quiche lorraine', cat: 'Tartes & pizzas', cuisine: 'Lorraine', emoji: '🥧',
    desc: 'La vraie : lardons, œufs et crème, sans fromage.',
    portions: 6, prep: 15, cuisson: 40, diff: 1,
    ing: [
      ['pate_brisee', 1, 'pc'], ['lardons', 200], ['oeuf', 3, 'pc'], ['creme_30', 200, 'ml'], ['lait_demi', 200, 'ml'],
      ['muscade', 1, 'pincee'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Préchauffez le four à 200 °C. Foncez un moule avec la pâte, piquez le fond.',
      'Faites revenir les lardons à sec, égouttez-les et répartissez-les sur la pâte.',
      'Battez les œufs avec la crème, le lait, la muscade et le poivre (peu de sel : les lardons sont salés).',
      'Versez sur les lardons et enfournez 35 à 40 min.'
    ]
  },
  {
    id: 'quiche-poireaux-chevre', nom: 'Quiche poireaux-chèvre', cat: 'Tartes & pizzas', cuisine: 'Française', emoji: '🥧',
    desc: 'Poireaux fondants et chèvre crémeux.',
    portions: 6, prep: 20, cuisson: 40, diff: 1,
    ing: [
      ['pate_brisee', 1, 'pc'], ['poireau', 3, 'pc'], ['chevre', 150], ['oeuf', 3, 'pc'], ['creme_15', 200, 'ml'], ['lait_demi', 100, 'ml'],
      ['beurre', 15], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Émincez les poireaux et faites-les fondre 15 min dans le beurre.',
      'Foncez le moule avec la pâte, étalez les poireaux, ajoutez le chèvre en rondelles.',
      'Battez les œufs avec la crème et le lait, salez, poivrez. Versez dans le moule.',
      'Enfournez 35 à 40 min à 190 °C.'
    ]
  },
  {
    id: 'tarte-tomate-moutarde', nom: 'Tarte à la tomate et moutarde', cat: 'Tartes & pizzas', cuisine: 'Française', emoji: '🍅',
    desc: 'Simple et estivale : moutarde, comté et tomates rôties.',
    portions: 6, prep: 15, cuisson: 35, diff: 1,
    ing: [
      ['pate_brisee', 1, 'pc'], ['tomate', 5, 'pc'], ['moutarde', 3, 'cs'], ['comte', 80], ['herbes_provence', 1, 'cc'],
      ['huile_olive', 1, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Foncez le moule avec la pâte, tartinez de moutarde et parsemez de comté râpé.',
      'Disposez les tomates en rondelles, salez, poivrez, ajoutez les herbes et l\'huile.',
      'Enfournez 35 min à 200 °C.'
    ]
  },
  {
    id: 'pizza-margherita', nom: 'Pizza margherita', cat: 'Tartes & pizzas', cuisine: 'Italienne', emoji: '🍕',
    desc: 'Tomate, mozzarella, basilic : la reine de Naples.',
    portions: 2, prep: 15, cuisson: 12, diff: 1,
    ing: [
      ['pate_pizza', 1, 'pc'], ['coulis_tomate', 150], ['mozzarella', 1, 'pc'], ['basilic', 5], ['huile_olive', 1, 'cs'], ['origan', 1, 'pincee'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Préchauffez le four au maximum (250 °C minimum) avec la plaque dedans.',
      'Étalez la pâte finement. Couvrez de coulis salé, sans aller jusqu\'aux bords.',
      'Ajoutez la mozzarella égouttée en morceaux et l\'origan.',
      'Enfournez 10 à 12 min. Ajoutez le basilic et un filet d\'huile à la sortie.'
    ]
  },
  {
    id: 'pizza-reine', nom: 'Pizza reine', cat: 'Tartes & pizzas', cuisine: 'Italienne', emoji: '🍕',
    desc: 'Jambon, champignons, mozzarella et olives.',
    portions: 2, prep: 15, cuisson: 12, diff: 1,
    ing: [
      ['pate_pizza', 1, 'pc'], ['coulis_tomate', 150], ['jambon_blanc', 3, 'pc'], ['champignons', 100], ['mozzarella', 1, 'pc'],
      ['olives', 20, 'g', 'Olives noires'], ['origan', 1, 'pincee']
    ],
    etapes: [
      'Préchauffez le four au maximum avec la plaque dedans.',
      'Étalez la pâte, couvrez de coulis.',
      'Ajoutez le jambon en morceaux, les champignons émincés, la mozzarella, les olives et l\'origan.',
      'Enfournez 10 à 12 min.'
    ]
  },
  {
    id: 'flammekueche', nom: 'Flammekueche', cat: 'Tartes & pizzas', cuisine: 'Alsacienne', emoji: '🔥',
    desc: 'Tarte flambée : pâte fine, crème, oignons et lardons.',
    portions: 4, prep: 15, cuisson: 12, diff: 1,
    ing: [
      ['pate_pizza', 1, 'pc', 'Pâte à pizza fine'], ['fromage_blanc_3', 150], ['creme_epaisse', 100], ['oignon', 2, 'pc'], ['lardons', 150],
      ['muscade', 1, 'pincee'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Préchauffez le four au maximum.',
      'Mélangez fromage blanc, crème, muscade, sel et poivre.',
      'Étalez la pâte très finement, tartinez du mélange.',
      'Parsemez d\'oignons émincés très finement et de lardons crus. Enfournez 10 à 12 min.'
    ]
  },
  {
    id: 'galette-complete', nom: 'Galettes de sarrasin complètes', cat: 'Tartes & pizzas', cuisine: 'Bretonne', emoji: '🥞',
    desc: 'Galette bretonne au jambon, œuf et emmental.',
    portions: 4, prep: 10, cuisson: 20, diff: 2,
    ing: [
      ['farine_sarrasin', 250], ['eau', 500, 'ml'], ['oeuf', 5, 'pc'], ['jambon_blanc', 4, 'pc'], ['emmental', 100], ['beurre', 30], ['sel', 1, 'cc']
    ],
    etapes: [
      'Pâte : mélangez la farine, le sel, 1 œuf et l\'eau progressivement. Laissez reposer 1 h minimum.',
      'Faites cuire une galette dans une poêle beurrée bien chaude.',
      'Retournez-la, cassez un œuf au centre, ajoutez le jambon et l\'emmental autour.',
      'Repliez les bords en carré quand le blanc est pris. Répétez pour chaque galette.'
    ]
  },

  // ================= ACCOMPAGNEMENTS =================
  {
    id: 'gratin-dauphinois', nom: 'Gratin dauphinois', cat: 'Accompagnements', cuisine: 'Française', emoji: '🥔',
    desc: 'Pommes de terre fondantes cuites dans la crème et le lait.',
    portions: 6, prep: 20, cuisson: 75, diff: 1,
    ing: [
      ['pomme_de_terre', 1200], ['creme_30', 300, 'ml'], ['lait_entier', 300, 'ml'], ['ail', 1, 'pc'], ['beurre', 10],
      ['muscade', 1, 'pincee'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Frottez un plat avec l\'ail puis beurrez-le.',
      'Coupez les pommes de terre en fines rondelles (ne les rincez pas).',
      'Faites chauffer le lait et la crème avec la muscade, sel et poivre. Ajoutez les pommes de terre et cuisez 10 min en remuant.',
      'Versez dans le plat et enfournez 1 h à 160 °C, jusqu\'à ce que le dessus soit doré.'
    ]
  },
  {
    id: 'puree-maison', nom: 'Purée de pommes de terre', cat: 'Accompagnements', cuisine: 'Française', emoji: '🥔',
    desc: 'Purée onctueuse au beurre et au lait.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [
      ['pomme_de_terre', 1000, 'g', 'Pommes de terre à chair farineuse'], ['lait_demi', 250, 'ml'], ['beurre', 50], ['muscade', 1, 'pincee'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les pommes de terre épluchées 20 à 25 min dans l\'eau salée.',
      'Égouttez-les et passez-les au presse-purée.',
      'Incorporez le beurre puis le lait chaud progressivement. Assaisonnez de muscade et sel.'
    ]
  },
  {
    id: 'frites-four', nom: 'Frites au four', cat: 'Accompagnements', cuisine: 'Belge', emoji: '🍟',
    desc: 'Croustillantes avec 3 cuillères d\'huile seulement.',
    portions: 4, prep: 15, cuisson: 40, diff: 1,
    ing: [
      ['pomme_de_terre', 1000], ['huile_neutre', 3, 'cs'], ['paprika', 1, 'cc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Coupez les pommes de terre en bâtonnets, faites-les tremper 30 min dans l\'eau froide, séchez-les bien.',
      'Mélangez avec l\'huile et le paprika.',
      'Étalez sur une plaque sans qu\'elles se chevauchent. Enfournez 35 à 40 min à 220 °C en retournant à mi-cuisson. Salez à la sortie.'
    ]
  },
  {
    id: 'riz-pilaf', nom: 'Riz pilaf', cat: 'Accompagnements', cuisine: 'Orientale', emoji: '🍚',
    desc: 'Riz nacré puis cuit au bouillon, grains bien détachés.',
    portions: 4, prep: 5, cuisson: 20, diff: 1,
    ing: [
      ['riz_blanc', 250], ['oignon', 1, 'pc'], ['beurre', 20], ['bouillon', 500, 'ml'], ['laurier', 1, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites fondre l\'oignon haché dans le beurre.',
      'Ajoutez le riz et remuez 2 min jusqu\'à ce qu\'il soit translucide.',
      'Versez le bouillon chaud, ajoutez le laurier. Couvrez et cuisez 17 min à feu doux sans remuer.'
    ]
  },
  {
    id: 'legumes-rotis', nom: 'Légumes rôtis au four', cat: 'Accompagnements', cuisine: 'Méditerranéenne', emoji: '🥕',
    desc: 'Plaque de légumes colorés caramélisés aux herbes.',
    portions: 4, prep: 15, cuisson: 35, diff: 1,
    ing: [
      ['carotte', 3, 'pc'], ['courgette', 2, 'pc'], ['poivron', 2, 'pc'], ['oignon_rouge', 2, 'pc'], ['patate_douce', 1, 'pc'],
      ['huile_olive', 3, 'cs'], ['herbes_provence', 1, 'cc'], ['ail', 3, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Coupez tous les légumes en morceaux de taille similaire.',
      'Mélangez-les avec l\'huile, les herbes, l\'ail et le sel.',
      'Étalez sur une plaque et rôtissez 35 min à 210 °C en remuant à mi-cuisson.'
    ]
  },
  {
    id: 'haricots-verts-ail', nom: 'Haricots verts à l\'ail', cat: 'Accompagnements', cuisine: 'Française', emoji: '🫛',
    desc: 'Haricots verts croquants poêlés au beurre, ail et persil.',
    portions: 4, prep: 10, cuisson: 12, diff: 1,
    ing: [
      ['haricots_verts', 600], ['beurre', 20], ['ail', 2, 'pc'], ['persil', 10], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les haricots 7 min à l\'eau bouillante salée, refroidissez-les à l\'eau glacée.',
      'Faites-les sauter 3 min dans le beurre avec l\'ail haché.',
      'Ajoutez le persil, salez.'
    ]
  },
  {
    id: 'tian-provencal', nom: 'Tian provençal', cat: 'Accompagnements', cuisine: 'Provençale', emoji: '🍅',
    desc: 'Rondelles de légumes du soleil alternées et rôties au thym.',
    portions: 6, prep: 20, cuisson: 50, diff: 1,
    ing: [
      ['courgette', 2, 'pc'], ['aubergine', 1, 'pc'], ['tomate', 4, 'pc'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['huile_olive', 3, 'cs'],
      ['thym', 3, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites fondre l\'oignon et l\'ail émincés dans 1 c. à soupe d\'huile, étalez au fond d\'un plat.',
      'Coupez les légumes en rondelles fines, disposez-les debout en les alternant.',
      'Arrosez du reste d\'huile, parsemez de thym, salez et poivrez.',
      'Enfournez 50 min à 180 °C.'
    ]
  },
  {
    id: 'pommes-sarladaises', nom: 'Pommes de terre sarladaises', cat: 'Accompagnements', cuisine: 'Périgourdine', emoji: '🥔',
    desc: 'Pommes de terre sautées à la graisse de canard, ail et persil.',
    portions: 4, prep: 15, cuisson: 30, diff: 1,
    ing: [
      ['pomme_de_terre', 1000], ['graisse_canard', 3, 'cs'], ['ail', 3, 'pc'], ['persil', 15], ['sel', 0, 'qs']
    ],
    etapes: [
      'Coupez les pommes de terre en rondelles de 5 mm.',
      'Faites-les dorer dans la graisse de canard à feu moyen 25 min en remuant régulièrement.',
      'Ajoutez l\'ail et le persil hachés en fin de cuisson. Salez.'
    ]
  },
  {
    id: 'polenta-cremeuse', nom: 'Polenta crémeuse au parmesan', cat: 'Accompagnements', cuisine: 'Italienne', emoji: '🌽',
    desc: 'Polenta onctueuse, parfaite avec un plat en sauce.',
    portions: 4, prep: 5, cuisson: 15, diff: 1,
    ing: [
      ['polenta', 200], ['bouillon', 500, 'ml'], ['lait_demi', 300, 'ml'], ['parmesan', 50], ['beurre', 30], ['sel', 0, 'qs']
    ],
    etapes: [
      'Portez le bouillon et le lait à ébullition.',
      'Versez la polenta en pluie en fouettant.',
      'Laissez cuire à feu doux en remuant selon le temps indiqué (de 5 à 40 min selon la polenta).',
      'Ajoutez le beurre et le parmesan.'
    ]
  },
  {
    id: 'semoule-legumes', nom: 'Semoule aux légumes et raisins', cat: 'Accompagnements', cuisine: 'Marocaine', emoji: '🥙',
    desc: 'Semoule parfumée aux épices douces, légumes et raisins secs.',
    portions: 4, prep: 15, cuisson: 10, diff: 1,
    ing: [
      ['semoule', 250], ['courgette', 1, 'pc'], ['carotte', 1, 'pc'], ['raisins_secs', 40], ['ras_el_hanout', 1, 'cc'],
      ['huile_olive', 2, 'cs'], ['bouillon', 250, 'ml'], ['coriandre', 10], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir la carotte et la courgette en petits dés dans l\'huile avec le ras el hanout 5 min.',
      'Versez le bouillon bouillant sur la semoule et les raisins, couvrez 5 min.',
      'Égrenez à la fourchette, mélangez avec les légumes et la coriandre.'
    ]
  },

  // ================= PETIT-DÉJEUNER =================
  {
    id: 'pancakes', nom: 'Pancakes moelleux', cat: 'Petit-déjeuner', cuisine: 'Américaine', emoji: '🥞',
    desc: 'Pancakes épais et aériens (environ 12).',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [
      ['farine', 250], ['lait_demi', 300, 'ml'], ['oeuf', 2, 'pc'], ['sucre', 30], ['levure_chimique', 1, 'pc'], ['beurre', 30], ['sel', 1, 'pincee']
    ],
    etapes: [
      'Mélangez la farine, la levure, le sucre et le sel.',
      'Ajoutez les œufs, le beurre fondu puis le lait en fouettant juste ce qu\'il faut (quelques grumeaux, c\'est normal).',
      'Laissez reposer 10 min.',
      'Faites cuire des petites louches dans une poêle légèrement graissée, retournez quand des bulles apparaissent.'
    ],
    astuce: 'Sirop d\'érable et fruits rouges non comptés dans les valeurs nutritionnelles.'
  },
  {
    id: 'pancakes-proteines', nom: 'Pancakes protéinés banane-avoine', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '💪',
    desc: 'Sans farine ni sucre ajouté, plus de 30 g de protéines par portion.',
    portions: 2, prep: 5, cuisson: 10, diff: 1,
    ing: [
      ['flocons_avoine', 80], ['banane', 1, 'pc'], ['oeuf', 2, 'pc'], ['skyr', 100], ['proteine_whey', 30], ['levure_chimique', 1, 'cc'], ['cannelle', 1, 'pincee']
    ],
    etapes: [
      'Mixez tous les ingrédients jusqu\'à obtenir une pâte lisse.',
      'Faites cuire des petites louches dans une poêle antiadhésive à feu moyen, 2 min par face.'
    ]
  },
  {
    id: 'crepes', nom: 'Crêpes', cat: 'Petit-déjeuner', cuisine: 'Française', emoji: '🥞',
    desc: 'La pâte à crêpes inratable (environ 15 crêpes).',
    portions: 6, prep: 10, cuisson: 30, diff: 1,
    ing: [
      ['farine', 250], ['lait_demi', 500, 'ml'], ['oeuf', 4, 'pc'], ['sucre', 30], ['beurre', 50], ['sel', 1, 'pincee'], ['vanille', 1, 'cc']
    ],
    etapes: [
      'Mettez la farine, le sucre et le sel dans un saladier, creusez un puits.',
      'Ajoutez les œufs et mélangez en incorporant le lait petit à petit pour éviter les grumeaux.',
      'Ajoutez le beurre fondu et la vanille. Laissez reposer 1 h si possible.',
      'Faites cuire dans une poêle chaude légèrement beurrée, 1 min par face.'
    ]
  },
  {
    id: 'porridge', nom: 'Porridge banane-myrtilles', cat: 'Petit-déjeuner', cuisine: 'Anglaise', emoji: '🥣',
    desc: 'Flocons d\'avoine crémeux, banane et myrtilles.',
    portions: 2, prep: 5, cuisson: 8, diff: 1,
    ing: [
      ['flocons_avoine', 100], ['lait_demi', 400, 'ml'], ['banane', 1, 'pc'], ['miel', 1, 'cs'], ['cannelle', 1, 'pincee'], ['myrtilles', 80]
    ],
    etapes: [
      'Faites chauffer le lait avec les flocons et la cannelle à feu moyen 5 min en remuant.',
      'Ajoutez la moitié de la banane écrasée pour l\'onctuosité.',
      'Servez avec le reste de banane en rondelles, les myrtilles et le miel.'
    ]
  },
  {
    id: 'overnight-oats', nom: 'Overnight oats fruits rouges', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🫙',
    desc: 'Préparés la veille, prêts à emporter le matin.',
    portions: 2, prep: 5, cuisson: 0, diff: 1,
    ing: [
      ['flocons_avoine', 80], ['lait_demi', 200, 'ml'], ['yaourt_nature', 1, 'pc'], ['graines_chia', 1, 'cs'], ['miel', 1, 'cs'], ['fruits_rouges', 100]
    ],
    etapes: [
      'Mélangez les flocons, le lait, le yaourt, les graines de chia et le miel dans deux bocaux.',
      'Ajoutez les fruits rouges sur le dessus.',
      'Fermez et laissez une nuit au réfrigérateur.'
    ]
  },
  {
    id: 'oeufs-brouilles', nom: 'Œufs brouillés crémeux', cat: 'Petit-déjeuner', cuisine: 'Française', emoji: '🍳',
    desc: 'Cuisson douce pour des œufs ultra crémeux, sur pain grillé.',
    portions: 2, prep: 5, cuisson: 5, diff: 1,
    ing: [
      ['oeuf', 4, 'pc'], ['beurre', 10], ['lait_demi', 2, 'cs'], ['ciboulette', 3], ['pain_campagne', 2, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Battez les œufs avec le lait, salez légèrement.',
      'Faites fondre le beurre à feu doux, versez les œufs.',
      'Remuez sans arrêt avec une spatule, en retirant du feu régulièrement. Arrêtez quand ils sont encore baveux.',
      'Servez sur le pain grillé avec la ciboulette et le poivre.'
    ]
  },
  {
    id: 'omelette-champignons', nom: 'Omelette aux champignons', cat: 'Petit-déjeuner', cuisine: 'Française', emoji: '🍄',
    desc: 'Omelette baveuse aux champignons et emmental.',
    portions: 2, prep: 5, cuisson: 10, diff: 1,
    ing: [
      ['oeuf', 4, 'pc'], ['champignons', 100], ['emmental', 30], ['beurre', 10], ['ciboulette', 3], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites dorer les champignons émincés dans la moitié du beurre, réservez.',
      'Battez les œufs avec sel et poivre. Faites cuire dans le reste du beurre en ramenant les bords vers le centre.',
      'Quand l\'omelette est encore baveuse, ajoutez les champignons et le fromage, pliez en deux.'
    ]
  },
  {
    id: 'avocado-toast', nom: 'Avocado toast et œuf poché', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🥑',
    desc: 'Pain grillé, avocat écrasé, œuf poché et piment.',
    portions: 2, prep: 10, cuisson: 5, diff: 2,
    ing: [
      ['pain_campagne', 2, 'pc'], ['avocat', 1, 'pc'], ['oeuf', 2, 'pc'], ['citron', 0.5, 'pc'], ['piment_poudre', 1, 'pincee'],
      ['graines_sesame', 1, 'cc'], ['sel', 0, 'qs'], ['vinaigre', 1, 'cs']
    ],
    etapes: [
      'Écrasez l\'avocat avec le jus de citron et le sel.',
      'Portez de l\'eau à frémissement avec le vinaigre. Créez un tourbillon et cassez-y un œuf. Pochez 3 min. Répétez.',
      'Grillez le pain, tartinez d\'avocat, posez l\'œuf. Parsemez de piment et de sésame.'
    ]
  },
  {
    id: 'granola', nom: 'Granola maison', cat: 'Petit-déjeuner', cuisine: 'Américaine', emoji: '🥣',
    desc: 'Flocons d\'avoine et fruits secs caramélisés au miel (portions de 60 g).',
    portions: 12, prep: 10, cuisson: 25, diff: 1,
    ing: [
      ['flocons_avoine', 300], ['amandes', 80], ['noisettes', 50], ['miel', 80], ['huile_neutre', 40, 'ml'], ['coco_rapee', 30],
      ['raisins_secs', 60], ['cannelle', 1, 'cc'], ['sel', 1, 'pincee']
    ],
    etapes: [
      'Mélangez les flocons, les fruits secs concassés, la coco, la cannelle et le sel.',
      'Ajoutez le miel et l\'huile tiédis, mélangez bien.',
      'Étalez sur une plaque et enfournez 25 min à 160 °C en remuant toutes les 8 min.',
      'Ajoutez les raisins secs une fois refroidi. Conservez dans un bocal.'
    ]
  },
  {
    id: 'smoothie-bowl', nom: 'Smoothie bowl', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🍓',
    desc: 'Smoothie épais de fruits rouges et banane, garni de toppings.',
    portions: 2, prep: 10, cuisson: 0, diff: 1,
    ing: [
      ['banane', 2, 'pc', 'Bananes congelées'], ['fruits_rouges', 200, 'g', 'Fruits rouges surgelés'], ['skyr', 150], ['flocons_avoine', 40],
      ['graines_chia', 1, 'cs'], ['kiwi', 1, 'pc']
    ],
    etapes: [
      'Mixez les bananes, les fruits rouges et le skyr jusqu\'à obtenir une texture épaisse.',
      'Versez dans deux bols.',
      'Garnissez de flocons, de graines de chia et de kiwi en rondelles.'
    ]
  },
  {
    id: 'pain-perdu', nom: 'Pain perdu', cat: 'Petit-déjeuner', cuisine: 'Française', emoji: '🍞',
    desc: 'Pain rassis trempé dans le lait et l\'œuf, doré au beurre.',
    portions: 4, prep: 10, cuisson: 10, diff: 1,
    ing: [
      ['pain', 250, 'g', 'Pain rassis ou brioche'], ['lait_entier', 300, 'ml'], ['oeuf', 3, 'pc'], ['sucre', 40], ['beurre', 30], ['cannelle', 1, 'pincee']
    ],
    etapes: [
      'Coupez le pain en tranches épaisses.',
      'Battez les œufs avec le lait, le sucre et la cannelle.',
      'Trempez les tranches des deux côtés.',
      'Faites-les dorer dans le beurre 2 à 3 min par face.'
    ]
  },
  {
    id: 'gaufres', nom: 'Gaufres', cat: 'Petit-déjeuner', cuisine: 'Belge', emoji: '🧇',
    desc: 'Gaufres croustillantes dehors, moelleuses dedans (environ 10).',
    portions: 6, prep: 15, cuisson: 20, diff: 1,
    ing: [
      ['farine', 250], ['lait_demi', 400, 'ml'], ['oeuf', 3, 'pc'], ['beurre', 80], ['sucre', 40], ['levure_chimique', 1, 'pc'], ['sel', 1, 'pincee']
    ],
    etapes: [
      'Mélangez la farine, la levure, le sucre et le sel.',
      'Ajoutez les jaunes d\'œufs, le beurre fondu et le lait.',
      'Montez les blancs en neige et incorporez-les délicatement.',
      'Faites cuire dans un gaufrier bien chaud et graissé.'
    ]
  },
  {
    id: 'muffins-myrtilles', nom: 'Muffins aux myrtilles', cat: 'Petit-déjeuner', cuisine: 'Américaine', emoji: '🧁',
    desc: '12 muffins bien bombés, pleins de myrtilles.',
    portions: 12, prep: 15, cuisson: 22, diff: 1,
    ing: [
      ['farine', 250], ['sucre', 120], ['oeuf', 2, 'pc'], ['lait_demi', 150, 'ml'], ['beurre', 100], ['myrtilles', 150],
      ['levure_chimique', 1, 'pc'], ['sel', 1, 'pincee']
    ],
    etapes: [
      'Préchauffez le four à 200 °C.',
      'Mélangez la farine, la levure, le sucre et le sel. Dans un autre bol, les œufs, le lait et le beurre fondu.',
      'Réunissez rapidement sans trop mélanger, ajoutez les myrtilles.',
      'Remplissez les moules aux trois quarts. Enfournez 5 min à 200 °C puis 17 min à 180 °C.'
    ]
  },
  {
    id: 'banana-bread', nom: 'Banana bread', cat: 'Petit-déjeuner', cuisine: 'Américaine', emoji: '🍌',
    desc: 'Le cake moelleux qui sauve les bananes trop mûres.',
    portions: 10, prep: 15, cuisson: 55, diff: 1,
    ing: [
      ['banane', 3, 'pc', 'Bananes très mûres'], ['farine', 220], ['cassonade', 100], ['oeuf', 2, 'pc'], ['beurre', 80],
      ['levure_chimique', 1, 'pc'], ['cannelle', 1, 'cc'], ['noix', 50]
    ],
    etapes: [
      'Préchauffez le four à 175 °C.',
      'Écrasez les bananes, ajoutez le beurre fondu, la cassonade et les œufs.',
      'Incorporez la farine, la levure et la cannelle, puis les noix concassées.',
      'Versez dans un moule à cake et enfournez 50 à 55 min.'
    ]
  },
  {
    id: 'smoothie-proteine', nom: 'Smoothie protéiné banane-cacahuète', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🥤',
    desc: 'Le petit-déjeuner liquide de l\'après-sport : près de 40 g de protéines.',
    portions: 1, prep: 5, cuisson: 0, diff: 1,
    ing: [
      ['banane', 1, 'pc'], ['lait_demi', 300, 'ml'], ['beurre_cacahuete', 1, 'cs'], ['flocons_avoine', 30], ['proteine_whey', 30]
    ],
    etapes: [
      'Mettez tous les ingrédients dans un blender.',
      'Mixez jusqu\'à obtenir une texture lisse. Ajoutez quelques glaçons si vous le souhaitez.'
    ]
  },
  {
    id: 'chia-pudding', nom: 'Chia pudding à la mangue', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🥭',
    desc: 'Graines de chia gonflées au lait de coco, mangue fraîche.',
    portions: 2, prep: 5, cuisson: 0, diff: 1,
    ing: [
      ['graines_chia', 50], ['lait_demi', 250, 'ml'], ['lait_coco', 50, 'ml'], ['miel', 1, 'cs'], ['mangue', 0.5, 'pc']
    ],
    etapes: [
      'Mélangez les graines de chia, le lait, le lait de coco et le miel.',
      'Laissez reposer 10 min, mélangez à nouveau, puis réservez au moins 4 h au frais.',
      'Servez avec la mangue en dés.'
    ]
  },

  // ================= DESSERTS =================
  {
    id: 'mousse-chocolat', nom: 'Mousse au chocolat', cat: 'Desserts', cuisine: 'Française', emoji: '🍫',
    desc: 'Aérienne et intense, avec seulement 4 ingrédients.',
    portions: 6, prep: 20, cuisson: 0, diff: 1,
    ing: [
      ['chocolat_noir', 200], ['oeuf', 6, 'pc'], ['sucre', 30], ['sel', 1, 'pincee']
    ],
    etapes: [
      'Faites fondre le chocolat au bain-marie, laissez tiédir.',
      'Séparez les blancs des jaunes. Incorporez les jaunes au chocolat.',
      'Montez les blancs en neige avec le sel, ajoutez le sucre quand ils sont mousseux et serrez-les.',
      'Incorporez délicatement les blancs au chocolat en 3 fois.',
      'Réservez au moins 4 h au réfrigérateur.'
    ]
  },
  {
    id: 'tiramisu', nom: 'Tiramisu', cat: 'Desserts', cuisine: 'Italienne', emoji: '☕',
    desc: 'Biscuits imbibés de café, crème mascarpone et cacao.',
    portions: 6, prep: 25, cuisson: 0, diff: 2,
    ing: [
      ['mascarpone', 250], ['oeuf', 3, 'pc'], ['sucre', 75], ['boudoirs', 24, 'pc'], ['cafe', 300, 'ml', 'Café fort refroidi'], ['cacao', 2, 'cs']
    ],
    etapes: [
      'Fouettez les jaunes avec le sucre jusqu\'à ce que le mélange blanchisse. Ajoutez le mascarpone.',
      'Montez les blancs en neige ferme et incorporez-les délicatement.',
      'Trempez rapidement les biscuits dans le café et tapissez-en le fond du plat.',
      'Alternez crème et biscuits, terminez par la crème.',
      'Réservez au moins 6 h au frais. Saupoudrez de cacao avant de servir.'
    ]
  },
  {
    id: 'creme-brulee', nom: 'Crème brûlée', cat: 'Desserts', cuisine: 'Française', emoji: '🍮',
    desc: 'Crème vanillée sous une fine couche de caramel craquant.',
    portions: 6, prep: 15, cuisson: 60, diff: 2,
    ing: [
      ['creme_30', 500, 'ml'], ['jaune_oeuf', 6, 'pc'], ['sucre', 80], ['cassonade', 30], ['vanille', 1, 'cc']
    ],
    etapes: [
      'Faites chauffer la crème avec la vanille.',
      'Fouettez les jaunes avec le sucre, versez la crème chaude dessus en remuant.',
      'Répartissez dans des ramequins et enfournez 1 h à 100 °C : la crème doit être prise mais trembloter.',
      'Réservez au frais au moins 3 h. Saupoudrez de cassonade et caramélisez au chalumeau ou sous le grill.'
    ]
  },
  {
    id: 'fondant-chocolat', nom: 'Fondant au chocolat', cat: 'Desserts', cuisine: 'Française', emoji: '🍫',
    desc: 'Cœur coulant ou fondant selon le temps de cuisson.',
    portions: 8, prep: 15, cuisson: 22, diff: 1,
    ing: [
      ['chocolat_noir', 200], ['beurre', 150], ['sucre', 150], ['oeuf', 4, 'pc'], ['farine', 50]
    ],
    etapes: [
      'Préchauffez le four à 180 °C.',
      'Faites fondre le chocolat et le beurre ensemble.',
      'Fouettez les œufs avec le sucre, ajoutez le chocolat fondu puis la farine.',
      'Versez dans un moule beurré et enfournez 20 à 22 min : le centre doit rester tremblotant.'
    ]
  },
  {
    id: 'tarte-pommes', nom: 'Tarte aux pommes', cat: 'Desserts', cuisine: 'Française', emoji: '🍎',
    desc: 'Pommes en fines lamelles sur une pâte croustillante.',
    portions: 8, prep: 20, cuisson: 40, diff: 1,
    ing: [
      ['pate_brisee', 1, 'pc'], ['pomme', 6, 'pc'], ['sucre', 50], ['beurre', 20], ['cannelle', 1, 'pincee']
    ],
    etapes: [
      'Préchauffez le four à 200 °C. Foncez le moule avec la pâte.',
      'Faites une compote rapide avec 2 pommes et 20 g de sucre, étalez-la sur la pâte.',
      'Disposez les 4 autres pommes en fines lamelles en rosace.',
      'Parsemez du reste de sucre, de cannelle et de noisettes de beurre. Enfournez 40 min.'
    ]
  },
  {
    id: 'crumble-pommes', nom: 'Crumble pommes-fruits rouges', cat: 'Desserts', cuisine: 'Anglaise', emoji: '🍏',
    desc: 'Fruits fondants sous une pâte sablée croustillante.',
    portions: 6, prep: 15, cuisson: 35, diff: 1,
    ing: [
      ['pomme', 4, 'pc'], ['fruits_rouges', 200], ['farine', 120], ['beurre', 90], ['cassonade', 100], ['poudre_amande', 30]
    ],
    etapes: [
      'Préchauffez le four à 180 °C.',
      'Coupez les pommes en cubes, mélangez-les avec les fruits rouges dans un plat.',
      'Sablez du bout des doigts la farine, la poudre d\'amande, la cassonade et le beurre froid en dés.',
      'Répartissez la pâte sur les fruits et enfournez 35 min.'
    ]
  },
  {
    id: 'panna-cotta', nom: 'Panna cotta coulis de fruits rouges', cat: 'Desserts', cuisine: 'Italienne', emoji: '🍮',
    desc: 'Crème vanillée prise et coulis acidulé.',
    portions: 6, prep: 15, cuisson: 5, diff: 1,
    ing: [
      ['creme_30', 500, 'ml'], ['lait_entier', 100, 'ml'], ['sucre', 70], ['gelatine', 3, 'pc'], ['vanille', 1, 'cc'],
      ['fruits_rouges', 200, 'g', 'Fruits rouges (coulis)'], ['sucre', 30, 'g', 'Sucre (coulis)']
    ],
    etapes: [
      'Faites ramollir la gélatine dans l\'eau froide.',
      'Chauffez la crème, le lait, le sucre et la vanille sans bouillir. Hors du feu, ajoutez la gélatine essorée.',
      'Répartissez dans des verrines et réservez 4 h au frais.',
      'Coulis : mixez les fruits rouges avec le sucre, filtrez. Versez sur les panna cotta.'
    ]
  },
  {
    id: 'cookies', nom: 'Cookies aux pépites de chocolat', cat: 'Desserts', cuisine: 'Américaine', emoji: '🍪',
    desc: 'Bords croustillants, cœur moelleux (environ 20 cookies).',
    portions: 20, prep: 15, cuisson: 10, diff: 1,
    ing: [
      ['farine', 250], ['beurre', 125], ['cassonade', 100], ['sucre', 60], ['oeuf', 1, 'pc'], ['pepites_chocolat', 200],
      ['levure_chimique', 1, 'cc'], ['sel', 1, 'pincee']
    ],
    etapes: [
      'Mélangez le beurre mou avec les sucres, puis l\'œuf.',
      'Ajoutez la farine, la levure et le sel, puis les pépites.',
      'Formez des boules et posez-les espacées sur une plaque. Laissez reposer 30 min au frais pour plus d\'épaisseur.',
      'Enfournez 9 à 10 min à 180 °C : ils doivent sembler pas assez cuits au centre.'
    ]
  },
  {
    id: 'brownies', nom: 'Brownies aux noix', cat: 'Desserts', cuisine: 'Américaine', emoji: '🟫',
    desc: 'Fondants et denses, avec des noix croquantes (12 parts).',
    portions: 12, prep: 15, cuisson: 25, diff: 1,
    ing: [
      ['chocolat_noir', 200], ['beurre', 150], ['sucre', 180], ['oeuf', 3, 'pc'], ['farine', 80], ['noix', 80]
    ],
    etapes: [
      'Faites fondre le chocolat et le beurre.',
      'Fouettez les œufs et le sucre, ajoutez le chocolat, puis la farine et les noix concassées.',
      'Versez dans un moule carré chemisé et enfournez 25 min à 180 °C.',
      'Laissez refroidir complètement avant de découper.'
    ]
  },
  {
    id: 'cheesecake', nom: 'Cheesecake new-yorkais', cat: 'Desserts', cuisine: 'Américaine', emoji: '🍰',
    desc: 'Crémeux et dense sur une base biscuitée.',
    portions: 10, prep: 25, cuisson: 60, diff: 2,
    ing: [
      ['biscuits_secs', 200], ['beurre', 80], ['fromage_frais', 600, 'g', 'Fromage frais (type Philadelphia)'], ['sucre', 150], ['oeuf', 3, 'pc'],
      ['creme_30', 100, 'ml'], ['citron', 1, 'pc'], ['maizena', 1, 'cs']
    ],
    etapes: [
      'Mixez les biscuits, mélangez avec le beurre fondu et tassez au fond d\'un moule à charnière. Réservez au frais.',
      'Fouettez le fromage frais avec le sucre et la maïzena, puis les œufs un à un, la crème, le zeste et le jus de citron.',
      'Versez sur la base. Enfournez 10 min à 180 °C puis 50 min à 110 °C.',
      'Laissez refroidir dans le four entrouvert, puis une nuit au réfrigérateur.'
    ]
  },
  {
    id: 'clafoutis-cerises', nom: 'Clafoutis aux cerises', cat: 'Desserts', cuisine: 'Limousine', emoji: '🍒',
    desc: 'Flan rustique aux cerises, traditionnellement non dénoyautées.',
    portions: 6, prep: 15, cuisson: 40, diff: 1,
    ing: [
      ['cerises', 500], ['oeuf', 3, 'pc'], ['farine', 80], ['sucre', 80], ['lait_entier', 300, 'ml'], ['beurre', 10], ['vanille', 1, 'cc']
    ],
    etapes: [
      'Préchauffez le four à 180 °C. Beurrez un plat et disposez les cerises.',
      'Fouettez les œufs avec le sucre, ajoutez la farine puis le lait et la vanille.',
      'Versez sur les cerises et enfournez 35 à 40 min.'
    ]
  },
  {
    id: 'riz-au-lait', nom: 'Riz au lait', cat: 'Desserts', cuisine: 'Française', emoji: '🍚',
    desc: 'Crémeux et vanillé, comme chez mamie.',
    portions: 6, prep: 5, cuisson: 45, diff: 1,
    ing: [
      ['riz_arborio', 120, 'g', 'Riz rond'], ['lait_entier', 1000, 'ml'], ['sucre', 80], ['vanille', 1, 'cc'], ['cannelle', 1, 'pincee']
    ],
    etapes: [
      'Blanchissez le riz 2 min dans l\'eau bouillante, égouttez.',
      'Portez le lait à frémissement avec la vanille, ajoutez le riz.',
      'Laissez cuire 40 min à feu très doux en remuant souvent.',
      'Ajoutez le sucre en fin de cuisson. Servez tiède ou froid avec la cannelle.'
    ]
  },
  {
    id: 'iles-flottantes', nom: 'Îles flottantes', cat: 'Desserts', cuisine: 'Française', emoji: '☁️',
    desc: 'Blancs en neige pochés sur une crème anglaise, caramel.',
    portions: 6, prep: 25, cuisson: 20, diff: 2,
    ing: [
      ['oeuf', 6, 'pc'], ['lait_entier', 750, 'ml'], ['sucre', 150], ['vanille', 1, 'cc']
    ],
    etapes: [
      'Crème anglaise : fouettez les jaunes avec 80 g de sucre, versez le lait chaud vanillé dessus. Remettez sur feu doux en remuant jusqu\'à ce que la crème nappe la cuillère (ne pas bouillir). Laissez refroidir.',
      'Montez les blancs en neige avec 20 g de sucre.',
      'Formez des quenelles et pochez-les 1 min de chaque côté dans de l\'eau frémissante, égouttez.',
      'Faites un caramel avec le reste du sucre. Servez les îles sur la crème, nappées de caramel.'
    ]
  },
  {
    id: 'gateau-yaourt', nom: 'Gâteau au yaourt', cat: 'Desserts', cuisine: 'Française', emoji: '🍰',
    desc: 'Le gâteau de l\'enfance, mesuré avec le pot de yaourt.',
    portions: 8, prep: 10, cuisson: 35, diff: 1,
    ing: [
      ['yaourt_nature', 1, 'pc'], ['sucre', 180, 'g', 'Sucre (2 pots)'], ['farine', 210, 'g', 'Farine (3 pots)'], ['huile_neutre', 60, 'ml', 'Huile (½ pot)'],
      ['oeuf', 3, 'pc'], ['levure_chimique', 1, 'pc']
    ],
    etapes: [
      'Préchauffez le four à 180 °C.',
      'Mélangez le yaourt, le sucre et les œufs.',
      'Ajoutez la farine et la levure, puis l\'huile.',
      'Versez dans un moule beurré et enfournez 35 min.'
    ]
  },
  {
    id: 'salade-fruits', nom: 'Salade de fruits frais', cat: 'Desserts', cuisine: 'Française', emoji: '🍉',
    desc: 'Fruits de saison, jus d\'orange et menthe.',
    portions: 6, prep: 20, cuisson: 0, diff: 1,
    ing: [
      ['orange', 2, 'pc'], ['pomme', 2, 'pc'], ['banane', 2, 'pc'], ['fraises', 250], ['kiwi', 2, 'pc'], ['ananas', 300],
      ['jus_orange', 150, 'ml'], ['miel', 1, 'cs'], ['menthe', 5]
    ],
    etapes: [
      'Épluchez et coupez tous les fruits en morceaux.',
      'Mélangez le jus d\'orange et le miel, versez sur les fruits.',
      'Ajoutez la menthe ciselée et réservez au frais.'
    ]
  },
  {
    id: 'tarte-citron', nom: 'Tarte au citron meringuée', cat: 'Desserts', cuisine: 'Française', emoji: '🍋',
    desc: 'Crème de citron acidulée et meringue dorée.',
    portions: 8, prep: 40, cuisson: 30, diff: 3,
    ing: [
      ['pate_brisee', 1, 'pc', 'Pâte sablée'], ['citron', 4, 'pc'], ['oeuf', 3, 'pc'], ['sucre', 150], ['beurre', 80], ['maizena', 1, 'cs'],
      ['blanc_oeuf', 3, 'pc'], ['sucre', 100, 'g', 'Sucre (meringue)']
    ],
    etapes: [
      'Faites cuire la pâte à blanc 20 min à 180 °C (recouverte de papier et de légumes secs).',
      'Crème : chauffez le jus et le zeste des citrons, le sucre, les œufs et la maïzena en fouettant jusqu\'à épaississement. Hors du feu, ajoutez le beurre.',
      'Versez sur le fond de tarte et laissez refroidir.',
      'Montez les blancs en neige en ajoutant le sucre progressivement jusqu\'à une meringue brillante.',
      'Pochez la meringue sur la tarte et dorez-la au chalumeau ou 5 min sous le grill.'
    ]
  },
  {
    id: 'rochers-coco', nom: 'Rochers à la noix de coco', cat: 'Desserts', cuisine: 'Française', emoji: '🥥',
    desc: '3 ingrédients, 15 petits rochers dorés.',
    portions: 15, prep: 10, cuisson: 15, diff: 1,
    ing: [
      ['coco_rapee', 200], ['sucre', 150], ['blanc_oeuf', 3, 'pc']
    ],
    etapes: [
      'Mélangez la noix de coco, le sucre et les blancs (non montés).',
      'Formez des petites pyramides sur une plaque.',
      'Enfournez 12 à 15 min à 180 °C jusqu\'à ce que les pointes soient dorées.'
    ]
  },
  {
    id: 'compote-pommes', nom: 'Compote de pommes', cat: 'Desserts', cuisine: 'Française', emoji: '🍎',
    desc: 'Compote maison peu sucrée à la cannelle.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [
      ['pomme', 6, 'pc'], ['sucre', 30], ['cannelle', 1, 'pincee'], ['vanille', 1, 'cc'], ['eau', 50, 'ml']
    ],
    etapes: [
      'Épluchez et coupez les pommes en morceaux.',
      'Faites-les cuire à couvert avec l\'eau, le sucre et la vanille 20 min.',
      'Écrasez à la fourchette ou mixez, ajoutez la cannelle.'
    ]
  },
  {
    id: 'mug-cake', nom: 'Mug cake au chocolat', cat: 'Desserts', cuisine: 'Américaine', emoji: '☕',
    desc: 'Un gâteau individuel en 1 minute au micro-ondes.',
    portions: 1, prep: 3, cuisson: 1, diff: 1,
    ing: [
      ['farine', 30], ['sucre', 20], ['cacao', 1, 'cs'], ['oeuf', 1, 'pc'], ['lait_demi', 3, 'cs'], ['beurre', 15], ['chocolat_noir', 15],
      ['levure_chimique', 1, 'pincee']
    ],
    etapes: [
      'Faites fondre le beurre dans un grand mug au micro-ondes.',
      'Ajoutez l\'œuf, le sucre, le lait et mélangez, puis la farine, le cacao et la levure.',
      'Enfoncez les carrés de chocolat au centre.',
      'Faites cuire 1 min à 1 min 10 à puissance maximale.'
    ]
  },
  {
    id: 'nice-cream', nom: 'Nice cream chocolat-cacahuète', cat: 'Desserts', cuisine: 'Healthy', emoji: '🍨',
    desc: 'Glace minute à la banane congelée, sans sucre ajouté.',
    portions: 2, prep: 5, cuisson: 0, diff: 1,
    ing: [
      ['banane', 3, 'pc', 'Bananes congelées en rondelles'], ['cacao', 1, 'cs'], ['beurre_cacahuete', 1, 'cs'], ['lait_demi', 2, 'cs']
    ],
    etapes: [
      'Mixez les bananes congelées avec le lait jusqu\'à obtenir une texture de glace.',
      'Ajoutez le cacao et le beurre de cacahuète, mixez encore quelques secondes.',
      'Dégustez aussitôt ou placez 30 min au congélateur pour une texture plus ferme.'
    ]
  },
  {
    id: 'pavlova', nom: 'Pavlova aux fruits rouges', cat: 'Desserts', cuisine: 'Australienne', emoji: '🍓',
    desc: 'Meringue croustillante et moelleuse, chantilly et fruits rouges.',
    portions: 8, prep: 25, cuisson: 90, diff: 2,
    ing: [
      ['blanc_oeuf', 4, 'pc'], ['sucre', 220], ['maizena', 1, 'cc'], ['vinaigre', 1, 'cc'], ['creme_30', 300, 'ml'], ['sucre_glace', 30],
      ['fruits_rouges', 300]
    ],
    etapes: [
      'Montez les blancs en neige, ajoutez le sucre cuillère par cuillère jusqu\'à une meringue ferme et brillante. Ajoutez la maïzena et le vinaigre.',
      'Formez un disque de 20 cm sur une plaque, creusez légèrement le centre.',
      'Enfournez 1 h 30 à 110 °C, puis laissez refroidir dans le four éteint.',
      'Montez la crème en chantilly avec le sucre glace. Garnissez la meringue de chantilly et de fruits juste avant de servir.'
    ]
  },
  {
    id: 'tarte-tatin', nom: 'Tarte Tatin', cat: 'Desserts', cuisine: 'Française', emoji: '🍏',
    desc: 'Pommes caramélisées sous une pâte feuilletée, retournée à la sortie du four.',
    portions: 8, prep: 25, cuisson: 50, diff: 2,
    ing: [
      ['pate_feuilletee', 1, 'pc'], ['pomme', 8, 'pc'], ['sucre', 150], ['beurre', 80]
    ],
    etapes: [
      'Faites un caramel blond avec le sucre dans un moule allant sur le feu, ajoutez le beurre.',
      'Disposez les pommes en quartiers serrés dessus. Laissez cuire 15 min sur le feu.',
      'Couvrez de pâte en rentrant les bords. Enfournez 30 min à 200 °C.',
      'Laissez tiédir 10 min puis retournez sur un plat.'
    ]
  },
  {
    id: 'flan-patissier', nom: 'Flan pâtissier', cat: 'Desserts', cuisine: 'Française', emoji: '🍮',
    desc: 'Le flan de boulangerie, ferme et vanillé.',
    portions: 8, prep: 20, cuisson: 50, diff: 2,
    ing: [
      ['pate_brisee', 1, 'pc'], ['lait_entier', 750, 'ml'], ['oeuf', 4, 'pc'], ['sucre', 150], ['maizena', 70], ['vanille', 1, 'cs']
    ],
    etapes: [
      'Foncez un moule haut avec la pâte, réservez au frais.',
      'Fouettez les œufs, le sucre et la maïzena. Portez le lait vanillé à ébullition.',
      'Versez le lait sur le mélange, remettez sur le feu et faites épaissir en fouettant 2 min.',
      'Versez dans le moule et enfournez 45 à 50 min à 180 °C. Laissez refroidir complètement avant de démouler.'
    ]
  }
]);
