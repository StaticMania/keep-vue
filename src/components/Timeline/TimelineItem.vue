<script lang="ts" setup>
import type { LiHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface TimelineItemProps extends /*@vue-ignore*/ LiHTMLAttributes {}

const props = defineProps<TimelineItemProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <li
    ref="HTMLLIElement"
    v-bind="restProps"
    :class="cn('max-w-max px-4', props.class)">
    <slot />
  </li>
</template>
