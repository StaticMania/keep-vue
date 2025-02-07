<script setup lang="ts">
import { SelectGroup, type SelectGroupProps } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<SelectGroupProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <SelectGroup :class="cn('w-full p-1', props.class)" v-bind="restProps">
    <slot />
  </SelectGroup>
</template>
