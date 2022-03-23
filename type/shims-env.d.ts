interface ImportMetaEnv extends Readonly<Record<string, string | boolean | undefined>> {
  readonly GLOBAL_VERSION: string;
  readonly GLOBAL_FILE_PATH: string;
  readonly GLOBAL_APP_TITLE: string;

  readonly GLOBAL_API_BASE_URL: string;

  readonly GLOBAL_UPLOAD_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
