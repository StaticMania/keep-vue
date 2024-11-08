<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { alertTheme, type ColorVariant } from "./alertTheme";
import { useProvideAlert } from "./useAlert";

export interface AlertComponentProps extends /* @vue-ignore */ HTMLAttributes {
  color?: keyof ColorVariant;
  withBg?: boolean;
  dismiss?: boolean;
}
const props = withDefaults(defineProps<AlertComponentProps & ClassProps>(), {
  color: "primary",
  class: "",
});

const restProps = computed(() => {
  const { class: _, color, ...restProps } = props;
  return restProps;
});

const changedColor = computed(() => {
  return props.color;
});

useProvideAlert(changedColor);
</script>

<template>
  <div
    v-bind="restProps"
    ref=""
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
    <slot />
  </div>
</template>
