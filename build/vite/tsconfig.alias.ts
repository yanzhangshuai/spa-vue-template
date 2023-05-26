import ts from 'typescript'

import { resolve } from '../util/path'

const ALIAS_REGEX = /^.+(?=\/\*)/

/**
 * @description: 读取tsconfig.json中的paths配置,转为alias配置
 * @param alias {Record<string, string>} alias配置
 */
export function tsconfigAlias(alias: Record<string, string> = {}) {
  //  读取tsconfig.json
  const configFileName = ts.findConfigFile('./', ts.sys.fileExists, 'tsconfig.json')

  const configFile = ts.readConfigFile(configFileName, ts.sys.readFile)

  const compilerOptions = ts.parseJsonConfigFileContent(configFile.config, ts.sys, './')

  const targetAlias: Record<string, string> = Object.assign({}, alias || {})

  //  遍历解析paths属性
  Object.keys(compilerOptions.options.paths).forEach((key) => {
    const path = compilerOptions.options.paths[key]

    if (!Array.isArray(path))
      return

    const aliasName = key.match(ALIAS_REGEX)?.[0]

    const aliasPath = path?.[0].match(ALIAS_REGEX)?.[0]

    if (!aliasName || !aliasPath)
      return

    targetAlias[aliasName] = resolve(compilerOptions.options.baseUrl, aliasPath)
  })

  return targetAlias
}
