import type { Plugin } from 'vite';

import compress from 'vite-plugin-compression';

export function compressPlugin(
  type: 'gzip' | 'brotli' | 'none',
  deleteOriginFile = false
): Plugin[] {
  const compressList = type.split(',');

  const plugins: Plugin[] = [];

  if (compressList.includes('gzip')) {
    plugins.push(
      compress({
        ext: '.gz',
        deleteOriginFile
      })
    );
  }
  if (compressList.includes('brotli')) {
    plugins.push(
      compress({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile
      })
    );
  }
  return plugins;
}
