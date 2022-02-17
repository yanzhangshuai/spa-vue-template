import WindiCSS from 'vite-plugin-windicss';
import { PluginFn } from '../type';

export const cssPlugin: PluginFn = () => {
  return WindiCSS();
};
