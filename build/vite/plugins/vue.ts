import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import type { PluginFn } from '../../type/vite';

export const vuePlugin: PluginFn = () => {
  const plugins = [vue({ reactivityTransform: true }), vueJsx({ optimize: true, transformOn: true })];

  return plugins;
};
