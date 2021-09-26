<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts" setup>
import { useTitle } from '@/hook/web/title';
import { useStorage } from '@/plugin/storage';
useTitle();

const storage = useStorage();

storage.watch<string>('name', (newVal) => {
  console.log('storage---name: ' + newVal);
});
</script>
