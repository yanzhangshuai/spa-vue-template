import type { RouteConfig } from 'vue-router';
import { ErrorRouteName } from './const';

const routes: Array<RouteConfig> = [
  {
    path: '/404',
    name: ErrorRouteName.NOT_FOUND_ROUTER,
    component: () => import(/* webpackChunkName: "error" */ '@/page/error/404/index.vue')
  }
];

export default routes;
