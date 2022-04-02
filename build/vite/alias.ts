import { resolve } from '../util/path';
import { compilerOptions } from '../../tsconfig.json';

const ALIAS_REGEX = /^.+(?=\/\*)/;
/**
 *  扫描tsconfig.json 根据paths属性获取alias
 * @returns
 */
export function alias() {
  const alias: Record<string, string> = {};

  const paths: Record<string, Array<string>> = compilerOptions.paths;

  Object.keys(paths).forEach((key) => {
    const path = paths[key];

    if (!Array.isArray(path)) return;
    const aliasName = key.match(ALIAS_REGEX)?.[0];

    const aliasPath = path?.[0].match(ALIAS_REGEX)?.[0];
    if (!aliasName || !aliasPath) return;

    alias[aliasName] = resolve(compilerOptions.baseUrl, aliasPath);
  });

  return alias;
}
