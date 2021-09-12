import { Configuration } from 'webpack-dev-server';
import { Env } from './../types';
import { findPort } from '../utils';
import { createProxy } from './proxy';

export function createDevServer(env: Env): Promise<Configuration> {
  const conf: Configuration = {
    port: env.WEBPACK_SERVER_PORT,
    open: env.WEBPACK_SERVER_OPEN,
    hot: true,
    historyApiFallback: true,
    client: {
      overlay: true
    },

    static: {
      serveIndex: true
    },

    devMiddleware: {
      stats: env.WEBPACK_SERVER_STATS
    },

    watchFiles: {
      options: {
        usePolling: false,
        ignored: /node_modules/
      }
    },
    proxy: createProxy(env.WEBPACK_SERVER_PROXY)
  };

  return new Promise((resolve) => {
    findPort(env.WEBPACK_SERVER_PORT)
      .then((port) => {
        conf.port = port;
        resolve(conf);
      })
      .catch(() => resolve(conf));
  });
}
