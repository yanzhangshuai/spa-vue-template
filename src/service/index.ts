import type { Plugin } from 'vue';

import { createAsker } from '@mwjz/asker';

import { Win } from '@/win';

import { setupInterceptor } from './interceptor';

const SPlugin: Plugin = {
  install() {
    create();
  }
};

export default SPlugin;

function create() {
  const baseURL = Win.appConfig.baseURL;

  const asker = createAsker({
    request: {
      ignoreCancelToken: false,
      baseURL: baseURL.api,
      uploadBaseUrl: baseURL.upload
    }
  });

  setupInterceptor(asker.interceptor);
}
