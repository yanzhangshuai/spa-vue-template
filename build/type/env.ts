export interface Env {
  /**
   * 项目标题
   */
  readonly WEBPACK_APP_TITLE: string;

  /**
   * 是否支持JSX
   */
  readonly WEBPACK_SUPPORT_JSX: boolean;

  /**
   * 打包资源公共路径
   */
  readonly WEBPACK_PUBLIC_PATH: string;

  /**
   * webpack 缓存
   */
  readonly WEBPACK_CATCH: boolean | 'filesystem' | 'memory';

  /**
   * source map
   */
  readonly WEBPACK_DEVTOOL: string | false;

  /**
   * output地址
   */
  readonly WEBPACK_OUTPUT_DIR: string;

  /**
   * 打包资源报告
   */
  readonly WEBPACK_REPORT: boolean;

  /**
   * ui 中icons 是否按需加载
   */
  WEBPACK_UI_ICONS_NEED_IMPORT: boolean;

  //  dev
  /**
   *  devServer 端口号
   */
  readonly WEBPACK_SERVER_PORT: number;

  /**
   * 压缩
   */
  readonly WEBPACK_SERVER_COMPRESS: boolean;

  /**
   *  输出到本地
   */
  readonly WEBPACK_SERVER_WRITE_TO_DIST: boolean;

  /**
   *  默认打开页面
   */
  readonly WEBPACK_SERVER_OPEN: boolean;
  /**
   *HTTPS协议
   */
  readonly WEBPACK_SERVER_HTTPS: boolean;

  /**
   * 服务代理
   */
  readonly WEBPACK_SERVER_PROXY: Record<string, string>;

  /**
   * 日志等级
   */
  readonly WEBPACK_SERVER_STATS: 'none' | 'summary' | 'errors-only' | 'errors-warnings' | 'minimal' | 'normal' | 'detailed' | 'verbose' | boolean;

  //  build
  /**
   * 文件压缩格式
   */
  readonly WEBPACK_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';

  /**
   * 启用文件压缩格式时是否删除源文
   */
  readonly WEBPACK_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;

  /**
   * 删除console
   */
  readonly WEBPACK_BUILD_DROP_CONSOLE: boolean;

  readonly WEBPACK_USE_IMAGEMIN: boolean;
}
