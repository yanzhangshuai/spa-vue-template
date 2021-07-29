import type { Plugin } from 'vite';
import styleImport from 'vite-plugin-style-import';
// import viteAntdDayjs from 'vite-plugin-antd-dayjs';
export function antdPlugin(isBuild = false): Array<Plugin> {
  const plugins: Array<Plugin> = [];

  // plugins.push(viteAntdDayjs({ preset: 'antdv3' }));

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
