import { AndDesignVueResolve, createStyleImportPlugin } from 'vite-plugin-style-import';
import type { PluginFn } from '../../type/vite';

export const uiPlugin: PluginFn = () => {
  return createStyleImportPlugin({
    resolves: [AndDesignVueResolve()],
    libs: [
      {
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: name => `ant-design-vue/es/${name}/style/index`
      }
    ]
  });
};
