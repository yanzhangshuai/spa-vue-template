<script setup lang="ts">
import { usePageTitle } from '@/hook/web/title';

usePageTitle();
</script>

<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<style lang="less">
</style>
