<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { useTabs } from "./useTabs";

export interface TabContentProps extends /* @vue-ignore*/ HTMLAttributes {
  value: string;
}

const props = defineProps<TabContentProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const { activeItem } = useTabs();
</script>

<template>
  <div
    v-bind="restProps"
    :data-active="activeItem === props.value"
    :class="
      cn(
        'w-full text-body-4 font-normal text-metal-600 data-[active=true]:block data-[active=false]:hidden dark:text-metal-300',
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
