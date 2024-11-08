<script lang="ts" setup>
import {
  DialogDescription,
  useForwardProps,
  type DialogDescriptionProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<DialogDescriptionProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const forwardPropsAndEmits = useForwardProps(restProps);
</script>

<template>
  <DialogDescription
    v-bind="forwardPropsAndEmits"
    :class="
      cn(
        'text-body-4 font-normal text-metal-600 dark:text-metal-300',
        props.class,
      )
    ">
    <slot />
  </DialogDescription>
</template>
