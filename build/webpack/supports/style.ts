import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { SupportFn } from '../type';
import { resolve } from '../../utils';

export const styleSupport: SupportFn = (isBuild) => {
  const { loader } = MiniCssExtractPlugin;
  const conf: Configuration = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [isBuild ? loader : 'style-loader', { loader: 'css-loader' }, 'postcss-loader']
        },
        {
          test: /\.less$/,
          include: resolve('src'),
          use: [
            isBuild ? loader : 'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  modifyVars: { hack: [`true; @import (reference) "${resolve('src/asset/theme/default.less')}";`] },
                  javascriptEnabled: true
                }
              }
            }
          ]
        }
      ]
    },

    optimization: {
      minimizer: [new CssMinimizerPlugin()],
      splitChunks: { chunks: 'all', cacheGroups: { styles: { name: 'styles', test: /\.css$/, chunks: 'all', enforce: true } } }
    },

    plugins: [],

    resolve: { extensions: ['.less', '.css'] }
  };

  isBuild && conf.plugins.push(new MiniCssExtractPlugin({ filename: 'css/[name]_[contenthash].css' }));

  return conf;
};
