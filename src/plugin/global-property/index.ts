import { App } from 'vue';
import { DeepReadonly } from '@/type/global';
import { GlobalProps } from './type';

let globalProps: GlobalProps;

export function setupGlobalProperty(app: App<Element>): App<Element> {
  globalProps = {
    FILE_PATH_PREFIX: import.meta.env.GLOBAL_FILE_PATH,
    DEV: import.meta.env.DEV
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
