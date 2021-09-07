<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts">
import { useTitle } from '@/hook/web/title';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    useTitle();
  }
});
</script>
