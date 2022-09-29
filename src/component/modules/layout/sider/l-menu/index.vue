<script setup lang="tsx">
import { h } from 'vue';

import { Menu } from '@/component/ui';

import { menus } from './menu';

import type { Menu as MenuType } from './menu';

const theme = 'dark';

const mode = 'inline';

const selectedKeys = $ref(['5', '5-1']);

const openKeys = $ref(['5', '5-1']);

const mTitle = (menu: MenuType) => {
  return <span>{menu.title}</span>;
};

const mNode = (menus: Array<MenuType>) => {
  return menus.map((m) => {
    if (m.children)
      return <Menu.SubMenu key={m.id} title={mTitle(m)}>{mNode(m.children)}</Menu.SubMenu>;
    else
      return <Menu.Item key={m.id}>{mTitle(m)}</Menu.Item>;
  });
};

const render = () => {
  return (
    <Menu v-models={[[selectedKeys, 'selectedKeys'], [openKeys, 'openKeys']]} theme={theme} mode={mode}>
      {mNode(menus)}
    </Menu>
  );
};
</script>

<template>
  <render />
</template>
