import type { Router } from 'vue-router';

import { useUserStore } from '@/store/modules/user';

/**
 * 认证守卫
 * @param router
 */
export function createAuthGuard(router: Router): void {
  router.beforeEach((to, _, next) => {
    to?.meta?.auth || next();

    //  如果当前需要登录,获取当前用户,进行认证
    to?.meta?.auth
      && useUserStore().getUserInfo()
        .then(() => next())
        .catch(() => next({ name: 'account-login' }));
  });
}
