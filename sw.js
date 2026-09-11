// Diwan Market Floor Supervisor - Unified Service Worker (PWA + FCM Web Push)
const CACHE_NAME = 'diwan-supervisor-v7';

importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyDuDHYCRHkqN3I62MXLq0dmrIk8j1cnn6o",
  authDomain: "diwan-supervisor.firebaseapp.com",
  databaseURL: "https://diwan-supervisor-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "diwan-supervisor",
  storageBucket: "diwan-supervisor.firebasestorage.app",
  messagingSenderId: "448081001183",
  appId: "1:448081001183:web:e06b7d9662b6258d92c76a",
  measurementId: "G-9KT2QL3FJ4",
  vapidKey: "BOD0MQjfHfGqbhj_X8ysumjNmA7--HdGL24u3mk_gTHsw9l54RP98cB0kvv2EGQpQdMM0MGW1hnqwIYthrgiyGU"
};

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Deduplication map: prevents duplicate notifications within 15 seconds
const seenNotificationTags = new Map();

function showDeduplicatedNotification(title, options) {
  const tag = (options && options.tag) ? options.tag : ('tag_' + title);
  const now = Date.now();
  if (seenNotificationTags.has(tag)) {
    const lastTime = seenNotificationTags.get(tag);
    if (now - lastTime < 15000) {
      console.log('[sw.js] Dropping duplicate notification for tag:', tag);
      return Promise.resolve();
    }
  }
  seenNotificationTags.set(tag, now);

  // Clean old tags
  if (seenNotificationTags.size > 80) {
    for (const [k, v] of seenNotificationTags.entries()) {
      if (now - v > 30000) seenNotificationTags.delete(k);
    }
  }

  const finalOptions = {
    icon: 'apple-touch-icon.png',
    badge: 'apple-touch-icon.png',
    vibrate: [300, 150, 300, 150, 300],
    renotify: false,
    requireInteraction: true,
    ...options
  };

  return self.registration.showNotification(title, finalOptions);
}

// Handle notification triggers from client page
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, options } = event.data;
    event.waitUntil(showDeduplicatedNotification(title, options));
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
    const tag = (payload.data && payload.data.directiveId) ? ('dir_' + payload.data.directiveId) : ((payload.data && payload.data.tag) || ('dir_' + Date.now()));
    const options = {
      body: body,
      icon: 'apple-touch-icon.png',
      badge: 'apple-touch-icon.png',
      vibrate: [300, 150, 300, 150, 300],
      requireInteraction: true,
      renotify: false,
      tag: tag,
      data: {
        url: (payload.data && payload.data.url) || './'
      }
    };
    return showDeduplicatedNotification(title, options);
  });
} catch (e) {
  console.warn('FCM initialization in sw.js warning:', e);
}

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
