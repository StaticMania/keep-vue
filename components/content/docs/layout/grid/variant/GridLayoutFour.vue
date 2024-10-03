<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { GridLayoutFourCode } from "../girdLayoutCode";
</script>

<template>
  <CodeHighlightWithPreview :code="GridLayoutFourCode">
    <div class="grid grid-cols-12 grid-rows-5 gap-5">
      <div
        class="col-span-6 row-span-4 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-3 col-start-1 row-start-5 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-3 col-start-4 row-start-5 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-4 col-start-7 row-start-1 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-2 col-start-11 row-span-3 row-start-1 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-2 col-start-11 row-span-2 row-start-4 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="col-span-4 col-start-7 row-span-4 row-start-2 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
    </div>
  </CodeHighlightWithPreview>
</template>
