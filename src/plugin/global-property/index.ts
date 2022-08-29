import type { App, DeepReadonly } from 'vue';
import type { GlobalProps } from './type';
import { dateFormat } from '@/util/date';

let globalProps: GlobalProps;

export function setupGlobalProperty(app: App<Element>): App<Element> {
  globalProps = {
    APP_NAME: import.meta.env.GLOBAL_APP_NAME,
    APP_LOGO: import.meta.env.GLOBAL_APP_LOGO,
    APP_VERSION: import.meta.env.GLOBAL_APP_VERSION,
    APP_TITLE: import.meta.env.GLOBAL_APP_TITLE,
    FILE_PATH_PREFIX: import.meta.env.GLOBAL_FILE_PATH,
    DEV: import.meta.env.DEV,
    dateFormat
  };

  Object.defineProperty(app.config.globalProperties, '$window', { enumerable: false, get: () => window });

  Object.defineProperty(app.config.globalProperties, '$globalProps', { enumerable: false, get: () => globalProps });

  return app;
}

export function useGlobalProps(): DeepReadonly<GlobalProps> {
  return globalProps;
}
