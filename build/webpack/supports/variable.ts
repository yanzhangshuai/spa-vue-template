import { Configuration, DefinePlugin } from 'webpack';
export function variableSupport(isBuild = false): Configuration {
  const conf = { plugins: [] };

  conf.plugins.push(
    new DefinePlugin({
      IMAGE_URL: 'https://static.kelexuexi.com/image/330-mobile/'
    })
  );
  return conf;
}
