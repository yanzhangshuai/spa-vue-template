import { mount } from '@vue/test-utils';

import TsxDemoComponent from '@/component/tsx-demo';

describe('tsx-demo', () => {
  it('component exist', () => {
    expect(TsxDemoComponent).toBeTruthy();
  });

  const wrapper = mount(TsxDemoComponent);

  it('h1 exist', () => {
    expect(wrapper.find('h1').text()).toEqual('我是tsx-demo');
  });

  it('li exist', () => {
    const li = wrapper.findAll('li');
    expect(li.length).toBe(5);

    const mockFn = vi.fn(li[0].element.onclick);
    mockFn(null);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
