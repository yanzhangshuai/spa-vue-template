import type { Plugin } from 'vite';
import compress from 'vite-plugin-compression';

export function compressPlugin(type?: 'gzip' | 'brotli' | 'none', deleteOriginFile = false): Array<Plugin> {
  const plugins: Array<Plugin> = [];
  if (type === 'gzip') {
    plugins.push(compress({ ext: '.gz', deleteOriginFile }));
  }
  if (type === 'brotli') {
    plugins.push(compress({ ext: '.br', algorithm: 'brotliCompress', deleteOriginFile }));
  }

  plugins.forEach((plugin) => (plugin.apply = 'build'));

  return plugins;
}
