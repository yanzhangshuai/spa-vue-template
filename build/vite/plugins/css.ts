import WindiCSS from 'vite-plugin-windicss';
import { PluginFn } from '../../type/vite';

export const cssPlugin: PluginFn = () => {
  return WindiCSS();
};
