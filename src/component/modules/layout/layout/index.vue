<template>
  <a-layout class="!min-h-screen main-layout">
    <layout-sider />
    <a-layout>
      <layout-header />
      <a-layout-content :style="{ margin: '24px' }">
        <div :style="{ padding: '24px', background: '#fff', height: '100%' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = (broken: boolean) => {
      console.log(broken);
    };

    return {
      onCollapse,
      onBreakpoint
    };
  }
});
</script>
