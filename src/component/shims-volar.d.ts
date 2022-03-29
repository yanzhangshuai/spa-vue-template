declare module 'vue' {
  export interface GlobalComponents {
    'global-props-demo': typeof import('./modules/base/global-props-demo/global-props-demo/index.vue')['default'];
    'config-provider': typeof import('./modules/config-provider/index.vue')['default'];
    'ref-demo': typeof import('./modules/base/ref-demo/index.vue')['default'];
    'ref-setup-demo': typeof import('./modules/base/ref-setup-demo/index.vue')['default'];
  }
}
export {};
