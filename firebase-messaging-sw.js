// Firebase Cloud Messaging Service Worker - Diwan Market Floor Supervisor
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSy-diwan-supervisor-default",
  projectId: "diwan-supervisor",
  databaseURL: "https://diwan-supervisor-default-rtdb.asia-southeast1.firebasedatabase.app",
  vapidKey: "BOD0MQjfHfGqbhj_X8ysumjNmA7--HdGL24u3mk_gTHsw9l54RP98cB0kvv2EGQpQdMM0MGW1hnqwIYthrgiyGU"
};

try {
  if (!firebase.apps.length) {
    firebase.initializeApp(DEFAULT_FIREBASE_CONFIG);
  }
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Background message received: ', payload);
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
  console.warn('FCM Background message initialization warning:', e);
}

// Handle notification click to bring app to foreground
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) ? event.notification.data.url : './';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
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
