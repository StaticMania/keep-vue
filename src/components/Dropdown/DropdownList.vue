<script setup lang="ts">
import { DropdownMenuGroup, type DropdownMenuGroupProps } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<DropdownMenuGroupProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <DropdownMenuGroup :class="cn('', props.class)" v-bind="restProps">
    <slot />
  </DropdownMenuGroup>
</template>
