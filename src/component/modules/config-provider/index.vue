<template>
  <a-config-provider :auto-insert-space-in-button="false" :locale="locale">
    <slot></slot>
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'dayjs/locale/zh-cn';
import locale from 'ant-design-vue/es/locale/zh_CN';
export default defineComponent({
  setup() {
    return {
      locale
    };
  }
});
</script>

<style scoped></style>
