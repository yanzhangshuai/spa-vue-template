import Vue from 'vue';
import { dateFormat } from '@/util/date';
import { GlobalProps } from './type';

let globalProps: GlobalProps;

export function setupGlobalProperty(): void {
  globalProps = {
    APP_NAME: GLOBAL_APP_NAME,
    APP_LOGO: GLOBAL_APP_LOGO,
    APP_VERSION: GLOBAL_APP_VERSION,
    APP_TITLE: GLOBAL_APP_TITLE,
    FILE_PATH_PREFIX: GLOBAL_FILE_PATH,
    DEV: GLOBAL_DEV,
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
