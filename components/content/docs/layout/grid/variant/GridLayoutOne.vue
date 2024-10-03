<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { GridLayoutOneCode } from "../girdLayoutCode";
</script>

<template>
  <CodeHighlightWithPreview :code="GridLayoutOneCode">
    <div class="grid grid-cols-12 gap-5">
      <div
        class="col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-8 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-4 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-3 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-3 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-3 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-3 dark:border-metal-800 dark:bg-metal-900"></div>
    </div>
  </CodeHighlightWithPreview>
</template>
