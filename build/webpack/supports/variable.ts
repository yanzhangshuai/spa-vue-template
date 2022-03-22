import { Configuration, DefinePlugin } from 'webpack';
import { SupportFn } from '../type';
import { loadEnv } from '../../config';
import { configPath, wrapperEnv } from '../../utils';
export const variableSupport: SupportFn = (isBuild) => {
  const conf: Configuration = { plugins: [] };

  const mode = process.env.NODE_ENV as 'development' | 'production';

  const env = loadEnv(mode, configPath, 'GLOBAL_');

  const globalEnv = wrapperEnv<Record<string, string | boolean | number>>(env);

  globalEnv['GLOBAL_DEV'] = !isBuild;

  for (const key in globalEnv) {
    if (Object.prototype.hasOwnProperty.call(globalEnv, key)) {
      globalEnv[key] = JSON.stringify(globalEnv[key]);
    }
  }

  conf.plugins.push(new DefinePlugin(globalEnv));

  return conf;
};
