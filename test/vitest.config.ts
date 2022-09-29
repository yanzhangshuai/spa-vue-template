import { defineConfig } from 'vite';

import { root } from '../build/util/path';
import viteConfig from '../build/vite.config';

import type { UserConfig } from 'vitest/config';

export default defineConfig(async (env) => {
  // function
  let config = typeof viteConfig === 'function' ? viteConfig(env) : viteConfig;

  if (typeof config === 'object' && typeof (config as Promise<UserConfig>).then === 'function') {
    // Promise
    config = await config;
  }

  const userConfig: UserConfig = {
    ...config,
    test: {
      root,
      globals: true,
      environment: 'jsdom',
      transformMode: {
        web: [/\.([jt]sx?|json|vue)$/]
      },
      dir: 'test/modules',
      include: ['**/*.{test,spec}.ts'],
      coverage: {
        reporter: ['html'],
        all: true,
        reportsDirectory: 'report/test'
      }
    }
  };

  return userConfig;
});
