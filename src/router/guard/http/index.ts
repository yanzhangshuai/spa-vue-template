import { Router } from 'vue-router';
import { useAsker } from '@mwjz/asker';

export function createHttpGuard(router: Router): void {
  router.beforeEach(() => {
    const asker = useAsker();
    asker?.canceler?.removeAllPending();
    return true;
  });
}
