<script setup lang="ts">
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { LayoutOneCode } from "./layoutCode";
</script>

<template>
  <CodeHighlightWithPreview :code="LayoutOneCode">
    <div class="columns-1 space-y-4 lg:columns-3">
      <div class="space-y-4">
        <div
          class="h-[200px] w-full rounded-xl border border-dashed border-metal-100 bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
        <div
          class="h-[300px] w-full rounded-xl border border-dashed border-metal-100 bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      </div>
      <div class="space-y-4">
        <div
          class="h-[300px] w-full rounded-xl border border-dashed border-metal-100 bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
        <div
          class="h-[200px] w-full rounded-xl border border-dashed border-metal-100 bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      </div>
      <div class="space-y-4">
        <div
          class="h-[350px] w-full rounded-xl border border-dashed border-metal-100 bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
        <div
          class="h-[150px] w-full rounded-xl border border-dashed border-metal-100 bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      </div>
    </div>
  </CodeHighlightWithPreview>
</template>
