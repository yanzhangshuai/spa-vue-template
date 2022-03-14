import { WebpackPluginInstance } from 'webpack';
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
          use: [{ loader: 'vue-loader', options: { pad: true } }]
        }
      ]
    },
    plugins: [new VueLoaderPlugin() as WebpackPluginInstance],

    resolve: { extensions: ['.vue', '.tsx'] }
  };
};
