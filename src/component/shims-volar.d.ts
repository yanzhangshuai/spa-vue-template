declare module 'vue' {
  export interface GlobalComponents {
    'm-config-provider': typeof import('./modules/config-provider/index.vue')['default']
    'm-date-picker-test': typeof import('./modules/date-picker-test/index.vue')['default']
    'm-global-props-demo': typeof import('./modules/global-props-demo/index.vue')['default']
    'm-http-demo': typeof import('./modules/http-demo/index.vue')['default']
    'm-layout': typeof import('./modules/layout/index.vue')['default']
    'm-ref-setup-demo': typeof import('./modules/ref-setup-demo/index.vue')['default']
    'm-tsx-demo': typeof import('./modules/tsx-demo/index')['default']
    'm-l-body': typeof import('./modules/layout/l-body/index.vue')['default']
    'm-l-footer': typeof import('./modules/layout/l-footer/index.vue')['default']
    'm-l-header': typeof import('./modules/layout/l-header/index.vue')['default']
    'm-sider': typeof import('./modules/layout/sider/index.vue')['default']
    'm-l-menu': typeof import('./modules/layout/sider/l-menu/index.vue')['default']
  }
}
export { }