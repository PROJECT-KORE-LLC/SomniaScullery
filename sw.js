const CACHE_NAME = 'somnia-scullery-v1';

// The core assets your app needs to run offline.
// Make sure these filenames exactly match what is in your folder!
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './SomniaScullery.png',
    
    // Base Audio Library
    './rain.mp3',
    './thunder.mp3',
    './winterwind.mp3',
    './owls.mp3',
    './raven.mp3',
    './frogs.mp3',
    './crickets.mp3',
    './fire.mp3',
    './simmeringpot.mp3',
    './teacup.mp3',
    './clock.mp3',
    './cat.mp3',
    './windchimes.mp3',
    './musicbox1.mp3'
];

// 1. Install Event - Caches the app shell
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] Caching Hearth & Home');
                // Use catch to prevent a single missing file from breaking the whole cache
                return Promise.allSettled(
                    ASSETS_TO_CACHE.map(asset => cache.add(asset).catch(err => console.warn(`[Service Worker] Failed to cache: ${asset}`, err)))
                );
            })
            .then(() => self.skipWaiting()) // Force the waiting service worker to become the active service worker
    );
});

// 2. Activate Event - Cleans up old caches if you ever update the version number
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('[Service Worker] Sweeping old ashes (clearing cache)');
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Take control of all clients immediately
    );
});

// 3. Fetch Event - Cache-First Strategy
self.addEventListener('fetch', event => {
    // We only want to intercept local requests. 
    // We MUST bypass the service worker for the Google Gemini API requests.
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                // If the file is in the cache, serve it instantly
                if (cachedResponse) {
                    return cachedResponse;
                }
                
                // Otherwise, fetch it from the network
                return fetch(event.request).catch(err => {
                    console.log('[Service Worker] Offline and asset not cached:', event.request.url);
                });
            })
    );
});
