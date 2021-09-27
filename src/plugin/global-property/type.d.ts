export declare interface GlobalProps {
  /**
   * 文件服务器路径
   */
  FILE_PATH_PREFIX: string;

  DEV?: boolean;
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $window: Window & typeof globalThis;

    $globalProps: GlobalProps;
  }
}
