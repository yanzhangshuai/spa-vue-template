import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { resolve } from '../../utils';
export function styleSupport(isBuild = false): Configuration {
  const { loader } = MiniCssExtractPlugin;
  const styleConf: Configuration = {
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
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  modifyVars: {},
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
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },

    plugins: [],

    resolve: {
      extensions: ['.less', '.css']
    }
  };

  isBuild && styleConf.plugins.push(new MiniCssExtractPlugin({ filename: 'css/[name]_[contenthash].css' }));
  return styleConf;
}
