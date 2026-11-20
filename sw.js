// 예전 판(2026-10-29)이 이 주소에 등록한 서비스 워커를 지운다.
// 그 판을 한 번 연 기기는 브라우저가 이 파일을 새로 받아 설치하고, 설치되자마자 캐시를 비우고 스스로 등록을 풀고 페이지를 다시 연다.
// 지금 판은 이 파일을 등록하지 않으므로 예전 판을 연 적 없는 기기에는 아무 일도 하지 않는다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
})()));
