declare module 'vue' {
  export interface GlobalComponents {
    'config-provider': typeof import('@/component/modules/base/config-provider/index.vue')['default'];
  }
}
export {};
