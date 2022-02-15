import { Configuration } from 'webpack';
import { merge as webpackMerge } from 'webpack-merge';
import { Env } from '../types';
import { compressSupport } from './supports/compress';
import { htmlSupport } from './supports/html';
import { uiSupport } from './supports/ui';
import { reportSupport } from './supports/report';
import { scriptSupport } from './supports/script';
import { styleSupport } from './supports/style';
import { variableSupport } from './supports/variable';
import { vueSupport } from './supports/vue';

export function support(isBuild: boolean, env: Env): Configuration {
  const supports = [
    vueSupport(),
    scriptSupport(),
    variableSupport(isBuild, env),
    htmlSupport(isBuild, env.WEBPACK_APP_TITLE),
    styleSupport(isBuild),
    uiSupport(env.WEBPACK_UI_ICONS_NEED_IMPORT),
    isBuild && env.WEBPACK_REPORT && reportSupport(),
    isBuild && compressSupport(env.WEBPACK_BUILD_COMPRESS, true)
  ].filter(Boolean);
  return webpackMerge(supports);
}
