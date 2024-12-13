<script lang="ts" setup>
import { Button } from "~/src";
import { buttonColorVariantCode } from "../buttonCode";
</script>

<template>
  <CodeHighlightWithPreview :code="buttonColorVariantCode">
    <div class="flex items-center justify-center gap-4">
      <Button color="success">Submit</Button>
    </div>
  </CodeHighlightWithPreview>
</template>
