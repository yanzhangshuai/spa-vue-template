import { UnwrapRef } from '@vue/composition-api';
import { _StoreWithGetters, _StoreWithState, PiniaCustomProperties, StateTree } from 'pinia';

export {};
declare module 'pinia' {
  export interface DefineStoreOptions<Id extends string, S extends StateTree, G extends {}, A> {
    /**
     * Optional object of actions.
     */
    actions?: A & ThisType<A & UnwrapRef<S> & _StoreWithState<Id, S, G, A> & _StoreWithGetters<G> & PiniaCustomProperties>;

    debounce?: {
      [k in keyof A]?: number;
    };
  }

  export interface Pinia {
    name: string;
  }
}
