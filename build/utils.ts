import path from 'path';
import portfinder from 'portfinder';
import { Env } from './types';

export const root = process.cwd();

export const resolve = (dir: string): string => {
  return path.join(root, dir);
};

export function moduleAlias(modules: Array<string>, prefixPath = 'src'): Record<string, string> {
  return modules.reduce((accumulator, current) => {
    accumulator[current] = resolve(prefixPath + '/' + current);
    return accumulator;
  }, {} as Record<string, string>);
}

/**
 * 获取可用端口
 * @returns
 * @param startPort
 */
export const findPort = (startPort: number): Promise<number> => {
  return portfinder.getPortPromise({ startPort: startPort, port: startPort });
};

/**
 * 配置文件所在路径
 */
export const configPath = resolve('config');
// 转换配置文件数据
export function wrapperEnv(envConf: Record<keyof Env, string>): Env {
  return (Object.keys(envConf) as Array<keyof Env>)
    .map((envName) => {
      const value = envConf[envName].replace(/\\n/g, '\n');
      //  布尔值
      if (/(true|false)/.test(value)) {
        return {
          envName: envName,
          value: value === 'true'
        };
      }
      // 数值
      if (/^\d+$/.test(value)) {
        return {
          envName: envName,
          value: Number(value)
        };
      }
      // 数组或对象
      if (/^[{\[].*[}\]]$/.test(value)) {
        let realValue: unknown = value;
        try {
          realValue = JSON.parse(value);
        } catch (error) {}
        return {
          envName: envName,
          value: realValue
        };
      }
      //  字符串
      return {
        envName: envName,
        value: value
      };
    })
    .reduce((prev, current) => {
      prev[current.envName] = current.value as never;
      return prev;
    }, {} as Env);
}
