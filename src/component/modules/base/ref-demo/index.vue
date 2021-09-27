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
