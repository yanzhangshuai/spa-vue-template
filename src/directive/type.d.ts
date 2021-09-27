export {};
declare module 'vue' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  export interface ObjectDirective<T = any, V = any> {
    name?: string;
  }
}
