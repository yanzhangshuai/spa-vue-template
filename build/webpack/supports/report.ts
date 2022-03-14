import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const reportSupport = (isBuild, env) => {
  const conf: Configuration = { plugins: [] };
  if (!env.WEBPACK_REPORT) return conf;

  conf.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 3231 }));

  return conf;
};
