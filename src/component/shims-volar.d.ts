declare module 'vue' {
  export interface GlobalComponents {
    'global-props-demo': typeof import('./modules/base/global-props-demo/global-props-demo/index.vue')['default'];
    'config-provider': typeof import('./modules/config-provider/index.vue')['default'];
    'date-picker-test': typeof import('./modules/date-picker-test/index.vue')['default'];
    layout: typeof import('./modules/layout/index.vue')['default'];
    'vue-demo': typeof import('./modules/base/vue-demo/index.vue')['default'];
    'layout-header': typeof import('./modules/layout/layout-header/index.vue')['default'];
    'layout-sider': typeof import('./modules/layout/layout-sider/index.vue')['default'];
  }
}
export {};
