import type { Router } from 'vue-router';

import { Win } from '@/win';

export function createHttpGuard(router: Router): void {
  router.beforeEach(() => {
    Win.http?.canceler?.removeAllPending();

    return true;
  });
}
