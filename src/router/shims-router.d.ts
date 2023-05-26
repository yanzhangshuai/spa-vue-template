/// <reference types="vite-plugin-pages/client" />
export {}

declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    title?: string
    auth?: boolean
    roles?: Array<number>
  }
}
