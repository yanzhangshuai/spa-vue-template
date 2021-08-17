import path from 'path';
import { Configuration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import { merge as webpackMerge } from 'webpack-merge';
import { loadEnv } from './build/config';
import { support } from './build/webpack/support';
import { createDevServer } from './build/webpack/dev';
import { configPath, resolve, wrapperEnv } from './build/utils';

export default async (option: {
  WEBPACK_BUNDLE: boolean;
  WEBPACK_BUILD: boolean;
  WEBPACK_SERVE: boolean;
  development: boolean;
}): Promise<Configuration> => {
  //  环境判断
  const isBuild = option.WEBPACK_BUILD;

  const mode = isBuild ? 'production' : 'development';

  // 根据webpack命令设置NODE环境变量
  process.env.NODE_ENV = mode;

  const env = loadEnv(mode, configPath);

  const webpackEnv = wrapperEnv(env);

  const baseConf: Configuration = {
    target: 'web',

    mode: mode,

    cache:
      typeof webpackEnv.WEBPACK_CATCH === 'boolean'
        ? webpackEnv.WEBPACK_CATCH
        : { type: webpackEnv.WEBPACK_CATCH },

    devtool: webpackEnv.WEBPACK_DEVTOOL,

    entry: resolve('src/main.ts'),

    output: {
      path: path.isAbsolute(webpackEnv.WEBPACK_OUTPUT_DIR)
        ? webpackEnv.WEBPACK_OUTPUT_DIR
        : resolve(webpackEnv.WEBPACK_OUTPUT_DIR),
      filename: isBuild ? 'js/name_[contenthash].js' : 'js/[name].js',
      chunkFilename: 'js/[name].chunk.js',
      clean: true
    },

    //TODO: @types/webpack-dev-server3.11.1版本的提示目前才正确，3.11.1以上版本有问题
    devServer: (!isBuild && (await createDevServer(webpackEnv))) || {},

    optimization: {
      minimize: isBuild,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: webpackEnv.WEBPACK_DROP_CONSOLE
            }
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as any
      ]
    },

    resolve: {
      mainFiles: ['index', 'module', 'jsnext:main', 'jsnext'],
      alias: {
        '@': resolve('src')
      }
    }
  };

  const conf = webpackMerge(baseConf, support(isBuild, webpackEnv));

  return conf;
};
