import { mount } from '@vue/test-utils';
import RefSetupDemo from '@/component/modules/base/ref-setup-demo/index.vue';

describe('ref-setup-demo', () => {
  it('component exist', () => {
    expect(RefSetupDemo).toBeTruthy();
  });

  const wrapper = mount(RefSetupDemo, {
    props: {
      name: 'test',
      id: 123
    }
  });

  it('props name test', () => {
    expect(wrapper.vm.name).toBe('test');
  });

  it('props emit', () => {
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('update:name');

    expect(Array.isArray(wrapper.emitted('update:name')[0])).toBe(true);
  });
});
