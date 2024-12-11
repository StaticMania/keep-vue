<script lang="ts" setup>
import { AvatarRoot } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>
<template>
  <AvatarRoot
    v-bind="restProps"
    :class="
      cn(
        'relative flex size-10 shrink-0 overflow-hidden rounded-full',
        props.class,
      )
    ">
    <slot />
  </AvatarRoot>
</template>
