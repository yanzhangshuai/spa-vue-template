export interface AppConfig {
  name: string

  version: string
  logo: string
  assetURL: string
  baseURL: {
    api: string
    upload: string
  }
}
