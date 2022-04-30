<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import 'dayjs/locale/zh-cn';
export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<template>
  <div class="config-provider">
    <slot />
  </div>
</template>

<style lang="less" scoped></style>
