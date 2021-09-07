<template>
  <div>
    <div class="text-[#f00]">我是demo1</div>
    <button @click="$router.push('/home/demo2')">Go To Demo2</button>
  </div>
  <!-- <input-number-test /> -->
  <!-- <button @click="$router.push('/home/demo2')">Go To Demo2</button>
  <tsx-demo /> -->
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>
