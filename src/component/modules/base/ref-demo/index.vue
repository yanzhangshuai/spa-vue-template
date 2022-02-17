<template>
  <h1>ref-demo</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      onClick: () => {
        console.log('RefDemoComponent');
      }
    };
  }
});
</script>
<style lang="less" scoped>
h1 {
  color: @primary;
}
</style>
