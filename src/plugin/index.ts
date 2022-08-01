import type { App, Plugin } from 'vue';
import { setupGlobalProperty } from './global-property';

const _Plugin: Plugin = {
  install(app: App) {
    usePlugin(app);
  }
};

export default _Plugin;

function usePlugin(app: App<Element>) {
  setupGlobalProperty(app);
}
