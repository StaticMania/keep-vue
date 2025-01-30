<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Button } from "~/src";
import { buttonSoftBgVariantCode } from "../buttonCode";
</script>
<template>
  <CodeHighlightWithPreview :code="buttonSoftBgVariantCode">
    <div
      class="flex h-32 flex-wrap items-center justify-center gap-2 gap-y-4 p-4">
      <Button color="primary" variant="softBg">Click here</Button>
    </div>
  </CodeHighlightWithPreview>
</template>
