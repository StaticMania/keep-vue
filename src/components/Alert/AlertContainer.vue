<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { alertTheme } from "./alertTheme";

interface AlertContainerProps extends /* @vue-ignore */ HTMLAttributes {}

const props = defineProps<AlertContainerProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    ref="HTMLDivElement"
    :class="cn(alertTheme.container.base, props.class)"
    v-bind="restProps">
    <slot />
  </div>
</template>
