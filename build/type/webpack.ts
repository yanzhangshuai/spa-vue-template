import type { Configuration } from 'webpack';
import type { Env } from './env';

export type Mode = 'development' | 'production';

export type SupportFn = (mode: Mode, env: Env) => Configuration;
