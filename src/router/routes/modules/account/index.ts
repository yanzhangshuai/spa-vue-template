import { RouteConfig } from 'vue-router';

const router: RouteConfig = {
  path: '/account',
  component: () => import(/* webpackChunkName: "account" */ '@/page/account/index.vue'),

  children: [
    {
      path: '',
      redirect: { name: 'account-login' }
    },
    {
      path: 'login',
      name: 'account-login',
      component: () => import('@/page/account/login/index.vue')
    },
    {
      path: 'register',
      name: 'account-register',
      component: () => import('@/page/account/register/index.vue')
    }
  ]
};

export default router;
