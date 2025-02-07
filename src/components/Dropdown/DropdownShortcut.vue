<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

interface DropdownShortCutProps extends /* @vue-ignore */ HTMLAttributes {}

const props = defineProps<DropdownShortCutProps & ClassProps>();
</script>

<template>
  <span :class="cn('ml-auto text-body-5 opacity-60', props.class)">
    <slot />
  </span>
</template>
