import { Http } from './http/index';
import { setupInterceptor } from './interceptor/index';
let http: Http;
export function setupService(): void {
  http = new Http({ request: { ignoreCancelToken: false } });

  setupInterceptor(http.interceptor);
}

export function useHttp(): Http {
  return http;
}
