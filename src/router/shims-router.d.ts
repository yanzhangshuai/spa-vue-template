/// <reference types="vite-plugin-pages/client" />
declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    title?: string
    auth?: boolean
    roles?: Array<number>
  }
}
export {};
