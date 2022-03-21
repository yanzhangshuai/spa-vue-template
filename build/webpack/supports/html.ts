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
        cache: isBuild,
        minify: isBuild,
        inject: 'body'
      })
    ]
  };
};
