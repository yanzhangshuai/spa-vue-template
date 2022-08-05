declare module 'vue' {
  export interface GlobalComponents {
    'm-config-provider': typeof import('./modules/config-provider/index.vue')['default']
    'm-global-props-demo': typeof import('./modules/global-props-demo/index.vue')['default']
    'm-http-demo': typeof import('./modules/http-demo/index.vue')['default']
    'm-ref-setup-demo': typeof import('./modules/ref-setup-demo/index.vue')['default']
    'm-tsx-demo': typeof import('./modules/tsx-demo/index')['default']
  }
}
export { }