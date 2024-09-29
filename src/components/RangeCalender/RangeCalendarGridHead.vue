<script lang="ts" setup>
import {
  RangeCalendarGridHead,
  type RangeCalendarGridHeadProps,
} from "radix-vue";
import { defineProps } from "vue";

const props = defineProps<RangeCalendarGridHeadProps>();
</script>

<template>
  <RangeCalendarGridHead v-bind="props">
    <slot />
  </RangeCalendarGridHead>
</template>
