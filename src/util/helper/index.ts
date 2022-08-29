/**
 * modules 过滤
 * @param modules
 * @param filter
 * @param de 是否只需要默认导出
 * @returns 模块  key:文件名称, value:default:模块 或当前文件所有模块列表
 */
export function moduleFilter<T>(modules: Record<string, Record<string, T>>, filter = /^\.\/.*$/, de = true): Record<string, T | Record<string, T>> {
  return Object.keys(modules)
    .filter((name) => {
      return (
        modules[name]
        // @ts-expect-error 无法判断类型
        && modules[name][Symbol.toStringTag] === 'Module'
        && filter.test(name)
        // 当只获取default模块时, 判断其是否存在
        && (de ? modules[name].default : true)
      );
    })
    .reduce((acc, name) => {
      acc[name] = de ? modules[name].default : modules[name];
      return acc;
    }, {} as Record<string, T | Record<string, T>>);
}
