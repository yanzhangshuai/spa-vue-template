import { Configuration } from 'webpack';
import { merge as webpackMerge } from 'webpack-merge';
import { Env } from '../types';
import { compressSupport } from './supports/compress';
import { htmlSupport } from './supports/html';
import { reportSupport } from './supports/report';
import { scriptSupport } from './supports/script';
import { styleSupport } from './supports/style';
import { variableSupport } from './supports/variable';
import { vueSupport } from './supports/vue';

export function support(isBuild: boolean, env: Env): Configuration {
  const supports = [
    vueSupport(),
    scriptSupport(),
    variableSupport(isBuild, env.WEBPACK_FILE_PATH),
    styleSupport(isBuild),
    htmlSupport(isBuild, env.WEBPACK_APP_TITLE),
    isBuild && env.WEBPACK_REPORT && reportSupport(),
    isBuild && compressSupport(env.WEBPACK_BUILD_COMPRESS, true)
  ].filter(Boolean);
  return webpackMerge(supports);
}
