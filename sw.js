// Feste Cache-Version hochstufen für automatisches Update der Client-PWA
const CACHE_NAME = 'rha-adolphiana-app-v0.1.0';

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
  './assets/philisterchargen.jpg',
  './assets/insta-avatar.jpg',

  // --- START_CONTENT_BILDER ---
  './assets/img/haberkorn-statt-jost-1.jpg',
  './assets/img/praesid-40-stiftungsfest.jpg',
  './assets/img/boehning-henke.jpg',
  './assets/img/cv-wappen-gross.jpg',
  './assets/img/praesidium-cv-2023.jpg',
  './assets/img/anstossen-cv-2023.jpg',
  './assets/img/buntbemuetzte-scharen.jpg',
  './assets/img/dom-algermissen-vorort-02jpg.jpg',
  './assets/img/treppenhaus.jpg',
  './assets/img/theke.jpg',
  './assets/img/billiardzimmer.jpg',
  './assets/img/algermissen-vorort-1.jpg',
  './assets/img/vortrag-miachaela-lomb.jpeg',
  './assets/img/goeller-schallenberg-wluka-arenhoevel.jpg',
  './assets/img/buergerfruehschoppen-2026.jpeg',
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
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled(urlsToCache.map(url => cache.add(url)))
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
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
  event.respondWith(
    caches.match(event.request).then(cachedRes => {
      return cachedRes || fetch(event.request).catch(() => cachedRes);
    })
  );
});