import { Configuration, DefinePlugin } from 'webpack';
import { Env } from '../../type';
export function variableSupport(isBuild = false, env: Env): Configuration {
  const conf: Configuration = { plugins: [] };

  conf.plugins.push(
    new DefinePlugin({
      GLOBAL_FILE_PATH: JSON.stringify(env.WEBPACK_FILE_SERVER),
      GLOBAL_VERSION: JSON.stringify(env.WEBPACK_VERSION),
      DEV: !isBuild
    })
  );
  return conf;
}
