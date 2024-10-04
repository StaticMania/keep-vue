<script setup lang="ts">
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { FlexLayoutOneCode } from "../flexCode";
</script>

<template>
  <CodeHighlightWithPreview :code="FlexLayoutOneCode">
    <div class="flex flex-col gap-5 lg:flex-row">
      <div
        class="basis-4/5 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      <div class="flex basis-1/5 flex-col gap-y-5">
        <div
          class="rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
        <div
          class="rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
        <div
          class="rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      </div>
    </div>
  </CodeHighlightWithPreview>
</template>
