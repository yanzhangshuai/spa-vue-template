import { GlobalProps } from './type';
declare module 'vue/types/vue' {
  interface Vue {
    $window: Window & typeof globalThis;

    $globalProps: GlobalProps;
  }
}
