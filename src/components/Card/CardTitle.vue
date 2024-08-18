<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { isSlotValidHTMLElement } from "~/src/utils/slotUtils";
import { cn } from "../../utils/cn";

interface CardTitleProps {
  class?: HTMLAttributes["class"];
  asChild?: boolean;
}

const props = defineProps<CardTitleProps>();

// get the ref
const cardTitleDefaultRef = ref<HTMLElement | null>(null);
const setAsChildRef = (value: HTMLElement | null) =>
  (cardTitleDefaultRef.value = value);

const slot = useSlots();
const validElement = isSlotValidHTMLElement(slot);
</script>

<template>
  <!-- user specific -->
  <slot
    :ref="setAsChildRef"
    v-if="props.asChild && validElement"
    v-bind="{
      ...$attrs,
    }" />

  <!-- default -->
  <p
    v-else
    v-bind="$attrs"
    ref="cardTitleDefaultRef"
    :class="
      cn(
        'text-heading-6 font-semibold text-metal-800 dark:text-white',
        props.class,
      )
    ">
    <slot />
  </p>
</template>
