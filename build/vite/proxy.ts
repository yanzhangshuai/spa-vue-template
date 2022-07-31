import type { ProxyTarget } from '../type/vite';

export function createProxy(proxy: Record<string, string>): ProxyTarget {
  return Object.keys(proxy)
    .map((prefix: string) => {
      const isHttps = /^https:\/\//.test(proxy[prefix]);

      const option = {
        target: proxy[prefix],
        changeOrigin: true,
        ws: true,
        rewrite: (path: string) => path.replace(new RegExp(`^${prefix}`), ''),
        // https is require secure=false
        ...(isHttps ? { secure: false } : {})
      };

      return { prefix, option };
    })
    .reduce((acc, curr) => {
      acc[curr.prefix] = curr.option;
      return acc;
    }, {} as ProxyTarget);
}
