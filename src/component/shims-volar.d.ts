declare module 'vue' {
  export interface GlobalComponents {
    'ref-demo': typeof import('@/component/modules/base/ref-demo/index.vue')['default'];
    'ref-setup-demo': typeof import('@/component/modules/base/ref-setup-demo/index.vue')['default'];
    'config-provider': typeof import('@/component/modules/base/config-provider/index.vue')['default'];
    layout: typeof import('@/component/modules/base/layout/index.vue')['default'];
  }
}
export {};
