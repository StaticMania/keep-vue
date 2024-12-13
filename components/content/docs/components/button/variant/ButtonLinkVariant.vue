<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Button } from "~/src";
import { buttonLinkVariantCode } from "../buttonCode";
</script>
<template>
  <CodeHighlightWithPreview :code="buttonLinkVariantCode">
    <div
      class="flex h-32 flex-wrap items-center justify-center gap-2 gap-y-4 p-4">
      <Button color="primary" variant="link">Click here</Button>
    </div>
  </CodeHighlightWithPreview>
</template>
