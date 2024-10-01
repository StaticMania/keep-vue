<script lang="ts" setup>
import {
  CircleProgress,
  CircleProgressLine,
  CircleProgressText,
  LineProgress,
  LineProgressBar,
  LineProgressText,
} from "~/src";
import { CustomizeProgressCode } from "./progressCode";
</script>
<template>
  <CodeHighlightWithPreview :code="CustomizeProgressCode">
    <div class="mx-auto max-w-lg space-y-4">
      <CircleProgress :progress="45">
        <CircleProgressLine
          class="stroke-error-50"
          stroke-color="stroke-error-500" />
        <CircleProgressText class="text-error-500" />
      </CircleProgress>
      <LineProgress :progress="55">
        <LineProgressBar line-background="bg-error-50" class="bg-error-500" />
        <LineProgressText class="text-error-500" />
      </LineProgress>
    </div>
  </CodeHighlightWithPreview>
</template>
