<script lang="ts" setup>
import { GridLayoutThreeCode } from "../girdLayoutCode";
</script>

<template>
  <CodeHighlightWithPreview :code="GridLayoutThreeCode">
    <div class="grid grid-cols-12 grid-rows-5 gap-5">
      <div
        class="order-1 col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-6 lg:row-span-4 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="order-2 col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-6 lg:col-start-1 lg:row-start-5 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="order-3 col-span-12 row-start-1 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-6 lg:col-start-7 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="order-4 col-span-6 row-start-2 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-3 lg:col-start-7 lg:row-span-3 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="order-5 col-span-6 row-start-2 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-3 lg:col-start-10 lg:row-span-3 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="order-6 col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-3 lg:col-start-7 lg:row-start-5 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="order-7 col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-3 lg:col-start-10 lg:row-start-5 dark:border-metal-800 dark:bg-metal-900"></div>
    </div>
  </CodeHighlightWithPreview>
</template>
