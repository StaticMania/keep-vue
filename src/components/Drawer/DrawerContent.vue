<script lang="ts" setup>
import {
  useForwardPropsEmits,
  type DialogContentEmits,
  type DialogContentProps,
} from "radix-vue";
import { DrawerContent, DrawerPortal, type DrawerDirection } from "vaul-vue";
import { defineEmits, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import DrawerOverlay from "./DrawerOverlay.vue";
import { keepDrawerTheme } from "./drawerTheme";
import { useDrawer } from "./useDrawerStore";

const props = defineProps<DialogContentProps & ClassProps>();
const emits = defineEmits<DialogContentEmits>();

const forwardProps = useForwardPropsEmits(props, emits);

const { position } = useDrawer()!;
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent
      v-bind="forwardProps"
      :class="
        cn(
          keepDrawerTheme.content.base,
          keepDrawerTheme.content.position[position as DrawerDirection],
          props.class,
        )
      ">
      <!-- bar  -->

      <slot></slot>
    </DrawerContent>
  </DrawerPortal>
</template>
