<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import type { ClassProps } from "~/src/utils/interface";
import { cn } from "../../utils/cn";
interface CardContentProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<CardContentProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>
<template>
  <div v-bind="restProps" ref="HTMLDivElement" :class="cn('p-6', props.class)">
    <slot />
  </div>
</template>
