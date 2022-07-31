<script lang="tsx" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const render = () => {
  return (
    <>
      <div class="text-block">我是demo2</div>
      <button onClick={() => router.push('/account')}>跳转login页面</button>
    </>
  );
};
</script>

<template>
  <render />
</template>
