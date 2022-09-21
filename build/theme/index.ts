import fs from 'fs';
import glob from 'glob';

type ThemeColor = Record<string, Record<string, string>>;

const THEME_REGEX = /(?<=@)([^:^;]+):([^:^;]+)(?=;)/g;

/**
 * 解析主题文件
 * @param path
 */
export function themeParse(path = 'src/asset/theme'): ThemeColor {
  // path 结尾为 / 时，移除
  path.endsWith('/') && (path = path.slice(0, -1));

  const themes: ThemeColor = {};
  const files = glob.sync(`${path}/**.less`);

  files.forEach((file: string) => {
    // 文件名
    const name = file.match(/(?<=\/)[^\/]+(?=\.less)/)?.[0];

    const curr: Record<string, string> = {};

    //  读取文件内容
    const themeContent = fs.readFileSync(file, 'utf-8');

    let res: RegExpExecArray;
    // eslint-disable-next-line no-cond-assign
    while ((res = THEME_REGEX.exec(themeContent)) !== null)
      curr[res[1].trim()] = `${res[2].trim()}`;

    themes[name] = curr;
  });

  return themes;
}
