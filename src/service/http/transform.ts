import { RequestConfig, RequestOptions, Result, HttpClientResponse } from '@/@types/http';

export interface CreateOptions extends RequestConfig {
  authenticationScheme?: string;
  urlPrefix?: string;
  transform?: HttpClientTransform;
  requestOptions?: RequestOptions;
}

export abstract class HttpClientTransform {
  /**
   * @description: Process configuration before request
   */
  beforeRequestHook?: (config: RequestConfig, options: RequestOptions) => RequestConfig;

  /**
   * @description: Request successfully processed
   */
  transformRequestHook?: (res: HttpClientResponse<Result>, options: RequestOptions) => unknown;

  /**
   * @description: 请求失败处理
   */
  requestCatchHook?: (e: Error, options: RequestOptions) => Promise<unknown>;

  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors?: (config: RequestConfig, options: CreateOptions) => RequestConfig;

  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptors?: (res: HttpClientResponse<unknown>) => HttpClientResponse<unknown>;

  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
}
