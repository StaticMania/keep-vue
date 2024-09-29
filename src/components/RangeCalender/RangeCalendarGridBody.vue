<script lang="ts" setup>
import {
  RangeCalendarGridBody,
  type RangeCalendarGridBodyProps,
} from "radix-vue";
import { defineProps } from "vue";

const props = defineProps<RangeCalendarGridBodyProps>();
</script>

<template>
  <RangeCalendarGridBody v-bind="props">
    <slot />
  </RangeCalendarGridBody>
</template>
