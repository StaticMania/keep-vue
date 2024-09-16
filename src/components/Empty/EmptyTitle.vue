<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { isSlotValidHTMLElement } from "../../utils/slotUtils";

interface EmptyTitleProps extends /*@vue-ignore*/ HTMLAttributes {
  asChild?: boolean;
}

const props = defineProps<EmptyTitleProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const slot = useSlots();
const validSlot = isSlotValidHTMLElement(slot);
</script>
<template>
  <slot v-if="asChild && validSlot" v-bind="restProps"></slot>

  <h1
    v-else
    ref="HTMLHeadingElement"
    v-bind="restProps"
    :class="
      cn(
        'text-heading-5 font-medium text-metal-700 dark:text-white',
        props.class,
      )
    ">
    <slot></slot>
  </h1>
</template>
