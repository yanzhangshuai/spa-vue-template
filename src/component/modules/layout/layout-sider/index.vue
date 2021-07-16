<template>
  <a-layout-sider collapsed-width="0" width="240">
    <div class="logo">
      <img class="h-7" src="https://avatars.githubusercontent.com/u/31086862?s=60&v=4" />
      <h4 class="ml-4 text-2xl text-white">这是title</h4>
    </div>
    <layout-menu />
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
