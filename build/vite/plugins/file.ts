import { viteStaticCopy } from 'vite-plugin-static-copy';

import type { PluginFn } from '../../type/vite';

export const filePlugin: PluginFn = () => {
  return viteStaticCopy({
    targets: [
      {
        src: ['src/config/', 'src/asset'],
        dest: ''
      }
    ]
  });
};
