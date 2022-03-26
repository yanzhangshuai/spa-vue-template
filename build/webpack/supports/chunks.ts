import { Configuration } from 'webpack';
import { SupportFn } from '../../type/webpack';

export const chunksSupport: SupportFn = () => {
  const conf: Configuration = {
    optimization: {
      runtimeChunk: { name: '__runtime' },
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        cacheGroups: {
          ui: { name: '__ui', test: /[\\/]node_modules[\\/](@)?ant-design/, priority: -5 },
          libs: { name: '__libs', test: /[\\/]node_modules[\\/](@)?vue/, priority: -5 },
          vendors: { name: '__vendors', test: /[\\/]node_modules[\\/]/, priority: -10 },
          // vendors: {
          //   name: (module) => {
          //     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
          //     return `__${packageName.replace('@', '')}`;
          //   },
          //   test: /[\\/]node_modules[\\/]/,
          //   priority: -10
          // },
          styles: { name: '__vendors', test: /\.css/, chunks: 'all', enforce: true, priority: -10 }
        }
      }
    }
  };
  return conf;
};
