// インストール時の処理
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Install');
});

// 起動時の処理
self.addEventListener('fetch', (event) => {
    // 今回はキャッシュ処理を省略し、そのままネットワークへリクエスト
    event.respondWith(fetch(event.request));
});