import type { RouteRecordRaw } from 'vue-router';

import Demo1Route from './demo1';
import { HomeRouteName } from './const';

const route: RouteRecordRaw = {
  path: '/home',
  component: () => import('@/page/home/index.vue'),

  meta: { auth: true },

  children: [
    {
      path: '',
      name: HomeRouteName.DEFAULT,
      redirect: { name: HomeRouteName.DEMO1 }
    },
    {
      path: 'demo2',
      name: HomeRouteName.DEMO2,
      component: () => import('@/page/home/demo2/index.vue')
    },
    Demo1Route
  ]
};

export default route;
