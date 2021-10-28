declare module 'vue' {
  export interface GlobalComponents {
    'config-provider': typeof import('@/component/modules/base/config-provider/index.vue')['default'];
    'date-picker-test': typeof import('@/component/modules/base/date-picker-test/index.vue')['default'];
    layout: typeof import('@/component/modules/base/layout/index.vue')['default'];
  }
}
export {};
