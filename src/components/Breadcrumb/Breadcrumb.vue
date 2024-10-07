<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps } from "vue";
import type { ClassProps } from "../../utils/interface";

export interface BreadcrumbProps extends /*@vue-ignore*/ HTMLAttributes {}
const props = defineProps<BreadcrumbProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, "aria-label": ariaLabel, ...rest } = props;
  return rest;
});
</script>
<template>
  <nav aria-label="breadcrumb" v-bind="restProps" :class="props.class">
    <slot />
  </nav>
</template>
