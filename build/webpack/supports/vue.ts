import { Configuration, WebpackPluginInstance } from 'webpack';
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
    plugins: [new VueLoaderPlugin() as WebpackPluginInstance],
    resolve: {
      extensions: ['.vue', '.tsx'],
      alias: {
        Vue: 'vue/dist/vue.esm-bundler.js'
      }
    }
  };
}
