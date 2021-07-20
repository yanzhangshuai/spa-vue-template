import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';
import { getCurrentInstance } from '@vue/composition-api';
import routes from './routes';
import { setupRouterGuard } from './guard';

export function setupRouter(): VueRouter {
  Vue.use(VueRouter);

  const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior: () => ({ x: 0, y: 0 })
  });

  setupRouterGuard(router);
  return router;
}

export function useRouter(): VueRouter {
  const instance = getCurrentInstance();
  return instance.proxy.$router;
}

export function useRoute(): Route {
  const instance = getCurrentInstance();
  return instance.proxy.$route;
}
