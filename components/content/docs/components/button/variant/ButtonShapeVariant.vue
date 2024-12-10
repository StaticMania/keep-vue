<script lang="ts" setup>
import { Button } from "~/src";
import { buttonShapeVariantCode } from "../buttonCode";
</script>
<template>
  <CodeHighlightWithPreview :code="buttonShapeVariantCode">
    <div class="flex items-center justify-center gap-x-4">
      <Button shape="icon" color="secondary">
        <PhosphorIconShoppingCart size="16" />
      </Button>
      <Button shape="circle" color="success">
        <PhosphorIconShoppingCart size="16" />
      </Button>
    </div>
  </CodeHighlightWithPreview>
</template>
