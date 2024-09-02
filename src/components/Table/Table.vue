<script lang="ts" setup>
import type { HTMLAttributes, TableHTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";

interface TableProps extends /* @vue-ignore */ TableHTMLAttributes {
  class?: HTMLAttributes["class"];
}

const props = defineProps<TableProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const tableRef = ref<HTMLTableElement>();
</script>

<template>
  <div id="tableScrollBar" class="relative w-full overflow-auto">
    <table
      ref="tableRef"
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
