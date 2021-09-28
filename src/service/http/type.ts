import { XOR } from '@/type/global';
import { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export interface HttpOptions {
  authenticationScheme?: string;
  urlPrefix?: string;
  request?: HttpRequestConfig;
}

export type InterceptorManager = {
  request: AxiosInterceptorManager<HttpRequestConfig>;
  response: AxiosInterceptorManager<HttpResponse<unknown>>;
};

export interface HttpResponse<T> extends AxiosResponse<T> {
  config: HttpRequestConfig;
}

export interface HttpRequestConfig extends AxiosRequestConfig {
  // // Splicing request parameters to url
  // joinParamsToUrl?: boolean;
  // // Format request parameter time
  // formatDate?: boolean;
  // //  Whether to process the request result
  // isTransformResponse?: boolean;
  // // 是否返回原生响应头 比如：需要获取响应头时使用该属性
  // isReturnNativeResponse?: boolean;
  // // Whether to join url
  // joinPrefix?: boolean;
  // // Interface address, use the default apiUrl if you leave it blank
  // apiUrl?: string;

  // // Whether to add a timestamp
  // joinTime?: boolean;

  /**
   * 是否忽略取消
   */
  ignoreCancelToken?: boolean;
  /**
   * 是否返回全部Response信息
   */
  returnAllResponse?: boolean;
}

// multipart/form-data: upload file
export interface HttpUploadRequestConfig extends HttpRequestConfig {
  // Other parameters
  data?: Record<string, XOR<string, Array<string>>>;
  // File parameter interface field name
  name?: string;
  // file name
  file?: XOR<File, Blob>;
  // file name
  filename?: string;

  cancelToken?: CancelToken;
}

// export type HttpResponseType<T> = T extends HttpResponse<infer R> ? R : T;
