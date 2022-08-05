<script setup lang="ts">
import { useTitle } from '@/hook/web/title';
import { useUserStore } from '@/store/modules/user';

defineProps({});

useTitle();

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
