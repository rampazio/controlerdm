self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("rdm-cache").then(cache => {
      return cache.addAll([
        "index_rdm_pwa.html",
        "manifest.json",
        "service-worker.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
