import { App } from 'vue';
import { setupStorage } from './storage';

export function setupUtil(app: App<Element>): App<Element> {
  setupStorage();
  return app;
}
