import { defineConfig } from 'vite';
import type { UserConfig } from 'vitest/config';
import { root } from '../build/util/path';
import viteConfig from '../build/vite.config';

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
        web: [/\.[jt]sx$/]
      },
      dir: 'test/modules',
      include: ['**/*.{test,spec}.ts'],
      coverage: {
        reporter: ['html'],
        reportsDirectory: 'report/test'
      }
    }
  };

  return userConfig;
});
