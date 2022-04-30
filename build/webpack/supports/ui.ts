import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import { resolve } from '../../util/path';
import type { SupportFn } from '../../type/webpack';

export const uiSupport: SupportFn = (isBuild, env) => {
  const alias: Record<string, string> = {};

  env.WEBPACK_UI_ICONS_NEED_IMPORT && (alias['@ant-design/icons/lib/dist$'] = resolve('src/component/ui/icons.ts'));

  return {
    plugins: [new AntdDayjsWebpackPlugin({ preset: 'antdv3' })],
    resolve: { alias }
  };
};
