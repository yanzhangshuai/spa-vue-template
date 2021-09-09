import { RouteRecordRaw } from 'vue-router';

const router: RouteRecordRaw = {
  path: '/account',
  name: 'account',
  component: () => import('page/account/index.vue'),
  children: [
    {
      path: 'login',
      name: 'account-login',
      component: () => import('page/account/login/index.vue')
    }
  ]
};

export default router;
