const staticAssets = [
  './',
  './styles.css',
  './app.js'
];

self.addEventListener('install', async event => {
  //self.skipWaiting();
  const cache = await caches.open('static-data');
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
  const cachedResponse = await caches.match(request);
  return cachedResponse || fetch(request);
}

async function networkFirst(request) {
  const cache = await caches.open('dynamic-data');
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return await cache.match(request);
  }
}