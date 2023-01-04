import type { Plugin } from 'vue';

import { createAsker } from '@mwjz/asker';

import { Win } from '@/win';

import { setupInterceptor } from './interceptor/index';

const HttpPlugin: Plugin = {
  install() {
    create();
  }
};

export default HttpPlugin;

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
