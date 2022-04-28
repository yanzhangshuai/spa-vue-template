import type { RouteRecordRaw } from 'vue-router';
import Demo1Route from './demo1';
import ErrorRoutes from './error';
import { HomeRouteName } from './const';

const route: RouteRecordRaw = {
  path: '/home',
  name: HomeRouteName.DEFAULT_ROUTER,
  component: () => import(`@/page/home/index.vue`),
  meta: {
    auth: true
  },
  children: [
    {
      path: '',
      redirect: { name: HomeRouteName.DEMO1_ROUTER }
    },
    {
      path: 'demo2',
      name: HomeRouteName.DEMO2_ROUTER,
      component: () => import(`@/page/home/demo2/index.vue`)
    },
    Demo1Route,
    ...ErrorRoutes
  ]
};

export default route;
