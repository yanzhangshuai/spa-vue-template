import type { EsbuildTransformOptions } from 'vite';

export interface Env {

  /**
   * 是否支持options api写法
   */
  readonly VITE_SUPPORT_VUE_OPTIONS_API: boolean

  /**
   * 打包资源公共路径
   */
  readonly VITE_PUBLIC_PATH: string

  /**
   * 启用打包资源报告
   */
  readonly VITE_REPORT: boolean

  readonly VITE_USE_MOCK: boolean

  //  dev
  /**
   * devServer 端口号
   */
  readonly VITE_SERVER_PORT: number

  /**
   * 默认打开页面
   */
  readonly VITE_SERVER_OPEN: boolean

  /**
   *HTTPS协议
   */
  readonly VITE_SERVER_HTTPS: boolean

  /**
   * 服务代理
   */
  readonly VITE_SERVER_PROXY: Record<string, string>

  //  build

  /**
   * 最低支持目标
   */
  readonly VITE_BUILD_TARGET: 'modules' | EsbuildTransformOptions['target'] | false

  /**
   * 文件压缩格式
   */
  readonly VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'

  /**
   * 启用文件压缩格式时是否删除源文件
   */
  readonly VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean

  /**
   * source map
   */
  readonly VITE_BUILD_SOURCE_MAP: boolean | 'inline' | 'hidden'

  /**
   * 压缩工具
   */
  readonly VITE_BUILD_MINIFY: boolean | 'terser' | 'esbuild'

  /**
   * 静态文件地址
   */
  readonly VITE_BUILD_ASSETS_DIR: string

  /**
   * 删除console
   */
  readonly VITE_BUILD_DROP_CONSOLE: boolean

  readonly VITE_USE_IMAGEMIN: boolean

  /**
   *  output目录
   */
  readonly VITE_BUILD_OUTPUT_DIR: string
}
