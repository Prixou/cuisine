/* Lot 2 — Végétarien, Pâtes & riz */
window.RECETTES = (window.RECETTES || []).concat([
  // ================= VÉGÉTARIEN =================
  {
    id: 'palak-paneer', nom: 'Palak paneer', cat: 'Végétarien', cuisine: 'Indienne', emoji: '🥬',
    desc: 'Fromage indien dans une sauce onctueuse aux épinards et épices.',
    portions: 4, prep: 15, cuisson: 25, diff: 1,
    ing: [['paneer', 300], ['epinards', 600], ['oignon', 1, 'pc'], ['tomate', 1, 'pc'], ['ail', 3, 'pc'], ['gingembre', 15], ['garam_masala', 1, 'cc'], ['cumin', 1, 'cc'],
      ['creme_30', 50, 'ml'], ['beurre', 20], ['riz_blanc', 240, 'g', 'Riz basmati'], ['sel', 0, 'qs']],
    etapes: ['Blanchissez les épinards 2 min, refroidissez-les et mixez-les.', 'Faites dorer le paneer en cubes dans la moitié du beurre, réservez.',
      'Faites revenir l\'oignon, l\'ail, le gingembre, le cumin et la tomate dans le reste du beurre.', 'Ajoutez les épinards, le garam masala et la crème, puis le paneer. Chauffez 5 min. Servez avec le riz.']
  },
  {
    id: 'aloo-gobi', nom: 'Aloo gobi', cat: 'Végétarien', cuisine: 'Indienne', emoji: '🥔',
    desc: 'Pommes de terre et chou-fleur sautés aux épices. 100 % végétal.',
    portions: 4, prep: 15, cuisson: 30, diff: 1,
    ing: [['pomme_de_terre', 500], ['chou_fleur', 400], ['oignon', 1, 'pc'], ['tomate', 2, 'pc'], ['ail', 2, 'pc'], ['gingembre', 10], ['curcuma', 1, 'cc'],
      ['cumin', 1, 'cc'], ['garam_masala', 1, 'cc'], ['huile_neutre', 3, 'cs'], ['coriandre', 10], ['sel', 0, 'qs']],
    etapes: ['Faites revenir le cumin dans l\'huile, puis l\'oignon, l\'ail et le gingembre.', 'Ajoutez les pommes de terre en cubes et le curcuma, faites dorer 5 min.',
      'Ajoutez le chou-fleur, les tomates et un fond d\'eau. Couvrez et cuisez 20 min.', 'Ajoutez le garam masala et la coriandre.']
  },
  {
    id: 'piperade', nom: 'Piperade aux œufs', cat: 'Végétarien', cuisine: 'Basque', emoji: '🫑',
    desc: 'Poivrons et tomates fondants au piment d\'Espelette, œufs brouillés.',
    portions: 4, prep: 20, cuisson: 40, diff: 1,
    ing: [['poivron', 4, 'pc'], ['tomate', 6, 'pc'], ['oignon', 2, 'pc'], ['ail', 3, 'pc'], ['piment_poudre', 1, 'cc', 'Piment d\'Espelette'], ['huile_olive', 3, 'cs'], ['oeuf', 6, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Faites fondre les oignons et les poivrons émincés dans l\'huile 15 min.', 'Ajoutez l\'ail, les tomates pelées et le piment, laissez compoter 20 min.',
      'Versez les œufs battus et remuez doucement jusqu\'à ce qu\'ils soient crémeux.'],
    astuce: 'Traditionnellement servie avec des tranches de jambon de Bayonne poêlées.'
  },
  {
    id: 'galettes-courgettes', nom: 'Galettes de courgettes à la feta', cat: 'Végétarien', cuisine: 'Grecque', emoji: '🥒',
    desc: 'Kolokithokeftedes : galettes dorées à la courgette, feta et menthe.',
    portions: 4, prep: 20, cuisson: 15, diff: 1,
    ing: [['courgette', 600], ['oeuf', 2, 'pc'], ['farine', 60], ['feta', 100], ['menthe', 10], ['oignon_nouveau', 2, 'pc'], ['huile_olive', 3, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Râpez les courgettes, salez-les et pressez-les fortement dans un torchon.', 'Mélangez avec les œufs, la farine, la feta émiettée, la menthe et l\'oignon.',
      'Faites cuire des cuillerées de pâte aplaties dans l\'huile, 3 min par face.']
  },
  {
    id: 'mujaddara', nom: 'Mujaddara', cat: 'Végétarien', cuisine: 'Libanaise', emoji: '🧅',
    desc: 'Lentilles et riz aux oignons frits croustillants, sauce yaourt.',
    portions: 4, prep: 15, cuisson: 45, diff: 1,
    ing: [['lentilles_vertes', 200], ['riz_blanc', 150], ['oignon', 4, 'pc'], ['huile_olive', 6, 'cs'], ['cumin', 1, 'cc'], ['yaourt_grec', 150], ['sel', 0, 'qs']],
    etapes: ['Faites cuire les lentilles 15 min à l\'eau.', 'Faites frire les oignons émincés dans l\'huile jusqu\'à ce qu\'ils soient bien bruns. Réservez-en la moitié.',
      'Ajoutez le riz, le cumin et les lentilles égouttées, puis 40 cl d\'eau salée. Couvrez et cuisez 18 min.', 'Servez avec les oignons croustillants et le yaourt.']
  },
  {
    id: 'kushari', nom: 'Kushari', cat: 'Végétarien', cuisine: 'Égyptienne', emoji: '🍝',
    desc: 'Riz, lentilles, pâtes et pois chiches, sauce tomate vinaigrée et oignons frits.',
    portions: 6, prep: 20, cuisson: 45, diff: 2,
    ing: [['lentilles_vertes', 200], ['riz_blanc', 200], ['pates', 150, 'g', 'Petites pâtes'], ['pois_chiches', 240], ['coulis_tomate', 500], ['oignon', 3, 'pc'],
      ['ail', 3, 'pc'], ['vinaigre', 2, 'cs'], ['cumin', 2, 'cc'], ['huile_neutre', 6, 'cs'], ['piment_poudre', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Faites frire les oignons émincés dans l\'huile jusqu\'à ce qu\'ils soient croustillants.', 'Faites cuire séparément les lentilles, le riz et les pâtes.',
      'Sauce : faites revenir l\'ail, ajoutez le coulis, le cumin, le piment et le vinaigre. Mijotez 10 min.',
      'Superposez riz, lentilles, pâtes et pois chiches, nappez de sauce et parsemez d\'oignons frits.']
  },
  {
    id: 'fondue-savoyarde', nom: 'Fondue savoyarde', cat: 'Végétarien', cuisine: 'Savoyarde', emoji: '🫕',
    desc: 'Trois fromages fondus au vin blanc et pain croûté.',
    portions: 6, prep: 15, cuisson: 15, diff: 1,
    ing: [['comte', 600, 'g', 'Beaufort et comté'], ['emmental', 300, 'g', 'Emmental de Savoie'], ['vin_blanc', 400, 'ml', 'Vin blanc de Savoie'], ['ail', 1, 'pc'],
      ['maizena', 1, 'cs'], ['alcool_fort', 2, 'cs', 'Kirsch'], ['pain', 2, 'pc', 'Pain de campagne en cubes'], ['muscade', 1, 'pincee']],
    etapes: ['Frottez le caquelon avec l\'ail.', 'Faites chauffer le vin, ajoutez les fromages râpés petit à petit en remuant en 8.',
      'Délayez la maïzena dans le kirsch et ajoutez-la pour lier. Muscadez.', 'Servez sur le réchaud avec le pain.']
  },
  {
    id: 'patates-douces-farcies', nom: 'Patates douces farcies aux haricots noirs', cat: 'Végétarien', cuisine: 'Tex-Mex', emoji: '🍠',
    desc: 'Patates douces rôties garnies de haricots, maïs, avocat et crème.',
    portions: 4, prep: 15, cuisson: 50, diff: 1,
    ing: [['patate_douce', 4, 'pc'], ['haricots_noirs', 300], ['mais', 100], ['avocat', 1, 'pc'], ['creme_epaisse', 80], ['cheddar', 60, 'g', 'Cheddar râpé'],
      ['cumin', 1, 'cc'], ['coriandre', 10], ['citron_vert', 1, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Piquez les patates douces et faites-les rôtir 45 à 50 min à 200 °C.', 'Faites chauffer les haricots et le maïs avec le cumin.',
      'Ouvrez les patates, garnissez de haricots, fromage, avocat, crème, coriandre et citron vert.']
  },
  {
    id: 'spanakopita', nom: 'Spanakopita', cat: 'Végétarien', cuisine: 'Grecque', emoji: '🥧',
    desc: 'Tourte feuilletée grecque aux épinards et à la feta.',
    portions: 8, prep: 30, cuisson: 45, diff: 2,
    ing: [['epinards', 800], ['feta', 250], ['ricotta', 150], ['oeuf', 2, 'pc'], ['oignon_nouveau', 4, 'pc'], ['aneth', 15], ['pate_filo', 10, 'pc', 'Feuilles de filo'],
      ['beurre', 60, 'g', 'Beurre fondu'], ['muscade', 1, 'pincee']],
    etapes: ['Faites tomber les épinards, pressez-les fortement et hachez-les.', 'Mélangez avec la feta, la ricotta, les œufs, l\'oignon, l\'aneth et la muscade.',
      'Dans un plat, superposez 5 feuilles beurrées, la farce, puis 5 feuilles beurrées. Entaillez le dessus en parts.', 'Enfournez 45 min à 180 °C.']
  },
  {
    id: 'souffle-fromage', nom: 'Soufflé au fromage', cat: 'Végétarien', cuisine: 'Française', emoji: '🧀',
    desc: 'Le soufflé aérien au comté, à servir dès la sortie du four.',
    portions: 4, prep: 20, cuisson: 30, diff: 3,
    ing: [['beurre', 40], ['farine', 40], ['lait_entier', 300, 'ml'], ['oeuf', 4, 'pc'], ['comte', 120], ['muscade', 1, 'pincee'], ['sel', 0, 'qs']],
    etapes: ['Béchamel épaisse : roux beurre-farine, puis le lait. Hors du feu, ajoutez les jaunes, le fromage râpé et la muscade.',
      'Montez les blancs en neige ferme avec une pincée de sel, incorporez-les délicatement.', 'Versez dans un moule à soufflé beurré aux trois quarts.',
      'Enfournez 25 à 30 min à 190 °C sans jamais ouvrir le four.']
  },
  {
    id: 'burrito-bowl', nom: 'Burrito bowl', cat: 'Végétarien', cuisine: 'Tex-Mex', emoji: '🥙',
    desc: 'Riz citron vert, haricots noirs épicés, maïs, avocat et salsa.',
    portions: 4, prep: 20, cuisson: 20, diff: 1,
    ing: [['riz_blanc', 240], ['haricots_noirs', 400], ['mais', 150], ['avocat', 2, 'pc'], ['tomate', 2, 'pc'], ['oignon_rouge', 0.5, 'pc'], ['cheddar', 80, 'g', 'Cheddar râpé'],
      ['yaourt_grec', 100], ['citron_vert', 2, 'pc'], ['coriandre', 15], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['salade', 100], ['sel', 0, 'qs']],
    etapes: ['Faites cuire le riz, mélangez-le avec le jus d\'un citron vert et la moitié de la coriandre.', 'Faites chauffer les haricots avec le cumin et le paprika.',
      'Salsa : tomates, oignon, reste de coriandre et de citron vert.', 'Composez les bols : riz, salade, haricots, maïs, avocat, salsa, fromage et yaourt.']
  },
  {
    id: 'caponata', nom: 'Caponata sicilienne', cat: 'Végétarien', cuisine: 'Sicilienne', emoji: '🍆',
    desc: 'Aubergines aigres-douces aux câpres, olives et pignons.',
    portions: 6, prep: 25, cuisson: 40, diff: 1,
    ing: [['aubergine', 3, 'pc'], ['celeri', 3, 'pc'], ['oignon', 1, 'pc'], ['tomates_concassees', 400], ['olives', 60, 'g', 'Olives vertes'], ['capres', 2, 'cs'],
      ['vinaigre', 4, 'cs'], ['sucre', 1, 'cs'], ['huile_olive', 6, 'cs'], ['pignons', 20], ['basilic', 10], ['sel', 0, 'qs']],
    etapes: ['Faites dorer les aubergines en cubes dans l\'huile, réservez.', 'Faites revenir l\'oignon et le céleri, ajoutez les tomates et cuisez 10 min.',
      'Ajoutez les aubergines, olives, câpres, le vinaigre et le sucre. Mijotez 15 min.', 'Ajoutez pignons et basilic. Servez tiède ou froid.']
  },
  {
    id: 'imam-bayildi', nom: 'Imam bayildi', cat: 'Végétarien', cuisine: 'Turque', emoji: '🍆',
    desc: 'Aubergines farcies aux oignons et tomates, confites à l\'huile d\'olive.',
    portions: 4, prep: 25, cuisson: 60, diff: 2,
    ing: [['aubergine', 4, 'pc'], ['oignon', 3, 'pc'], ['tomate', 4, 'pc'], ['ail', 4, 'pc'], ['persil', 20], ['huile_olive', 6, 'cs'], ['sucre', 1, 'cc'], ['citron', 0.5, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Fendez les aubergines dans la longueur et faites-les dorer dans 3 c. à soupe d\'huile.', 'Faites fondre les oignons et l\'ail, ajoutez les tomates, le sucre et le persil.',
      'Farcissez les aubergines, arrosez du reste d\'huile, du citron et d\'un fond d\'eau.', 'Enfournez 45 min à 180 °C. Servez tiède.']
  },
  {
    id: 'couscous-legumes', nom: 'Couscous aux sept légumes', cat: 'Végétarien', cuisine: 'Marocaine', emoji: '🥕',
    desc: 'Le couscous végétarien aux légumes fondants, pois chiches et raisins.',
    portions: 6, prep: 30, cuisson: 60, diff: 1,
    ing: [['semoule', 450], ['pois_chiches', 400], ['carotte', 4, 'pc'], ['courgette', 3, 'pc'], ['navet', 2, 'pc'], ['oignon', 2, 'pc'], ['tomates_concassees', 400],
      ['butternut', 400], ['ras_el_hanout', 1, 'cs'], ['raisins_secs', 40], ['huile_olive', 3, 'cs'], ['bouillon', 1500, 'ml', 'Bouillon de légumes'], ['beurre', 20], ['harissa', 1, 'cc']],
    etapes: ['Faites revenir les oignons dans l\'huile avec le ras el hanout.', 'Ajoutez les tomates, le bouillon, les carottes et les navets, cuisez 20 min.',
      'Ajoutez la courge, puis 10 min après les courgettes, les pois chiches et les raisins. Cuisez 20 min.',
      'Préparez la semoule avec le même volume d\'eau bouillante et le beurre. Servez avec le bouillon relevé de harissa.']
  },
  {
    id: 'frittata', nom: 'Frittata aux légumes', cat: 'Végétarien', cuisine: 'Italienne', emoji: '🍳',
    desc: 'Omelette épaisse aux légumes, finie au four.',
    portions: 4, prep: 15, cuisson: 20, diff: 1,
    ing: [['oeuf', 8, 'pc'], ['courgette', 1, 'pc'], ['poivron', 1, 'pc'], ['oignon', 1, 'pc'], ['epinards', 100], ['parmesan', 40], ['huile_olive', 2, 'cs'], ['basilic', 5], ['sel', 0, 'qs']],
    etapes: ['Faites revenir les légumes en dés dans l\'huile dans une poêle allant au four.', 'Battez les œufs avec le parmesan, le basilic, sel et poivre.',
      'Versez sur les légumes, laissez prendre 5 min à feu doux.', 'Terminez 10 min au four à 180 °C.']
  },
  {
    id: 'bolognaise-lentilles', nom: 'Bolognaise végétale aux lentilles', cat: 'Végétarien', cuisine: 'Italienne', emoji: '🌱',
    desc: 'La sauce bolognaise version lentilles, riche en fibres et en protéines.',
    portions: 4, prep: 15, cuisson: 40, diff: 1,
    ing: [['lentilles_vertes', 200], ['tomates_concassees', 800], ['oignon', 1, 'pc'], ['carotte', 2, 'pc'], ['celeri', 2, 'pc'], ['ail', 2, 'pc'], ['concentre_tomate', 1, 'cs'],
      ['huile_olive', 3, 'cs'], ['origan', 1, 'cc'], ['pates', 400, 'g', 'Spaghetti'], ['parmesan', 40], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon, la carotte, le céleri et l\'ail hachés dans l\'huile.', 'Ajoutez les lentilles rincées, les tomates, le concentré, l\'origan et 40 cl d\'eau.',
      'Laissez mijoter 30 min jusqu\'à ce que les lentilles soient tendres.', 'Servez avec les spaghetti et le parmesan.']
  },
  {
    id: 'chou-fleur-roti-tahini', nom: 'Chou-fleur rôti entier, sauce tahini', cat: 'Végétarien', cuisine: 'Moyen-Orient', emoji: '🥦',
    desc: 'Chou-fleur épicé rôti au four, pois chiches croustillants et sauce sésame.',
    portions: 4, prep: 15, cuisson: 50, diff: 1,
    ing: [['chou_fleur', 1, 'pc'], ['pois_chiches', 240], ['huile_olive', 3, 'cs'], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['tahini', 60], ['citron', 1, 'pc'],
      ['ail', 1, 'pc'], ['persil', 15], ['sel', 0, 'qs']],
    etapes: ['Blanchissez le chou-fleur entier 8 min à l\'eau salée.', 'Badigeonnez-le d\'huile et d\'épices, entourez-le des pois chiches. Rôtissez 40 min à 210 °C.',
      'Sauce : tahini, jus de citron, ail râpé et eau froide jusqu\'à consistance crémeuse.', 'Nappez de sauce et parsemez de persil.']
  },
  {
    id: 'tempeh-cacahuete', nom: 'Tempeh sauté sauce cacahuète', cat: 'Végétarien', cuisine: 'Indonésienne', emoji: '🥜',
    desc: 'Tempeh doré, brocoli et sauce cacahuète-citron vert. 100 % végétal.',
    portions: 4, prep: 15, cuisson: 15, diff: 1,
    ing: [['tempeh', 400], ['beurre_cacahuete', 60], ['sauce_soja', 3, 'cs'], ['citron_vert', 1, 'pc'], ['sirop_erable', 1, 'cs'], ['ail', 1, 'pc'], ['brocoli', 300],
      ['huile_neutre', 1, 'cs'], ['riz_blanc', 240]],
    etapes: ['Coupez le tempeh en tranches et faites-le dorer dans l\'huile.', 'Faites cuire le brocoli à la vapeur et le riz.',
      'Sauce : beurre de cacahuète, sauce soja, citron vert, sirop d\'érable, ail et un peu d\'eau chaude.', 'Enrobez le tempeh de sauce et servez avec le riz et le brocoli.']
  },

  // ================= PÂTES & RIZ =================
  {
    id: 'linguine-vongole', nom: 'Linguine alle vongole', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🐚',
    desc: 'Pâtes aux palourdes, ail, vin blanc et persil.',
    portions: 4, prep: 15, cuisson: 15, diff: 2,
    ing: [['pates', 400, 'g', 'Linguine'], ['palourdes', 1000], ['ail', 3, 'pc'], ['vin_blanc', 100, 'ml'], ['huile_olive', 4, 'cs'], ['persil', 15], ['piment', 1, 'pc']],
    etapes: ['Faites dégorger les palourdes 1 h dans l\'eau salée.', 'Faites revenir l\'ail et le piment dans l\'huile, ajoutez les palourdes et le vin. Couvrez 3 min jusqu\'à ouverture.',
      'Faites cuire les pâtes 2 min de moins que le temps indiqué.', 'Terminez la cuisson des pâtes dans la sauce des palourdes. Ajoutez le persil.']
  },
  {
    id: 'pasta-norma', nom: 'Pasta alla norma', cat: 'Pâtes & riz', cuisine: 'Sicilienne', emoji: '🍆',
    desc: 'Pâtes à la sauce tomate, aubergines frites et ricotta.',
    portions: 4, prep: 15, cuisson: 30, diff: 1,
    ing: [['pates', 400, 'g', 'Rigatoni'], ['aubergine', 2, 'pc'], ['coulis_tomate', 500], ['ail', 2, 'pc'], ['huile_olive', 6, 'cs'], ['ricotta', 100, 'g', 'Ricotta salata'], ['basilic', 10], ['sel', 0, 'qs']],
    etapes: ['Faites dorer les aubergines en cubes dans 4 c. à soupe d\'huile.', 'Faites revenir l\'ail dans le reste d\'huile, ajoutez le coulis et mijotez 15 min.',
      'Ajoutez les aubergines et les pâtes cuites, puis le basilic.', 'Servez avec la ricotta émiettée.']
  },
  {
    id: 'pates-thon-tomate', nom: 'Pâtes au thon à la sauce tomate', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🐟',
    desc: 'Le plat du placard, rapide et riche en protéines.',
    portions: 4, prep: 5, cuisson: 20, diff: 1,
    ing: [['pates', 400], ['thon_boite', 200], ['coulis_tomate', 500], ['oignon', 1, 'pc'], ['ail', 1, 'pc'], ['capres', 1, 'cs'], ['huile_olive', 2, 'cs'], ['origan', 1, 'cc'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon et l\'ail dans l\'huile.', 'Ajoutez le coulis et l\'origan, mijotez 10 min.', 'Ajoutez le thon émietté et les câpres. Mélangez avec les pâtes cuites.']
  },
  {
    id: 'cacio-e-pepe', nom: 'Cacio e pepe', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🧀',
    desc: 'Trois ingrédients : pâtes, pecorino et poivre, émulsionnés en sauce crémeuse.',
    portions: 4, prep: 5, cuisson: 12, diff: 2,
    ing: [['pates', 400, 'g', 'Spaghetti ou tonnarelli'], ['parmesan', 120, 'g', 'Pecorino romano'], ['poivre', 2, 'cc', 'Poivre noir concassé']],
    etapes: ['Faites cuire les pâtes dans peu d\'eau, gardez-en 2 louches.', 'Torréfiez le poivre à sec dans une grande poêle.',
      'Mélangez le fromage râpé avec un peu d\'eau de cuisson tiède pour former une crème.', 'Hors du feu, mélangez les pâtes avec le poivre et la crème de fromage en ajoutant de l\'eau de cuisson.']
  },
  {
    id: 'fettuccine-alfredo-poulet', nom: 'Fettuccine Alfredo au poulet', cat: 'Pâtes & riz', cuisine: 'Américaine', emoji: '🍝',
    desc: 'Sauce crème-parmesan et poulet grillé.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['pates', 400, 'g', 'Fettuccine'], ['poulet_blanc', 400], ['creme_30', 200, 'ml'], ['beurre', 30], ['parmesan', 80], ['ail', 2, 'pc'], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Faites griller le poulet et tranchez-le.', 'Faites fondre le beurre avec l\'ail, ajoutez la crème et laissez frémir 3 min. Ajoutez le parmesan.',
      'Mélangez avec les fettuccine cuites et le poulet. Parsemez de persil.']
  },
  {
    id: 'pates-quatre-fromages', nom: 'Pâtes aux quatre fromages', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🧀',
    desc: 'Gorgonzola, mozzarella, parmesan et comté fondus dans la crème.',
    portions: 4, prep: 5, cuisson: 15, diff: 1,
    ing: [['pates', 400, 'g', 'Penne'], ['bleu', 80, 'g', 'Gorgonzola'], ['mozzarella', 1, 'pc'], ['parmesan', 50], ['comte', 60], ['creme_30', 150, 'ml'], ['poivre', 0, 'qs']],
    etapes: ['Faites cuire les pâtes.', 'Faites fondre doucement les fromages dans la crème.', 'Mélangez avec les pâtes et poivrez.']
  },
  {
    id: 'tagliatelles-champignons', nom: 'Tagliatelles aux champignons à la crème', cat: 'Pâtes & riz', cuisine: 'Française', emoji: '🍄',
    desc: 'Champignons dorés, crème, ail et persil.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [['pates', 400, 'g', 'Tagliatelles'], ['champignons', 500], ['echalote', 2, 'pc'], ['ail', 1, 'pc'], ['creme_15', 250, 'ml'], ['beurre', 20], ['persil', 10], ['parmesan', 30], ['sel', 0, 'qs']],
    etapes: ['Faites dorer les champignons émincés dans le beurre à feu vif.', 'Ajoutez les échalotes et l\'ail, puis la crème. Laissez réduire 3 min.',
      'Mélangez avec les tagliatelles, le persil et le parmesan.']
  },
  {
    id: 'puttanesca', nom: 'Spaghetti alla puttanesca', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🫒',
    desc: 'Sauce tomate corsée aux olives, câpres, anchois et piment.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['pates', 400, 'g', 'Spaghetti'], ['tomates_concassees', 600], ['olives', 80, 'g', 'Olives noires'], ['capres', 2, 'cs'], ['anchois', 6, 'pc'], ['ail', 3, 'pc'],
      ['piment', 1, 'pc'], ['huile_olive', 3, 'cs'], ['persil', 10]],
    etapes: ['Faites fondre les anchois dans l\'huile avec l\'ail et le piment.', 'Ajoutez les tomates, les olives et les câpres, mijotez 15 min.', 'Mélangez avec les spaghetti et le persil.']
  },
  {
    id: 'amatriciana', nom: 'Bucatini all\'amatriciana', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🍅',
    desc: 'Guanciale croustillant, tomate et pecorino.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['pates', 400, 'g', 'Bucatini'], ['lardons', 150, 'g', 'Guanciale'], ['tomates_concassees', 600], ['oignon', 0.5, 'pc'], ['piment', 1, 'pc'],
      ['parmesan', 60, 'g', 'Pecorino'], ['vin_blanc', 50, 'ml']],
    etapes: ['Faites dorer le guanciale à sec, déglacez au vin blanc.', 'Ajoutez l\'oignon, le piment et les tomates, mijotez 15 min.', 'Mélangez avec les pâtes et le pecorino.']
  },
  {
    id: 'gnocchis-sauge', nom: 'Gnocchis au beurre de sauge', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🌿',
    desc: 'Gnocchis dorés au beurre noisette et sauge croustillante.',
    portions: 4, prep: 5, cuisson: 10, diff: 1,
    ing: [['gnocchi', 1000], ['beurre', 80], ['sauge', 16, 'pc'], ['parmesan', 50], ['poivre', 0, 'qs']],
    etapes: ['Faites cuire les gnocchis jusqu\'à ce qu\'ils remontent.', 'Faites mousser le beurre avec la sauge jusqu\'à ce qu\'il soit noisette.',
      'Ajoutez les gnocchis égouttés et faites-les dorer 2 min. Servez avec le parmesan.']
  },
  {
    id: 'risotto-milanaise', nom: 'Risotto à la milanaise', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🟡',
    desc: 'Risotto doré au safran, beurre et parmesan.',
    portions: 4, prep: 10, cuisson: 25, diff: 2,
    ing: [['riz_arborio', 320], ['safran', 1, 'pc'], ['oignon', 1, 'pc'], ['vin_blanc', 150, 'ml'], ['bouillon', 1200, 'ml'], ['beurre', 60], ['parmesan', 70], ['sel', 0, 'qs']],
    etapes: ['Faites fondre l\'oignon dans 20 g de beurre, nacrez le riz 2 min.', 'Déglacez au vin, puis ajoutez le bouillon chaud louche par louche en remuant (18 min).',
      'Ajoutez le safran infusé dans un peu de bouillon à mi-cuisson.', 'Hors du feu, incorporez le reste du beurre et le parmesan.']
  },
  {
    id: 'risotto-courge', nom: 'Risotto à la courge et à la sauge', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🎃',
    desc: 'Risotto d\'automne fondant à la butternut.',
    portions: 4, prep: 15, cuisson: 30, diff: 2,
    ing: [['riz_arborio', 320], ['butternut', 500], ['oignon', 1, 'pc'], ['vin_blanc', 100, 'ml'], ['bouillon', 1200, 'ml'], ['parmesan', 50], ['beurre', 30], ['sauge', 6, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon et la courge en petits dés dans le beurre.', 'Ajoutez le riz et nacrez-le, puis le vin.',
      'Ajoutez le bouillon louche par louche en remuant (18 min) : la courge fond et rend le risotto crémeux.', 'Incorporez le parmesan et la sauge ciselée.']
  },
  {
    id: 'coquillettes-jambon', nom: 'Coquillettes jambon-fromage', cat: 'Pâtes & riz', cuisine: 'Française', emoji: '🧀',
    desc: 'Le plat doudou des enfants (et des grands).',
    portions: 4, prep: 5, cuisson: 12, diff: 1,
    ing: [['pates', 400, 'g', 'Coquillettes'], ['jambon_blanc', 4, 'pc'], ['emmental', 100], ['beurre', 30], ['creme_15', 100, 'ml'], ['sel', 0, 'qs']],
    etapes: ['Faites cuire les coquillettes.', 'Égouttez et remettez dans la casserole avec le beurre et la crème.', 'Ajoutez le jambon en dés et le fromage râpé, mélangez jusqu\'à ce qu\'il file.']
  },
  {
    id: 'orecchiette-brocoli', nom: 'Orecchiette brocoli et saucisse', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🥦',
    desc: 'La spécialité des Pouilles : brocoli fondant, saucisse et piment.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['pates', 400, 'g', 'Orecchiette'], ['brocoli', 1, 'pc'], ['saucisse', 2, 'pc', 'Saucisses italiennes'], ['ail', 2, 'pc'], ['piment', 1, 'pc'], ['huile_olive', 3, 'cs'], ['parmesan', 40]],
    etapes: ['Faites cuire les pâtes avec les fleurettes de brocoli les 5 dernières minutes.', 'Faites dorer la chair des saucisses émiettée dans l\'huile avec l\'ail et le piment.',
      'Mélangez avec les pâtes et le brocoli égouttés, écrasez un peu le brocoli. Servez avec le parmesan.']
  },
  {
    id: 'spaghetti-pomodoro', nom: 'Spaghetti al pomodoro', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🍅',
    desc: 'La plus simple et la meilleure des sauces tomate.',
    portions: 4, prep: 5, cuisson: 25, diff: 1,
    ing: [['pates', 400, 'g', 'Spaghetti'], ['tomates_concassees', 800], ['ail', 2, 'pc'], ['huile_olive', 4, 'cs'], ['basilic', 15], ['parmesan', 30], ['sel', 0, 'qs']],
    etapes: ['Faites dorer l\'ail dans l\'huile.', 'Ajoutez les tomates et laissez mijoter 20 min. Salez.', 'Mélangez avec les spaghetti et le basilic. Servez avec le parmesan.']
  },
  {
    id: 'pates-courgette-ricotta', nom: 'Pâtes courgette, citron et ricotta', cat: 'Pâtes & riz', cuisine: 'Italienne', emoji: '🍋',
    desc: 'Fraîches et légères, idéales en été.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [['pates', 400], ['courgette', 3, 'pc'], ['ricotta', 200], ['citron', 1, 'pc'], ['parmesan', 40], ['huile_olive', 3, 'cs'], ['basilic', 10], ['ail', 1, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Faites sauter les courgettes en fines rondelles dans l\'huile avec l\'ail.', 'Mélangez la ricotta avec le zeste et le jus du citron.',
      'Mélangez les pâtes avec les courgettes, la ricotta, un peu d\'eau de cuisson, le parmesan et le basilic.']
  },
  {
    id: 'riz-jollof', nom: 'Riz jollof', cat: 'Pâtes & riz', cuisine: 'Africaine de l\'Ouest', emoji: '🍚',
    desc: 'Riz cuit dans une sauce tomate-poivron épicée, star des fêtes ouest-africaines.',
    portions: 6, prep: 20, cuisson: 45, diff: 1,
    ing: [['riz_blanc', 450], ['tomates_concassees', 400], ['concentre_tomate', 3, 'cs'], ['poivron', 2, 'pc'], ['oignon', 2, 'pc'], ['piment', 1, 'pc'], ['ail', 3, 'pc'],
      ['gingembre', 10], ['curry', 1, 'cc'], ['thym', 2, 'pc'], ['laurier', 1, 'pc'], ['bouillon', 800, 'ml'], ['huile_neutre', 4, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Mixez les tomates, les poivrons, un oignon, l\'ail, le gingembre et le piment.', 'Faites revenir l\'autre oignon dans l\'huile, ajoutez le concentré puis la purée. Cuisez 15 min.',
      'Ajoutez le riz rincé, les épices, le bouillon et les herbes.', 'Couvrez et laissez cuire 25 min à feu doux sans remuer.']
  },
  {
    id: 'nasi-goreng', nom: 'Nasi goreng', cat: 'Pâtes & riz', cuisine: 'Indonésienne', emoji: '🍳',
    desc: 'Riz sauté indonésien au poulet et crevettes, œuf au plat.',
    portions: 4, prep: 20, cuisson: 15, diff: 1,
    ing: [['riz_blanc', 300, 'g', 'Riz cuit la veille (poids cru)'], ['poulet_blanc', 250], ['crevettes', 150], ['oeuf', 4, 'pc'], ['echalote', 3, 'pc'], ['ail', 2, 'pc'],
      ['piment', 1, 'pc'], ['sauce_soja', 3, 'cs'], ['cassonade', 1, 'cs'], ['concombre', 0.5, 'pc'], ['tomate', 1, 'pc'], ['huile_neutre', 3, 'cs']],
    etapes: ['Pilez les échalotes, l\'ail et le piment.', 'Faites revenir cette pâte dans l\'huile, ajoutez le poulet émincé puis les crevettes.',
      'Ajoutez le riz, la sauce soja et la cassonade, faites sauter 5 min.', 'Servez avec un œuf au plat, du concombre et de la tomate.']
  },
  {
    id: 'oyakodon', nom: 'Oyakodon', cat: 'Pâtes & riz', cuisine: 'Japonaise', emoji: '🍚',
    desc: 'Bol de riz au poulet et œuf mijotés dans un bouillon sucré-salé.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [['poulet_cuisse', 500], ['oignon', 1, 'pc'], ['oeuf', 6, 'pc'], ['bouillon', 300, 'ml', 'Dashi'], ['sauce_soja', 4, 'cs'], ['mirin', 3, 'cs'], ['sucre', 1, 'cs'],
      ['riz_blanc', 300, 'g', 'Riz japonais'], ['oignon_nouveau', 2, 'pc']],
    etapes: ['Faites frémir le bouillon avec la sauce soja, le mirin et le sucre.', 'Ajoutez l\'oignon émincé et le poulet en morceaux, cuisez 8 min.',
      'Versez les œufs légèrement battus, couvrez 1 à 2 min : ils doivent rester coulants.', 'Glissez sur le riz chaud et parsemez d\'oignon nouveau.']
  },
  {
    id: 'gyudon', nom: 'Gyudon', cat: 'Pâtes & riz', cuisine: 'Japonaise', emoji: '🥩',
    desc: 'Bol de riz garni de bœuf et oignons mijotés au soja.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [['boeuf_steak', 500, 'g', 'Bœuf très finement tranché'], ['oignon', 2, 'pc'], ['bouillon', 300, 'ml', 'Dashi'], ['sauce_soja', 4, 'cs'], ['mirin', 3, 'cs'], ['sucre', 1, 'cs'],
      ['gingembre', 10], ['riz_blanc', 300, 'g', 'Riz japonais']],
    etapes: ['Faites mijoter les oignons émincés 5 min dans le bouillon avec la sauce soja, le mirin, le sucre et le gingembre.',
      'Ajoutez le bœuf et cuisez 2 min en remuant.', 'Servez sur le riz avec un peu de jus.']
  },
  {
    id: 'bo-bun', nom: 'Bo bun au bœuf', cat: 'Pâtes & riz', cuisine: 'Vietnamienne', emoji: '🥗',
    desc: 'Vermicelles, bœuf sauté à la citronnelle, crudités, herbes et cacahuètes.',
    portions: 4, prep: 30, cuisson: 10, diff: 1,
    ing: [['nouilles_riz', 250, 'g', 'Vermicelles de riz'], ['boeuf_steak', 400], ['citronnelle', 2, 'pc'], ['ail', 2, 'pc'], ['nuoc_mam', 5, 'cs'], ['sucre', 2, 'cs'],
      ['citron_vert', 2, 'pc'], ['salade', 150], ['concombre', 1, 'pc'], ['carotte', 2, 'pc'], ['pousses_soja', 150], ['menthe', 10], ['coriandre', 10],
      ['cacahuetes', 50], ['oignon', 1, 'pc'], ['huile_neutre', 2, 'cs']],
    etapes: ['Marinez le bœuf émincé avec la citronnelle, l\'ail et 1 c. à soupe de nuoc-mâm.', 'Faites cuire les vermicelles, rincez-les à l\'eau froide.',
      'Sauce : 4 c. à soupe de nuoc-mâm, sucre, citron vert et 15 cl d\'eau.', 'Saisissez le bœuf et l\'oignon à feu vif 3 min.',
      'Composez les bols : salade, crudités, vermicelles, bœuf, herbes, cacahuètes. Arrosez de sauce.']
  },
  {
    id: 'dan-dan', nom: 'Nouilles dan dan', cat: 'Pâtes & riz', cuisine: 'Chinoise', emoji: '🌶️',
    desc: 'Nouilles du Sichuan au porc épicé et sauce sésame.',
    portions: 4, prep: 15, cuisson: 15, diff: 2,
    ing: [['nouilles_ramen', 320, 'g', 'Nouilles de blé'], ['porc_hache', 250], ['sauce_soja', 4, 'cs'], ['tahini', 3, 'cs', 'Pâte de sésame'], ['sauce_sriracha', 2, 'cs', 'Huile pimentée'],
      ['vinaigre_riz', 1, 'cs'], ['sucre', 1, 'cc'], ['ail', 2, 'pc'], ['gingembre', 10], ['chou_chinois', 2, 'pc'], ['cacahuetes', 30], ['oignon_nouveau', 2, 'pc'], ['huile_neutre', 2, 'cs']],
    etapes: ['Faites dorer le porc avec l\'ail, le gingembre et 1 c. à soupe de sauce soja.', 'Sauce : tahini, reste de sauce soja, huile pimentée, vinaigre, sucre et un peu d\'eau chaude.',
      'Faites cuire les nouilles et le pak choï.', 'Répartissez la sauce dans les bols, ajoutez nouilles, porc, pak choï, cacahuètes et oignon nouveau.']
  },
  {
    id: 'nouilles-singapour', nom: 'Nouilles de Singapour', cat: 'Pâtes & riz', cuisine: 'Chinoise', emoji: '🍜',
    desc: 'Vermicelles sautés au curry, crevettes, porc et légumes.',
    portions: 4, prep: 20, cuisson: 10, diff: 1,
    ing: [['nouilles_riz', 250, 'g', 'Vermicelles de riz'], ['crevettes', 200], ['porc_filet', 200], ['oeuf', 2, 'pc'], ['poivron', 1, 'pc'], ['oignon', 1, 'pc'],
      ['pousses_soja', 100], ['curry', 2, 'cc'], ['sauce_soja', 3, 'cs'], ['huile_neutre', 3, 'cs'], ['oignon_nouveau', 2, 'pc']],
    etapes: ['Faites tremper les vermicelles 5 min dans l\'eau chaude, égouttez.', 'Faites une omelette fine, coupez-la en lanières.',
      'Faites sauter le porc émincé et les crevettes, puis les légumes.', 'Ajoutez les vermicelles, le curry et la sauce soja, mélangez 3 min. Ajoutez l\'omelette et l\'oignon nouveau.']
  },
  {
    id: 'japchae', nom: 'Japchae', cat: 'Pâtes & riz', cuisine: 'Coréenne', emoji: '🍜',
    desc: 'Nouilles de patate douce sautées au bœuf, légumes et sésame.',
    portions: 4, prep: 25, cuisson: 15, diff: 2,
    ing: [['nouilles_riz', 250, 'g', 'Nouilles de patate douce'], ['boeuf_steak', 200], ['epinards', 200], ['carotte', 1, 'pc'], ['poivron', 1, 'pc'],
      ['champignons_shiitake', 100], ['oignon', 1, 'pc'], ['sauce_soja', 4, 'cs'], ['sucre', 1, 'cs'], ['huile_sesame', 2, 'cs'], ['ail', 2, 'pc'], ['graines_sesame', 1, 'cs']],
    etapes: ['Faites cuire les nouilles 6 min, rincez et coupez-les aux ciseaux.', 'Faites sauter séparément le bœuf émincé et chaque légume avec un peu d\'huile de sésame.',
      'Mélangez nouilles, bœuf et légumes avec la sauce soja, le sucre, l\'ail et le reste d\'huile de sésame.', 'Parsemez de sésame.']
  }
]);
