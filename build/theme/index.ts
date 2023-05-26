import * as fs from 'node:fs'
import * as path from 'node:path'

import * as glob from 'glob'

type ThemeColor = Record<string, Record<string, string>>

// const COLOR_REGEX = /(?<=@)([^:^;]+)[: ]+/([^:^;]+)(?=;)/g;

/**
 * 解析主题文件
 * @param p
 */
export function themeParse(p = 'src/style/theme'): ThemeColor {
  // path 结尾为 / 时，移除
  p.endsWith('/') && (p = p.slice(0, -1))

  const themes: ThemeColor = {}

  const files = glob.sync(`${p}/**.less`)

  files.forEach((file: string) => {
    // 文件名
    //  获取文件名,判断path.sep
    const name = file.split(path.sep).pop()?.replace(/\.less$/, '') || ''

    const curr: Record<string, string> = {}

    //  读取文件内容
    const themeContent = fs.readFileSync(file, 'utf-8')

    themeContent.split(';')
      .map(item => item.replace(/(\r\n)|[\r\n\t ]/, ''))

      .filter(item => item && !item.startsWith('//'))

      .forEach((item) => {
        const res = /(?<=@)([^:^;]+)[: ]+([^:^;]+)/g.exec(item)

        if (res)
          curr[res[1].trim()] = res[2].trim()
      })

    themes[name] = curr
  })

  return themes
}
