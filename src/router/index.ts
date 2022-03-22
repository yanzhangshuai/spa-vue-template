import Vue from 'vue';
import Router, { Route } from 'vue-router';
import { reactive, ref, Ref, UnwrapRef } from '@vue/composition-api';
import routes from './route';
import { setupRouterGuard } from './guard';

let router: Router;
let currentRoute: Ref<UnwrapRef<Route>>;

export function setupRouter(): Readonly<Router> {
  Vue.use(Router);

  const router = new Router({
    base: GLOBAL_PATH_BASE_URL,
    mode: 'history',
    routes: routes,
    scrollBehavior: () => ({ x: 0, y: 0 })
  });

  currentRoute = ref(router.currentRoute);
  router.beforeEach((to: Route, _, next) => {
    to && (currentRoute.value = reactive(to));
    next();
  });

  setupRouterGuard(router);
  return router;
}

export function useRouter(): Readonly<Router> {
  return router;
}

export function useRoute(): Ref<UnwrapRef<Route>> {
  return currentRoute;
}
