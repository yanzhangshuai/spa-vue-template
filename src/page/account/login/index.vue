<template>
 <div>
   <h1>This is Login</h1>
   <button @click="$router.push('/account/register')">Go To Register</button>
 </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>
