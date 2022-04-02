<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts" setup>
import { useUserStore } from 'store/user';
import { useTitle } from 'hook/web/title';
import { useStorage } from 'plugin/storage';

defineProps({});

const userStore = useUserStore();

userStore.getUserInfo().then((res) => {
  console.log('res', res);
});
useTitle();
const storage = useStorage();
console.log("  storage.get('name')", storage.get('name'));
</script>
<style lang="less"></style>
