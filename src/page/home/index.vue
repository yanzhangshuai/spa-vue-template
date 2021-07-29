<template>
  <h1 class="text-2xl text-blue-400">This is home</h1>

  <counter />

  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  components: {},
  setup() {}
});
</script>
