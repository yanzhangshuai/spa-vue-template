import { Plugin } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { PluginFn } from '../type';

export const htmlPlugin: PluginFn = (isBuild, env) => {
  return (createHtmlPlugin({
    minify: isBuild,
    template: 'public/index.html',
    entry: '/src/main.ts',
    inject: { data: { title: env.VITE_APP_TITLE } }
  }) || []) as Plugin[];
};
