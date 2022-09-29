import WindiCSS from 'vite-plugin-windicss';

import type { PluginFn } from '../../type/vite';

export const cssPlugin: PluginFn = () => {
  return WindiCSS();
};
