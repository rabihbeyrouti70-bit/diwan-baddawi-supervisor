// Diwan Market Floor Supervisor - Unified Service Worker (PWA + FCM Web Push)
const CACHE_NAME = 'diwan-supervisor-v5';

importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSy-diwan-supervisor-default",
  projectId: "diwan-supervisor",
  databaseURL: "https://diwan-supervisor-default-rtdb.asia-southeast1.firebasedatabase.app",
  vapidKey: "BOD0MQjfHfGqbhj_X8ysumjNmA7--HdGL24u3mk_gTHsw9l54RP98cB0kvv2EGQpQdMM0MGW1hnqwIYthrgiyGU"
};

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle background notification triggers from client page
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, options } = event.data;
    event.waitUntil(
      self.registration.showNotification(title, {
        icon: 'apple-touch-icon.png',
        badge: 'apple-touch-icon.png',
        vibrate: [300, 150, 300, 150, 300],
        renotify: true,
        requireInteraction: true,
        ...options
      })
    );
  }
});

// Firebase messaging background handler
try {
  if (!firebase.apps.length) {
    firebase.initializeApp(DEFAULT_FIREBASE_CONFIG);
  }
  const messaging = firebase.messaging();
  messaging.onBackgroundMessage((payload) => {
    console.log('[sw.js] FCM Background message received: ', payload);
    const title = (payload.notification && payload.notification.title) || (payload.data && payload.data.title) || '📢 توجيه إداري - ديوان ماركت';
    const body = (payload.notification && payload.notification.body) || (payload.data && payload.data.body) || 'وصلك توجيه أو ملاحظة إدارية عاجلة';
    const options = {
      body: body,
      icon: 'apple-touch-icon.png',
      badge: 'apple-touch-icon.png',
      vibrate: [300, 150, 300, 150, 300],
      requireInteraction: true,
      renotify: true,
      tag: (payload.data && payload.data.tag) || ('dir_' + Date.now()),
      data: {
        url: (payload.data && payload.data.url) || './'
      }
    };
    return self.registration.showNotification(title, options);
  });
} catch (e) {
  console.warn('FCM initialization in sw.js warning:', e);
}

// Handle generic push events (Web Push / FCM raw push)
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
    vibrate: [300, 150, 300, 150, 300],
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
