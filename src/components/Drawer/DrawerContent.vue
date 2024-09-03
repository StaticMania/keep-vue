<script lang="ts" setup>
import {
  useForwardPropsEmits,
  type DialogContentEmits,
  type DialogContentProps,
} from "radix-vue";
import { DrawerContent, DrawerPortal, type DrawerDirection } from "vaul-vue";
import type { HtmlHTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import DrawerOverlay from "./DrawerOverlay.vue";
import { keepDrawerTheme } from "./drawerTheme";
import { useDrawerStoreOrThrow } from "./useDrawerStore";

const props = defineProps<
  DialogContentProps & { class?: HtmlHTMLAttributes["class"] }
>();
const emits = defineEmits<DialogContentEmits>();

const forwardProps = useForwardPropsEmits(props, emits);

const { position } = useDrawerStoreOrThrow()!;
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
      <div
        :class="
          cn(
            keepDrawerTheme.bar.base,
            keepDrawerTheme.bar.position[position as DrawerDirection],
            props.class,
          )
        " />

      <slot></slot>
    </DrawerContent>
  </DrawerPortal>
</template>
