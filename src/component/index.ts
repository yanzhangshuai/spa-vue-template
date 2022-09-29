import type { App, Component, Plugin } from 'vue';

import { moduleFilter } from '@/util/helper';

import { CNamePrefix } from './const';

const ComponentPlugin: Plugin = {
  install(app: App) {
    useComponent(app);
    useUI(app);
  }
};

export default ComponentPlugin;

function useComponent(app: App<Element>) {
  const modules = moduleFilter<Component>(import.meta.glob('./modules/**/*.{vue,tsx,jsx}', { eager: true }));

  //  匹配文件名称的正则
  const componentRegex = /\/([\w\d-]+)([.-]component)?\/([\w\d-]+)([.-]component)?\.(vue|tsx)$/;

  Object.keys(modules).forEach((key) => {
    const component = modules[key];

    const fileMatch = key.match(componentRegex);

    //  获取组件名称
    //  组件名称匹配规则
    //  1.获取组件内部name属性
    //  2. 如果文件名称不为index, 则取文件名称作为name, 否则取文件名称的上一级目录作为组件名称 文件名称和目录名称都会去掉[.-]component
    const name = component.name || (fileMatch[3] && fileMatch[3] !== 'index' ? fileMatch[3] : fileMatch[1]);

    app.component(CNamePrefix + name.toString(), component);
  });
}

function useUI(app: App) {
  const modules = moduleFilter<Plugin>(import.meta.glob('./ui/index.ts', { eager: true }), /^\.\/.*$/, false);

  Object.values(modules).forEach((components) => {
    Object.values(components).forEach(com => app.use(com));
  });
}
