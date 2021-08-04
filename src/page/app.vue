<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App'
});
</script>
