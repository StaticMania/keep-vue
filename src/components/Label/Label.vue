<script lang="ts" setup>
import { computed, defineProps, type LabelHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

export interface LabelProps extends /* @vue-ignore */ LabelHTMLAttributes {
  asChild?: boolean;
}

const props = defineProps<LabelProps>();

const restProps = computed(() => {
  const { class: _, asChild, ...rest } = props;
  return rest;
});
</script>

<template>
  <slot v-if="asChild" v-bind="restProps"></slot>
  <label
    v-else
    v-bind="restProps"
    :class="
      cn(
        'inline cursor-pointer select-none text-body-4 font-medium text-metal-600 dark:text-metal-300',
        props.class,
      )
    ">
    <slot></slot>
  </label>
</template>
