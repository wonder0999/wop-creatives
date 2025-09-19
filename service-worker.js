self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('artpromo-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'beat1.mp3',
        'beat2.mp3',
        'artwork1.png',
        'design2.jpg',
        'promo.mp4',
        'clip.mov'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
