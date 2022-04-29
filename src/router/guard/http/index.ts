import Router from 'vue-router';
import { useAsker } from '@mwjz/asker';

export function createHttpGuard(router: Readonly<Router>): void {
  router.beforeEach((_to, _from, next) => {
    const http = useAsker();
    http?.canceler?.removeAllPending();
    next();
  });
}
