<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts" setup>
import { useStorage } from 'plugin/storage';
import { useTitle } from 'hook/web/title';
defineProps({});
useTitle();
const storage = useStorage();
console.log("  storage.get('name')", storage.get('name'));
</script>
