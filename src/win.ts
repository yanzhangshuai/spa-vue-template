import type { Http } from '@/service/http';
import type { AppConfig } from '@/type/app';

export class Win {
  /**
   * 应用配置
   */
  static appConfig: AppConfig;

  // TODO: 暂时将http放这里
  static http: Http;
}
