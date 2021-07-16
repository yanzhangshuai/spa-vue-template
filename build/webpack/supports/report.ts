import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function reportSupport(port = 7777): Configuration {
  return {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerPort: port
      })
    ]
  };
}
