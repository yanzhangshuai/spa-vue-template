import { _GettersTree, StateTree } from 'pinia';
declare module 'pinia' {
  export interface DefineStoreOptions<Id extends string, S extends StateTree, G extends _GettersTree<S>, A> {
    debounce?: {
      [k in keyof A]?: number;
    };
  }
  export interface Pinia {
    name: string;
  }
}
export {};
