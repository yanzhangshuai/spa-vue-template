import Vue from 'vue';
import { debounce } from 'lodash-es';
import { createPinia, Pinia, PiniaVuePlugin } from 'pinia';
import { PiniaStorage } from '@mwjz/pinia-storage';
import { PiniaDebounce } from '@pinia/plugin-debounce';

export type Store = Pinia;

let store: Store;

export function setupStore(): Store {
  Vue.use(PiniaVuePlugin);

  store = createPinia();
  store.name = 'pinia';

  store.use(PiniaDebounce(debounce));
  store.use(PiniaStorage({ prefix: 'spa-template_' }));

  return store;
}

export function useStore(): DeepReadonly<Store> {
  return store;
}
