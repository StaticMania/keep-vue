<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/helpers/cn";
import { isSlotValidHTMLElement } from "~/src/utils/slotUtils";

interface AvatarBadgeProps {
  class?: HTMLAttributes["class"];
  asChild?: boolean;
}
const props = defineProps<AvatarBadgeProps>();

const avatarBadgeRef = ref<HTMLSpanElement>();

const slots = useSlots();

const slotIsValid = isSlotValidHTMLElement(slots);
</script>
<template>
  <span
    v-if="props.asChild && slotIsValid"
    v-bind="$attrs"
    ref="avatarBadgeRef"
    :class="cn(props.class)">
    <slot></slot>
  </span>

  <span
    v-else
    v-bind="$attrs"
    ref="avatarBadgeRef"
    :class="
      cn(
        'absolute bottom-0 right-0 size-3 rounded-full bg-success-500',
        props.class,
      )
    "></span>
</template>
