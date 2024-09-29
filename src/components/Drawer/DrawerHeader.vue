<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface DrawerHeaderProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<DrawerHeaderProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    v-bind="restProps"
    :class="cn('grid gap-1.5 p-4 text-center sm:text-left', props.class)">
    <slot />
  </div>
</template>
