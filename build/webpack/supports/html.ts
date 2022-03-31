import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from '../../util/path';
import { SupportFn } from '../../type/webpack';

export const htmlSupport: SupportFn = (mode, env) => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve('index.html'),
        publicPath: '/',
        title: env.WEBPACK_APP_TITLE,
        cache: mode === 'production',
        minify: mode === 'production',
        inject: 'body'
      })
    ]
  };
};
