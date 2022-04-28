import compress from 'vite-plugin-compression';
import type { PluginFn } from '../../type/vite';

export const compressionPlugin: PluginFn = (mode, env) => {
  if (mode !== 'production' || !env?.VITE_BUILD_COMPRESS || env.VITE_BUILD_COMPRESS === 'none')
    return [];

  const obj: Record<string, string> = {};

  if (env.VITE_BUILD_COMPRESS === 'gzip') {
    obj.ext = '.gz';
    obj.algorithm = 'gzip';
  }
  else if (env.VITE_BUILD_COMPRESS === 'brotli') {
    obj.ext = '.br';
    obj.algorithm = 'brotliCompress';
  }
  else {
    return [];
  }
  return compress({ ...obj, deleteOriginFile: env.VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE });
};
