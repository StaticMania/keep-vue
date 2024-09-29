<script lang="ts" setup>
import {
  PopoverContent,
  PopoverPortal,
  useForwardPropsEmits,
  type PopoverContentEmits,
  type PopoverContentProps,
} from "radix-vue";
import {
  computed,
  defineEmits,
  defineOptions,
  defineProps,
  withDefaults,
} from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../Carousel/interface";

export interface PopoverContentSideProps {
  side: "top" | "bottom" | "left" | "right";
}

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<PopoverContentProps & PopoverContentSideProps & ClassProps>(),
  {
    align: "center",
    sideOffset: 4,
    side: "bottom",
  },
);

const emits = defineEmits<PopoverContentEmits>();

const restProps = computed(() => {
  const { class: _, side, ...rest } = props;
  return rest;
});

const forwardPropsAndEmits = useForwardPropsEmits(restProps, emits);
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      :side="props.side"
      v-bind="{ ...forwardPropsAndEmits, ...$attrs }"
      :class="
        cn(
          'z-50 rounded-xl bg-white p-4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:bg-metal-900',
          props.class,
        )
      ">
      <slot></slot>
    </PopoverContent>
  </PopoverPortal>
</template>
