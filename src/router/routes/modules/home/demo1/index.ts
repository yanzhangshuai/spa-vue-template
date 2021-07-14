import { RouteRecordRaw } from 'vue-router';

const router: RouteRecordRaw = {
  path: 'demo1',
  name: 'home-demo1',
  component: () => import('@/pages/home/demo1/index.vue')
};

export default router;
