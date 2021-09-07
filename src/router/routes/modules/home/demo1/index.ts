import { RouteConfig } from 'vue-router';

const router: RouteConfig = {
  path: 'demo1',
  name: 'home-demo1',
  meta: {
    title: 'demo1'
  },
  component: () => import('@/page/home/demo1/index.vue')
};

export default router;
