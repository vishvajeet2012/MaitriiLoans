self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  
  const title = data.title || 'New Notification';
  const options = {
    body: data.message || 'You have a new update.',
    icon: '/icons/icon-192x192.png', // Ensure these exist or use default
    badge: '/icons/badge-72x72.png',
    data: {
      url: data.url || '/admin/dashboard'
    }
    // sound: '/notificaiton.mp3' // Browsers don't always support this directly in options, handled via system or client
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
