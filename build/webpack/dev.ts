import { Configuration } from 'webpack-dev-server';
import { findPort } from '../utils';
import { Env } from './../types';
import { createProxy } from './proxy';
export function createDevServer(env: Env): Promise<Configuration> {
  const conf: Configuration = {
    port: env.WEBPACK_SERVER_PORT,
    open: env.WEBPACK_SERVER_OPEN,
    hot: true,
    historyApiFallback: true,
    serveIndex: true,
    overlay: true,
    stats: env.WEBPACK_SERVER_STATS,
    watchOptions: {
      poll: false,
      ignored: /node_modules/
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
