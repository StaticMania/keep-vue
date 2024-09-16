<script lang="ts" setup>
import { type LiHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { isSlotValidHTMLElement } from "../../utils/slotUtils";

interface BreadcrumbItemProps extends /*@vue-ignore*/ LiHTMLAttributes {
  asChild?: boolean;
}
const props = withDefaults(defineProps<BreadcrumbItemProps & ClassProps>(), {
  class: "",
});

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const slot = useSlots();
const validElement = isSlotValidHTMLElement(slot);
</script>
<template>
  <!-- as child props  -->
  <slot v-if="props.asChild && validElement" v-bind="restProps"></slot>

  <!-- default li component  -->
  <li
    v-else
    v-bind="restProps"
    ref="HTMLLIElement"
    :class="
      cn(
        'flex cursor-pointer items-center gap-1.5 text-body-4 font-medium text-metal-900 transition-colors duration-300 hover:text-primary-500 dark:text-white dark:hover:text-primary-500',
        props.class,
      )
    ">
    <slot></slot>
  </li>
</template>
