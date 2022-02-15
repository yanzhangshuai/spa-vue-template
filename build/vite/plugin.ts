import { Plugin } from 'vite';
import { Env } from '../type';
import { uiPlugin } from './plugins/ui';
import { vuePlugin } from './plugins/vue';
import { htmlPlugin } from './plugins/html';
import { reportPlugin } from './plugins/report';
import { compressPlugin } from './plugins/compress';
import { autoVolarPlugin } from './plugins/auto-volar';

export function createVitePlugins(viteEnv: Env, isBuild: boolean): Array<Plugin | Array<Plugin>> {
  return [
    vuePlugin(viteEnv.VITE_SUPPORT_JSX),
    htmlPlugin(isBuild, viteEnv.VITE_APP_TITLE),
    uiPlugin(),
    autoVolarPlugin(),
    viteEnv.VITE_REPORT && reportPlugin(),
    isBuild && compressPlugin(viteEnv.VITE_BUILD_COMPRESS, viteEnv.VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
  ].filter(Boolean);
}
