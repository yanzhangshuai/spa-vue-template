declare module 'vue' {
  export interface GlobalComponents {
    'config-provider': typeof import('./modules/config-provider/index.vue')['default'];
    'global-props-demo': typeof import('./modules/global-props-demo/index.vue')['default'];
    'http-demo': typeof import('./modules/http-demo/index.vue')['default'];
    'vue-demo': typeof import('./modules/vue-demo/index.vue')['default'];
  }
}
export {};
