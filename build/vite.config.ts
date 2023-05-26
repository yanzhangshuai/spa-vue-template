import { defineConfig, loadEnv } from 'vite'

// import { version } from '../package.json';

import { wrapperEnv } from './util/env'
import { createProxy } from './vite/proxy'
import { createVitePlugins } from './vite/plugin'
import { tsconfigAlias } from './vite/tsconfig.alias'
import { configPath, resolve, root } from './util/path'
import { assetFileNames, chunkFileNames, entryFileNames, manualChunks } from './vite/output'

import type { Mode } from './type/vite'
import type { ConfigEnv } from 'vite'

export default defineConfig((conf: ConfigEnv) => {
  const mode = conf.mode as Mode

  // 设置版本号
  // process.env.GLOBAL_APP_VERSION = version;

  // 根据VITE命令设置NODE环境变量
  process.env.NODE_ENV = mode

  const env = loadEnv(mode, configPath)

  const viteEnv = wrapperEnv(env)

  return {
    base: viteEnv.VITE_PUBLIC_PATH || '/',

    root,

    envDir: configPath,

    envPrefix: 'GLOBAL',

    define: {
      __VUE_OPTIONS_API__: viteEnv.VITE_SUPPORT_VUE_OPTIONS_API
    },

    css: {
      postcss: resolve('/build/postcss.config.js'),
      modules: {
        scopeBehaviour: 'local',
        localsConvention: 'camelCaseOnly'
      },
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: [`true; @import (reference) "${resolve('src/style/theme/default.less')}";`]
          },
          javascriptEnabled: true
        }
      }
    },

    plugins: createVitePlugins(mode, viteEnv),

    build: mode === 'production' && {
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
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {

        output: {
          entryFileNames,
          chunkFileNames,
          manualChunks,
          assetFileNames
        }
      }
    },

    server: mode === 'development' && {
      open: viteEnv.VITE_SERVER_OPEN !== false,
      host: true,
      hmr: true,
      port: viteEnv.VITE_SERVER_PORT,
      https: viteEnv.VITE_SERVER_HTTPS || false,
      proxy: createProxy(viteEnv.VITE_SERVER_PROXY)
    },

    resolve: {
      alias: tsconfigAlias(),
      extensions: ['.ts', '.tsx', '.json', '.jsx', '.mjs', '.js']
    }
  }
})
