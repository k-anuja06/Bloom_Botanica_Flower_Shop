if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('✅ Service Worker registered: ', registration.scope);
      })
      .catch(error => {
        console.error('❌ Service Worker registration failed:', error);
      });
  });
}


window.addEventListener('load', () => {
  function updateOnlineStatus() {
    const status = navigator.onLine ? 'online' : 'offline';
    if (status === 'offline') {
      alert("You are currently offline");
    }
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});
