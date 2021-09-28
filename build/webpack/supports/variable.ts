import { Configuration, DefinePlugin } from 'webpack';

export function variableSupport(isBuild = false, imageUrl = ''): Configuration {
  const conf: Configuration = { plugins: [] };

  conf.plugins.push(
    new DefinePlugin({
      FILE_PATH_PREFIX: JSON.stringify(imageUrl),
      DEV: !isBuild
    })
  );
  return conf;
}
