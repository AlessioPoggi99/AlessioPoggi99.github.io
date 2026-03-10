const CACHE = "bcn-v0.1";

const PRECACHE = [
  "/",
  "/styles/main.css",
  "/scripts/nav.js",
  // font Google — scaricati al primo accesso e poi serviti offline
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap",
];
console.log("ueueueue");
// installazione: precache di tutto
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)));
  self.skipWaiting();
});

// attivazione: elimina cache vecchie
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

// fetch: cache-first per tutto
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request)
        .then((response) => {
          // cacha dinamicamente font e altri asset nuovi
          if (
            e.request.url.includes("fonts.g") ||
            e.request.url.includes("fonts.g")
          ) {
            caches
              .open(CACHE)
              .then((cache) => cache.put(e.request, response.clone()));
          }
          return response;
        })
        .catch(() => cached); // offline e non in cache: ritorna quello che c'è
    }),
  );
});
