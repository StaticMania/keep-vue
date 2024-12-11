<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { CircleProgress, CircleProgressLine, CircleProgressText } from "~/src";
import { VariantOfProgressCode } from "./progressCode";
</script>
<template>
  <CodeHighlightWithPreview :code="VariantOfProgressCode">
    <div
      class="mx-auto flex max-w-lg flex-col items-center justify-center gap-5">
      <CircleProgress :progress="55">
        <CircleProgressLine />
        <CircleProgressText />
      </CircleProgress>
    </div>
  </CodeHighlightWithPreview>
</template>
