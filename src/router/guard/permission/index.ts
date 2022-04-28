import type { Router } from 'vue-router';

export function createPermissionGuard(router: Router): void {
  router.beforeEach((_to, _from, next) => {
    next();
  });
}
