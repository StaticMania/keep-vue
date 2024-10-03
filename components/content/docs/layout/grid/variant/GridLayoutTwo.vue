<script lang="ts" setup>
import { GridLayoutTwoCode } from "../girdLayoutCode";
</script>

<template>
  <CodeHighlightWithPreview :code="GridLayoutTwoCode">
    <div class="grid grid-cols-12 gap-5">
      <div
        class="col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-8 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-4 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-4 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-4 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-4 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-4 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-4 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-4 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="order-1 col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:order-1 lg:col-span-3 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="order-3 col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 lg:order-2 lg:col-span-6 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="order-2 col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:order-3 lg:col-span-3 dark:border-metal-800 dark:bg-metal-900"></div>
    </div>
  </CodeHighlightWithPreview>
</template>
