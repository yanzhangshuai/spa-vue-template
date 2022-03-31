import { loadEnv, preview } from 'vite';
import { wrapperEnv } from './util/env';
import { configPath } from './util/path';
import { createProxy } from './vite/proxy';

const viteEnv = wrapperEnv(loadEnv('development', configPath));

preview({
  server: {
    //TODO: vite2.9.1有bug,判断了server.proxy
    proxy: createProxy(viteEnv.VITE_SERVER_PROXY)
  },
  preview: {
    host: true,
    cors: true,
    open: viteEnv.VITE_SERVER_OPEN !== false,
    port: viteEnv.VITE_SERVER_PORT,
    https: viteEnv.VITE_SERVER_HTTPS || false,
    proxy: createProxy(viteEnv.VITE_SERVER_PROXY)
  }
}).then((server) => {
  server.printUrls();
});
