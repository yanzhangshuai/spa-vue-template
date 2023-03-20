import { h } from 'vue';

import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import { useThemeStore } from '@/store/global/theme';
import ConfigProviderComponent from '@/component/config-provider/index.vue';

describe('config-provider', () => {
  it('component exist', () => {
    expect(ConfigProviderComponent).toBeTruthy();
  });

  it('slots', () => {
    const text = 'default slot';

    const wrapper = mount(ConfigProviderComponent, {
      slots: { default: () => h('h1', text) },
      global: { plugins: [createTestingPinia()] }
    });

    const themeStore = useThemeStore();
    themeStore.darkChange(true);

    expect(wrapper.find('.config-provider').find('h1').text()).toEqual(text);
  });
});
