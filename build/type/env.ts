export interface Env {
  /**
   * 项目标题
   */
  WEBPACK_APP_TITLE: string;

  /**
   * 是否支持JSX
   */
  WEBPACK_SUPPORT_JSX: boolean;

  /**
   * 是否支持options api写法
   */
  WEBPACK_SUPPORT_VUE_OPTIONS_API: boolean;

  /**
   * 打包资源公共路径
   */
  WEBPACK_PUBLIC_PATH: string;

  /**
   * webpack 缓存
   */
  WEBPACK_CATCH: boolean | 'filesystem' | 'memory';

  /**
   * source map
   */
  WEBPACK_DEVTOOL: string | false;

  /**
   * output地址
   */
  WEBPACK_OUTPUT_DIR: string;

  /**
   * 打包资源报告
   */
  WEBPACK_REPORT: boolean;

  //  dev
  /**
   *  devServer 端口号
   */
  WEBPACK_SERVER_PORT: number;

  /**
   * 压缩
   */
  WEBPACK_SERVER_COMPRESS: boolean;

  /**
   *  输出到本地
   */
  WEBPACK_SERVER_WRITE_TO_DIST: boolean;

  /**
   *  默认打开页面
   */
  WEBPACK_SERVER_OPEN: boolean;
  /**
   *HTTPS协议
   */
  WEBPACK_SERVER_HTTPS: boolean;

  /**
   * 服务代理
   */
  WEBPACK_SERVER_PROXY: Record<string, string>;

  /**
   * 日志等级
   */
  WEBPACK_SERVER_STATS: 'none' | 'summary' | 'errors-only' | 'errors-warnings' | 'minimal' | 'normal' | 'detailed' | 'verbose' | boolean;

  //  build
  /**
   * 文件压缩格式
   */
  WEBPACK_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';

  /**
   * 启用文件压缩格式时是否删除源文
   */
  WEBPACK_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;

  /**
   * 删除console
   */
  WEBPACK_BUILD_DROP_CONSOLE: boolean;
  WEBPACK_USE_IMAGEMIN: boolean;
}
