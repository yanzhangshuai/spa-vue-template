import { DefinePlugin } from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import { SupportFn } from '../type';
import { resolve } from '../../utils';

export const vueSupport: SupportFn = () => {
  return {
    module: {
      rules: [
        {
          test: /\.vue$/,
          include: resolve('src'),
          use: [{ loader: 'vue-loader', options: { reactivityTransform: true } }]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false
      })
    ],
    resolve: {
      extensions: ['.vue', '.tsx'],
      alias: { vue: '@vue/runtime-dom' }
    }
  };
};
