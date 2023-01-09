import type { InterceptorManager } from '@mwjz/asker';

export function setupInterceptor(manager: InterceptorManager): void {
  manager.request.use((conf) => {
    return conf;
  });
  manager.request.use((conf) => {
    return conf;
  });

  manager.response.use((res) => {
    return res;
  });
  manager.response.use((res) => {
    return res;
  });
}
