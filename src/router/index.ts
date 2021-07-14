import { App } from 'vue';
import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import routes from './routes';
import { setupRouterGuard } from './guard';

export const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes as Array<RouteRecordRaw>,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export function setupRouter(app: App<Element>): App<Element> {
  app.use(router);
  setupRouterGuard(router);
  return app;
}

export async function isReady(): Promise<void> {
  await router.isReady();
}
