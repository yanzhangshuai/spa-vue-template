import Vue from 'vue';
import { debounce } from 'lodash-es';
import { createPinia, Pinia, PiniaVuePlugin } from 'pinia';

export type Store = Pinia;

let store: Store;

export function setupStore(): Store {
  Vue.use(PiniaVuePlugin);
  store = createPinia();
  store.name = 'pinia';
  store.use(({ options, store }) => {
    if (options.debounce) {
      return Object.keys(options.debounce).reduce((debouncedActions, action) => {
        debouncedActions[action] = debounce(store[action], options.debounce[action]);
        return debouncedActions;
      }, {} as { [k in keyof typeof options.actions]: Function });
    }
  });
  return store;
}

export function useStore(): Store {
  return store;
}
