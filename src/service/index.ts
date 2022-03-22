import { Http } from './http/index';
import { setupInterceptor } from './interceptor/index';
let http: Http;
export function setupService(): void {
  http = new Http({ request: { ignoreCancelToken: false, baseURL: GLOBAL_API_BASE_URL, uploadBaseUrl: GLOBAL_UPLOAD_BASE_URL } });

  setupInterceptor(http.interceptor);
}

export function useHttp(): Http {
  return http;
}
