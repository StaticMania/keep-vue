<script lang="ts" setup>
import type { InputHTMLAttributes } from "vue";
import { computed, defineProps, withDefaults } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { radioTheme } from "./radioTheme";

export interface RadioProps extends /* @vue-ignore */ InputHTMLAttributes {
  variant?: "circle" | "rounded" | "square";
  id?: string;
  name?: string;
}

const props = withDefaults(defineProps<RadioProps & ClassProps>(), {
  class: "",
  variant: "rounded",
  id: "",
  name: "",
});

const restProps = computed(() => {
  const { class: _, variant, id, name, type, ...rest } = props;
  return rest;
});
</script>

<template>
  <input
    :id="id"
    type="radio"
    :name="name"
    v-bind="restProps"
    :class="cn(radioTheme.input)" />
  <button
    :class="
      cn(
        radioTheme.button.base,
        radioTheme.button.variant[variant],
        props.class,
      )
    "></button>
</template>
