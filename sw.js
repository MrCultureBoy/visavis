/* Tchin — fonctionne hors ligne : on garde les fichiers du jeu, et le réseau passe en premier quand il est là. */
var VERSION = 'tchin-v4';
var FICHIERS = ['./', 'index.html', 'moteur.js', 'contenu.js', 'contenu-en.js', 'contenu-es.js', 'contenu-de.js', 'contenu-ar.js', 'contenu-paquets.js', 'langues.js', 'langues-ui.js', 'vendor/qrcode.js', 'adresse.js', 'jeu.js', 'manifest.webmanifest',
  'icones/icone-192.png', 'icones/icone-512.png', 'icones/apple-touch-icon.png', 'icones/favicon.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FICHIERS); })); self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.filter(function (x) { return x !== VERSION; }).map(function (x) { return caches.delete(x); })); }));
  self.clients.claim();
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(function (r) {
    if (r.ok && new URL(e.request.url).origin === location.origin) { var copie = r.clone(); caches.open(VERSION).then(function (c) { c.put(e.request, copie); }); }
    return r;
  }).catch(function () { return caches.match(e.request, { ignoreSearch: true }); }));
});
