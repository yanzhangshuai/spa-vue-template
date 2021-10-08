import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import { createProxy } from './build/vite/proxy';
import { createVitePlugins } from './build/vite/plugin';
import { configPath, moduleAlias, resolve, root, wrapperEnv } from './build/utils';

export default ({ mode }: ConfigEnv): UserConfig => {
  const isBuild = mode === 'production';

  // 根据VITE命令设置NODE环境变量
  process.env.NODE_ENV = mode;

  const env = loadEnv(mode, configPath);

  const viteEnv = wrapperEnv(env);

  return {
    base: viteEnv.VITE_PUBLIC_PATH,
    root: root,
    envDir: configPath,
    envPrefix: 'GLOBAL',
    // define: {
    //   // DEV: !isBuild,
    //   // FILE_PATH_PREFIX: JSON.stringify(viteEnv.VITE_FILE_SERVER)
    // },

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
    plugins: createVitePlugins(viteEnv, isBuild),

    build: {
      target: 'es2015',
      outDir: viteEnv.VITE_OUTPUT_DIR,
      assetsDir: 'assets',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: viteEnv.VITE_DROP_CONSOLE
        }
      },
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        plugins: [dynamicImportVars()],
        output: {
          assetFileNames: '[ext]/[name].[hash].[ext]',
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js'
        }
      }
    },

    server: !isBuild && {
      open: viteEnv.VITE_SERVER_OPEN !== false,
      host: true,
      hmr: true,
      port: viteEnv.VITE_SERVER_PORT,
      https: viteEnv.VITE_SERVER_HTTPS || false,
      proxy: createProxy(viteEnv.VITE_SERVER_PROXY)
    },

    resolve: {
      alias: {
        '@': resolve('src'),
        ...moduleAlias([
          'asset',
          'component',
          'directive',
          'hook',
          'plugin',
          'page',
          'type',
          'router',
          'service',
          'store',
          'util'
        ]),
        vue: '@vue/runtime-dom'
      },
      mainFields: ['index', 'module', 'jsnext:main', 'jsnext'],
      extensions: ['.vue', '.ts', '.tsx', '.json', '.jsx', '.mjs', '.js']
    }
  };
};
