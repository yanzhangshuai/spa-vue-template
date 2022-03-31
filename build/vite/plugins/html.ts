import { Plugin } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { PluginFn } from '../../type/vite';

export const htmlPlugin: PluginFn = (mode, env) => {
  return (createHtmlPlugin({
    minify: mode === 'production',
    template: '/index.html',
    entry: '/src/main.ts',
    inject: { data: { title: env.VITE_APP_TITLE } }
  }) || []) as Plugin[];
};
