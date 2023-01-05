import type { App, Plugin } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { setupRouterGuard } from './guard';

import routes from '~pages';

const RPlugin: Plugin = {
  install(app: App, readyCallBack: (app: App) => void) {
    const router = create();

    if (!router)
      return;

    app.use(router);

    router?.isReady()
      ?.then(() => readyCallBack(app))
      ?.catch(err => (app.config.errorHandler || console.error)(err, null, null));
  }
};

export default RPlugin;

function create() {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes.concat([{ path: '/', redirect: 'home' }]),
    strict: false,
    scrollBehavior: () => ({ left: 0, top: 0 })
  });

  setupRouterGuard(router);

  return router;
}
