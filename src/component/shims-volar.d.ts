declare module 'vue' {
  export interface GlobalComponents {
    'config-provider': typeof import('./modules/config-provider/index.vue')['default']
    'date-picker-test': typeof import('./modules/date-picker-test/index.vue')['default']
    'global-props-demo': typeof import('./modules/global-props-demo/index.vue')['default']
    'http-demo': typeof import('./modules/http-demo/index.vue')['default']
    'layout': typeof import('./modules/layout/index.vue')['default']
    'ref-setup-demo': typeof import('./modules/ref-setup-demo/index.vue')['default']
    'tsx-demo': typeof import('./modules/tsx-demo/index')['default']
    'layout-header': typeof import('./modules/layout/layout-header/index.vue')['default']
    'layout-sider': typeof import('./modules/layout/layout-sider/index.vue')['default']
    'layout-menu': typeof import('./modules/layout/layout-sider/layout-menu/index')['default']
  }
}
export {};
