const CACHE_NAME = 'v1';

const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/about.html',
  '/contact.html',
  '/gallery.html',
  '/css/bootstrap.css',
  '/css/responsive.css',
  '/css/style.css',
  '/main.js',

  // images
  '/images/cimg/about-1.png',
  '/images/cimg/about-2.png',
  '/images/cimg/about-img.png',
  '/images/cimg/arrangement.jpg',
  '/images/cimg/cart.png',
  '/images/cimg/envelope-white.png',
  '/images/cimg/flower.png',
  '/images/cimg/flowers.png',
  '/images/cimg/g-1.jpg',
  '/images/cimg/g-2.jpg',
  '/images/cimg/g-3.jpg',
  '/images/cimg/g-4.jpg',
  '/images/cimg/g-5.jpg',
  '/images/cimg/g-6.jpg',
  '/images/cimg/g-7.jpg',
  '/images/cimg/g-8.jpg',
  '/images/cimg/hero.png',
  '/images/cimg/location-white.png',
  '/images/cimg/menu.png',
  '/images/cimg/rose.png',
  '/images/cimg/search-icon.png',
  '/images/cimg/telephone-white.png',
  '/images/cimg/tulip.png',
  '/images/cimg/why-bg.jpg'
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