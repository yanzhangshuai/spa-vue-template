import HtmlWebpackPlugin from 'html-webpack-plugin';
import { SupportFn } from '../type';
import { resolve } from '../../utils';

export const htmlSupport: SupportFn = (isBuild, env) => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve('public/index.html'),
        publicPath: '/',
        title: env.WEBPACK_APP_TITLE,
        //  是否进行缓存，默认为true，在开发环境可以设置成false
        cache: isBuild,
        minify: isBuild
      })
    ]
  };
};
