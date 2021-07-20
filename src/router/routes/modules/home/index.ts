import { RouteConfig } from 'vue-router';
import Demo1Router from './demo1';
import Demo2Page from '@/pages/home/demo2/index.vue';

const router: RouteConfig = {
  path: '/home',
  component: () => import(/* webpackChunkName: "home" */ '@/pages/home/index.vue'),
  meta: {
    auth: true
  },
  children: [
    {
      path: '',
      redirect: { name: 'home-demo1' }
    },
    Demo1Router,
    {
      path: 'demo2',
      name: 'home-demo2',
      component: Demo2Page
    }
  ]
};

export default router;
