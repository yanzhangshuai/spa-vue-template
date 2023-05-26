import type { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios'

export interface HttpOptions {
  request?: HttpRequestConfig
}

export interface InterceptorManager {
  request: AxiosInterceptorManager<HttpRequestConfig>
  response: AxiosInterceptorManager<HttpResponse<unknown>>
}

export interface HttpResponse<T> extends AxiosResponse<T> {
}

export interface HttpRequestConfig extends AxiosRequestConfig {
  uploadBaseUrl?: string
  /**
   * 是否忽略取消
   */
  ignoreCancelToken?: boolean
  /**
   * 是否返回全部Response信息
   */
  returnAllResponse?: boolean
}

// multipart/form-data: upload file
export interface HttpUploadRequestConfig extends HttpRequestConfig {
  // Other parameters
  data?: Record<string, string | Array<string>>
  // File parameter interface field name
  name?: string
  // file name
  file: File
  // file name
  filename?: string

  cancelToken?: CancelToken
}
