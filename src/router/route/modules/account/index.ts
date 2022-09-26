import { createVNode } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { RouterView } from 'vue-router';
import { AccountRouteName } from './const';

const route: RouteRecordRaw = {
  path: '/account',
  name: AccountRouteName.DEFAULT,
  component: () => /* webpackChunkName: "account" */ Promise.resolve(createVNode(RouterView)),
  children: [
    {
      path: '',
      redirect: { name: AccountRouteName.LOGIN }
    },
    {
      path: 'login',
      name: AccountRouteName.LOGIN,
      component: () => import(/* webpackChunkName: "account" */ '@/page/account/login/index.vue')
    },
    {
      path: 'register',
      name: AccountRouteName.REGISTER,
      component: () => import(/* webpackChunkName: "account" */ '@/page/account/register/index.vue')
    }
  ]
};

export default route;
