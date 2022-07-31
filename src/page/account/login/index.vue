<script lang="tsx" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const render = () => {
  return (
    <>
      <h1>This is Login</h1>
      <button onClick={() => router.push('/account/register')}>跳转register页面</button>
    </>
  );
};
</script>

<template>
  <render />
</template>
