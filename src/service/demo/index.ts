import { Win } from '@/win'

export class DemoService {
  private static _instance: DemoService

  static load() {
    this._instance = (this._instance || new DemoService())

    return this._instance
  }

  getHello() {
    return Win.http.get('app/hello')
  }
}
