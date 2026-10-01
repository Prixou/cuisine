/* Lot 2 — Petit-déjeuner, Desserts (pâtisserie française et douceurs du monde) */
window.RECETTES = (window.RECETTES || []).concat([
  // ================= PETIT-DÉJEUNER =================
  {
    id: 'oeufs-benedicte', nom: 'Œufs bénédicte', cat: 'Petit-déjeuner', cuisine: 'Américaine', emoji: '🍳',
    desc: 'Muffin toasté, jambon, œuf poché et sauce hollandaise.',
    portions: 4, prep: 20, cuisson: 15, diff: 3,
    ing: [['pain_campagne', 4, 'pc', 'Muffins anglais (ou pain toasté)'], ['jambon_blanc', 4, 'pc'], ['oeuf', 4, 'pc'], ['vinaigre', 2, 'cs'], ['beurre', 120],
      ['jaune_oeuf', 3, 'pc'], ['citron', 0.5, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Hollandaise : fouettez les jaunes avec 2 c. à soupe d\'eau au bain-marie, incorporez le beurre fondu puis le citron.', 'Pochez les œufs 3 min dans l\'eau frémissante vinaigrée.',
      'Toastez les muffins, posez le jambon poêlé puis l\'œuf.', 'Nappez de sauce hollandaise.']
  },
  {
    id: 'brioche-maison', nom: 'Brioche maison', cat: 'Petit-déjeuner', cuisine: 'Française', emoji: '🍞',
    desc: 'Brioche filante au beurre (environ 10 tranches).',
    portions: 10, prep: 30, cuisson: 30, diff: 2,
    ing: [['farine', 500], ['oeuf', 4, 'pc'], ['beurre', 200, 'g', 'Beurre mou'], ['sucre', 60], ['lait_entier', 80, 'ml'], ['levure_boulangere', 1, 'pc'], ['sel', 1, 'cc']],
    etapes: ['Pétrissez la farine, le sucre, le sel, la levure, le lait tiède et 3 œufs 10 min.', 'Incorporez le beurre mou petit à petit et pétrissez encore 10 min jusqu\'à ce que la pâte se décolle.',
      'Laissez lever 2 h, puis une nuit au réfrigérateur.', 'Façonnez en boules dans un moule, laissez lever 2 h, dorez au dernier œuf.', 'Enfournez 30 min à 170 °C.']
  },
  {
    id: 'bircher-muesli', nom: 'Bircher muesli', cat: 'Petit-déjeuner', cuisine: 'Suisse', emoji: '🍏',
    desc: 'Flocons trempés la veille, pomme râpée, yaourt et noisettes.',
    portions: 2, prep: 10, cuisson: 0, diff: 1,
    ing: [['flocons_avoine', 80], ['lait_demi', 150, 'ml'], ['yaourt_nature', 1, 'pc'], ['pomme', 1, 'pc'], ['noisettes', 20], ['miel', 1, 'cs'], ['citron', 0.5, 'pc']],
    etapes: ['La veille, faites tremper les flocons dans le lait au réfrigérateur.', 'Le matin, ajoutez le yaourt et la pomme râpée arrosée de citron.', 'Servez avec les noisettes concassées et le miel.']
  },
  {
    id: 'oeufs-coque', nom: 'Œufs à la coque et mouillettes', cat: 'Petit-déjeuner', cuisine: 'Française', emoji: '🥚',
    desc: 'Le petit-déjeuner réconfortant : jaune coulant et mouillettes beurrées.',
    portions: 2, prep: 5, cuisson: 4, diff: 1,
    ing: [['oeuf', 4, 'pc'], ['pain', 100, 'g', 'Pain (mouillettes)'], ['beurre', 15], ['sel', 0, 'qs']],
    etapes: ['Plongez les œufs à température ambiante dans l\'eau bouillante.', 'Comptez exactement 3 min pour un jaune coulant.', 'Servez avec les mouillettes beurrées.']
  },
  {
    id: 'english-breakfast', nom: 'Full English breakfast', cat: 'Petit-déjeuner', cuisine: 'Anglaise', emoji: '🍳',
    desc: 'Œufs, bacon, saucisse, haricots à la tomate, champignons et toasts.',
    portions: 2, prep: 10, cuisson: 20, diff: 1,
    ing: [['oeuf', 2, 'pc'], ['poitrine_fumee', 4, 'pc'], ['saucisse', 1, 'pc'], ['haricots_blancs', 200], ['coulis_tomate', 60], ['tomate', 1, 'pc'], ['champignons', 100],
      ['pain_mie', 2, 'pc'], ['beurre', 10], ['huile_neutre', 1, 'cs']],
    etapes: ['Faites chauffer les haricots avec le coulis.', 'Faites dorer la saucisse, le bacon, les champignons et la tomate coupée en deux dans l\'huile.',
      'Faites cuire les œufs au plat.', 'Servez avec les toasts beurrés.']
  },
  {
    id: 'huevos-rancheros', nom: 'Huevos rancheros', cat: 'Petit-déjeuner', cuisine: 'Mexicaine', emoji: '🌶️',
    desc: 'Tortillas, haricots noirs, œufs au plat et sauce tomate pimentée.',
    portions: 2, prep: 10, cuisson: 15, diff: 1,
    ing: [['tortilla', 2, 'pc'], ['oeuf', 4, 'pc'], ['haricots_noirs', 200], ['coulis_tomate', 150], ['oignon', 0.5, 'pc'], ['piment', 1, 'pc'], ['avocat', 0.5, 'pc'],
      ['feta', 30, 'g', 'Queso fresco ou feta'], ['coriandre', 5], ['huile_neutre', 1, 'cs']],
    etapes: ['Sauce : faites revenir l\'oignon et le piment, ajoutez le coulis et mijotez 5 min.', 'Faites chauffer les haricots écrasés.',
      'Faites cuire les œufs au plat et réchauffez les tortillas.', 'Montez : tortilla, haricots, œufs, sauce, avocat, fromage et coriandre.']
  },
  {
    id: 'tofu-brouille', nom: 'Tofu brouillé', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🌱',
    desc: 'L\'alternative vegan aux œufs brouillés, riche en protéines.',
    portions: 2, prep: 5, cuisson: 10, diff: 1,
    ing: [['tofu', 250], ['curcuma', 0.5, 'cc'], ['oignon', 0.5, 'pc'], ['epinards', 60], ['tomates_cerises', 100], ['sauce_soja', 1, 'cs'], ['huile_olive', 1, 'cs'], ['pain_complet', 2, 'pc']],
    etapes: ['Faites revenir l\'oignon dans l\'huile.', 'Émiettez le tofu à la fourchette dans la poêle, ajoutez le curcuma et la sauce soja.',
      'Ajoutez les tomates et les épinards 2 min.', 'Servez sur le pain complet grillé.']
  },
  {
    id: 'smoothie-vert', nom: 'Smoothie vert détox', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🥬',
    desc: 'Épinards, banane, pomme et kiwi : plein de fibres et de vitamines.',
    portions: 2, prep: 5, cuisson: 0, diff: 1,
    ing: [['epinards', 60], ['banane', 1, 'pc'], ['pomme', 1, 'pc'], ['kiwi', 1, 'pc'], ['lait_amande', 300, 'ml'], ['graines_chia', 1, 'cs']],
    etapes: ['Mettez tous les ingrédients dans le blender.', 'Mixez jusqu\'à obtenir une texture lisse. Servez aussitôt.']
  },
  {
    id: 'scones', nom: 'Scones', cat: 'Petit-déjeuner', cuisine: 'Anglaise', emoji: '🫖',
    desc: 'Petits pains briochés à servir tièdes avec de la confiture (8 scones).',
    portions: 8, prep: 15, cuisson: 15, diff: 1,
    ing: [['farine', 250], ['beurre', 60, 'g', 'Beurre froid'], ['sucre', 30], ['levure_chimique', 1, 'pc'], ['lait_demi', 130, 'ml'], ['oeuf', 1, 'pc'], ['sel', 1, 'pincee'], ['confiture', 80]],
    etapes: ['Sablez la farine, la levure, le sucre, le sel et le beurre froid.', 'Ajoutez le lait et rassemblez la pâte sans la pétrir.',
      'Étalez sur 2,5 cm d\'épaisseur, découpez des disques et dorez à l\'œuf.', 'Enfournez 12 à 15 min à 220 °C. Servez tièdes avec la confiture.']
  },
  {
    id: 'barres-cereales', nom: 'Barres de céréales maison', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🍫',
    desc: 'Avoine, beurre de cacahuète, fruits secs et chocolat (10 barres).',
    portions: 10, prep: 15, cuisson: 20, diff: 1,
    ing: [['flocons_avoine', 200], ['miel', 100], ['beurre_cacahuete', 80], ['amandes', 50], ['raisins_secs', 50], ['graines_chia', 20], ['chocolat_noir', 40]],
    etapes: ['Faites tiédir le miel et le beurre de cacahuète.', 'Mélangez avec les flocons, les amandes concassées, les raisins et les graines.',
      'Tassez dans un moule chemisé et enfournez 20 min à 170 °C.', 'Laissez refroidir, nappez de chocolat fondu et coupez en barres.']
  },
  {
    id: 'energy-balls', nom: 'Energy balls dattes-cajou', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🟤',
    desc: 'Bouchées énergétiques sans cuisson ni sucre ajouté (12 boules).',
    portions: 12, prep: 15, cuisson: 0, diff: 1,
    ing: [['dattes', 200], ['noix_cajou', 100], ['cacao', 2, 'cs'], ['flocons_avoine', 40], ['coco_rapee', 20]],
    etapes: ['Mixez les noix de cajou et les flocons en poudre grossière.', 'Ajoutez les dattes dénoyautées et le cacao, mixez jusqu\'à obtenir une pâte.',
      'Formez des boules et roulez-les dans la noix de coco. Conservez au frais.']
  },
  {
    id: 'pain-epices-maison', nom: 'Pain d\'épices maison', cat: 'Petit-déjeuner', cuisine: 'Française', emoji: '🍯',
    desc: 'Moelleux au miel et aux épices, encore meilleur le lendemain.',
    portions: 10, prep: 15, cuisson: 50, diff: 1,
    ing: [['farine', 250], ['miel', 250], ['lait_demi', 150, 'ml'], ['oeuf', 1, 'pc'], ['cassonade', 50], ['cinq_epices', 2, 'cc', 'Mélange quatre-épices'], ['cannelle', 1, 'cc'],
      ['gingembre_poudre', 1, 'cc'], ['levure_chimique', 1, 'pc'], ['beurre', 20]],
    etapes: ['Faites tiédir le lait avec le miel et la cassonade.', 'Mélangez la farine, la levure et les épices, ajoutez le lait miellé et l\'œuf.',
      'Versez dans un moule à cake beurré.', 'Enfournez 50 min à 160 °C. Attendez le lendemain pour le déguster.']
  },
  {
    id: 'cinnamon-rolls', nom: 'Cinnamon rolls', cat: 'Petit-déjeuner', cuisine: 'Américaine', emoji: '🌀',
    desc: 'Brioches roulées à la cannelle et glaçage au fromage frais (12 pièces).',
    portions: 12, prep: 40, cuisson: 25, diff: 2,
    ing: [['farine', 500], ['lait_demi', 250, 'ml'], ['beurre', 140], ['sucre', 60], ['cassonade', 100], ['cannelle', 2, 'cs'], ['oeuf', 1, 'pc'], ['levure_boulangere', 1, 'pc'],
      ['sel', 1, 'cc'], ['fromage_frais', 100], ['sucre_glace', 80]],
    etapes: ['Pétrissez la farine, le sucre, le sel, la levure, le lait tiède, l\'œuf et 80 g de beurre. Laissez lever 1 h 30.',
      'Étalez en rectangle, tartinez du reste de beurre mou, saupoudrez de cassonade et de cannelle.', 'Roulez et coupez en 12 tranches. Laissez lever 45 min dans un moule.',
      'Enfournez 25 min à 180 °C. Nappez du fromage frais mélangé au sucre glace.']
  },
  {
    id: 'bowl-skyr', nom: 'Bowl de skyr aux fruits rouges', cat: 'Petit-déjeuner', cuisine: 'Healthy', emoji: '🫐',
    desc: 'Petit-déjeuner protéiné : skyr, fruits rouges, avoine et amandes.',
    portions: 2, prep: 5, cuisson: 0, diff: 1,
    ing: [['skyr', 300], ['fruits_rouges', 150], ['flocons_avoine', 40], ['amandes', 20], ['miel', 1, 'cs'], ['graines_chia', 1, 'cs']],
    etapes: ['Répartissez le skyr dans deux bols.', 'Ajoutez les fruits rouges, les flocons, les amandes concassées et les graines de chia.', 'Arrosez de miel.']
  },
  {
    id: 'chocolat-chaud', nom: 'Chocolat chaud à l\'ancienne', cat: 'Petit-déjeuner', cuisine: 'Française', emoji: '☕',
    desc: 'Épais et onctueux, au vrai chocolat noir.',
    portions: 2, prep: 5, cuisson: 5, diff: 1,
    ing: [['lait_entier', 500, 'ml'], ['chocolat_noir', 60], ['cacao', 1, 'cs'], ['sucre', 1, 'cs']],
    etapes: ['Faites chauffer le lait avec le sucre et le cacao.', 'Ajoutez le chocolat haché hors du feu et fouettez jusqu\'à ce qu\'il soit fondu.',
      'Remettez sur feu doux 2 min en fouettant pour épaissir.']
  },

  // ================= DESSERTS =================
  {
    id: 'paris-brest', nom: 'Paris-Brest', cat: 'Desserts', cuisine: 'Française', emoji: '🍩',
    desc: 'Couronne de pâte à choux et crème mousseline au praliné noisette.',
    portions: 8, prep: 60, cuisson: 40, diff: 3,
    ing: [['eau', 125, 'ml'], ['lait_entier', 625, 'ml', 'Lait (choux + crème)'], ['beurre', 250, 'g', 'Beurre (choux + crème)'], ['farine', 150], ['oeuf', 4, 'pc'],
      ['jaune_oeuf', 4, 'pc'], ['sucre', 200, 'g', 'Sucre (crème + praliné)'], ['maizena', 40], ['noisettes', 150], ['amandes', 20, 'g', 'Amandes effilées'], ['sucre_glace', 10], ['sel', 1, 'pincee']],
    etapes: ['Choux : portez à ébullition l\'eau, 125 ml de lait, 100 g de beurre et le sel. Ajoutez la farine, desséchez, puis incorporez les œufs.',
      'Pochez une couronne, parsemez d\'amandes et enfournez 35 min à 180 °C.', 'Praliné : caramélisez 100 g de sucre avec les noisettes grillées, laissez durcir et mixez en pâte.',
      'Crème : faites une crème pâtissière avec le reste du lait, les jaunes, le sucre et la maïzena. Une fois froide, fouettez-la avec le reste du beurre mou et le praliné.',
      'Coupez la couronne en deux, garnissez de crème et saupoudrez de sucre glace.']
  },
  {
    id: 'millefeuille', nom: 'Millefeuille', cat: 'Desserts', cuisine: 'Française', emoji: '🍰',
    desc: 'Feuilletage caramélisé, crème pâtissière vanille et glaçage marbré.',
    portions: 8, prep: 45, cuisson: 30, diff: 3,
    ing: [['pate_feuilletee', 2, 'pc'], ['lait_entier', 500, 'ml'], ['jaune_oeuf', 4, 'pc'], ['sucre', 100], ['maizena', 40], ['vanille', 1, 'cc'], ['sucre_glace', 150], ['chocolat_noir', 20]],
    etapes: ['Piquez les pâtes, posez une plaque dessus et faites-les cuire 25 min à 190 °C pour qu\'elles restent plates. Découpez 3 rectangles identiques.',
      'Préparez la crème pâtissière et laissez-la refroidir.', 'Montez : feuilletage, crème, feuilletage, crème, feuilletage.',
      'Glaçage : sucre glace et quelques gouttes d\'eau, avec des traits de chocolat fondu marbrés à la pointe d\'un couteau.']
  },
  {
    id: 'eclairs-chocolat', nom: 'Éclairs au chocolat', cat: 'Desserts', cuisine: 'Française', emoji: '🍫',
    desc: 'Pâte à choux, crème pâtissière au chocolat et glaçage brillant (12 éclairs).',
    portions: 12, prep: 60, cuisson: 35, diff: 3,
    ing: [['eau', 125, 'ml'], ['lait_entier', 625, 'ml', 'Lait (choux + crème)'], ['beurre', 100], ['farine', 150], ['oeuf', 4, 'pc'], ['jaune_oeuf', 4, 'pc'], ['sucre', 100],
      ['maizena', 40], ['chocolat_noir', 200, 'g', 'Chocolat (crème + glaçage)'], ['creme_30', 50, 'ml'], ['sel', 1, 'pincee']],
    etapes: ['Pâte à choux : eau, 125 ml de lait, beurre et sel à ébullition, ajoutez la farine, desséchez, puis les œufs un à un.',
      'Pochez des boudins de 12 cm, enfournez 30 à 35 min à 180 °C sans ouvrir.', 'Crème : crème pâtissière avec le reste du lait, les jaunes, le sucre et la maïzena, puis 100 g de chocolat.',
      'Garnissez les éclairs par en dessous.', 'Glaçage : faites fondre le reste du chocolat avec la crème et trempez le dessus des éclairs.']
  },
  {
    id: 'profiteroles', nom: 'Profiteroles', cat: 'Desserts', cuisine: 'Française', emoji: '🍨',
    desc: 'Choux garnis de glace vanille, nappés de chocolat chaud.',
    portions: 6, prep: 30, cuisson: 30, diff: 2,
    ing: [['eau', 125, 'ml'], ['lait_entier', 125, 'ml'], ['beurre', 100], ['farine', 150], ['oeuf', 4, 'pc'], ['sel', 1, 'pincee'], ['glace_vanille', 500, 'ml'],
      ['chocolat_noir', 150], ['creme_30', 150, 'ml']],
    etapes: ['Préparez la pâte à choux et pochez une vingtaine de petites boules.', 'Enfournez 25 min à 180 °C. Laissez refroidir.',
      'Sauce : faites fondre le chocolat dans la crème chaude.', 'Ouvrez les choux, garnissez d\'une boule de glace et nappez de sauce chaude.']
  },
  {
    id: 'baba-rhum', nom: 'Baba au rhum', cat: 'Desserts', cuisine: 'Française', emoji: '🍾',
    desc: 'Pâte levée imbibée de sirop au rhum, servie avec de la chantilly.',
    portions: 8, prep: 30, cuisson: 25, diff: 2,
    ing: [['farine', 250], ['oeuf', 4, 'pc'], ['beurre', 80], ['sucre', 20, 'g', 'Sucre (pâte)'], ['levure_boulangere', 1, 'pc'], ['lait_demi', 60, 'ml'], ['sel', 1, 'pincee'],
      ['sucre', 250, 'g', 'Sucre (sirop)'], ['eau', 500, 'ml'], ['alcool_fort', 100, 'ml', 'Rhum ambré'], ['orange', 0.5, 'pc'], ['creme_30', 200, 'ml', 'Crème (chantilly)']],
    etapes: ['Pétrissez la farine, le sucre, le sel, la levure, le lait tiède et les œufs 10 min. Ajoutez le beurre fondu.', 'Remplissez un moule à savarin beurré à moitié, laissez lever 1 h.',
      'Enfournez 25 min à 180 °C.', 'Sirop : faites bouillir l\'eau, le sucre et le zeste d\'orange, ajoutez le rhum hors du feu.',
      'Arrosez le baba tiède de sirop à plusieurs reprises. Servez avec la chantilly.']
  },
  {
    id: 'macarons', nom: 'Macarons au chocolat', cat: 'Desserts', cuisine: 'Française', emoji: '🟤',
    desc: 'Coques lisses et croustillantes, ganache fondante (environ 24 macarons).',
    portions: 12, prep: 60, cuisson: 15, diff: 3,
    ing: [['poudre_amande', 150], ['sucre_glace', 150], ['blanc_oeuf', 4, 'pc'], ['sucre', 150], ['cacao', 1, 'cs'], ['chocolat_noir', 100], ['creme_30', 100, 'ml']],
    etapes: ['Mixez et tamisez la poudre d\'amande, le sucre glace et le cacao.', 'Montez les blancs en meringue en ajoutant le sucre progressivement.',
      'Incorporez le mélange sec à la maryse jusqu\'à obtenir une pâte qui forme un ruban (macaronage).', 'Pochez des petits disques, laissez croûter 30 min puis enfournez 13 min à 150 °C.',
      'Ganache : chocolat et crème chaude. Garnissez les coques deux à deux et réservez 24 h au frais.']
  },
  {
    id: 'madeleines', nom: 'Madeleines', cat: 'Desserts', cuisine: 'Française', emoji: '🐚',
    desc: 'Les madeleines à grosse bosse, parfumées au citron et au miel (24 pièces).',
    portions: 12, prep: 15, cuisson: 10, diff: 1,
    ing: [['oeuf', 3, 'pc'], ['sucre', 130], ['farine', 150], ['beurre', 125], ['levure_chimique', 1, 'cc'], ['miel', 1, 'cs'], ['citron', 0.5, 'pc', 'Zeste de citron']],
    etapes: ['Fouettez les œufs, le sucre et le miel jusqu\'à ce que le mélange blanchisse.', 'Ajoutez la farine, la levure, le zeste puis le beurre fondu tiède.',
      'Réservez la pâte au moins 2 h au réfrigérateur (c\'est le secret de la bosse).', 'Remplissez les moules beurrés et enfournez 4 min à 220 °C, puis 6 min à 180 °C.']
  },
  {
    id: 'financiers', nom: 'Financiers', cat: 'Desserts', cuisine: 'Française', emoji: '🟨',
    desc: 'Petits gâteaux aux amandes et beurre noisette (12 pièces).',
    portions: 12, prep: 15, cuisson: 15, diff: 1,
    ing: [['blanc_oeuf', 4, 'pc'], ['sucre_glace', 150], ['poudre_amande', 70], ['farine', 50], ['beurre', 120]],
    etapes: ['Faites cuire le beurre jusqu\'à ce qu\'il soit noisette, filtrez et laissez tiédir.', 'Mélangez le sucre glace, la poudre d\'amande et la farine.',
      'Ajoutez les blancs non battus, puis le beurre noisette.', 'Remplissez les moules et enfournez 12 à 15 min à 190 °C.']
  },
  {
    id: 'canneles', nom: 'Cannelés bordelais', cat: 'Desserts', cuisine: 'Bordelaise', emoji: '🟫',
    desc: 'Croûte caramélisée et cœur moelleux au rhum et à la vanille (12 pièces).',
    portions: 12, prep: 20, cuisson: 60, diff: 3,
    ing: [['lait_entier', 500, 'ml'], ['beurre', 50], ['farine', 100], ['sucre', 250], ['oeuf', 2, 'pc'], ['jaune_oeuf', 2, 'pc'], ['alcool_fort', 50, 'ml', 'Rhum'], ['vanille', 1, 'cc']],
    etapes: ['Faites bouillir le lait avec le beurre et la vanille.', 'Mélangez la farine et le sucre, ajoutez les œufs et les jaunes, puis le lait chaud. Laissez refroidir et ajoutez le rhum.',
      'Réservez la pâte 24 à 48 h au réfrigérateur.', 'Remplissez les moules beurrés, enfournez 15 min à 250 °C puis 45 min à 180 °C.']
  },
  {
    id: 'far-breton', nom: 'Far breton aux pruneaux', cat: 'Desserts', cuisine: 'Bretonne', emoji: '🍮',
    desc: 'Flan épais et dense aux pruneaux, spécialité bretonne.',
    portions: 8, prep: 15, cuisson: 50, diff: 1,
    ing: [['lait_entier', 750, 'ml'], ['oeuf', 4, 'pc'], ['farine', 200], ['sucre', 120], ['beurre', 30], ['pruneaux', 250], ['alcool_fort', 2, 'cs', 'Rhum']],
    etapes: ['Faites tremper les pruneaux dans le rhum.', 'Fouettez les œufs et le sucre, ajoutez la farine puis le lait progressivement.',
      'Versez dans un plat beurré, répartissez les pruneaux et des noisettes de beurre.', 'Enfournez 50 min à 200 °C.']
  },
  {
    id: 'quatre-quarts', nom: 'Quatre-quarts', cat: 'Desserts', cuisine: 'Bretonne', emoji: '🍰',
    desc: 'Le gâteau aux 4 ingrédients à parts égales.',
    portions: 8, prep: 15, cuisson: 45, diff: 1,
    ing: [['oeuf', 4, 'pc'], ['beurre', 200], ['sucre', 200], ['farine', 200], ['levure_chimique', 1, 'cc'], ['sel', 1, 'pincee']],
    etapes: ['Fouettez les jaunes avec le sucre, ajoutez le beurre fondu puis la farine et la levure.', 'Montez les blancs en neige avec le sel et incorporez-les délicatement.',
      'Versez dans un moule beurré et enfournez 45 min à 170 °C.']
  },
  {
    id: 'marbre', nom: 'Gâteau marbré chocolat-vanille', cat: 'Desserts', cuisine: 'Française', emoji: '🍫',
    desc: 'Le cake marbré du goûter, moelleux à souhait.',
    portions: 10, prep: 20, cuisson: 50, diff: 1,
    ing: [['farine', 250], ['sucre', 200], ['beurre', 200], ['oeuf', 4, 'pc'], ['levure_chimique', 1, 'pc'], ['lait_demi', 50, 'ml'], ['cacao', 30], ['vanille', 1, 'cc']],
    etapes: ['Fouettez le beurre mou et le sucre, ajoutez les œufs un à un, puis la farine, la levure et le lait.', 'Séparez la pâte en deux : ajoutez la vanille dans l\'une et le cacao dans l\'autre.',
      'Alternez les deux pâtes dans un moule à cake et marbrez avec une fourchette.', 'Enfournez 50 min à 170 °C.']
  },
  {
    id: 'tarte-chocolat', nom: 'Tarte au chocolat', cat: 'Desserts', cuisine: 'Française', emoji: '🍫',
    desc: 'Pâte sablée et ganache intense au chocolat noir.',
    portions: 8, prep: 20, cuisson: 35, diff: 1,
    ing: [['pate_sablee', 1, 'pc'], ['chocolat_noir', 200], ['creme_30', 200, 'ml'], ['lait_entier', 100, 'ml'], ['oeuf', 1, 'pc']],
    etapes: ['Faites cuire la pâte à blanc 20 min à 180 °C.', 'Versez la crème et le lait bouillants sur le chocolat haché, mélangez, puis ajoutez l\'œuf.',
      'Versez sur le fond de tarte et enfournez 12 min à 150 °C.', 'Laissez prendre 2 h à température ambiante.']
  },
  {
    id: 'tarte-fraises', nom: 'Tarte aux fraises', cat: 'Desserts', cuisine: 'Française', emoji: '🍓',
    desc: 'Sablé croustillant, crème pâtissière et fraises fraîches.',
    portions: 8, prep: 30, cuisson: 25, diff: 2,
    ing: [['pate_sablee', 1, 'pc'], ['fraises', 500], ['lait_entier', 400, 'ml'], ['jaune_oeuf', 3, 'pc'], ['sucre', 80], ['maizena', 30], ['vanille', 1, 'cc'], ['confiture', 2, 'cs', 'Gelée de groseille (nappage)']],
    etapes: ['Faites cuire la pâte à blanc 20 à 25 min à 180 °C.', 'Préparez la crème pâtissière et laissez-la refroidir.',
      'Garnissez le fond de crème, disposez les fraises.', 'Nappez de gelée tiédie pour faire briller.']
  },
  {
    id: 'tarte-bourdaloue', nom: 'Tarte Bourdaloue aux poires', cat: 'Desserts', cuisine: 'Française', emoji: '🍐',
    desc: 'Poires pochées sur une crème d\'amande fondante.',
    portions: 8, prep: 25, cuisson: 40, diff: 2,
    ing: [['pate_sablee', 1, 'pc'], ['poire', 4, 'pc', 'Poires au sirop égouttées'], ['beurre', 100], ['sucre', 100], ['poudre_amande', 100], ['oeuf', 2, 'pc'], ['maizena', 1, 'cs'],
      ['amandes', 20, 'g', 'Amandes effilées']],
    etapes: ['Crème d\'amande : fouettez le beurre mou et le sucre, ajoutez la poudre d\'amande, les œufs et la maïzena.', 'Foncez le moule, étalez la crème d\'amande.',
      'Disposez les demi-poires émincées en éventail, parsemez d\'amandes.', 'Enfournez 40 min à 180 °C.']
  },
  {
    id: 'galette-rois', nom: 'Galette des rois à la frangipane', cat: 'Desserts', cuisine: 'Française', emoji: '👑',
    desc: 'Feuilletage doré et crème d\'amande, avec sa fève.',
    portions: 8, prep: 25, cuisson: 35, diff: 2,
    ing: [['pate_feuilletee', 2, 'pc'], ['poudre_amande', 125], ['beurre', 100], ['sucre', 100], ['oeuf', 3, 'pc'], ['alcool_fort', 1, 'cs', 'Rhum']],
    etapes: ['Frangipane : fouettez le beurre mou et le sucre, ajoutez la poudre d\'amande, 2 œufs et le rhum.', 'Étalez la frangipane sur une pâte en laissant 2 cm de bord, ajoutez la fève.',
      'Couvrez de la seconde pâte, soudez, dorez au jaune d\'œuf et dessinez des motifs.', 'Enfournez 35 min à 190 °C.']
  },
  {
    id: 'crepes-suzette', nom: 'Crêpes Suzette', cat: 'Desserts', cuisine: 'Française', emoji: '🍊',
    desc: 'Crêpes nappées de beurre à l\'orange et flambées.',
    portions: 6, prep: 20, cuisson: 25, diff: 2,
    ing: [['farine', 125], ['lait_demi', 250, 'ml'], ['oeuf', 2, 'pc'], ['beurre', 85, 'g', 'Beurre (crêpes + sauce)'], ['sucre', 75], ['orange', 2, 'pc'], ['alcool_fort', 4, 'cs', 'Grand Marnier']],
    etapes: ['Préparez une pâte à crêpes avec la farine, le lait, les œufs, 15 g de sucre et 25 g de beurre fondu. Faites cuire 12 crêpes fines.',
      'Dans une grande poêle, faites caraméliser le reste du sucre et du beurre, ajoutez le jus et le zeste des oranges.', 'Pliez les crêpes en quatre et réchauffez-les dans la sauce.',
      'Flambez au Grand Marnier et servez aussitôt.']
  },
  {
    id: 'bugnes', nom: 'Bugnes lyonnaises', cat: 'Desserts', cuisine: 'Lyonnaise', emoji: '🥨',
    desc: 'Beignets de Carnaval croustillants saupoudrés de sucre glace.',
    portions: 8, prep: 30, cuisson: 20, diff: 2,
    ing: [['farine', 250], ['beurre', 50], ['sucre', 30], ['oeuf', 2, 'pc'], ['levure_chimique', 1, 'cc'], ['fleur_oranger', 1, 'cs'], ['sel', 1, 'pincee'],
      ['huile_neutre', 80, 'ml', 'Huile de friture (part absorbée)'], ['sucre_glace', 30]],
    etapes: ['Mélangez tous les ingrédients de la pâte et pétrissez. Laissez reposer 2 h au frais.', 'Étalez très finement, découpez des losanges et faites une fente au centre.',
      'Faites-les frire 1 min par face à 180 °C.', 'Égouttez et saupoudrez de sucre glace.']
  },
  {
    id: 'churros', nom: 'Churros', cat: 'Desserts', cuisine: 'Espagnole', emoji: '🍩',
    desc: 'Beignets croustillants roulés dans le sucre à la cannelle.',
    portions: 6, prep: 15, cuisson: 15, diff: 2,
    ing: [['farine', 250], ['eau', 300, 'ml'], ['sel', 1, 'pincee'], ['sucre', 65, 'g', 'Sucre (pâte + enrobage)'], ['cannelle', 1, 'cc'], ['huile_neutre', 80, 'ml', 'Huile de friture (part absorbée)']],
    etapes: ['Portez l\'eau à ébullition avec le sel et 1 c. à soupe de sucre, versez sur la farine et mélangez vivement.', 'Mettez la pâte dans une poche à douille cannelée.',
      'Pochez des boudins dans l\'huile à 180 °C et faites-les dorer 2 min.', 'Roulez-les dans le reste du sucre mélangé à la cannelle.']
  },
  {
    id: 'creme-caramel', nom: 'Crème caramel', cat: 'Desserts', cuisine: 'Française', emoji: '🍮',
    desc: 'Flan vanillé au caramel, démoulé.',
    portions: 6, prep: 15, cuisson: 45, diff: 2,
    ing: [['lait_entier', 500, 'ml'], ['oeuf', 4, 'pc'], ['sucre', 200, 'g', 'Sucre (crème + caramel)'], ['vanille', 1, 'cc']],
    etapes: ['Faites un caramel avec 100 g de sucre et versez-le dans les ramequins.', 'Faites chauffer le lait vanillé.',
      'Fouettez les œufs avec le reste du sucre, versez le lait chaud dessus.', 'Remplissez les ramequins et faites cuire au bain-marie 40 min à 160 °C. Démoulez une fois froid.']
  },
  {
    id: 'charlotte-fraises', nom: 'Charlotte aux fraises', cat: 'Desserts', cuisine: 'Française', emoji: '🍓',
    desc: 'Biscuits à la cuillère et mousse légère aux fraises.',
    portions: 8, prep: 40, cuisson: 0, diff: 2,
    ing: [['boudoirs', 24, 'pc'], ['fraises', 500], ['mascarpone', 250], ['creme_30', 200, 'ml'], ['sucre', 130, 'g', 'Sucre (mousse + sirop)'], ['eau', 100, 'ml']],
    etapes: ['Sirop : faites bouillir l\'eau avec 50 g de sucre, laissez refroidir.', 'Fouettez le mascarpone, la crème froide et le reste du sucre en chantilly ferme.',
      'Tapissez un moule de biscuits trempés rapidement dans le sirop.', 'Alternez couches de mousse et de fraises coupées, terminez par des biscuits.',
      'Réservez une nuit au frais, démoulez et décorez de fraises.']
  },
  {
    id: 'poires-belle-helene', nom: 'Poires Belle-Hélène', cat: 'Desserts', cuisine: 'Française', emoji: '🍐',
    desc: 'Poires pochées à la vanille, glace et sauce chocolat chaude.',
    portions: 4, prep: 15, cuisson: 25, diff: 1,
    ing: [['poire', 4, 'pc'], ['sucre', 60, 'g', 'Sucre (sirop, part absorbée)'], ['vanille', 1, 'cc'], ['glace_vanille', 400, 'ml'], ['chocolat_noir', 100], ['creme_30', 100, 'ml'],
      ['amandes', 20, 'g', 'Amandes effilées']],
    etapes: ['Épluchez les poires et pochez-les 20 min dans 1 L d\'eau avec 150 g de sucre et la vanille.', 'Faites fondre le chocolat dans la crème chaude.',
      'Servez chaque poire avec une boule de glace, nappez de chocolat et parsemez d\'amandes grillées.']
  },
  {
    id: 'creme-chocolat', nom: 'Crème dessert au chocolat', cat: 'Desserts', cuisine: 'Française', emoji: '🍫',
    desc: 'Comme les petits pots du commerce, en meilleur.',
    portions: 6, prep: 10, cuisson: 10, diff: 1,
    ing: [['lait_entier', 500, 'ml'], ['chocolat_noir', 80], ['cacao', 1, 'cs'], ['sucre', 60], ['maizena', 35]],
    etapes: ['Délayez la maïzena, le cacao et le sucre dans un peu de lait froid.', 'Faites chauffer le reste du lait, ajoutez le mélange et fouettez jusqu\'à épaississement.',
      'Hors du feu, ajoutez le chocolat haché. Répartissez dans des pots et réfrigérez 3 h.']
  },
  {
    id: 'sables-bretons', nom: 'Sablés bretons', cat: 'Desserts', cuisine: 'Bretonne', emoji: '🍪',
    desc: 'Biscuits épais et friables au beurre demi-sel (24 sablés).',
    portions: 12, prep: 20, cuisson: 15, diff: 1,
    ing: [['farine', 250], ['beurre', 200, 'g', 'Beurre demi-sel mou'], ['sucre', 120], ['jaune_oeuf', 3, 'pc'], ['levure_chimique', 1, 'cc']],
    etapes: ['Fouettez les jaunes et le sucre, ajoutez le beurre mou puis la farine et la levure.', 'Formez un boudin, réfrigérez 1 h.',
      'Coupez des tranches de 1 cm, posez-les dans des cercles ou des moules à muffins.', 'Enfournez 15 min à 180 °C.']
  },
  {
    id: 'carrot-cake', nom: 'Carrot cake', cat: 'Desserts', cuisine: 'Américaine', emoji: '🥕',
    desc: 'Gâteau moelleux aux carottes, noix et épices, glaçage au fromage frais.',
    portions: 10, prep: 25, cuisson: 45, diff: 1,
    ing: [['carotte', 300], ['farine', 250], ['cassonade', 180], ['huile_neutre', 150, 'ml'], ['oeuf', 3, 'pc'], ['noix', 80], ['levure_chimique', 1, 'pc'], ['cannelle', 2, 'cc'],
      ['fromage_frais', 200], ['sucre_glace', 80], ['beurre', 40]],
    etapes: ['Fouettez les œufs, la cassonade et l\'huile.', 'Ajoutez la farine, la levure et la cannelle, puis les carottes râpées et les noix.',
      'Enfournez 45 min à 175 °C dans un moule de 24 cm.', 'Glaçage : fouettez le fromage frais, le beurre mou et le sucre glace. Nappez le gâteau froid.']
  },
  {
    id: 'banoffee', nom: 'Banoffee pie', cat: 'Desserts', cuisine: 'Anglaise', emoji: '🍌',
    desc: 'Biscuit, confiture de lait, bananes et chantilly.',
    portions: 8, prep: 25, cuisson: 0, diff: 1,
    ing: [['biscuits_secs', 200], ['beurre', 80], ['lait_concentre', 400, 'g', 'Confiture de lait (lait concentré cuit)'], ['banane', 3, 'pc'], ['creme_30', 250, 'ml'],
      ['sucre_glace', 20], ['cacao', 1, 'cc']],
    etapes: ['Mixez les biscuits avec le beurre fondu et tassez dans un moule. Réfrigérez.', 'Étalez la confiture de lait sur le fond.',
      'Disposez les bananes en rondelles.', 'Couvrez de chantilly et saupoudrez de cacao. Réfrigérez 2 h.'],
    astuce: 'Pour faire la confiture de lait, faites cuire la boîte de lait concentré fermée 2 h dans l\'eau frémissante (toujours couverte d\'eau).'
  },
  {
    id: 'pecan-pie', nom: 'Tarte aux noix de pécan', cat: 'Desserts', cuisine: 'Américaine', emoji: '🥧',
    desc: 'La pecan pie de Thanksgiving, fondante et croquante.',
    portions: 8, prep: 15, cuisson: 50, diff: 1,
    ing: [['pate_brisee', 1, 'pc'], ['noix_pecan', 200], ['sirop_erable', 150, 'ml'], ['cassonade', 100], ['oeuf', 3, 'pc'], ['beurre', 50], ['vanille', 1, 'cc']],
    etapes: ['Foncez le moule avec la pâte.', 'Fouettez les œufs, le sirop, la cassonade, le beurre fondu et la vanille.',
      'Répartissez les noix de pécan sur la pâte et versez l\'appareil.', 'Enfournez 50 min à 170 °C. Laissez refroidir avant de couper.']
  },
  {
    id: 'baklava', nom: 'Baklava', cat: 'Desserts', cuisine: 'Turque', emoji: '🍯',
    desc: 'Feuilles de filo, noix et pistaches, imbibées de sirop au miel (16 parts).',
    portions: 16, prep: 40, cuisson: 45, diff: 2,
    ing: [['pate_filo', 16, 'pc', 'Feuilles de filo'], ['noix', 200], ['pistaches', 100], ['beurre', 150, 'g', 'Beurre fondu'], ['sucre', 300, 'g', 'Sucre (garniture + sirop)'],
      ['cannelle', 1, 'cc'], ['miel', 100], ['eau', 200, 'ml'], ['citron', 0.5, 'pc']],
    etapes: ['Hachez les noix et pistaches avec 50 g de sucre et la cannelle.', 'Superposez 8 feuilles beurrées dans un plat, étalez la garniture, puis 8 feuilles beurrées.',
      'Découpez en losanges et enfournez 45 min à 170 °C.', 'Sirop : faites bouillir l\'eau, le reste du sucre, le miel et le citron 10 min. Versez sur les baklavas chauds.']
  },
  {
    id: 'torta-caprese', nom: 'Torta caprese', cat: 'Desserts', cuisine: 'Italienne', emoji: '🍫',
    desc: 'Gâteau chocolat-amandes de Capri, sans farine.',
    portions: 8, prep: 20, cuisson: 40, diff: 1,
    ing: [['chocolat_noir', 200], ['beurre', 150], ['sucre', 150], ['oeuf', 4, 'pc'], ['poudre_amande', 200], ['sucre_glace', 10]],
    etapes: ['Faites fondre le chocolat et le beurre.', 'Fouettez les jaunes et le sucre, ajoutez le chocolat puis la poudre d\'amande.',
      'Incorporez les blancs montés en neige.', 'Enfournez 40 min à 170 °C. Saupoudrez de sucre glace.']
  },
  {
    id: 'flan-coco', nom: 'Flan coco', cat: 'Desserts', cuisine: 'Antillaise', emoji: '🥥',
    desc: 'Flan antillais au lait de coco et lait concentré, nappé de caramel.',
    portions: 8, prep: 15, cuisson: 50, diff: 1,
    ing: [['lait_concentre', 400], ['lait_coco', 400, 'ml'], ['oeuf', 4, 'pc'], ['coco_rapee', 100], ['sucre', 100, 'g', 'Sucre (caramel)']],
    etapes: ['Faites un caramel et versez-le dans un moule.', 'Mixez le lait concentré, le lait de coco, les œufs et la noix de coco.',
      'Versez dans le moule et faites cuire au bain-marie 50 min à 180 °C.', 'Laissez refroidir puis une nuit au frais avant de démouler.']
  },
  {
    id: 'gateau-basque', nom: 'Gâteau basque à la crème', cat: 'Desserts', cuisine: 'Basque', emoji: '🥮',
    desc: 'Pâte sablée moelleuse fourrée de crème pâtissière.',
    portions: 8, prep: 30, cuisson: 45, diff: 2,
    ing: [['farine', 250], ['beurre', 150], ['sucre', 200, 'g', 'Sucre (pâte + crème)'], ['poudre_amande', 80], ['oeuf', 2, 'pc'], ['jaune_oeuf', 3, 'pc'], ['levure_chimique', 1, 'cc'],
      ['lait_entier', 300, 'ml'], ['maizena', 25], ['alcool_fort', 1, 'cs', 'Rhum']],
    etapes: ['Pâte : beurre mou, 150 g de sucre, œufs, puis farine, levure et poudre d\'amande. Réfrigérez 1 h.',
      'Crème pâtissière avec le lait, 2 jaunes, le reste du sucre, la maïzena et le rhum.', 'Foncez un moule avec deux tiers de la pâte, garnissez de crème, couvrez du reste de pâte.',
      'Dorez au dernier jaune, rayez à la fourchette et enfournez 45 min à 170 °C.']
  },
  {
    id: 'truffes-chocolat', nom: 'Truffes au chocolat', cat: 'Desserts', cuisine: 'Française', emoji: '🍬',
    desc: 'Bouchées fondantes roulées dans le cacao (environ 25).',
    portions: 12, prep: 30, cuisson: 5, diff: 1,
    ing: [['chocolat_noir', 200], ['creme_30', 100, 'ml'], ['beurre', 30], ['cacao', 3, 'cs']],
    etapes: ['Versez la crème bouillante sur le chocolat haché, ajoutez le beurre et lissez.', 'Réfrigérez 3 h jusqu\'à ce que la ganache soit ferme.',
      'Formez des boules et roulez-les dans le cacao.']
  },
  {
    id: 'glace-vanille-maison', nom: 'Glace à la vanille maison', cat: 'Desserts', cuisine: 'Française', emoji: '🍦',
    desc: 'Crème glacée onctueuse sur base de crème anglaise.',
    portions: 6, prep: 20, cuisson: 10, diff: 2,
    ing: [['creme_30', 300, 'ml'], ['lait_entier', 250, 'ml'], ['jaune_oeuf', 5, 'pc'], ['sucre', 120], ['vanille', 1, 'cs']],
    etapes: ['Faites chauffer le lait, la crème et la vanille.', 'Fouettez les jaunes et le sucre, versez le liquide chaud dessus.',
      'Faites épaissir à feu doux jusqu\'à ce que la crème nappe la cuillère (83 °C), sans bouillir. Refroidissez.',
      'Turbinez en sorbetière, ou placez au congélateur en fouettant toutes les 30 min pendant 3 h.']
  },
  {
    id: 'pommes-four', nom: 'Pommes au four', cat: 'Desserts', cuisine: 'Française', emoji: '🍎',
    desc: 'Pommes fondantes farcies de beurre, cassonade, raisins et noix.',
    portions: 4, prep: 10, cuisson: 35, diff: 1,
    ing: [['pomme', 4, 'pc'], ['beurre', 30], ['cassonade', 40], ['cannelle', 1, 'cc'], ['raisins_secs', 30], ['noix', 30]],
    etapes: ['Évidez les pommes sans les percer.', 'Mélangez le beurre mou, la cassonade, la cannelle, les raisins et les noix, garnissez les pommes.',
      'Enfournez 30 à 35 min à 180 °C avec un fond d\'eau.']
  },
  {
    id: 'pasteis-nata', nom: 'Pastéis de nata', cat: 'Desserts', cuisine: 'Portugaise', emoji: '🥧',
    desc: 'Petits flans portugais caramélisés dans une coque feuilletée (12 pièces).',
    portions: 12, prep: 30, cuisson: 20, diff: 2,
    ing: [['pate_feuilletee', 1, 'pc'], ['lait_entier', 300, 'ml'], ['creme_30', 100, 'ml'], ['jaune_oeuf', 6, 'pc'], ['sucre', 120], ['maizena', 25], ['cannelle', 1, 'pincee'],
      ['citron', 0.5, 'pc', 'Zeste de citron']],
    etapes: ['Roulez la pâte en boudin serré, coupez 12 tranches et étalez-les dans des moules à muffins avec les pouces.',
      'Faites chauffer le lait, la crème, le zeste et la cannelle. Fouettez les jaunes, le sucre et la maïzena, versez le lait dessus et épaississez 2 min.',
      'Remplissez les fonds aux trois quarts.', 'Enfournez 15 à 18 min dans un four le plus chaud possible (250 °C) jusqu\'à ce que le dessus soit tacheté de brun.']
  },
  {
    id: 'cornes-gazelle', nom: 'Cornes de gazelle', cat: 'Desserts', cuisine: 'Marocaine', emoji: '🌙',
    desc: 'Croissants de pâte fine fourrés à la pâte d\'amande et fleur d\'oranger (20 pièces).',
    portions: 10, prep: 60, cuisson: 15, diff: 3,
    ing: [['poudre_amande', 250], ['sucre_glace', 125], ['beurre', 70, 'g', 'Beurre (farce + pâte)'], ['fleur_oranger', 4, 'cs'], ['cannelle', 1, 'pincee'], ['farine', 200], ['oeuf', 1, 'pc'], ['eau', 50, 'ml']],
    etapes: ['Farce : mélangez la poudre d\'amande, le sucre glace, 20 g de beurre, la cannelle et 2 c. à soupe de fleur d\'oranger. Formez des petits boudins.',
      'Pâte : farine, reste du beurre fondu, œuf, reste de fleur d\'oranger et eau. Pétrissez jusqu\'à ce qu\'elle soit élastique.',
      'Étalez très finement, enveloppez chaque boudin, soudez et courbez en croissant.', 'Piquez et enfournez 12 à 15 min à 180 °C : elles doivent rester pâles.']
  },
  {
    id: 'tarte-abricots', nom: 'Tarte rustique aux abricots', cat: 'Desserts', cuisine: 'Française', emoji: '🍑',
    desc: 'Abricots rôtis sur une pâte brisée repliée, une pointe d\'amande.',
    portions: 8, prep: 15, cuisson: 40, diff: 1,
    ing: [['pate_brisee', 1, 'pc'], ['abricot', 12, 'pc'], ['sucre', 50], ['poudre_amande', 30], ['beurre', 20]],
    etapes: ['Étalez la pâte sur une plaque et saupoudrez le centre de poudre d\'amande.', 'Disposez les abricots coupés en deux, en laissant 4 cm de bord.',
      'Repliez la bordure sur les fruits, parsemez de sucre et de beurre.', 'Enfournez 40 min à 190 °C.']
  },
  {
    id: 'gateau-semoule', nom: 'Gâteau de semoule au caramel', cat: 'Desserts', cuisine: 'Française', emoji: '🍮',
    desc: 'Semoule au lait vanillée et raisins, nappée de caramel.',
    portions: 8, prep: 15, cuisson: 40, diff: 1,
    ing: [['semoule', 100, 'g', 'Semoule fine'], ['lait_entier', 1000, 'ml'], ['sucre', 200, 'g', 'Sucre (gâteau + caramel)'], ['oeuf', 2, 'pc'], ['raisins_secs', 50], ['vanille', 1, 'cc']],
    etapes: ['Faites un caramel avec 100 g de sucre et versez-le dans un moule.', 'Faites cuire la semoule en pluie dans le lait vanillé avec le reste du sucre 10 min.',
      'Hors du feu, ajoutez les œufs battus et les raisins.', 'Versez dans le moule et faites cuire au bain-marie 30 min à 180 °C. Démoulez froid.']
  },
  {
    id: 'mendiants', nom: 'Mendiants au chocolat', cat: 'Desserts', cuisine: 'Provençale', emoji: '🍫',
    desc: 'Palets de chocolat garnis de fruits secs (environ 24).',
    portions: 12, prep: 20, cuisson: 5, diff: 1,
    ing: [['chocolat_noir', 200], ['amandes', 30], ['noisettes', 30], ['pistaches', 20], ['raisins_secs', 30], ['abricots_secs', 30]],
    etapes: ['Faites fondre le chocolat au bain-marie.', 'Déposez des petits disques de chocolat sur une feuille de papier cuisson.',
      'Garnissez aussitôt de fruits secs avant que le chocolat ne fige.', 'Laissez durcir au frais.']
  }
]);
