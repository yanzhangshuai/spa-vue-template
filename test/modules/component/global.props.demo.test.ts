import { mount } from '@vue/test-utils';
import GlobalPropsDemoComponent from '@/component/modules/global-props-demo/index.vue';

describe('config-provider', () => {
  it('component exist', () => {
    expect(GlobalPropsDemoComponent).toBeTruthy();
  });

  it('slots', () => {
    const globalProps = {
      APP_NAME: 'APP_NAME',
      APP_LOGO: 'https://static.mwjz.live/image/logo/logo.png',
      APP_VERSION: 'APP_VERSION',
      APP_TITLE: 'APP_TITLE',
      FILE_PATH_PREFIX: 'FILE_PATH_PREFIX',
      DEV: true,
      dateFormat: (date: Date) => date.valueOf()
    };

    const wrapper = mount(GlobalPropsDemoComponent, {
      global: {
        mocks: {
          $globalProps: globalProps,
          $window: window
        }
      }
    });
    expect(wrapper).toBeTruthy();
    const li = wrapper.findAll('li');
    expect(li).toHaveLength(7);
    expect(li[0].text()).toEqual(`APP_NAME：${globalProps.APP_NAME}`);
    expect(li[1].find('img').element.src).toEqual(`${globalProps.APP_LOGO}`);
    expect(li[2].text()).toEqual(`APP_VERSION：${globalProps.APP_VERSION}`);
    expect(li[3].text()).toEqual(`APP_TITLE：${globalProps.APP_TITLE}`);
    expect(li[4].text()).toEqual(`FILE_PATH：${globalProps.FILE_PATH_PREFIX}`);
    expect(li[5].text()).toEqual(`IS DEV：${globalProps.DEV}`);
  });
});
