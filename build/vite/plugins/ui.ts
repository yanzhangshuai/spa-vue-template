import type { Plugin } from 'vite';
import { createStyleImportPlugin, AndDesignVueResolve } from 'vite-plugin-style-import';

export function uiPlugin(): Array<Plugin> {
  const plugins: Array<Plugin> = [];

  plugins.push(
    createStyleImportPlugin({
      resolves: [AndDesignVueResolve()],
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => `ant-design-vue/es/${name}/style/index`
        }
      ]
    })
  );

  return plugins;
}
