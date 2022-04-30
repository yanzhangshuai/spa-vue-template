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
    <h2>我是demo2</h2>
    <button @click="$router.push('/account')">Go To Login</button>
  </div>
</template>
