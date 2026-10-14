const CACHE_NAME = 'wayom-nan-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// Enstale Service Worker la epi anrejistre fichye yo nan kach (cache)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Rekipere fichye yo nan kach la menm lè pa gen entènèt
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
