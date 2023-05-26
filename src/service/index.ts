import type { Plugin } from 'vue'

import { Win } from '@/win'
import { createHttp } from '@/service/http'

import { setupInterceptor } from './interceptor'

const SPlugin: Plugin = {
  install() {
    create()
  }
}

export default SPlugin

function create() {
  const baseURL = Win.appConfig.baseURL

  const http = createHttp({
    request: {
      ignoreCancelToken: false,
      baseURL: baseURL.api,
      uploadBaseUrl: baseURL.upload
    }
  })

  Win.http = http

  setupInterceptor(http.interceptor)
}
