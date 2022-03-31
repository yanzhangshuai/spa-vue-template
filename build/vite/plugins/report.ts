import visualizer from 'rollup-plugin-visualizer';
import { PluginFn } from '../../type/vite';

export const reportPlugin: PluginFn = (mode, env) => {
  return {
    ...visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap', // "sunburst" | "treemap" | "network"
      filename: './report/libs/index.html'
    }),
    apply: () => env.VITE_REPORT
  };
};
