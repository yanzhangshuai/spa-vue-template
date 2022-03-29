export declare interface GlobalProps {
  /**
   * 应用名称
   */
  readonly APP_NAME: string;

  /**
   * 应用LOGO
   */
  readonly APP_LOGO: string;

  /**
   * 应用版本
   */
  readonly APP_VERSION: string;

  /**
   * 应用标题
   */
  readonly APP_TITLE: string;

  /**
   * 文件服务器路径
   */
  readonly FILE_PATH_PREFIX: string;

  /**
   * 当前是否为开发环境
   */
  readonly DEV: boolean;

  /**
   * 日期格式化
   */
  readonly dateFormat: (date: number | Date, template?: string) => string;
}
