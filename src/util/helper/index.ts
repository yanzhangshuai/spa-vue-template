/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *await Promise
 * @param promise
 * @returns[error, data]
 */
export function awaitWrapper<T = unknown, E = unknown>(promise: Promise<T>): Promise<Array<T | E>> {
  return promise.then((data: T) => [null, data]).catch((err: E) => [err, null]);
}

/**
 * modules 过滤
 * @param modules
 * @param filter
 * @param de 是否只需要默认导出
 * @returns 模块  key:文件名称, value:default:模块 或当前文件所有模块列表
 */
export function moduleFilter<T>(
  modules: {
    keys(): string[]
    (id: string): any
    <T>(id: string): T
    resolve(id: string): string
    id: string
  },
  filter = /^\.\/.*$/,
  de = true
): Record<string, T | Record<string, T>> {
  return modules
    .keys()
    .filter((filename) => {
      //  过滤组件
      return (
        modules(filename)
        && modules(filename)[Symbol.toStringTag] === 'Module'
        && filter.test(filename)
        // 当只获取default模块时, 判断其是否存在
        && (de ? modules(filename).default : true)
      );
    })
    .reduce<Record<string, T>>((accumulator, filename) => {
      accumulator[filename] = de ? modules(filename).default : modules(filename);
      return accumulator;
    }, {});
}
