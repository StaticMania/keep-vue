<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface TableCaptionProps extends /* @vue-ignore*/ HTMLAttributes {}

const props = defineProps<TableCaptionProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <caption
    ref="HTMLTableCaptionElement"
    v-bind="restProps"
    :class="
      cn(
        'bg-white px-6 py-4 text-body-4 text-metal-900 dark:bg-metal-900 dark:text-white',
        props.class,
      )
    ">
    <slot />
  </caption>
</template>
