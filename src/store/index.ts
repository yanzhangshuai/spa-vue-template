import type { App, Plugin } from 'vue';

import { debounce } from 'lodash-es';
import { createPinia } from 'pinia';
import { PiniaStorage } from '@mwjz/pinia-storage';
import { PiniaDebounce } from '@pinia/plugin-debounce';

import { Win } from '@/win';

const StorePlugin: Plugin = {
  install(app: App) {
    const store = create();

    store && app.use(store);
  }
};

export default StorePlugin;

function create() {
  const store = createPinia();

  store.name = 'pinia';

  store.use(PiniaDebounce(debounce));

  store.use(PiniaStorage({ prefix: `${Win.appConfig.name}__` }));

  return store;
}
