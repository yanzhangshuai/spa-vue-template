import { Plugin, ProxyOptions } from 'vite';
import { Env } from '../type';

export type PluginFn = (isBuild?: boolean, env?: Env) => Plugin | Plugin[];

export type ProxyTarget = Record<string, ProxyOptions>;
