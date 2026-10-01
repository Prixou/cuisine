/* Lot 3 — Recettes healthy tendance (2026) : protéines, fibres, cottage cheese, bowls, batch cooking. */
window.RECETTES = (window.RECETTES || []).concat([
  // ================= PETIT-DÉJEUNER =================
  {
    id: 'baked-oats', nom: 'Baked oats aux myrtilles', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🫐',
    desc: 'Le porridge cuit au four qui a la texture d\'un gâteau, star des réseaux sociaux.',
    portions: 1, prep: 5, cuisson: 25, diff: 1,
    ing: [['flocons_avoine', 50], ['banane', 0.5, 'pc'], ['oeuf', 1, 'pc'], ['skyr', 80], ['lait_demi', 60, 'ml'], ['levure_chimique', 1, 'pincee'],
      ['cannelle', 1, 'pincee'], ['myrtilles', 50]],
    etapes: ['Mixez les flocons, la banane, l\'œuf, le skyr, le lait, la levure et la cannelle.', 'Versez dans un ramequin, enfoncez les myrtilles.',
      'Enfournez 25 min à 180 °C : le dessus doit être doré et le cœur moelleux.'],
    astuce: 'Variante gourmande : une cuillère de beurre de cacahuète ou quelques carrés de chocolat noir au centre.'
  },
  {
    id: 'flocons-brouilles', nom: 'Flocons d\'avoine brouillés aux œufs', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🍳',
    desc: 'Le « scrambled oats » : flocons cuits avec des œufs comme des œufs brouillés. Protéiné, sans sucre ajouté.',
    portions: 1, prep: 5, cuisson: 5, diff: 1,
    ing: [['flocons_avoine', 40], ['oeuf', 2, 'pc'], ['lait_demi', 50, 'ml'], ['epinards', 40], ['feta', 20], ['huile_olive', 1, 'cc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Battez les œufs avec le lait, les flocons, le sel et le poivre. Laissez gonfler 2 min.', 'Faites tomber les épinards dans l\'huile.',
      'Versez le mélange et remuez à feu doux comme des œufs brouillés, 3 min.', 'Parsemez de feta.']
  },
  {
    id: 'pancakes-cottage', nom: 'Pancakes au cottage cheese', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🥞',
    desc: 'Moelleux, sans farine blanche et riches en protéines grâce au cottage cheese.',
    portions: 2, prep: 5, cuisson: 10, diff: 1,
    ing: [['cottage', 200], ['oeuf', 2, 'pc'], ['flocons_avoine', 60], ['levure_chimique', 1, 'cc'], ['vanille', 1, 'cc'], ['fruits_rouges', 100], ['sirop_erable', 1, 'cs']],
    etapes: ['Mixez le cottage cheese, les œufs, les flocons, la levure et la vanille.', 'Faites cuire des petites louches dans une poêle antiadhésive, 2 min par face.',
      'Servez avec les fruits rouges et un filet de sirop d\'érable.']
  },
  {
    id: 'proffee', nom: 'Café protéiné glacé (proffee)', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🧋',
    desc: 'Expresso, protéine et lait glacé : la boisson virale des sportifs.',
    portions: 1, prep: 3, cuisson: 0, diff: 1,
    ing: [['cafe', 60, 'ml', 'Expresso (2 tasses)'], ['proteine_whey', 30, 'g', 'Protéine en poudre vanille'], ['lait_demi', 200, 'ml'], ['eau', 0, 'qs', 'Glaçons']],
    etapes: ['Mixez ou secouez le lait froid avec la protéine.', 'Versez sur des glaçons, ajoutez l\'expresso.']
  },
  {
    id: 'egg-muffins', nom: 'Muffins aux œufs et légumes', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🧁',
    desc: 'Mini-omelettes au four à préparer pour toute la semaine (12 pièces).',
    portions: 6, prep: 15, cuisson: 20, diff: 1,
    ing: [['oeuf', 10, 'pc'], ['poivron', 1, 'pc'], ['epinards', 80], ['oignon_nouveau', 2, 'pc'], ['jambon_blanc', 3, 'pc'], ['feta', 60], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Préchauffez le four à 180 °C et huilez un moule à muffins.', 'Répartissez le poivron, les épinards, l\'oignon, le jambon en dés et la feta.',
      'Battez les œufs avec sel et poivre et versez dans les moules.', 'Enfournez 20 min. Se conservent 4 jours au frais.']
  },
  {
    id: 'toast-cottage-tomate', nom: 'Toast cottage cheese, tomates et miel pimenté', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🍅',
    desc: 'Pain complet, cottage cheese, tomates cerises et le duo sucré-piquant « hot honey ».',
    portions: 2, prep: 5, cuisson: 3, diff: 1,
    ing: [['pain_complet', 2, 'pc'], ['cottage', 150], ['tomates_cerises', 120], ['miel', 1, 'cs'], ['piment_poudre', 1, 'pincee'], ['basilic', 3], ['huile_olive', 1, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Faites griller le pain.', 'Mélangez le miel tiédi avec le piment.', 'Tartinez de cottage cheese, ajoutez les tomates coupées, un filet d\'huile, le miel pimenté et le basilic.']
  },
  {
    id: 'muffins-proteines', nom: 'Muffins protéinés banane-chocolat', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🍌',
    desc: 'Sans sucre ajouté, à l\'avoine et au yaourt grec (8 muffins).',
    portions: 8, prep: 10, cuisson: 20, diff: 1,
    ing: [['banane', 2, 'pc'], ['flocons_avoine', 120], ['oeuf', 2, 'pc'], ['yaourt_grec', 120], ['proteine_whey', 30], ['levure_chimique', 1, 'cc'], ['pepites_chocolat', 40]],
    etapes: ['Mixez les flocons en farine.', 'Ajoutez les bananes, les œufs, le yaourt, la protéine et la levure, mixez.',
      'Incorporez les pépites et répartissez dans 8 moules.', 'Enfournez 18 à 20 min à 180 °C.']
  },

  // ================= BOWLS & PLATS =================
  {
    id: 'protein-bowl-boeuf-cottage', nom: 'Protein bowl bœuf, patate douce et cottage cheese', cat: 'Viandes', cuisine: 'Healthy', emoji: '💪',
    desc: 'Le bowl viral à plus de 45 g de protéines : bœuf épicé, patate douce rôtie, cottage cheese et miel pimenté.',
    portions: 4, prep: 15, cuisson: 30, diff: 1,
    ing: [['boeuf_hache_5', 500], ['patate_douce', 2, 'pc'], ['cottage', 300], ['avocat', 1, 'pc'], ['cumin', 1, 'cc'], ['paprika', 2, 'cc'], ['ail', 1, 'pc'],
      ['huile_olive', 1, 'cs'], ['miel', 2, 'cs'], ['piment_poudre', 1, 'pincee'], ['oignon_nouveau', 2, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Coupez les patates douces en cubes, mélangez avec l\'huile et 1 c. à café de paprika, rôtissez 25 min à 210 °C.',
      'Faites dorer le bœuf avec l\'ail, le cumin, le reste du paprika et le sel.', 'Mélangez le miel tiédi et le piment.',
      'Composez les bols : patate douce, bœuf, cottage cheese, avocat, oignon nouveau, filet de miel pimenté.'],
    astuce: 'Parfait en batch cooking : préparez bœuf et patates douces pour 4 jours.'
  },
  {
    id: 'salmon-rice-bowl', nom: 'Bol riz-saumon au four (salmon rice bowl)', cat: 'Poissons', cuisine: 'Healthy', emoji: '🍣',
    desc: 'La recette virale : saumon cuit écrasé avec le riz, mayo sriracha, sauce soja, avocat et algues.',
    portions: 2, prep: 10, cuisson: 15, diff: 1,
    ing: [['saumon', 2, 'pc'], ['riz_blanc', 140, 'g', 'Riz (ou reste de riz cuit)'], ['sauce_soja', 2, 'cs'], ['mayonnaise', 1, 'cs'], ['sauce_sriracha', 1, 'cs'],
      ['avocat', 1, 'pc'], ['concombre', 0.5, 'pc'], ['nori', 2, 'pc'], ['graines_sesame', 1, 'cc']],
    etapes: ['Faites cuire le saumon 12 min à 200 °C, puis émiettez-le.', 'Mélangez-le avec le riz chaud et la sauce soja.',
      'Ajoutez la mayonnaise mélangée à la sriracha, l\'avocat et le concombre.', 'Mangez à la main en enroulant dans les feuilles de nori.']
  },
  {
    id: 'bouchees-saumon', nom: 'Bouchées de saumon croustillantes au air fryer', cat: 'Poissons', cuisine: 'Healthy', emoji: '🐟',
    desc: 'Cubes de saumon laqués et croustillants en 10 minutes, au air fryer ou au four.',
    portions: 3, prep: 10, cuisson: 10, diff: 1,
    ing: [['saumon', 450, 'g', 'Saumon sans peau'], ['sauce_soja', 2, 'cs'], ['miel', 1, 'cs'], ['ail', 1, 'pc'], ['paprika', 1, 'cc'], ['graines_sesame', 1, 'cs'], ['oignon_nouveau', 1, 'pc']],
    etapes: ['Coupez le saumon en cubes de 3 cm.', 'Mélangez avec la sauce soja, le miel, l\'ail râpé et le paprika.',
      'Faites cuire 8 à 10 min à 200 °C au air fryer (ou 12 min au four).', 'Parsemez de sésame et d\'oignon nouveau.']
  },
  {
    id: 'poulet-yaourt-curcuma', nom: 'Poulet mariné yaourt-curcuma et légumes rôtis', cat: 'Volailles', cuisine: 'Healthy', emoji: '🥘',
    desc: 'Plaque unique pour le batch cooking : poulet tendre, légumes rôtis et fibres.',
    portions: 4, prep: 15, cuisson: 35, diff: 1,
    ing: [['poulet_blanc', 600], ['yaourt_grec', 150], ['curcuma', 1, 'cc'], ['cumin', 1, 'cc'], ['ail', 2, 'pc'], ['citron', 1, 'pc'], ['brocoli', 1, 'pc'],
      ['pois_chiches', 240], ['oignon_rouge', 1, 'pc'], ['huile_olive', 2, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Marinez le poulet en morceaux avec le yaourt, les épices, l\'ail, le jus de citron et le sel (30 min ou une nuit).',
      'Étalez sur une plaque avec le brocoli, les pois chiches et l\'oignon arrosés d\'huile.', 'Enfournez 30 à 35 min à 210 °C.',
      'Répartissez en boîtes pour la semaine.']
  },
  {
    id: 'chili-dinde', nom: 'Chili de dinde aux haricots', cat: 'Volailles', cuisine: 'Healthy', emoji: '🌶️',
    desc: 'Maigre, riche en protéines et en fibres, parfait pour le batch cooking.',
    portions: 5, prep: 15, cuisson: 35, diff: 1,
    ing: [['dinde_escalope', 600, 'g', 'Dinde hachée'], ['haricots_rouges', 400], ['haricots_noirs', 250], ['tomates_concassees', 800], ['poivron', 2, 'pc'], ['oignon', 1, 'pc'],
      ['ail', 2, 'pc'], ['cumin', 2, 'cc'], ['paprika', 2, 'cc'], ['piment_poudre', 0.5, 'cc'], ['huile_olive', 1, 'cs'], ['yaourt_grec', 100], ['coriandre', 10], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon, l\'ail et les poivrons dans l\'huile.', 'Ajoutez la dinde et les épices, faites dorer.',
      'Ajoutez les tomates et les haricots, laissez mijoter 25 min.', 'Servez avec une cuillère de yaourt et la coriandre.']
  },
  {
    id: 'pois-chiches-marry-me', nom: 'Pois chiches « marry me »', cat: 'Végétarien', cuisine: 'Healthy', emoji: '💍',
    desc: 'Pois chiches mijotés dans une sauce crémeuse aux tomates séchées et parmesan.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['pois_chiches', 500], ['tomates_sechees', 60], ['ail', 3, 'pc'], ['creme_15', 150, 'ml'], ['bouillon', 150, 'ml'], ['parmesan', 30], ['epinards', 100],
      ['origan', 1, 'cc'], ['piment_poudre', 1, 'pincee'], ['basilic', 10], ['huile_olive', 1, 'cs']],
    etapes: ['Faites revenir l\'ail et les tomates séchées hachées dans l\'huile.', 'Ajoutez les pois chiches, l\'origan, le piment, le bouillon et la crème. Laissez mijoter 10 min.',
      'Ajoutez les épinards et le parmesan.', 'Parsemez de basilic. Servez avec du pain complet ou du riz.']
  },
  {
    id: 'pates-cottage-epinards', nom: 'Pâtes complètes à la sauce cottage cheese', cat: 'Pâtes & riz', cuisine: 'Healthy', emoji: '🍝',
    desc: 'Le cottage cheese mixé remplace la crème : une sauce onctueuse et protéinée.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [['pates_completes', 320], ['cottage', 300], ['parmesan', 40], ['ail', 1, 'pc'], ['epinards', 150], ['citron', 0.5, 'pc'], ['poivre', 0, 'qs'], ['sel', 0, 'qs']],
    etapes: ['Faites cuire les pâtes, gardez un verre d\'eau de cuisson.', 'Mixez le cottage cheese, le parmesan, l\'ail et le zeste de citron.',
      'Faites tomber les épinards dans la casserole chaude, ajoutez les pâtes et la sauce, détendez avec l\'eau de cuisson.', 'Poivrez généreusement.']
  },
  {
    id: 'pates-lentilles-bolognaise', nom: 'Pâtes de lentilles corail, sauce tomate et ricotta', cat: 'Pâtes & riz', cuisine: 'Healthy', emoji: '🔴',
    desc: 'Des pâtes 100 % lentilles : deux fois plus de protéines et de fibres.',
    portions: 4, prep: 5, cuisson: 15, diff: 1,
    ing: [['pates_lentilles', 300], ['coulis_tomate', 500], ['ail', 2, 'pc'], ['huile_olive', 2, 'cs'], ['ricotta', 150], ['basilic', 10], ['origan', 1, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Faites mijoter le coulis 10 min avec l\'ail, l\'huile et l\'origan.', 'Faites cuire les pâtes selon le paquet (elles cuisent vite).',
      'Mélangez avec la sauce et ajoutez la ricotta en cuillerées et le basilic.']
  },
  {
    id: 'riz-saute-kimchi', nom: 'Riz sauté au kimchi', cat: 'Pâtes & riz', cuisine: 'Coréenne', emoji: '🌶️',
    desc: 'Kimchi-bokkeumbap : riz sauté au chou fermenté, bon pour le microbiote, avec un œuf au plat.',
    portions: 2, prep: 10, cuisson: 10, diff: 1,
    ing: [['riz_blanc', 150, 'g', 'Riz cuit la veille (poids cru)'], ['kimchi', 150], ['oeuf', 2, 'pc'], ['oignon_nouveau', 2, 'pc'], ['sauce_soja', 1, 'cs'],
      ['sauce_sriracha', 1, 'cs', 'Gochujang ou sriracha'], ['huile_sesame', 1, 'cs'], ['nori', 1, 'pc'], ['graines_sesame', 1, 'cc']],
    etapes: ['Faites revenir le kimchi haché 3 min dans l\'huile de sésame.', 'Ajoutez le riz, la sauce soja et le gochujang, faites sauter 4 min.',
      'Servez avec un œuf au plat, l\'oignon nouveau, le nori émietté et le sésame.']
  },
  {
    id: 'tofu-croustillant', nom: 'Tofu croustillant au four, sauce sésame-gingembre', cat: 'Végétarien', cuisine: 'Healthy', emoji: '🥢',
    desc: 'Tofu doré sans friture, haricots verts et riz complet. 100 % végétal.',
    portions: 3, prep: 15, cuisson: 30, diff: 1,
    ing: [['tofu', 400], ['maizena', 1, 'cs'], ['huile_neutre', 1, 'cs'], ['sauce_soja', 3, 'cs'], ['vinaigre_riz', 1, 'cs'], ['sirop_erable', 1, 'cs'], ['gingembre', 10],
      ['huile_sesame', 1, 'cc'], ['haricots_verts', 300], ['riz_complet', 180], ['graines_sesame', 1, 'cs']],
    etapes: ['Pressez le tofu, coupez-le en cubes, enrobez d\'huile et de maïzena.', 'Enfournez 25 min à 210 °C en les retournant à mi-cuisson.',
      'Faites cuire le riz complet et les haricots verts.', 'Sauce : sauce soja, vinaigre, sirop d\'érable, gingembre râpé et huile de sésame. Enrobez le tofu.']
  },
  {
    id: 'wrap-cottage', nom: 'Wraps au cottage cheese (2 ingrédients)', cat: 'Burgers & sandwichs', cuisine: 'Healthy', emoji: '🌯',
    desc: 'La galette virale cuite au four : cottage cheese + œufs, garnie de poulet et crudités.',
    portions: 2, prep: 10, cuisson: 30, diff: 1,
    ing: [['cottage', 250], ['oeuf', 2, 'pc'], ['origan', 1, 'cc'], ['poulet_blanc', 200, 'g', 'Poulet cuit'], ['salade', 50], ['tomate', 1, 'pc'], ['moutarde', 1, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Mixez le cottage cheese, les œufs, l\'origan et le sel.', 'Étalez finement en 2 disques sur une plaque recouverte de papier cuisson.',
      'Enfournez 30 min à 200 °C jusqu\'à ce que ce soit doré et se décolle. Laissez tiédir.', 'Garnissez de moutarde, poulet, salade et tomate, puis roulez.']
  },

  // ================= SALADES & SOUPES =================
  {
    id: 'green-goddess-salad', nom: 'Green goddess salad', cat: 'Entrées & salades', cuisine: 'Healthy', emoji: '💚',
    desc: 'Chou et concombre finement hachés dans une sauce verte basilic-épinards-yaourt.',
    portions: 4, prep: 20, cuisson: 0, diff: 1,
    ing: [['chou', 400], ['concombre', 1, 'pc'], ['ciboulette', 15], ['oignon_nouveau', 2, 'pc'], ['basilic', 20], ['epinards', 50], ['yaourt_grec', 100], ['citron', 1, 'pc'],
      ['ail', 1, 'pc'], ['huile_olive', 2, 'cs'], ['noix_cajou', 30], ['sel', 0, 'qs']],
    etapes: ['Hachez très finement le chou, le concombre, la ciboulette et l\'oignon nouveau.', 'Mixez le basilic, les épinards, le yaourt, le citron, l\'ail, l\'huile, les noix de cajou et le sel.',
      'Mélangez la sauce aux légumes. Mangez-la avec des chips de légumes ou en accompagnement.']
  },
  {
    id: 'dense-bean-salad', nom: 'Dense bean salad (salade de haricots protéinée)', cat: 'Entrées & salades', cuisine: 'Healthy', emoji: '🫘',
    desc: 'La salade « dense » qui se garde 4 jours : haricots, légumes croquants, feta et herbes.',
    portions: 4, prep: 15, cuisson: 0, diff: 1,
    ing: [['haricots_blancs', 250], ['pois_chiches', 250], ['concombre', 1, 'pc'], ['poivron', 1, 'pc'], ['oignon_rouge', 0.5, 'pc'], ['tomates_sechees', 40], ['feta', 100],
      ['persil', 20], ['huile_olive', 3, 'cs'], ['vinaigre', 2, 'cs'], ['origan', 1, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Rincez les légumineuses.', 'Coupez tous les légumes en très petits dés, comme les légumineuses.',
      'Mélangez avec la feta, le persil et la vinaigrette huile-vinaigre-origan.', 'Laissez mariner au moins 30 min. Se conserve 4 jours au frais.']
  },
  {
    id: 'concombre-smash', nom: 'Salade de concombre smashé à la chinoise', cat: 'Entrées & salades', cuisine: 'Chinoise', emoji: '🥒',
    desc: 'Concombre écrasé, sauce soja, ail, vinaigre et huile pimentée : la salade virale.',
    portions: 2, prep: 10, cuisson: 0, diff: 1,
    ing: [['concombre', 1, 'pc'], ['sauce_soja', 1, 'cs'], ['vinaigre_riz', 1, 'cs'], ['ail', 1, 'pc'], ['huile_sesame', 1, 'cs'], ['sauce_sriracha', 1, 'cc', 'Huile pimentée'],
    ['sucre', 1, 'pincee'], ['graines_sesame', 1, 'cc'], ['sel', 1, 'pincee']],
    etapes: ['Écrasez le concombre avec le plat d\'un couteau, coupez-le en tronçons, salez 10 min et égouttez.',
      'Mélangez sauce soja, vinaigre, ail râpé, huile de sésame, huile pimentée et sucre.', 'Enrobez le concombre et parsemez de sésame.']
  },
  {
    id: 'salade-kale', nom: 'Salade de kale massé, pomme et noix', cat: 'Entrées & salades', cuisine: 'Healthy', emoji: '🥬',
    desc: 'Le chou kale massé au citron devient tendre : plein de fibres et de vitamines.',
    portions: 4, prep: 15, cuisson: 0, diff: 1,
    ing: [['chou_kale', 250], ['pomme', 1, 'pc'], ['noix', 40], ['graines_courge', 20], ['parmesan', 30], ['citron', 1, 'pc'], ['huile_olive', 3, 'cs'], ['miel', 1, 'cc'], ['sel', 1, 'pincee']],
    etapes: ['Retirez les côtes du kale, émincez les feuilles.', 'Massez-les 2 min avec le jus de citron, l\'huile et le sel jusqu\'à ce qu\'elles ramollissent.',
      'Ajoutez la pomme en lamelles, les noix, les graines, le parmesan en copeaux et le miel.']
  },
  {
    id: 'soupe-froide-concombre', nom: 'Soupe froide concombre, yaourt grec et basilic', cat: 'Soupes', cuisine: 'Healthy', emoji: '🥒',
    desc: 'Fraîche, légère et prête en 10 minutes, sans cuisson.',
    portions: 4, prep: 10, cuisson: 0, diff: 1,
    ing: [['concombre', 2, 'pc'], ['yaourt_grec', 300], ['basilic', 15], ['menthe', 5], ['ail', 1, 'pc'], ['citron', 0.5, 'pc'], ['huile_olive', 1, 'cs'], ['eau', 100, 'ml', 'Eau froide'], ['sel', 0, 'qs']],
    etapes: ['Mixez les concombres avec le yaourt, les herbes, l\'ail, le citron, l\'eau et le sel.', 'Réfrigérez au moins 1 h.', 'Servez avec un filet d\'huile d\'olive.']
  },
  {
    id: 'soupe-lentilles-chou', nom: 'Soupe fibrée lentilles, chou et carottes', cat: 'Soupes', cuisine: 'Healthy', emoji: '🥣',
    desc: 'Plus de 15 g de fibres par bol : la soupe « fibremaxxing » rassasiante.',
    portions: 6, prep: 15, cuisson: 35, diff: 1,
    ing: [['lentilles_vertes', 250], ['chou', 400], ['carotte', 3, 'pc'], ['oignon', 1, 'pc'], ['celeri', 2, 'pc'], ['tomates_concassees', 400], ['ail', 2, 'pc'],
      ['bouillon', 1800, 'ml'], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['huile_olive', 2, 'cs'], ['citron', 0.5, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon, l\'ail, la carotte et le céleri dans l\'huile avec les épices.', 'Ajoutez les lentilles, les tomates et le bouillon, laissez cuire 20 min.',
      'Ajoutez le chou émincé et poursuivez 12 min.', 'Ajoutez un trait de citron avant de servir.']
  },

  // ================= ACCOMPAGNEMENTS =================
  {
    id: 'steaks-chou-rotis', nom: 'Steaks de chou rôtis, sauce tahini-citron', cat: 'Accompagnements', cuisine: 'Healthy', emoji: '🥬',
    desc: 'Le chou, star de 2026 : tranches épaisses rôties jusqu\'à caraméliser.',
    portions: 4, prep: 10, cuisson: 35, diff: 1,
    ing: [['chou', 1000, 'g', 'Chou blanc ou pointu'], ['huile_olive', 3, 'cs'], ['paprika', 1, 'cc', 'Paprika fumé'], ['ail', 2, 'pc'], ['tahini', 40], ['citron', 1, 'pc'],
      ['persil', 10], ['graines_courge', 20], ['sel', 0, 'qs']],
    etapes: ['Coupez le chou en tranches de 2 cm en gardant le trognon pour qu\'elles se tiennent.', 'Badigeonnez d\'huile, d\'ail et de paprika, salez.',
      'Rôtissez 35 min à 220 °C en retournant à mi-cuisson.', 'Nappez de tahini détendu au citron et à l\'eau, parsemez de persil et de graines.']
  },
  {
    id: 'choux-bruxelles-rotis', nom: 'Choux de Bruxelles rôtis parmesan-citron', cat: 'Accompagnements', cuisine: 'Healthy', emoji: '🥦',
    desc: 'Croustillants et caramélisés, rien à voir avec ceux de la cantine.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['chou_bruxelles', 600], ['huile_olive', 2, 'cs'], ['ail', 2, 'pc'], ['parmesan', 30], ['citron', 0.5, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Coupez les choux en deux et mélangez-les avec l\'huile, l\'ail et le sel.', 'Rôtissez 20 à 25 min à 220 °C, face coupée contre la plaque.',
      'Parsemez de parmesan et arrosez de citron.']
  },
  {
    id: 'riz-chou-fleur', nom: 'Riz de chou-fleur sauté', cat: 'Accompagnements', cuisine: 'Healthy', emoji: '🍚',
    desc: 'Le chou-fleur râpé façon riz : 5 fois moins de calories qu\'un riz classique.',
    portions: 4, prep: 10, cuisson: 8, diff: 1,
    ing: [['chou_fleur', 1, 'pc'], ['huile_olive', 1, 'cs'], ['oignon_nouveau', 2, 'pc'], ['ail', 1, 'pc'], ['persil', 10], ['citron', 0.5, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Mixez le chou-fleur par à-coups jusqu\'à obtenir des grains de la taille du riz.', 'Faites-le sauter 6 à 8 min dans l\'huile avec l\'ail et l\'oignon.',
      'Ajoutez persil, citron et sel.']
  },
  {
    id: 'puree-chou-fleur', nom: 'Purée de chou-fleur', cat: 'Accompagnements', cuisine: 'Healthy', emoji: '🤍',
    desc: 'Une purée légère et onctueuse, alternative à la purée de pommes de terre.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [['chou_fleur', 1, 'pc'], ['fromage_frais', 50], ['parmesan', 20], ['ail', 1, 'pc'], ['muscade', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Faites cuire le chou-fleur et l\'ail 12 à 15 min à la vapeur.', 'Égouttez-le très bien.', 'Mixez avec le fromage frais, le parmesan, la muscade et le sel.']
  },

  // ================= APÉRO =================
  {
    id: 'dip-cottage-herbes', nom: 'Dip protéiné cottage cheese aux herbes', cat: 'Apéro', cuisine: 'Healthy', emoji: '🥕',
    desc: 'Le dip viral : cottage cheese mixé lisse, herbes et citron, avec des légumes croquants.',
    portions: 4, prep: 10, cuisson: 0, diff: 1,
    ing: [['cottage', 300], ['ciboulette', 10], ['aneth', 5], ['ail', 1, 'pc'], ['citron', 0.5, 'pc'], ['carotte', 2, 'pc'], ['concombre', 1, 'pc'], ['radis', 100], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Mixez le cottage cheese jusqu\'à ce qu\'il soit parfaitement lisse.', 'Ajoutez les herbes ciselées, l\'ail râpé, le citron, sel et poivre.',
      'Servez avec les légumes coupés en bâtonnets.']
  },
  {
    id: 'houmous-edamame', nom: 'Houmous d\'edamame', cat: 'Apéro', cuisine: 'Healthy', emoji: '🫛',
    desc: 'Un houmous vert, plus protéiné que la version aux pois chiches.',
    portions: 6, prep: 10, cuisson: 5, diff: 1,
    ing: [['edamame', 300], ['tahini', 40], ['citron', 1, 'pc'], ['ail', 1, 'pc'], ['huile_olive', 2, 'cs'], ['cumin', 0.5, 'cc'], ['eau', 60, 'ml', 'Eau froide'], ['sel', 0, 'qs']],
    etapes: ['Faites cuire les edamame 4 min, refroidissez-les.', 'Mixez-les avec le tahini, le citron, l\'ail, le cumin et le sel.',
      'Ajoutez l\'eau et l\'huile petit à petit jusqu\'à obtenir une texture crémeuse.']
  },
  {
    id: 'pois-chiches-croustillants', nom: 'Pois chiches croustillants épicés', cat: 'Apéro', cuisine: 'Healthy', emoji: '🫘',
    desc: 'Le snack croquant riche en fibres et protéines, à grignoter sans culpabiliser.',
    portions: 4, prep: 5, cuisson: 30, diff: 1,
    ing: [['pois_chiches', 400], ['huile_olive', 1, 'cs'], ['paprika', 1, 'cc', 'Paprika fumé'], ['cumin', 0.5, 'cc'], ['sel', 1, 'pincee']],
    etapes: ['Rincez les pois chiches et séchez-les très soigneusement dans un torchon.', 'Mélangez avec l\'huile et les épices.',
      'Rôtissez 25 à 30 min à 200 °C en secouant la plaque : ils doivent être croquants.']
  },

  // ================= DESSERTS =================
  {
    id: 'glace-cottage', nom: 'Glace au cottage cheese et fruits rouges', cat: 'Desserts', cuisine: 'Healthy', emoji: '🍨',
    desc: 'La glace virale : cottage cheese mixé, miel et fruits, plus de 15 g de protéines.',
    portions: 3, prep: 10, cuisson: 0, diff: 1,
    ing: [['cottage', 400], ['miel', 3, 'cs'], ['fruits_rouges', 150], ['vanille', 1, 'cc']],
    etapes: ['Mixez le cottage cheese, le miel et la vanille jusqu\'à ce que ce soit lisse.', 'Incorporez les fruits rouges écrasés grossièrement.',
      'Versez dans une boîte et congelez 3 à 4 h en remuant toutes les heures.', 'Laissez 10 min à température ambiante avant de servir.']
  },
  {
    id: 'mousse-chocolat-cottage', nom: 'Mousse au chocolat protéinée', cat: 'Desserts', cuisine: 'Healthy', emoji: '🍫',
    desc: 'Cottage cheese, cacao et chocolat noir mixés : une mousse épaisse et légère.',
    portions: 2, prep: 5, cuisson: 0, diff: 1,
    ing: [['cottage', 250], ['cacao', 2, 'cs'], ['chocolat_noir', 20], ['sirop_erable', 2, 'cs'], ['vanille', 1, 'cc']],
    etapes: ['Faites fondre le chocolat.', 'Mixez le cottage cheese, le cacao, le sirop d\'érable et la vanille, puis le chocolat fondu.',
      'Répartissez dans deux verres et réfrigérez 1 h.']
  },
  {
    id: 'yogurt-bark', nom: 'Yogurt bark aux fruits rouges', cat: 'Desserts', cuisine: 'Healthy', emoji: '🍓',
    desc: 'Plaque de yaourt grec glacé aux fruits et chocolat, cassée en morceaux.',
    portions: 6, prep: 10, cuisson: 0, diff: 1,
    ing: [['yaourt_grec', 400], ['miel', 2, 'cs'], ['fruits_rouges', 150], ['chocolat_noir', 30], ['amandes', 20]],
    etapes: ['Mélangez le yaourt et le miel, étalez sur 1 cm d\'épaisseur sur une plaque recouverte de papier cuisson.',
      'Parsemez de fruits rouges, d\'amandes concassées et de filets de chocolat fondu.', 'Congelez 3 h, puis cassez en morceaux. Gardez au congélateur.']
  },
  {
    id: 'gelee-yaourt', nom: 'Gelée au yaourt grec et fruits rouges', cat: 'Desserts', cuisine: 'Healthy', emoji: '🍮',
    desc: 'La gelée « fluffy » des réseaux sociaux : fruitée, légère et protéinée.',
    portions: 4, prep: 15, cuisson: 5, diff: 1,
    ing: [['fruits_rouges', 300], ['sucre', 30], ['gelatine', 4, 'pc'], ['eau', 100, 'ml'], ['yaourt_grec', 300]],
    etapes: ['Faites ramollir la gélatine dans l\'eau froide.', 'Faites chauffer les fruits rouges avec le sucre et l\'eau 5 min, mixez et filtrez.',
      'Hors du feu, ajoutez la gélatine essorée. Laissez tiédir puis fouettez avec le yaourt.', 'Répartissez dans 4 verres et réfrigérez 4 h.']
  },
  {
    id: 'pudding-chia-chocolat', nom: 'Chia pudding chocolat-banane', cat: 'Desserts', cuisine: 'Healthy', emoji: '🍌',
    desc: 'Plus de 10 g de fibres par portion, à préparer la veille.',
    portions: 2, prep: 5, cuisson: 0, diff: 1,
    ing: [['graines_chia', 50], ['lait_amande', 300, 'ml'], ['cacao', 1, 'cs'], ['sirop_erable', 1, 'cs'], ['banane', 1, 'pc'], ['beurre_cacahuete', 1, 'cs']],
    etapes: ['Mélangez les graines de chia, la boisson d\'amande, le cacao et le sirop d\'érable.', 'Laissez reposer 10 min, mélangez à nouveau et réfrigérez une nuit.',
      'Servez avec la banane en rondelles et le beurre de cacahuète.']
  }
]);
