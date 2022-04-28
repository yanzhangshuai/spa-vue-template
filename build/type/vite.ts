import type { Plugin, ProxyOptions } from 'vite';
import type { Env } from './env';

export type Mode = 'development' | 'production' | 'test';

/**
 * vite plugin 函数类型
 */
export type PluginFn = (mode: Mode, env: Env) => Plugin | Plugin[];

export type ProxyTarget = Record<string, ProxyOptions>;
