<script lang="ts" setup>
import { SwitchRoot, SwitchThumb, type SwitchRootProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";

interface SwitchProps {
  thumbClass?: string;
  variant?: "icon" | "default";
  class?: HTMLAttributes["class"];
}

const switchRef = ref<typeof SwitchRoot>();
const props = withDefaults(defineProps<SwitchRootProps & SwitchProps>(), {
  class: "",
  variant: "default",
});
const restProps = computed(() => {
  const { class: _, thumbClass, variant, ...delegated } = props;
  return delegated;
});

const rootClasses = computed(() =>
  cn(
    "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-900 focus-visible:ring-offset-2 focus-visible:ring-offset-metal-100 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-metal-100 dark:data-[state=unchecked]:bg-metal-800",
    props.class,
  ),
);

const thumbClasses = computed(() =>
  cn(
    "pointer-events-none relative block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform before:absolute data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-white data-[state=unchecked]:bg-white dark:data-[state=unchecked]:bg-metal-400",
    props.variant === "default" &&
      'before:left-1/2 before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:transition-colors before:content-[""] data-[state=checked]:before:bg-primary-500 data-[state=unchecked]:before:bg-metal-100',
    props.variant === "icon" &&
      "bg-center bg-no-repeat data-[state=checked]:bg-moon data-[state=unchecked]:bg-sun",
    props.thumbClass,
  ),
);
</script>

<template>
  <SwitchRoot
    v-bind="restProps"
    ref="switchRef"
    :class="
      cn(
        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-900 focus-visible:ring-offset-2 focus-visible:ring-offset-metal-100 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-metal-100 dark:data-[state=unchecked]:bg-metal-800',
        props.class,
      )
    ">
    <SwitchThumb :class="(rootClasses, thumbClasses)"></SwitchThumb>
  </SwitchRoot>
</template>
