<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { ClassProps } from "~/src/utils/interface";
import { cn } from "../../utils/cn";
import { alertTheme, type ColorVariant } from "./alertTheme";
import { useAlert } from "./useAlert";

interface AlertDescriptionProps extends /* @vue-ignore */ HTMLAttributes {}

const props = defineProps<AlertDescriptionProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const { color } = useAlert();
const { description } = alertTheme;
</script>

<template>
  <p
    v-bind="restProps"
    ref="HTMLDivElement"
    :class="
      cn(
        description.color[color as keyof ColorVariant],
        description.base,
        props.class,
      )
    ">
    <slot />
  </p>
</template>
