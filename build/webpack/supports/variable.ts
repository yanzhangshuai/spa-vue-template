import { Configuration, DefinePlugin } from 'webpack';
export function variableSupport(isBuild = false, filePath = ''): Configuration {
  const conf: Configuration = { plugins: [] };

  conf.plugins.push(
    new DefinePlugin({
      FILE_PATH_PREFIX: JSON.stringify(filePath),
      DEV: !isBuild
    })
  );
  return conf;
}
