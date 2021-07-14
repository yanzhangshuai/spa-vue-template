import { RouteRecordRaw } from 'vue-router';

const router: RouteRecordRaw = {
  path: '/account',
  name: 'account',
  component: () => import('@/pages/account/index.vue'),
  children: [
    {
      path: 'login',
      name: 'account-login',
      component: () => import('@/pages/account/login/index.vue')
    }
  ]
};

export default router;
