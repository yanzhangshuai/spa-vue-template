<script lang="tsx" setup>
import { Menu } from 'ant-design-vue';

import { useThemeStore } from '@/store/global/theme';

import { menus } from './menu';

import type { Menu as MenuType } from './menu';

const mode = 'inline';

const themeStore = useThemeStore();
const currentTheme = ref<'light' | 'dark'>('light');

watch(() => themeStore.dark, (newVal) => {
  currentTheme.value = newVal ? 'dark' : 'light';
}, { immediate: true });

const selectedKeys = ref(['5', '5-1']);

const openKeys = ref(['5', '5-1']);

function mTitle(menu: MenuType) {
  return <span>{menu.title}</span>;
}

function mNode(menus: Array<MenuType>) {
  return menus.map((m) => {
    if (m.children)
      return <Menu.SubMenu key={m.id} title={mTitle(m)} class="!text-text">{mNode(m.children)}</Menu.SubMenu>;
    else
      return <Menu.Item key={m.id} class="!text-text">{mTitle(m)}</Menu.Item>;
  });
}

function render() {
  return (
    <Menu v-models={[[selectedKeys.value, 'selectedKeys'], [openKeys.value, 'openKeys']]} theme={unref(currentTheme)} mode={mode} class="!text-text  !bg-container">
      {mNode(menus)}
    </Menu>
  );
}
</script>

<template>
  <render />
</template>
