import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import { createProxy } from './build/vite/proxy';
import { createVitePlugins } from './build/vite/plugin';
import { configPath, resolve, root, wrapperEnv } from './build/utils';

export default ({ mode }: ConfigEnv): UserConfig => {
  const isBuild = mode === 'production';

  // 根据VITE命令设置NODE环境变量
  process.env.NODE_ENV = mode;

  const env = loadEnv(mode, configPath);

  const viteEnv = wrapperEnv(env);

  return {
    base: viteEnv.VITE_PUBLIC_PATH,
    root: root,

    define: {
      __DEV__: !isBuild,
      IMAGE_URL: JSON.stringify(viteEnv.VITE_IMAGE_URL)
    },

    css: {
      modules: {
        scopeBehaviour: 'local',
        localsConvention: 'camelCaseOnly'
      },
      preprocessorOptions: {
        less: {
          // modifyVars: {
          // 	hack: `true; @import (reference) "@/styles/global/index.less";`,
          // },import { supportBuild } from './parts';

          javascriptEnabled: true
        }
      }
    },

    build: {
      target: 'es2015',
      outDir: viteEnv.VITE_OUTPUT_DIR,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: viteEnv.VITE_DROP_CONSOLE
        }
      },
      brotliSize: false,
      chunkSizeWarningLimit: 2000
    },

    server: !isBuild && {
      open: viteEnv.VITE_SERVER_OPEN || true,
      host: true,
      hmr: true,
      port: viteEnv.VITE_SERVER_PORT,
      https: viteEnv.VITE_SERVER_HTTPS || false,
      proxy: createProxy(viteEnv.VITE_SERVER_PROXY)
    },

    resolve: {
      alias: {
        '@': resolve('src'),
        '@assets': resolve('src/assets'),
        '#': resolve('types'),
        vue: '@vue/runtime-dom'
      },
      mainFields: ['index', 'module', 'jsnext:main', 'jsnext'],
      extensions: ['.vue', '.ts', '.tsx', '.json', '.jsx', '.mjs', '.js']
    },
    plugins: createVitePlugins(viteEnv, isBuild)
  };
};
