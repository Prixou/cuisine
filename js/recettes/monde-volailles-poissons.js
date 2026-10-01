/* Lot 2 — Volailles, Poissons */
window.RECETTES = (window.RECETTES || []).concat([
  // ================= VOLAILLES =================
  {
    id: 'poulet-korma', nom: 'Poulet korma', cat: 'Volailles', cuisine: 'Indienne', emoji: '🍛',
    desc: 'Curry doux et crémeux aux amandes et à la cardamome.',
    portions: 4, prep: 15, cuisson: 30, diff: 1,
    ing: [['poulet_blanc', 600], ['yaourt_nature', 1, 'pc'], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['gingembre', 15], ['poudre_amande', 40], ['creme_30', 100, 'ml'],
      ['garam_masala', 2, 'cc'], ['cardamome', 0.5, 'cc'], ['curcuma', 0.5, 'cc'], ['beurre', 20], ['riz_blanc', 280, 'g', 'Riz basmati'], ['coriandre', 10], ['sel', 0, 'qs']],
    etapes: ['Faites fondre l\'oignon dans le beurre, ajoutez l\'ail, le gingembre et les épices.', 'Ajoutez le poulet en cubes et faites-le dorer.',
      'Ajoutez le yaourt, la poudre d\'amande et 10 cl d\'eau, laissez mijoter 15 min.', 'Ajoutez la crème, réchauffez. Servez avec le riz et la coriandre.']
  },
  {
    id: 'poulet-kung-pao', nom: 'Poulet kung pao', cat: 'Volailles', cuisine: 'Chinoise', emoji: '🥜',
    desc: 'Poulet sauté aux cacahuètes et piments, sauce aigre-douce du Sichuan.',
    portions: 4, prep: 20, cuisson: 10, diff: 1,
    ing: [['poulet_cuisse', 600], ['cacahuetes', 60], ['piment', 3, 'pc', 'Piments séchés'], ['sauce_soja', 3, 'cs'], ['vinaigre_riz', 1, 'cs'], ['sucre', 1, 'cs'],
      ['maizena', 1, 'cs'], ['ail', 2, 'pc'], ['gingembre', 10], ['oignon_nouveau', 3, 'pc'], ['poivron', 1, 'pc'], ['huile_neutre', 2, 'cs'], ['riz_blanc', 280]],
    etapes: ['Coupez le poulet en dés, enrobez-le de maïzena et d\'1 c. à soupe de sauce soja.', 'Sauce : reste de sauce soja, vinaigre, sucre et 3 c. à soupe d\'eau.',
      'Faites sauter les piments 30 s dans l\'huile, ajoutez le poulet et saisissez 4 min.', 'Ajoutez l\'ail, le gingembre, le poivron, puis la sauce et les cacahuètes. Servez avec le riz.']
  },
  {
    id: 'poulet-40-gousses', nom: 'Poulet aux 40 gousses d\'ail', cat: 'Volailles', cuisine: 'Provençale', emoji: '🧄',
    desc: 'L\'ail confit devient doux et fondant, à tartiner sur du pain.',
    portions: 6, prep: 15, cuisson: 90, diff: 1,
    ing: [['poulet_entier', 1100, 'g', 'Poulet de 1,6 kg (partie comestible)'], ['ail', 40, 'pc'], ['thym', 3, 'pc'], ['romarin', 2, 'pc'], ['huile_olive', 3, 'cs'],
      ['vin_blanc', 100, 'ml'], ['pain', 150, 'g', 'Pain grillé'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Placez le poulet dans une cocotte avec les gousses d\'ail non pelées, les herbes, l\'huile et le vin.', 'Fermez hermétiquement et enfournez 1 h 30 à 180 °C.',
      'Servez le poulet avec l\'ail confit à presser sur le pain grillé.']
  },
  {
    id: 'poulet-vallee-auge', nom: 'Poulet vallée d\'Auge', cat: 'Volailles', cuisine: 'Normande', emoji: '🍏',
    desc: 'Poulet au cidre, calvados, crème et champignons.',
    portions: 4, prep: 15, cuisson: 50, diff: 2,
    ing: [['poulet_cuisse', 1000], ['champignons', 250], ['cidre', 300, 'ml'], ['alcool_fort', 3, 'cs', 'Calvados'], ['creme_30', 200, 'ml'], ['beurre', 30],
      ['echalote', 2, 'pc'], ['pomme', 2, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer le poulet dans le beurre, flambez au calvados.', 'Ajoutez les échalotes, le cidre et laissez mijoter 30 min.',
      'Ajoutez les champignons, puis la crème, poursuivez 10 min.', 'Servez avec les pommes poêlées au beurre.']
  },
  {
    id: 'poulet-gaston-gerard', nom: 'Poulet Gaston Gérard', cat: 'Volailles', cuisine: 'Bourguignonne', emoji: '🧀',
    desc: 'Poulet dijonnais gratiné au comté, moutarde et crème.',
    portions: 4, prep: 15, cuisson: 50, diff: 1,
    ing: [['poulet_cuisse', 1000], ['comte', 150], ['moutarde', 3, 'cs'], ['creme_30', 200, 'ml'], ['vin_blanc', 150, 'ml'], ['paprika', 1, 'cc'], ['chapelure', 20], ['beurre', 20], ['sel', 0, 'qs']],
    etapes: ['Faites dorer le poulet dans le beurre, saupoudrez de paprika, ajoutez le vin et laissez cuire 30 min.', 'Mélangez le comté râpé, la moutarde et la crème.',
      'Disposez le poulet dans un plat, nappez de sauce, parsemez de chapelure.', 'Gratinez 15 min à 210 °C.']
  },
  {
    id: 'poulet-piri-piri', nom: 'Poulet piri-piri', cat: 'Volailles', cuisine: 'Portugaise', emoji: '🔥',
    desc: 'Poulet mariné au piment, citron et ail, grillé au four.',
    portions: 4, prep: 15, cuisson: 45, diff: 1,
    ing: [['poulet_cuisse', 1000], ['piment', 3, 'pc'], ['ail', 4, 'pc'], ['citron', 2, 'pc'], ['paprika', 2, 'cc'], ['huile_olive', 4, 'cs'], ['origan', 1, 'cc'],
      ['vinaigre', 1, 'cs'], ['pomme_de_terre', 800], ['sel', 0, 'qs']],
    etapes: ['Mixez les piments, l\'ail, le jus de citron, le paprika, l\'origan, le vinaigre, 3 c. à soupe d\'huile et le sel.', 'Marinez le poulet au moins 2 h.',
      'Disposez-le avec les pommes de terre en quartiers arrosées du reste d\'huile.', 'Enfournez 45 min à 210 °C en badigeonnant de marinade.']
  },
  {
    id: 'poulet-jerk', nom: 'Poulet jerk, riz aux haricots', cat: 'Volailles', cuisine: 'Jamaïcaine', emoji: '🌴',
    desc: 'Marinade épicée au piment, thym et piment de la Jamaïque, riz coco aux haricots rouges.',
    portions: 4, prep: 25, cuisson: 45, diff: 2,
    ing: [['poulet_cuisse', 800], ['oignon_nouveau', 4, 'pc'], ['piment', 2, 'pc'], ['ail', 3, 'pc'], ['gingembre', 15], ['thym', 3, 'pc'], ['cannelle', 0.5, 'cc'],
      ['cinq_epices', 1, 'cc', 'Piment de la Jamaïque (allspice)'], ['sauce_soja', 3, 'cs'], ['cassonade', 1, 'cs'], ['citron_vert', 2, 'pc'], ['huile_neutre', 2, 'cs'],
      ['riz_blanc', 280], ['haricots_rouges', 200], ['lait_coco', 200, 'ml']],
    etapes: ['Mixez oignons nouveaux, piments, ail, gingembre, thym, épices, sauce soja, cassonade, citron vert et huile.', 'Marinez le poulet au moins 4 h.',
      'Faites-le cuire 40 min à 200 °C puis 5 min sous le grill.', 'Riz : cuisez le riz avec le lait de coco, les haricots égouttés et l\'eau nécessaire.']
  },
  {
    id: 'mafe-poulet', nom: 'Mafé de poulet', cat: 'Volailles', cuisine: 'Africaine de l\'Ouest', emoji: '🥜',
    desc: 'Ragoût de poulet à la sauce d\'arachide et tomate.',
    portions: 6, prep: 20, cuisson: 60, diff: 1,
    ing: [['poulet_cuisse', 900], ['beurre_cacahuete', 150], ['tomates_concassees', 400], ['concentre_tomate', 2, 'cs'], ['oignon', 2, 'pc'], ['ail', 3, 'pc'],
      ['carotte', 3, 'pc'], ['patate_douce', 1, 'pc'], ['piment', 1, 'pc'], ['bouillon', 800, 'ml'], ['huile_neutre', 2, 'cs'], ['riz_blanc', 450]],
    etapes: ['Faites dorer le poulet dans l\'huile avec les oignons et l\'ail.', 'Ajoutez les tomates, le concentré, le bouillon et le piment entier. Laissez cuire 15 min.',
      'Délayez le beurre de cacahuète dans un peu de sauce et incorporez-le.', 'Ajoutez les légumes en morceaux et laissez mijoter 40 min en remuant. Servez avec le riz.']
  },
  {
    id: 'poulet-chasseur', nom: 'Poulet chasseur', cat: 'Volailles', cuisine: 'Française', emoji: '🍄',
    desc: 'Poulet sauté aux champignons, tomate, vin blanc et estragon.',
    portions: 4, prep: 15, cuisson: 45, diff: 1,
    ing: [['poulet_cuisse', 1000], ['champignons', 300], ['echalote', 3, 'pc'], ['tomates_concassees', 200], ['vin_blanc', 200, 'ml'], ['alcool_fort', 2, 'cs', 'Cognac'],
      ['estragon', 5], ['beurre', 30], ['farine', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites dorer le poulet dans le beurre, flambez au cognac et réservez.', 'Faites revenir les échalotes et les champignons, saupoudrez de farine.',
      'Ajoutez le vin et les tomates, remettez le poulet. Laissez mijoter 35 min.', 'Ajoutez l\'estragon ciselé en fin de cuisson.']
  },
  {
    id: 'cordon-bleu', nom: 'Cordon bleu maison', cat: 'Volailles', cuisine: 'Française', emoji: '🧀',
    desc: 'Escalope de dinde farcie au jambon et fromage, panée et dorée.',
    portions: 4, prep: 25, cuisson: 15, diff: 2,
    ing: [['dinde_escalope', 4, 'pc'], ['jambon_blanc', 4, 'pc'], ['comte', 100, 'g', 'Comté ou emmental en tranches'], ['farine', 40], ['oeuf', 2, 'pc'], ['chapelure', 100],
      ['beurre', 30], ['huile_neutre', 2, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Ouvrez les escalopes en portefeuille et aplatissez-les.', 'Garnissez d\'une demi-tranche de jambon et de fromage, refermez en pressant les bords.',
      'Passez dans la farine, l\'œuf battu puis la chapelure.', 'Faites cuire 6 à 7 min par face à feu moyen dans le beurre et l\'huile.']
  },
  {
    id: 'ailes-poulet', nom: 'Ailes de poulet marinées au four', cat: 'Volailles', cuisine: 'Américaine', emoji: '🍗',
    desc: 'Chicken wings laquées miel-soja-paprika, croustillantes.',
    portions: 4, prep: 10, cuisson: 45, diff: 1,
    ing: [['ailes_poulet', 1000], ['miel', 3, 'cs'], ['sauce_soja', 3, 'cs'], ['ketchup', 2, 'cs'], ['paprika', 1, 'cs'], ['ail', 2, 'pc'], ['sauce_sriracha', 1, 'cs']],
    etapes: ['Mélangez tous les ingrédients et marinez les ailes au moins 1 h.', 'Disposez-les sur une plaque recouverte de papier cuisson.',
      'Enfournez 40 à 45 min à 200 °C en les retournant et en les badigeonnant à mi-cuisson.']
  },
  {
    id: 'poulet-paprikash', nom: 'Poulet paprikash', cat: 'Volailles', cuisine: 'Hongroise', emoji: '🌶️',
    desc: 'Poulet mijoté au paprika et à la crème, servi avec des nouilles.',
    portions: 4, prep: 15, cuisson: 45, diff: 1,
    ing: [['poulet_cuisse', 1000], ['oignon', 2, 'pc'], ['paprika', 2, 'cs'], ['poivron', 1, 'pc'], ['tomate', 2, 'pc'], ['creme_epaisse', 150], ['farine', 1, 'cs'],
      ['bouillon', 300, 'ml'], ['huile_neutre', 2, 'cs'], ['pates', 300, 'g', 'Nouilles aux œufs'], ['sel', 0, 'qs']],
    etapes: ['Faites fondre les oignons dans l\'huile, ajoutez le poulet et faites-le dorer.', 'Hors du feu, saupoudrez de paprika, puis ajoutez le poivron, les tomates et le bouillon.',
      'Laissez mijoter 35 min.', 'Mélangez la crème et la farine, incorporez à la sauce et laissez épaissir 3 min. Servez avec les nouilles.']
  },
  {
    id: 'pastilla-poulet', nom: 'Pastilla au poulet', cat: 'Volailles', cuisine: 'Marocaine', emoji: '🥧',
    desc: 'Feuilleté sucré-salé au poulet, amandes, cannelle et fleur d\'oranger.',
    portions: 8, prep: 60, cuisson: 90, diff: 3,
    ing: [['poulet_cuisse', 1000], ['pate_filo', 10, 'pc'], ['oignon', 3, 'pc'], ['amandes', 150], ['sucre_glace', 40], ['cannelle', 2, 'cc'], ['oeuf', 4, 'pc'],
      ['gingembre_poudre', 1, 'cc'], ['safran', 1, 'pc'], ['persil', 20], ['coriandre', 20], ['beurre', 80], ['fleur_oranger', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites mijoter le poulet 1 h avec les oignons, les épices, les herbes, 20 g de beurre et un verre d\'eau. Effilochez-le.',
      'Faites réduire la sauce et ajoutez les œufs battus en remuant comme des œufs brouillés.', 'Mixez grossièrement les amandes grillées avec la moitié du sucre glace, la fleur d\'oranger et 1 c. à café de cannelle.',
      'Dans un moule beurré, superposez des feuilles beurrées, le poulet, les œufs, les amandes, puis refermez avec les feuilles.',
      'Enfournez 25 min à 180 °C. Saupoudrez de sucre glace et de cannelle.']
  },
  {
    id: 'pad-kra-pao', nom: 'Poulet au basilic thaï (pad kra pao)', cat: 'Volailles', cuisine: 'Thaïlandaise', emoji: '🌿',
    desc: 'Poulet haché sauté au basilic sacré et piment, avec riz et œuf au plat.',
    portions: 4, prep: 15, cuisson: 10, diff: 1,
    ing: [['poulet_cuisse', 500, 'g', 'Poulet haché'], ['basilic', 30, 'g', 'Basilic thaï'], ['ail', 4, 'pc'], ['piment', 3, 'pc'], ['sauce_huitre', 2, 'cs'], ['sauce_soja', 2, 'cs'],
      ['nuoc_mam', 1, 'cs'], ['sucre', 1, 'cc'], ['huile_neutre', 2, 'cs'], ['oeuf', 4, 'pc'], ['riz_blanc', 280, 'g', 'Riz jasmin']],
    etapes: ['Pilez l\'ail et les piments.', 'Faites-les revenir 30 s dans l\'huile très chaude, ajoutez le poulet et faites-le sauter 4 min.',
      'Ajoutez les sauces et le sucre, puis le basilic hors du feu.', 'Servez sur le riz avec un œuf au plat croustillant.']
  },
  {
    id: 'enchiladas-poulet', nom: 'Enchiladas au poulet', cat: 'Volailles', cuisine: 'Mexicaine', emoji: '🌯',
    desc: 'Tortillas roulées farcies de poulet, nappées de sauce tomate épicée et gratinées.',
    portions: 4, prep: 25, cuisson: 25, diff: 1,
    ing: [['poulet_blanc', 500], ['tortilla', 8, 'pc'], ['coulis_tomate', 500], ['oignon', 1, 'pc'], ['ail', 2, 'pc'], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'],
      ['piment_poudre', 1, 'pincee'], ['cheddar', 150, 'g', 'Cheddar râpé'], ['creme_epaisse', 100], ['coriandre', 10], ['sel', 0, 'qs']],
    etapes: ['Pochez le poulet 12 min et effilochez-le.', 'Sauce : faites revenir l\'oignon, l\'ail et les épices, ajoutez le coulis et laissez mijoter 10 min.',
      'Mélangez le poulet avec un tiers de la sauce et la moitié du fromage, roulez dans les tortillas.', 'Disposez dans un plat, nappez du reste de sauce et de fromage. Gratinez 15 min à 200 °C.',
      'Servez avec la crème et la coriandre.']
  },
  {
    id: 'canard-orange', nom: 'Canard à l\'orange', cat: 'Volailles', cuisine: 'Française', emoji: '🍊',
    desc: 'Magrets rosés et sauce bigarade à l\'orange caramélisée.',
    portions: 4, prep: 20, cuisson: 25, diff: 2,
    ing: [['canard_magret', 2, 'pc'], ['orange', 4, 'pc'], ['sucre', 40], ['vinaigre', 3, 'cs'], ['bouillon', 200, 'ml'], ['alcool_fort', 2, 'cs', 'Grand Marnier'],
      ['maizena', 1, 'cc'], ['beurre', 10], ['sel', 0, 'qs']],
    etapes: ['Faites un caramel avec le sucre, déglacez avec le vinaigre, puis le jus de 3 oranges et le bouillon. Réduisez de moitié.',
      'Ajoutez la liqueur et la maïzena délayée, puis des zestes blanchis.', 'Faites cuire les magrets 8 min côté peau et 4 min côté chair, laissez reposer.',
      'Tranchez, nappez de sauce et décorez de suprêmes d\'orange.']
  },
  {
    id: 'parmentier-canard', nom: 'Parmentier de canard', cat: 'Volailles', cuisine: 'Française', emoji: '🦆',
    desc: 'Confit de canard effiloché sous une purée gratinée.',
    portions: 6, prep: 30, cuisson: 45, diff: 1,
    ing: [['canard_cuisse_confite', 4, 'pc'], ['pomme_de_terre', 1200], ['lait_demi', 200, 'ml'], ['graisse_canard', 2, 'cs'], ['echalote', 3, 'pc'], ['persil', 15],
      ['chapelure', 20], ['sel', 0, 'qs']],
    etapes: ['Faites réchauffer les cuisses, retirez la peau et les os, effilochez la chair.', 'Faites revenir les échalotes dans la graisse de canard, ajoutez la viande et le persil.',
      'Préparez une purée avec les pommes de terre et le lait chaud.', 'Étalez la viande puis la purée dans un plat, saupoudrez de chapelure. Gratinez 20 min à 200 °C.']
  },
  {
    id: 'curry-dinde-lentilles', nom: 'Curry de dinde aux lentilles corail', cat: 'Volailles', cuisine: 'Healthy', emoji: '💪',
    desc: 'Plat complet riche en protéines, maigre et rassasiant.',
    portions: 4, prep: 15, cuisson: 25, diff: 1,
    ing: [['dinde_escalope', 500, 'g', 'Escalopes de dinde en cubes'], ['lentilles_corail', 150], ['lait_coco', 200, 'ml'], ['tomates_concassees', 400], ['oignon', 1, 'pc'],
      ['ail', 2, 'pc'], ['gingembre', 10], ['curry', 1, 'cs'], ['epinards', 100], ['huile_neutre', 1, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon, l\'ail, le gingembre et le curry dans l\'huile.', 'Ajoutez la dinde et faites-la dorer.',
      'Ajoutez les lentilles, les tomates, le lait de coco et 30 cl d\'eau. Laissez mijoter 20 min.', 'Ajoutez les épinards en fin de cuisson.']
  },
  {
    id: 'poulet-vinaigre', nom: 'Poulet au vinaigre', cat: 'Volailles', cuisine: 'Lyonnaise', emoji: '🍷',
    desc: 'Le classique des bouchons lyonnais, sauce acidulée à la tomate et à la crème.',
    portions: 4, prep: 15, cuisson: 45, diff: 1,
    ing: [['poulet_cuisse', 1000], ['vinaigre', 150, 'ml', 'Vinaigre de vin'], ['tomate', 2, 'pc'], ['concentre_tomate', 1, 'cs'], ['echalote', 3, 'pc'], ['ail', 3, 'pc'],
      ['vin_blanc', 100, 'ml'], ['creme_30', 100, 'ml'], ['beurre', 30], ['estragon', 5], ['sel', 0, 'qs']],
    etapes: ['Faites dorer le poulet dans le beurre avec l\'ail en chemise.', 'Ajoutez les échalotes, déglacez au vinaigre et laissez réduire de moitié.',
      'Ajoutez le vin, les tomates et le concentré. Laissez mijoter 30 min.', 'Retirez le poulet, ajoutez la crème à la sauce et l\'estragon. Nappez.']
  },
  {
    id: 'waterzooi', nom: 'Waterzooi de poulet', cat: 'Volailles', cuisine: 'Belge', emoji: '🥣',
    desc: 'Poulet poché aux légumes dans un bouillon crémeux, spécialité gantoise.',
    portions: 4, prep: 20, cuisson: 45, diff: 1,
    ing: [['poulet_blanc', 700], ['poireau', 2, 'pc'], ['carotte', 2, 'pc'], ['celeri', 2, 'pc'], ['pomme_de_terre', 4, 'pc'], ['bouillon', 1000, 'ml', 'Bouillon de volaille'],
      ['creme_30', 150, 'ml'], ['jaune_oeuf', 2, 'pc'], ['beurre', 20], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Faites suer les légumes en julienne dans le beurre.', 'Ajoutez le bouillon et les pommes de terre en dés, puis le poulet. Pochez 25 min.',
      'Hors du feu, liez avec la crème mélangée aux jaunes, sans faire bouillir.', 'Parsemez de persil.']
  },
  {
    id: 'poule-au-pot', nom: 'Poule au pot farcie', cat: 'Volailles', cuisine: 'Béarnaise', emoji: '🐔',
    desc: 'La poule farcie pochée avec ses légumes, le plat du bon roi Henri IV.',
    portions: 6, prep: 40, cuisson: 180, diff: 2,
    ing: [['poulet_entier', 1500, 'g', 'Poule (partie comestible)'], ['carotte', 4, 'pc'], ['poireau', 3, 'pc'], ['navet', 3, 'pc'], ['oignon', 1, 'pc'], ['celeri', 2, 'pc'],
      ['porc_hache', 250], ['pain', 60, 'g', 'Pain rassis'], ['oeuf', 1, 'pc'], ['persil', 15], ['ail', 2, 'pc'], ['thym', 2, 'pc'], ['laurier', 1, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Farce : chair à saucisse, pain trempé et pressé, œuf, ail et persil. Farcissez la poule et cousez l\'ouverture.',
      'Plongez-la dans un grand faitout d\'eau froide avec l\'oignon et les herbes, portez à frémissement et écumez.', 'Laissez cuire 2 h, puis ajoutez les légumes 45 min.',
      'Servez la poule découpée avec la farce, les légumes et un peu de bouillon.']
  },
  {
    id: 'yakitori', nom: 'Brochettes yakitori', cat: 'Volailles', cuisine: 'Japonaise', emoji: '🍢',
    desc: 'Brochettes de poulet et poireau laquées à la sauce tare.',
    portions: 4, prep: 20, cuisson: 15, diff: 1,
    ing: [['poulet_cuisse', 600], ['oignon_nouveau', 6, 'pc', 'Oignons nouveaux ou poireau'], ['sauce_soja', 5, 'cs'], ['mirin', 4, 'cs'], ['sucre', 1, 'cs']],
    etapes: ['Sauce tare : faites réduire la sauce soja, le mirin et le sucre 5 min.', 'Enfilez le poulet en cubes et les tronçons d\'oignon sur des piques.',
      'Faites griller 10 à 12 min en badigeonnant de sauce plusieurs fois.']
  },
  {
    id: 'poulet-citronnelle', nom: 'Poulet sauté à la citronnelle', cat: 'Volailles', cuisine: 'Vietnamienne', emoji: '🌿',
    desc: 'Poulet caramélisé à la citronnelle, au piment et au nuoc-mâm.',
    portions: 4, prep: 15, cuisson: 15, diff: 1,
    ing: [['poulet_cuisse', 600], ['citronnelle', 3, 'pc'], ['ail', 3, 'pc'], ['piment', 1, 'pc'], ['nuoc_mam', 2, 'cs'], ['sucre', 1, 'cs'], ['oignon', 1, 'pc'],
      ['huile_neutre', 2, 'cs'], ['riz_blanc', 280, 'g', 'Riz jasmin']],
    etapes: ['Marinez le poulet en morceaux avec la citronnelle hachée finement, l\'ail, le nuoc-mâm et le sucre (30 min).', 'Faites-le sauter à feu vif dans l\'huile 8 min.',
      'Ajoutez l\'oignon en lamelles et le piment, caramélisez 3 min. Servez avec le riz.']
  },
  {
    id: 'poulet-frit', nom: 'Poulet frit croustillant', cat: 'Volailles', cuisine: 'Américaine', emoji: '🍗',
    desc: 'Mariné au lait citronné puis enrobé d\'une panure épicée.',
    portions: 4, prep: 20, cuisson: 20, diff: 2,
    ing: [['poulet_cuisse', 800], ['lait_demi', 300, 'ml'], ['citron', 1, 'pc'], ['farine', 150], ['paprika', 2, 'cc'], ['ail', 2, 'pc'],
      ['huile_neutre', 100, 'ml', 'Huile de friture (part absorbée)'], ['sel', 2, 'cc'], ['poivre', 1, 'cc']],
    etapes: ['Marinez le poulet dans le lait additionné du jus de citron, de l\'ail et du sel (4 h ou une nuit).', 'Mélangez la farine, le paprika et le poivre.',
      'Égouttez le poulet, roulez-le dans la farine en pressant bien.', 'Faites frire 10 à 12 min à 165 °C jusqu\'à ce qu\'il soit doré et cuit à cœur.']
  },
  {
    id: 'bouchees-reine', nom: 'Bouchées à la reine', cat: 'Volailles', cuisine: 'Française', emoji: '👑',
    desc: 'Vol-au-vent garnis de poulet et champignons à la sauce suprême.',
    portions: 4, prep: 30, cuisson: 30, diff: 2,
    ing: [['pate_feuilletee', 1.5, 'pc', 'Pâte feuilletée (ou 4 croûtes de vol-au-vent)'], ['poulet_blanc', 400], ['champignons', 250], ['beurre', 40], ['farine', 40],
      ['bouillon', 400, 'ml', 'Bouillon de volaille'], ['creme_30', 100, 'ml'], ['jaune_oeuf', 1, 'pc'], ['citron', 0.5, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Découpez et faites cuire les croûtes de feuilletage 20 min à 200 °C (ou réchauffez des croûtes toutes prêtes).', 'Pochez le poulet 12 min dans le bouillon, coupez-le en dés.',
      'Faites un roux beurre-farine, ajoutez le bouillon, puis les champignons sautés et le poulet.', 'Liez avec la crème, le jaune et le citron. Garnissez les bouchées.']
  },

  // ================= POISSONS =================
  {
    id: 'sole-meuniere', nom: 'Sole meunière', cat: 'Poissons', cuisine: 'Française', emoji: '🐟',
    desc: 'Filets farinés et dorés au beurre noisette, citron et persil.',
    portions: 4, prep: 10, cuisson: 10, diff: 1,
    ing: [['sole', 600], ['farine', 40], ['beurre', 60], ['citron', 1, 'pc'], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Salez et farinez les filets, tapotez pour retirer l\'excédent.', 'Faites-les dorer 2 min par face dans la moitié du beurre.',
      'Faites mousser le reste du beurre jusqu\'à ce qu\'il soit noisette, ajoutez le jus de citron et le persil. Nappez.']
  },
  {
    id: 'brandade-morue', nom: 'Brandade de morue', cat: 'Poissons', cuisine: 'Nîmoise', emoji: '🥔',
    desc: 'Morue émulsionnée à l\'huile d\'olive et aux pommes de terre, gratinée.',
    portions: 6, prep: 30, cuisson: 40, diff: 2,
    ing: [['morue', 600], ['pomme_de_terre', 600], ['lait_demi', 300, 'ml'], ['huile_olive', 100, 'ml'], ['ail', 3, 'pc'], ['chapelure', 20], ['poivre', 0, 'qs']],
    etapes: ['Dessalez la morue 24 h en changeant l\'eau plusieurs fois.', 'Pochez-la 10 min dans le lait, émiettez-la. Faites cuire les pommes de terre.',
      'Écrasez ensemble la morue, les pommes de terre et l\'ail, en incorporant l\'huile et un peu de lait de cuisson.', 'Versez dans un plat, saupoudrez de chapelure et gratinez 15 min à 200 °C.']
  },
  {
    id: 'lotte-armoricaine', nom: 'Lotte à l\'armoricaine', cat: 'Poissons', cuisine: 'Bretonne', emoji: '🦞',
    desc: 'Médaillons de lotte dans une sauce tomate au cognac et vin blanc.',
    portions: 4, prep: 20, cuisson: 30, diff: 2,
    ing: [['lotte', 800], ['tomates_concassees', 400], ['echalote', 3, 'pc'], ['ail', 2, 'pc'], ['alcool_fort', 3, 'cs', 'Cognac'], ['vin_blanc', 200, 'ml'],
      ['concentre_tomate', 1, 'cs'], ['beurre', 30], ['creme_30', 100, 'ml'], ['piment_poudre', 1, 'pincee'], ['estragon', 5], ['riz_blanc', 240], ['sel', 0, 'qs']],
    etapes: ['Faites dorer les médaillons de lotte dans le beurre, flambez au cognac et réservez.', 'Faites revenir échalotes et ail, ajoutez vin, tomates, concentré et piment. Réduisez 15 min.',
      'Remettez la lotte 8 min, ajoutez la crème et l\'estragon.', 'Servez avec le riz.']
  },
  {
    id: 'saumon-teriyaki', nom: 'Saumon teriyaki', cat: 'Poissons', cuisine: 'Japonaise', emoji: '🍣',
    desc: 'Pavés de saumon laqués, riz et brocoli.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [['saumon', 4, 'pc'], ['sauce_soja', 4, 'cs'], ['mirin', 3, 'cs'], ['miel', 1, 'cs'], ['gingembre', 10], ['graines_sesame', 1, 'cs'], ['riz_blanc', 280], ['brocoli', 300]],
    etapes: ['Faites cuire le riz et le brocoli à la vapeur.', 'Saisissez le saumon côté peau 5 min, retournez 2 min.',
      'Ajoutez la sauce soja, le mirin, le miel et le gingembre râpé, laissez réduire en arrosant le poisson.', 'Parsemez de sésame.']
  },
  {
    id: 'maquereaux-grilles', nom: 'Maquereaux grillés au citron', cat: 'Poissons', cuisine: 'Française', emoji: '🐟',
    desc: 'Poisson gras plein d\'oméga-3, grillé simplement.',
    portions: 4, prep: 10, cuisson: 10, diff: 1,
    ing: [['maquereau', 600], ['citron', 1, 'pc'], ['huile_olive', 1, 'cs'], ['thym', 2, 'pc'], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Badigeonnez les filets d\'huile, parsemez de thym, salez et poivrez.', 'Faites-les griller côté peau 4 min puis 1 min côté chair.', 'Servez avec des quartiers de citron.']
  },
  {
    id: 'sardines-grillees', nom: 'Sardines grillées', cat: 'Poissons', cuisine: 'Portugaise', emoji: '🐟',
    desc: 'Le goût de l\'été au bord de la mer.',
    portions: 4, prep: 10, cuisson: 6, diff: 1,
    ing: [['sardines_fraiches', 600, 'g', 'Sardines fraîches (≈ 1 kg entières)'], ['huile_olive', 2, 'cs'], ['citron', 1, 'pc'], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Videz les sardines (ou demandez au poissonnier), rincez-les et séchez-les.', 'Huilez-les et salez au gros sel.',
      'Faites-les griller 2 à 3 min par face sur un barbecue ou une plancha très chaude.', 'Servez avec citron et persil.']
  },
  {
    id: 'calamars-romaine', nom: 'Calamars à la romaine', cat: 'Poissons', cuisine: 'Espagnole', emoji: '🦑',
    desc: 'Anneaux de calamar frits dans une pâte légère, sauce aïoli.',
    portions: 4, prep: 20, cuisson: 10, diff: 2,
    ing: [['calamar', 600], ['farine', 100], ['oeuf', 1, 'pc'], ['biere', 150, 'ml', 'Bière ou eau gazeuse froide'], ['huile_neutre', 80, 'ml', 'Huile de friture (part absorbée)'],
      ['citron', 1, 'pc'], ['mayonnaise', 3, 'cs'], ['ail', 1, 'pc'], ['sel', 0, 'qs']],
    etapes: ['Pâte : fouettez la farine, l\'œuf et la bière froide.', 'Séchez les anneaux de calamar, trempez-les dans la pâte.',
      'Faites-les frire 2 min à 180 °C.', 'Servez avec le citron et la mayonnaise relevée d\'ail râpé.']
  },
  {
    id: 'tempura-crevettes', nom: 'Tempura de crevettes', cat: 'Poissons', cuisine: 'Japonaise', emoji: '🍤',
    desc: 'Crevettes en friture ultra-légère et croustillante.',
    portions: 4, prep: 20, cuisson: 10, diff: 2,
    ing: [['crevettes', 500], ['farine', 120], ['maizena', 30], ['eau', 200, 'ml', 'Eau glacée'], ['oeuf', 1, 'pc'], ['huile_neutre', 80, 'ml', 'Huile de friture (part absorbée)'],
      ['sauce_soja', 4, 'cs'], ['mirin', 2, 'cs']],
    etapes: ['Mélangez rapidement l\'eau glacée, l\'œuf, la farine et la maïzena : la pâte doit rester grumeleuse.', 'Trempez les crevettes et plongez-les dans l\'huile à 180 °C, 2 min.',
      'Égouttez sur du papier absorbant. Servez avec la sauce soja mélangée au mirin.']
  },
  {
    id: 'saumon-croute', nom: 'Saumon en croûte aux épinards', cat: 'Poissons', cuisine: 'Française', emoji: '🥮',
    desc: 'Filet de saumon et épinards à la crème enveloppés de feuilletage.',
    portions: 6, prep: 30, cuisson: 35, diff: 2,
    ing: [['saumon', 800, 'g', 'Filet de saumon sans peau'], ['pate_feuilletee', 2, 'pc'], ['epinards', 300], ['fromage_frais', 100], ['oeuf', 1, 'pc'], ['citron', 0.5, 'pc'],
      ['aneth', 5], ['sel', 0, 'qs'], ['poivre', 0, 'qs']],
    etapes: ['Faites tomber les épinards, pressez-les et mélangez-les au fromage frais, au citron et à l\'aneth.', 'Étalez une pâte, posez la moitié des épinards, le saumon assaisonné, puis le reste des épinards.',
      'Couvrez de la seconde pâte, soudez les bords, dorez à l\'œuf.', 'Enfournez 35 min à 200 °C.']
  },
  {
    id: 'cabillaud-beurre-blanc', nom: 'Cabillaud au beurre blanc', cat: 'Poissons', cuisine: 'Nantaise', emoji: '🧈',
    desc: 'Poisson nacré et la célèbre sauce au beurre et à l\'échalote.',
    portions: 4, prep: 15, cuisson: 20, diff: 2,
    ing: [['cabillaud', 4, 'pc'], ['echalote', 2, 'pc'], ['vin_blanc', 100, 'ml'], ['vinaigre', 2, 'cs'], ['beurre', 120, 'g', 'Beurre bien froid'], ['pomme_de_terre', 600], ['sel', 0, 'qs']],
    etapes: ['Faites cuire les pommes de terre à la vapeur.', 'Faites réduire les échalotes ciselées avec le vin et le vinaigre presque à sec.',
      'Hors du feu, incorporez le beurre froid en morceaux en fouettant pour obtenir une sauce mousseuse.', 'Faites cuire le cabillaud à la vapeur 8 min. Nappez de beurre blanc.']
  },
  {
    id: 'raie-beurre-noir', nom: 'Raie au beurre noisette et câpres', cat: 'Poissons', cuisine: 'Française', emoji: '🐟',
    desc: 'Aile de raie pochée, beurre noisette, câpres et vinaigre.',
    portions: 4, prep: 10, cuisson: 20, diff: 1,
    ing: [['raie', 1000], ['beurre', 80], ['capres', 2, 'cs'], ['vinaigre', 3, 'cs'], ['persil', 10], ['pomme_de_terre', 600], ['sel', 0, 'qs']],
    etapes: ['Faites cuire les pommes de terre à la vapeur.', 'Pochez la raie 10 à 12 min dans de l\'eau frémissante vinaigrée. Retirez la peau.',
      'Faites cuire le beurre jusqu\'à ce qu\'il soit noisette, ajoutez les câpres et un trait de vinaigre.', 'Nappez la raie et parsemez de persil.']
  },
  {
    id: 'truite-amandes', nom: 'Truite aux amandes', cat: 'Poissons', cuisine: 'Française', emoji: '🐟',
    desc: 'Truite meunière et amandes effilées dorées au beurre.',
    portions: 4, prep: 10, cuisson: 15, diff: 1,
    ing: [['truite', 4, 'pc'], ['amandes', 60, 'g', 'Amandes effilées'], ['beurre', 50], ['farine', 30], ['citron', 1, 'pc'], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Farinez les truites et faites-les dorer dans la moitié du beurre, 5 min par face.', 'Faites dorer les amandes dans le reste du beurre.',
      'Servez les truites nappées des amandes, avec citron et persil.']
  },
  {
    id: 'tajine-poisson', nom: 'Tajine de poisson à la chermoula', cat: 'Poissons', cuisine: 'Marocaine', emoji: '🫕',
    desc: 'Poisson mariné aux herbes et épices, cuit sur un lit de légumes.',
    portions: 4, prep: 25, cuisson: 40, diff: 1,
    ing: [['poisson_blanc', 800], ['tomate', 4, 'pc'], ['poivron', 2, 'pc'], ['pomme_de_terre', 3, 'pc'], ['citron', 1, 'pc'], ['olives', 60, 'g', 'Olives violettes'],
      ['ail', 3, 'pc'], ['coriandre', 20], ['persil', 20], ['cumin', 1, 'cc'], ['paprika', 2, 'cc'], ['huile_olive', 4, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Chermoula : mixez les herbes, l\'ail, les épices, le jus de citron et l\'huile. Marinez le poisson 30 min.',
      'Tapissez le tajine de pommes de terre en rondelles, puis de tomates et poivrons.', 'Posez le poisson et sa marinade, les olives et un demi-verre d\'eau.',
      'Couvrez et laissez cuire 35 min à feu doux.']
  },
  {
    id: 'poulpe-galicienne', nom: 'Poulpe à la galicienne', cat: 'Poissons', cuisine: 'Espagnole', emoji: '🐙',
    desc: 'Pulpo a feira : poulpe tendre, pommes de terre, paprika et huile d\'olive.',
    portions: 4, prep: 10, cuisson: 60, diff: 2,
    ing: [['poulpe', 1200], ['pomme_de_terre', 600], ['paprika', 2, 'cc', 'Paprika fumé'], ['huile_olive', 5, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Plongez 3 fois le poulpe dans l\'eau bouillante puis laissez-le cuire 45 min à frémissement.', 'Faites cuire les pommes de terre en rondelles dans l\'eau du poulpe.',
      'Coupez le poulpe en rondelles, disposez sur les pommes de terre.', 'Arrosez d\'huile, saupoudrez de paprika et de gros sel.']
  },
  {
    id: 'marmitako', nom: 'Marmitako', cat: 'Poissons', cuisine: 'Basque', emoji: '🐟',
    desc: 'Ragoût basque de thon, pommes de terre et poivrons.',
    portions: 4, prep: 20, cuisson: 40, diff: 1,
    ing: [['thon_frais', 600], ['pomme_de_terre', 800], ['poivron', 2, 'pc'], ['oignon', 1, 'pc'], ['tomates_concassees', 200], ['ail', 2, 'pc'],
      ['bouillon', 800, 'ml', 'Fumet de poisson'], ['piment_poudre', 1, 'cc', 'Piment d\'Espelette'], ['huile_olive', 3, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Faites revenir l\'oignon, l\'ail et les poivrons dans l\'huile.', 'Ajoutez les pommes de terre cassées en morceaux, les tomates, le piment et le fumet. Cuisez 25 min.',
      'Ajoutez le thon en cubes hors du feu, couvrez et laissez reposer 5 min.']
  },
  {
    id: 'bacalhau-a-bras', nom: 'Bacalhau à brás', cat: 'Poissons', cuisine: 'Portugaise', emoji: '🥚',
    desc: 'Morue effilochée, pommes paille et œufs brouillés.',
    portions: 4, prep: 25, cuisson: 20, diff: 2,
    ing: [['morue', 400], ['pomme_de_terre', 500], ['oeuf', 6, 'pc'], ['oignon', 2, 'pc'], ['ail', 2, 'pc'], ['olives', 40, 'g', 'Olives noires'], ['persil', 15],
      ['huile_olive', 6, 'cs']],
    etapes: ['Dessalez et effilochez la morue.', 'Coupez les pommes de terre en très fins bâtonnets et faites-les dorer dans la moitié de l\'huile.',
      'Faites fondre les oignons et l\'ail dans le reste d\'huile, ajoutez la morue 5 min, puis les pommes paille.', 'Versez les œufs battus et remuez jusqu\'à ce qu\'ils soient crémeux. Ajoutez olives et persil.']
  },
  {
    id: 'thieboudienne', nom: 'Thiéboudienne', cat: 'Poissons', cuisine: 'Sénégalaise', emoji: '🍚',
    desc: 'Le plat national sénégalais : riz rouge au poisson et aux légumes.',
    portions: 6, prep: 40, cuisson: 90, diff: 3,
    ing: [['poisson_blanc', 1000, 'g', 'Poisson ferme (thiof, mérou, cabillaud)'], ['riz_blanc', 500, 'g', 'Riz brisé'], ['tomates_concassees', 400], ['concentre_tomate', 3, 'cs'],
      ['oignon', 2, 'pc'], ['carotte', 3, 'pc'], ['chou', 400], ['aubergine', 1, 'pc'], ['patate_douce', 1, 'pc'], ['persil', 20], ['ail', 4, 'pc'], ['piment', 1, 'pc'],
      ['huile_neutre', 6, 'cs'], ['sel', 0, 'qs']],
    etapes: ['Farcissez le poisson d\'une pâte de persil, ail et piment pilés. Faites-le dorer dans l\'huile et réservez.',
      'Faites revenir les oignons, ajoutez le concentré et les tomates, puis 1,5 L d\'eau et les légumes en gros morceaux. Cuisez 30 min.',
      'Ajoutez le poisson 15 min, puis retirez poisson et légumes.', 'Faites cuire le riz dans le bouillon restant à couvert 25 min. Servez avec le poisson et les légumes.']
  },
  {
    id: 'cabillaud-croute-chorizo', nom: 'Cabillaud en croûte de chorizo', cat: 'Poissons', cuisine: 'Fusion', emoji: '🌶️',
    desc: 'Dos de cabillaud sous une croûte croustillante et parfumée.',
    portions: 4, prep: 15, cuisson: 15, diff: 1,
    ing: [['cabillaud', 4, 'pc'], ['chorizo', 60], ['chapelure', 40], ['beurre', 30], ['persil', 10], ['sel', 0, 'qs']],
    etapes: ['Mixez le chorizo, la chapelure, le beurre mou et le persil.', 'Étalez cette croûte sur les dos de cabillaud.', 'Enfournez 12 à 15 min à 200 °C.']
  },
  {
    id: 'saumon-sauce-vierge', nom: 'Saumon à la sauce vierge', cat: 'Poissons', cuisine: 'Provençale', emoji: '🍅',
    desc: 'Saumon snacké, sauce crue tomate-basilic-huile d\'olive.',
    portions: 4, prep: 15, cuisson: 10, diff: 1,
    ing: [['saumon', 4, 'pc'], ['tomate', 3, 'pc'], ['basilic', 10], ['huile_olive', 5, 'cs'], ['citron', 1, 'pc'], ['echalote', 1, 'pc'], ['olives', 30], ['sel', 0, 'qs']],
    etapes: ['Sauce vierge : tomates en petits dés, échalote, olives, basilic, jus de citron, huile, sel. Laissez reposer.',
      'Faites cuire le saumon côté peau 6 min puis 1 min de l\'autre côté.', 'Nappez de sauce vierge tiédie.']
  }
]);
