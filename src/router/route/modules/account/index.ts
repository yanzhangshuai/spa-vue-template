import { RouteConfig } from 'vue-router';
import { AccountRouterName } from './const';

const router: RouteConfig = {
  path: '/account',
  name: AccountRouterName.ACCOUNT_ROUTER,
  component: () => import(/* webpackChunkName: "account" */ '@/page/account/index.vue'),

  children: [
    {
      path: '',
      redirect: { name: AccountRouterName.ACCOUNT_LOGIN_ROUTER }
    },
    {
      path: 'login',
      name: AccountRouterName.ACCOUNT_LOGIN_ROUTER,
      component: () => import('@/page/account/login/index.vue')
    },
    {
      path: 'register',
      name: AccountRouterName.ACCOUNT_REGISTER_ROUTER,
      component: () => import('@/page/account/register/index.vue')
    }
  ]
};

export default router;
