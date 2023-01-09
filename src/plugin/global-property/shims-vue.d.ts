import type { AppProps } from './type';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $window: Window & typeof globalThis
    $app: AppProps
  }
}

export { };
