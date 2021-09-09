<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts" setup>
import { useStorage } from 'util/storage';
import { useTitle } from 'hook/web/title';

useTitle();
const storage = useStorage();
console.log("  storage.get('name')", storage.get('name'));
</script>
