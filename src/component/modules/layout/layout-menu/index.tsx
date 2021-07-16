import { defineComponent, h, ref } from 'vue';
import menus, { Menu as MenuData } from './menu';
import { Menu } from '@/component/antd';

export default defineComponent({
  setup() {
    const selectedKeys = ref(['5', '5-1']);
    const openKeys = ref(['5', '5-1']);

    const menuNode = (menus: Array<MenuData>) => {
      return menus.map((menu) => {
        return !menu.children ? (
          <Menu.Item key={menu.id}>
            <span>{menu.title}</span>
          </Menu.Item>
        ) : (
          <Menu.SubMenu
            key={menu.id}
            title={h(() => (
              <span>{menu.title}</span>
            ))}>
            {menuNode(menu.children)}
          </Menu.SubMenu>
        );
      });
    };
    return () => (
      <>
        <Menu
          v-models={[
            [selectedKeys.value, 'selectedKeys'],
            [openKeys.value, 'openKeys']
          ]}
          theme='dark'
          mode='inline'>
          {menuNode(menus)}
        </Menu>
      </>
    );
  }
});
