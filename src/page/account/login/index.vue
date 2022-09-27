<script lang="ts" setup>
import { AccountRouteName } from '@/router/route/modules/account/const';
</script>

<template>
  <h1>This is Login</h1>
  <button @click="$router.push({ name: AccountRouteName.REGISTER })">跳转register页面</button>
</template>
