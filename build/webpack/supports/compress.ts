import { Configuration } from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';

export function compressSupport(
  type: 'gzip' | 'brotli' | 'none',
  deleteOriginFile = false
): Configuration {
  const conf = {
    plugins: []
  };

  if (type === 'gzip') {
    conf.plugins.push(
      new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 8192,
        minRatio: 0.8,
        deleteOriginalAssets: deleteOriginFile
      })
    );
  }

  if (type === 'brotli') {
    conf.plugins.push(
      new CompressionPlugin({
        filename: '[path][base].br',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,

        threshold: 8192,
        minRatio: 0.8,
        deleteOriginalAssets: deleteOriginFile
      })
    );
  }
  return conf;
}
