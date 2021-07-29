import { RouteRecordRaw } from 'vue-router';

const router: RouteRecordRaw = {
  path: 'demo1',
  name: 'home-demo1',
  component: () => import('@/page/home/demo1/index.vue')
};

export default router;
