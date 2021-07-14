import type { Plugin } from 'vite';
import html from 'vite-plugin-html';

export function htmlPlugin(isBuild: boolean, title: string): Plugin[] {
  const htmlPlugin: Plugin[] = html({
    minify: isBuild,
    inject: {
      // Inject data into ejs template
      injectData: {
        title: title
      },
      tags: []
    }
  });
  return htmlPlugin;
}
