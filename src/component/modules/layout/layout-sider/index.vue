<script lang="ts" setup></script>

<template>
  <a-layout-sider collapsed-width="0" width="240">
    <div class="logo">
      <img class="h-7" :src="$globalProps.APP_LOGO" alt="">
      <h4 class="ml-4 text-2xl text-white">{{ $globalProps.APP_NAME }}</h4>
    </div>
    <!-- <layout-menu /> -->
  </a-layout-sider>
</template>

<style lang="less" scoped>
.logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
