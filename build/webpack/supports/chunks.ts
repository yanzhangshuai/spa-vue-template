import { Configuration } from 'webpack';
import { SupportFn } from '../type';

export const chunksSupport: SupportFn = () => {
  const conf: Configuration = {
    optimization: {
      runtimeChunk: { name: 'runtime' },
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '~',
        cacheGroups: {
          ui: { name: 'npm.ui', test: /[\\/]node_modules[\\/](@)?ant-design/, priority: -5 },
          libs: { name: 'npm.libs', test: /[\\/]node_modules[\\/](@)?vue/, priority: -5 },
          vendors: { name: 'npm.vendors', test: /[\\/]node_modules[\\/]/, priority: -10 },
          // vendors: {
          //   name: (module) => {
          //     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
          //     return `npm.${packageName.replace('@', '')}`;
          //   },
          //   test: /[\\/]node_modules[\\/]/,
          //   priority: -10
          // },
          styles: { name: 'styles', test: /\.css/, chunks: 'all', enforce: true, priority: -10 }
        }
      }
    }
  };
  return conf;
};
