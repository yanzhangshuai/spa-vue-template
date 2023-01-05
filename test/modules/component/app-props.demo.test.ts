import { mount } from '@vue/test-utils';

import { dateFormat } from '@/util/date';
import { assetResolve, imageResolve } from '@/util/file';
import type { AppProps } from '@/plugin/global-property/type';
import AppPropsDemoComponent from '@/component/app-props-demo/index.vue';

describe('config-provider', () => {
  it('component exist', () => {
    expect(AppPropsDemoComponent).toBeTruthy();
  });

  it('slots', () => {
    const appProps: AppProps = {
      name: 'NAME',
      logo: 'https://static.mwjz.live/image/logo/logo.png',
      version: 'VERSION',
      dev: true,
      dateFormat,
      assetResolve,
      imageResolve
    };

    const wrapper = mount(AppPropsDemoComponent, { global: { mocks: { $app: appProps, $window: window } } });

    expect(wrapper).toBeTruthy();

    const li = wrapper.findAll('li');

    expect(li).toHaveLength(5);
    expect(li[0].text()).toEqual(`NAME：${appProps.name}`);
    expect(li[1].find('img').element.src).toEqual(`${appProps.logo}`);
    expect(li[2].text()).toEqual(`VERSION：${appProps.version}`);
    expect(li[3].text()).toEqual(`IS DEV：${appProps.dev}`);
  });
});
