<script lang="ts" setup>
import type { InputHTMLAttributes } from "vue";
import { computed, ref } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface NumberInputBoxProps
  extends /* @vue-ignore*/ InputHTMLAttributes {
  min?: number;
  max?: number;
}

const props = withDefaults(defineProps<NumberInputBoxProps & ClassProps>(), {
  min: 0,
  max: 100,
});

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const numberInputRef = ref<HTMLInputElement>();

const proxyValue = defineModel<number>();
</script>

<template>
  <input
    ref="numberInputRef"
    v-bind="restProps"
    v-model="proxyValue"
    :min="props.min"
    :max="props.max"
    type="number"
    :class="
      cn(
        'flex-auto bg-transparent px-3 py-2.5 text-center text-body-3 font-medium text-metal-900 outline-none dark:text-white dark:placeholder:text-metal-300 dark:focus-visible:ring-metal-900',
        props.class,
      )
    " />
</template>
