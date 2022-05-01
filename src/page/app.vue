<script lang="ts" setup>
import { useTitle } from '@/hook/web/title';

useTitle();
</script>

<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>
