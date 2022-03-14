import { Configuration } from 'webpack';
import { Env } from '../type';

export type SupportFn = (isBuild?: boolean, env?: Env) => Configuration;
