<script lang="ts" setup>
</script>

<template>
  <a-button type="primary" @click="$router.push({ name: 'account-login' })">跳转login页面</a-button>
  <http-demo />
  <app-props-demo />
  <date-picker-test />
</template>
