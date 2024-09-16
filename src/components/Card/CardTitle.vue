<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { isSlotValidHTMLElement } from "../../utils/slotUtils";

interface CardTitleProps extends /*@vue-ignore*/ HTMLAttributes {
  asChild?: boolean;
}

const props = defineProps<CardTitleProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, asChild, ...rest } = props;
  return rest;
});

const slot = useSlots();
const validElement = isSlotValidHTMLElement(slot);
</script>

<template>
  <!-- user specific -->
  <slot v-if="props.asChild && validElement" v-bind="restProps"></slot>

  <!-- default -->
  <p
    v-else
    v-bind="restProps"
    ref="HTMLParagraphElement"
    :class="
      cn(
        'text-heading-6 font-semibold text-metal-800 dark:text-white',
        props.class,
      )
    ">
    <slot />
  </p>
</template>
