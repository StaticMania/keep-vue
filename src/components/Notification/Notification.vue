<script lang="ts" setup>
import {
  useForwardPropsEmits,
  type DialogRootEmits,
  type DialogRootProps,
} from "radix-vue";
import type { NotificationPosition } from "./notificationTheme";
import { useProvideNotification } from "./useNotification";

interface NotificationProps {
  position?: NotificationPosition;
}

const props = withDefaults(defineProps<DialogRootProps & NotificationProps>(), {
  position: "bottomRight",
});
const changedPositionValue = computed(() => {
  return props.position;
});

const restProps = computed(() => {
  const { position, ...rest } = props;
  return rest;
});

const emits = defineEmits<DialogRootEmits>();
const forwardProps = useForwardPropsEmits(restProps, emits);

useProvideNotification(changedPositionValue);
</script>

<template>
  <DialogRoot v-bind="forwardProps">
    <slot></slot>
  </DialogRoot>
</template>
