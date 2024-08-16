<script setup lang="ts">
// Define props for the AlertBody
defineProps({
  class: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div ref="alertBody" v-bind="$attrs" :class="class">
    <slot></slot>
  </div>
</template>
