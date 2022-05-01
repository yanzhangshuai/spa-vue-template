import { createAsker } from '@mwjz/asker';
import { setupInterceptor } from './interceptor/index';

export function setupService(): void {
  const asker = createAsker({ request: { ignoreCancelToken: false, baseURL: GLOBAL_API_BASE_URL, uploadBaseUrl: GLOBAL_UPLOAD_BASE_URL } });

  setupInterceptor(asker.interceptor);
}
