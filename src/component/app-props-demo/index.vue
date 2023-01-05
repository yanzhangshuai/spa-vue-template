<script lang="ts" setup></script>

<template>
  <ul class="p-2 m-1 rounded-4" c-b="1 solid border">
    <li>NAME：{{ $app.name }}</li>
    <li>LOGO：<img :src="$app.imageResolve($app.logo)" alt="" width="25" c-b="rounded-50%" c-bg="text"></li>
    <li>VERSION：{{ $app.version }}</li>
    <li>IS DEV：{{ $app.dev }}</li>
    <li>CURRENT TIME：{{ $app.dateFormat($window.Date.now()) }}</li>
  </ul>
</template>

<style lang="less" scoped>
li {
  @apply text-xs py-1 list-none px-0 !important;
}
</style>
