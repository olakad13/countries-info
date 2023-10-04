addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    if (!url.pathname.startsWith('/')) {
      event.respondWith(fetch('/'));
      return;
    }
  
    event.respondWith(fetch(event.request));
  });