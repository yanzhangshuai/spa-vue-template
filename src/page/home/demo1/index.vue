<script lang="ts" setup>
</script>

<template>
  <button class="btn-primary" @click="$router.push({ name: 'account-login' })">跳转login页面</button>
  <http-demo />
  <app-props-demo />
  <slot-demo>
    <template #default="{ msg }">
      <div>这是默认插槽: {{ msg }}</div>
    </template>
    <template #header="{ msg }">
      <div>这是header插槽:{{ msg }}</div>
    </template>
  </slot-demo>
</template>
