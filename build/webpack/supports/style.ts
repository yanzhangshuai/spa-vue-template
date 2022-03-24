import { Configuration, WebpackPluginInstance } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WindiCSSWebpackPlugin from 'windicss-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { SupportFn } from '../type';
import { resolve } from '../../utils';
import { cssChunkFilename, cssFilename } from '../output';

export const styleSupport: SupportFn = (isBuild) => {
  const { loader } = MiniCssExtractPlugin;
  const styleConf: Configuration = {
    module: {
      rules: [
        { test: /\.css$/, use: [isBuild ? loader : 'style-loader', { loader: 'css-loader' }, 'postcss-loader'] },
        {
          test: /\.less$/,
          include: resolve('src'),
          use: [
            isBuild ? loader : 'style-loader',
            { loader: 'css-loader', options: { importLoaders: 2 } },
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
      minimizer: [new CssMinimizerPlugin()]
    },

    plugins: [new WindiCSSWebpackPlugin({}) as unknown as WebpackPluginInstance],

    resolve: { extensions: ['.less', '.css'] }
  };

  isBuild && styleConf.plugins.push(new MiniCssExtractPlugin({ filename: cssFilename(isBuild), chunkFilename: cssChunkFilename(isBuild) }));

  return styleConf;
};
