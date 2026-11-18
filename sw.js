// Feste Cache-Version hochstufen für automatisches Update der Client-PWA
const CACHE_NAME = 'rha-frankonia-app-v0.1.4';

const urlsToCache = [
  './',
  './index.html',
  './config.js',
  './content.json',
  './app.js',
  './style.css',
  './manifest.json',
  './posts.json',
  './calendar.ics',
  './assets/favicon.png',
  './assets/wappenschild.png',
  './assets/app-icon-new.png',
  './assets/wappen-header.png',
  './assets/info-icon.png',
  './assets/share-icon.png',
  './assets/header-bg.jpg',
  './assets/chargen.jpg',
  './assets/insta-avatar.jpg',

  // --- START_CONTENT_BILDER ---
  './assets/img/cv-wappen-gross.jpg',
  // --- ENDE_CONTENT_BILDER ---

  // --- START_DYNAMISCHE_SEITEN ---
  './semesterprogramm/page-1.jpg',
  './semesterprogramm/page-2.jpg',
  './semesterprogramm/page-3.jpg',
  './semesterprogramm/page-4.jpg',
  './semesterprogramm/page-5.jpg',
  './semesterprogramm/page-6.jpg',
  './semesterprogramm/page-7.jpg',
  './semesterprogramm/page-8.jpg',
  './semesterprogramm/page-9.jpg',
  './semesterprogramm/page-10.jpg',
  './semesterprogramm/page-11.jpg',
  './semesterprogramm/page-12.jpg',
  './semesterprogramm/page-13.jpg',
  './semesterprogramm/page-14.jpg',
  './semesterprogramm/page-15.jpg',
  './semesterprogramm/page-16.jpg',
  // --- ENDE_DYNAMISCHE_SEITEN ---
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Neuen Service Worker sofort aktivieren
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled(
        urlsToCache.map(url => cache.add(new Request(url, { cache: 'reload' })))
      )
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    )).then(() => self.clients.claim()) // Offene Tabs sofort übernehmen
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const url = new URL(event.request.url);
  const isDynamicOrCode = url.pathname.endsWith('/') ||
                          url.pathname.endsWith('.html') ||
                          url.pathname.endsWith('.js') ||
                          url.pathname.endsWith('.css') ||
                          url.pathname.endsWith('.json') ||
                          url.pathname.endsWith('.ics');

  if (isDynamicOrCode) {
    // NETWORK FIRST für Code, Kalender (.ics), Instagram (posts.json) & Content (content.json)
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .then(networkRes => {
          if (networkRes && networkRes.ok) {
            const resClone = networkRes.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
          }
          return networkRes;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // CACHE FIRST für alle Bilder & Assets (spart Datenvolumen, lädt sofort)
    event.respondWith(
      caches.match(event.request).then(cachedRes => {
        return cachedRes || fetch(event.request).then(networkRes => {
          if (networkRes && networkRes.ok) {
            const resClone = networkRes.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
          }
          return networkRes;
        }).catch(() => cachedRes);
      })
    );
  }
});