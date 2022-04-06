import { Configuration } from 'webpack-dev-server';
import { Env } from '../type/env';
import { createProxy } from './proxy';
import { findPort } from '../util/helper';

export function createDevServer(env: Env): Promise<Configuration> {
  const config: Configuration = {
    port: env.WEBPACK_SERVER_PORT,
    open: env.WEBPACK_SERVER_OPEN,
    hot: true,
    compress: env.WEBPACK_SERVER_COMPRESS,
    historyApiFallback: true,

    client: {
      overlay: true
    },

    static: {
      serveIndex: true
    },

    devMiddleware: {
      stats: env.WEBPACK_SERVER_STATS,
      writeToDisk: env.WEBPACK_SERVER_WRITE_TO_DIST
    },

    // watchFiles: {
    //   paths: ['src/**/*.png', 'public/**/*'],
    //   options: {
    //     usePolling: false,
    //     ignored: /node_modules/
    //   }
    // },

    proxy: createProxy(env.WEBPACK_SERVER_PROXY)
  };

  return new Promise((resolve) => {
    findPort(env.WEBPACK_SERVER_PORT)
      .then((port) => {
        config.port = port;
        resolve(config);
      })
      .catch(() => resolve(config));
  });
}
