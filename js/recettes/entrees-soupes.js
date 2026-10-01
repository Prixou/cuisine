/* Entrées & salades, Soupes, Apéro */
window.RECETTES = (window.RECETTES || []).concat([
  // ================= ENTRÉES & SALADES =================
  {
    id: 'salade-nicoise', nom: 'Salade niçoise', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🥗',
    desc: 'La salade complète du sud : thon, œufs durs, légumes croquants et olives.',
    portions: 4, prep: 20, cuisson: 10, diff: 1,
    ing: [
      ['thon_boite', 280], ['oeuf', 4, 'pc'], ['tomate', 4, 'pc'], ['haricots_verts', 200],
      ['salade', 150], ['poivron', 1, 'pc'], ['oignon_rouge', 0.5, 'pc'], ['olives', 60, 'g', 'Olives noires'],
      ['huile_olive', 4, 'cs'], ['vinaigre', 1, 'cs'], ['moutarde', 1, 'cc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les œufs 10 min dans l\'eau bouillante, refroidissez-les puis écalez-les.',
      'Faites cuire les haricots verts 6 à 8 min à l\'eau salée : ils doivent rester croquants. Plongez-les dans l\'eau glacée.',
      'Coupez les tomates en quartiers, le poivron en lanières et l\'oignon en fines rondelles.',
      'Préparez la vinaigrette : moutarde, vinaigre, sel, poivre puis l\'huile d\'olive en fouettant.',
      'Disposez la salade, les légumes, le thon émietté, les œufs en quartiers et les olives. Arrosez de vinaigrette.'
    ],
    astuce: 'Ajoutez quelques filets d\'anchois pour une version plus authentique.'
  },
  {
    id: 'salade-cesar', nom: 'Salade César au poulet', cat: 'Entrées & salades', cuisine: 'Américaine', emoji: '🥬',
    desc: 'Romaine croquante, poulet doré, croûtons et sauce César allégée au yaourt.',
    portions: 4, prep: 20, cuisson: 15, diff: 1,
    ing: [
      ['poulet_blanc', 500], ['salade', 300, 'g', 'Laitue romaine'], ['pain', 120, 'g', 'Pain rassis (croûtons)'],
      ['parmesan', 50], ['huile_olive', 2, 'cs'], ['yaourt_grec', 100], ['mayonnaise', 2, 'cs'],
      ['citron', 0.5, 'pc'], ['ail', 1, 'pc'], ['moutarde', 1, 'cc'], ['sauce_worcestershire', 1, 'cc'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Coupez le pain en cubes, mélangez-les avec 1 c. à soupe d\'huile et faites-les dorer 8 min au four à 200 °C.',
      'Faites cuire les blancs de poulet à la poêle avec le reste d\'huile, 6 min de chaque côté. Laissez tiédir et tranchez.',
      'Sauce : mixez le yaourt, la mayonnaise, l\'ail, le jus de citron, la moutarde, la sauce Worcestershire et la moitié du parmesan râpé.',
      'Mélangez la romaine coupée avec la sauce, ajoutez le poulet, les croûtons et le reste de parmesan en copeaux.'
    ]
  },
  {
    id: 'taboule-libanais', nom: 'Taboulé libanais', cat: 'Entrées & salades', cuisine: 'Libanaise', emoji: '🌿',
    desc: 'Le vrai taboulé : beaucoup d\'herbes, peu de boulgour, beaucoup de citron.',
    portions: 4, prep: 25, cuisson: 0, diff: 1,
    ing: [
      ['boulgour', 80, 'g', 'Boulgour fin'], ['persil', 150, 'g', 'Persil plat'], ['menthe', 30], ['tomate', 4, 'pc'],
      ['oignon_nouveau', 3, 'pc'], ['citron', 2, 'pc'], ['huile_olive', 5, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Rincez le boulgour et laissez-le gonfler 15 min dans le jus des citrons.',
      'Lavez, séchez et ciselez finement le persil et la menthe (sans les grosses tiges).',
      'Coupez les tomates en petits dés et émincez les oignons nouveaux.',
      'Mélangez le tout avec l\'huile d\'olive, salez, poivrez. Servez frais.'
    ]
  },
  {
    id: 'salade-grecque', nom: 'Salade grecque', cat: 'Entrées & salades', cuisine: 'Grecque', emoji: '🫒',
    desc: 'Horiatiki : tomates, concombre, poivron, oignon rouge, feta et olives kalamata.',
    portions: 4, prep: 15, cuisson: 0, diff: 1,
    ing: [
      ['tomate', 4, 'pc'], ['concombre', 1, 'pc'], ['poivron', 1, 'pc', 'Poivron vert'], ['oignon_rouge', 1, 'pc'],
      ['feta', 200], ['olives', 80, 'g', 'Olives kalamata'], ['huile_olive', 4, 'cs'], ['vinaigre', 1, 'cs', 'Vinaigre de vin rouge'],
      ['origan', 1, 'cc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Coupez les tomates en quartiers, le concombre en demi-rondelles, le poivron en lanières et l\'oignon en fines rondelles.',
      'Mélangez les légumes avec les olives, le vinaigre, un peu de sel.',
      'Posez la feta en bloc ou en gros morceaux dessus, arrosez d\'huile d\'olive et saupoudrez d\'origan.'
    ]
  },
  {
    id: 'salade-lentilles', nom: 'Salade de lentilles tiède', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🫘',
    desc: 'Lentilles vertes, lardons, carottes et vinaigrette moutardée.',
    portions: 4, prep: 15, cuisson: 25, diff: 1,
    ing: [
      ['lentilles_vertes', 250], ['lardons', 150], ['carotte', 2, 'pc'], ['echalote', 2, 'pc'], ['persil', 20],
      ['huile_olive', 3, 'cs'], ['vinaigre', 2, 'cs'], ['moutarde', 1, 'cc'], ['thym', 2, 'pc'], ['laurier', 1, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les lentilles 20 à 25 min dans 3 fois leur volume d\'eau froide avec le thym, le laurier et les carottes en dés. Salez en fin de cuisson.',
      'Faites dorer les lardons à sec dans une poêle.',
      'Préparez la vinaigrette avec la moutarde, le vinaigre, l\'huile et les échalotes ciselées.',
      'Égouttez les lentilles, mélangez-les tièdes avec la vinaigrette, les lardons et le persil.'
    ],
    astuce: 'Version végétarienne : remplacez les lardons par des dés de feta ou des noix.'
  },
  {
    id: 'caprese', nom: 'Salade caprese', cat: 'Entrées & salades', cuisine: 'Italienne', emoji: '🍅',
    desc: 'Tomates, mozzarella et basilic : le trio italien.',
    portions: 4, prep: 10, cuisson: 0, diff: 1,
    ing: [
      ['tomate', 4, 'pc'], ['mozzarella', 2, 'pc'], ['basilic', 15], ['huile_olive', 3, 'cs'],
      ['vinaigre_balsamique', 1, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Coupez les tomates et la mozzarella en tranches.',
      'Alternez-les sur un plat avec les feuilles de basilic.',
      'Salez, poivrez, arrosez d\'huile d\'olive et de quelques gouttes de balsamique.'
    ]
  },
  {
    id: 'salade-pates-pesto', nom: 'Salade de pâtes au pesto', cat: 'Entrées & salades', cuisine: 'Italienne', emoji: '🍝',
    desc: 'Fusilli, pesto, tomates cerises, billes de mozzarella et roquette.',
    portions: 4, prep: 15, cuisson: 12, diff: 1,
    ing: [
      ['pates', 300, 'g', 'Fusilli'], ['pesto', 80], ['tomates_cerises', 250], ['mozzarella', 125, 'g', 'Billes de mozzarella'],
      ['roquette', 50], ['pignons', 20], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les pâtes al dente, rincez-les à l\'eau froide et égouttez-les.',
      'Faites griller les pignons à sec quelques minutes.',
      'Mélangez les pâtes avec le pesto, les tomates cerises coupées en deux et la mozzarella.',
      'Ajoutez la roquette et les pignons au moment de servir.'
    ]
  },
  {
    id: 'salade-quinoa', nom: 'Salade de quinoa méditerranéenne', cat: 'Entrées & salades', cuisine: 'Méditerranéenne', emoji: '🥙',
    desc: 'Quinoa, pois chiches, légumes croquants et feta, très rassasiant.',
    portions: 4, prep: 15, cuisson: 15, diff: 1,
    ing: [
      ['quinoa', 200], ['pois_chiches', 240], ['concombre', 1, 'pc'], ['poivron', 1, 'pc'], ['tomates_cerises', 200],
      ['feta', 150], ['persil', 20], ['citron', 1, 'pc'], ['huile_olive', 3, 'cs'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Rincez le quinoa et faites-le cuire 12 à 15 min dans 2 fois son volume d\'eau salée. Laissez refroidir.',
      'Coupez le concombre, le poivron et les tomates en dés. Rincez les pois chiches.',
      'Mélangez le tout avec le jus de citron, l\'huile, le persil ciselé et la feta émiettée.'
    ]
  },
  {
    id: 'coleslaw', nom: 'Coleslaw', cat: 'Entrées & salades', cuisine: 'Américaine', emoji: '🥕',
    desc: 'Salade de chou et carottes à la sauce crémeuse.',
    portions: 6, prep: 15, cuisson: 0, diff: 1,
    ing: [
      ['chou', 400], ['carotte', 2, 'pc'], ['oignon_rouge', 0.5, 'pc'], ['mayonnaise', 4, 'cs'], ['yaourt_nature', 1, 'pc'],
      ['vinaigre', 1, 'cs', 'Vinaigre de cidre'], ['moutarde', 1, 'cc'], ['sucre', 1, 'cc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Émincez très finement le chou, râpez les carottes et ciselez l\'oignon.',
      'Mélangez mayonnaise, yaourt, vinaigre, moutarde, sucre et sel.',
      'Enrobez les légumes de sauce et laissez reposer 30 min au frais avant de servir.'
    ]
  },
  {
    id: 'carottes-rapees', nom: 'Carottes râpées au citron', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🥕',
    desc: 'L\'entrée simple et fraîche par excellence.',
    portions: 4, prep: 10, cuisson: 0, diff: 1,
    ing: [
      ['carotte', 500], ['citron', 1, 'pc'], ['huile_olive', 3, 'cs'], ['moutarde', 1, 'cc'], ['persil', 10], ['sel', 0, 'qs']
    ],
    etapes: [
      'Épluchez et râpez finement les carottes.',
      'Mélangez le jus de citron, la moutarde, le sel puis l\'huile.',
      'Assaisonnez les carottes, parsemez de persil ciselé.'
    ]
  },
  {
    id: 'salade-chevre-chaud', nom: 'Salade de chèvre chaud', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🧀',
    desc: 'Toasts de chèvre gratinés au miel, noix et salade verte.',
    portions: 4, prep: 10, cuisson: 8, diff: 1,
    ing: [
      ['salade', 200], ['pain', 120, 'g', 'Baguette (8 tranches)'], ['chevre', 200], ['miel', 2, 'cs'], ['noix', 40],
      ['huile_olive', 3, 'cs'], ['vinaigre_balsamique', 1, 'cs'], ['moutarde', 1, 'cc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Préchauffez le four en mode grill. Posez une rondelle de chèvre sur chaque tranche de pain, ajoutez un filet de miel.',
      'Enfournez 5 à 8 min jusqu\'à ce que le chèvre dore.',
      'Préparez la vinaigrette, assaisonnez la salade et ajoutez les noix concassées.',
      'Servez les toasts chauds sur la salade.'
    ]
  },
  {
    id: 'salade-thai-boeuf', nom: 'Salade thaï au bœuf', cat: 'Entrées & salades', cuisine: 'Thaïlandaise', emoji: '🌶️',
    desc: 'Bœuf saisi, herbes fraîches, cacahuètes et sauce citron vert-nuoc-mâm.',
    portions: 4, prep: 20, cuisson: 6, diff: 2,
    ing: [
      ['boeuf_steak', 500], ['salade', 150], ['concombre', 1, 'pc'], ['oignon_rouge', 1, 'pc'], ['coriandre', 20], ['menthe', 15],
      ['cacahuetes', 40], ['citron_vert', 2, 'pc'], ['nuoc_mam', 3, 'cs'], ['sucre', 1, 'cs'], ['piment', 1, 'pc'], ['huile_neutre', 1, 'cs']
    ],
    etapes: [
      'Saisissez la viande 2 à 3 min de chaque côté dans l\'huile très chaude. Laissez reposer 5 min puis tranchez finement.',
      'Sauce : mélangez le jus des citrons verts, le nuoc-mâm, le sucre et le piment émincé.',
      'Émincez le concombre et l\'oignon, effeuillez les herbes, concassez les cacahuètes.',
      'Mélangez salade, légumes, herbes et bœuf avec la sauce. Parsemez de cacahuètes.'
    ]
  },
  {
    id: 'oeufs-mimosa', nom: 'Œufs mimosa', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🥚',
    desc: 'Le grand classique des entrées, à préparer à l\'avance.',
    portions: 4, prep: 15, cuisson: 10, diff: 1,
    ing: [
      ['oeuf', 8, 'pc'], ['mayonnaise', 4, 'cs'], ['moutarde', 1, 'cc'], ['ciboulette', 5], ['paprika', 1, 'pincee'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites cuire les œufs 10 min dans l\'eau bouillante, refroidissez-les et écalez-les.',
      'Coupez-les en deux, retirez les jaunes.',
      'Écrasez les jaunes (en gardant 2 de côté) avec la mayonnaise, la moutarde et la ciboulette ciselée.',
      'Garnissez les blancs, puis émiettez les jaunes restants par-dessus. Saupoudrez de paprika.'
    ]
  },
  {
    id: 'rouleaux-printemps', nom: 'Rouleaux de printemps', cat: 'Entrées & salades', cuisine: 'Vietnamienne', emoji: '🥢',
    desc: 'Crevettes, vermicelles et herbes fraîches roulés dans une galette de riz, sauce cacahuète.',
    portions: 4, prep: 30, cuisson: 5, diff: 2,
    ing: [
      ['feuilles_riz', 8, 'pc'], ['crevettes', 200, 'g', 'Crevettes cuites'], ['nouilles_riz', 80, 'g', 'Vermicelles de riz'],
      ['salade', 60], ['carotte', 1, 'pc'], ['menthe', 10], ['coriandre', 10],
      ['beurre_cacahuete', 40], ['sauce_soja', 1, 'cs'], ['citron_vert', 0.5, 'pc'], ['eau', 3, 'cs']
    ],
    etapes: [
      'Faites tremper les vermicelles 5 min dans l\'eau bouillante, rincez et égouttez.',
      'Râpez la carotte, coupez les crevettes en deux dans l\'épaisseur.',
      'Trempez une galette quelques secondes dans l\'eau tiède, posez-la à plat. Garnissez de salade, vermicelles, carotte, herbes et crevettes. Roulez en repliant les bords.',
      'Sauce : mélangez le beurre de cacahuète, la sauce soja, le jus de citron vert et l\'eau chaude.'
    ]
  },
  {
    id: 'tartare-saumon-avocat', nom: 'Tartare de saumon à l\'avocat', cat: 'Entrées & salades', cuisine: 'Fusion', emoji: '🐟',
    desc: 'Saumon cru, avocat, citron vert et ciboulette. Frais et rapide.',
    portions: 4, prep: 20, cuisson: 0, diff: 1,
    ing: [
      ['saumon', 400, 'g', 'Saumon extra-frais (qualité sashimi)'], ['avocat', 2, 'pc'], ['citron_vert', 2, 'pc'], ['echalote', 1, 'pc'],
      ['ciboulette', 5], ['huile_olive', 2, 'cs'], ['sauce_soja', 1, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Coupez le saumon (sans peau) en petits dés, l\'avocat aussi.',
      'Arrosez l\'avocat de la moitié du jus de citron vert.',
      'Mélangez le saumon avec l\'échalote ciselée, la ciboulette, l\'huile, la sauce soja et le reste du jus.',
      'Dressez dans un cercle : une couche d\'avocat puis le saumon. Servez immédiatement.'
    ]
  },
  {
    id: 'poireaux-vinaigrette', nom: 'Poireaux vinaigrette', cat: 'Entrées & salades', cuisine: 'Française', emoji: '🥬',
    desc: 'Poireaux fondants, vinaigrette moutardée et œuf mimosa.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [
      ['poireau', 6, 'pc'], ['oeuf', 2, 'pc'], ['echalote', 1, 'pc'], ['moutarde', 1, 'cs'], ['vinaigre', 2, 'cs'],
      ['huile_neutre', 4, 'cs'], ['ciboulette', 5], ['sel', 0, 'qs']
    ],
    etapes: [
      'Nettoyez les poireaux, gardez le blanc et le vert tendre. Faites-les cuire 15 à 20 min à l\'eau salée ou à la vapeur.',
      'Faites cuire les œufs 10 min, écalez-les.',
      'Vinaigrette : moutarde, vinaigre, sel, échalote ciselée puis l\'huile.',
      'Nappez les poireaux tièdes de vinaigrette, émiettez les œufs et la ciboulette dessus.'
    ]
  },

  // ================= SOUPES =================
  {
    id: 'gaspacho', nom: 'Gaspacho andalou', cat: 'Soupes', cuisine: 'Espagnole', emoji: '🍅',
    desc: 'Soupe froide de tomates, concombre et poivron. Parfait l\'été.',
    portions: 4, prep: 15, cuisson: 0, diff: 1,
    ing: [
      ['tomate', 1000, 'g', 'Tomates bien mûres'], ['concombre', 0.5, 'pc'], ['poivron', 1, 'pc'], ['oignon_rouge', 0.5, 'pc'],
      ['ail', 1, 'pc'], ['pain', 40, 'g', 'Pain rassis'], ['huile_olive', 4, 'cs'], ['vinaigre', 2, 'cs', 'Vinaigre de Xérès'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Coupez grossièrement tous les légumes.',
      'Mixez-les longuement avec le pain trempé, l\'ail, le vinaigre et le sel.',
      'Ajoutez l\'huile d\'olive en filet en mixant. Passez au chinois pour une texture lisse.',
      'Réservez au moins 2 h au frais. Servez avec quelques dés de légumes.'
    ]
  },
  {
    id: 'veloute-butternut', nom: 'Velouté de butternut', cat: 'Soupes', cuisine: 'Française', emoji: '🎃',
    desc: 'Velouté doux et réconfortant, une touche de muscade.',
    portions: 4, prep: 15, cuisson: 30, diff: 1,
    ing: [
      ['butternut', 1000, 'g', 'Courge butternut (chair)'], ['pomme_de_terre', 1, 'pc'], ['oignon', 1, 'pc'], ['bouillon', 800, 'ml'],
      ['creme_15', 100, 'ml'], ['huile_olive', 1, 'cs'], ['muscade', 1, 'pincee'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Épluchez et coupez la courge, la pomme de terre et l\'oignon en morceaux.',
      'Faites revenir l\'oignon dans l\'huile 3 min, ajoutez les légumes et le bouillon.',
      'Laissez cuire 25 min à couvert.',
      'Mixez avec la crème et la muscade. Rectifiez l\'assaisonnement.'
    ],
    astuce: 'Parsemez de graines de courge grillées et d\'un filet d\'huile de noisette.'
  },
  {
    id: 'soupe-oignon', nom: 'Soupe à l\'oignon gratinée', cat: 'Soupes', cuisine: 'Française', emoji: '🧅',
    desc: 'Oignons longuement caramélisés, croûtons et fromage gratiné.',
    portions: 4, prep: 15, cuisson: 60, diff: 2,
    ing: [
      ['oignon', 800], ['beurre', 40], ['farine', 1, 'cs'], ['vin_blanc', 150, 'ml'], ['bouillon', 1200, 'ml', 'Bouillon de bœuf'],
      ['pain', 120, 'g', 'Baguette (tranches)'], ['comte', 120, 'g', 'Comté râpé'], ['thym', 1, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Émincez finement les oignons. Faites-les fondre dans le beurre à feu moyen 30 à 40 min en remuant, jusqu\'à ce qu\'ils soient bien dorés.',
      'Saupoudrez de farine, mélangez 1 min, puis déglacez au vin blanc.',
      'Ajoutez le bouillon et le thym, laissez mijoter 20 min.',
      'Versez dans des bols allant au four, posez les tranches de pain grillées, couvrez de fromage et gratinez 5 min sous le grill.'
    ]
  },
  {
    id: 'minestrone', nom: 'Minestrone', cat: 'Soupes', cuisine: 'Italienne', emoji: '🥣',
    desc: 'Soupe italienne complète aux légumes, haricots et petites pâtes.',
    portions: 6, prep: 20, cuisson: 35, diff: 1,
    ing: [
      ['carotte', 2, 'pc'], ['courgette', 1, 'pc'], ['celeri', 2, 'pc'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'],
      ['tomates_concassees', 400], ['haricots_blancs', 250], ['pates', 100, 'g', 'Petites pâtes'], ['bouillon', 1500, 'ml'],
      ['huile_olive', 2, 'cs'], ['parmesan', 40], ['basilic', 10], ['sel', 0, 'qs']
    ],
    etapes: [
      'Coupez tous les légumes en petits dés.',
      'Faites revenir l\'oignon, l\'ail, la carotte et le céleri dans l\'huile 5 min.',
      'Ajoutez la courgette, les tomates et le bouillon. Laissez mijoter 20 min.',
      'Ajoutez les haricots et les pâtes, poursuivez la cuisson selon le temps indiqué sur le paquet.',
      'Servez avec le parmesan râpé et le basilic.'
    ]
  },
  {
    id: 'soupe-lentilles-corail', nom: 'Soupe de lentilles corail au lait de coco', cat: 'Soupes', cuisine: 'Indienne', emoji: '🥥',
    desc: 'Soupe épicée, onctueuse et riche en protéines végétales.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [
      ['lentilles_corail', 250], ['carotte', 2, 'pc'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['gingembre', 10],
      ['tomates_concassees', 400], ['lait_coco', 200, 'ml'], ['bouillon', 1000, 'ml'], ['cumin', 1, 'cc'], ['curcuma', 1, 'cc'],
      ['huile_neutre', 1, 'cs'], ['citron', 0.5, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'oignon, l\'ail et le gingembre dans l\'huile avec les épices 2 min.',
      'Ajoutez les carottes en dés, les lentilles rincées, les tomates et le bouillon.',
      'Laissez cuire 20 min jusqu\'à ce que les lentilles soient fondantes.',
      'Ajoutez le lait de coco, mixez et relevez d\'un filet de citron.'
    ]
  },
  {
    id: 'veloute-poireaux', nom: 'Velouté poireaux-pommes de terre', cat: 'Soupes', cuisine: 'Française', emoji: '🥔',
    desc: 'La soupe de grand-mère, douce et crémeuse.',
    portions: 4, prep: 15, cuisson: 30, diff: 1,
    ing: [
      ['poireau', 3, 'pc'], ['pomme_de_terre', 500], ['oignon', 1, 'pc'], ['beurre', 20], ['bouillon', 1000, 'ml'],
      ['creme_15', 100, 'ml'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Lavez et émincez les poireaux, coupez les pommes de terre en cubes.',
      'Faites fondre l\'oignon et les poireaux dans le beurre 5 min.',
      'Ajoutez les pommes de terre et le bouillon, laissez cuire 25 min.',
      'Mixez avec la crème, salez et poivrez.'
    ]
  },
  {
    id: 'veloute-champignons', nom: 'Velouté de champignons', cat: 'Soupes', cuisine: 'Française', emoji: '🍄',
    desc: 'Velouté boisé et onctueux.',
    portions: 4, prep: 15, cuisson: 25, diff: 1,
    ing: [
      ['champignons', 600], ['oignon', 1, 'pc'], ['ail', 1, 'pc'], ['pomme_de_terre', 1, 'pc'], ['beurre', 20],
      ['bouillon', 800, 'ml'], ['creme_15', 150, 'ml'], ['persil', 10], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'oignon et l\'ail dans le beurre, ajoutez les champignons émincés et faites-les dorer 8 min.',
      'Ajoutez la pomme de terre en dés et le bouillon, laissez cuire 15 min.',
      'Mixez avec la crème, servez avec du persil ciselé.'
    ]
  },
  {
    id: 'veloute-brocoli', nom: 'Velouté de brocoli', cat: 'Soupes', cuisine: 'Française', emoji: '🥦',
    desc: 'Un velouté vert, léger et plein de fibres.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [
      ['brocoli', 600], ['pomme_de_terre', 1, 'pc'], ['oignon', 1, 'pc'], ['bouillon', 900, 'ml'], ['fromage_frais', 60],
      ['huile_olive', 1, 'cs'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'oignon dans l\'huile 3 min.',
      'Ajoutez les fleurettes de brocoli, la pomme de terre en dés et le bouillon. Cuisez 15 min.',
      'Mixez avec le fromage frais. Rectifiez l\'assaisonnement.'
    ]
  },
  {
    id: 'veloute-carotte-coco', nom: 'Velouté carotte-coco au curry', cat: 'Soupes', cuisine: 'Fusion', emoji: '🥕',
    desc: 'Carottes, gingembre et lait de coco, légèrement épicé.',
    portions: 4, prep: 15, cuisson: 25, diff: 1,
    ing: [
      ['carotte', 800], ['oignon', 1, 'pc'], ['gingembre', 15], ['lait_coco', 200, 'ml'], ['bouillon', 800, 'ml'],
      ['curry', 1, 'cc'], ['huile_neutre', 1, 'cs'], ['coriandre', 5], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir l\'oignon, le gingembre et le curry dans l\'huile 2 min.',
      'Ajoutez les carottes en rondelles et le bouillon, cuisez 20 min.',
      'Mixez avec le lait de coco, servez avec la coriandre.'
    ]
  },
  {
    id: 'pho-boeuf', nom: 'Phở au bœuf', cat: 'Soupes', cuisine: 'Vietnamienne', emoji: '🍜',
    desc: 'Bouillon parfumé à l\'anis et cannelle, nouilles de riz et bœuf cru saisi par le bouillon.',
    portions: 4, prep: 25, cuisson: 45, diff: 2,
    ing: [
      ['nouilles_riz', 300], ['boeuf_steak', 400, 'g', 'Bœuf (rumsteck) très finement tranché'], ['bouillon', 2000, 'ml', 'Bouillon de bœuf'],
      ['oignon', 1, 'pc'], ['gingembre', 30], ['cinq_epices', 1, 'cc'], ['nuoc_mam', 4, 'cs'], ['sucre', 1, 'cc'],
      ['pousses_soja', 150], ['coriandre', 20], ['basilic', 15, 'g', 'Basilic thaï'], ['citron_vert', 2, 'pc'],
      ['piment', 1, 'pc'], ['oignon_nouveau', 2, 'pc']
    ],
    etapes: [
      'Coupez l\'oignon et le gingembre en deux et faites-les noircir à sec dans une poêle.',
      'Ajoutez-les au bouillon avec les épices, le nuoc-mâm et le sucre. Laissez frémir 40 min puis filtrez.',
      'Faites tremper les nouilles selon le paquet et répartissez-les dans les bols.',
      'Disposez le bœuf cru tranché très finement sur les nouilles, versez le bouillon bouillant dessus.',
      'Servez avec les pousses de soja, les herbes, l\'oignon nouveau, le piment et le citron vert.'
    ]
  },
  {
    id: 'ramen-poulet', nom: 'Ramen au poulet', cat: 'Soupes', cuisine: 'Japonaise', emoji: '🍜',
    desc: 'Bouillon soja-gingembre, nouilles, poulet, œuf mollet et légumes.',
    portions: 4, prep: 20, cuisson: 25, diff: 2,
    ing: [
      ['nouilles_ramen', 320], ['poulet_blanc', 400], ['oeuf', 4, 'pc'], ['bouillon', 1600, 'ml', 'Bouillon de volaille'],
      ['sauce_soja', 4, 'cs'], ['champignons_shiitake', 150], ['chou_chinois', 2, 'pc'], ['mais', 100],
      ['oignon_nouveau', 3, 'pc'], ['gingembre', 20], ['ail', 2, 'pc'], ['huile_sesame', 1, 'cs']
    ],
    etapes: [
      'Faites cuire les œufs 6 min 30 dans l\'eau bouillante, refroidissez-les et écalez-les.',
      'Faites chauffer le bouillon avec l\'ail, le gingembre en tranches et la sauce soja. Pochez-y les blancs de poulet 12 min puis tranchez-les.',
      'Ajoutez les champignons émincés et le pak choï coupé en deux, cuisez 3 min.',
      'Faites cuire les nouilles à part, répartissez-les dans les bols.',
      'Versez le bouillon, ajoutez le poulet, les légumes, le maïs, les œufs coupés en deux, l\'oignon nouveau et un filet d\'huile de sésame.'
    ]
  },
  {
    id: 'harira', nom: 'Harira', cat: 'Soupes', cuisine: 'Marocaine', emoji: '🍲',
    desc: 'Soupe marocaine complète : agneau, lentilles, pois chiches, tomates et épices.',
    portions: 6, prep: 20, cuisson: 60, diff: 2,
    ing: [
      ['agneau_epaule', 300], ['lentilles_vertes', 100], ['pois_chiches', 240], ['tomates_concassees', 800], ['oignon', 1, 'pc'],
      ['celeri', 2, 'pc'], ['coriandre', 20], ['persil', 20], ['farine', 2, 'cs'], ['pates', 50, 'g', 'Vermicelles'],
      ['cumin', 1, 'cc'], ['curcuma', 1, 'cc'], ['gingembre_poudre', 1, 'cc'], ['cannelle', 0.5, 'cc'],
      ['bouillon', 1500, 'ml'], ['huile_olive', 2, 'cs'], ['citron', 1, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Faites revenir la viande en petits dés avec l\'oignon, le céleri et les épices dans l\'huile.',
      'Ajoutez les tomates, les lentilles, la moitié des herbes et le bouillon. Laissez mijoter 45 min.',
      'Ajoutez les pois chiches et les vermicelles, cuisez 5 min.',
      'Délayez la farine dans un peu d\'eau froide, versez en remuant pour épaissir. Ajoutez le reste des herbes.',
      'Servez avec un quartier de citron.'
    ]
  },
  {
    id: 'soupe-tomate', nom: 'Soupe de tomates rôties', cat: 'Soupes', cuisine: 'Française', emoji: '🍅',
    desc: 'Tomates et poivrons rôtis au four puis mixés, intense en goût.',
    portions: 4, prep: 10, cuisson: 40, diff: 1,
    ing: [
      ['tomate', 1000], ['poivron', 1, 'pc'], ['oignon', 1, 'pc'], ['ail', 3, 'pc'], ['huile_olive', 2, 'cs'],
      ['bouillon', 500, 'ml'], ['basilic', 10], ['sucre', 1, 'cc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Coupez tomates, poivron et oignon en morceaux, ajoutez l\'ail en chemise. Arrosez d\'huile, salez.',
      'Rôtissez 35 min à 200 °C.',
      'Mixez avec l\'ail pelé, le bouillon chaud, le sucre et le basilic.'
    ]
  },

  // ================= APÉRO =================
  {
    id: 'guacamole', nom: 'Guacamole', cat: 'Apéro', cuisine: 'Mexicaine', emoji: '🥑',
    desc: 'Avocats écrasés, citron vert, coriandre et une pointe de piment.',
    portions: 4, prep: 10, cuisson: 0, diff: 1,
    ing: [
      ['avocat', 3, 'pc'], ['oignon_rouge', 0.5, 'pc'], ['tomate', 1, 'pc'], ['citron_vert', 1, 'pc'],
      ['coriandre', 10], ['piment', 0.5, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Écrasez la chair des avocats à la fourchette avec le jus de citron vert.',
      'Ajoutez l\'oignon et le piment finement hachés, la tomate en petits dés et la coriandre ciselée.',
      'Salez, mélangez et servez aussitôt.'
    ]
  },
  {
    id: 'houmous', nom: 'Houmous', cat: 'Apéro', cuisine: 'Libanaise', emoji: '🫘',
    desc: 'Purée de pois chiches au tahini, ultra crémeuse.',
    portions: 6, prep: 10, cuisson: 0, diff: 1,
    ing: [
      ['pois_chiches', 480], ['tahini', 60], ['citron', 1, 'pc'], ['ail', 1, 'pc'], ['huile_olive', 3, 'cs'],
      ['cumin', 0.5, 'cc'], ['eau', 60, 'ml', 'Eau glacée'], ['paprika', 1, 'pincee'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Égouttez et rincez les pois chiches (gardez un peu de jus).',
      'Mixez-les avec le tahini, le jus de citron, l\'ail, le cumin et le sel.',
      'Ajoutez l\'eau glacée petit à petit en mixant jusqu\'à obtenir une texture très lisse.',
      'Servez avec un filet d\'huile d\'olive et le paprika.'
    ]
  },
  {
    id: 'tzatziki', nom: 'Tzatziki', cat: 'Apéro', cuisine: 'Grecque', emoji: '🥒',
    desc: 'Yaourt grec, concombre, ail et aneth.',
    portions: 4, prep: 10, cuisson: 0, diff: 1,
    ing: [
      ['yaourt_grec', 400], ['concombre', 1, 'pc'], ['ail', 1, 'pc'], ['aneth', 10], ['huile_olive', 1, 'cs'],
      ['citron', 0.5, 'pc'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Râpez le concombre, salez-le et laissez dégorger 10 min. Pressez-le pour retirer l\'eau.',
      'Mélangez avec le yaourt, l\'ail râpé, l\'aneth, le jus de citron et l\'huile.',
      'Réservez au frais au moins 30 min.'
    ]
  },
  {
    id: 'baba-ganoush', nom: 'Baba ganoush', cat: 'Apéro', cuisine: 'Libanaise', emoji: '🍆',
    desc: 'Caviar d\'aubergine fumé au tahini.',
    portions: 4, prep: 10, cuisson: 40, diff: 1,
    ing: [
      ['aubergine', 2, 'pc'], ['tahini', 40], ['citron', 1, 'pc'], ['ail', 1, 'pc'], ['huile_olive', 2, 'cs'],
      ['persil', 5], ['cumin', 1, 'pincee'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Piquez les aubergines et faites-les rôtir 40 min à 220 °C (ou directement sur la flamme pour un goût fumé).',
      'Récupérez la chair et égouttez-la 10 min.',
      'Écrasez-la avec le tahini, l\'ail, le citron, le cumin et le sel.',
      'Servez avec l\'huile d\'olive et le persil.'
    ]
  },
  {
    id: 'tapenade', nom: 'Tapenade noire', cat: 'Apéro', cuisine: 'Provençale', emoji: '🫒',
    desc: 'Olives noires, câpres et huile d\'olive, à tartiner.',
    portions: 6, prep: 10, cuisson: 0, diff: 1,
    ing: [
      ['olives', 200, 'g', 'Olives noires dénoyautées'], ['capres', 20], ['ail', 1, 'pc'], ['huile_olive', 4, 'cs'],
      ['citron', 0.5, 'pc'], ['thym', 1, 'pc']
    ],
    etapes: [
      'Mixez les olives, les câpres, l\'ail et le thym effeuillé.',
      'Ajoutez l\'huile en filet et le jus de citron, mixez par à-coups pour garder un peu de texture.'
    ],
    astuce: 'Traditionnellement on ajoute 3 ou 4 filets d\'anchois.'
  },
  {
    id: 'rillettes-thon', nom: 'Rillettes de thon', cat: 'Apéro', cuisine: 'Française', emoji: '🐟',
    desc: 'Prête en 5 minutes, parfaite sur des toasts.',
    portions: 4, prep: 5, cuisson: 0, diff: 1,
    ing: [
      ['thon_boite', 200], ['fromage_frais', 100], ['citron', 0.5, 'pc'], ['ciboulette', 5], ['moutarde', 1, 'cc'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Émiettez le thon égoutté.',
      'Mélangez-le avec le fromage frais, la moutarde, le jus de citron et la ciboulette ciselée.',
      'Poivrez et réservez au frais.'
    ]
  },
  {
    id: 'bruschetta', nom: 'Bruschetta tomate-basilic', cat: 'Apéro', cuisine: 'Italienne', emoji: '🍞',
    desc: 'Pain grillé frotté à l\'ail, tomates fraîches et basilic.',
    portions: 4, prep: 10, cuisson: 5, diff: 1,
    ing: [
      ['pain_campagne', 8, 'pc'], ['tomate', 4, 'pc'], ['ail', 1, 'pc'], ['basilic', 10], ['huile_olive', 3, 'cs'], ['sel', 0, 'qs']
    ],
    etapes: [
      'Coupez les tomates en petits dés, mélangez-les avec le basilic ciselé, 2 c. à soupe d\'huile et le sel.',
      'Grillez les tranches de pain, frottez-les avec la gousse d\'ail coupée.',
      'Garnissez de tomates et d\'un filet d\'huile.'
    ]
  },
  {
    id: 'gougeres', nom: 'Gougères au comté', cat: 'Apéro', cuisine: 'Française', emoji: '🧀',
    desc: 'Petits choux au fromage, moelleux et dorés (environ 30 pièces).',
    portions: 8, prep: 20, cuisson: 25, diff: 2,
    ing: [
      ['eau', 250, 'ml'], ['beurre', 100], ['farine', 150], ['oeuf', 4, 'pc'], ['comte', 120], ['sel', 1, 'cc'], ['muscade', 1, 'pincee']
    ],
    etapes: [
      'Portez à ébullition l\'eau, le beurre et le sel. Hors du feu, versez la farine d\'un coup et mélangez.',
      'Remettez sur feu doux et desséchez la pâte 1 min en remuant.',
      'Hors du feu, incorporez les œufs un à un, puis 100 g de fromage râpé et la muscade.',
      'Formez des petites boules sur une plaque, parsemez du reste de fromage.',
      'Enfournez 25 min à 190 °C sans ouvrir le four.'
    ]
  },
  {
    id: 'cake-sale', nom: 'Cake salé jambon-olives', cat: 'Apéro', cuisine: 'Française', emoji: '🍞',
    desc: 'Le cake d\'apéro facile, à couper en cubes.',
    portions: 8, prep: 15, cuisson: 45, diff: 1,
    ing: [
      ['farine', 200], ['oeuf', 3, 'pc'], ['huile_olive', 100, 'ml'], ['lait_demi', 125, 'ml'], ['emmental', 100],
      ['jambon_blanc', 150], ['olives', 100, 'g', 'Olives vertes'], ['levure_chimique', 1, 'pc'], ['sel', 1, 'pincee'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Préchauffez le four à 180 °C.',
      'Fouettez les œufs avec la farine et la levure, puis ajoutez l\'huile et le lait chaud.',
      'Incorporez le fromage, le jambon en dés et les olives coupées.',
      'Versez dans un moule à cake beurré et enfournez 45 min.'
    ]
  },
  {
    id: 'rillettes-maquereau', nom: 'Rillettes de maquereau', cat: 'Apéro', cuisine: 'Française', emoji: '🐟',
    desc: 'Riches en oméga-3, crémeuses et citronnées.',
    portions: 4, prep: 10, cuisson: 0, diff: 1,
    ing: [
      ['maquereau', 250, 'g', 'Maquereau fumé ou cuit'], ['fromage_frais', 100], ['citron', 0.5, 'pc'], ['ciboulette', 5],
      ['moutarde', 1, 'cc'], ['poivre', 0, 'qs']
    ],
    etapes: [
      'Retirez la peau et les arêtes du maquereau, émiettez-le.',
      'Mélangez avec le fromage frais, la moutarde, le citron et la ciboulette.',
      'Réservez au frais et servez sur du pain grillé.'
    ]
  }
]);
