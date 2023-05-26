<script lang="ts" setup>
import { useThemeStore } from '@/store/global/theme'

const theme = useThemeStore()

theme.init()

function onThemeChange() {
  theme.darkChange(!theme.dark)
}
</script>

<template>
  <button class="btn" @click="onThemeChange">更换{{ theme.dark ? '亮色' : '暗黑' }}主题</button>
</template>
