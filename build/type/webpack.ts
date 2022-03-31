import { Configuration } from 'webpack';
import { Env } from './env';

export type Mode = 'development' | 'production';

export type SupportFn = (mode: Mode, env: Env) => Configuration;
