export interface Env {
  WEBPACK_APP_TITLE: string;

  WEBPACK_SUPPORT_JSX: boolean;

  WEBPACK_PUBLIC_PATH: string;

  /**
   * 图片根目录
   */
  WEBPACK_FILE_SERVER: string;

  /**
   * ui 中icons 是否按需加载
   */
  WEBPACK_UI_ICONS_NEED_IMPORT: boolean;

  /**
   * 打包时是否删除console
   */
  WEBPACK_DROP_CONSOLE: boolean;

  /**
   * webpack 缓存
   */
  WEBPACK_CATCH: boolean | 'filesystem' | 'memory';

  WEBPACK_DEVTOOL: string | false;

  WEBPACK_OUTPUT_DIR: string;

  WEBPACK_REPORT: boolean;

  WEBPACK_GLOB_API_URL: string;

  WEBPACK_GLOB_UPLOAD_URL: string;

  WEBPACK_GLOB_API_URL_PREFIX: string;

  //  dev
  WEBPACK_SERVER_PORT: number;
  WEBPACK_SERVER_OPEN: boolean;
  WEBPACK_SERVER_HTTPS: boolean;
  WEBPACK_SERVER_PROXY: Record<string, string>;
  WEBPACK_SERVER_STATS:
    | 'none'
    | 'summary'
    | 'errors-only'
    | 'errors-warnings'
    | 'minimal'
    | 'normal'
    | 'detailed'
    | 'verbose'
    | boolean;

  //  build
  WEBPACK_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
  WEBPACK_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  WEBPACK_USE_IMAGEMIN: boolean;
}
