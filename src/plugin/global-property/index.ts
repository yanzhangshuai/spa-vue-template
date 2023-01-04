import type { App, DeepReadonly } from 'vue';

import { Win } from '@/win';
import { dateFormat } from '@/util/date';
import { assetResolve, imageResolve } from '@/util/file';

import type { AppProps } from './type';

let appProps: AppProps;

export function setupGlobalProperties(app: App<Element>): App<Element> {
  const appConfig = Win.appConfig;

  appProps = {
    name: appConfig.name,
    logo: appConfig.logo,
    version: appConfig.version,
    dev: import.meta.env.DEV,
    assetResolve,
    imageResolve,
    dateFormat
  };

  Object.defineProperty(app.config.globalProperties, '$window', { enumerable: false, get: () => window });

  Object.defineProperty(app.config.globalProperties, '$app', { enumerable: false, get: () => appProps });

  return app;
}

export function useApp(): DeepReadonly<AppProps> {
  return appProps;
}
