import { Configuration } from 'webpack';
import { Env } from './env';

export type SupportFn = (isBuild?: boolean, env?: Env) => Configuration;
