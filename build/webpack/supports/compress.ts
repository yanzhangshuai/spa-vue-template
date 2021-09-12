import { Configuration, WebpackPluginInstance } from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';

export function compressSupport(
  type: 'gzip' | 'brotli' | 'none',
  deleteOriginFile = false
): Configuration {
  const conf: Configuration = {
    plugins: []
  };

  //TODO: compression-webpack-plugin ts有问题
  if (type === 'gzip') {
    conf.plugins.push(
      new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 8192,
        minRatio: 0.8,
        deleteOriginalAssets: deleteOriginFile
      }) as unknown as WebpackPluginInstance
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
      }) as unknown as WebpackPluginInstance
    );
  }
  return conf;
}
