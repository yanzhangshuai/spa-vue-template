import { mount } from '@vue/test-utils';
import RefDemo from '@/component/modules/ref-demo/index.vue';

describe('ref-demo', () => {
  it('component exist', () => {
    expect(RefDemo).toBeTruthy();
  });

  const wrapper = mount(RefDemo);

  it('onClick exist', () => {
    const mockFn = vi.fn(wrapper.vm.onClick);
    mockFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
