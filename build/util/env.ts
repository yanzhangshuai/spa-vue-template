import fs from 'fs';
import path from 'path';

const NEWLINE = '\n';
const RE_NEWLINES = /\\n/g;
const NEWLINES_MATCH = /\n|\r|\r\n/;
const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;

export function loadEnv(mode: 'development' | 'production', envDir: string, prefix = 'WEBPACK_'): Record<string, string> {
  const env: Record<string, string> = {};
  const envFiles = [/** mode local file */ `.env.${mode}.local`, /** mode file */ `.env.${mode}`, /** local file */ `.env.local`, /** default file */ `.env`];
  // 检查是否有前缀起始的env变量
  // 通常是内联提供的，应该按优先级排列
  for (const key in process.env) {
    if (key.startsWith(prefix) && env[key] === undefined) {
      env[key] = process.env[key];
    }
  }

  for (const file of envFiles) {
    const path = lookupFile(envDir, [file], true);
    if (path) {
      const parsed = parse(fs.readFileSync(path));
      // let environment variables use each other
      main({
        parsed,
        // prevent process.env mutation
        ignoreProcessEnv: true
      });
      // only keys that start with prefix are exposed to client
      for (const [key, value] of Object.entries(parsed)) {
        if (key.startsWith(prefix) && env[key] === undefined) {
          env[key] = value;
        } else if (key === 'NODE_ENV') {
          // NODE_ENV override in .env file
          //process.env.VITE_USER_NODE_ENV = value;
        }
      }
    }
  }
  return env;
}

// 转换配置文件数据
export function wrapperEnv<T extends Object>(envConf: Record<keyof T, string>): T {
  return (Object.keys(envConf) as Array<keyof T>)
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
    }, {} as T);
}

// 将src转为obj
function parse(src: string | Buffer): Record<string, string> {
  const obj: Record<string, string> = {};

  // convert Buffers before splitting into lines and processing
  src
    .toString()
    .split(NEWLINES_MATCH)
    .forEach((line: string) => {
      // 匹配key=val
      const keyValueArr = line.match(RE_INI_KEY_VAL);
      // matched?
      if (keyValueArr != null) {
        const key = keyValueArr[1];
        // default undefined or missing values to empty string
        let val = keyValueArr[2] || '';
        const end = val.length - 1;
        const isDoubleQuoted = val[0] === '"' && val[end] === '"';
        const isSingleQuoted = val[0] === "'" && val[end] === "'";

        // 如果具有引号，将其去掉
        if (isSingleQuoted || isDoubleQuoted) {
          val = val.substring(1, end);

          // if double quoted, expand newlines
          if (isDoubleQuoted) {
            val = val.replace(RE_NEWLINES, NEWLINE);
          }
        } else {
          // remove surrounding whitespace
          val = val.trim();
        }

        obj[key] = val;
      }
    });

  return obj;
}

function lookupFile(dir: string, formats: Array<string> | string, pathOnly = false): string {
  formats = Array.isArray(formats) ? formats : [formats];
  for (const format of formats) {
    const fullPath = path.join(dir, format);
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
      return pathOnly ? fullPath : fs.readFileSync(fullPath, 'utf-8');
    }
  }
  const parentDir = path.dirname(dir);
  if (parentDir !== dir) {
    return lookupFile(parentDir, formats, pathOnly);
  }
}

const main = function (config: { parsed: Record<string, string>; ignoreProcessEnv: boolean }) {
  // if ignoring process.env, use a blank object
  const environment = config.ignoreProcessEnv ? {} : process.env;

  const interpolate = (envValue: string): string => {
    const matches = envValue.match(/(.?\${?(?:[a-zA-Z0-9_]+)?}?)/g) || [];

    return matches.reduce(function (newEnv: string, match: string) {
      const parts = /(.?)\${?([a-zA-Z0-9_]+)?}?/g.exec(match);
      const prefix = parts[1];

      let value, replacePart;

      if (prefix === '\\') {
        replacePart = parts[0];
        value = replacePart.replace('\\$', '$');
      } else {
        const key = parts[2];
        replacePart = parts[0].substring(prefix.length);
        // process.env value 'wins' over .env file's value
        value = environment.hasOwnProperty(key) ? environment[key] : config.parsed[key] || '';

        // Resolve recursive interpolations
        value = interpolate(value);
      }

      return newEnv.replace(replacePart, value);
    }, envValue);
  };

  for (const configKey in config.parsed) {
    const value = environment.hasOwnProperty(configKey) ? environment[configKey] : config.parsed[configKey];

    config.parsed[configKey] = interpolate(value);
  }

  for (const processKey in config.parsed) {
    environment[processKey] = config.parsed[processKey];
  }

  return config;
};
