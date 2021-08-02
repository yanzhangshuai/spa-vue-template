<template>
  <div>
    <h1>123</h1>
    <router-view />
    <h2>132</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'App',
  setup() {
    return {};
  }
});
</script>
