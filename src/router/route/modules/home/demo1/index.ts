import { RouteConfig } from 'vue-router';
import { HomeRouterName } from '../const';

const router: RouteConfig = {
  path: 'demo1',
  name: HomeRouterName.HOME_DEMO1_ROUTER,
  meta: {
    title: 'demo1'
  },
  component: () => import(/* webpackChunkName: "home" */ '@/page/home/demo1/index.vue')
};

export default router;
