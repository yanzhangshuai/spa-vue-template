import { Configuration } from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import { SupportFn } from '../../type/webpack';

export const compressionSupport: SupportFn = (mode, env) => {
  const config: Configuration = { plugins: [] };

  if (mode !== 'production' || !env?.WEBPACK_BUILD_COMPRESS || env.WEBPACK_BUILD_COMPRESS === 'none') return config;

  const obj: Record<string, string> = {};

  if (env.WEBPACK_BUILD_COMPRESS === 'gzip') {
    obj.filename = '[path][base].gz';
    obj.algorithm = 'gzip';
  } else if (env.WEBPACK_BUILD_COMPRESS === 'brotli') {
    obj.filename = '[path][base].br';
    obj.algorithm = 'brotliCompress';
  } else {
    return config;
  }

  config.plugins.push(
    new CompressionPlugin({
      ...obj,
      threshold: 0,
      minRatio: 0.8,
      compressionOptions: { level: 9 },
      deleteOriginalAssets: env.WEBPACK_BUILD_COMPRESS_DELETE_ORIGIN_FILE
    })
  );
  return config;
};
