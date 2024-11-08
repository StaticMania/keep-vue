<script lang="ts" setup>
import type { ButtonHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { useTabs } from "./useTabs";

export interface TabItemProps extends /*@vue-ignore */ ButtonHTMLAttributes {
  value: string;
  contentClassName?: string;
  bgClassName?: string;
}

const props = defineProps<TabItemProps & ClassProps>();

const restProps = computed(() => {
  const {
    class: _,
    value,
    bgClassName,
    contentClassName,
    ...delegated
  } = props;

  return delegated;
});

const { activeItem, handleActive, variant } = useTabs();
</script>

<template>
  <button
    key="tab-item"
    :data-active="activeItem === value"
    v-bind="restProps"
    :class="
      cn(
        'relative h-10 px-5 text-body-4 font-medium',
        variant === 'underline' &&
          'data-[active=true]:text-primary-500 dark:data-[active=false]:text-white dark:data-[active=true]:text-primary-500',
        variant === 'fill' &&
          'data-[active=false]:text-metal-900 data-[active=true]:text-metal-900 dark:data-[active=false]:text-white dark:data-[active=true]:text-metal-900',
        variant === 'default' &&
          'data-[active=false]:text-metal-900 data-[active=true]:text-metal-900 dark:data-[active=false]:text-white dark:data-[active=true]:text-white',

        props.class,
      )
    "
    @click="() => handleActive(props.value)">
    <span
      v-if="activeItem === props.value"
      :class="
        cn(
          'absolute inset-0',
          variant === 'fill' &&
            'rounded-lg border border-metal-100 bg-white shadow-medium',
          variant === 'default' &&
            'rounded-lg border border-metal-100 bg-transparent',
          variant === 'underline' &&
            '-mb-[1px] rounded-none border-b-2 border-b-primary-500',
          props.bgClassName,
        )
      "></span>

    <span
      :class="
        cn(
          'relative z-10 flex items-center justify-center gap-1 transition-all duration-500',
          props.contentClassName,
        )
      ">
      <slot />
    </span>
  </button>
</template>
<!-- layoutId={defaultActive} -->
