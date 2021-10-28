import { UnwrapRef } from 'vue';
import { PiniaCustomProperties, StateTree, StoreWithGetters, StoreWithState } from 'pinia';
declare module 'pinia' {
  export interface DefineStoreOptions<Id extends string, S extends StateTree, G, A> {
    id: Id;
    actions?: A &
      ThisType<
        A & UnwrapRef<S> & StoreWithState<Id, S, G, A> & StoreWithGetters<G> & PiniaCustomProperties
      >;

    debounce?: {
      [k in keyof A]?: number;
    };
  }
  export interface Pinia {
    name: string;
  }
}

export {};
