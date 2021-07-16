import { Configuration } from 'webpack';
import { resolve } from '../../utils';

export function scriptSupport(isBuild = false): Configuration {
  return {
    module: {
      rules: [
        {
          test: /\.[tj]sx$/,
          include: resolve('src'),
          use: ['babel-loader']
        },
        {
          test: /\.[tj]s$/,
          include: resolve('src'),
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
  };
}
