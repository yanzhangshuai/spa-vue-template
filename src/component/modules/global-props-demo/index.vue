<script setup lang="ts"></script>

<template>
  <li>APP_NAME：{{ $globalProps.APP_NAME }}</li>
  <li>APP_LOGO：<img :src="$globalProps.APP_LOGO" alt="" width="50"></li>
  <li>APP_VERSION：{{ $globalProps.APP_VERSION }}</li>
  <li>APP_TITLE：{{ $globalProps.APP_TITLE }}</li>
  <li>FILE_PATH：{{ $globalProps.FILE_PATH_PREFIX }}</li>
  <li>IS DEV：{{ $globalProps.DEV }}</li>
  <li>CURRENT TIME：{{ $globalProps.dateFormat($window.Date.now()) }}</li>
</template>

<style lang="less" scoped>
li {
  @apply font-bold py-1 list-none px-0 text-red-300 rounded !important;
}
</style>
