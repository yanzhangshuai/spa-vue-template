import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import vueJsx from '@vitejs/plugin-vue-jsx';

import type { PluginFn } from '../../type/vite';

export const vuePlugin: PluginFn = () => {
  const plugins = [
    vue({ reactivityTransform: true }),
    vueJsx({ optimize: true, transformOn: true }),
    Pages({ dirs: 'src/page', routeBlockLang: 'yaml' })
  ];

  return plugins;
};
