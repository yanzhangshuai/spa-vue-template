import { WebpackPluginInstance } from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import { resolve } from '../../util/path';
import { SupportFn } from '../../type/webpack';

export const vueSupport: SupportFn = () => {
  return {
    module: {
      rules: [
        {
          test: /\.vue$/,
          include: resolve('src'),
          use: ['thread-loader', { loader: 'vue-loader', options: { pad: true } }]
        }
      ]
    },
    plugins: [new VueLoaderPlugin() as WebpackPluginInstance],

    resolve: { extensions: ['.vue'] }
  };
};
