import { Configuration } from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import { resolve } from '../../utils';

export function vueSupport(): Configuration {
  return {
    module: {
      rules: [
        {
          test: /\.vue$/,
          include: resolve('src'),
          use: [{ loader: 'vue-loader', options: { pad: true } }]
        }
      ]
    },
    plugins: [new VueLoaderPlugin()],
    resolve: {
      extensions: ['.vue', '.tsx'],
      alias: {
        vue: '@vue/runtime-dom'
      }
    }
  };
}
