import { resolve } from '../../util/path';
import type { SupportFn } from '../../type/webpack';

export const scriptSupport: SupportFn = () => {
  return {
    module: {
      rules: [
        {
          test: /\.[tj]s(x)?$/,
          include: resolve('src'),
          use: ['thread-loader', { loader: 'babel-loader', options: { configFile: resolve('build/babel.config.js') } }]
        }
      ]
    },
    resolve: { extensions: ['.ts', '.tsx', '.json', '.jsx', '.mjs', '.js'] }
  };
};
