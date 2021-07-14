import { App } from 'vue';
import { createPinia } from 'pinia';
import { debounce } from 'lodash-es';

const pinia = createPinia();
pinia.use(({ options, store }) => {
  if (options.debounce) {
    return Object.keys(options.debounce).reduce((debouncedActions, action) => {
      //@ts-ignore
      debouncedActions[action] = debounce(store[action], options.debounce[action]);
      return debouncedActions;
    }, {});
  }
});

export function setupStore(app: App<Element>): App<Element> {
  app.use(pinia);
  return app;
}
