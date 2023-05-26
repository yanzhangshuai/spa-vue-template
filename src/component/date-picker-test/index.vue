<script lang="tsx" setup>
function onChanged(data: unknown) {
  console.log(data)
}

function render() {
  return <a-date-picker onChange={onChanged} />
}
</script>

<template>
  <render />
</template>
