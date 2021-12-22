import type { Plugin } from 'vite';
import styleImport from 'vite-plugin-style-import';
export function uiPlugin(isBuild = false): Array<Plugin> {
  const plugins: Array<Plugin> = [];

  isBuild &&
    plugins.push(
      styleImport({
        libs: [
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style/index`;
            }
          }
        ]
      })
    );

  return plugins;
}
