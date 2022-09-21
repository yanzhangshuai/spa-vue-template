<script setup lang="ts">
import { AccountRouteName } from '@/router/route/modules/account/const';
</script>

<template>
  <div class="text-black">我是demo2</div>
  <button @click="$router.push({ name: AccountRouteName.LOGIN })">跳转login页面</button>
</template>
