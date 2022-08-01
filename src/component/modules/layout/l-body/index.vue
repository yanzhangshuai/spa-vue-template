<script lang="tsx" setup>
import { RouterView } from 'vue-router';
import { Layout } from '@/component/ui';

const render = () => {
  const style = { margin: '24px', padding: '24px', background: '#fff', height: '100%' };

  return (
    <Layout.Content class="flex">
      <div class="m-6 p-6 bg-white flex-1">
        <RouterView />
      </div>
    </Layout.Content>
  );
};
</script>

<template>
  <render />
</template>
