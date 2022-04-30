import type { RouteConfig } from 'vue-router';
import Demo1Route from './demo1';
import ErrorRoutes from './error';
import { HomeRouteName } from './const';

const route: RouteConfig = {
  path: '/home',
  name: HomeRouteName.DEFAULT_ROUTER,
  component: () => import(/* webpackChunkName: "home" */ '@/page/home/index.vue'),
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
      meta: {
        title: 'demo2'
      },
      component: () => import(/* webpackChunkName: "home" */ '@/page/home/demo2/index.vue')
    },
    Demo1Route,
    ...ErrorRoutes
  ]
};

export default route;
