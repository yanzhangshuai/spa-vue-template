import { Configuration } from 'webpack';
import { merge as webpackMerge } from 'webpack-merge';
import { Env } from '../type';
import { compressSupport } from './supports/compress';
import { htmlSupport } from './supports/html';
import { uiSupport } from './supports/ui';
import { styleSupport } from './supports/style';
import { scriptSupport } from './supports/script';
import { reportSupport } from './supports/report';
import { variableSupport } from './supports/variable';
import { vueSupport } from './supports/vue';

export function support(isBuild: boolean, env: Env): Configuration {
  const supports = [
    vueSupport(),
    uiSupport(),
    scriptSupport(),
    variableSupport(isBuild, env),
    styleSupport(isBuild),
    htmlSupport(isBuild, env.WEBPACK_APP_TITLE),
    env.WEBPACK_REPORT && reportSupport(),
    isBuild && compressSupport(env.WEBPACK_BUILD_COMPRESS, true)
  ].filter(Boolean);

  return webpackMerge(supports);
}
