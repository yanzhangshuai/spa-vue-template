import type { Plugin, ProxyOptions } from 'vite'
import type { Env } from '../type/env'

export type Mode = 'development' | 'production' | 'test'

export type PluginFn = (mode: Mode, env: Env) => Plugin | Plugin[]

export type ProxyTarget = Record<string, ProxyOptions>

export function definePlugin(fn: PluginFn): PluginFn {
  return fn
}
