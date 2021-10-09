<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts" setup>
import { useTitle } from '@/hook/web/title';
import { useStorage } from '@/plugin/storage';
defineProps({});
useTitle();
const storage = useStorage();
console.log("  storage.get('name')", storage.get('name'));
</script>
