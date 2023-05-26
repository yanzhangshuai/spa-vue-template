import { Win } from '@/win'

const asset = (path: string) => /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(path)

/**
 * 静态资源地址解析
 * @param path
 */
export function assetResolve(path: string) {
  if (asset(path))
    return path

  const assetURL = Win.appConfig.assetURL
  //  判断assetURL 是否以/结尾
  if (assetURL.endsWith('/'))
    return `${assetURL}${path}`

  return `${assetURL}/${path}`
}

/**
 * 图片地址解析
 * @param path
 */
export function imageResolve(path: string) {
  if (asset(path))
    return path

  return assetResolve(`image/${path}`)
}
