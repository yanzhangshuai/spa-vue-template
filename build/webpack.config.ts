import path from 'path';
import type { Configuration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import { merge as webpackMerge } from 'webpack-merge';
import { version } from '../package.json';
import type { Env } from './type/env';
import { loadEnv, wrapperEnv } from './util/env';
import { configPath, resolve } from './util/path';
import { support } from './webpack/support';
import { createDevServer } from './webpack/dev';
import { chunkFilename, filename } from './webpack/output';

export default async (option: { WEBPACK_BUNDLE: boolean; WEBPACK_BUILD: boolean; WEBPACK_SERVE: boolean; development: boolean }): Promise<Configuration> => {
  const mode = option.WEBPACK_BUILD ? 'production' : 'development';

  // 设置版本号
  process.env.GLOBAL_APP_VERSION = version;

  // 根据webpack命令设置NODE环境变量
  process.env.NODE_ENV = mode;

  const env = loadEnv(mode, configPath);

  const webpackEnv = wrapperEnv<Env>(env);

  const baseConf: Configuration = {
    target: 'web',

    mode,

    cache: typeof webpackEnv.WEBPACK_CATCH === 'boolean' ? webpackEnv.WEBPACK_CATCH : { type: webpackEnv.WEBPACK_CATCH },

    devtool: webpackEnv.WEBPACK_DEVTOOL,

    entry: resolve('src/main.ts'),

    output: {
      path: path.isAbsolute(webpackEnv.WEBPACK_OUTPUT_DIR) ? webpackEnv.WEBPACK_OUTPUT_DIR : resolve(webpackEnv.WEBPACK_OUTPUT_DIR),
      filename: (pathData, assetInfo) => filename(mode, pathData, assetInfo),
      chunkFilename: (pathData, assetInfo) => chunkFilename(mode, pathData, assetInfo),
      clean: true
    },

    devServer: (mode === 'development' && (await createDevServer(webpackEnv))) || {},

    optimization: {
      minimize: mode === 'production',
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
      mainFiles: ['index', 'module', 'jsnext'],
      alias: {
        '@': resolve('src')
      }
    }
  };

  return webpackMerge(baseConf, support(mode, webpackEnv));
};
