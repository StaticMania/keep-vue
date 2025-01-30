<script lang="ts" setup>
import { useForwardPropsEmits } from "radix-vue";
import {
  DrawerRoot,
  type DrawerDirection,
  type DrawerRootEmits,
  type DrawerRootProps,
} from "vaul-vue";
import { computed } from "vue";
import type { ClassProps } from "../../utils/interface";
import { useProvideDrawer } from "./useDrawerStore";

export interface DrawerProps {
  position?: DrawerDirection;
}

const props = withDefaults(
  defineProps<DrawerRootProps & DrawerProps & ClassProps>(),
  {
    shouldScaleBackground: true,
    position: "bottom",
  },
);
const emits = defineEmits<DrawerRootEmits>();

const restProps = computed(() => {
  const { direction, position, class: _, ...rest } = props;
  return rest;
});

const forwardProps = useForwardPropsEmits(restProps, emits);

const updatedPosition = computed(() => {
  return props.position;
});

useProvideDrawer(updatedPosition);
</script>

<template>
  <DrawerRoot :direction="props.position" v-bind="forwardProps">
    <slot />
  </DrawerRoot>
</template>
