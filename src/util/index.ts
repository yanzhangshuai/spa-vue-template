import { App } from 'vue';
import { setupStorage } from '@/util/storage';

export function setupUtil(app: App<Element>): App<Element> {
  setupStorage();
  return app;
}
