export interface Env {
  VITE_APP_TITLE: string;

  VITE_SUPPORT_JSX: boolean;

  VITE_PUBLIC_PATH: string;

  VITE_DROP_CONSOLE: boolean;

  VITE_GLOB_API_URL: string;

  //启用REPORT
  VITE_REPORT: boolean;

  VITE_GLOB_UPLOAD_URL: string;

  VITE_GLOB_API_URL_PREFIX: string;

  //  dev
  VITE_SERVER_PORT: number;
  VITE_SERVER_OPEN: boolean;
  VITE_SERVER_HTTPS: boolean;
  VITE_SERVER_PROXY: Record<string, string>;

  VITE_USE_MOCK: boolean;
  VITE_USE_PWA: boolean;
  VITE_USE_CDN: boolean;

  //  build
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  VITE_LEGACY: boolean;
  VITE_USE_IMAGEMIN: boolean;
  VITE_OUTPUT_DIR: string;
}
