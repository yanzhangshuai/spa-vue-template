<script lang="ts" setup>
</script>

<template>
  <ul class="p-2 m-1 rounded-4" c-b="1 solid border">
    <li>APP_NAME：{{ $globalProps.APP_NAME }}</li>
    <li>APP_LOGO：<img :src="$globalProps.APP_LOGO" alt="" width="25" c-b="rounded-50%" c-bg="text"></li>
    <li>APP_VERSION：{{ $globalProps.APP_VERSION }}</li>
    <li>APP_TITLE：{{ $globalProps.APP_TITLE }}</li>
    <li>FILE_PATH：{{ $globalProps.FILE_PATH_PREFIX }}</li>
    <li>IS DEV：{{ $globalProps.DEV }}</li>
    <li>CURRENT TIME：{{ $globalProps.dateFormat($window.Date.now()) }}</li>
  </ul>
</template>

<style lang="less" scoped>
li {
  @apply text-xs py-1 list-none px-0 !important;
}
</style>
