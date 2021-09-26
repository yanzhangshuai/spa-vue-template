import { App } from 'vue';
import { GlobalProps } from './type';
import { DeepReadonly } from '@/@types/global';

let globalProps: GlobalProps;

export function setupGlobalProperty(app: App<Element>): App<Element> {
  globalProps = {
    FILE_PATH_PREFIX: FILE_PATH_PREFIX
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

export function useStorage(): DeepReadonly<GlobalProps> {
  return globalProps;
}
