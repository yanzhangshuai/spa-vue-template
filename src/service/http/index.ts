import qs from 'qs';
import { cloneDeep, isFunction } from 'lodash-es';
import { RequestConfig, RequestOptions, Result, UploadFileParams } from '@/@types/http';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpClientCanceler } from './canceler';
import { CreateOptions } from './transform';

export class HttpClient {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateOptions;

  constructor(options: CreateOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  getAxios(): AxiosInstance {
    return this.axiosInstance;
  }

  /**
   * @description: 重新配置Option
   */
  resetConfig(config: CreateOptions): HttpClient {
    if (!this.axiosInstance) {
      return;
    }
    this.createAxios(config);
    return this;
  }

  // support form-data
  supportFormData(config: RequestConfig): RequestConfig {
    const headers = config.headers || this.options.headers;
    const contentType = headers?.['Content-Type'] || headers?.['content-type'];

    if (
      contentType !== 'application/x-www-form-urlencoded;charset=UTF-8' ||
      !Reflect.has(config, 'data') ||
      config.method?.toUpperCase() === 'GET'
    ) {
      return config;
    }

    return {
      ...config,
      data: qs.stringify(config.data, { arrayFormat: 'brackets' })
    };
  }

  /**
   * @description: 设置header
   */
  setHeader(headers: Record<string, unknown>): void {
    if (!this.axiosInstance) {
      return;
    }
    Object.assign(this.axiosInstance.defaults.headers, headers);
  }

  get<T = unknown>(url: string, config: RequestConfig, options?: RequestOptions): Promise<T> {
    return this.request(url, { ...config, method: 'GET' }, options);
  }

  post<T = unknown>(url: string, config: RequestConfig, options?: RequestOptions): Promise<T> {
    return this.request(url, { ...config, method: 'POST' }, options);
  }

  put<T = unknown>(url: string, config: RequestConfig, options?: RequestOptions): Promise<T> {
    return this.request(url, { ...config, method: 'PUT' }, options);
  }

  delete<T = unknown>(url: string, config: RequestConfig, options?: RequestOptions): Promise<T> {
    return this.request(url, { ...config, method: 'DELETE' }, options);
  }

  request<T = unknown>(
    url: string,
    config: AxiosRequestConfig,
    options?: RequestOptions
  ): Promise<T> {
    let conf: CreateOptions = cloneDeep(config);

    const transform = this.getTransform();

    const { requestOptions } = this.options;

    const opt: RequestOptions = Object.assign({}, requestOptions, options);

    const { beforeRequestHook, requestCatchHook, transformRequestHook } = transform || {};
    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt);
    }
    conf.requestOptions = opt;

    conf = this.supportFormData(conf);

    conf.url = url;

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<unknown, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          if (transformRequestHook && isFunction(transformRequestHook)) {
            try {
              const ret = transformRequestHook(res, opt);
              resolve(ret);
            } catch (err) {
              reject(err || new Error('request error!'));
            }
            return;
          }
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error) => {
          if (requestCatchHook && isFunction(requestCatchHook)) {
            reject(requestCatchHook(e, opt));
            return;
          }
          reject(e);
        });
    });
  }

  uploadFile<T = unknown>(config: RequestConfig, params: UploadFileParams): Promise<unknown> {
    const formData = new window.FormData();

    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        if (!params.data) return;
        const value = params.data[key];
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item);
          });
          return;
        }

        formData.append(key, params.data[key]);
      });
    }

    formData.append(params.name || 'file', params.file, params.filename);

    return this.axiosInstance.request<T>({
      ...config,
      method: 'POST',
      data: formData,
      headers: {
        'Content-type': 'multipart/form-data;charset=UTF-8',
        ignoreCancelToken: true
      }
    });
  }

  /**
   * @description:
   */
  private createAxios(config: CreateOptions): void {
    this.axiosInstance = axios.create(config);
  }

  private getTransform() {
    const { transform } = this.options;
    return transform;
  }

  /**
   * @description: 拦截器设置
   */
  private setupInterceptors() {
    const transform = this.getTransform();
    if (!transform) {
      return;
    }
    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch
    } = transform;

    const axiosCanceler = new HttpClientCanceler();

    //  Request成功结果 捕捉
    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      //  是否可取消
      const {
        headers: { ignoreCancelToken }
      } = config;

      const ignoreCancel =
        ignoreCancelToken !== undefined
          ? ignoreCancelToken
          : this.options.requestOptions?.ignoreCancelToken;

      !ignoreCancel && axiosCanceler.addPending(config);
      if (requestInterceptors && isFunction(requestInterceptors)) {
        config = requestInterceptors(config, this.options);
      }
      return config;
    }, undefined);

    // Request失败结果 捕捉
    requestInterceptorsCatch &&
      isFunction(requestInterceptorsCatch) &&
      this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch);

    // Response成功结果 捕捉
    this.axiosInstance.interceptors.response.use((res: AxiosResponse<unknown>) => {
      res && axiosCanceler.removePending(res.config);
      if (responseInterceptors && isFunction(responseInterceptors)) {
        res = responseInterceptors(res);
      }
      return res;
    }, undefined);

    // Response失败结果 捕捉
    responseInterceptorsCatch &&
      isFunction(responseInterceptorsCatch) &&
      this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsCatch);
  }
}
