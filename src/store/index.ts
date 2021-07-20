import Vue from 'vue';
import { debounce } from 'lodash-es';
import { createPinia, Pinia, PiniaPlugin } from 'pinia';
import { getCurrentInstance } from '@vue/composition-api';

export type Store = Pinia;

export function setupStore(): Store {
  Vue.use(PiniaPlugin);
  const pinia = createPinia();
  pinia.name = 'pinia';
  pinia.use(({ options, store }) => {
    if (options.debounce) {
      return Object.keys(options.debounce).reduce((debouncedActions, action) => {
        //@ts-ignore
        debouncedActions[action] = debounce(store[action], options.debounce[action]);
        return debouncedActions;
      }, {});
    }
  });
  return pinia;
}

export function useStore(): Store {
  const instance = getCurrentInstance();
  return instance.proxy.$pinia;
}
