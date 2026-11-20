/* Tchin — moteur : tout ce qui ne touche pas à l'écran (tirage du jour, score, grille, série).
   Utilisable dans la page (window.TchinMoteur) et dans Node (essais). */
(function (racine, fabrique) {
  if (typeof module === 'object' && module.exports) module.exports = fabrique();
  else racine.TchinMoteur = fabrique();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Le Tchin n°1 est celui du vendredi 20 novembre 2026.
  var ORIGINE = Date.UTC(2026, 10, 20);
  var JOUR = 86400000;
  var PAR_PARTIE = 5;

  function numeroDuJour(date) {
    var d = date || new Date();
    var n = Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - ORIGINE) / JOUR) + 1;
    return Math.max(1, n);
  }

  function dateDuNumero(n) {
    var t = new Date(ORIGINE + (n - 1) * JOUR);
    return new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
  }

  // Générateur pseudo-aléatoire à graine (mulberry32) : même graine, même suite, partout.
  function hasard(graine) {
    var a = graine >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function melange(taille, graine) {
    var ordre = [];
    for (var i = 0; i < taille; i++) ordre.push(i);
    var h = hasard(graine);
    for (var j = taille - 1; j > 0; j--) {
      var k = Math.floor(h() * (j + 1));
      var x = ordre[j]; ordre[j] = ordre[k]; ordre[k] = x;
    }
    return ordre;
  }

  /* Les questions du Tchin n : la banque est mélangée une fois par cycle,
     puis découpée en paquets de 5 → aucune question ne revient avant la fin du cycle. */
  function questionsDuJour(n, nbQuestions) {
    var parCycle = Math.floor(nbQuestions / PAR_PARTIE);
    var cycle = Math.floor((n - 1) / parCycle);
    var place = (n - 1) % parCycle;
    return melange(nbQuestions, 1000 + cycle).slice(place * PAR_PARTIE, place * PAR_PARTIE + PAR_PARTIE);
  }

  function defiDuJour(n, nbDefis) {
    var cycle = Math.floor((n - 1) / nbDefis);
    return melange(nbDefis, 5000 + cycle)[(n - 1) % nbDefis];
  }

  var TITRES = [
    { titre: 'Mondes parallèles', mot: 'Tout reste à découvrir, et c’est le meilleur départ.' },
    { titre: 'Opposés qui s’attirent', mot: 'Vous ne vous ressemblez pas : vous allez vous apprendre des choses.' },
    { titre: 'Complémentaires', mot: 'Assez proches pour rire, assez différents pour parler.' },
    { titre: 'Bien accordés', mot: 'Plus de la moitié en phase. On se refait ça ?' },
    { titre: 'Même longueur d’onde', mot: 'Vous auriez dû vous parler plus tôt.' },
    { titre: 'Âmes jumelles', mot: 'Cinq sur cinq. C’est rare. Gardez ce numéro.' }
  ];

  function titre(score) { return TITRES[Math.max(0, Math.min(5, score))]; }

  /* Une manche : { choix: [index de réponse par joueur] } (ancien format à deux : { a, b }).
     En phase = au moins deux joueurs ET au moins la moitié du groupe sur la même réponse
     (à deux : la même réponse). */
  function choixDe(m) { return m.choix || [m.a, m.b]; }
  function plusGrandAccord(m) {
    var c = {}, max = 0;
    choixDe(m).forEach(function (x) { c[x] = (c[x] || 0) + 1; if (c[x] > max) max = c[x]; });
    return max;
  }
  function enPhase(m) {
    var k = choixDe(m).length, max = plusGrandAccord(m);
    return max >= 2 && max >= Math.ceil(k / 2);
  }
  function score(manches) {
    var s = 0;
    for (var i = 0; i < manches.length; i++) if (enPhase(manches[i])) s++;
    return s;
  }

  /* En groupe : le duo qui a le plus souvent répondu pareil, et la personne la moins souvent d'accord. */
  function bilanGroupe(manches, k) {
    var paire = { i: 0, j: 1, n: -1 }, accords = [];
    for (var x = 0; x < k; x++) accords.push(0);
    for (var i = 0; i < k; i++) for (var j = i + 1; j < k; j++) {
      var n = 0;
      manches.forEach(function (m) { var c = choixDe(m); if (c[i] === c[j]) { n++; accords[i]++; accords[j]++; } });
      if (n > paire.n) paire = { i: i, j: j, n: n };
    }
    var libre = 0;
    for (var y = 1; y < k; y++) if (accords[y] < accords[libre]) libre = y;
    var tous = accords.every(function (a) { return a === accords[0]; });
    return { duo: paire, libre: tous ? null : libre };
  }

  // 🟡 = en phase, ⚪ = différents ; 🥂 défi réussi, 💨 défi raté.
  function grille(manches, defiReussi) {
    var g = '';
    for (var i = 0; i < manches.length; i++) g += enPhase(manches[i]) ? '🟡' : '⚪';
    return g + ' ' + (defiReussi ? '🥂' : '💨');
  }

  /* Série : jours d'affilée avec au moins un Tchin joué, comptée depuis aujourd'hui
     (ou depuis hier si rien n'est encore joué aujourd'hui). */
  function serie(numerosJoues, aujourdHui) {
    var joue = {};
    for (var i = 0; i < numerosJoues.length; i++) joue[numerosJoues[i]] = true;
    var n = joue[aujourdHui] ? aujourdHui : aujourdHui - 1;
    var s = 0;
    while (n >= 1 && joue[n]) { s++; n--; }
    return s;
  }

  function rencontres(prenoms) {
    var vus = {};
    var c = 0;
    for (var i = 0; i < prenoms.length; i++) {
      var cle = String(prenoms[i] || '').trim().toLowerCase();
      if (cle && !vus[cle]) { vus[cle] = true; c++; }
    }
    return c;
  }

  /* Succès : calculés à partir de l'historique seul (rien d'autre à sauvegarder).
     parties = [{ n, avec, score, defi }], dans n'importe quel ordre. */
  var SUCCES = [
    { id: 'premier', em: '🥂', nom: 'Premier Vis-à-vis', but: 'Jouer ton premier Vis-à-vis' },
    { id: 'defi', em: '⚡', nom: 'Défi relevé', but: 'Réussir un défi en vrai' },
    { id: 'jumelles', em: '💛', nom: 'Âmes jumelles', but: 'Faire 5 sur 5' },
    { id: 'telepathes', em: '🔮', nom: 'Télépathes', but: 'Deviner chacun la réponse de l’autre' },
    { id: 'paralleles', em: '🪐', nom: 'Mondes parallèles', but: 'Faire 0 sur 5' },
    { id: 'trois', em: '👥', nom: 'Petit cercle', but: 'Rencontrer 3 personnes' },
    { id: 'double', em: '✌️', nom: 'Doublé', but: 'Jouer avec 2 personnes le même jour' },
    { id: 'serie3', em: '🔥', nom: 'Trois jours d’affilée', but: 'Une série de 3 jours' },
    { id: 'retrouvailles', em: '🔁', nom: 'Retrouvailles', but: 'Rejouer avec quelqu’un un autre jour' },
    { id: 'defis5', em: '🏅', nom: 'Cinq défis', but: 'Réussir 5 défis en vrai' },
    { id: 'tournee', em: '🎉', nom: 'Tournée générale', but: 'Jouer avec 4 personnes le même jour' },
    { id: 'serie7', em: '📅', nom: 'Une semaine', but: 'Une série de 7 jours' },
    { id: 'dix', em: '🌍', nom: 'Dix rencontres', but: 'Rencontrer 10 personnes' },
    { id: 'vingtcinq', em: '🏙️', nom: 'Toute la ville', but: 'Rencontrer 25 personnes' },
    { id: 'serie30', em: '👑', nom: 'Un mois', but: 'Une série de 30 jours' }
  ];

  function plusLongueSerie(numeros) {
    var tri = numeros.slice().sort(function (a, b) { return a - b; });
    var best = 0, cur = 0, prev = null;
    for (var i = 0; i < tri.length; i++) {
      if (tri[i] === prev) continue;
      cur = prev !== null && tri[i] === prev + 1 ? cur + 1 : 1;
      if (cur > best) best = cur;
      prev = tri[i];
    }
    return best;
  }

  function succes(parties) {
    var ok = {};
    var cle = function (s) { return String(s || '').trim().toLowerCase(); };
    var parJour = {}, joursParPersonne = {}, defis = 0;
    parties.forEach(function (p) {
      ok.premier = true;
      if (p.defi) { ok.defi = true; defis++; }
      if (p.score === 5) ok.jumelles = true;
      if (p.score === 0) ok.paralleles = true;
      if (p.miroir === 2) ok.telepathes = true;
      (p.avecs || [p.avec]).forEach(function (nom) {
        var k = cle(nom);
        (parJour[p.n] = parJour[p.n] || {})[k] = true;
        (joursParPersonne[k] = joursParPersonne[k] || {})[p.n] = true;
      });
      if (p.groupe >= 4) ok.tournee = true;
    });
    var r = rencontres(personnes(parties));
    if (r >= 3) ok.trois = true;
    if (r >= 10) ok.dix = true;
    if (r >= 25) ok.vingtcinq = true;
    if (defis >= 5) ok.defis5 = true;
    for (var j in parJour) {
      var nb = Object.keys(parJour[j]).length;
      if (nb >= 2) ok.double = true;
      if (nb >= 4) ok.tournee = true;
    }
    for (var pers in joursParPersonne) if (Object.keys(joursParPersonne[pers]).length >= 2) ok.retrouvailles = true;
    var s = plusLongueSerie(parties.filter(function (p) { return !p.archive && !p.paquet; }).map(function (p) { return p.n; }));
    if (s >= 3) ok.serie3 = true;
    if (s >= 7) ok.serie7 = true;
    if (s >= 30) ok.serie30 = true;
    return SUCCES.filter(function (x) { return ok[x.id]; }).map(function (x) { return x.id; });
  }

  function personnes(parties) {
    var l = [];
    parties.forEach(function (p) { (p.avecs || [p.avec]).forEach(function (x) { l.push(x); }); });
    return l;
  }

  /* Les chiffres du carnet : parties jouées, meilleure série (hors archives et paquets), meilleur score,
     et la personne avec qui on est le plus en phase (à deux seulement ; moyenne, puis nombre de parties). */
  function chiffres(parties) {
    var duos = {}, meilleur = null, haut = 0;
    parties.forEach(function (p) {
      if ((p.score || 0) > haut) haut = p.score || 0;
      if (p.groupe || p.avecs) return;
      var nom = String(p.avec || '').trim(), k = nom.toLowerCase();
      if (!k) return;
      var d = duos[k] || (duos[k] = { nom: nom, total: 0, fois: 0 });
      d.total += p.score || 0; d.fois++;
    });
    for (var k in duos) {
      var d = duos[k]; d.moyenne = d.total / d.fois;
      if (!meilleur || d.moyenne > meilleur.moyenne || (d.moyenne === meilleur.moyenne && d.fois > meilleur.fois)) meilleur = d;
    }
    return {
      parties: parties.length,
      meilleureSerie: plusLongueSerie(parties.filter(function (p) { return !p.archive && !p.paquet; }).map(function (p) { return p.n; })),
      meilleurScore: haut,
      duo: meilleur ? { nom: meilleur.nom, moyenne: Math.round(meilleur.moyenne * 10) / 10, fois: meilleur.fois } : null
    };
  }

  function msAvantDemain(date) {
    var d = date || new Date();
    var demain = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    return demain - d;
  }

  return {
    PAR_PARTIE: PAR_PARTIE,
    numeroDuJour: numeroDuJour,
    dateDuNumero: dateDuNumero,
    questionsDuJour: questionsDuJour,
    defiDuJour: defiDuJour,
    melange: melange,
    score: score,
    titre: titre,
    grille: grille,
    serie: serie,
    rencontres: rencontres,
    personnes: personnes,
    enPhase: enPhase,
    bilanGroupe: bilanGroupe,
    SUCCES: SUCCES,
    succes: succes,
    plusLongueSerie: plusLongueSerie,
    chiffres: chiffres,
    msAvantDemain: msAvantDemain
  };
});
