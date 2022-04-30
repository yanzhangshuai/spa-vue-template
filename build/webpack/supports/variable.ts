import type { Configuration } from 'webpack';
import { DefinePlugin } from 'webpack';
import type { SupportFn } from '../../type/webpack';
import { configPath } from '../../util/path';
import { loadEnv, wrapperEnv } from '../../util/env';

export const variableSupport: SupportFn = (mode) => {
  const config: Configuration = { plugins: [] };

  const env = loadEnv(mode, configPath, 'GLOBAL_');

  const globalEnv = wrapperEnv<Record<string, string | boolean | number>>(env);

  globalEnv.GLOBAL_DEV = mode === 'development';

  Object.keys(globalEnv).forEach((key) => {
    globalEnv[key] = JSON.stringify(globalEnv[key]);
  });

  config.plugins.push(new DefinePlugin(globalEnv));

  return config;
};
