import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WindiCSSWebpackPlugin from 'windicss-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import { resolve } from '../../util/path';
import { cssChunkFilename, cssFilename } from '../output';

import type { SupportFn } from '../../type/webpack';
import type { Configuration, WebpackPluginInstance } from 'webpack';

export const styleSupport: SupportFn = (mode) => {
  const { loader } = MiniCssExtractPlugin;

  const styleConf: Configuration = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [mode === 'production' ? loader : 'style-loader', { loader: 'css-loader' }, { loader: 'postcss-loader', options: { postcssOptions: { config: resolve('build/postcss.config.js') } } }]
        },
        {
          test: /\.less$/,
          include: resolve('src'),
          use: [
            mode === 'production' ? loader : 'style-loader',
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

  mode === 'production'
    && styleConf.plugins.push(
      new MiniCssExtractPlugin({
        filename: (pathData, assetInfo) => cssFilename(mode, pathData, assetInfo),
        chunkFilename: (pathData, assetInfo) => cssChunkFilename(mode, pathData, assetInfo)
      })
    );

  return styleConf;
};
