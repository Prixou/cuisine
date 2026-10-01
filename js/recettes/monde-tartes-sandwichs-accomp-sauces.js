/* Lot 2 — Tartes & pizzas, Burgers & sandwichs, Accompagnements, Sauces & bases */
window.RECETTES = (window.RECETTES || []).concat([
  // ================= TARTES & PIZZAS =================
  {
    id: 'pissaladiere', nom: 'Pissaladière', cat: 'Tartes & pizzas', cuisine: 'Niçoise', emoji: '🧅',
    desc: 'Pâte à pain, oignons confits, anchois et olives noires.',
    portions: 6, prep: 20, cuisson: 70, diff: 1,
    ing: [['pate_pizza', 1, 'pc'], ['oignon', 1000], ['anchois', 12, 'pc'], ['olives', 30, 'g', 'Olives noires de Nice'], ['huile_olive', 4, 'cs'], ['thym', 2, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Faites confire les oignons émincés dans l\'huile avec le thym, 45 min à feu doux, sans coloration.', 'Étalez la pâte sur une plaque, garnissez d\'oignons.',
      'Disposez les anchois en croisillons et les olives.', 'Enfournez 25 min à 210 °C.']
  },
  {
    id: 'quiche-saumon-epinards', nom: 'Quiche saumon-épinards', cat: 'Tartes & pizzas', cuisine: 'Française', emoji: '🥧',
    desc: 'Saumon et épinards dans un appareil crémeux.',
    portions: 6, prep: 20, cuisson: 40, diff: 1,
    ing: [['pate_brisee', 1, 'pc'], ['saumon', 250], ['epinards', 300], ['oeuf', 3, 'pc'], ['creme_15', 200, 'ml'], ['lait_demi', 100, 'ml'], ['muscade', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Faites tomber les épinards et pressez-les.', 'Foncez le moule, répartissez les épinards et le saumon en dés.',
      'Battez les œufs avec la crème, le lait, la muscade, sel et poivre. Versez.', 'Enfournez 35 à 40 min à 190 °C.']
  },
  {
    id: 'pizza-quatre-fromages', nom: 'Pizza quatre fromages', cat: 'Tartes & pizzas', cuisine: 'Italienne', emoji: '🍕',
    desc: 'Base crème, mozzarella, gorgonzola, chèvre et parmesan.',
    portions: 2, prep: 15, cuisson: 12, diff: 1,
    ing: [['pate_pizza', 1, 'pc'], ['creme_epaisse', 50], ['mozzarella', 1, 'pc'], ['bleu', 50, 'g', 'Gorgonzola'], ['chevre', 50], ['parmesan', 30], ['origan', 1, 'pincee']],
    etapes: ['Préchauffez le four au maximum avec la plaque.', 'Étalez la pâte, tartinez de crème.', 'Répartissez les fromages en morceaux, parsemez d\'origan.', 'Enfournez 10 à 12 min.']
  },
  {
    id: 'calzone', nom: 'Calzone', cat: 'Tartes & pizzas', cuisine: 'Italienne', emoji: '🥟',
    desc: 'Pizza pliée garnie de jambon, champignons, mozzarella et œuf.',
    portions: 2, prep: 15, cuisson: 15, diff: 1,
    ing: [['pate_pizza', 1, 'pc'], ['coulis_tomate', 100], ['jambon_blanc', 2, 'pc'], ['mozzarella', 1, 'pc'], ['champignons', 80], ['oeuf', 1, 'pc'], ['origan', 1, 'pincee']],
    etapes: ['Étalez la pâte en disque. Sur une moitié, étalez le coulis, puis le jambon, les champignons et la mozzarella.', 'Cassez l\'œuf au centre.',
      'Repliez la pâte et soudez bien les bords.', 'Enfournez 15 min à 240 °C.']
  },
  {
    id: 'pizza-vegetarienne', nom: 'Pizza aux légumes grillés', cat: 'Tartes & pizzas', cuisine: 'Italienne', emoji: '🫑',
    desc: 'Courgette, poivron, champignons, oignon rouge et olives.',
    portions: 2, prep: 20, cuisson: 15, diff: 1,
    ing: [['pate_pizza', 1, 'pc'], ['coulis_tomate', 150], ['mozzarella', 1, 'pc'], ['courgette', 0.5, 'pc'], ['poivron', 0.5, 'pc'], ['champignons', 80], ['oignon_rouge', 0.5, 'pc'],
      ['olives', 20], ['huile_olive', 1, 'cs'], ['origan', 1, 'pincee']],
    etapes: ['Faites griller rapidement les légumes émincés dans l\'huile.', 'Étalez la pâte, couvrez de coulis, de mozzarella et de légumes.', 'Ajoutez olives et origan, enfournez 12 min au maximum.']
  },
  {
    id: 'pizza-pepperoni', nom: 'Pizza pepperoni', cat: 'Tartes & pizzas', cuisine: 'Américaine', emoji: '🍕',
    desc: 'La préférée des Américains : tomate, mozzarella et rondelles de pepperoni.',
    portions: 2, prep: 10, cuisson: 12, diff: 1,
    ing: [['pate_pizza', 1, 'pc'], ['coulis_tomate', 150], ['mozzarella', 1, 'pc'], ['chorizo', 70, 'g', 'Pepperoni ou chorizo doux'], ['origan', 1, 'pincee']],
    etapes: ['Préchauffez le four au maximum.', 'Étalez la pâte, couvrez de coulis et de mozzarella.', 'Disposez les rondelles de pepperoni et l\'origan. Enfournez 10 à 12 min.']
  },
  {
    id: 'tarte-oignon', nom: 'Tarte à l\'oignon', cat: 'Tartes & pizzas', cuisine: 'Alsacienne', emoji: '🧅',
    desc: 'Oignons fondants et crème dans une pâte croustillante.',
    portions: 6, prep: 20, cuisson: 60, diff: 1,
    ing: [['pate_brisee', 1, 'pc'], ['oignon', 800], ['beurre', 30], ['oeuf', 3, 'pc'], ['creme_30', 200, 'ml'], ['muscade', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Faites fondre les oignons émincés dans le beurre 25 min sans coloration.', 'Foncez le moule, répartissez les oignons.',
      'Battez les œufs avec la crème, la muscade, sel et poivre. Versez.', 'Enfournez 35 min à 190 °C.']
  },
  {
    id: 'tourte-lorraine', nom: 'Tourte lorraine (pâté lorrain)', cat: 'Tartes & pizzas', cuisine: 'Lorraine', emoji: '🥧',
    desc: 'Porc et veau marinés au vin blanc dans une croûte feuilletée.',
    portions: 6, prep: 30, cuisson: 50, diff: 2,
    ing: [['pate_feuilletee', 2, 'pc'], ['porc_echine', 400], ['veau_epaule', 300], ['echalote', 2, 'pc'], ['vin_blanc', 200, 'ml'], ['persil', 15], ['thym', 1, 'pc'],
      ['oeuf', 1, 'pc'], ['creme_30', 100, 'ml'], ['sel', 0, 'qs']],
    etapes: ['La veille, marinez les viandes en lanières avec le vin, les échalotes, le persil et le thym.', 'Égouttez la viande et disposez-la sur une pâte feuilletée.',
      'Couvrez de la seconde pâte, soudez, faites une cheminée et dorez au jaune d\'œuf.', 'Enfournez 45 min à 190 °C. Versez la crème mélangée au blanc par la cheminée 5 min avant la fin.']
  },
  {
    id: 'socca', nom: 'Socca', cat: 'Tartes & pizzas', cuisine: 'Niçoise', emoji: '🫓',
    desc: 'Galette fine et croustillante à la farine de pois chiche. Sans gluten et vegan.',
    portions: 4, prep: 5, cuisson: 15, diff: 1,
    ing: [['farine_pois_chiche', 250], ['eau', 500, 'ml'], ['huile_olive', 4, 'cs'], ['sel', 1, 'cc'], ['poivre', 0, 'qs']],
    etapes: ['Fouettez la farine, l\'eau, 2 c. à soupe d\'huile et le sel. Laissez reposer 1 h.', 'Préchauffez le four au maximum avec une grande plaque huilée.',
      'Versez une fine couche de pâte et enfournez 8 à 10 min sous le grill jusqu\'à ce qu\'elle soit dorée.', 'Poivrez généreusement et dégustez chaud.']
  },
  {
    id: 'lahmacun', nom: 'Lahmacun', cat: 'Tartes & pizzas', cuisine: 'Turque', emoji: '🫓',
    desc: 'Pizza turque très fine à la viande épicée, roulée avec salade et citron.',
    portions: 4, prep: 25, cuisson: 10, diff: 2,
    ing: [['pate_pizza', 2, 'pc'], ['agneau_hache', 300], ['tomate', 2, 'pc'], ['poivron', 1, 'pc'], ['oignon', 1, 'pc'], ['persil', 20], ['concentre_tomate', 1, 'cs'],
      ['paprika', 1, 'cc'], ['cumin', 1, 'cc'], ['citron', 1, 'pc'], ['salade', 50], ['sel', 0, 'qs']],
    etapes: ['Mixez la tomate, le poivron, l\'oignon et le persil, mélangez avec la viande, le concentré et les épices.', 'Divisez la pâte en 4, étalez très finement.',
      'Étalez une fine couche de farce jusqu\'aux bords.', 'Enfournez 8 à 10 min au maximum. Servez roulé avec salade et citron.']
  },
  {
    id: 'okonomiyaki', nom: 'Okonomiyaki', cat: 'Tartes & pizzas', cuisine: 'Japonaise', emoji: '🥞',
    desc: 'Galette japonaise au chou et poitrine de porc, sauce et mayonnaise.',
    portions: 4, prep: 20, cuisson: 20, diff: 2,
    ing: [['chou', 400], ['farine', 150], ['oeuf', 4, 'pc'], ['eau', 150, 'ml', 'Eau ou dashi'], ['oignon_nouveau', 3, 'pc'], ['poitrine_fumee', 8, 'pc'], ['mayonnaise', 3, 'cs'],
      ['ketchup', 2, 'cs'], ['sauce_worcestershire', 2, 'cs'], ['huile_neutre', 2, 'cs']],
    etapes: ['Mélangez la farine, l\'eau et les œufs, puis le chou finement émincé et l\'oignon nouveau.', 'Versez une galette épaisse dans une poêle huilée, posez des tranches de poitrine dessus.',
      'Cuisez 5 min, retournez et cuisez 5 min encore.', 'Nappez d\'un mélange ketchup-Worcestershire et de traits de mayonnaise.']
  },

  // ================= BURGERS & SANDWICHS =================
  {
    id: 'hot-dog', nom: 'Hot-dog maison', cat: 'Burgers & sandwichs', cuisine: 'Américaine', emoji: '🌭',
    desc: 'Saucisses, oignons frits, moutarde et ketchup.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [['pain_burger', 4, 'pc', 'Pains à hot-dog'], ['saucisse_strasbourg', 8, 'pc'], ['oignon', 1, 'pc'], ['moutarde', 2, 'cs'], ['ketchup', 2, 'cs'], ['cornichons', 40], ['beurre', 10]],
    etapes: ['Faites dorer l\'oignon émincé dans le beurre.', 'Pochez les saucisses 5 min dans l\'eau frémissante.', 'Toastez les pains, garnissez de saucisses, oignons, cornichons, moutarde et ketchup.']
  },
  {
    id: 'club-sandwich', nom: 'Club sandwich', cat: 'Burgers & sandwichs', cuisine: 'Américaine', emoji: '🥪',
    desc: 'Le sandwich étagé poulet, bacon, tomate et salade.',
    portions: 4, prep: 20, cuisson: 15, diff: 1,
    ing: [['pain_mie', 12, 'pc'], ['poulet_blanc', 300], ['poitrine_fumee', 8, 'pc'], ['tomate', 2, 'pc'], ['salade', 60], ['mayonnaise', 4, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites griller le poulet et tranchez-le. Faites dorer le bacon.', 'Toastez le pain de mie et tartinez de mayonnaise.',
      'Montez 3 étages : salade, tomate, poulet, puis bacon. Coupez en triangles maintenus par des piques.']
  },
  {
    id: 'banh-mi', nom: 'Bánh mì au porc', cat: 'Burgers & sandwichs', cuisine: 'Vietnamienne', emoji: '🥖',
    desc: 'Baguette garnie de porc caramélisé, légumes marinés et coriandre.',
    portions: 4, prep: 30, cuisson: 15, diff: 1,
    ing: [['pain', 2, 'pc'], ['porc_filet', 400], ['carotte', 2, 'pc'], ['radis', 100, 'g', 'Radis blanc (daïkon)'], ['vinaigre_riz', 4, 'cs'], ['sucre', 1, 'cs'], ['concombre', 0.5, 'pc'],
      ['coriandre', 15], ['piment', 1, 'pc'], ['mayonnaise', 3, 'cs'], ['sauce_soja', 2, 'cs'], ['nuoc_mam', 1, 'cs'], ['miel', 1, 'cs'], ['ail', 1, 'pc']],
    etapes: ['Pickles : carotte et radis en julienne, marinés 30 min dans le vinaigre et le sucre.', 'Marinez le porc émincé avec sauce soja, nuoc-mâm, miel et ail, puis saisissez-le 5 min.',
      'Coupez les baguettes en 2 et ouvrez-les, tartinez de mayonnaise.', 'Garnissez de porc, pickles, concombre, coriandre et piment.']
  },
  {
    id: 'quesadillas', nom: 'Quesadillas poulet-fromage', cat: 'Burgers & sandwichs', cuisine: 'Mexicaine', emoji: '🧀',
    desc: 'Tortillas croustillantes au fromage fondant, poulet et poivron.',
    portions: 4, prep: 15, cuisson: 15, diff: 1,
    ing: [['tortilla', 8, 'pc'], ['poulet_blanc', 300], ['cheddar', 200, 'g', 'Cheddar râpé'], ['poivron', 1, 'pc'], ['oignon', 1, 'pc'], ['cumin', 1, 'cc'], ['huile_neutre', 1, 'cs'], ['creme_epaisse', 80]],
    etapes: ['Faites sauter le poulet émincé, le poivron et l\'oignon avec le cumin.', 'Sur une tortilla, étalez fromage, garniture, fromage, puis couvrez d\'une autre tortilla.',
      'Faites dorer à sec 2 à 3 min par face. Coupez en parts, servez avec la crème.']
  },
  {
    id: 'burrito-boeuf', nom: 'Burrito au bœuf', cat: 'Burgers & sandwichs', cuisine: 'Mexicaine', emoji: '🌯',
    desc: 'Grande tortilla roulée : bœuf épicé, riz, haricots, fromage et crudités.',
    portions: 4, prep: 20, cuisson: 20, diff: 1,
    ing: [['tortilla', 4, 'pc'], ['boeuf_hache_15', 400], ['riz_blanc', 150], ['haricots_rouges', 250], ['cheddar', 100, 'g', 'Cheddar râpé'], ['tomate', 2, 'pc'], ['salade', 60],
      ['oignon', 1, 'pc'], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['creme_epaisse', 80], ['sel', 0, 'qs']],
    etapes: ['Faites cuire le riz.', 'Faites revenir l\'oignon et la viande avec les épices, ajoutez les haricots 5 min.',
      'Garnissez les tortillas chaudes de riz, viande, fromage, crudités et crème.', 'Repliez les côtés et roulez serré.']
  },
  {
    id: 'welsh', nom: 'Welsh', cat: 'Burgers & sandwichs', cuisine: 'Nordiste', emoji: '🍺',
    desc: 'Pain, jambon et cheddar fondu à la bière, œuf au plat.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [['pain_campagne', 4, 'pc'], ['jambon_blanc', 4, 'pc'], ['cheddar', 400], ['biere', 200, 'ml', 'Bière blonde ou ambrée'], ['moutarde', 1, 'cs'], ['oeuf', 4, 'pc'], ['beurre', 20],
      ['sauce_worcestershire', 1, 'cc']],
    etapes: ['Toastez le pain, tartinez de moutarde, posez-le dans des plats individuels avec le jambon.', 'Faites fondre le cheddar dans la bière en remuant, ajoutez la Worcestershire.',
      'Nappez le pain de fromage et gratinez 8 min à 220 °C.', 'Servez avec un œuf au plat sur le dessus.']
  },
  {
    id: 'pan-bagnat', nom: 'Pan bagnat', cat: 'Burgers & sandwichs', cuisine: 'Niçoise', emoji: '🥪',
    desc: 'Le sandwich niçois : thon, œuf, crudités et huile d\'olive.',
    portions: 4, prep: 20, cuisson: 10, diff: 1,
    ing: [['pain', 400, 'g', 'Pains ronds (4)'], ['thon_boite', 200], ['oeuf', 2, 'pc'], ['tomate', 2, 'pc'], ['poivron', 1, 'pc', 'Poivron vert'], ['oignon_rouge', 0.5, 'pc'],
      ['olives', 40, 'g', 'Olives noires'], ['anchois', 4, 'pc'], ['salade', 50], ['huile_olive', 4, 'cs'], ['vinaigre', 1, 'cs']],
    etapes: ['Faites durcir les œufs.', 'Ouvrez les pains, arrosez la mie d\'huile et de vinaigre.', 'Garnissez de tomates, poivron, oignon, thon, œufs, olives, anchois et salade.',
      'Refermez, pressez et laissez reposer 1 h avant de déguster.']
  },
  {
    id: 'jambon-beurre', nom: 'Jambon-beurre', cat: 'Burgers & sandwichs', cuisine: 'Française', emoji: '🥖',
    desc: 'Le sandwich préféré des Français : baguette, beurre et jambon.',
    portions: 4, prep: 5, cuisson: 0, diff: 1,
    ing: [['pain', 2, 'pc'], ['jambon_blanc', 8, 'pc'], ['beurre', 60], ['cornichons', 40]],
    etapes: ['Coupez chaque baguette en deux, puis ouvrez chaque morceau.', 'Tartinez généreusement de beurre.', 'Garnissez de 2 tranches de jambon et de cornichons si vous aimez.']
  },
  {
    id: 'burger-poulet', nom: 'Burger au poulet croustillant', cat: 'Burgers & sandwichs', cuisine: 'Américaine', emoji: '🍔',
    desc: 'Poulet pané croustillant, cheddar et mayonnaise épicée.',
    portions: 4, prep: 20, cuisson: 15, diff: 1,
    ing: [['pain_burger', 4, 'pc'], ['poulet_blanc', 4, 'pc'], ['farine', 40], ['oeuf', 1, 'pc'], ['chapelure', 80], ['huile_neutre', 60, 'ml', 'Huile de cuisson (part absorbée)'],
      ['cheddar', 4, 'pc'], ['salade', 50], ['tomate', 1, 'pc'], ['mayonnaise', 3, 'cs'], ['sauce_sriracha', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Aplatissez les blancs, passez-les dans la farine, l\'œuf et la chapelure.', 'Faites-les dorer 5 min par face dans l\'huile.',
      'Mélangez mayonnaise et sriracha.', 'Montez les burgers : sauce, salade, poulet, cheddar, tomate.']
  },
  {
    id: 'bagel-saumon', nom: 'Bagel au saumon fumé', cat: 'Burgers & sandwichs', cuisine: 'Américaine', emoji: '🥯',
    desc: 'Cream cheese, saumon fumé, oignon rouge et câpres.',
    portions: 4, prep: 10, cuisson: 0, diff: 1,
    ing: [['bagel', 4, 'pc'], ['saumon_fume', 200], ['fromage_frais', 120], ['oignon_rouge', 0.5, 'pc'], ['capres', 1, 'cs'], ['aneth', 5], ['citron', 0.5, 'pc'], ['roquette', 30]],
    etapes: ['Toastez les bagels.', 'Tartinez de fromage frais mélangé à l\'aneth et au citron.', 'Garnissez de roquette, saumon, oignon rouge et câpres.']
  },
  {
    id: 'philly-cheesesteak', nom: 'Philly cheesesteak', cat: 'Burgers & sandwichs', cuisine: 'Américaine', emoji: '🥖',
    desc: 'Pain long garni de bœuf émincé, oignons, poivrons et fromage fondu.',
    portions: 4, prep: 15, cuisson: 15, diff: 1,
    ing: [['pain', 2, 'pc', 'Baguettes viennoises'], ['boeuf_steak', 500, 'g', 'Bœuf très finement tranché'], ['oignon', 2, 'pc'], ['poivron', 1, 'pc'],
      ['cheddar', 8, 'pc', 'Tranches de provolone ou cheddar'], ['huile_neutre', 2, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer les oignons et le poivron émincés dans l\'huile.', 'Ajoutez le bœuf, faites-le sauter 2 min. Salez, poivrez.',
      'Couvrez de fromage et laissez fondre.', 'Garnissez les pains coupés en deux et ouverts.']
  },
  {
    id: 'tacos-al-pastor', nom: 'Tacos al pastor', cat: 'Burgers & sandwichs', cuisine: 'Mexicaine', emoji: '🍍',
    desc: 'Porc mariné aux piments et ananas grillé, oignon et coriandre.',
    portions: 4, prep: 25, cuisson: 15, diff: 2,
    ing: [['porc_echine', 600], ['ananas', 200], ['tortilla', 240, 'g', 'Petites tortillas de maïs (8)'], ['oignon', 1, 'pc'], ['coriandre', 15], ['citron_vert', 2, 'pc'],
      ['paprika', 2, 'cc', 'Piment ancho ou paprika'], ['cumin', 1, 'cc'], ['ail', 2, 'pc'], ['vinaigre', 2, 'cs'], ['origan', 1, 'cc'], ['huile_neutre', 2, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Mixez les épices, l\'ail, le vinaigre, un peu de jus d\'ananas et l\'huile. Marinez le porc en fines tranches 2 h.', 'Faites griller la viande à feu vif et émincez-la.',
      'Faites griller l\'ananas en dés.', 'Garnissez les tortillas chaudes de viande, ananas, oignon, coriandre et citron vert.']
  },
  {
    id: 'sandwich-legumes-grilles', nom: 'Sandwich aux légumes grillés et feta', cat: 'Burgers & sandwichs', cuisine: 'Méditerranéenne', emoji: '🥪',
    desc: 'Pain de campagne, légumes rôtis, pesto, feta et roquette.',
    portions: 4, prep: 15, cuisson: 20, diff: 1,
    ing: [['pain_campagne', 8, 'pc'], ['courgette', 1, 'pc'], ['aubergine', 0.5, 'pc'], ['poivron', 1, 'pc'], ['huile_olive', 3, 'cs'], ['feta', 100], ['roquette', 40], ['pesto', 40]],
    etapes: ['Coupez les légumes en tranches, badigeonnez d\'huile et faites-les griller 20 min au four à 220 °C.', 'Toastez le pain et tartinez de pesto.',
      'Garnissez de légumes, feta émiettée et roquette.']
  },

  // ================= ACCOMPAGNEMENTS =================
  {
    id: 'aligot', nom: 'Aligot', cat: 'Accompagnements', cuisine: 'Aveyronnaise', emoji: '🧀',
    desc: 'Purée filante à la tomme fraîche, à servir avec une saucisse.',
    portions: 6, prep: 20, cuisson: 30, diff: 2,
    ing: [['pomme_de_terre', 1000], ['tomme_fraiche', 400], ['creme_epaisse', 150], ['beurre', 50], ['ail', 2, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Faites cuire les pommes de terre et réduisez-les en purée avec le beurre, la crème et l\'ail écrasé.', 'Sur feu doux, ajoutez la tomme en fines lamelles.',
      'Remuez énergiquement en soulevant avec une spatule jusqu\'à ce que l\'aligot devienne lisse et file.']
  },
  {
    id: 'pommes-boulangeres', nom: 'Pommes boulangères', cat: 'Accompagnements', cuisine: 'Française', emoji: '🥔',
    desc: 'Pommes de terre et oignons fondants cuits au bouillon.',
    portions: 6, prep: 20, cuisson: 60, diff: 1,
    ing: [['pomme_de_terre', 1200], ['oignon', 3, 'pc'], ['bouillon', 500, 'ml'], ['beurre', 30], ['thym', 2, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Faites fondre les oignons émincés dans la moitié du beurre.', 'Alternez dans un plat les pommes de terre en rondelles et les oignons, avec le thym.',
      'Versez le bouillon, parsemez du reste de beurre.', 'Enfournez 1 h à 180 °C.']
  },
  {
    id: 'puree-patate-douce', nom: 'Purée de patate douce', cat: 'Accompagnements', cuisine: 'Américaine', emoji: '🍠',
    desc: 'Purée douce et veloutée, une pointe de cannelle.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['patate_douce', 800], ['beurre', 30], ['lait_demi', 100, 'ml'], ['cannelle', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Faites cuire la patate douce en cubes 15 à 20 min à l\'eau.', 'Écrasez avec le beurre et le lait chaud.', 'Salez et ajoutez la cannelle.']
  },
  {
    id: 'carottes-vichy', nom: 'Carottes Vichy', cat: 'Accompagnements', cuisine: 'Française', emoji: '🥕',
    desc: 'Carottes glacées au beurre et au sucre.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['carotte', 800], ['beurre', 30], ['sucre', 1, 'cs'], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Coupez les carottes en rondelles fines.', 'Mettez-les dans une sauteuse avec le beurre, le sucre, le sel et de l\'eau à hauteur.',
      'Laissez cuire à découvert jusqu\'à évaporation complète : elles deviennent brillantes. Parsemez de persil.']
  },
  {
    id: 'petits-pois-francaise', nom: 'Petits pois à la française', cat: 'Accompagnements', cuisine: 'Française', emoji: '🫛',
    desc: 'Petits pois mijotés avec laitue et petits oignons.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['petits_pois', 600], ['salade', 200, 'g', 'Laitue'], ['oignon_nouveau', 6, 'pc'], ['beurre', 30], ['sucre', 1, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Faites fondre les oignons dans le beurre.', 'Ajoutez les petits pois, la laitue émincée, le sucre, le sel et un fond d\'eau.', 'Couvrez et laissez mijoter 15 min.']
  },
  {
    id: 'epinards-creme', nom: 'Épinards à la crème', cat: 'Accompagnements', cuisine: 'Française', emoji: '🥬',
    desc: 'Épinards fondants, crème et muscade.',
    portions: 4, prep: 10, cuisson: 10, diff: 1,
    ing: [['epinards', 1000], ['creme_15', 150, 'ml'], ['beurre', 20], ['ail', 1, 'pc'], ['muscade', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Faites tomber les épinards avec l\'ail dans le beurre.', 'Égouttez bien, hachez grossièrement.', 'Remettez dans la poêle avec la crème et la muscade, laissez réduire 3 min.']
  },
  {
    id: 'champignons-persillade', nom: 'Champignons en persillade', cat: 'Accompagnements', cuisine: 'Française', emoji: '🍄',
    desc: 'Champignons dorés, ail et persil.',
    portions: 4, prep: 10, cuisson: 12, diff: 1,
    ing: [['champignons', 600], ['ail', 3, 'pc'], ['persil', 20], ['beurre', 30], ['huile_neutre', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites sauter les champignons à feu vif dans l\'huile jusqu\'à évaporation de leur eau.', 'Ajoutez le beurre, l\'ail et le persil hachés, faites dorer 2 min. Salez.']
  },
  {
    id: 'flageolets', nom: 'Flageolets à l\'ail et au thym', cat: 'Accompagnements', cuisine: 'Française', emoji: '🫘',
    desc: 'L\'accompagnement traditionnel du gigot.',
    portions: 4, prep: 5, cuisson: 15, diff: 1,
    ing: [['flageolets', 800], ['echalote', 2, 'pc'], ['ail', 2, 'pc'], ['beurre', 20], ['thym', 2, 'pc'], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Faites fondre les échalotes et l\'ail dans le beurre.', 'Ajoutez les flageolets, le thym et un fond d\'eau. Réchauffez 10 min.', 'Parsemez de persil.']
  },
  {
    id: 'riz-mexicain', nom: 'Riz à la mexicaine', cat: 'Accompagnements', cuisine: 'Mexicaine', emoji: '🍚',
    desc: 'Arroz rojo : riz doré cuit dans un bouillon de tomate.',
    portions: 4, prep: 10, cuisson: 25, diff: 1,
    ing: [['riz_blanc', 250], ['tomate', 2, 'pc'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['bouillon', 500, 'ml'], ['huile_neutre', 2, 'cs'], ['cumin', 0.5, 'cc'], ['coriandre', 10]],
    etapes: ['Mixez les tomates, l\'oignon et l\'ail.', 'Faites dorer le riz dans l\'huile 5 min.', 'Ajoutez la purée de tomate, le cumin et le bouillon. Couvrez et cuisez 18 min à feu doux.', 'Parsemez de coriandre.']
  },
  {
    id: 'potatoes-patate-douce', nom: 'Potatoes de patate douce', cat: 'Accompagnements', cuisine: 'Américaine', emoji: '🍠',
    desc: 'Quartiers épicés et rôtis au four.',
    portions: 4, prep: 10, cuisson: 35, diff: 1,
    ing: [['patate_douce', 800], ['huile_olive', 2, 'cs'], ['paprika', 1, 'cc'], ['herbes_provence', 1, 'cc'], ['ail', 2, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Coupez les patates douces en quartiers.', 'Mélangez avec l\'huile, le paprika, les herbes, l\'ail écrasé et le sel.', 'Enfournez 30 à 35 min à 210 °C en les retournant à mi-cuisson.']
  },
  {
    id: 'rosti', nom: 'Rösti', cat: 'Accompagnements', cuisine: 'Suisse', emoji: '🥔',
    desc: 'Galette de pommes de terre râpées, croustillante dehors, fondante dedans.',
    portions: 4, prep: 15, cuisson: 25, diff: 1,
    ing: [['pomme_de_terre', 800], ['beurre', 40], ['oignon', 0.5, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Faites précuire les pommes de terre 10 min avec la peau, laissez refroidir puis râpez-les.', 'Mélangez avec l\'oignon râpé et le sel.',
      'Faites cuire en galette dans le beurre 10 min, retournez à l\'aide d\'une assiette et cuisez 10 min.']
  },
  {
    id: 'fenouil-braise', nom: 'Fenouil braisé', cat: 'Accompagnements', cuisine: 'Italienne', emoji: '🌿',
    desc: 'Fenouil fondant et caramélisé, parfait avec un poisson.',
    portions: 4, prep: 10, cuisson: 30, diff: 1,
    ing: [['fenouil', 3, 'pc'], ['huile_olive', 2, 'cs'], ['bouillon', 200, 'ml'], ['citron', 0.5, 'pc'], ['thym', 1, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Coupez les fenouils en quartiers et faites-les dorer dans l\'huile.', 'Ajoutez le bouillon et le thym, couvrez et laissez braiser 20 min.', 'Arrosez de citron.']
  },
  {
    id: 'chou-rouge-braise', nom: 'Chou rouge braisé aux pommes', cat: 'Accompagnements', cuisine: 'Alsacienne', emoji: '🟣',
    desc: 'Chou rouge aigre-doux aux pommes, idéal avec le gibier ou le porc.',
    portions: 6, prep: 15, cuisson: 60, diff: 1,
    ing: [['chou_rouge', 1000], ['pomme', 2, 'pc'], ['oignon', 1, 'pc'], ['vinaigre', 4, 'cs'], ['cassonade', 2, 'cs'], ['beurre', 20], ['cannelle', 1, 'pincee'], ['laurier', 1, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Faites fondre l\'oignon dans le beurre.', 'Ajoutez le chou émincé, les pommes en dés, le vinaigre, la cassonade, la cannelle, le laurier et un verre d\'eau.',
      'Couvrez et laissez braiser 1 h à feu doux en remuant.']
  },
  {
    id: 'brocolis-rotis', nom: 'Brocolis rôtis à l\'ail et parmesan', cat: 'Accompagnements', cuisine: 'Italienne', emoji: '🥦',
    desc: 'Fleurettes croustillantes et dorées au four.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['brocoli', 2, 'pc'], ['huile_olive', 3, 'cs'], ['ail', 3, 'pc'], ['parmesan', 30], ['citron', 0.5, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Mélangez les fleurettes avec l\'huile, l\'ail émincé et le sel.', 'Rôtissez 18 à 20 min à 220 °C.', 'Parsemez de parmesan et arrosez de citron.']
  },
  {
    id: 'pommes-terre-four', nom: 'Pommes de terre au four, crème ciboulette', cat: 'Accompagnements', cuisine: 'Américaine', emoji: '🥔',
    desc: 'Baked potatoes fondantes et leur crème à la ciboulette.',
    portions: 4, prep: 5, cuisson: 60, diff: 1,
    ing: [['pomme_de_terre', 800, 'g', 'Grosses pommes de terre (4)'], ['creme_epaisse', 100], ['ciboulette', 10], ['beurre', 20], ['sel', 0, 'qs']],
    etapes: ['Piquez les pommes de terre et enfournez-les 1 h à 200 °C.', 'Mélangez la crème avec la ciboulette ciselée et le sel.',
      'Fendez les pommes de terre, ajoutez une noisette de beurre et la crème.']
  },
  {
    id: 'naan', nom: 'Naans maison', cat: 'Accompagnements', cuisine: 'Indienne', emoji: '🫓',
    desc: 'Pains indiens moelleux cuits à la poêle, beurre à l\'ail (8 naans).',
    portions: 8, prep: 20, cuisson: 15, diff: 2,
    ing: [['farine', 400], ['yaourt_nature', 1, 'pc'], ['lait_demi', 100, 'ml'], ['eau', 80, 'ml'], ['levure_boulangere', 1, 'pc'], ['sucre', 1, 'cc'], ['sel', 1, 'cc'],
      ['beurre', 40], ['ail', 1, 'pc']],
    etapes: ['Mélangez la farine, la levure, le sucre, le sel, le yaourt, le lait tiède et l\'eau. Pétrissez 5 min.', 'Laissez lever 1 h 30.',
      'Divisez en 8, étalez en ovales et faites cuire 1 à 2 min par face dans une poêle très chaude.', 'Badigeonnez de beurre fondu à l\'ail.']
  },
  {
    id: 'pain-maison', nom: 'Pain maison', cat: 'Accompagnements', cuisine: 'Française', emoji: '🍞',
    desc: 'Un pain croustillant sans machine (environ 10 tranches).',
    portions: 10, prep: 20, cuisson: 40, diff: 2,
    ing: [['farine', 500], ['eau', 330, 'ml', 'Eau tiède'], ['levure_boulangere', 1, 'pc'], ['sel', 2, 'cc']],
    etapes: ['Mélangez la farine, la levure, le sel et l\'eau. Pétrissez 10 min.', 'Laissez lever 1 h 30 couvert, puis façonnez une boule.',
      'Laissez lever encore 45 min. Préchauffez le four à 240 °C avec une cocotte en fonte.', 'Enfournez dans la cocotte fermée 25 min, puis 15 min sans couvercle.']
  },
  {
    id: 'alloco', nom: 'Alloco (bananes plantain frites)', cat: 'Accompagnements', cuisine: 'Ivoirienne', emoji: '🍌',
    desc: 'Rondelles de banane plantain mûre dorées et caramélisées.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [['banane_plantain', 3, 'pc', 'Bananes plantain bien mûres'], ['huile_neutre', 60, 'ml', 'Huile de friture (part absorbée)'], ['sel', 1, 'pincee'], ['piment_poudre', 1, 'pincee']],
    etapes: ['Épluchez les bananes et coupez-les en rondelles épaisses ou en biais.', 'Faites-les frire 3 à 4 min dans l\'huile chaude jusqu\'à ce qu\'elles soient bien dorées.',
      'Égouttez, salez et pimentez légèrement.']
  },

  // ================= SAUCES & BASES =================
  {
    id: 'mayonnaise-maison', nom: 'Mayonnaise maison', cat: 'Sauces & bases', cuisine: 'Française', emoji: '🥚',
    desc: 'La vraie mayonnaise montée au fouet (environ 10 cuillères à soupe).',
    portions: 10, prep: 10, cuisson: 0, diff: 2,
    ing: [['jaune_oeuf', 1, 'pc'], ['moutarde', 1, 'cs'], ['huile_neutre', 250, 'ml'], ['vinaigre', 1, 'cc'], ['sel', 1, 'pincee']],
    etapes: ['Tous les ingrédients doivent être à température ambiante.', 'Fouettez le jaune avec la moutarde et le sel.',
      'Versez l\'huile en mince filet en fouettant sans arrêt jusqu\'à ce que la sauce soit ferme.', 'Ajoutez le vinaigre à la fin.']
  },
  {
    id: 'vinaigrette', nom: 'Vinaigrette à l\'échalote', cat: 'Sauces & bases', cuisine: 'Française', emoji: '🥗',
    desc: 'La vinaigrette moutardée de base, pour toutes les salades.',
    portions: 6, prep: 5, cuisson: 0, diff: 1,
    ing: [['huile_neutre', 6, 'cs'], ['vinaigre', 2, 'cs'], ['moutarde', 1, 'cc'], ['echalote', 1, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Dissolvez le sel dans le vinaigre avec la moutarde.', 'Ajoutez l\'huile en fouettant, puis l\'échalote ciselée et le poivre.']
  },
  {
    id: 'bechamel', nom: 'Sauce béchamel', cat: 'Sauces & bases', cuisine: 'Française', emoji: '🥛',
    desc: 'La base des gratins, lasagnes et croque-monsieur.',
    portions: 6, prep: 5, cuisson: 10, diff: 1,
    ing: [['beurre', 40], ['farine', 40], ['lait_demi', 500, 'ml'], ['muscade', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Faites fondre le beurre, ajoutez la farine et remuez 1 min.', 'Versez le lait froid d\'un coup en fouettant.', 'Faites épaissir 5 min à feu doux sans cesser de fouetter. Assaisonnez.']
  },
  {
    id: 'sauce-tomate-maison', nom: 'Sauce tomate maison', cat: 'Sauces & bases', cuisine: 'Italienne', emoji: '🍅',
    desc: 'Pour les pâtes, pizzas et plats mijotés. Se congèle très bien.',
    portions: 6, prep: 10, cuisson: 30, diff: 1,
    ing: [['tomates_concassees', 800], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['huile_olive', 3, 'cs'], ['sucre', 1, 'cc'], ['basilic', 10], ['thym', 1, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Faites fondre l\'oignon et l\'ail dans l\'huile.', 'Ajoutez les tomates, le sucre, le thym et le sel.', 'Laissez mijoter 25 min, ajoutez le basilic. Mixez si vous la voulez lisse.']
  },
  {
    id: 'pesto-genovese', nom: 'Pesto alla genovese', cat: 'Sauces & bases', cuisine: 'Italienne', emoji: '🌿',
    desc: 'Basilic, pignons, parmesan, ail et huile d\'olive.',
    portions: 6, prep: 10, cuisson: 0, diff: 1,
    ing: [['basilic', 50], ['pignons', 30], ['parmesan', 50], ['ail', 1, 'pc'], ['huile_olive', 100, 'ml'], ['sel', 1, 'pincee']],
    etapes: ['Pilez ou mixez l\'ail, les pignons et le sel.', 'Ajoutez le basilic, puis le parmesan râpé.', 'Incorporez l\'huile en filet. Conservez au frais recouvert d\'huile.']
  },
  {
    id: 'sauce-bearnaise', nom: 'Sauce béarnaise', cat: 'Sauces & bases', cuisine: 'Française', emoji: '🧈',
    desc: 'L\'émulsion au beurre et à l\'estragon, reine des viandes grillées.',
    portions: 4, prep: 15, cuisson: 15, diff: 3,
    ing: [['beurre', 150], ['jaune_oeuf', 3, 'pc'], ['echalote', 2, 'pc'], ['vinaigre', 4, 'cs'], ['vin_blanc', 4, 'cs'], ['estragon', 10], ['poivre', 1, 'cc', 'Poivre mignonnette'], ['sel', 0, 'qs']],
    etapes: ['Faites réduire les échalotes, la moitié de l\'estragon, le poivre, le vinaigre et le vin presque à sec.', 'Hors du feu, ajoutez les jaunes et 2 c. à soupe d\'eau.',
      'Fouettez au bain-marie doux jusqu\'à obtenir un sabayon.', 'Incorporez le beurre fondu tiède en filet. Ajoutez le reste d\'estragon.']
  },
  {
    id: 'sauce-hollandaise', nom: 'Sauce hollandaise', cat: 'Sauces & bases', cuisine: 'Française', emoji: '🍋',
    desc: 'Beurre, jaunes et citron : pour les œufs bénédicte, asperges et poissons.',
    portions: 4, prep: 10, cuisson: 10, diff: 3,
    ing: [['beurre', 150], ['jaune_oeuf', 3, 'pc'], ['citron', 0.5, 'pc'], ['eau', 2, 'cs'], ['sel', 1, 'pincee']],
    etapes: ['Fouettez les jaunes et l\'eau au bain-marie doux jusqu\'à ce qu\'ils épaississent.', 'Incorporez le beurre fondu en filet en fouettant.',
      'Ajoutez le jus de citron et le sel. Gardez au chaud.']
  },
  {
    id: 'pate-brisee-maison', nom: 'Pâte brisée maison', cat: 'Sauces & bases', cuisine: 'Française', emoji: '🥧',
    desc: 'La pâte de base des quiches et tartes salées.',
    portions: 8, prep: 10, cuisson: 0, diff: 1,
    ing: [['farine', 250], ['beurre', 125, 'g', 'Beurre froid'], ['eau', 50, 'ml', 'Eau froide'], ['sel', 1, 'pincee']],
    etapes: ['Sablez du bout des doigts la farine, le sel et le beurre en dés.', 'Ajoutez l\'eau et rassemblez la pâte en boule sans trop la travailler.', 'Filmez et réservez 30 min au frais avant de l\'étaler.']
  },
  {
    id: 'pate-sablee-maison', nom: 'Pâte sablée maison', cat: 'Sauces & bases', cuisine: 'Française', emoji: '🥧',
    desc: 'Pâte sucrée et friable pour les tartes aux fruits.',
    portions: 8, prep: 15, cuisson: 0, diff: 1,
    ing: [['farine', 250], ['beurre', 125, 'g', 'Beurre mou'], ['sucre_glace', 80], ['oeuf', 1, 'pc'], ['poudre_amande', 30], ['sel', 1, 'pincee']],
    etapes: ['Mélangez le beurre et le sucre glace, puis l\'œuf.', 'Ajoutez la farine, la poudre d\'amande et le sel, rassemblez en boule sans pétrir.', 'Réservez 1 h au frais.']
  },
  {
    id: 'pate-pizza-maison', nom: 'Pâte à pizza maison', cat: 'Sauces & bases', cuisine: 'Italienne', emoji: '🍕',
    desc: 'Pour 2 grandes pizzas fines et croustillantes.',
    portions: 4, prep: 15, cuisson: 0, diff: 1,
    ing: [['farine', 500], ['eau', 300, 'ml', 'Eau tiède'], ['levure_boulangere', 1, 'pc'], ['huile_olive', 2, 'cs'], ['sel', 1.5, 'cc']],
    etapes: ['Mélangez la farine, la levure et le sel, puis l\'eau et l\'huile.', 'Pétrissez 10 min jusqu\'à obtenir une pâte souple.',
      'Laissez lever 2 h (ou 24 h au réfrigérateur pour plus de goût).', 'Divisez en 2 et étalez à la main.']
  },
  {
    id: 'chimichurri', nom: 'Chimichurri', cat: 'Sauces & bases', cuisine: 'Argentine', emoji: '🌿',
    desc: 'Sauce argentine persil-ail-vinaigre pour les grillades.',
    portions: 6, prep: 10, cuisson: 0, diff: 1,
    ing: [['persil', 40], ['origan', 1, 'cs'], ['ail', 3, 'pc'], ['huile_olive', 100, 'ml'], ['vinaigre', 3, 'cs', 'Vinaigre de vin rouge'], ['piment_poudre', 1, 'pincee'], ['sel', 1, 'pincee']],
    etapes: ['Hachez finement le persil et l\'ail.', 'Mélangez avec l\'origan, le piment, le sel, le vinaigre et l\'huile.', 'Laissez reposer 30 min avant de servir.']
  },
  {
    id: 'sauce-barbecue', nom: 'Sauce barbecue maison', cat: 'Sauces & bases', cuisine: 'Américaine', emoji: '🔥',
    desc: 'Sucrée, fumée et acidulée, pour ribs, burgers et grillades.',
    portions: 8, prep: 5, cuisson: 15, diff: 1,
    ing: [['ketchup', 200], ['cassonade', 50], ['vinaigre', 4, 'cs', 'Vinaigre de cidre'], ['sauce_worcestershire', 2, 'cs'], ['moutarde', 1, 'cs'], ['paprika', 2, 'cc', 'Paprika fumé'], ['ail', 1, 'pc']],
    etapes: ['Mettez tous les ingrédients dans une casserole.', 'Laissez mijoter 15 min à feu doux en remuant.', 'Laissez refroidir. Se conserve 2 semaines au frais.']
  },
  {
    id: 'aioli', nom: 'Aïoli', cat: 'Sauces & bases', cuisine: 'Provençale', emoji: '🧄',
    desc: 'Émulsion à l\'ail et à l\'huile d\'olive, pour poissons et légumes.',
    portions: 8, prep: 15, cuisson: 0, diff: 2,
    ing: [['ail', 4, 'pc'], ['jaune_oeuf', 1, 'pc'], ['huile_olive', 250, 'ml'], ['citron', 0.5, 'pc'], ['sel', 1, 'pincee']],
    etapes: ['Pilez l\'ail avec le sel en purée.', 'Ajoutez le jaune, puis l\'huile en mince filet en tournant sans arrêt.', 'Terminez avec le jus de citron.']
  },
  {
    id: 'creme-patissiere', nom: 'Crème pâtissière', cat: 'Sauces & bases', cuisine: 'Française', emoji: '🍮',
    desc: 'La crème vanillée des choux, éclairs, millefeuilles et tartes.',
    portions: 6, prep: 10, cuisson: 10, diff: 1,
    ing: [['lait_entier', 500, 'ml'], ['jaune_oeuf', 4, 'pc'], ['sucre', 100], ['maizena', 40], ['vanille', 1, 'cc']],
    etapes: ['Portez le lait à ébullition avec la vanille.', 'Fouettez les jaunes avec le sucre et la maïzena.',
      'Versez le lait chaud dessus, remettez sur le feu et faites épaissir 2 min en fouettant.', 'Filmez au contact et laissez refroidir.']
  },
  {
    id: 'caramel-beurre-sale', nom: 'Caramel au beurre salé', cat: 'Sauces & bases', cuisine: 'Bretonne', emoji: '🍯',
    desc: 'Le caramel breton coulant, pour crêpes, glaces et gâteaux.',
    portions: 10, prep: 5, cuisson: 15, diff: 2,
    ing: [['sucre', 200], ['creme_30', 200, 'ml'], ['beurre', 60, 'g', 'Beurre demi-sel'], ['sel', 1, 'pincee', 'Fleur de sel']],
    etapes: ['Faites chauffer la crème.', 'Faites fondre le sucre à sec jusqu\'à obtenir un caramel ambré.',
      'Hors du feu, versez la crème chaude en remuant (attention aux projections), puis le beurre et la fleur de sel.', 'Laissez bouillir 1 min et mettez en pot.']
  },
  {
    id: 'chantilly', nom: 'Crème chantilly', cat: 'Sauces & bases', cuisine: 'Française', emoji: '🍦',
    desc: 'Crème fouettée sucrée et vanillée.',
    portions: 6, prep: 10, cuisson: 0, diff: 1,
    ing: [['creme_30', 300, 'ml', 'Crème entière très froide'], ['sucre_glace', 30], ['vanille', 1, 'cc']],
    etapes: ['Placez le bol et les fouets 15 min au congélateur.', 'Fouettez la crème bien froide jusqu\'à ce qu\'elle épaississe.', 'Ajoutez le sucre glace et la vanille, fouettez jusqu\'à ce qu\'elle soit ferme.']
  },
  {
    id: 'ganache-chocolat', nom: 'Ganache au chocolat', cat: 'Sauces & bases', cuisine: 'Française', emoji: '🍫',
    desc: 'Pour napper, fourrer ou garnir les tartes et macarons.',
    portions: 10, prep: 5, cuisson: 5, diff: 1,
    ing: [['chocolat_noir', 200], ['creme_30', 200, 'ml']],
    etapes: ['Hachez le chocolat.', 'Portez la crème à ébullition et versez-la sur le chocolat en trois fois en mélangeant du centre vers l\'extérieur.',
      'Laissez refroidir selon l\'usage : coulante pour napper, figée pour garnir.']
  }
]);
