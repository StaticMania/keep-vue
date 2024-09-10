<script lang="ts" setup>
import {
  DialogPortal,
  useForwardPropsEmits,
  type DialogContentEmits,
  type DialogContentProps,
} from "radix-vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<DialogContentProps & ClassProps>();

const emits = defineEmits<DialogContentEmits>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const forwardPropsAndEmit = useForwardPropsEmits(restProps, emits);
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      :class="
        cn(
          'fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        )
      ">
      <DialogContent
        v-bind="forwardPropsAndEmit"
        :class="
          cn(
            'fixed left-1/2 top-1/2 z-50 grid w-[22rem] -translate-x-1/2 -translate-y-1/2 gap-y-5 border bg-white p-5 shadow-xLarge duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-xl',
            props.class,
          )
        ">
        <slot></slot>
      </DialogContent>
    </DialogOverlay>
  </DialogPortal>
</template>
