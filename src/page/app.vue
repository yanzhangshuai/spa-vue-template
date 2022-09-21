<script setup lang="ts">
import { useUserStore } from '@/store/modules/user';
import { usePageTitle } from '@/hook/web/title';

defineProps({});

usePageTitle();

const userStore = useUserStore();

userStore.getUserInfo().then((res) => {
  console.log('res', res);
});
</script>

<template>
  <m-config-provider>
    <router-view />
  </m-config-provider>
</template>

<style lang="less">
</style>
