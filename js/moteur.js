/*
 * Moteur de calcul : conversions d'unités, valeurs nutritionnelles, régimes,
 * et mise en forme des quantités ajustées au nombre de portions.
 *
 * Une ligne d'ingrédient de recette : [id, quantité, unité = 'g', libellé?]
 * Unités : g, kg, ml, cl, l, pc (pièce), cs (c. à soupe), cc (c. à café), pincee, qs (selon goût)
 */
(function (global) {
  'use strict';

  var VOLUMES = { ml: 1, cl: 10, l: 1000, cs: 15, cc: 5 };
  var POIDS_PINCEE = 0.5;
  var RAYONS_VIANDE = { viande: 1, poisson: 1 };
  var RAYONS_ANIMAUX = { cremerie: 1, oeufs: 1 };

  function infos(id) {
    var e = global.INGREDIENTS[id];
    if (!e) return null;
    var o = e[7] || {};
    return {
      id: id, nom: e[0], rayon: e[1],
      kcal: e[2], p: e[3], g: e[4], l: e[5], f: e[6],
      pc: o.pc, u: o.u, pl: o.pl, d: o.d || 1,
      gluten: !!o.gl,
      vegetarien: !RAYONS_VIANDE[e[1]] && !o.nveg,
      vegan: !RAYONS_VIANDE[e[1]] && !o.nveg && !RAYONS_ANIMAUX[e[1]] && !o.nvg
    };
  }

  /* Convertit une ligne d'ingrédient en grammes (pour le calcul nutritionnel). */
  function versGrammes(ligne, facteur) {
    var ing = infos(ligne[0]);
    var q = ligne[1] * (facteur || 1);
    var unite = ligne[2] || 'g';
    if (!ing) return 0;
    switch (unite) {
      case 'g': return q;
      case 'kg': return q * 1000;
      case 'pc': return q * (ing.pc || 0);
      case 'pincee': return q * POIDS_PINCEE;
      case 'qs': return 0;
      default:
        if (VOLUMES[unite]) return q * VOLUMES[unite] * ing.d;
        return 0;
    }
  }

  function vide() { return { kcal: 0, p: 0, g: 0, l: 0, f: 0 }; }

  /* Valeurs nutritionnelles totales et par portion + régimes compatibles. */
  function analyser(recette) {
    var total = vide();
    var regimes = { vegetarien: true, vegan: true, sansGluten: true };
    recette.ing.forEach(function (ligne) {
      var ing = infos(ligne[0]);
      if (!ing) return;
      var grammes = versGrammes(ligne);
      total.kcal += ing.kcal * grammes / 100;
      total.p += ing.p * grammes / 100;
      total.g += ing.g * grammes / 100;
      total.l += ing.l * grammes / 100;
      total.f += ing.f * grammes / 100;
      if (!ing.vegetarien) regimes.vegetarien = false;
      if (!ing.vegan) regimes.vegan = false;
      if (ing.gluten) regimes.sansGluten = false;
    });
    var parPortion = vide();
    Object.keys(total).forEach(function (k) { parPortion[k] = total[k] / recette.portions; });
    return { total: total, parPortion: parPortion, regimes: regimes };
  }

  /* Part des calories apportée par chaque macro (en %). */
  function repartition(n) {
    var kp = n.p * 4, kg = n.g * 4, kl = n.l * 9;
    var somme = kp + kg + kl || 1;
    return { p: kp / somme * 100, g: kg / somme * 100, l: kl / somme * 100 };
  }

  // ---------- Mise en forme ----------

  var FRACTIONS = { 0.25: '¼', 0.5: '½', 0.75: '¾' };

  function nombre(n, decimales) {
    var p = Math.pow(10, decimales || 0);
    return String(Math.round(n * p) / p).replace('.', ',');
  }

  function fraction(n) {
    var entier = Math.floor(n + 1e-9);
    var reste = Math.round((n - entier) * 4) / 4;
    if (reste === 1) { entier += 1; reste = 0; }
    if (!reste) return String(entier);
    return (entier ? entier + ' ' : '') + FRACTIONS[reste];
  }

  function arrondirMasse(v) {
    if (v < 10) return Math.max(0.5, Math.round(v * 2) / 2);
    if (v < 50) return Math.round(v);
    if (v < 250) return Math.round(v / 5) * 5;
    return Math.round(v / 10) * 10;
  }

  function masse(v, petite, grande) {
    if (v >= 1000) return nombre(v / 1000, 2) + ' ' + grande;
    return nombre(arrondirMasse(v), 1) + ' ' + petite;
  }

  /* Petites pièces (gousse, branche, feuille…) à l'unité, grosses pièces au ½ (au ¼ sous 1, à l'unité au-delà de 6). */
  function arrondirPieces(v, poids) {
    if (poids < 30) return v < 1 ? 0.5 : Math.round(v);
    var pas = v < 1 ? 0.25 : v < 6 ? 0.5 : 1;
    return Math.max(0.25, Math.round(v / pas) * pas);
  }

  function arrondirCuilleres(v) {
    return Math.max(0.5, Math.round(v * 2) / 2);
  }

  /* Renvoie { qte, nom } pour l'affichage d'une ligne multipliée par facteur. */
  function afficherLigne(ligne, facteur) {
    var ing = infos(ligne[0]) || { nom: ligne[0] };
    var q = ligne[1] * facteur;
    var unite = ligne[2] || 'g';
    var nom = ligne[3] || ing.nom;
    var qte;
    switch (unite) {
      case 'g': qte = masse(q, 'g', 'kg'); break;
      case 'kg': qte = masse(q * 1000, 'g', 'kg'); break;
      case 'ml': qte = masse(q, 'ml', 'L'); break;
      case 'cl': qte = masse(q * 10, 'ml', 'L'); break;
      case 'l': qte = masse(q * 1000, 'ml', 'L'); break;
      case 'pc': {
        var n = arrondirPieces(q, ing.pc || 0);
        qte = fraction(n);
        if (ing.u) qte += ' ' + (n > 1 ? ing.u[1] : ing.u[0]);
        else if (n > 1 && ing.pl && !ligne[3]) nom = ing.pl;
        break;
      }
      case 'cs': qte = fraction(arrondirCuilleres(q)) + ' c. à soupe'; break;
      case 'cc': qte = fraction(arrondirCuilleres(q)) + ' c. à café'; break;
      case 'pincee': {
        var p = Math.max(1, Math.round(q));
        qte = p + (p > 1 ? ' pincées' : ' pincée');
        break;
      }
      case 'qs': qte = 'selon goût'; break;
      default: qte = nombre(q, 1) + ' ' + unite;
    }
    return { qte: qte, nom: nom };
  }

  global.Moteur = {
    infos: infos,
    versGrammes: versGrammes,
    analyser: analyser,
    repartition: repartition,
    afficherLigne: afficherLigne,
    nombre: nombre,
    UNITES: ['g', 'kg', 'ml', 'cl', 'l', 'pc', 'cs', 'cc', 'pincee', 'qs']
  };
})(typeof window !== 'undefined' ? window : globalThis);
