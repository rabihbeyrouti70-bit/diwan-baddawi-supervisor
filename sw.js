// Diwan Market Floor Supervisor - Service Worker
const CACHE_NAME = 'diwan-supervisor-v4';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle background notification triggers from client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, options } = event.data;
    event.waitUntil(
      self.registration.showNotification(title, {
        icon: 'apple-touch-icon.png',
        badge: 'apple-touch-icon.png',
        vibrate: [300, 150, 300],
        renotify: true,
        requireInteraction: true,
        ...options
      })
    );
  }
});

// Handle push events (Web Push / FCM)
self.addEventListener('push', (event) => {
  let data = {};
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data = { title: '📢 توجيه إداري - ديوان ماركت', body: event.data.text() };
    }
  }
  const title = data.title || (data.notification && data.notification.title) || '📢 توجيه إداري - ديوان ماركت';
  const body = data.body || (data.notification && data.notification.body) || 'وصلك توجيه أو ملاحظة إدارية عاجلة';
  const options = {
    body: body,
    icon: 'apple-touch-icon.png',
    badge: 'apple-touch-icon.png',
    vibrate: [300, 150, 300],
    renotify: true,
    requireInteraction: true,
    tag: data.tag || ('dir_' + Date.now()),
    data: {
      url: (data.data && data.data.url) || data.url || './'
    }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// Handle notification click to bring app to foreground
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) ? event.notification.data.url : './';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
