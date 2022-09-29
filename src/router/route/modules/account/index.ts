import { createVNode } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { RouterView } from 'vue-router';

import { AccountRouteName } from './const';

const route: RouteRecordRaw = {
  path: '/account',
  component: () => Promise.resolve(createVNode(RouterView)),
  children: [
    {
      path: '',
      name: AccountRouteName.DEFAULT,
      redirect: { name: AccountRouteName.LOGIN }
    },
    {
      path: 'login',
      name: AccountRouteName.LOGIN,
      component: () => import('@/page/account/login/index.vue')
    },
    {
      path: 'register',
      name: AccountRouteName.REGISTER,
      component: () => import('@/page/account/register/index.vue')
    }
  ]
};

export default route;
