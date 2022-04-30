<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<template>
  <div>
    <div class="text-block" @click="$window.alert('1')">我是demo1</div>
    <button class="text-red-700 dark:text-green-400" @click="$router.push('/home/demo2')">Go To Demo2</button>
    <http-demo />
    <global-props-demo />
    <date-picker-test />
  </div>
</template>
<style lang="less" scoped>
div {
  color: @primary;
}
</style>
