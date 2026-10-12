/*
 * Kishor Career Point service worker.
 *
 * - Pages: network first, so visitors always get the latest content when online.
 *   Pages they have opened before are kept for when they are offline.
 * - Hashed build files (/_next/static): cache first, they never change.
 * - Images: show the saved copy straight away and refresh it in the background.
 * - Anything not saved and no connection: the /offline page.
 *
 * Bump VERSION to clear every saved copy on the next visit.
 */
const VERSION = "v1";
const PAGES = `kcp-pages-${VERSION}`;
const ASSETS = `kcp-assets-${VERSION}`;
const IMAGES = `kcp-images-${VERSION}`;
const KEEP = [PAGES, ASSETS, IMAGES];
const OFFLINE_URL = "/offline";
const MAX_PAGES = 40;
const MAX_IMAGES = 80;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGES)
      .then((cache) => cache.add(new Request(OFFLINE_URL, { cache: "reload" })))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => !KEEP.includes(key)).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

async function trim(cacheName, max) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= max) return;
  await Promise.all(keys.slice(0, keys.length - max).map((key) => cache.delete(key)));
}

async function networkFirstPage(request) {
  const cache = await caches.open(PAGES);
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone()).then(() => trim(PAGES, MAX_PAGES));
    }
    return response;
  } catch (error) {
    const saved = await cache.match(request);
    if (saved) return saved;
    const offline = await cache.match(OFFLINE_URL);
    return offline || Response.error();
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const saved = await cache.match(request);
  if (saved) return saved;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(request, cacheName, max) {
  const cache = await caches.open(cacheName);
  const saved = await cache.match(request);
  const refresh = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone()).then(() => trim(cacheName, max));
      return response;
    })
    .catch(() => undefined);
  return saved || (await refresh) || Response.error();
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname === "/sw.js") return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request));
    return;
  }

  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request, ASSETS));
    return;
  }

  if (request.destination === "image" || url.pathname.startsWith("/_next/image")) {
    event.respondWith(staleWhileRevalidate(request, IMAGES, MAX_IMAGES));
  }
});
