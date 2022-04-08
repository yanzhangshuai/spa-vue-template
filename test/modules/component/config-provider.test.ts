import { h } from 'vue';
import { mount } from '@vue/test-utils';
import ConfigProviderComponent from '@/component/modules/config-provider/index.vue';

describe('config-provider', () => {
  it('component exist', () => {
    expect(ConfigProviderComponent).toBeTruthy();
  });

  it('slots', () => {
    const wrapper = mount(ConfigProviderComponent, {
      slots: {
        default: () => h('h1', 'default slot')
      }
    });
    expect(wrapper.find('.config-provider').find('h1').text()).toEqual('default slot');
  });
});
