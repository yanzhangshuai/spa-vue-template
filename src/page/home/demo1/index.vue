<template>
  <div>
    <div class="text-block" @click="$window.alert('1')">我是demo1</div>
    <button class="text-red-700 dark:text-green-400" @click="$router.push('/home/demo2')">Go To Demo2</button>
    <global-props-demo />
    <date-picker-test />
  </div>
</template>

<script lang="ts">
import { useStorage } from '@/plugin/storage';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const storage = useStorage();
    storage.set('name', 'value');
    return {};
  }
});
</script>
<style lang="less" scoped>
div {
  color: @primary;
}

li {
  @apply font-bold py-1 list-none px-0 text-red-300 rounded !important;
}
</style>
