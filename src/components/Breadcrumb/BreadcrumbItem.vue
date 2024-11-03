<script lang="ts" setup>
import { computed, type LiHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface BreadcrumbItemProps extends /*@vue-ignore*/ LiHTMLAttributes {
  asChild?: boolean;
}
const props = withDefaults(defineProps<BreadcrumbItemProps & ClassProps>(), {
  class: "",
});

const restProps = computed(() => {
  const { class: _, asChild, ...rest } = props;
  return rest;
});
</script>
<template>
  <!-- as child props  -->
  <slot v-if="props.asChild" v-bind="$attrs"></slot>

  <!-- default li component  -->
  <li
    v-else
    v-bind="restProps"
    :class="cn('flex items-center gap-1.5', props.class)">
    <slot />
  </li>
</template>

<!-- active && 'rounded-lg bg-primary-50 px-1.5 py-1 text-primary-500', -->
