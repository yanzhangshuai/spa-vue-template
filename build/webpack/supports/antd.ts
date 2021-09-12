import { Configuration } from 'webpack';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import { resolve } from '../../utils';
export function antdSupport(needed: boolean): Configuration {
  const alias: Record<string, string> = {};

  needed && (alias['@ant-design/icons/lib/dist$'] = resolve('src/component/antd/icons.ts'));

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
