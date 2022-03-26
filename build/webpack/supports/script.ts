import { resolve } from '../../util/path';
import { SupportFn } from '../../type/webpack';

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
