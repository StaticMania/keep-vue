<script lang="ts" setup>
import { LineProgress, LineProgressBar, LineProgressText } from "~/src";
import { DefaultLineProgressCode } from "./progressCode";
</script>
<template>
  <CodeHighlightWithPreview :code="DefaultLineProgressCode">
    <div class="mx-auto max-w-lg">
      <LineProgress :progress="55">
        <LineProgressBar />
        <LineProgressText />
      </LineProgress>
    </div>
  </CodeHighlightWithPreview>
</template>
