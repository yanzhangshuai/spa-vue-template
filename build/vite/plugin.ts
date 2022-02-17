import { Plugin } from 'vite';
import { Env } from '../type';
import { uiPlugin } from './plugins/ui';
import { vuePlugin } from './plugins/vue';
import { htmlPlugin } from './plugins/html';
import { reportPlugin } from './plugins/report';
import { compressPlugin } from './plugins/compress';

export function createVitePlugins(viteEnv: Env, isBuild: boolean): Array<Plugin | Array<Plugin>> {
  return [
    vuePlugin(viteEnv.VITE_SUPPORT_JSX),
    htmlPlugin(isBuild, viteEnv.VITE_APP_TITLE),
    uiPlugin(),
    reportPlugin(viteEnv.VITE_REPORT),
    compressPlugin(viteEnv.VITE_BUILD_COMPRESS, viteEnv.VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
  ].filter(Boolean);
}
