import { RouteRecordRaw } from 'vue-router';

const router: RouteRecordRaw = {
  path: '/account',
  name: 'account',
  component: () => import(/* webpackChunkName: "account" */ '@/pages/account/index.vue'),

  children: [
    {
      path: '',
      redirect: { name: 'account-login' }
    },
    {
      path: 'login',
      name: 'account-login',
      component: () => import('@/pages/account/login/index.vue')
    },
    {
      path: 'register',
      name: 'account-register',
      component: () => import('@/pages/account/register/index.vue')
    }
  ]
};

export default router;
