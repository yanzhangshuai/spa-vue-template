import { createHtmlPlugin } from 'vite-plugin-html';

import type { Plugin } from 'vite';
import type { PluginFn } from '../../type/vite';

export const htmlPlugin: PluginFn = (mode) => {
  return (createHtmlPlugin({
    minify: mode === 'production',
    template: '/index.html',
    entry: '/src/main.ts'
  }) || []) as Plugin[];
};
