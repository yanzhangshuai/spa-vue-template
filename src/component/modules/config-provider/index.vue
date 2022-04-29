<script lang="ts" setup>
import 'dayjs/locale/zh-cn';
import locale from 'ant-design-vue/es/locale/zh_CN';
</script>

<template>
  <a-config-provider :auto-insert-space-in-button="false" :locale="locale">
    <slot />
  </a-config-provider>
</template>

<style lang="less" scoped></style>
