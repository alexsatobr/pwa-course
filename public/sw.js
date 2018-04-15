//no DOM access on SW, only events
self.addEventListener('install', function(event){
    console.log('(Service Worker) Installing Service Worker...', event);
});

self.addEventListener('activate', function(event){
    console.log('(Service Worker) Activating Service Worker...', event);
    //last line make the app more robust and just in case it behaviers strangely;
    return self.clients.claim();
});

//sw is kind of a network Proxy
self.addEventListener('fetch', function(event){
    console.log('(Service Worker) Fetching something...', event);
    event.respondWith(fetch(event.request));
});
