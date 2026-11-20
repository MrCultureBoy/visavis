/* Vis-à-vis — l'adresse publique du jeu, la seule du code : on la partage et on la met dans le QR d'invitation.
   Ce n'est jamais un chargement. L'app (embarquer.py) l'autorise nommément ; la changer ici seulement. */
(function (racine) {
  racine.TchinAdresse = 'https://mrcultureboy.github.io/visavis/';
  if (typeof module === 'object' && module.exports) module.exports = racine.TchinAdresse;
})(typeof self !== 'undefined' ? self : this);
