import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { PluginFn } from '../type';

export const vuePlugin: PluginFn = (isBuild, env) => {
  const plugins = [vue({ reactivityTransform: true })];

  if (env?.VITE_SUPPORT_JSX) plugins.push(vueJsx({ optimize: true, transformOn: true }));

  return plugins;
};
