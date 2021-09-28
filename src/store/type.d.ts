import { UnwrapRef } from '@vue/composition-api';
import { GettersTree, StateTree } from 'pinia';
import { PiniaCustomProperties, StoreWithGetters, StoreWithState } from 'pinia/dist/src/types';

export {};
declare module 'pinia' {
  export interface DefineStoreOptions<
    Id extends string,
    S extends StateTree,
    G extends GettersTree<S>,
    A
  > {
    /**
     * Optional object of actions.
     */
    actions?: A &
      ThisType<
        A &
          UnwrapRef<StateTree extends S ? {} : S> &
          StoreWithState<Id, S, G, A> &
          StoreWithGetters<GettersTree<S> extends G ? {} : G> &
          PiniaCustomProperties
      >;

    debounce?: {
      [k in keyof A]?: number;
    };
  }

  export interface Pinia {
    name: string;
  }
}
