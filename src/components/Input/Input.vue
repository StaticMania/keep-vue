<script lang="ts" setup>
import type { InputHTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "../../utils/interface";
import { inputTheme } from "./inputTheme";

interface InputProps extends /*@vue-ignore*/ InputHTMLAttributes {
  type: string;
  placeholder: string;
}

const props = withDefaults(defineProps<InputProps & ClassProps>(), {
  class: "",
  type: "text",
});

const restProps = computed(() => {
  const { class: _, type, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <input
    ref="HTMLInputElement"
    :type="props.type"
    v-bind="restProps"
    :class="cn(inputTheme.input, props.class)" />
</template>
