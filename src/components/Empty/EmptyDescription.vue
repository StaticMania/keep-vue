<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { isSlotValidHTMLElement } from "../../utils/slotUtils";

interface EmptyDescriptionProps extends /*@vue-ignore*/ HTMLAttributes {
  asChild?: boolean;
}

const props = defineProps<EmptyDescriptionProps & ClassProps>();

// computed property that extracts and returns all the properties from the props object without the class property.
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const slots = useSlots();
const validSlot = isSlotValidHTMLElement(slots);
</script>
<template>
  <!-- user define element -->
  <slot v-if="asChild && validSlot" v-bind="restProps"></slot>

  <!-- default element  -->
  <p
    v-else
    v-bind="restProps"
    ref="HTMLParagraphElement"
    :class="
      cn(
        'text-center text-body-3 font-normal text-metal-400 dark:text-metal-300',
        props.class,
      )
    ">
    <slot></slot>
  </p>
</template>
