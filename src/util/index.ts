import { App } from 'vue';
import { setupStorage } from '@/util/storage';

export function setupUtils(app: App<Element>): App<Element> {
  setupStorage();
  return app;
}
