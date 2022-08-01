<script lang="tsx" setup>
import Sider from './sider/index.vue';
import Header from './l-header/index.vue';
import Body from './l-body/index.vue';
import Footer from './l-footer/index.vue';
import { Layout } from '@/component/ui';

const render = () => {
  return (
    <Layout class='!min-h-screen'>
      <Sider />

      <Layout>

        <Header />

        <Body />

        <Footer />

      </Layout>
    </Layout>
  );
};
</script>

<template>
  <render />
</template>
