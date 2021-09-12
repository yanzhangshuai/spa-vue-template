import { Configuration, DefinePlugin } from 'webpack';
export function variableSupport(isBuild = false, imageUrl = ''): Configuration {
  const conf: Configuration = { plugins: [] };

  conf.plugins.push(
    new DefinePlugin({
      IMAGE_URL: JSON.stringify(imageUrl),
      DEV: !isBuild
    })
  );
  return conf;
}
