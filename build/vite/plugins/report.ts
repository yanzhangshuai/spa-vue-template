import visualizer from 'rollup-plugin-visualizer';
import { PluginFn } from '../type';

export const reportPlugin: PluginFn = (isBuild, env) => {
  return {
    ...visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap' // "sunburst" | "treemap" | "network"
    }),
    apply: () => env.VITE_REPORT
  };
};
