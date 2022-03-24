import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import packageJson from './package.json';
import { createProxy } from './build/vite/proxy';
import { createVitePlugins } from './build/vite/plugin';
import { configPath, resolve, root, wrapperEnv } from './build/utils';
import { assetFileNames, chunkFileNames, entryFileNames, manualChunks } from './build/vite/output';

export default ({ mode }: ConfigEnv): UserConfig => {
  const isBuild = mode === 'production';

  // 设置版本号
  process.env.GLOBAL_VERSION = packageJson.version;

  // 根据VITE命令设置NODE环境变量
  process.env.NODE_ENV = mode;

  const env = loadEnv(mode, configPath);

  const viteEnv = wrapperEnv(env);

  return {
    base: viteEnv.VITE_PUBLIC_PATH || '/',

    root: root,

    envDir: configPath,

    envPrefix: 'GLOBAL',

    define: {
      __VUE_OPTIONS_API__: viteEnv.VITE_SUPPORT_VUE_OPTIONS_API
    },

    css: {
      modules: {
        scopeBehaviour: 'local',
        localsConvention: 'camelCaseOnly'
      },
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: [`true; @import (reference) "${resolve('src/asset/theme/default.less')}";`]
          },
          javascriptEnabled: true
        }
      }
    },
    plugins: createVitePlugins(isBuild, viteEnv),

    build: {
      target: viteEnv.VITE_BUILD_TARGET || 'es2015',
      sourcemap: viteEnv.VITE_BUILD_SOURCE_MAP || false,
      minify: viteEnv.VITE_BUILD_MINIFY || true,
      outDir: viteEnv.VITE_BUILD_OUTPUT_DIR,
      assetsDir: viteEnv.VITE_BUILD_ASSETS_DIR || 'assets',
      terserOptions: viteEnv.VITE_BUILD_MINIFY === 'terser' && {
        compress: {
          keep_infinity: true,
          drop_console: viteEnv.VITE_BUILD_DROP_CONSOLE
        }
      },
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        plugins: [dynamicImportVars()],

        output: { entryFileNames: entryFileNames, chunkFileNames: chunkFileNames, manualChunks: manualChunks, assetFileNames: assetFileNames }
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
        '@': resolve('src')
      },
      mainFields: ['index', 'module', 'jsnext:main', 'jsnext'],
      extensions: ['.vue', '.ts', '.tsx', '.json', '.jsx', '.mjs', '.js']
    }
  };
};
