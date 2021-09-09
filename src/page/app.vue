<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts">
import { useStorage } from 'util/storage';
import { defineComponent } from 'vue';
import { useTitle } from 'hook/web/title';

export default defineComponent({
  name: 'App',
  setup() {
    useTitle();
    const storage = useStorage();
    console.log("  storage.get('name')", storage.get('name'));
  }
});
</script>
