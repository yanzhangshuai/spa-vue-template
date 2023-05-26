<script lang="ts" setup>
import { useThemeStore } from '@/store/global/theme'

const themeStore = useThemeStore()
const currentTheme = ref<'light' | 'dark'>()

watch(() => themeStore.dark, (newVal) => {
  currentTheme.value = newVal ? 'dark' : 'light'
}, { immediate: true })
</script>

<template>
  <a-layout class="!min-h-screen" :theme="currentTheme">
    <l-sider />

    <a-layout>
      <l-header />
      <l-body />
      <!-- <l-footer /> -->
    </a-layout>
  </a-layout>
</template>
