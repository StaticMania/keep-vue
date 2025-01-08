<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface ButtonGroupProps extends /*@vue-ignore*/ HTMLAttributes {}
const props = defineProps<ButtonGroupProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div v-bind="restProps" :class="cn('flex items-center', props.class)">
    <slot />
  </div>
</template>
