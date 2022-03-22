import { Plugin } from 'vite';
import { Env } from '../type';
import { uiPlugin } from './plugins/ui';
import { vuePlugin } from './plugins/vue';
import { cssPlugin } from './plugins/css';
import { htmlPlugin } from './plugins/html';
import { reportPlugin } from './plugins/report';
import { compressPlugin } from './plugins/compress';

export function createVitePlugins(isBuild: boolean, viteEnv: Env): Array<Plugin | Plugin[]> {
  return [vuePlugin, cssPlugin, uiPlugin, htmlPlugin, reportPlugin, compressPlugin].map((plugin) => plugin(isBuild, viteEnv));
}
