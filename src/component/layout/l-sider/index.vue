<script lang="ts" setup>
import { useThemeStore } from '@/store/global/theme'

const themeStore = useThemeStore()
const currentTheme = ref<'light' | 'dark'>()

watch(() => themeStore.dark, (newVal) => {
  currentTheme.value = newVal ? 'dark' : 'light'
}, { immediate: true })
</script>

<template>
  <a-layout-sider :collapsed-width="0" :theme="currentTheme" width="240" class="!bg-container">
    <div class="logo">
      <img class="h-7" :src="$app.logo" alt="">
      <h4 class="ml-4 text-2xl text-text">{{ $app.name }}</h4>
    </div>

    <l-menu />
  </a-layout-sider>
</template>

<style lang="less" scoped>
.logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
