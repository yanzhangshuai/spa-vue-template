declare module 'pinia' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface DefineStoreOptions<Id, S, G, A> {
    debounce?: {
      [k in keyof A]?: number;
    };
  }
  export interface Pinia {
    name: string;
  }
}
export {};
