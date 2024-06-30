<template lang="">
    <div
      role="alert"
      :class="
        cn(
          alertTheme.root.base,
          withBg
            ? alertTheme.colorWithBg[color]
            : alertTheme.colorWithOutBg[color],
          dismiss ? 'hidden' : 'flex',
          props.class
        )
      "
    >
<slot/>
</div>
  </template>
<script setup lang="ts">
import { alertTheme } from "@/src/components/Alert/alertTheme";
import { cn } from "~/src/helpers/cn";
import type { HTMLAttributes } from "vue";

interface AlertProps {
    color?: "primary" | "secondary" | "success" | "warning" | "error";
    withBg?: boolean;
    dismiss?: boolean;
    class?: HTMLAttributes["class"];
}

const props = defineProps<AlertProps>();
console.log({ props })
</script>