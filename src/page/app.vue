<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTitle } from '@/hook/web/title';
export default defineComponent({
  name: 'App',
  setup() {
    useTitle();
  }
});
</script>
