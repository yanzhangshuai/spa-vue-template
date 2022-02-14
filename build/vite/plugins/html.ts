import type { Plugin } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export function htmlPlugin(isBuild: boolean, title: string): Array<Plugin> {
  const htmlPlugin = createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: title
      }
    }
  });

  if (!htmlPlugin) return [];
  return htmlPlugin as Array<Plugin>;
}
