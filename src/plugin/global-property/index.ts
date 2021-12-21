import Vue from 'vue';
import { dateFormat } from '@/util/date';
import { GlobalProps } from './type';

let globalProps: GlobalProps;

export function setupGlobalProperty(): void {
  globalProps = {
    FILE_PATH_PREFIX: FILE_PATH_PREFIX,
    DEV: DEV,
    dateFormat: dateFormat
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
