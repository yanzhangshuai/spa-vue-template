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
<script lang="ts" setup>
import LayoutSider from './layout-sider/index.vue';
import LayoutHeader from './layout-header/index.vue';
</script>
