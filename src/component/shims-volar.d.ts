declare module 'vue' {
  export interface GlobalComponents {
    'global-props-demo': typeof import('./modules/base/global-props-demo/global-props-demo/index.vue')['default'];
    'config-provider': typeof import('./modules/config-provider/index.vue')['default'];
    'vue-demo': typeof import('./modules/base/vue-demo/index.vue')['default'];
  }
}
export {};
