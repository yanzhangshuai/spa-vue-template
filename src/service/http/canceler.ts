import axios, { Canceler } from 'axios';
import { isFunction } from 'lodash-es';
import { RequestConfig } from '@/@types/http';

let pendingMap = new Map<string, Canceler>();

export const getPendingUrl = (config: RequestConfig): string =>
  [config.method, config.url].join('&');

export class HttpClientCanceler {
  /**
   * 添加一个可取消的HTTP
   * @param {Object} config
   */
  addPending(config: RequestConfig): void {
    this.removePending(config);
    const url = getPendingUrl(config);
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel);
        }
      });
  }

  /**
   * @description: Clear all pending
   */
  removeAllPending(): void {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel();
    });
    pendingMap.clear();
  }

  /**
   * Removal request
   * @param {Object} config
   */
  removePending(config: RequestConfig): void {
    const url = getPendingUrl(config);

    if (pendingMap.has(url)) {
      // If there is a current request identifier in pending,
      // the current request needs to be cancelled and removed
      const cancel = pendingMap.get(url);
      cancel && cancel(url);
      pendingMap.delete(url);
    }
  }

  /**
   * @description: reset
   */
  reset(): void {
    pendingMap = new Map<string, Canceler>();
  }
}
