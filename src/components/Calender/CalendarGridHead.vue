<script lang="ts" setup>
import { CalendarGridHead, type CalendarGridHeadProps } from "radix-vue";
import { defineProps } from "vue";

const props = defineProps<CalendarGridHeadProps>();
</script>

<template>
  <CalendarGridHead v-bind="props">
    <slot />
  </CalendarGridHead>
</template>
