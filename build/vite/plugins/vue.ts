import { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export function vuePlugin(supportJsx = true): Plugin[] {
  const plugins = [vue()];
  if (supportJsx)
    plugins.push(
      vueJsx({
        optimize: true,
        transformOn: true
      })
    );
  return plugins;
}
