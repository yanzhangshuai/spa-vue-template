import { SupportFn } from '../type';
import { resolve } from '../../utils';

export const scriptSupport: SupportFn = () => {
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
};
