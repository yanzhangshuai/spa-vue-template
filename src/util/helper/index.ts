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
  modules: Record<string, Record<string, T>>,
  filter = /^\.\/.*$/, de = true
): Record<string, T | Record<string, T>> {
  return Object.keys(modules)
    .filter((filename) => {
      return (
        modules[filename]
        // @ts-expect-error 无法判断类型
        && modules[filename][Symbol.toStringTag] === 'Module'
        && filter.test(filename)
        // 当只获取default模块时, 判断其是否存在
        && (de ? modules[filename].default : true)
      );
    })
    .reduce((accumulator, filename) => {
      accumulator[filename] = de ? modules[filename].default : modules[filename];
      return accumulator;
    }, {} as Record<string, T | Record<string, T>>);
}
