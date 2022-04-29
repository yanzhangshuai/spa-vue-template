import type { GlobalProps } from './type';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $window: Window & typeof globalThis

    $globalProps: GlobalProps
  }
}

export {};
