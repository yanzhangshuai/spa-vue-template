<script lang="ts" setup>
</script>

<template>
  <button class="btn-primary" @click="$router.push({ name: 'account-login' })">跳转login页面</button>
  <http-demo />
  <global-props-demo />
</template>
