import { Configuration } from 'webpack';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
export function antdSupport(): Configuration {
  return {
    plugins: [
      new AntdDayjsWebpackPlugin({
        preset: 'antdv3'
      })
    ]
  };
}
