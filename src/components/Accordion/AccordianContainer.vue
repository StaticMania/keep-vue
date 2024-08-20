<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

interface AccordionContainerProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<AccordionContainerProps>();

console.log(open);
</script>
<template>
  <div></div>
</template>
