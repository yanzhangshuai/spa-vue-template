import { defineStore } from 'pinia'

import { getCurrent } from '@/service/account'

export const useUserStore = defineStore('app-user', {

  state: () => ({ _user: '' }),

  getters: {
    user(state): string {
      return state._user
    }
  },

  actions: {
    /**
     *  获取用户信息
     * @returns
     */
    getUserInfo(): Promise<string> {
      if (this.user)
        return Promise.resolve(this.user)

      return getCurrent()
        .then((res) => {
          this._user = res
          return this.user
        })
    },

    /**
     * 登录
     */
    login() { },

    /**
     * 登出
     * @param goLogin
     */
    logout() {
      // goLogin && router.push(PageEnum.BASE_LOGIN);
    }
  }
})
