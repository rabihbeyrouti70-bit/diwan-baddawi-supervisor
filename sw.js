// Diwan Market Floor Supervisor - Unified Service Worker (PWA + FCM Web Push + Background Calling v9)
const CACHE_NAME = 'diwan-supervisor-v9';

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

// Handle notification triggers and incoming calls from client page
self.addEventListener('message', (event) => {
  if (!event.data) return;

  if (event.data.type === 'SHOW_NOTIFICATION') {
    const { title, options } = event.data;
    event.waitUntil(showDeduplicatedNotification(title, options));
  } else if (event.data.type === 'INCOMING_CALL') {
    const callData = event.data.callData || {};
    const callId = callData.callId || ('call_' + Date.now());
    const roleText = callData.callerRole === 'admin' ? '👑 المدير العام' : (callData.callerRole === 'branch_manager' ? '🏢 مدير الفرع' : 'مشرف');
    const callerName = callData.callerName || 'الإدارة';

    const title = '📞 مكالمة صوتية واردة الآن!';
    const options = {
      body: `اتصال إداري مباشر من: ${callerName} (${roleText})`,
      icon: 'apple-touch-icon.png',
      badge: 'apple-touch-icon.png',
      tag: 'incoming_call_' + callId,
      requireInteraction: true,
      renotify: true,
      silent: false,
      vibrate: [1000, 500, 1000, 500, 1000, 500, 1500, 500, 2000, 500, 2000],
      actions: [
        { action: 'accept_call', title: '📞 رد على المكالمة' },
        { action: 'reject_call', title: '❌ رفض' }
      ],
      data: {
        type: 'INCOMING_CALL',
        callId: callId,
        callerName: callerName,
        url: './?action=accept_call&callId=' + callId
      }
    };
    event.waitUntil(self.registration.showNotification(title, options));
  } else if (event.data.type === 'CANCEL_CALL') {
    const callId = event.data.callId;
    event.waitUntil(
      self.registration.getNotifications().then((notifications) => {
        notifications.forEach((n) => {
          if (n.tag === ('incoming_call_' + callId) || (n.data && n.data.callId === callId)) {
            n.close();
          }
        });
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
    const data = payload.data || {};
    const isCall = data.type === 'INCOMING_CALL' || !!data.callId;

    if (isCall) {
      const callId = data.callId || ('call_' + Date.now());
      const callerName = data.callerName || (payload.notification && payload.notification.title) || 'الإدارة';
      const roleText = data.callerRole === 'admin' ? '👑 المدير العام' : (data.callerRole === 'branch_manager' ? '🏢 مدير الفرع' : 'مشرف');
      const title = '📞 مكالمة صوتية واردة الآن!';
      const options = {
        body: `اتصال إداري مباشر من: ${callerName} (${roleText})`,
        icon: 'apple-touch-icon.png',
        badge: 'apple-touch-icon.png',
        tag: 'incoming_call_' + callId,
        requireInteraction: true,
        renotify: true,
        silent: false,
        vibrate: [1000, 500, 1000, 500, 1000, 500, 1500, 500, 2000, 500, 2000],
        actions: [
          { action: 'accept_call', title: '📞 رد على المكالمة' },
          { action: 'reject_call', title: '❌ رفض' }
        ],
        data: {
          type: 'INCOMING_CALL',
          callId: callId,
          callerName: callerName,
          url: './?action=accept_call&callId=' + callId
        }
      };
      return self.registration.showNotification(title, options);
    }

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

// Handle notification click to bring app to foreground or answer/reject call
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const notificationData = event.notification.data || {};
  const isIncomingCall = notificationData.type === 'INCOMING_CALL' || !!notificationData.callId;
  const action = event.action;

  if (isIncomingCall && action === 'reject_call') {
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
        for (const client of clientList) {
          client.postMessage({ type: 'SW_REJECT_CALL', callId: notificationData.callId });
        }
      })
    );
    return;
  }

  const targetUrl = notificationData.url || './';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) {
          return client.focus().then((focusedClient) => {
            if (isIncomingCall && focusedClient) {
              focusedClient.postMessage({
                type: 'SW_ACCEPT_CALL',
                callId: notificationData.callId
              });
            }
          });
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
