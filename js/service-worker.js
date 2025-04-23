const CACHE_NAME = 'bloom-botanica-v1';
const URLS_TO_CACHE = [
  '/index.html',
  '/about.html',
  '/contact.html',
  '/gallery.html',
  '/css/bootstrap.css',
  '/css/style.css',
  '/css/responsive.css',
  '/js/jquery-3.4.1.min.js',
  '/js/bootstrap.js',
  '/js/main.js',
  '/images/cimg/about-1.png',
  '/images/cimg/about-2.png',
  '/images/cimg/about-img.png',
  '/images/cimg/arrangement.jpg',
  '/images/cimg/cart.png',
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
  '/images/cimg/envelope-white.png',
  '/images/cimg/tulip.png',
  '/images/cimg/why-bg.jpg'
];

// Install service worker and cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

// Activate and clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});

// Fetch from cache first, then network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
