interface ImportMetaEnv extends Readonly<Record<string, string | boolean | undefined>> {
  /**
   * 应用名称
   */
  readonly GLOBAL_APP_NAME: string;

  /**
   * 应用LOGO
   */
  readonly GLOBAL_APP_LOGO: string;

  /**
   * 应用版本
   */
  readonly GLOBAL_APP_VERSION: string;

  /**
   * 应用标题
   */
  readonly GLOBAL_APP_TITLE: string;

  /**
   * 文件服务器地址
   */
  readonly GLOBAL_FILE_PATH: string;

  /**
   * API  base url
   */
  readonly GLOBAL_API_BASE_URL: string;

  /**
   *  文件 base url
   */
  readonly GLOBAL_UPLOAD_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
