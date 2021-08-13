import { ProxyConfigMap } from 'webpack-dev-server';

export function createProxy(proxy: Record<string, string>): ProxyConfigMap {
  return Object.keys(proxy)
    .map((prefix: string) => {
      const isHttps = /^https:\/\//.test(proxy[prefix]);
      const option = {
        target: proxy[prefix],
        changeOrigin: true,
        ws: true,
        pathRewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
        // https is require secure=false
        ...(isHttps ? { secure: false } : {})
      };
      return { prefix, option };
    })
    .reduce((prev, current) => {
      prev[current.prefix] = current.option;
      return prev;
    }, {} as ProxyConfigMap);
}
