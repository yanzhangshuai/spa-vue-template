import type { Env } from '../type/env';

// 转换配置文件数据
export function wrapperEnv(env: Record<keyof Env, string>): Env {
  return (Object.keys(env) as Array<keyof Env>)
    .map((envName) => {
      const value = env[envName].replace(/\\n/g, '\n');

      //  布尔值
      if (/(true|false)/.test(value))
        return { envName, value: value === 'true' };

      // 数值
      if (/^\d+$/.test(value))
        return { envName, value: Number(value) };

      // 数组或对象
      if (/^[{\[].*[}\]]$/.test(value)) {
        let realValue: unknown = value;
        try {
          realValue = JSON.parse(value);
        }
        catch (error) {}
        return { envName, value: realValue };
      }

      //  字符串
      return { envName, value };
    })
    .reduce((accumulator, current) => {
      accumulator[current.envName] = current.value;
      return accumulator;
    }, {} as Record<keyof Env, unknown>) as Env;
}
