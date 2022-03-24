import { SupportFn } from '../type';
import { resolve } from '../../utils';

export const scriptSupport: SupportFn = () => {
  return {
    module: {
      rules: [
        {
          test: /\.[tj]s(x)?$/,
          include: resolve('src'),
          use: ['thread-loader', 'babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
  };
};
