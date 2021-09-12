import Router from 'vue-router';

export function createPermissionGuard(router: Readonly<Router>): void {
  router.beforeEach((to, _, next) => {
    next();
  });
}
