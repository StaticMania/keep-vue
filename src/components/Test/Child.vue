<script setup>
const value = ref("");
</script>

<template>
  <div>
    <Input
      v-model="value"
      type="number"
      placeholder="enter text"
      class="w-72" />
  </div>
</template>
