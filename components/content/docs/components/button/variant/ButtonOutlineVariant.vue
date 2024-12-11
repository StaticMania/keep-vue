<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Button } from "~/src";
import { buttonOutlineVariantCode } from "../buttonCode";
</script>
<template>
  <CodeHighlightWithPreview :code="buttonOutlineVariantCode">
    <div
      class="flex h-32 flex-wrap items-center justify-center gap-2 gap-y-4 p-4">
      <Button color="secondary" variant="outline">Button</Button>
    </div>
  </CodeHighlightWithPreview>
</template>
