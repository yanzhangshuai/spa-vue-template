<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts" setup>
import { useTitle } from '@/hook/web/title';
import { useUserStore } from '@/store/modules/user';

defineProps({});

useTitle();

const userStore = useUserStore();

userStore.getUserInfo().then((res) => {
  console.log('res', res);
});
</script>
<style lang="less"></style>
