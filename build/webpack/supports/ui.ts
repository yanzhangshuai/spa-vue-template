import { Configuration } from 'webpack';
//@ts-ignore
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import { resolve } from '../../utils';

export function uiSupport(needed: boolean): Configuration {
  const alias: Record<string, string> = {};

  needed && (alias['@ant-design/icons/lib/dist$'] = resolve('src/component/ui/icons.ts'));

  return {
    plugins: [
      new AntdDayjsWebpackPlugin({
        preset: 'antdv3'
      })
    ],
    resolve: {
      alias: alias
    }
  };
}
