<template>
  <div class="config-provider">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'dayjs/locale/zh-cn';
export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped></style>
