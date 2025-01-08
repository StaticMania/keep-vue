<script setup lang="ts">
import { Button } from "~/src";
import { buttonSizeVariantCode } from "../buttonCode";
</script>

<template>
  <CodeHighlightWithPreview :code="buttonSizeVariantCode">
    <div class="flex items-center justify-center gap-x-4">
      <Button size="sm" color="error">Delete</Button>
    </div>
  </CodeHighlightWithPreview>
</template>
