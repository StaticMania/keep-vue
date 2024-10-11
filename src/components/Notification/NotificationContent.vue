<script lang="ts" setup>
import {
  DialogContent,
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
          'space-y-1.5',
          props.class,
        )
      ">
      <slot></slot>
    </DialogContent>
  </DialogPortal>
</template>
