import Unocss from '@unocss/vite';

import type { PluginFn } from '../../type/vite';
export const cssPlugin: PluginFn = () => {
  return Unocss({ /* options */ });
};
