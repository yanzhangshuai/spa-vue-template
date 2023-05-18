import axios from 'axios';
import qs from 'query-string';

import { HttpCanceler } from './canceler';

import type { AxiosInstance, RawAxiosRequestHeaders } from 'axios';
import type { HttpOptions, HttpRequestConfig, HttpResponse, HttpUploadRequestConfig, InterceptorManager } from './type';

export class Http {
  private _axios: AxiosInstance;
  private _options: HttpOptions;
  private readonly _canceler: HttpCanceler;

  constructor(options?: HttpOptions) {
    this._canceler = new HttpCanceler();
    this._options = options || {};
    this._axios = axios.create(options?.request || {});

    this.setupCancelInterceptor();
  }

  get options(): HttpOptions {
    return this._options;
  }

  get axios(): AxiosInstance {
    return this._axios;
  }

  get interceptor(): InterceptorManager {
    return this.axios.interceptors;
  }

  get canceler(): HttpCanceler {
    return this._canceler;
  }

  /**
   * @description: 重新配置Option
   */
  reset(options: HttpOptions) {
    if (!this.axios)
      return;

    this._options = options || {};
    this._axios = axios.create(options?.request || {});
  }

  /**
   * @description: 设置header
   */
  setHeader(headers: Record<string, unknown>): void {
    if (!this.axios)
      return;

    Object.assign(this.axios.defaults.headers, headers);
  }

  get<T = unknown, R = T>(url: string, query?: Record<string, unknown>, config?: HttpRequestConfig): Promise<R> {
    config = config || {};
    config.params = { ...(config.params || {}), ...(query || {}) };

    return this.request<T, R>(url, { ...config, method: 'GET' });
  }

  post<T = unknown, R = T>(url: string, data?: Record<string, unknown>, query?: Record<string, unknown>, config?: HttpRequestConfig): Promise<R> {
    config = config || {};
    config.data = { ...(config.data || {}), ...(data || {}) };
    config.params = { ...(config.params || {}), ...(query || {}) };

    return this.request(url, { ...config, method: 'POST' });
  }

  put<T = unknown, R = T>(url: string, query?: Record<string, unknown>, config?: HttpRequestConfig): Promise<R> {
    config = config || {};
    config.params = { ...(config.params || {}), ...(query || {}) };

    return this.request(url, { ...config, method: 'PUT' });
  }

  delete<T = unknown, R = T>(url: string, query?: Record<string, unknown>, config?: HttpRequestConfig): Promise<R> {
    config = config || {};
    config.params = { ...(config.params || {}), ...(query || {}) };

    return this.request<T, R>(url, { ...config, method: 'DELETE' });
  }

  request<T = unknown, R = T>(url: string, config: HttpRequestConfig): Promise<R> {
    let conf = {
      ...(this.options.request || {}),
      ...(config || {})
    };

    conf = this.supportFormData(conf);

    conf.url = url;

    return new Promise<R>((resolve, reject) => {
      this.axios
        .request<T, HttpResponse<T>>(conf)
        .then((res: HttpResponse<T>) => {
          const data: R = (config.returnAllResponse ? res : res.data) as unknown as R;

          resolve(data);
        })
        .catch((e: Error) => {
          reject(e);
        });
    });
  }

  /**
   * 上传文件
   * @param url
   * @param config
   * @returns
   */
  uploadFile<T = unknown, R = T>(url: string, config: HttpUploadRequestConfig): Promise<R> {
    const formData = new window.FormData();

    Object.keys(config?.data || {}).forEach((key) => {
      if (!config.data)
        return;
      const value = config.data[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(`${key}[]`, item);
        });
        return;
      }

      formData.append(key, value);
    });

    formData.append(config.name || 'file', config.file, config.filename || config.file?.name || '');

    return new Promise<R>((resolve, reject) => {
      this.axios
        .request<T, HttpResponse<T>>({
          baseURL: this.options.request?.uploadBaseUrl,
          url,
          ...config,
          method: config.method || 'POST',
          data: formData,
          // TODO:1.2.2 header类型
          headers: {
            'content-type': 'multipart/form-data;charset=UTF-8',
            ...(config.headers || {})
          } as RawAxiosRequestHeaders,
          cancelToken: config.cancelToken
        })
        .then((res) => {
          const data: R = (config.returnAllResponse ? res : res.data) as unknown as R;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /**
   * @description: 拦截器设置
   */
  private setupCancelInterceptor() {
    this.axios.interceptors.request.use((conf) => {
      this.canceler.addPending(conf);

      return conf;
    }, undefined);

    this.axios.interceptors.response.use((res: HttpResponse<unknown>) => {
      this.canceler.removePending(res.config);
      return res;
    }, undefined);
  }

  // support form-data
  private supportFormData(config: HttpRequestConfig): HttpRequestConfig {
    // TODO:1.2.2 header类型
    const headers = (config.headers || this.options?.request?.headers || {}) as RawAxiosRequestHeaders;
    const contentType = headers?.ContentType || headers?.['content-type'];

    if (contentType !== 'application/x-www-form-urlencoded;charset=UTF-8' || !Reflect.has(config, 'data') || config.method?.toUpperCase() === 'GET')
      return config;

    return {
      ...config,
      data: qs.stringify(config.data, { arrayFormat: 'bracket' })
    };
  }
}

export function createHttp(options?: HttpOptions): Http {
  return new Http(options);
}
