<script setup lang="ts">
import type { DialogRootEmits, DialogRootProps } from "radix-vue";
import { useForwardPropsEmits, VisuallyHidden } from "radix-vue";

import { Modal, ModalContent, ModalTitle } from "~/src";
import Command from "./Command.vue";

const props = defineProps<DialogRootProps>();
const emits = defineEmits<DialogRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <!-- command dialog  -->
  <Modal v-bind="forwarded">
    <ModalContent
      class="w-[23rem] overflow-hidden rounded-xl bg-white px-5 pb-5 pt-2 text-metal-600 shadow-xLarge outline-none sm:w-[35rem] dark:border-none dark:bg-metal-900 dark:text-white">
      <Command
        class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-metal-600 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:p-2 [&_[cmdk-item]_svg]:h-4 [&_[cmdk-item]_svg]:w-4">
        <slot />
      </Command>

      <VisuallyHidden>
        <ModalTitle></ModalTitle>
        <ModalDescription></ModalDescription>
      </VisuallyHidden>
    </ModalContent>
  </Modal>
</template>
