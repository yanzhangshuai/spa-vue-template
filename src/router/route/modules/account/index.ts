import type { RouteConfig } from 'vue-router';
import { AccountRouteName } from './const';

const route: RouteConfig = {
  path: '/account',
  name: AccountRouteName.DEFAULT_ROUTER,
  component: () => import(/* webpackChunkName: "account" */ '@/page/account/index.vue'),

  children: [
    {
      path: '',
      redirect: { name: AccountRouteName.LOGIN_ROUTER }
    },
    {
      path: 'login',
      name: AccountRouteName.LOGIN_ROUTER,
      component: () => import(/* webpackChunkName: "account" */ '@/page/account/login/index.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: 'register',
      name: AccountRouteName.REGISTER_ROUTER,
      component: () => import(/* webpackChunkName: "account" */ '@/page/account/register/index.vue'),
      meta: {
        title: '注册'
      }
    }
  ]
};

export default route;
