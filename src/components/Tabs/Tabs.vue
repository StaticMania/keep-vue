<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { useProvideTabsStore } from "./useTabs";

export interface TabsProps extends /* @vue-ignore */ HTMLAttributes {
  defaultActive?: string;
  variant?: "default" | "fill" | "underline";
}

const props = withDefaults(defineProps<TabsProps & ClassProps>(), {
  defaultActive: "",
  variant: "default",
  class: "",
});

const restProps = computed(() => {
  const { class: _, defaultActive, variant, ...rest } = props;

  return rest;
});

const changedDefaultActive = computed(() => {
  return props.defaultActive;
});

const changedVariant = computed(() => {
  return props.variant;
});

useProvideTabsStore(changedVariant.value, changedDefaultActive.value);
</script>

<template>
  <div v-bind="restProps" :class="cn(props.class)">
    <slot />
  </div>
</template>
