import { App } from 'vue';
import { dateFormat } from '@/util/date';
import { GlobalProps } from './type';

let globalProps: GlobalProps;

export function setupGlobalProperty(app: App<Element>): App<Element> {
  globalProps = {
    APP_NAME: GLOBAL_APP_NAME,
    APP_LOGO: GLOBAL_APP_LOGO,
    APP_VERSION: GLOBAL_APP_VERSION,
    APP_TITLE: GLOBAL_APP_TITLE,
    FILE_PATH_PREFIX: GLOBAL_FILE_PATH,
    DEV: GLOBAL_DEV,
    dateFormat: dateFormat
  };

  Object.defineProperty(app.config.globalProperties, '$window', {
    enumerable: false,
    get() {
      return window;
    }
  });

  Object.defineProperty(app.config.globalProperties, '$globalProps', {
    enumerable: false,
    get() {
      return globalProps;
    }
  });
  return app;
}

export function useGlobalProps(): DeepReadonly<GlobalProps> {
  return globalProps;
}
