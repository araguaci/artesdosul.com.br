const CACHE_NAME = 'artesdosul-v1';
const ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './js/scripts.js',
  './manifest.json',
  './assets/pwa-icon.png',
  './assets/favicon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Apenas cachear requests locais
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          // Retornar do cache e atualizar em background (stale-while-revalidate)
          fetch(event.request).then(networkResponse => {
            if (networkResponse.status === 200) {
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse));
            }
          }).catch(() => {/* Silenciar erros de rede offline */});
          return cachedResponse;
        }
        return fetch(event.request).then(networkResponse => {
          // Armazenar no cache se for um arquivo estático com sucesso
          if (networkResponse.status === 200 && (
            event.request.url.includes('.md') ||
            event.request.url.includes('.webp') ||
            event.request.url.includes('.css') ||
            event.request.url.includes('.js')
          )) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          }
          return networkResponse;
        });
      })
    );
  }
});
