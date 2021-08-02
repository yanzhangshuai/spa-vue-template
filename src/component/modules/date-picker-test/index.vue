<template>
  <a-date-picker @change="onChanged" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    return {
      onChanged: (data: unknown) => {
        console.log(data);
      }
    };
  }
});
</script>

<style lang="less" scoped></style>
