<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { isSlotValidHTMLElement } from "../../utils/slotUtils";

interface CardDescriptionProps extends /*@vue-ignore*/ HTMLAttributes {
  asChild?: boolean;
}
const props = withDefaults(defineProps<CardDescriptionProps & ClassProps>(), {
  asChild: false,
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
  <slot v-if="props.asChild && validElement" v-bind="restProps"></slot>

  <p
    v-else
    v-bind="restProps"
    ref="HTMLParagraphElement"
    :class="
      cn(
        'text-body-4 font-normal text-metal-600 dark:text-metal-300',
        props.class,
      )
    ">
    <slot></slot>
  </p>
</template>
