import path from 'path';
import { Configuration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import { merge as webpackMerge } from 'webpack-merge';
import packageJson from './package.json';
import { Env } from './build/type/env';
import { loadEnv } from './build/util/config';
import { wrapperEnv } from './build/util/helper';
import { configPath, resolve } from './build/util/path';
import { support } from './build/webpack/support';
import { createDevServer } from './build/webpack/dev';
import { chunkFilename, filename } from './build/webpack/output';

export default async (option: { WEBPACK_BUNDLE: boolean; WEBPACK_BUILD: boolean; WEBPACK_SERVE: boolean; development: boolean }): Promise<Configuration> => {
  //  环境判断
  const isBuild = option.WEBPACK_BUILD;

  const mode = isBuild ? 'production' : 'development';

  // 设置版本号
  process.env.GLOBAL_VERSION = packageJson.version;

  // 根据webpack命令设置NODE环境变量
  process.env.NODE_ENV = mode;

  const env = loadEnv(mode, configPath);

  const webpackEnv = wrapperEnv<Env>(env);

  const baseConf: Configuration = {
    target: 'web',

    mode: mode,

    cache: typeof webpackEnv.WEBPACK_CATCH === 'boolean' ? webpackEnv.WEBPACK_CATCH : { type: webpackEnv.WEBPACK_CATCH },

    devtool: webpackEnv.WEBPACK_DEVTOOL,

    entry: resolve('src/main.ts'),

    output: {
      path: path.isAbsolute(webpackEnv.WEBPACK_OUTPUT_DIR) ? webpackEnv.WEBPACK_OUTPUT_DIR : resolve(webpackEnv.WEBPACK_OUTPUT_DIR),
      filename: (pathData, assetInfo) => filename(isBuild, pathData, assetInfo),
      chunkFilename: (pathData, assetInfo) => chunkFilename(isBuild, pathData, assetInfo),
      clean: true
    },

    devServer: (!isBuild && (await createDevServer(webpackEnv))) || {},

    optimization: {
      minimize: isBuild,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: webpackEnv.WEBPACK_BUILD_DROP_CONSOLE
            }
          }
        })
      ]
    },

    performance: { maxEntrypointSize: 400000, maxAssetSize: 400000 },

    resolve: {
      mainFiles: ['index', 'module'],
      alias: {
        '@': resolve('src')
      }
    }
  };

  return webpackMerge(baseConf, support(isBuild, webpackEnv));
};
