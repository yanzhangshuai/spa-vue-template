import { Plugin } from 'vite';
import { Env } from '../type/env';
import { Mode } from '../type/vite';
import { vuePlugin } from './plugins/vue';
import { cssPlugin } from './plugins/css';
import { htmlPlugin } from './plugins/html';
import { reportPlugin } from './plugins/report';
import { compressPlugin } from './plugins/compress';

export function createVitePlugins(mode: Mode, viteEnv: Env): Array<Plugin | Plugin[]> {
  return [vuePlugin, cssPlugin, htmlPlugin, reportPlugin, compressPlugin].map((plugin) => plugin(mode, viteEnv));
}
