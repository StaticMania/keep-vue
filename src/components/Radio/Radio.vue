<script lang="ts" setup>
import type { InputHTMLAttributes } from "vue";
import { computed, defineModel, defineProps, withDefaults } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { radioTheme } from "./radioTheme";

export interface RadioProps extends /* @vue-ignore */ InputHTMLAttributes {
  variant?: "circle" | "rounded" | "square";
  id?: string;
  name?: string;
  value: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<RadioProps & ClassProps>(), {
  class: "",
  variant: "rounded",
  id: "",
  name: "",
  disabled: false,
});

const restProps = computed(() => {
  const {
    class: _,
    variant,
    disabled,
    checked,
    name,
    value,
    id,
    type,
    ...rest
  } = props;
  return rest;
});
const modelValue = defineModel<string>("modelValue");
</script>

<template>
  <input
    :id="id"
    :checked="modelValue === value"
    type="radio"
    :name="name"
    :value="value"
    :disabled="disabled"
    v-bind="restProps"
    :class="cn(radioTheme.input)"
    @change="modelValue = value" />
  <button
    :class="
      cn(
        radioTheme.button.base,
        radioTheme.button.variant[variant],
        props.class,
      )
    "></button>
</template>
