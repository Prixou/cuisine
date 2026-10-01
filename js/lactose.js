/* Sans lactose : version adaptée de chaque recette qui contient du lactose.
 *
 * Repères : le lactose est le sucre du lait. Les fromages affinés (parmesan, comté, emmental, cheddar,
 * camembert…) n'en contiennent presque plus après l'affinage ; le beurre en contient très peu ;
 * lait, crème, yaourts, fromages frais et mozzarella en contiennent beaucoup et ont des équivalents
 * « sans lactose » en supermarché (même valeurs nutritionnelles, le lactose est prédigéré). */
(function () {
  'use strict';

  var M = window.Moteur;

  /* Ingrédient avec lactose → [remplaçant sans lactose, conseil facultatif] */
  var REMPLACER = {
    lait_demi: ['lait_sl'],
    lait_entier: ['lait_sl'],
    creme_30: ['creme_30_sl'],
    creme_15: ['creme_15_sl'],
    creme_epaisse: ['creme_epaisse_sl'],
    beurre: ['margarine', 'Le beurre contient très peu de lactose (moins de 1 g pour 100 g) : en petite quantité, beaucoup de personnes intolérantes le supportent. Le beurre clarifié (ghee) n\'en contient presque plus.'],
    fromage_blanc_0: ['fromage_blanc_sl'],
    fromage_blanc_3: ['fromage_blanc_sl'],
    yaourt_nature: ['yaourt_sl'],
    yaourt_grec: ['yaourt_grec_sl'],
    skyr: ['skyr_sl'],
    cottage: ['skyr_sl', 'Le skyr sans lactose remplace le cottage cheese, avec une texture plus lisse.'],
    mascarpone: ['creme_epaisse_sl', 'Ou un mascarpone sans lactose si vous en trouvez.'],
    ricotta: ['fromage_frais_sl', 'Ou une ricotta sans lactose (rayon italien).'],
    mozzarella: ['mozzarella_sl'],
    burrata: ['mozzarella_sl', 'La burrata est fourrée à la crème : une mozzarella sans lactose la remplace.'],
    fromage_frais: ['fromage_frais_sl'],
    tomme_fraiche: ['mozzarella_sl', 'Pour l\'aligot, mélangez mozzarella sans lactose et comté (naturellement sans lactose).'],
    paneer: ['tofu', 'Le tofu ferme remplace le paneer, comme dans les versions vegan.'],
    chocolat_lait: ['chocolat_noir', 'Un chocolat noir sans lait : vérifiez qu\'il n\'y a pas de lait dans les ingrédients.']
  };

  /* Fromages affinés : naturellement (presque) sans lactose, on les garde. */
  var NATURELS = ['parmesan', 'comte', 'emmental', 'cheddar', 'camembert', 'reblochon', 'bleu', 'fromage_raclette'];

  /* Très peu de lactose, en général bien tolérés. */
  var PAUVRES = {
    feta: 'La feta contient très peu de lactose et est en général bien tolérée.',
    chevre: 'Choisissez une bûche de chèvre affinée, pauvre en lactose, plutôt que du chèvre frais.'
  };

  /* Pas d'équivalent courant dans la base : on garde l'ingrédient et on prévient. */
  var SANS_EQUIVALENT = {
    glace_vanille: 'Prenez une glace vanille sans lactose ou un sorbet.',
    lait_concentre: 'Il existe du lait concentré sucré sans lactose ou au lait de coco.',
    chocolat_blanc: 'Prenez un chocolat blanc sans lactose (rayon sans lactose).'
  };

  /* Produits transformés qui contiennent parfois du lait : à vérifier sur l'étiquette. */
  var A_VERIFIER = ['pate_tartiner', 'pepites_chocolat', 'brioche', 'pain_mie', 'biscuits_secs', 'boudoirs', 'pain_epices',
    'pate_feuilletee', 'pate_brisee', 'pate_sablee', 'proteine_whey', 'nouilles_oeuf'];

  var L = window.SansLactose = {
    REMPLACER: REMPLACER, NATURELS: NATURELS, PAUVRES: PAUVRES, SANS_EQUIVALENT: SANS_EQUIVALENT, A_VERIFIER: A_VERIFIER
  };

  L.remplacant = function (id) { return REMPLACER[id] ? REMPLACER[id][0] : id; };

  /* Ce qui contient du lactose dans une recette et comment l'adapter.
     statut : 'naturel' (rien à changer), 'adaptable' (tout se remplace), 'partiel' (reste un ingrédient sans équivalent). */
  L.analyser = function (r) {
    var res = { remplacements: [], naturels: [], pauvres: [], sansEquivalent: [], aVerifier: [] };
    var vus = {};
    (r.ingOrigine || r.ing).forEach(function (l) {
      var id = l[0];
      if (vus[id]) return;
      vus[id] = true;
      if (REMPLACER[id]) res.remplacements.push({ de: id, libelle: l[3] || '', vers: REMPLACER[id][0], conseil: REMPLACER[id][1] || '' });
      else if (NATURELS.indexOf(id) !== -1) res.naturels.push(id);
      else if (PAUVRES[id]) res.pauvres.push({ id: id, conseil: PAUVRES[id] });
      else if (SANS_EQUIVALENT[id]) res.sansEquivalent.push({ id: id, conseil: SANS_EQUIVALENT[id] });
      else if (A_VERIFIER.indexOf(id) !== -1) res.aVerifier.push(id);
    });
    res.lactose = res.remplacements.length > 0 || res.sansEquivalent.length > 0;
    res.statut = res.sansEquivalent.length ? 'partiel' : res.remplacements.length ? 'adaptable' : 'naturel';
    return res;
  };

  /* Copie de la recette avec les ingrédients sans lactose (la recette d'origine reste intacte). */
  L.adapter = function (r) {
    var a = L.analyser(r);
    if (!a.remplacements.length) return r;
    var copie = Object.assign({}, r, {
      ingOrigine: r.ing,
      versionSansLactose: true,
      ing: r.ing.map(function (l) {
        var rem = REMPLACER[l[0]];
        if (!rem) return l;
        var ligne = [rem[0], l[1], l[2] || 'g'];
        // Un libellé précis (« Boursin ail et fines herbes ») devient le nom du produit sans lactose.
        if (l[3]) ligne.push(M.infos(rem[0]).nom);
        return ligne;
      })
    });
    return copie;
  };
})();
