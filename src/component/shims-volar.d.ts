declare module 'vue' {
  export interface GlobalComponents {
    'config-provider': typeof import('./modules/config-provider/index.vue')['default']
    'app-props-demo': typeof import('./modules/app-props-demo/index.vue')['default']
    'http-demo': typeof import('./modules/http-demo/index.vue')['default']
    'ref-setup-demo': typeof import('./modules/ref-setup-demo/index.vue')['default']
    'theme': typeof import('./modules/theme/index.vue')['default']
    'tsx-demo': typeof import('./modules/tsx-demo/index')['default']
  }
}

export {}
