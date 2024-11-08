<script setup lang="ts">
import {
  DropdownMenuContent,
  type DropdownMenuContentEmits,
  type DropdownMenuContentProps,
  DropdownMenuPortal,
  useForwardPropsEmits,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { dropdownTheme } from "./dropdownTheme";

export interface DropdownContentProps {
  showArrow?: boolean;
}
const props = withDefaults(
  defineProps<DropdownMenuContentProps & DropdownContentProps & ClassProps>(),
  {
    sideOffset: 4,
    class: "",
  },
);
const emits = defineEmits<DropdownMenuContentEmits>();

const restProps = computed(() => {
  const { class: _, showArrow, ...rest } = props;

  return rest;
});

const forwarded = useForwardPropsEmits(restProps, emits);
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      v-bind="forwarded"
      :class="cn(dropdownTheme.content, props.class)">
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
