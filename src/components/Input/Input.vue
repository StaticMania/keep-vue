<script lang="ts" setup>
import { useVModel } from "@vueuse/core";
import type { InputHTMLAttributes } from "vue";
import { defineEmits, defineProps, withDefaults } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { inputTheme } from "./inputTheme";

export interface InputProps extends /* @vue-ignore */ InputHTMLAttributes {
  type: string;
  defaultValue?: string | number;
  placeholder: string;
  modelValue: string | number;
}

const props = withDefaults(defineProps<InputProps & ClassProps>(), {
  class: "",
  type: "text",
});

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    v-model="modelValue"
    :type="props.type"
    :placeholder="props.placeholder"
    :class="cn(inputTheme.input, props.class)" />
</template>
