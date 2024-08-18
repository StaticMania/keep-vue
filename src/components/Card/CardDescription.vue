<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { isSlotValidHTMLElement } from "~/src/utils/slotUtils";
import { cn } from "../../utils/cn";

interface CardDescriptionProps {
  class?: HTMLAttributes["class"];
  asChild?: boolean;
}

const props = withDefaults(defineProps<CardDescriptionProps>(), {
  asChild: false,
  class: "",
});

// get the ref
const cardDescriptionRef = ref<HTMLElement | null>(null);
const setAsChildRef = (value: HTMLElement | null) =>
  (cardDescriptionRef.value = value);

const slot = useSlots();
const validElement = isSlotValidHTMLElement(slot);
</script>

<template>
  <slot
    v-if="props.asChild && validElement"
    v-bind="{ ...$attrs }"
    :ref="setAsChildRef"></slot>

  <p
    v-else
    v-bind="$attrs"
    ref="cardDescriptionRef"
    :class="
      cn(
        'text-body-4 font-normal text-metal-600 dark:text-metal-300',
        props.class,
      )
    ">
    <slot></slot>
  </p>
</template>
