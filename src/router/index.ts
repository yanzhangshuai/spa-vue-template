import type { App, Plugin } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import routes from './route';
import { setupRouterGuard } from './guard';

const RouterPlugin: Plugin = {
  install(app: App, readyCallBack: (app: App) => void) {
    const router = create();

    if (!router)
      return;

    app.use(router);

    router
      && router
        .isReady()
        .then(() => readyCallBack(app))
        .catch(err => (app.config.errorHandler || console.error)(err, null, null));
  }
};

export default RouterPlugin;

function create() {
  const router = createRouter({
    history: createWebHistory(GLOBAL_PATH_BASE_URL),
    routes,
    strict: false,
    scrollBehavior: () => ({ left: 0, top: 0 })
  });

  setupRouterGuard(router);

  return router;
}
