import { Plugin, ProxyOptions } from 'vite';
import { Env } from './env';

/**
 * vite plugin 函数类型
 */
export type PluginFn = (isBuild?: boolean, env?: Env) => Plugin | Plugin[];

export type ProxyTarget = Record<string, ProxyOptions>;
