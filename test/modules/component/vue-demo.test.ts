import { mount } from '@vue/test-utils';
import VueDemo from '@/component/modules/base/vue-demo/index.vue';

describe('vue-demo', () => {
  it('component exist', () => {
    expect(VueDemo).toBeTruthy();
  });

  const wrapper = mount(VueDemo);

  it('content exist', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
