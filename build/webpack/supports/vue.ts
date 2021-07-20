import { Configuration } from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import { resolve } from '../../utils';

export function vueSupport(): Configuration {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugin: any = new VueLoaderPlugin();
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
    plugins: [plugin],
    resolve: {
      extensions: ['.vue', '.tsx'],
      alias: {
        Vue: 'vue/dist/vue.esm-bundler.js'
      }
    }
  };
}
