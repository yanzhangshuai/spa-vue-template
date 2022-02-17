import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from '../../utils';

export function htmlSupport(isBuild = false, title = ''): Configuration {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve('public/index.html'),
        publicPath: '/',
        title: title,
        //  是否进行缓存，默认为true，在开发环境可以设置成false
        cache: isBuild,
        minify: isBuild
      })
    ]
  };
}
