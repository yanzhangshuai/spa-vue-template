import Vue from 'vue';
import { reactive, UnwrapRef } from '@vue/composition-api';
import Router, { Route } from 'vue-router';
import routes from './routes';
import { setupRouterGuard } from './guard';

let router: Router;
let currentRoute: UnwrapRef<Route>;

export function setupRouter(): Readonly<Router> {
  Vue.use(Router);

  const router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior: () => ({ x: 0, y: 0 })
  });

  currentRoute = reactive({ ...router.currentRoute });

  router.beforeEach((to: Route, _, next) => {
    to && Object.assign(currentRoute, to);
    next();
  });

  setupRouterGuard(router);
  return router;
}

export function useRouter(): Readonly<Router> {
  return router;
}

export function useRoute(): UnwrapRef<Route> {
  return currentRoute;
}
