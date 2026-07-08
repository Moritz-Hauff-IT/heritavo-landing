// Heritavo PWA Service-Worker — minimal pass-through.
// Heritavo ist online-first (E2EE-Crypto haengt am Master-PW + Server-Salt,
// kein offline-Vault-Zugriff sinnvoll). SW existiert primaer um die
// PWA-Install-Bedingung von Chrome/Edge zu erfuellen + um spaeter ggf.
// statische Assets zu cachen.
//
// WICHTIG: NIE /api/* oder verschluesselte Bytes cachen — sonst landet
// User-Session-State in einem Browser-Cache der dem Threat-Modell
// widerspricht.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Pass-through fetch — kein Caching. Die SW ist nur fuer "installable"
// notwendig; dynamische Inhalte gehen direkt zum Server.
self.addEventListener("fetch", (event) => {
  // explicit no-op so the browser handles the request normally.
  // (kein event.respondWith → default-network-fetch)
  void event;
});
