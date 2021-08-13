import Router from 'vue-router';
import { useHttp } from '@/service';

export function createHttpGuard(router: Router): void {
  router.beforeEach(async (to, from, next) => {
    const http = useHttp();
    http?.canceler?.removeAllPending();
    next();
  });
}
