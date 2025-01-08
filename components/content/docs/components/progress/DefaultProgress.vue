<script lang="ts" setup>
import { CircleProgress, CircleProgressLine, CircleProgressText } from "~/src";
import { DefaultProgressCode } from "./progressCode";
</script>
<template>
  <CodeHighlightWithPreview :code="DefaultProgressCode">
    <div class="flex items-center justify-center">
      <CircleProgress :progress="45">
        <CircleProgressLine />
        <CircleProgressText>45%</CircleProgressText>
      </CircleProgress>
    </div>
  </CodeHighlightWithPreview>
</template>
