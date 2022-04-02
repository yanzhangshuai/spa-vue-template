<template>
  <div>
    <h1 class="text-2xl text-blue-400">This is home</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  components: {},
  setup() {}
});
</script>
