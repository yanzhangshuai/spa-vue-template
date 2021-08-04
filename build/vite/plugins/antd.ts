import type { Plugin } from 'vite';
import styleImport from 'vite-plugin-style-import';
import antdDayjs from 'antd-dayjs-vite-plugin';
export function antdPlugin(isBuild = false): Array<Plugin> {
  const plugins: Array<Plugin> = [];

  plugins.push(antdDayjs({ preset: 'antdv3' }));

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
