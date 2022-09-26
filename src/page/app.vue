<script lang="ts" setup>
import { usePageTitle } from '@/hook/web/title';

usePageTitle();
</script>

<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>
