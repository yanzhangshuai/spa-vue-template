import { Configuration } from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import { SupportFn } from '../../type/webpack';

export const compressSupport: SupportFn = (isBuild, env) => {
  const conf: Configuration = { plugins: [] };

  if (!isBuild || !env?.WEBPACK_BUILD_COMPRESS || env.WEBPACK_BUILD_COMPRESS === 'none') return conf;

  const compressionObj: Record<string, string> = {};
  if (env.WEBPACK_BUILD_COMPRESS === 'gzip') {
    compressionObj.filename = '[path][base].gz';
    compressionObj.algorithm = 'gzip';
  } else if (env.WEBPACK_BUILD_COMPRESS === 'brotli') {
    compressionObj.filename = '[path][base].br';
    compressionObj.algorithm = 'brotliCompress';
  }

  conf.plugins.push(
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 8192,
      minRatio: 0.8,
      deleteOriginalAssets: env.WEBPACK_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
      ...compressionObj
    })
  );
  return conf;
};
