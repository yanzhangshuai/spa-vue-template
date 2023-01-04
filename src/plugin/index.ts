import type { App, Plugin } from 'vue';

import { setupAsset } from '@/plugin/asset';

import { setupGlobalProperties } from './global-property';

const _Plugin: Plugin = {
  install(app: App) {
    usePlugin(app);
  }
};

export default _Plugin;

function usePlugin(app: App<Element>) {
  setupGlobalProperties(app);
  setupAsset(app);
}
