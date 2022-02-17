import compress from 'vite-plugin-compression';
import { PluginFn } from '../type';

export const compressPlugin: PluginFn = (isBuild: boolean, env) => {
  if (!env?.VITE_BUILD_COMPRESS || env.VITE_BUILD_COMPRESS === 'none') return [];

  if (env.VITE_BUILD_COMPRESS === 'gzip') {
    return {
      apply: 'build',
      ...compress({ ext: '.gz', deleteOriginFile: env.VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE })
    };
  }

  if (env.VITE_BUILD_COMPRESS === 'brotli') {
    return {
      apply: 'build',
      ...compress({ ext: '.br', algorithm: 'brotliCompress', deleteOriginFile: env.VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE })
    };
  }
  return [];
};
