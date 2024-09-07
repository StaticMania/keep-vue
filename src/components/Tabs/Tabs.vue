<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "../../utils/interface";
import { useProvideTabsStore } from "./useTabs";

interface TabsProps extends /* @vue-ignore */ HTMLAttributes {
  defaultActive?: string;
  variant?: "default" | "fill" | "underline";
}

const props = withDefaults(defineProps<TabsProps & ClassProps>(), {
  defaultActive: "",
  variant: "default",
  class: "",
});

const restProps = computed(() => {
  const { class: _, defaultActive, variant, ...delegated } = props;

  return delegated;
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
  <div ref="HTMLDivElement" v-bind="restProps" :class="cn(props.class)">
    <slot></slot>
  </div>
</template>
