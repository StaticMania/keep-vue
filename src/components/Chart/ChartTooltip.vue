<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { defineProps } from "vue";

export interface ChartTooltipProps {
  title?: string;
  data: {
    name: string;
    color: string;
    value: any;
  }[];
}
defineProps<ChartTooltipProps>();
</script>

<template>
  <div
    class="grid min-w-[8rem] items-start gap-y-0 rounded-lg border border-metal-100 bg-metal-100 px-2.5 py-1.5 text-body-5 font-medium shadow-xl dark:border-metal-800 dark:bg-metal-900">
    <div v-if="title" class="">
      <p class="text-body-5 capitalize dark:text-metal-100">
        {{ title }}
      </p>
    </div>
    <div class="flex flex-col p-0 text-body-5">
      <div v-for="(item, key) in data" :key="key" class="flex justify-between">
        <div class="flex items-center">
          <span class="mr-2 h-2.5 w-2.5">
            <svg width="100%" height="100%" viewBox="0 0 30 30">
              <path
                d=" M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0"
                :stroke="item.color"
                :fill="item.color"
                stroke-width="1" />
            </svg>
          </span>
          <span class="capitalize dark:text-metal-100">{{ item.name }}</span>
        </div>
        <span class="ml-4 font-semibold dark:text-metal-100">
          {{ item.value }}
        </span>
      </div>
    </div>
  </div>
</template>
