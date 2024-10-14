<script lang="ts" setup>
import { useVModel } from "@vueuse/core";
import type { TextareaHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface TextAreaProps extends /* @vue-ignore*/ TextareaHTMLAttributes {
  modelValue?: string;
}

const props = defineProps<ClassProps & TextAreaProps>();
const emits = defineEmits<{
  (e: "update:modelValue", payload: string): void;
}>();

const restProps = computed(() => {
  const { class: _, value, ...delegated } = props;
  return delegated;
});

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
});
</script>

<template>
  <textarea
    :value="modelValue"
    v-bind="restProps"
    :class="
      cn(
        'flex min-h-20 w-full rounded-md border border-metal-100 bg-white px-3 py-2 text-body-4 ring-offset-2 placeholder:text-metal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-100 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-metal-800 dark:bg-metal-900 dark:text-white dark:placeholder:text-metal-300 dark:focus-visible:ring-metal-900',
        props.class,
      )
    "
    @input="modelValue = ($event.target as HTMLTextAreaElement).value" />
</template>
