import { Configuration } from 'webpack';
import { merge as webpackMerge } from 'webpack-merge';
import { Env } from '../../type';
import { compressSupport } from './compress';
import { htmlSupport } from './html';
import { reportSupport } from './report';
import { scriptSupport } from './script';
import { styleSupport } from './style';
import { variableSupport } from './variable';
import { vueSupport } from './vue';

export function support(isBuild: boolean, env: Env): Configuration {
  const supports = [
    variableSupport(),
    vueSupport(),
    scriptSupport(),
    styleSupport(isBuild),
    htmlSupport(isBuild),
    isBuild && env.WEBPACK_REPORT && reportSupport(),
    isBuild && compressSupport(env.WEBPACK_BUILD_COMPRESS, true)
  ].filter(Boolean);

  return webpackMerge(supports);
}
