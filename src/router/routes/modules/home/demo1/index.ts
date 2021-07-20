import { RouteConfig } from 'vue-router';

const router: RouteConfig = {
  path: 'demo1',
  name: 'home-demo1',
  meta: {
    title: '123'
  },
  component: () => import('@/pages/home/demo1/index.vue')
};

export default router;
