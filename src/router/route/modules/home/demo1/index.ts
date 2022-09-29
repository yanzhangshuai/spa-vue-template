import type { RouteRecordRaw } from 'vue-router';

import { HomeRouteName } from '../const';

const route: RouteRecordRaw = {
  path: 'demo1',
  name: HomeRouteName.DEMO1,
  component: () => import('@/page/home/demo1/index.vue'),

  meta: { title: 'demo1' }
};

export default route;
