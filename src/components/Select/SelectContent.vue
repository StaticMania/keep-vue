<script setup lang="ts">
import {
  SelectContent,
  type SelectContentEmits,
  type SelectContentProps,
  SelectPortal,
  SelectViewport,
  useForwardPropsEmits,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import SelectScrollDownButton from "./SelectScrollDownButton.vue";
import SelectScrollUpButton from "./SelectScrollUpButton.vue";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<SelectContentProps & ClassProps>(), {
  position: "popper",
});
const emits = defineEmits<SelectContentEmits>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwarded = useForwardPropsEmits(restProps, emits);
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'relative z-50 max-h-[390px] overflow-hidden rounded-xl border bg-white p-4 text-metal-600 dark:border-metal-900 dark:bg-metal-900',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          'data-[state=open]:animate-fadeInUp',
          props.class,
        )
      ">
      <SelectScrollUpButton />
      <SelectViewport
        :class="
          cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[calc(var(--radix-select-trigger-width)-32px)]',
          )
        ">
        <slot />
      </SelectViewport>
      <SelectScrollDownButton />
    </SelectContent>
  </SelectPortal>
</template>
