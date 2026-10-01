/* Lot 4 — Batch cooking : recettes pensées pour cuisiner en grande quantité et se conserver
 * (healthy et gourmandes). La conservation de chaque recette est dans js/batch.js. */
window.RECETTES = (window.RECETTES || []).concat([
  // ================= HEALTHY =================
  {
    id: 'poulet-effiloche', nom: 'Poulet effiloché aux épices (base à décliner)', cat: 'Volailles', cuisine: 'Batch cooking', emoji: '🍗',
    desc: 'Une grosse base de poulet tendre pour toute la semaine : wraps, bowls, salades, tacos, sandwichs.',
    portions: 8, prep: 10, cuisson: 35, diff: 1,
    ing: [['poulet_blanc', 1200], ['bouillon', 500, 'ml', 'Bouillon de volaille'], ['oignon', 1, 'pc'], ['ail', 3, 'pc'], ['paprika', 2, 'cc'], ['cumin', 1, 'cc'],
      ['origan', 1, 'cc'], ['citron_vert', 1, 'pc'], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon et l\'ail dans l\'huile avec les épices 2 min.', 'Ajoutez le poulet et le bouillon, couvrez et laissez frémir 25 min.',
      'Effilochez le poulet avec deux fourchettes dans la cocotte et laissez-le absorber le jus 5 min à découvert.', 'Ajoutez le jus de citron vert. Répartissez en boîtes.'],
    astuce: 'Idées de la semaine : lundi en bowl avec riz et avocat, mardi en wraps, mercredi en salade, jeudi en quesadillas.'
  },
  {
    id: 'boulettes-dinde-epinards', nom: 'Boulettes de dinde aux épinards au four', cat: 'Volailles', cuisine: 'Batch cooking', emoji: '🧆',
    desc: 'Maigres et moelleuses, cuites au four sans friture. Se congèlent parfaitement.',
    portions: 6, prep: 25, cuisson: 20, diff: 1,
    ing: [['dinde_escalope', 800, 'g', 'Dinde hachée'], ['epinards', 200], ['flocons_avoine', 50], ['oeuf', 1, 'pc'], ['parmesan', 30], ['ail', 2, 'pc'], ['oignon', 0.5, 'pc'],
      ['origan', 1, 'cc'], ['sel', 1, 'cc'], ['poivre', 0, 'qs']],
    etapes: ['Faites tomber les épinards, pressez-les fortement et hachez-les.', 'Mélangez la dinde, les épinards, les flocons, l\'œuf, le parmesan, l\'ail, l\'oignon râpé et les épices.',
      'Formez une trentaine de boulettes sur une plaque recouverte de papier cuisson.', 'Enfournez 18 à 20 min à 200 °C. Laissez refroidir avant de mettre en boîtes.'],
    astuce: 'À servir avec une sauce tomate, du riz, dans une pita ou sur une salade.'
  },
  {
    id: 'bowls-quinoa-poulet', nom: 'Bowls quinoa, poulet et légumes rôtis (5 boîtes)', cat: 'Volailles', cuisine: 'Batch cooking', emoji: '🥗',
    desc: 'Cinq déjeuners équilibrés préparés en une heure, avec leur sauce yaourt-citron à part.',
    portions: 5, prep: 20, cuisson: 30, diff: 1,
    ing: [['quinoa', 300], ['poulet_blanc', 750], ['courgette', 2, 'pc'], ['poivron', 2, 'pc'], ['oignon_rouge', 1, 'pc'], ['pois_chiches', 240], ['huile_olive', 3, 'cs'],
      ['paprika', 2, 'cc'], ['cumin', 1, 'cc'], ['yaourt_grec', 200], ['citron', 1, 'pc'], ['persil', 15], ['sel', 0, 'qs']],
    etapes: ['Coupez les légumes, mélangez-les avec les pois chiches, 2 c. à soupe d\'huile et la moitié des épices. Rôtissez 30 min à 210 °C.',
      'Faites cuire le quinoa 12 min.', 'Assaisonnez le poulet du reste des épices et faites-le cuire 6 min par face dans le reste d\'huile. Tranchez.',
      'Sauce : yaourt, jus de citron, persil, sel, dans 5 petits pots.', 'Répartissez quinoa, légumes et poulet dans 5 boîtes.']
  },
  {
    id: 'soupe-butternut-lentilles', nom: 'Soupe butternut, carotte et lentilles corail', cat: 'Soupes', cuisine: 'Batch cooking', emoji: '🥣',
    desc: 'La soupe batch cooking par excellence : 5 jours au frigo et parfaite au congélateur.',
    portions: 8, prep: 20, cuisson: 30, diff: 1,
    ing: [['butternut', 1000], ['carotte', 4, 'pc'], ['lentilles_corail', 200], ['oignon', 2, 'pc'], ['gingembre', 15], ['curry', 2, 'cc'], ['lait_coco', 200, 'ml'],
      ['bouillon', 2000, 'ml'], ['huile_olive', 2, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir les oignons et le gingembre dans l\'huile avec le curry.', 'Ajoutez la courge et les carottes en cubes, les lentilles rincées et le bouillon.',
      'Laissez cuire 25 min, puis mixez avec le lait de coco.', 'Laissez refroidir rapidement et répartissez en pots.']
  },
  {
    id: 'curry-lentilles-patate-douce', nom: 'Curry de lentilles et patate douce', cat: 'Végétarien', cuisine: 'Batch cooking', emoji: '🍛',
    desc: 'Vegan, riche en fibres, et encore meilleur réchauffé.',
    portions: 6, prep: 15, cuisson: 30, diff: 1,
    ing: [['lentilles_vertes', 250], ['patate_douce', 2, 'pc'], ['tomates_concassees', 800], ['lait_coco', 400, 'ml'], ['epinards', 200], ['oignon', 2, 'pc'], ['ail', 3, 'pc'],
      ['gingembre', 20], ['curry', 1, 'cs'], ['garam_masala', 1, 'cc'], ['huile_neutre', 2, 'cs'], ['riz_complet', 360], ['sel', 0, 'qs']],
    etapes: ['Faites revenir les oignons, l\'ail et le gingembre avec les épices.', 'Ajoutez les lentilles, la patate douce en cubes, les tomates, le lait de coco et 50 cl d\'eau.',
      'Laissez mijoter 30 min. Ajoutez les épinards en fin de cuisson.', 'Faites cuire le riz complet à part et répartissez en boîtes.']
  },
  {
    id: 'bolognaise-legumes-caches', nom: 'Sauce bolognaise aux légumes cachés (grande quantité)', cat: 'Sauces & bases', cuisine: 'Batch cooking', emoji: '🍅',
    desc: 'Une marmite de sauce pour 10 repas, avec carottes, courgettes et lentilles mixées que personne ne remarque.',
    portions: 10, prep: 25, cuisson: 90, diff: 1,
    ing: [['boeuf_hache_5', 1000], ['lentilles_corail', 150], ['carotte', 3, 'pc'], ['courgette', 2, 'pc'], ['celeri', 2, 'pc'], ['oignon', 2, 'pc'], ['ail', 4, 'pc'],
      ['tomates_concassees', 1600], ['concentre_tomate', 3, 'cs'], ['vin_rouge', 200, 'ml'], ['huile_olive', 3, 'cs'], ['origan', 2, 'cc'], ['laurier', 2, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Mixez finement carottes, courgettes, céleri, oignons et ail.', 'Faites-les revenir 10 min dans l\'huile, puis ajoutez la viande et faites-la dorer.',
      'Déglacez au vin, ajoutez les tomates, le concentré, les lentilles, l\'origan, le laurier et 50 cl d\'eau.', 'Laissez mijoter 1 h à feu doux en remuant de temps en temps.',
      'Laissez refroidir et congelez en portions de 2 à 4 personnes.'],
    astuce: 'Se décline en spaghetti, lasagnes, hachis, chili express (avec haricots rouges et cumin) ou pommes de terre farcies.'
  },
  {
    id: 'burritos-petit-dej', nom: 'Burritos du petit-déjeuner à congeler', cat: 'Petit-déjeuner', cuisine: 'Batch cooking', emoji: '🌯',
    desc: 'Œufs brouillés, haricots, fromage et poivron roulés dans une tortilla : se réchauffent en 2 minutes.',
    portions: 8, prep: 25, cuisson: 15, diff: 1,
    ing: [['tortilla', 8, 'pc'], ['oeuf', 10, 'pc'], ['haricots_noirs', 400], ['cheddar', 120, 'g', 'Cheddar râpé'], ['poivron', 1, 'pc'], ['oignon', 1, 'pc'], ['epinards', 100],
      ['cumin', 1, 'cc'], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon et le poivron, ajoutez les épinards puis les haricots et le cumin.', 'Brouillez les œufs à part en les gardant crémeux.',
      'Garnissez les tortillas d\'œufs, de haricots et de fromage, roulez serré en repliant les côtés.', 'Laissez refroidir, emballez individuellement et congelez.'],
    astuce: 'Du congélateur : 2 à 3 min au micro-ondes dans un essuie-tout humide, ou 20 min au four à 180 °C.'
  },
  {
    id: 'saumon-riz-brocoli', nom: 'Saumon rôti, riz complet et brocoli (meal prep)', cat: 'Poissons', cuisine: 'Batch cooking', emoji: '🐟',
    desc: 'Quatre déjeuners riches en oméga-3, tout cuit en même temps au four.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['saumon', 4, 'pc'], ['riz_complet', 240], ['brocoli', 2, 'pc'], ['huile_olive', 2, 'cs'], ['sauce_soja', 3, 'cs'], ['miel', 1, 'cs'], ['citron', 1, 'pc'],
      ['graines_sesame', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Lancez la cuisson du riz complet.', 'Disposez le saumon et le brocoli en fleurettes sur une plaque, arrosez d\'huile.',
      'Badigeonnez le saumon de sauce soja et de miel. Enfournez 15 min à 200 °C.', 'Répartissez dans 4 boîtes avec le riz, le citron et le sésame.']
  },
  {
    id: 'dinde-patate-douce-meal-prep', nom: 'Dinde, patate douce et haricots verts (meal prep)', cat: 'Volailles', cuisine: 'Batch cooking', emoji: '💪',
    desc: 'Le classique des sportifs : maigre, rassasiant et prêt pour 4 jours.',
    portions: 4, prep: 15, cuisson: 30, diff: 1,
    ing: [['dinde_escalope', 600], ['patate_douce', 3, 'pc'], ['haricots_verts', 400], ['huile_olive', 2, 'cs'], ['paprika', 2, 'cc'], ['herbes_provence', 1, 'cc'], ['ail', 2, 'pc'],
      ['citron', 1, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Rôtissez les patates douces en cubes avec 1 c. à soupe d\'huile et le paprika, 30 min à 210 °C.', 'Faites cuire les haricots verts 7 min à l\'eau salée.',
      'Assaisonnez la dinde d\'herbes, d\'ail et de citron, faites-la dorer 4 min par face. Tranchez.', 'Répartissez dans 4 boîtes.']
  },
  {
    id: 'burritos-poulet', nom: 'Burritos au poulet à congeler', cat: 'Burgers & sandwichs', cuisine: 'Batch cooking', emoji: '🌯',
    desc: 'Riz, poulet épicé, haricots et fromage : le repas de secours parfait.',
    portions: 8, prep: 30, cuisson: 25, diff: 1,
    ing: [['tortilla', 8, 'pc'], ['poulet_blanc', 700], ['riz_blanc', 250], ['haricots_noirs', 400], ['mais', 150], ['cheddar', 150, 'g', 'Cheddar râpé'], ['coulis_tomate', 200],
      ['cumin', 2, 'cc'], ['paprika', 2, 'cc'], ['citron_vert', 1, 'pc'], ['coriandre', 15], ['huile_neutre', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites cuire le riz, mélangez-le avec le citron vert et la coriandre.', 'Faites dorer le poulet en dés avec les épices, ajoutez le coulis, les haricots et le maïs.',
      'Garnissez les tortillas de riz, poulet et fromage, roulez serré.', 'Emballez individuellement et congelez.'],
    astuce: 'Réchauffage : 3 min au micro-ondes ou 25 min au four à 180 °C dans leur papier aluminium.'
  },
  {
    id: 'gratin-proteine-poulet-brocoli', nom: 'Gratin protéiné poulet-brocoli', cat: 'Volailles', cuisine: 'Batch cooking', emoji: '🧀',
    desc: 'Pâtes complètes, poulet et brocoli dans une sauce au fromage blanc, gratiné.',
    portions: 6, prep: 15, cuisson: 30, diff: 1,
    ing: [['pates_completes', 400], ['poulet_blanc', 600], ['brocoli', 2, 'pc'], ['fromage_blanc_0', 400], ['oeuf', 2, 'pc'], ['emmental', 100], ['moutarde', 1, 'cs'],
      ['ail', 2, 'pc'], ['muscade', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Faites cuire les pâtes avec les fleurettes de brocoli les 4 dernières minutes.', 'Faites dorer le poulet en dés avec l\'ail.',
      'Mélangez le fromage blanc, les œufs, la moutarde, la muscade et la moitié du fromage.', 'Réunissez le tout dans un plat, couvrez du reste de fromage et gratinez 20 min à 200 °C.']
  },
  {
    id: 'muffins-sales-courgette', nom: 'Muffins salés courgette-feta', cat: 'Apéro', cuisine: 'Batch cooking', emoji: '🧁',
    desc: 'Pour le goûter, le pique-nique ou les lunchbox (12 muffins). Se congèlent.',
    portions: 12, prep: 15, cuisson: 25, diff: 1,
    ing: [['courgette', 2, 'pc'], ['feta', 150], ['farine', 200], ['oeuf', 3, 'pc'], ['yaourt_nature', 1, 'pc'], ['huile_olive', 4, 'cs'], ['levure_chimique', 1, 'pc'],
      ['menthe', 5], ['sel', 1, 'pincee']],
    etapes: ['Râpez les courgettes et pressez-les.', 'Mélangez la farine, la levure, les œufs, le yaourt et l\'huile.',
      'Ajoutez les courgettes, la feta émiettée et la menthe.', 'Remplissez 12 moules et enfournez 25 min à 180 °C.']
  },
  {
    id: 'barres-proteinees', nom: 'Barres protéinées sans cuisson', cat: 'Petit-déjeuner', cuisine: 'Batch cooking', emoji: '🍫',
    desc: '10 barres pour la semaine : avoine, beurre de cacahuète, protéine et chocolat.',
    portions: 10, prep: 15, cuisson: 0, diff: 1,
    ing: [['flocons_avoine', 150], ['beurre_cacahuete', 150], ['proteine_whey', 60], ['miel', 80], ['lait_demi', 50, 'ml'], ['chocolat_noir', 50]],
    etapes: ['Mélangez les flocons et la protéine.', 'Ajoutez le beurre de cacahuète, le miel et le lait, malaxez.',
      'Tassez dans un moule chemisé, nappez de chocolat fondu.', 'Réfrigérez 2 h et coupez en 10 barres.']
  },
  {
    id: 'curry-vert-poulet', nom: 'Curry vert de poulet', cat: 'Volailles', cuisine: 'Thaïlandaise', emoji: '🥥',
    desc: 'Poulet, aubergine et haricots verts dans un curry vert parfumé, qui se garde très bien.',
    portions: 6, prep: 15, cuisson: 25, diff: 1,
    ing: [['poulet_cuisse', 900], ['lait_coco', 600, 'ml'], ['pate_curry', 3, 'cs', 'Pâte de curry vert'], ['aubergine', 1, 'pc'], ['haricots_verts', 250], ['poivron', 1, 'pc'],
      ['nuoc_mam', 2, 'cs'], ['sucre', 1, 'cs'], ['basilic', 20, 'g', 'Basilic thaï'], ['citron_vert', 1, 'pc'], ['huile_neutre', 1, 'cs'], ['riz_blanc', 420, 'g', 'Riz thaï']],
    etapes: ['Faites revenir la pâte de curry dans l\'huile, ajoutez la moitié du lait de coco.', 'Ajoutez le poulet en morceaux, cuisez 8 min.',
      'Ajoutez l\'aubergine, les haricots, le poivron et le reste du lait de coco. Laissez mijoter 12 min.', 'Assaisonnez de nuoc-mâm, sucre et citron vert, ajoutez le basilic. Servez avec le riz.']
  },
  {
    id: 'lasagnes-courgettes', nom: 'Lasagnes de courgettes à la bolognaise de dinde', cat: 'Volailles', cuisine: 'Batch cooking', emoji: '🥒',
    desc: 'Les feuilles de pâtes sont remplacées par des lamelles de courgettes : léger et protéiné.',
    portions: 6, prep: 30, cuisson: 50, diff: 2,
    ing: [['courgette', 4, 'pc'], ['dinde_escalope', 600, 'g', 'Dinde hachée'], ['coulis_tomate', 700], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['ricotta', 250], ['mozzarella', 1, 'pc'],
      ['parmesan', 40], ['basilic', 10], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Coupez les courgettes en lamelles fines, salez-les et faites-les griller 10 min au four pour qu\'elles rendent leur eau.',
      'Faites revenir l\'oignon, l\'ail et la dinde, ajoutez le coulis et laissez mijoter 15 min.', 'Alternez courgettes, sauce et ricotta, terminez par la mozzarella et le parmesan.',
      'Enfournez 30 min à 180 °C. Laissez reposer 10 min avant de couper.']
  },
  {
    id: 'parmentier-patate-douce-lentilles', nom: 'Hachis parmentier de patate douce et lentilles', cat: 'Végétarien', cuisine: 'Batch cooking', emoji: '🍠',
    desc: 'Version végétarienne et riche en fibres du hachis, qui se congèle en parts.',
    portions: 6, prep: 25, cuisson: 45, diff: 1,
    ing: [['lentilles_vertes', 250], ['patate_douce', 4, 'pc'], ['carotte', 2, 'pc'], ['champignons', 250], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['concentre_tomate', 2, 'cs'],
      ['bouillon', 600, 'ml', 'Bouillon de légumes'], ['thym', 2, 'pc'], ['lait_demi', 100, 'ml'], ['beurre', 20], ['comte', 60], ['huile_olive', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon, l\'ail, les carottes et les champignons en dés.', 'Ajoutez les lentilles, le concentré, le thym et le bouillon. Cuisez 25 min.',
      'Faites cuire les patates douces et écrasez-les avec le lait et le beurre.', 'Étalez les lentilles puis la purée dans un plat, parsemez de fromage. Gratinez 20 min à 200 °C.']
  },
  {
    id: 'quiche-sans-pate', nom: 'Quiche sans pâte aux légumes', cat: 'Végétarien', cuisine: 'Batch cooking', emoji: '🥚',
    desc: 'Plus légère qu\'une quiche classique, à découper en parts pour la semaine.',
    portions: 6, prep: 15, cuisson: 40, diff: 1,
    ing: [['oeuf', 6, 'pc'], ['lait_demi', 300, 'ml'], ['farine', 50], ['courgette', 1, 'pc'], ['poivron', 1, 'pc'], ['epinards', 150], ['tomates_cerises', 150], ['feta', 100],
      ['emmental', 60], ['herbes_provence', 1, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir rapidement la courgette, le poivron et les épinards.', 'Fouettez les œufs, la farine, le lait, les herbes et le sel.',
      'Répartissez les légumes, les tomates et la feta dans un moule, versez l\'appareil, parsemez d\'emmental.', 'Enfournez 40 min à 180 °C.']
  },
  {
    id: 'bouillon-poulet', nom: 'Bouillon de poulet maison', cat: 'Sauces & bases', cuisine: 'Batch cooking', emoji: '🫙',
    desc: 'La base de toutes vos soupes, risottos et sauces. Se congèle en portions.',
    portions: 8, prep: 15, cuisson: 180, diff: 1,
    ing: [['poulet_entier', 400, 'g', 'Carcasses et ailes de poulet (viande comestible)'], ['carotte', 2, 'pc'], ['oignon', 1, 'pc'], ['poireau', 1, 'pc'], ['celeri', 2, 'pc'],
      ['ail', 2, 'pc'], ['thym', 2, 'pc'], ['laurier', 2, 'pc'], ['poivre', 1, 'cc', 'Poivre en grains'], ['eau', 3000, 'ml']],
    etapes: ['Mettez tous les ingrédients dans un grand faitout d\'eau froide.', 'Portez à frémissement et écumez.',
      'Laissez frémir 3 h à couvert entrouvert, sans faire bouillir.', 'Filtrez, laissez refroidir et dégraissez. Congelez en pots ou en bacs à glaçons.'],
    astuce: 'Les valeurs nutritionnelles comptent toute la viande : le bouillon filtré est en réalité beaucoup plus léger (≈ 20 kcal par bol).'
  },
  {
    id: 'taboule-quinoa', nom: 'Taboulé de quinoa aux herbes', cat: 'Entrées & salades', cuisine: 'Batch cooking', emoji: '🌿',
    desc: 'Se garde 4 jours sans ramollir, idéal pour les lunchbox.',
    portions: 6, prep: 20, cuisson: 15, diff: 1,
    ing: [['quinoa', 300], ['concombre', 1, 'pc'], ['tomate', 3, 'pc'], ['poivron', 1, 'pc'], ['oignon_rouge', 1, 'pc'], ['persil', 40], ['menthe', 15], ['citron', 2, 'pc'],
      ['huile_olive', 5, 'cs'], ['pois_chiches', 240], ['sel', 0, 'qs']],
    etapes: ['Faites cuire le quinoa 12 min, étalez-le pour qu\'il refroidisse vite.', 'Coupez les légumes en petits dés, ciselez les herbes.',
      'Mélangez avec les pois chiches, le jus de citron, l\'huile et le sel.', 'Répartissez en boîtes.']
  },

  // ================= GOURMAND =================
  {
    id: 'gratin-macaronis-jambon', nom: 'Gratin de macaronis au jambon', cat: 'Pâtes & riz', cuisine: 'Batch cooking', emoji: '🧀',
    desc: 'Le gratin réconfortant de la famille, qui se prépare la veille.',
    portions: 6, prep: 20, cuisson: 30, diff: 1,
    ing: [['pates', 500, 'g', 'Macaronis'], ['jambon_blanc', 6, 'pc'], ['beurre', 50], ['farine', 50], ['lait_demi', 800, 'ml'], ['emmental', 150], ['muscade', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Faites cuire les macaronis 2 min de moins que le temps indiqué.', 'Béchamel : roux beurre-farine, puis le lait en fouettant, épaississez. Ajoutez la muscade et la moitié du fromage.',
      'Mélangez pâtes, jambon en dés et béchamel dans un plat. Couvrez du reste de fromage.', 'Gratinez 20 min à 200 °C.']
  },
  {
    id: 'lasagnes-poulet-champignons', nom: 'Lasagnes au poulet et aux champignons', cat: 'Volailles', cuisine: 'Batch cooking', emoji: '🍄',
    desc: 'Lasagnes blanches crémeuses, idéales à préparer en double pour en congeler une.',
    portions: 8, prep: 40, cuisson: 45, diff: 2,
    ing: [['lasagnes', 300], ['poulet_blanc', 700], ['champignons', 500], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['beurre', 60], ['farine', 60], ['lait_demi', 1000, 'ml'],
      ['epinards', 200], ['mozzarella', 1, 'pc'], ['parmesan', 60], ['muscade', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer le poulet en dés, puis les champignons, l\'oignon et l\'ail.', 'Béchamel : roux beurre-farine, lait, muscade. Mélangez-en la moitié avec le poulet, les champignons et les épinards.',
      'Alternez lasagnes, garniture et béchamel. Terminez par béchamel, mozzarella et parmesan.', 'Enfournez 45 min à 180 °C.']
  },
  {
    id: 'cannellonis-viande', nom: 'Cannellonis à la viande', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🍝',
    desc: 'Tubes de pâtes farcis au bœuf, sauce tomate et béchamel gratinée.',
    portions: 6, prep: 40, cuisson: 45, diff: 2,
    ing: [['lasagnes', 250, 'g', 'Cannellonis'], ['boeuf_hache_15', 600], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['coulis_tomate', 700], ['ricotta', 150], ['parmesan', 60],
      ['beurre', 30], ['farine', 30], ['lait_demi', 400, 'ml'], ['basilic', 10], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon, l\'ail et la viande, ajoutez 200 g de coulis. Laissez tiédir et mélangez avec la ricotta et la moitié du parmesan.',
      'Farcissez les cannellonis à la poche.', 'Étalez le reste du coulis dans un plat, posez les cannellonis, nappez d\'une béchamel légère.',
      'Parsemez de parmesan et enfournez 40 min à 180 °C.']
  },
  {
    id: 'boeuf-barbacoa', nom: 'Bœuf effiloché barbacoa', cat: 'Viandes', cuisine: 'Mexicaine', emoji: '🌮',
    desc: 'Bœuf confit aux piments et épices, à effilocher pour tacos, burritos et bowls.',
    portions: 8, prep: 20, cuisson: 240, diff: 1,
    ing: [['boeuf_paleron', 1500], ['oignon', 1, 'pc'], ['ail', 5, 'pc'], ['concentre_tomate', 2, 'cs'], ['vinaigre', 4, 'cs', 'Vinaigre de cidre'], ['citron_vert', 2, 'pc'],
      ['cumin', 2, 'cc'], ['origan', 2, 'cc'], ['paprika', 2, 'cs', 'Paprika fumé ou piment chipotle'], ['laurier', 2, 'pc'], ['bouillon', 300, 'ml'], ['sel', 2, 'cc']],
    etapes: ['Mixez l\'oignon, l\'ail, le concentré, le vinaigre, le citron vert et les épices.', 'Enrobez la viande en gros morceaux de cette pâte dans une cocotte, ajoutez le bouillon et le laurier.',
      'Couvrez et laissez cuire 4 h à 150 °C au four (ou 8 h à la mijoteuse).', 'Effilochez la viande dans son jus.']
  },
  {
    id: 'tourte-poulet', nom: 'Tourte au poulet et champignons', cat: 'Tartes & pizzas', cuisine: 'Anglaise', emoji: '🥧',
    desc: 'Chicken pot pie : poulet et légumes en sauce crémeuse sous une croûte feuilletée.',
    portions: 6, prep: 30, cuisson: 40, diff: 2,
    ing: [['pate_feuilletee', 2, 'pc'], ['poulet_cuisse', 700], ['champignons', 250], ['carotte', 2, 'pc'], ['petits_pois', 150], ['oignon', 1, 'pc'], ['beurre', 40], ['farine', 40],
      ['bouillon', 400, 'ml', 'Bouillon de volaille'], ['creme_15', 150, 'ml'], ['thym', 2, 'pc'], ['oeuf', 1, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer le poulet en dés dans le beurre, ajoutez oignon, carottes et champignons.', 'Saupoudrez de farine, versez le bouillon et la crème, ajoutez le thym. Laissez épaissir 10 min, puis les petits pois.',
      'Versez dans un moule foncé d\'une pâte, couvrez de la seconde, soudez et dorez à l\'œuf.', 'Enfournez 35 min à 200 °C.']
  },
  {
    id: 'boulettes-suedoises', nom: 'Boulettes suédoises sauce crème', cat: 'Viandes', cuisine: 'Suédoise', emoji: '🇸🇪',
    desc: 'Köttbullar moelleuses et leur sauce crème, à servir avec purée et confiture d\'airelles.',
    portions: 6, prep: 30, cuisson: 25, diff: 1,
    ing: [['boeuf_hache_15', 500], ['porc_hache', 300], ['chapelure', 60], ['lait_demi', 100, 'ml'], ['oeuf', 1, 'pc'], ['oignon', 1, 'pc'], ['muscade', 1, 'pincee'],
      ['beurre', 30], ['farine', 2, 'cs'], ['bouillon', 400, 'ml', 'Bouillon de bœuf'], ['creme_30', 150, 'ml'], ['sauce_soja', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites tremper la chapelure dans le lait, mélangez avec les viandes, l\'œuf, l\'oignon râpé, la muscade et le sel.', 'Formez des petites boulettes et faites-les dorer dans le beurre. Réservez.',
      'Saupoudrez la poêle de farine, versez le bouillon, la crème et la sauce soja. Laissez épaissir.', 'Remettez les boulettes 8 min dans la sauce.']
  },
  {
    id: 'chili-mac', nom: 'Chili mac au fromage (one pot)', cat: 'Pâtes & riz', cuisine: 'Américaine', emoji: '🌶️',
    desc: 'Le croisement gourmand du chili et du mac and cheese, cuit dans une seule casserole.',
    portions: 6, prep: 10, cuisson: 30, diff: 1,
    ing: [['boeuf_hache_15', 500], ['pates', 350, 'g', 'Macaronis'], ['haricots_rouges', 400], ['tomates_concassees', 800], ['bouillon', 600, 'ml'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'],
      ['cumin', 2, 'cc'], ['paprika', 2, 'cc'], ['cheddar', 150, 'g', 'Cheddar râpé'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer la viande avec l\'oignon, l\'ail et les épices.', 'Ajoutez les tomates, le bouillon, les haricots et les pâtes crues.',
      'Laissez cuire 15 min à couvert en remuant souvent.', 'Incorporez le cheddar hors du feu.']
  },
  {
    id: 'baked-ziti', nom: 'Pâtes au four saucisse-mozzarella (baked ziti)', cat: 'Pâtes & riz', cuisine: 'Italo-américaine', emoji: '🍝',
    desc: 'Le grand plat de pâtes gratinées des repas de famille, qui se congèle en parts.',
    portions: 8, prep: 20, cuisson: 40, diff: 1,
    ing: [['pates', 500, 'g', 'Penne ou ziti'], ['saucisse', 3, 'pc', 'Saucisses italiennes'], ['coulis_tomate', 1000], ['oignon', 1, 'pc'], ['ail', 3, 'pc'], ['ricotta', 250],
      ['mozzarella', 2, 'pc'], ['parmesan', 50], ['basilic', 10], ['origan', 1, 'cc'], ['huile_olive', 1, 'cs']],
    etapes: ['Faites cuire les pâtes 3 min de moins que le temps indiqué.', 'Faites dorer la chair des saucisses avec l\'oignon et l\'ail, ajoutez le coulis et l\'origan. Mijotez 10 min.',
      'Mélangez pâtes et sauce, versez la moitié dans un plat, ajoutez des cuillerées de ricotta, puis le reste.', 'Couvrez de mozzarella et parmesan, enfournez 25 min à 190 °C.']
  },
  {
    id: 'blanquette-poulet', nom: 'Blanquette de poulet', cat: 'Volailles', cuisine: 'Française', emoji: '🥘',
    desc: 'Plus rapide que la blanquette de veau, tout aussi fondante et crémeuse.',
    portions: 6, prep: 20, cuisson: 50, diff: 1,
    ing: [['poulet_cuisse', 1000], ['carotte', 3, 'pc'], ['champignons', 300], ['oignon', 1, 'pc'], ['bouillon', 1000, 'ml', 'Bouillon de volaille'], ['beurre', 40], ['farine', 40],
      ['creme_30', 150, 'ml'], ['jaune_oeuf', 1, 'pc'], ['citron', 0.5, 'pc'], ['thym', 1, 'pc'], ['laurier', 1, 'pc'], ['riz_blanc', 360], ['sel', 0, 'qs']],
    etapes: ['Pochez le poulet en morceaux avec les carottes, l\'oignon et les herbes dans le bouillon 30 min.', 'Faites un roux beurre-farine, ajoutez 60 cl de bouillon, épaississez, ajoutez les champignons 10 min.',
      'Liez avec la crème, le jaune et le citron, sans bouillir. Remettez poulet et carottes.', 'Servez avec le riz.']
  },
  {
    id: 'gratin-poireaux-lardons', nom: 'Gratin de pommes de terre, poireaux et lardons', cat: 'Viandes', cuisine: 'Française', emoji: '🥔',
    desc: 'Gratin fondant et généreux, qui se réchauffe parfaitement au four.',
    portions: 6, prep: 25, cuisson: 50, diff: 1,
    ing: [['pomme_de_terre', 1200], ['poireau', 3, 'pc'], ['lardons', 200], ['creme_15', 300, 'ml'], ['lait_demi', 200, 'ml'], ['comte', 120], ['beurre', 15], ['ail', 1, 'pc'],
      ['muscade', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Faites fondre les poireaux émincés et les lardons dans le beurre 10 min.', 'Coupez les pommes de terre en fines rondelles.',
      'Alternez pommes de terre et poireaux-lardons dans un plat frotté à l\'ail.', 'Versez la crème mélangée au lait et à la muscade, couvrez de fromage. Enfournez 50 min à 180 °C.']
  },
  {
    id: 'muffins-chocolat', nom: 'Muffins au chocolat', cat: 'Desserts', cuisine: 'Batch cooking', emoji: '🧁',
    desc: 'Le goûter de la semaine (12 muffins), qui se congèle sans problème.',
    portions: 12, prep: 15, cuisson: 20, diff: 1,
    ing: [['farine', 220], ['cacao', 30], ['sucre', 150], ['oeuf', 2, 'pc'], ['lait_demi', 200, 'ml'], ['huile_neutre', 80, 'ml'], ['pepites_chocolat', 120], ['levure_chimique', 1, 'pc'], ['sel', 1, 'pincee']],
    etapes: ['Mélangez la farine, le cacao, le sucre, la levure et le sel.', 'Ajoutez les œufs, le lait et l\'huile, mélangez juste ce qu\'il faut, puis les pépites.',
      'Remplissez 12 moules et enfournez 20 min à 180 °C.']
  },
  {
    id: 'ragu-boeuf', nom: 'Ragù de bœuf effiloché pour pâtes', cat: 'Viandes', cuisine: 'Italienne', emoji: '🍷',
    desc: 'Bœuf braisé 3 heures dans la tomate et le vin rouge, à servir sur des pappardelle.',
    portions: 8, prep: 20, cuisson: 180, diff: 1,
    ing: [['boeuf_paleron', 1200], ['tomates_concassees', 1200], ['vin_rouge', 300, 'ml'], ['carotte', 2, 'pc'], ['celeri', 2, 'pc'], ['oignon', 1, 'pc'], ['ail', 3, 'pc'],
      ['concentre_tomate', 2, 'cs'], ['romarin', 1, 'pc'], ['laurier', 2, 'pc'], ['huile_olive', 3, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer la viande en gros morceaux dans l\'huile, réservez.', 'Faites revenir carotte, céleri, oignon et ail hachés, ajoutez le concentré.',
      'Déglacez au vin, ajoutez les tomates, les herbes et la viande. Couvrez et laissez mijoter 3 h à feu très doux.', 'Effilochez la viande dans la sauce. Congelez en portions.'],
    astuce: 'Comptez 80 à 100 g de pâtes sèches par personne au moment de servir.'
  },
  {
    id: 'porc-curry-coco', nom: 'Sauté de porc au curry et lait de coco', cat: 'Viandes', cuisine: 'Fusion', emoji: '🍛',
    desc: 'Porc fondant, poivrons et sauce coco douce, encore meilleur le lendemain.',
    portions: 6, prep: 15, cuisson: 60, diff: 1,
    ing: [['porc_echine', 1000], ['lait_coco', 400, 'ml'], ['tomates_concassees', 400], ['poivron', 2, 'pc'], ['oignon', 2, 'pc'], ['ail', 2, 'pc'], ['gingembre', 15], ['curry', 1, 'cs'],
      ['huile_neutre', 2, 'cs'], ['coriandre', 10], ['riz_blanc', 420], ['sel', 0, 'qs']],
    etapes: ['Faites dorer le porc en cubes dans l\'huile.', 'Ajoutez les oignons, l\'ail, le gingembre et le curry.',
      'Ajoutez les tomates et le lait de coco, laissez mijoter 40 min.', 'Ajoutez les poivrons en lanières 15 min avant la fin. Servez avec le riz et la coriandre.']
  },
  {
    id: 'lasagnes-saumon-epinards', nom: 'Lasagnes au saumon et aux épinards', cat: 'Poissons', cuisine: 'Batch cooking', emoji: '🐟',
    desc: 'Saumon, épinards et béchamel légère, pour varier des lasagnes à la viande.',
    portions: 6, prep: 30, cuisson: 40, diff: 2,
    ing: [['lasagnes', 250], ['saumon', 500], ['epinards', 500], ['beurre', 40], ['farine', 40], ['lait_demi', 700, 'ml'], ['emmental', 100], ['citron', 0.5, 'pc'], ['aneth', 5],
      ['muscade', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Faites tomber les épinards et pressez-les. Coupez le saumon cru en petits dés.', 'Béchamel : roux beurre-farine, lait, muscade, zeste de citron et aneth.',
      'Alternez lasagnes, béchamel, épinards et saumon.', 'Terminez par béchamel et fromage, enfournez 40 min à 180 °C.']
  }
]);
