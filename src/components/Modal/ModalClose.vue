<script setup lang="ts">
import { DialogClose, type DialogCloseProps } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<DialogCloseProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <DialogClose v-bind="restProps" :class="cn(props.class)">
    <slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-5 fill-metal-600 dark:fill-white"
        viewBox="0 0 256 256">
        <path
          d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
      </svg>
    </slot>
  </DialogClose>
</template>
