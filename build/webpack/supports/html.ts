import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from '../../util/path';
import { SupportFn } from '../../type/webpack';

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
