<template>
  <div>我是demo11</div>
  <!-- <input-number-test /> -->
  <button @click="$router.push('/home/demo2')">Go To Demo2</button>
  <tsx-demo />
  <date-picker-test></date-picker-test>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>
