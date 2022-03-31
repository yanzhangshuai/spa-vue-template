import { Configuration, DefinePlugin } from 'webpack';
import { loadEnv } from '../../util/config';
import { configPath } from '../../util/path';
import { wrapperEnv } from '../../util/helper';
import { SupportFn } from '../../type/webpack';

export const variableSupport: SupportFn = (mode) => {
  const conf: Configuration = { plugins: [] };

  const env = loadEnv(mode, configPath, 'GLOBAL_');

  const globalEnv = wrapperEnv<Record<string, string | boolean | number>>(env);

  globalEnv['GLOBAL_DEV'] = mode === 'development';

  for (const key in globalEnv) {
    if (Object.prototype.hasOwnProperty.call(globalEnv, key)) {
      globalEnv[key] = JSON.stringify(globalEnv[key]);
    }
  }

  conf.plugins.push(new DefinePlugin(globalEnv));

  return conf;
};
