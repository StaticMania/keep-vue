<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { ClassProps } from "~/src/utils/interface";
import { cn } from "../../utils/cn";
import { alertTheme, type ColorVariant } from "./alertTheme";
import { useProvideAlert } from "./useAlert";

interface AlertComponentProps extends /* @vue-ignore */ HTMLAttributes {
  color?: keyof ColorVariant;
  withBg?: boolean;
  dismiss?: boolean;
}

const props = withDefaults(defineProps<AlertComponentProps & ClassProps>(), {
  color: "primary",
  class: "",
});

const restProps = computed(() => {
  const { class: _, ...restProps } = props;
  return restProps;
});

useProvideAlert(props.color);
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
    <slot></slot>
  </div>
</template>
