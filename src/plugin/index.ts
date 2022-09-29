import type { App, Plugin } from 'vue';

import { setupGlobalProperty } from './global-property';

const _Plugin: Plugin = {
  install(app: App) {
    injectPlugin(app);
  }
};

export default _Plugin;

function injectPlugin(app: App<Element>) {
  setupGlobalProperty(app);
}
