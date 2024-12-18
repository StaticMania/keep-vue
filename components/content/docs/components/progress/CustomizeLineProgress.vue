<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { LineProgress, LineProgressBar, LineProgressText } from "~/src";
import { customizeLineProgress } from "./progressCode";
</script>

<template>
  <CodeHighlightWithPreview :code="customizeLineProgress">
    <div class="mx-auto max-w-lg">
      <LineProgress :progress="55">
        <LineProgressBar line-background="bg-error-50" class="bg-error-500" />
        <LineProgressText class="text-error-500" />
      </LineProgress>
    </div>
  </CodeHighlightWithPreview>
</template>
