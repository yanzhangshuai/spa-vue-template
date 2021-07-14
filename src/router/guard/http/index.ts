import { Router } from 'vue-router';
import { HttpClientCanceler } from '@/service/http/canceler';

export function createHttpGuard(router: Router): void {
  const httpCanceler = new HttpClientCanceler();
  router.beforeEach(async () => {
    httpCanceler?.removeAllPending();
    return true;
  });
}
