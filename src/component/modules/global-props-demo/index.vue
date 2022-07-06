<script  lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<template>
  <ul>
    <li class="text-block">APP_NAME：{{ $globalProps.APP_NAME }}</li>
    <li>APP_LOGO：<img :src="$globalProps.APP_LOGO" alt="" width="50"></li>
    <li>APP_VERSION：{{ $globalProps.APP_VERSION }}</li>
    <li>APP_TITLE：{{ $globalProps.APP_TITLE }}</li>
    <li>FILE_PATH：{{ $globalProps.FILE_PATH_PREFIX }}</li>
    <li>IS DEV：{{ $globalProps.DEV }}</li>
    <li>CURRENT TIME：{{ $globalProps.dateFormat($window.Date.now()) }}</li>
  </ul>
</template>

<style lang="less" scoped></style>
