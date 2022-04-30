import type Router from 'vue-router';

export function createPermissionGuard(router: Readonly<Router>): void {
  router.beforeEach((_to, _from, next) => {
    next();
  });
}
