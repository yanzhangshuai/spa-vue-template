import { Plugin } from 'vite';
import { Env } from '../type/env';
import { Mode, PluginFn } from '../type/vite';
import { vuePlugin } from './plugins/vue';
import { cssPlugin } from './plugins/css';
import { htmlPlugin } from './plugins/html';
import { reportPlugin } from './plugins/report';
import { compressionPlugin } from './plugins/compression';

export function createVitePlugins(mode: Mode, viteEnv: Env): Array<Plugin | Plugin[]> {
  const plugins: Array<PluginFn> = [vuePlugin, cssPlugin, htmlPlugin, compressionPlugin, reportPlugin];
  return plugins.map((plugin) => plugin(mode, viteEnv));
}
