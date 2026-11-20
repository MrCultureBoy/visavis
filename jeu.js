/* Tchin — le jeu à l'écran : un écran à la fois, sur un seul téléphone tenu à deux. */
(function () {
  'use strict';
  var M = window.TchinMoteur;
  var C = window.TchinContenu;

  /* ---------- Langue (D-005) : tout texte passe par T(), le français fait foi. ---------- */
  var L = window.TchinLangues;
  var UI = window.TchinLanguesUI || {};
  var DICO = { fr: {}, en: L.en, es: UI.es || {}, de: UI.de || {}, ar: UI.ar || {} };
  var LANGUES = [['fr', 'Français'], ['en', 'English'], ['es', 'Español'], ['de', 'Deutsch'], ['ar', 'العربية']];
  var LANGUE = 'fr';
  function T(s, v) {
    var t = (DICO[LANGUE] && DICO[LANGUE][s]) || (LANGUE !== 'fr' && DICO.en[s]) || s;
    if (v) for (var k in v) t = t.split('{' + k + '}').join(v[k]);
    return t;
  }

  /* ---------- Mémoire du téléphone (rien ne quitte l'appareil) ---------- */
  var CLE = 'tchin.v1';
  function lire() {
    try { var d = JSON.parse(localStorage.getItem(CLE) || 'null'); if (d && d.parties) return d; } catch (e) {}
    return { moi: '', parties: [], son: true };
  }
  function ecrire() { try { localStorage.setItem(CLE, JSON.stringify(donnees)); } catch (e) {} }
  var donnees = lire();
  if (donnees.son === undefined) donnees.son = true;
  // Langue : celle choisie, sinon celle du téléphone (français si elle commence par fr, anglais sinon).
  LANGUE = donnees.langue || (function () {
    var l = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    return ['fr', 'en', 'es', 'de', 'ar'].indexOf(l) >= 0 ? l : 'en';
  })();

  /* Contenu dans la langue du joueur : le texte anglais, avec les emoji du français (même ordre). */
  var CE = window.TchinContenuEN;
  var TRAD = { en: window.TchinContenuEN, es: window.TchinContenuES, de: window.TchinContenuDE, ar: window.TchinContenuAR };
  function trad() { return (LANGUE !== 'fr' && TRAD[LANGUE]) || null; }
  var PAQUETS = window.TchinPaquets || [];
  function paquet(id) { return PAQUETS.filter(function (x) { return x.id === id; })[0]; }
  // Un paquet n'existe qu'en français et en anglais : les autres langues prennent l'anglais.
  function dansLaLangue(o) { return o[LANGUE] || (LANGUE !== 'fr' && o.en) || o.fr; }
  function question(i) {
    var fr, t;
    if (partie && partie.paquet) {
      var pq = paquet(partie.paquet).questions[i];
      fr = pq.fr; t = dansLaLangue(pq);
    } else {
      fr = C.questions[i]; t = trad() ? trad().questions[i] : null;
    }
    if (!t || t === fr) return fr;
    return { q: t.q, r: fr.r.map(function (r, k) { return [r[0], t.r[k]]; }), relance: t.relance };
  }
  function relanceCommune(k) { return (trad() || C).relancesCommunes[k]; }
  function defi(k) {
    if (partie && partie.paquet) return dansLaLangue(paquet(partie.paquet).defis[k]);
    return (trad() || C).defis[k];
  }

  /* ---------- Petits outils d'affichage ---------- */
  function h(tag, attrs, enfants) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === 'class') el.className = attrs[k];
      else if (k === 'texte') el.textContent = attrs[k];
      else if (k.indexOf('on') === 0) el.addEventListener(k.slice(2), attrs[k]);
      else el.setAttribute(k, attrs[k]);
    }
    (enfants || []).forEach(function (c) { if (c != null) el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return el;
  }
  var ECRANS = ['accueil', 'prenoms', 'question', 'cache', 'revele', 'defi', 'resultat', 'carnet', 'regles', 'archives', 'paquets', 'encore', 'inviter'];
  function montrer(nom, contenu) {
    ECRANS.forEach(function (e) {
      var s = document.getElementById('ecran-' + e);
      if (e === nom) { s.replaceChildren.apply(s, contenu.filter(function (c) { return c != null; })); s.hidden = false; } else s.hidden = true;
    });
    window.scrollTo(0, 0);
    var premier = document.querySelector('#ecran-' + nom + ' [data-focus]');
    if (premier) premier.focus();
  }

  function dateLongue(d) {
    var j = L.jours[LANGUE][d.getDay()], m = L.mois[LANGUE][d.getMonth()];
    if (LANGUE === 'en') return j + ', ' + m + ' ' + d.getDate();
    if (LANGUE === 'de') return j + ', ' + d.getDate() + '. ' + m;
    return j + ' ' + d.getDate() + ' ' + m;
  }
  function compteARebours() {
    var ms = M.msAvantDemain(new Date());
    var hh = Math.floor(ms / 3600000), mm = Math.floor((ms % 3600000) / 60000);
    return T('Prochain Vis-à-vis dans {h} h {m}', { h: hh, m: String(mm).padStart(2, '0') });
  }

  /* ---------- Son : deux verres qui trinquent, synthétisés (aucun fichier) ---------- */
  var audio = null;
  function tchin(fort) {
    try { if (fort && navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) navigator.vibrate([18, 40, 18]); } catch (e) {}
    if (!donnees.son) return;
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended' && audio.resume) audio.resume();
      var t0 = audio.currentTime + 0.01;
      [[2637, 0], [3322, 0.012], [5274, 0.004]].forEach(function (p, i) {
        var o = audio.createOscillator(), g = audio.createGain();
        o.type = 'sine'; o.frequency.value = p[0];
        g.gain.setValueAtTime(0, t0 + p[1]);
        g.gain.linearRampToValueAtTime((fort ? 0.16 : 0.08) / (i + 1), t0 + p[1] + 0.004);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + p[1] + (fort ? 1.4 : 0.5));
        o.connect(g); g.connect(audio.destination);
        o.start(t0 + p[1]); o.stop(t0 + p[1] + 1.5);
      });
    } catch (e) {}
  }
  /* Un petit « tic » à chaque appui, et deux notes qui descendent quand les réponses diffèrent
     (demande d'Elal, 20/11). Synthétisés aussi, coupés par le même bouton 🔈. */
  function bip(notes, type, volume) {
    if (!donnees.son) return;
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended' && audio.resume) audio.resume();
      var t = audio.currentTime + 0.005;
      notes.forEach(function (n) {
        var o = audio.createOscillator(), g = audio.createGain();
        o.type = type; o.frequency.setValueAtTime(n[0], t + n[2]);
        if (n[3]) o.frequency.exponentialRampToValueAtTime(n[3], t + n[2] + n[1]);
        g.gain.setValueAtTime(0, t + n[2]);
        g.gain.linearRampToValueAtTime(volume, t + n[2] + 0.006);
        g.gain.exponentialRampToValueAtTime(0.0001, t + n[2] + n[1]);
        o.connect(g); g.connect(audio.destination);
        o.start(t + n[2]); o.stop(t + n[2] + n[1] + 0.05);
      });
    } catch (e) {}
  }
  function tic() { bip([[1250, 0.045, 0, 900]], 'sine', 0.05); }
  function differents() {
    // Un petit « bzz » en plus des deux notes (dans l'app : la vibration « attention » de l'iPhone).
    try { if (navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) navigator.vibrate(120); } catch (e) {}
    tromboneTriste();
  }
  // « Wah wah wah waaah » : quatre notes qui descendent d'un demi-ton, la dernière tenue avec vibrato
  // (demande d'Elal, 20/11 : « un bruit en termes de musique »). Cuivre synthétisé : dent de scie filtrée.
  function tromboneTriste() {
    if (!donnees.son) return;
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended' && audio.resume) audio.resume();
      var t = audio.currentTime + 0.01;
      var sortie = audio.createGain(); sortie.gain.value = 0.2; sortie.connect(audio.destination);
      [[392, 0, 0.3], [370, 0.32, 0.3], [349, 0.64, 0.3], [330, 0.96, 0.85]].forEach(function (n, i) {
        var o = audio.createOscillator(), f = audio.createBiquadFilter(), g = audio.createGain();
        o.type = 'sawtooth'; o.frequency.setValueAtTime(n[0] * 1.02, t + n[1]);
        o.frequency.exponentialRampToValueAtTime(n[0], t + n[1] + 0.08);   // la note « tombe » en place
        f.type = 'lowpass'; f.Q.value = 6;
        f.frequency.setValueAtTime(500, t + n[1]);
        f.frequency.linearRampToValueAtTime(1500, t + n[1] + 0.1);          // le « wah » qui s'ouvre
        f.frequency.linearRampToValueAtTime(600, t + n[1] + n[2]);
        g.gain.setValueAtTime(0, t + n[1]);
        g.gain.linearRampToValueAtTime(0.5, t + n[1] + 0.03);
        g.gain.setValueAtTime(0.5, t + n[1] + n[2] - 0.08);
        g.gain.linearRampToValueAtTime(0, t + n[1] + n[2]);
        if (i === 3) {   // vibrato sur la dernière
          var lfo = audio.createOscillator(), prof = audio.createGain();
          lfo.frequency.value = 5.5; prof.gain.value = 7;
          lfo.connect(prof); prof.connect(o.frequency); lfo.start(t + n[1] + 0.15); lfo.stop(t + n[1] + n[2]);
        }
        o.connect(f); f.connect(g); g.connect(sortie);
        o.start(t + n[1]); o.stop(t + n[1] + n[2] + 0.05);
      });
    } catch (e) {}
  }
  document.addEventListener('click', function (e) {
    var b = e.target && e.target.closest && e.target.closest('button, .bouton, a.bouton');
    if (b && !b.disabled && b.id !== 'son') tic();
  }, true);

  function majSon() {
    var b = document.getElementById('son');
    b.textContent = donnees.son ? '🔈' : '🔇';
    b.setAttribute('aria-label', donnees.son ? T('Couper le son') : T('Remettre le son'));
  }

  /* ---------- La partie en cours ---------- */
  var partie = null;
  var jourChoisi = null;   // null = le Tchin du jour ; sinon un numéro des archives
  var paquetChoisi = null; // un paquet à thème : tirage au hasard, rejouable à volonté
  var encoreVues = [];     // « Encore une question » : celles déjà tirées depuis le résultat
  function nouvellePartie(joueurs) {
    encoreVues = [];
    var aujourdHui = M.numeroDuJour(new Date());
    var n = jourChoisi && jourChoisi < aujourdHui ? jourChoisi : aujourdHui;
    partie = {
      n: n,
      archive: n !== aujourdHui,
      paquet: paquetChoisi || undefined,
      joueurs: joueurs,
      groupe: joueurs.length > 2,
      a: joueurs[0], b: joueurs[1],
      ids: paquetChoisi ? M.melange(paquet(paquetChoisi).questions.length, Date.now() % 1e9).slice(0, M.PAR_PARTIE) : M.questionsDuJour(n, C.questions.length),
      defi: paquetChoisi ? Math.floor(Math.random() * paquet(paquetChoisi).defis.length) : M.defiDuJour(n, C.defis.length),
      i: 0,
      tour: 0,            // combien de joueurs ont déjà répondu à la question en cours
      choix: [],          // index de réponse, par joueur
      miroirI: joueurs.length > 2 ? -1 : M.PAR_PARTIE - 1,   // à deux, la dernière question est la question miroir
      etape: 'soi',       // 'soi' puis, sur la question miroir, 'devine'
      devine: [],
      manches: [],
      defiReussi: false
    };
  }
  // Le premier à répondre change à chaque question ; on fait le tour de la table. À deux, c'est la
  // personne en face qui ouvre (demande d'Elal, 20/11) : celui qui tient le téléphone le lui tend.
  function joueurDuTour(decalage) {
    var k = partie.joueurs.length, depart = partie.groupe ? 0 : 1;
    return (partie.i + partie.tour + depart + (decalage || 0) + k) % k;
  }
  function nom(j) { return partie.joueurs[j]; }
  function personnesDuCarnet() { return M.personnes(donnees.parties); }

  /* ---------- Écrans ---------- */
  function ecranAccueil() {
    var n = M.numeroDuJour(new Date());
    var numeros = donnees.parties.filter(function (p) { return !p.archive && !p.paquet; }).map(function (p) { return p.n; });
    var deja = donnees.parties.filter(function (p) { return p.n === n; }).length;
    var compte = h('p', { class: 'compte', texte: compteARebours() });
    var ticket = h('div', { class: 'ticket' }, [
      h('div', { class: 'ticket-tete' }, [
        h('div', {}, [h('div', { class: 'surtitre', texte: T('Vis-à-vis du jour') }), h('div', { class: 'numero', texte: 'n°' + n })]),
        h('div', {}, [h('p', { class: 'compte', texte: dateLongue(new Date()) }), compte])
      ]),
      h('div', { class: 'chiffres' }, [
        chiffre(M.serie(numeros, n), T('jours d’affilée')),
        chiffre(M.rencontres(personnesDuCarnet()), T('rencontres')),
        chiffre(deja, T('aujourd’hui'))
      ])
    ]);
    clearInterval(ecranAccueil.minuterie);
    ecranAccueil.minuterie = setInterval(function () { compte.textContent = compteARebours(); }, 30000);

    montrer('accueil', [
      h('div', { class: 'surtitre', texte: T('Un défi par jour, à deux') }),
      h('h1', { texte: T('Trois minutes pour vraiment se parler.') }),
      h('p', { class: 'doux', texte: T('Cinq questions, une réponse cachée chacun, un défi en vrai. Avec la personne en face de toi, sur un seul téléphone.') }),
      ticket,
      h('button', { class: 'bouton or', type: 'button', 'data-focus': '', texte: deja ? T('Rejouer avec quelqu’un d’autre') : T('Commencer à deux'), onclick: function () { jourChoisi = null; paquetChoisi = null; ecranPrenoms(); } }),
      h('button', { class: 'bouton', type: 'button', texte: T('En groupe, de 3 à 8'), onclick: function () { jourChoisi = null; paquetChoisi = null; ecranGroupe(); } }),
      h('div', { class: 'rangee' }, [
        h('button', { class: 'bouton clair', type: 'button', texte: T('Comment ça marche'), onclick: ecranRegles }),
        h('button', { class: 'bouton clair', type: 'button', texte: T('Archives'), onclick: ecranArchives })
      ]),
      h('button', { class: 'bouton clair', type: 'button', texte: T('📲 Inviter avec un QR code'), onclick: function () { ecranInviter(ecranAccueil); } }),
      h('button', { class: 'plus', type: 'button', onclick: ecranPaquets }, [
        h('div', { class: 'surtitre', texte: T('Paquets à thème') }),
        h('div', { class: 'noms' }, PAQUETS.slice(0, 6).map(function (x) { return h('span', { class: 'pastille', texte: x.em + ' ' + dansLaLangue(x.nom) }); })
          .concat(PAQUETS.length > 6 ? [h('span', { class: 'pastille', texte: T('+{n} autres', { n: PAQUETS.length - 6 }) })] : [])),
        h('small', { class: 'doux', texte: T('Rejouables à volonté, à deux ou en groupe.') })
      ])
    ]);
  }
  function chiffre(v, l) { return h('div', { class: 'chiffre' }, [h('b', { texte: String(v) }), h('span', { texte: l })]); }

  function ecranPrenoms() {
    var moi = h('input', { id: 'prenom-a', maxlength: '24', autocomplete: 'given-name', value: donnees.moi || '', 'data-focus': '' });
    var lui = h('input', { id: 'prenom-b', maxlength: '24', autocomplete: 'off' });
    var note = h('p', { class: 'note' });
    function partir(ev) {
      if (ev) ev.preventDefault();
      var a = moi.value.trim(), b = lui.value.trim();
      if (!a || !b) { note.textContent = T('Il faut vos deux prénoms pour trinquer.'); (a ? lui : moi).focus(); return; }
      if (a.toLowerCase() === b.toLowerCase()) { note.textContent = T('Deux prénoms différents : ajoutez une initiale.'); lui.focus(); return; }
      donnees.moi = a; ecrire();
      nouvellePartie([a, b]);
      tchin(false);
      ecranTendre();
    }
    var form = h('form', { class: 'ecran', onsubmit: partir }, [
      h('div', { class: 'surtitre', texte: T('Qui trinque ?') }),
      h('h2', { texte: T('Vos deux prénoms') }),
      h('div', { class: 'champ' }, [h('label', { for: 'prenom-a', texte: T('Toi') }), moi]),
      h('div', { class: 'champ' }, [h('label', { for: 'prenom-b', texte: T('La personne en face de toi') }), lui]),
      note,
      h('button', { class: 'bouton or', type: 'submit', texte: T('On trinque 🥂') }),
      h('p', { class: 'doux', texte: T('Rien ne quitte ce téléphone : pas de compte, pas de message, pas de profil.') })
    ]);
    montrer('prenoms', [form]);
  }

  function ecranGroupe() {
    var liste = h('div', { class: 'champs-groupe' });
    var note = h('p', { class: 'note' });
    var plus = h('button', { class: 'bouton clair', type: 'button', texte: T('+ Ajouter quelqu’un') });
    function ajouter(valeur) {
      var nb = liste.children.length;
      if (nb >= 8) return;
      var id = 'prenom-g' + nb + '-' + Date.now();
      var champ = h('input', { id: id, maxlength: '24', autocomplete: 'off' });
      champ.value = valeur || '';
      var retirer = h('button', { class: 'icone', type: 'button', 'aria-label': T('Retirer'), texte: '✕', onclick: function () { if (liste.children.length > 3) { ligne.remove(); maj(); } } });
      var ligne = h('div', { class: 'champ-groupe' }, [h('label', { for: id, class: 'num' }), champ, retirer]);
      liste.appendChild(ligne); maj();
      return champ;
    }
    function maj() {
      Array.prototype.forEach.call(liste.children, function (l, i) { l.querySelector('.num').textContent = String(i + 1); });
      plus.hidden = liste.children.length >= 8;
    }
    plus.addEventListener('click', function () { var c = ajouter(''); if (c) c.focus(); });
    var premier = ajouter(donnees.moi || ''); ajouter(''); ajouter('');
    premier.setAttribute('data-focus', '');
    function partir(ev) {
      ev.preventDefault();
      var noms = Array.prototype.map.call(liste.querySelectorAll('input'), function (i) { return i.value.trim(); });
      if (noms.some(function (x) { return !x; })) { note.textContent = T('Il manque un prénom. Remplis-le ou retire la ligne.'); return; }
      var vus = {};
      if (noms.some(function (x) { var k = x.toLowerCase(); if (vus[k]) return true; vus[k] = true; return false; })) { note.textContent = T('Deux prénoms identiques : ajoutez une initiale.'); return; }
      donnees.moi = noms[0]; ecrire();
      nouvellePartie(noms);
      tchin(false);
      ecranQuestion();
    }
    montrer('prenoms', [h('form', { class: 'ecran', onsubmit: partir }, [
      h('div', { class: 'surtitre', texte: T('En groupe') }),
      h('h2', { texte: T('Qui joue ? De 3 à 8 personnes') }),
      h('p', { class: 'doux', texte: T('Toi en premier. Chacun répond en secret, puis on découvre qui pense comme qui.') }),
      liste, plus, note,
      h('button', { class: 'bouton or', type: 'submit', texte: T('On trinque 🥂') })
    ])]);
  }

  function barreProgres() {
    var b = h('div', { class: 'progres', 'aria-label': T('Question {i} sur 5', { i: partie.i + 1 }) });
    for (var k = 0; k < M.PAR_PARTIE; k++) {
      var m = partie.manches[k];
      b.appendChild(h('i', { class: m ? (M.enPhase(m) ? 'fait' : 'diff') : '' }));
    }
    return b;
  }

  function ecranQuestion() {
    var q = question(partie.ids[partie.i]);
    var joueur = joueurDuTour();
    var estMiroir = partie.i === partie.miroirI;
    var miroirDevine = estMiroir && partie.etape === 'devine';
    var reponses = h('div', { class: 'reponses' }, q.r.map(function (r, k) {
      return h('button', { class: 'reponse', type: 'button', 'data-focus': k === 0 ? '' : null, onclick: function () { if (miroirDevine) deviner(k); else choisir(k); } }, [
        h('span', { class: 'em', 'aria-hidden': 'true', texte: r[0] }), h('span', { texte: r[1] })
      ]);
    }));
    reponses.querySelectorAll('[data-focus="null"]').forEach(function (b) { b.removeAttribute('data-focus'); });
    montrer('question', [
      barreProgres(),
      h('div', { class: 'qui' }, [h('b', { texte: nom(joueur) }), document.createTextNode(miroirDevine ? T(', devine la réponse de {y}', { y: nom(1 - joueur) }) : T(', à toi')), h('span', { class: 'secret', texte: T('🙈 en secret') })]),
      h('div', { class: 'surtitre', texte: estMiroir ? T('🔮 Question miroir · {i} sur 5', { i: partie.i + 1 }) : T('Question {i} sur 5', { i: partie.i + 1 }) }),
      estMiroir ? h('p', { class: 'doux', texte: miroirDevine ? T('À ton avis, qu’a répondu {y} ?', { y: nom(1 - joueur) }) : T('Réponds pour toi, puis tu devineras la réponse de {y}.', { y: nom(1 - joueur) }) }) : null,
      h('h2', { texte: q.q }),
      reponses
    ]);
  }

  function choisir(k) {
    partie.choix[joueurDuTour()] = k;
    if (partie.i === partie.miroirI) { partie.etape = 'devine'; ecranQuestion(); return; }
    avancer();
  }
  function deviner(k) {
    partie.devine[joueurDuTour()] = k;
    partie.etape = 'soi';
    avancer();
  }
  function avancer() {
    partie.tour++;
    if (partie.tour < partie.joueurs.length) ecranCache();
    else {
      var c = partie.choix.slice();
      var manche = partie.groupe ? { choix: c } : { a: c[0], b: c[1] };
      if (partie.i === partie.miroirI) { manche.da = partie.devine[0]; manche.db = partie.devine[1]; }
      partie.manches.push(manche);
      ecranRevele();
    }
  }

  // À deux, avant la première question : celui qui a saisi les prénoms tend le téléphone en face.
  function ecranTendre() {
    var x = nom(joueurDuTour());
    montrer('cache', [h('div', { class: 'cache' }, [
      h('div', { class: 'grand', 'aria-hidden': 'true', texte: '🥂' }),
      h('h2', { texte: T('Passe le téléphone à {x}', { x: x }) }),
      h('button', { class: 'bouton or', type: 'button', 'data-focus': '', texte: T('C’est moi, {x}', { x: x }), onclick: ecranQuestion })
    ])]);
  }

  function ecranCache() {
    var suivant = joueurDuTour();
    montrer('cache', [h('div', { class: 'cache' }, [
      h('div', { class: 'grand', 'aria-hidden': 'true', texte: '🙈' }),
      h('h2', { texte: T('Passe le téléphone à {x}', { x: nom(suivant) }) }),
      h('p', { texte: T('{y} a répondu. Pas de triche : on ne regarde pas.', { y: nom(joueurDuTour(-1)) }) }),
      h('button', { class: 'bouton', type: 'button', 'data-focus': '', texte: T('C’est moi, {x}', { x: nom(suivant) }), onclick: ecranQuestion })
    ])]);
  }

  function ecranRevele() {
    var q = question(partie.ids[partie.i]);
    var m = partie.manches[partie.i];
    var enPhase = M.enPhase(m);
    var relance = q.relance || relanceCommune((partie.n + partie.i) % C.relancesCommunes.length);
    var scene = partie.groupe ? sceneGroupe(q, m) : h('div', { class: 'scene' + (enPhase ? ' phase' : '') }, [
      bulle('g', partie.a, q.r[m.a]), bulle('d', partie.b, q.r[m.b])
    ]);
    var c = m.choix || [m.a, m.b];
    var unanime = c.every(function (x) { return x === c[0]; });
    var motPhase = partie.groupe ? (unanime ? T('Tchin ! Tout le monde pareil') : T('Tchin ! La majorité en phase')) : T('Tchin ! En phase');
    var detail = partie.groupe
      ? (enPhase ? T('Au moins la moitié de la table a choisi la même réponse.') : T('Les avis sont partagés : à vous de défendre votre choix.'))
      : (enPhase ? T('Tous les deux : « {r} ». Sans se concerter.', { r: q.r[m.a][1] }) : T('Pas la même réponse : c’est là que ça devient intéressant.'));
    var derniere = partie.i === M.PAR_PARTIE - 1;
    montrer('revele', [
      barreProgres(),
      h('div', { class: 'surtitre', texte: T('Question {i} sur 5', { i: partie.i + 1 }) }),
      h('h2', { texte: q.q }),
      scene,
      h('div', { class: 'verdict' }, [
        h('div', { class: 'mot ' + (enPhase ? 'en-phase' : 'differents'), texte: enPhase ? motPhase : (partie.groupe ? T('Avis partagés') : T('Différents')) }),
        h('p', { class: 'doux', texte: detail })
      ]),
      m.da !== undefined ? blocMiroir(q, m) : null,
      h('div', { class: 'relance' }, [h('span', { class: 'em', 'aria-hidden': 'true', texte: '💬' }), h('p', { texte: relance })]),
      h('button', { class: 'bouton or', type: 'button', 'data-focus': '', texte: derniere ? T('Le défi en vrai') : T('Question suivante'), onclick: suite })
    ]);
    if (!partie.groupe) requestAnimationFrame(function () { requestAnimationFrame(function () { scene.classList.add('vue'); }); });
    setTimeout(function () { if (enPhase) tchin(true); else differents(); }, 420);
  }
  function blocMiroir(q, m) {
    function ligne(qui, devine, vrai) {
      var juste = devine === vrai;
      return h('div', { class: 'miroir-ligne' + (juste ? ' juste' : '') }, [
        h('span', { class: 'em', 'aria-hidden': 'true', texte: juste ? '🔮' : '🙃' }),
        h('p', { texte: juste ? T('{x} avait deviné juste : « {r} »', { x: qui, r: q.r[devine][1] }) : T('{x} pensait « {r} »', { x: qui, r: q.r[devine][1] }) })
      ]);
    }
    return h('div', { class: 'miroir' }, [
      h('div', { class: 'surtitre', texte: T('Le miroir') }),
      ligne(partie.a, m.da, m.b), ligne(partie.b, m.db, m.a)
    ]);
  }

  // En groupe : chaque réponse choisie, avec les prénoms de ceux qui l'ont prise.
  function sceneGroupe(q, m) {
    var parRep = {};
    m.choix.forEach(function (x, j) { (parRep[x] = parRep[x] || []).push(nom(j)); });
    var ordre = Object.keys(parRep).sort(function (a, b) { return parRep[b].length - parRep[a].length; });
    return h('div', { class: 'scene-groupe' }, ordre.map(function (x) {
      var r = q.r[+x], noms = parRep[x];
      return h('div', { class: 'groupe-rep' + (noms.length >= 2 ? ' ensemble' : '') }, [
        h('span', { class: 'em', 'aria-hidden': 'true', texte: r[0] }),
        h('div', {}, [h('b', { texte: r[1] }), h('div', { class: 'noms' }, noms.map(function (n) { return h('span', { class: 'pastille', texte: n }); }))])
      ]);
    }));
  }
  function bulle(cote, nom, r) {
    return h('div', { class: 'bulle ' + cote }, [
      h('div', { class: 'nom', texte: nom }),
      h('div', { class: 'rond', 'aria-hidden': 'true', texte: r[0] }),
      h('div', { class: 'rep', texte: r[1] })
    ]);
  }
  function suite() {
    partie.i++; partie.tour = 0; partie.choix = [];
    if (partie.i < M.PAR_PARTIE) ecranQuestion(); else ecranDefi();
  }

  var minuterie = null;
  function ecranDefi() {
    var reste = 60;
    var cadran = h('div', { class: 'minuteur', 'aria-live': 'polite', texte: '60' });
    var lancer = h('button', { class: 'bouton', type: 'button', 'data-focus': '', texte: T('Lancer les 60 secondes') });
    var verdict = h('div', { class: 'rangee' }, [
      h('button', { class: 'bouton or', type: 'button', texte: T('Réussi 🥂'), onclick: function () { finir(true); } }),
      h('button', { class: 'bouton clair', type: 'button', texte: T('Raté 💨'), onclick: function () { finir(false); } })
    ]);
    lancer.addEventListener('click', function () {
      clearInterval(minuterie);
      reste = 60; cadran.textContent = '60'; cadran.classList.remove('fin');
      lancer.textContent = T('Relancer');
      minuterie = setInterval(function () {
        reste--;
        cadran.textContent = String(Math.max(0, reste));
        if (reste <= 10) cadran.classList.add('fin');
        if (reste <= 0) { clearInterval(minuterie); tchin(false); }
      }, 1000);
    });
    montrer('defi', [
      barreProgres(),
      h('div', { class: 'surtitre', texte: T('Le défi en vrai · 60 secondes') }),
      h('p', { class: 'defi-texte', texte: defi(partie.defi) }),
      cadran,
      lancer,
      h('p', { class: 'doux', texte: T('Le temps fini, ou avant : à vous de dire si c’est réussi.') }),
      verdict
    ]);
  }

  function finir(reussi) {
    clearInterval(minuterie);
    partie.defiReussi = reussi;
    var s = M.score(partie.manches);
    var t = M.titre(s);
    var g = M.grille(partie.manches, reussi);
    var avant = M.succes(donnees.parties);
    var autres = partie.joueurs.slice(1);
    var mm = partie.manches[partie.miroirI];
    partie.lecture = mm && mm.da !== undefined ? (mm.da === mm.b ? 1 : 0) + (mm.db === mm.a ? 1 : 0) : null;
    donnees.parties.unshift({ n: partie.n, archive: partie.archive || undefined, paquet: partie.paquet, groupe: partie.groupe ? partie.joueurs.length : undefined, quand: new Date().toISOString(), avec: autres.join(', '), avecs: partie.groupe ? autres : undefined, miroir: partie.lecture === null ? undefined : partie.lecture, score: s, compat: M.compatibilite(partie.manches, reussi).pourcent, titre: t.titre, defi: reussi, grille: g });
    ecrire();
    partie.nouveaux = M.succes(donnees.parties).filter(function (id) { return avant.indexOf(id) < 0; });
    if (s >= 4 || reussi || partie.nouveaux.length) tchin(true);
    ecranResultat(s, t, g);
  }

  // L'adresse publique vient d'adresse.js (la seule adresse du code) ; sinon celle de la page si elle est publique.
  function lienPublic() {
    if (window.TchinAdresse) return window.TchinAdresse;
    var l = location.href.split('#')[0];
    return /^https?:/.test(l) && !/claudeusercontent|claude\.ai|localhost|127\.0\.0\.1/.test(l) ? l : '';
  }

  /* ---------- QR code d'invitation : toujours noir sur blanc, avec sa marge, pour se scanner partout ---------- */
  function canvasQR(texte, cote) {
    var qr = window.qrcode(0, 'M'); qr.addData(texte); qr.make();
    var n = qr.getModuleCount(), marge = 4, total = n + marge * 2;
    var echelle = Math.max(1, Math.floor(cote * (window.devicePixelRatio || 1) / total));
    var c = document.createElement('canvas'); c.width = c.height = total * echelle;
    var x = c.getContext('2d');
    x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, c.width, c.height);
    x.fillStyle = '#0C1813';
    for (var r = 0; r < n; r++) for (var k = 0; k < n; k++) if (qr.isDark(r, k)) x.fillRect((k + marge) * echelle, (r + marge) * echelle, echelle, echelle);
    c.className = 'qr'; c.setAttribute('role', 'img'); c.setAttribute('aria-label', T('QR code vers {l}', { l: texte }));
    c.style.width = c.style.height = cote + 'px';
    return c;
  }
  function blocQR(cote) {
    var lien = lienPublic();
    if (!lien || !window.qrcode) return null;
    return h('div', { class: 'bloc-qr' }, [canvasQR(lien, cote), h('div', { class: 'lien-qr', texte: lien.replace(/^https?:\/\//, '').replace(/\/$/, '') })]);
  }
  function ecranInviter(retour) {
    var lien = lienPublic();
    var note = h('p', { class: 'note', 'aria-live': 'polite' });
    montrer('inviter', [
      h('div', { class: 'surtitre', texte: T('Inviter') }),
      h('h2', { texte: T('Fais scanner ce code à la personne en face de toi') }),
      h('p', { class: 'doux', texte: T('Elle ouvre Vis-à-vis sur son téléphone, sans compte et sans rien installer. Demain, elle pourra lancer le défi du jour avec quelqu’un d’autre.') }),
      lien ? blocQR(Math.min(300, window.innerWidth - 80)) : h('div', { class: 'vide', texte: T('Le lien public n’est pas encore disponible ici.') }),
      lien ? h('button', { class: 'bouton or', type: 'button', 'data-focus': '', texte: T('Copier le lien'), onclick: function () {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(lien).then(function () { note.textContent = T('Lien copié.'); }, function () { note.textContent = lien; });
        else note.textContent = lien;
      } }) : null,
      note,
      h('button', { class: 'bouton clair', type: 'button', texte: T('Retour'), onclick: function () { (retour || ecranAccueil)(); } })
    ]);
  }
  function texteAPartager(s, t, g) {
    var lien = lienPublic();
    return T('Vis-à-vis n°{n} · {s}/5 en phase', { n: partie.n, s: s }) + '\n' + g + '\n' + T(t.titre) + '\n\n' +
      T('Trois minutes pour vraiment se parler, avec quelqu’un en face de toi.') + (lien ? '\n' + lien : '');
  }

  /* ---------- Image pour les stories (1080×1920), dessinée sans aucun fichier ---------- */
  function carteStory(s, t) {
    var W = 1080, H = 1920;
    var c = document.createElement('canvas'); c.width = W; c.height = H;
    var x = c.getContext('2d');
    var AFF = '"Bricolage Grotesque", "Avenir Next", Arial, sans-serif';
    var TXT = '"Figtree", -apple-system, Arial, sans-serif';
    var VERT = '#0C1813', CRAIE = '#E7ECE4', OR = '#DDB45A', DOUX = '#94A59B', ROSE = '#E29A90';
    x.fillStyle = VERT; x.fillRect(0, 0, W, H);
    // Bulles qui montent, toujours les mêmes pour un même Tchin.
    var hz = (function (a) { return function () { a = (a * 1664525 + 1013904223) >>> 0; return a / 4294967296; }; })(partie.n * 7919);
    for (var k = 0; k < 46; k++) {
      x.beginPath(); x.arc(hz() * W, hz() * H, 4 + hz() * 22, 0, Math.PI * 2);
      x.strokeStyle = 'rgba(221,180,90,' + (0.08 + hz() * 0.22) + ')'; x.lineWidth = 3; x.stroke();
    }
    function texte(str, taille, police, couleur, y, poids, max) {
      x.font = (poids || 700) + ' ' + taille + 'px ' + police; x.fillStyle = couleur; x.textAlign = 'center';
      var mots = str.split(' '), ligne = '', lignes = [];
      mots.forEach(function (m) { var e = ligne ? ligne + ' ' + m : m; if (x.measureText(e).width > (max || 900) && ligne) { lignes.push(ligne); ligne = m; } else ligne = e; });
      lignes.push(ligne);
      lignes.forEach(function (l, i) { x.fillText(l, W / 2, y + i * taille * 1.12); });
      return y + lignes.length * taille * 1.12;
    }
    function lignesDe(str, taille, police, poids, max) {
      x.font = poids + ' ' + taille + 'px ' + police;
      var mots = str.split(' '), ligne = '', n = 1;
      mots.forEach(function (m) { var e = ligne ? ligne + ' ' + m : m; if (x.measureText(e).width > max && ligne) { n++; ligne = m; } else ligne = e; });
      return n;
    }
    // Mise en page mesurée (20/11) : le bas est posé depuis le bord de l'image, sa dernière ligne à 1860,
    // quelle que soit la langue (3 lignes en allemand) ; le milieu remonte (140 px au plus) si un titre sur
    // deux lignes ferait toucher le défi et le bas. Rien ne se chevauche, rien ne dépasse 1920.
    var bas1 = T('Trois minutes pour vraiment se parler.'), bas2 = T('Joue avec quelqu’un en face de toi.');
    var titre = T(t.titre), motDefi = partie.defiReussi ? T('Défi en vrai réussi') : T('Défi en vrai raté, on retente demain');
    var n1 = lignesDe(bas1, 56, AFF, 700, 860), n2 = lignesDe(bas2, 44, TXT, 500, 860);
    var yBas = 1860 - (n2 - 1) * 44 * 1.12 - 18 - n1 * 56 * 1.12;
    var finMilieu = 1180 + lignesDe(titre, 96, AFF, 800, 900) * 96 * 1.12 + 120 + 150 + (lignesDe(motDefi, 44, TXT, 600, 900) - 1) * 44 * 1.12;
    var dy = Math.min(140, Math.max(0, finMilieu + 92 - yBas));
    texte('Vis-à-vis', 120, AFF, CRAIE, 250, 800);
    texte(T('Vis-à-vis n°{n} · {d}', { n: partie.n, d: dateLongue(M.dateDuNumero(partie.n)) }), 44, TXT, DOUX, 330, 600);
    texte(String(s), 560, AFF, OR, 900 - dy, 800);
    texte(T('sur 5 en phase'), 72, AFF, CRAIE, 1010 - dy, 700);
    var y = texte(titre, 96, AFF, CRAIE, 1180 - dy, 800);
    // La grille : un rond doré par réponse commune.
    var r = 62, pas = 168, x0 = W / 2 - pas * 2, yg = y + 120;
    partie.manches.forEach(function (m, i) {
      x.beginPath(); x.arc(x0 + i * pas, yg, r, 0, Math.PI * 2);
      if (M.enPhase(m)) { x.fillStyle = OR; x.fill(); } else { x.strokeStyle = CRAIE; x.lineWidth = 8; x.stroke(); }
    });
    texte(motDefi, 44, TXT, partie.defiReussi ? OR : ROSE, yg + 150, 600);
    var yb = texte(bas1, 56, AFF, CRAIE, yBas, 700, 860);
    texte(bas2, 44, TXT, DOUX, yb + 18, 500, 860);
    // Pour les essais : où finit chaque bloc (lu par le banc de l'app et les essais du navigateur).
    c.dataset.mesures = JSON.stringify({ dy: dy, finDefi: yg + 150 + (lignesDe(motDefi, 44, TXT, 600, 900) - 1) * 44 * 1.12, debutBas: yBas, finBas: yb + 18 + (n2 - 1) * 44 * 1.12 });
    return c;
  }

  function blocBilanGroupe() {
    var b = M.bilanGroupe(partie.manches, partie.joueurs.length);
    return h('div', { class: 'bilan-groupe' }, [
      h('div', { class: 'succes' }, [h('span', { class: 'em', 'aria-hidden': 'true', texte: '👯' }), h('span', {}, [
        h('b', { texte: T('Le duo le plus en phase') }),
        h('small', { texte: T('{a} et {b} : {n} réponses sur 5 en commun', { a: nom(b.duo.i), b: nom(b.duo.j), n: b.duo.n }) })])]),
      b.libre === null ? null : h('div', { class: 'succes' }, [h('span', { class: 'em', 'aria-hidden': 'true', texte: '🦄' }), h('span', {}, [
        h('b', { texte: T('L’esprit libre') }),
        h('small', { texte: T('{a} a le moins souvent répondu comme les autres', { a: nom(b.libre) }) })])])
    ]);
  }

  // Le score de compatibilité (moteur.js), avec sa barre qui se remplit (demande d'Elal, 20/11).
  function blocCompat() {
    var c = M.compatibilite(partie.manches, partie.defiReussi);
    var remplie = h('i', {});
    var bloc = h('div', { class: 'compat', role: 'img', 'aria-label': T('Compatibilité') + ' : ' + T('{p} %', { p: c.pourcent }) + ' · ' + T(c.palier) }, [
      h('div', { class: 'haut' }, [
        h('div', {}, [h('div', { class: 'surtitre', texte: T('Compatibilité') }), h('div', { class: 'palier', texte: T(c.palier) })]),
        h('div', { class: 'chiffre-compat', texte: T('{p} %', { p: c.pourcent }) })
      ]),
      h('div', { class: 'barre', 'aria-hidden': 'true' }, [remplie])
    ]);
    requestAnimationFrame(function () { requestAnimationFrame(function () { remplie.style.width = c.pourcent + '%'; }); });
    return bloc;
  }

  function ecranResultat(s, t, g) {
    var note = h('p', { class: 'note', 'aria-live': 'polite' });
    var apercu = h('div', { class: 'apercu', hidden: '' });
    function story() {
      var pret = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
      pret.then(function () {
        var c = carteStory(s, t);
        c.toBlob(function (blob) {
          var fichier = null;
          try { fichier = new File([blob], 'tchin-' + partie.n + '.png', { type: 'image/png' }); } catch (e) {}
          if (fichier && navigator.canShare && navigator.canShare({ files: [fichier] })) {
            navigator.share({ files: [fichier] }).then(function () { note.textContent = T('Partagé.'); }, function () { montrerImage(c); });
          } else montrerImage(c);
        }, 'image/png');
      });
    }
    function montrerImage(c) {
      var img = h('img', { alt: T('Image du résultat pour une story'), src: c.toDataURL('image/png') });
      apercu.replaceChildren(img, h('p', { class: 'doux', texte: T('Appuie longtemps sur l’image pour l’enregistrer, puis poste-la en story.') }));
      apercu.hidden = false;
      apercu.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    var texte = texteAPartager(s, t, g);
    var repli = null;
    function partager() {
      if (navigator.share) {
        navigator.share({ text: texte }).then(function () { note.textContent = T('Partagé.'); }, copier);
      } else copier();
    }
    function copier() {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texte).then(function () { note.textContent = T('Copié : colle-le dans une story ou un groupe.'); }, montrerRepli);
      } else montrerRepli();
    }
    function montrerRepli() {
      if (!repli) {
        repli = h('textarea', { class: 'repli', id: 'texte-partage', readonly: '' });
        repli.value = texte;
        note.after(repli);
      }
      repli.focus(); repli.select();
      note.textContent = T('Sélectionné : copie-le à la main.');
    }
    montrer('resultat', [
      h('div', { class: 'surtitre', texte: (partie.paquet ? paquet(partie.paquet).em + ' ' + dansLaLangue(paquet(partie.paquet).nom) + ' · ' : '') + (partie.archive ? T('Archive') + ' · ' : '') + (partie.groupe ? T('Vis-à-vis n°{n} · en groupe de {k}', { n: partie.n, k: partie.joueurs.length }) : T('Vis-à-vis n°{n} · {a} et {b}', { n: partie.n, a: partie.a, b: partie.b })) }),
      h('div', { class: 'score' }, [h('b', { texte: String(s) }), h('span', { texte: T('sur 5 en phase') })]),
      h('h2', { texte: T(t.titre) }),
      h('p', { class: 'doux', texte: T(t.mot) }),
      h('div', { class: 'grille', 'aria-label': T('Grille du résultat'), texte: g }),
      blocCompat(),
      h('div', { class: 'rangee' }, [
        h('button', { class: 'bouton or', type: 'button', 'data-focus': '', texte: T('Image pour ta story'), onclick: story }),
        h('button', { class: 'bouton clair', type: 'button', texte: T('Texte'), onclick: partager })
      ]),
      note,
      apercu,
      lienPublic() ? h('button', { class: 'invitation', type: 'button', onclick: function () { ecranInviter(function () { ecranResultat(s, t, g); }); } }, [
        blocQR(96),
        h('div', {}, [h('b', { texte: partie.groupe ? T('Ils veulent rejouer chez eux ?') : T('{b} veut rejouer chez lui ou chez elle ?', { b: partie.b }) }),
          h('small', { texte: T('Fais scanner ce code : Vis-à-vis s’ouvre sur son téléphone. Touche pour l’agrandir.') })])
      ]) : null,
      h('button', { class: 'bouton', type: 'button', texte: T('Encore une question'), onclick: ecranEncore }),
      h('button', { class: 'bouton clair', type: 'button', texte: T('Rejouer avec quelqu’un d’autre'), onclick: ecranPrenoms }),
      partie.nouveaux && partie.nouveaux.length ? h('div', { class: 'nouveaux' }, [h('div', { class: 'surtitre', texte: partie.nouveaux.length > 1 ? T('Nouveaux succès') : T('Nouveau succès') })].concat(partie.nouveaux.map(pastilleSucces))) : null,
      partie.groupe ? blocBilanGroupe() : null,
      partie.lecture !== null && partie.lecture !== undefined ? h('div', { class: 'succes' }, [h('span', { class: 'em', 'aria-hidden': 'true', texte: '🔮' }), h('span', {}, [
        h('b', { texte: T('Le miroir : {l} sur 2', { l: partie.lecture }) }),
        h('small', { texte: [T('Ni l’un ni l’autre n’a deviné : vous avez tout à découvrir.'), T('L’un de vous lit déjà dans l’autre.'), T('Vous vous lisez déjà parfaitement.')][partie.lecture] })])]) : null,
      h('p', { class: 'doux', texte: partie.groupe ? T('Toute la table est dans ton carnet. Demain, un nouveau Vis-à-vis.') : T('{b} est dans ton carnet. Demain, un nouveau Vis-à-vis.', { b: partie.b }) })
    ]);
  }

  /* « Encore une question » : après le résultat, on continue à parler, sans score ni secret.
     Tirée dans la même source que la partie (le paquet, sinon toutes les questions), jamais une déjà vue. */
  function ecranEncore() {
    var total = partie.paquet ? paquet(partie.paquet).questions.length : C.questions.length;
    var exclues = partie.ids.concat(encoreVues), libres = [];
    for (var k = 0; k < total; k++) if (exclues.indexOf(k) < 0) libres.push(k);
    if (!libres.length) {   // tout vu : on repart, sans les questions de la partie
      encoreVues = [];
      for (k = 0; k < total; k++) if (partie.ids.indexOf(k) < 0) libres.push(k);
    }
    var i = libres[Math.floor(Math.random() * libres.length)];
    encoreVues.push(i);
    var q = question(i);
    var relance = q.relance || relanceCommune(i % C.relancesCommunes.length);
    montrer('encore', [
      h('div', { class: 'surtitre', texte: T('Encore une question · sans score') }),
      h('h2', { texte: q.q }),
      h('div', { class: 'reponses' }, q.r.map(function (r) {
        return h('div', { class: 'reponse fixe' }, [h('span', { class: 'em', 'aria-hidden': 'true', texte: r[0] }), h('span', { texte: r[1] })]);
      })),
      h('p', { class: 'doux', texte: T('Chacun répond à voix haute, puis défendez votre choix.') }),
      h('div', { class: 'relance' }, [h('span', { class: 'em', 'aria-hidden': 'true', texte: '💬' }), h('p', { texte: relance })]),
      h('button', { class: 'bouton or', type: 'button', 'data-focus': '', texte: T('Une autre 🎲'), onclick: ecranEncore }),
      h('button', { class: 'bouton clair', type: 'button', texte: T('Revenir au résultat'), onclick: function () { revenir('resultat'); } })
    ]);
  }
  // Revenir à un écran déjà construit (le résultat), sans le refaire.
  function revenir(nom) {
    ECRANS.forEach(function (e) { document.getElementById('ecran-' + e).hidden = e !== nom; });
    window.scrollTo(0, 0);
  }

  function infoSucces(id) { return M.SUCCES.filter(function (x) { return x.id === id; })[0]; }
  function pastilleSucces(id, obtenu) {
    var x = infoSucces(id);
    return h('div', { class: 'succes' + (obtenu === false ? ' bloque' : '') }, [
      h('span', { class: 'em', 'aria-hidden': 'true', texte: obtenu === false ? '🔒' : x.em }),
      h('span', {}, [h('b', { texte: T(x.nom) }), h('small', { texte: T(x.but) })])
    ]);
  }
  function grilleSucces() {
    var obtenus = M.succes(donnees.parties);
    return h('details', { class: 'bloc-succes', open: '' }, [
      h('summary', { texte: T('Succès · {a} sur {b}', { a: obtenus.length, b: M.SUCCES.length }) }),
      h('div', { class: 'grille-succes' }, M.SUCCES.map(function (x) { return pastilleSucces(x.id, obtenus.indexOf(x.id) >= 0); }))
    ]);
  }

  function ecranCarnet() {
    var lignes = donnees.parties.map(function (p) {
      var d = new Date(p.quand);
      return h('div', { class: 'ligne' }, [
        h('div', { class: 'avec', texte: p.avec }),
        h('div', { class: 'g', texte: p.grille }),
        h('div', { class: 'meta', texte: (p.paquet && paquet(p.paquet) ? paquet(p.paquet).em + ' ' + dansLaLangue(paquet(p.paquet).nom) + ' · ' : '') + T('Vis-à-vis n°{n} · {d} · {s}/5 · {t}', { n: p.n, d: dateLongue(d), s: p.score, t: T(p.titre) }) })
      ]);
    });
    montrer('carnet', [
      h('div', { class: 'surtitre', texte: T('Ton carnet') }),
      h('h2', { texte: (function (r) { return r === 1 ? T('1 rencontre') : T('{r} rencontres', { r: r }); })(M.rencontres(personnesDuCarnet())) }),
      blocChiffres(),
      lignes.length ? h('div', { class: 'liste' }, lignes) : h('div', { class: 'vide', texte: T('Personne encore. Ton premier Vis-à-vis t’attend.') }),
      grilleSucces(),
      h('button', { class: 'bouton or', type: 'button', 'data-focus': '', texte: T('Commencer à deux'), onclick: ecranPrenoms })
    ]);
  }

  function blocChiffres() {
    var c = M.chiffres(donnees.parties);
    if (!c.parties) return null;
    return h('div', { class: 'ticket' }, [
      h('div', { class: 'surtitre', texte: T('Tes chiffres') }),
      h('div', { class: 'chiffres' }, [
        chiffre(c.parties, T('Vis-à-vis joués')),
        chiffre(c.meilleureSerie, T('meilleure série')),
        chiffre(c.meilleurScore + '/5', T('meilleur score'))
      ]),
      c.duo ? h('p', { class: 'doux', texte: T('Le plus en phase avec toi : {x} ({m}/5 en moyenne)', { x: c.duo.nom, m: c.duo.moyenne.toLocaleString(LANGUE) }) }) : null
    ]);
  }

  function ecranPaquets() {
    montrer('paquets', [
      h('div', { class: 'surtitre', texte: 'Vis-à-vis+' }),
      h('h2', { texte: T('Paquets à thème') }),
      h('p', { class: 'doux', texte: T('Des questions tirées au hasard, à rejouer quand tu veux. Ils ne comptent pas dans ta série. Gratuits pendant le lancement.') }),
      h('button', { class: 'bouton or', type: 'button', texte: T('🎲 Paquet surprise, à deux'), onclick: function () {
        jourChoisi = null; paquetChoisi = PAQUETS[Math.floor(Math.random() * PAQUETS.length)].id; ecranPrenoms();
      } }),
      h('div', { class: 'cartes-paquets' }, PAQUETS.map(function (x) {
        return h('div', { class: 'carte-paquet' }, [
          h('div', { class: 'tete' }, [h('span', { class: 'em', 'aria-hidden': 'true', texte: x.em }), h('div', {}, [
            h('b', { texte: dansLaLangue(x.nom) }), h('small', { texte: dansLaLangue(x.desc) })])]),
          h('div', { class: 'rangee' }, [
            h('button', { class: 'bouton or', type: 'button', texte: T('À deux'), onclick: function () { jourChoisi = null; paquetChoisi = x.id; ecranPrenoms(); } }),
            h('button', { class: 'bouton clair', type: 'button', texte: T('En groupe'), onclick: function () { jourChoisi = null; paquetChoisi = x.id; ecranGroupe(); } })
          ])
        ]);
      })),
      h('button', { class: 'bouton clair', type: 'button', 'data-focus': '', texte: T('Revenir à l’accueil'), onclick: ecranAccueil })
    ]);
  }

  function ecranArchives() {
    var aujourdHui = M.numeroDuJour(new Date());
    var joues = {};
    donnees.parties.forEach(function (p) { joues[p.n] = (joues[p.n] || 0) + 1; });
    var lignes = [];
    for (var n = aujourdHui - 1; n >= Math.max(1, aujourdHui - 60); n--) (function (n) {
      lignes.push(h('button', { class: 'ligne archive', type: 'button', onclick: function () { jourChoisi = n; paquetChoisi = null; ecranPrenoms(); } }, [
        h('div', { class: 'avec', texte: T('Vis-à-vis n°{n}', { n: n }) }),
        h('div', { class: 'g', texte: joues[n] ? '✓' : '→' }),
        h('div', { class: 'meta', texte: dateLongue(M.dateDuNumero(n)) + (joues[n] ? ' · ' + T('déjà joué') : '') })
      ]));
    })(n);
    montrer('archives', [
      h('div', { class: 'surtitre', texte: T('Archives') }),
      h('h2', { texte: T('Les Vis-à-vis des jours passés') }),
      h('p', { class: 'doux', texte: T('Rejoue n’importe quel jour avec quelqu’un. Les archives ne comptent pas dans ta série, mais tes rencontres entrent dans le carnet.') }),
      lignes.length ? h('div', { class: 'liste' }, lignes) : h('div', { class: 'vide', texte: T('Le premier Vis-à-vis est celui d’aujourd’hui : les archives commencent demain.') }),
      h('button', { class: 'bouton clair', type: 'button', 'data-focus': '', texte: T('Revenir à l’accueil'), onclick: ecranAccueil })
    ]);
  }

  function ecranRegles() {
    var etapes = [
      T('Chaque jour à minuit, un nouveau Vis-à-vis : le même pour tout le monde.'),
      T('Trouve quelqu’un en face de toi : un voisin de table, de cours, de bureau, de soirée.'),
      T('Cinq questions. Chacun répond en secret, puis on passe le téléphone.'),
      T('On découvre si vous êtes en phase. Une relance aide à continuer la discussion.'),
      T('Un défi en vrai de 60 secondes, puis le résultat à partager.'),
      T('Tu peux rejouer le même jour avec une autre personne : chaque rencontre entre dans ton carnet.')
    ];
    montrer('regles', [
      h('div', { class: 'surtitre', texte: T('Comment ça marche') }),
      h('h2', { texte: T('Un téléphone, deux personnes, trois minutes') }),
      h('ol', { class: 'etapes' }, etapes.map(function (e) { return h('li', { texte: e }); })),
      h('p', { class: 'doux', texte: T('Vis-à-vis ne se joue qu’en face à face. Pas de compte, pas de messagerie, pas de profil : tout reste sur ce téléphone.') }),
      h('button', { class: 'bouton or', type: 'button', 'data-focus': '', texte: T('Commencer à deux'), onclick: ecranPrenoms })
    ]);
  }

  /* ---------- Démarrage ---------- */
  document.getElementById('vers-accueil').addEventListener('click', ecranAccueil);
  document.getElementById('vers-carnet').addEventListener('click', ecranCarnet);
  document.getElementById('son').addEventListener('click', function () { donnees.son = !donnees.son; ecrire(); majSon(); if (donnees.son) tchin(false); });
  var boutonLangue = document.getElementById('langue');
  function majTextesFixes() {
    document.documentElement.lang = LANGUE;
    document.documentElement.dir = LANGUE === 'ar' ? 'rtl' : 'ltr';
    boutonLangue.value = LANGUE;
    boutonLangue.setAttribute('aria-label', T('Langue'));
    document.getElementById('vers-carnet').textContent = T('Carnet');
    document.getElementById('vers-accueil').setAttribute('aria-label', T('Revenir à l’accueil'));
    majSon();
  }
  LANGUES.forEach(function (l) { boutonLangue.appendChild(h('option', { value: l[0], texte: l[0].toUpperCase() + ' · ' + l[1] })); });
  boutonLangue.addEventListener('change', function () {
    LANGUE = boutonLangue.value; donnees.langue = LANGUE; ecrire();
    majTextesFixes();
    // On rafraîchit l'écran courant quand c'est sans risque ; en pleine partie, la langue change à l'écran suivant.
    if (!document.getElementById('ecran-accueil').hidden) ecranAccueil();
    else if (!document.getElementById('ecran-carnet').hidden) ecranCarnet();
    else if (!document.getElementById('ecran-regles').hidden) ecranRegles();
    else if (!document.getElementById('ecran-archives').hidden) ecranArchives();
    else if (!document.getElementById('ecran-paquets').hidden) ecranPaquets();
    else if (!document.getElementById('ecran-prenoms').hidden && !partie) ecranPrenoms();
  });
  majTextesFixes();
  ecranAccueil();

  // Hors ligne : seulement sur une vraie adresse (https ou localhost), jamais dans la page claude.ai.
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost') && !/claude/.test(location.hostname)) {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  }

  // Pour les essais en local seulement.
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) window.tchinTest = { get partie() { return partie; }, donnees: donnees };
})();
