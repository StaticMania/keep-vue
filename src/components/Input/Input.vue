<script lang="ts" setup>
import { useVModel } from "@vueuse/core";
import type { InputHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { inputTheme } from "./inputTheme";

export interface InputProps extends /* @vue-ignore */ InputHTMLAttributes {
  type?: string;
  // eslint-disable-next-line vue/require-default-prop
  defaultValue?: string | number;
  placeholder: string;
  modelValue?: string | number;
}

const props = withDefaults(defineProps<InputProps & ClassProps>(), {
  class: "",
  type: "text",
  modelValue: "",
});

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  emits("update:modelValue", value);
};
</script>

<template>
  <input
    v-model="modelValue"
    :type="props.type"
    :placeholder="props.placeholder"
    :class="cn(inputTheme.input, props.class)"
    @input="handleInput" />
</template>
