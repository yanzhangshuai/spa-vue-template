import path from 'node:path'

/**
 * 根目录
 */
export const root = process.cwd()

/**
 * 配置文件所在路径
 */
export const configPath = resolve('build/config')

/**
 * 从根目录拼接
 * @param paths
 * @returns
 */
export function resolve(...paths: string[]): string {
  return path.join(root, ...paths)
}
