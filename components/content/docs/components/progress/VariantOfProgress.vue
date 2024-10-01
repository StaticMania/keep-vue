<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  CircleProgress,
  CircleProgressLine,
  CircleProgressText,
  LineProgress,
  LineProgressBar,
  LineProgressText,
} from "~/src";
import { VariantOfProgressCode } from "./progressCode";
</script>
<template>
  <CodeHighlightWithPreview :code="VariantOfProgressCode">
    <div class="mx-auto flex max-w-lg flex-col gap-5">
      <CircleProgress :progress="55">
        <CircleProgressLine />
        <CircleProgressText />
      </CircleProgress>
      <LineProgress :progress="55">
        <LineProgressBar />
        <LineProgressText />
      </LineProgress>
    </div>
  </CodeHighlightWithPreview>
</template>
