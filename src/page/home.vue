<script lang="ts" setup>
</script>

<template>
  <h1 class="text-2xl">This is home</h1>
  <router-view />
</template>

<route lang="yaml">
redirect:
  name: home-demo1
meta:
  auth: true
</route>
