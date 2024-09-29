<script lang="ts" setup>
import {
  DialogPortal,
  useForwardPropsEmits,
  type DialogContentEmits,
  type DialogContentProps,
} from "radix-vue";
import { computed, defineEmits, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import {
  notificationTheme,
  type NotificationPosition,
} from "./notificationTheme";
import { useNotification } from "./useNotification";

const props = defineProps<DialogContentProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const emits = defineEmits<DialogContentEmits>();

const forwardPropsAndEmit = useForwardPropsEmits(restProps, emits);

const { position } = useNotification();
</script>

<template>
  <DialogPortal>
    <DialogContent
      v-bind="forwardPropsAndEmit"
      :class="
        cn(
          notificationTheme.base,
          notificationTheme.position[position as NotificationPosition],
          props.class,
        )
      ">
      <slot></slot>
    </DialogContent>
  </DialogPortal>
</template>

<!-- 
bottom right
 'fixed bottom-5 right-8 z-50 grid w-[22rem] gap-y-5 border bg-white p-5 shadow-xLarge data-[state=closed]:duration-300 data-[state=open]:duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full sm:rounded-xl' -->

<!-- 
top left
'fixed left-8 top-5 z-50 grid w-[22rem] gap-y-5 border bg-white p-5 shadow-xLarge data-[state=closed]:duration-300 data-[state=open]:duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-top-full sm:rounded-xl', -->

<!-- top center
 'fixed inset-x-0 top-5 z-50 mx-auto grid w-[22rem] gap-y-3 border bg-white p-5 shadow-xLarge data-[state=closed]:duration-300 data-[state=open]:duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-full data-[state=open]:slide-in-from-top-full sm:rounded-xl' -->

<!-- top right

'fixed right-8 top-5 z-50 grid w-[22rem] gap-y-5 border bg-white p-5 shadow-xLarge data-[state=closed]:duration-300 data-[state=open]:duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:rounded-xl' -->

<!-- 
bottom left 

'duration-400 fixed bottom-5 left-8 z-50 grid w-[22rem] gap-y-5 border bg-white p-5 shadow-xLarge data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-bottom-full sm:rounded-xl' -->
