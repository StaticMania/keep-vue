<script lang="ts" setup>
import type { TableHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface TableProps extends /* @vue-ignore */ TableHTMLAttributes {}

const props = defineProps<TableProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div id="tableScrollBar" class="relative w-full overflow-auto">
    <table
      v-bind="restProps"
      :class="
        cn(
          'w-full overflow-hidden rounded-2xl bg-white text-body-4 dark:bg-metal-900',
          props.class,
        )
      ">
      <slot />
    </table>
  </div>
</template>
