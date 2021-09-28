import Vue from 'vue';
import { GlobalProps } from './type';
import { DeepReadonly } from '@/type/global';

let globalProps: GlobalProps;

export function setupGlobalProperty(): void {
  globalProps = {
    FILE_PATH_PREFIX: FILE_PATH_PREFIX,
    DEV: DEV
  };

  Object.defineProperty(Vue.prototype, '$window', {
    enumerable: false,
    get() {
      return window;
    }
  });

  Object.defineProperty(Vue.prototype, '$globalProps', {
    enumerable: false,
    get() {
      return globalProps;
    }
  });
}

export function useGlobalProps(): DeepReadonly<GlobalProps> {
  return globalProps;
}
