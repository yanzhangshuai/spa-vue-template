export interface AppProps {
  /**
   * 应用名称
   */
  readonly name: string

  /**
   * 应用LOGO
   */
  readonly logo: string

  /**
   * 应用版本
   */
  readonly version: string

  /**
   * 当前是否为开发环境
   */
  readonly dev: boolean

  /**
   * 日期格式化
   */
  readonly dateFormat: (date: number | Date, template?: string) => string

  /**
   * 静态地址解析
   */
  readonly assetResolve: (path: string) => string

  /**
   * 图片地址解析
   */
  readonly imageResolve: (path: string) => string
}
