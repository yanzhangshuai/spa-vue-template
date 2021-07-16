import 'pinia';
declare module 'pinia' {
  export interface DefineStoreOptions<
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Id extends string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    S extends StateTree,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    G extends GettersTree<S>,
    A
  > {
    debounce?: {
      [k in keyof A]?: number;
    };
  }
}
