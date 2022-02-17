import type { Plugin } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export function htmlPlugin(isBuild: boolean, title: string): Array<Plugin> {
  const htmlPlugin = createHtmlPlugin({
    minify: isBuild,
    template: 'public/index.html',
    inject: { data: { title: title } }
  });
  return htmlPlugin.filter((p) => p).map((p) => p as Plugin);
}
