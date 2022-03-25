import { EsbuildTransformOptions } from 'vite';

export interface Env {
  /**
   * 项目标题
   */
  VITE_APP_TITLE: string;

  /**
   * 是否支持JSX
   */
  VITE_SUPPORT_JSX: boolean;

  /**
   * 是否支持options api写法
   */
  VITE_SUPPORT_VUE_OPTIONS_API: boolean;

  /**
   * 打包资源公共路径
   */
  VITE_PUBLIC_PATH: string;

  /**
   * 启用打包资源报告
   */
  VITE_REPORT: boolean;

  VITE_USE_MOCK: boolean;

  //  dev
  /**
   * devServer 端口号
   */
  VITE_SERVER_PORT: number;

  /**
   * 默认打开页面
   */
  VITE_SERVER_OPEN: boolean;

  /**
   *HTTPS协议
   */
  VITE_SERVER_HTTPS: boolean;

  /**
   * 服务代理
   */
  VITE_SERVER_PROXY: Record<string, string>;

  //  build

  /**
   * 最低支持目标
   */
  VITE_BUILD_TARGET: 'modules' | EsbuildTransformOptions['target'] | false;

  /**
   * 文件压缩格式
   */
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';

  /**
   * 启用文件压缩格式时是否删除源文件
   */
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;

  /**
   * source map
   */
  VITE_BUILD_SOURCE_MAP: boolean | 'inline' | 'hidden';

  /**
   * 压缩工具
   */
  VITE_BUILD_MINIFY: boolean | 'terser' | 'esbuild';

  /**
   * 静态文件地址
   */
  VITE_BUILD_ASSETS_DIR: string;

  /**
   * 删除console
   */
  VITE_BUILD_DROP_CONSOLE: boolean;

  VITE_USE_IMAGEMIN: boolean;

  /**
   *  output目录
   */
  VITE_BUILD_OUTPUT_DIR: string;
}
