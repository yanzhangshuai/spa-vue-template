import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({ _dark: false }),

  getters: {
    dark(state): boolean {
      return state._dark
    }
  },

  actions: {
    init() {
      this.darkChange(this.dark)
    },

    darkChange(dark?: boolean) {
      if (dark === undefined)
        return

      this._dark = dark

      const classList = document.body.classList

      if (dark)
        classList.add('dark')
      else
        classList.remove('dark')
    }
  },

  storage: {
    local: {
      _dark: {
        read: args => args?.toString() === 'true'
      }
    }
  }
})
