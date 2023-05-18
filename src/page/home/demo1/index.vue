<script lang="ts" setup>
</script>

<template>
  <a-button type="primary" @click="$router.push({ name: 'account-login' })">跳转login页面</a-button>
  <http-demo />
  <app-props-demo />
  <date-picker-test />
  <slot-demo>
    <template #default="{ msg }">
      <div>这是默认插槽: {{ msg }}</div>
    </template>
    <template #header="{ msg }">
      <div>这是header插槽:{{ msg }}</div>
    </template>
  </slot-demo>
</template>
