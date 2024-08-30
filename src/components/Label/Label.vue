<script lang="ts" setup>
import type { HTMLAttributes, LabelHTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";

export interface LabelProps extends /* @vue-ignore */ LabelHTMLAttributes {
  asChild?: boolean;
  class?: HTMLAttributes["class"];
}

const props = defineProps<LabelProps>();

const labelRef = ref<HTMLLabelElement>();

const restProps = computed(() => {
  const { class: _, asChild, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <slot v-if="asChild"></slot>
  <label
    ref="labelRef"
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
