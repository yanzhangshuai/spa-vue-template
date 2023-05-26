<script lang="ts" setup>
defineSlots<{
  default: { msg: string }
  header: { msg: string }
}>()
</script>

<template>
  <div>
    <slot name="header" msg="header" />
    <slot msg="default" />
  </div>
</template>
