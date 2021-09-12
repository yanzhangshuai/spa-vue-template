import { Configuration } from 'webpack';
//@ts-ignore
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
