const CACHE_NAME = 'v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/contact.html',
  '/gallery.html',
  '/css/bootstrap.css',
  '/css/responsive.css',
  '/css/style.css',
  '/main.js',
  '/manifest.json',

  // images
  '/images/flower-icon-192.png',
  '/images/flower-icon-512.png',
  '/images/about-1.webp',
  '/images/about-2.webp',
  '/images/about-img.webp',
  '/images/arrangement.webp',
  '/images/cart.webp',
  '/images/envelope-white.webp',
  '/images/flower.webp',
  '/images/flowers.webp',
  '/images/g-1.webp',
  '/images/g-2.webp',
  '/images/g-3.webp',
  '/images/g-4.webp',
  '/images/g-5.webp',
  '/images/g-6.webp',
  '/images/g-7.webp',
  '/images/g-8.webp',
  '/images/hero.webp',
  '/images/location-white.webp',
  '/images/menu.webp',
  '/images/rose.webp',
  '/images/search-icon.webp',
  '/images/telephone-white.webp',
  '/images/tulip.webp',
  '/images/why-bg.webp'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Return cached response or fetch from network
      return response || fetch(event.request);
    })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});