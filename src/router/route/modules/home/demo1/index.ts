import type { RouteConfig } from 'vue-router';
import { HomeRouteName } from '../const';

const route: RouteConfig = {
  path: 'demo1',
  name: HomeRouteName.DEMO1_ROUTER,
  meta: { title: 'demo1' },
  component: () => import(/* webpackChunkName: "home" */ '@/page/home/demo1/index.vue')
};

export default route;
