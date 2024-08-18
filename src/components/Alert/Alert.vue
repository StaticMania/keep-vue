<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { provide } from "vue";

import { cn } from "~/src/utils/cn";
import { alertTheme, type ColorVariant } from "./alertTheme";

interface AlertComponentProps {
  color?: keyof ColorVariant;
  withBg?: boolean;
  dismiss?: boolean;
}

const props = defineProps<
  AlertComponentProps & { class?: HTMLAttributes["class"] }
>();

const { color = "primary" } = props;

//providing the context
provide("alertContext", color);
</script>

<template>
  <div
    v-bind="$attrs"
    ref="alertRef"
    role="alert"
    :class="
      cn(
        alertTheme.root.base,
        props.withBg
          ? alertTheme.colorWithBg[color]
          : alertTheme.colorWithOutBg[color],
        props.dismiss ? 'hidden' : 'flex',
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
