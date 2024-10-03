<script setup lang="ts">
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { FlexLayoutThreeCode } from "../flexCode";
</script>

<template>
  <CodeHighlightWithPreview :code="FlexLayoutThreeCode">
    <div class="flex flex-col gap-5">
      <div
        class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      <div class="flex flex-wrap gap-5 lg:flex-nowrap">
        <div
          class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4 dark:border-metal-800 dark:bg-metal-900"></div>
        <div
          class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4 dark:border-metal-800 dark:bg-metal-900"></div>
        <div
          class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4 dark:border-metal-800 dark:bg-metal-900"></div>
        <div
          class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4 dark:border-metal-800 dark:bg-metal-900"></div>
      </div>
    </div>
  </CodeHighlightWithPreview>
</template>
