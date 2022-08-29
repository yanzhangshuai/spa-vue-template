/// <reference types="vue/macros-global" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, unknown>;
  export default component;
}

declare module '*.json' {
  const value: unknown;
  export default value;
}
