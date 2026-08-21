const CACHE = "bcn-v0.12";

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((cache) => cache.add("/")));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone(); // clona PRIMA di restituire
            caches.open(CACHE).then((cache) => cache.put(e.request, clone));
          }
          return response; // restituisce l'originale al browser
        })
        .catch(() => cached);
    }),
  );
});
