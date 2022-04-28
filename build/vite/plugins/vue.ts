import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import type { PluginFn } from '../../type/vite';

export const vuePlugin: PluginFn = (_mode, env) => {
  const plugins = [vue({ reactivityTransform: true })];

  if (env?.VITE_SUPPORT_JSX)
    plugins.push(vueJsx({ optimize: true, transformOn: true }));

  return plugins;
};
