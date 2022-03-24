import { DefinePlugin } from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import { SupportFn } from '../type';
import { resolve } from '../../utils';

export const vueSupport: SupportFn = (isBuild, env) => {
  return {
    module: {
      rules: [
        {
          test: /\.vue$/,
          include: resolve('src'),
          use: ['thread-loader', { loader: 'vue-loader', options: { reactivityTransform: true } }]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new DefinePlugin({
        __VUE_OPTIONS_API__: env.WEBPACK_SUPPORT_VUE_OPTIONS_API,
        __VUE_PROD_DEVTOOLS__: false
      })
    ],
    resolve: {
      extensions: ['.vue'],
      alias: { vue: '@vue/runtime-dom' }
    }
  };
};
