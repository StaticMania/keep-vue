<script lang="ts" setup>
import {
  DialogRoot,
  useForwardPropsEmits,
  type DialogRootEmits,
  type DialogRootProps,
} from "radix-vue";
import { computed } from "vue";
import type { NotificationPosition } from "./notificationTheme";
import { useProvideNotification } from "./useNotification";

export interface NotificationProps {
  position?: NotificationPosition;
}

const props = withDefaults(defineProps<DialogRootProps & NotificationProps>(), {
  position: "bottomRight",
});

const restProps = computed(() => {
  const { position, ...rest } = props;
  return rest;
});

const emits = defineEmits<DialogRootEmits>();
const forwardProps = useForwardPropsEmits(restProps, emits);

const changedPositionValue = computed(() => {
  return props.position;
});
useProvideNotification(changedPositionValue);
</script>

<template>
  <DialogRoot v-bind="forwardProps">
    <slot></slot>
  </DialogRoot>
</template>
