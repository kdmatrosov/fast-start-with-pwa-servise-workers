const staticAssets = [
  './',
  './index.html',
  './offline.html',
  './styles.css',
  './app.js'
];

const STATIC_CACHE_NAME = 'static-data';
const DYNAMIC_CACHE_NAME = 'dynamic-data';

self.addEventListener('install', async event => {
  //self.skipWaiting();
  const cache = await caches.open(STATIC_CACHE_NAME);
  console.log('install');
  cache.addAll(staticAssets);
});

self.addEventListener('activate', e => {
  console.log('activate');
  return self.clients.claim();
});


self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  if (url.origin === location.origin) {
    event.respondWith(cacheData(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

async function cacheData(request) {
  return await caches.match(request) || await caches.match('/offline.html') || fetch(request);
}

async function networkFirst(request) {
  const cache = await caches.open(DYNAMIC_CACHE_NAME);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return await cache.match(request);
  }
}