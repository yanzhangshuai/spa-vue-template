import { fn } from 'vitest';
import { mount } from '@vue/test-utils';
import RefDemo from '@/component/modules/base/ref-demo/index.vue';
describe('ref-demo', async () => {
  it('component exist', () => {
    expect(RefDemo).toBeTruthy();
  });

  const wrapper = mount(RefDemo);

  it('onClick exist', () => {
    const mockFn = fn(wrapper.vm.onClick);
    mockFn();
    expect(mockFn).toBeCalledTimes(1);
  });
});
