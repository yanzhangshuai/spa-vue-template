declare module 'pinia' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface DefineStoreOptions<Id extends string, S extends StateTree, G, A> {
    debounce?: {
      [k in keyof A]?: number;
    };
  }

  export interface Pinia {
    name: string;
  }
}

export {};
