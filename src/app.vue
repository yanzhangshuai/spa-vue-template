<script setup lang="ts">
import { usePageTitle } from '@/hook/web/title';
usePageTitle();
</script>

<template>
  <m-config-provider>
    <router-view />
  </m-config-provider>
</template>

<style lang="less">
</style>
