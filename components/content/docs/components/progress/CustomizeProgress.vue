<script lang="ts" setup>
import { CircleProgress, CircleProgressLine, CircleProgressText } from "~/src";
import { CustomizeProgressCode } from "./progressCode";
</script>
<template>
  <CodeHighlightWithPreview :code="CustomizeProgressCode">
    <div class="mx-auto flex max-w-lg items-center justify-center space-y-4">
      <CircleProgress :progress="45" class="text-error-500">
        <CircleProgressLine
          class="stroke-error-50"
          stroke-color="stroke-error-500" />
        <CircleProgressText class="text-error-500" />
      </CircleProgress>
    </div>
  </CodeHighlightWithPreview>
</template>
