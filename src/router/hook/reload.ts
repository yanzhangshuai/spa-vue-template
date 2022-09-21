import { unref } from 'vue';
import { useRouter } from 'vue-router';
import type { NavigationFailure, Router } from 'vue-router';

export function useReload(router?: Router): PromiseFn<never, NavigationFailure | void | undefined> {
  let _router: Router;
  !router && (_router = useRouter());

  const { push, currentRoute } = router || _router;
  const { query, params } = currentRoute.value;

  return (): Promise<NavigationFailure | void | undefined> => {
    const path = unref(currentRoute).fullPath;

    return push({ path, query, params });
  };
}
