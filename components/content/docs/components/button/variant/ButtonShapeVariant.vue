<script lang="ts" setup>
import { Button } from "~/src";
import { buttonShapeVariantCode } from "../buttonCode";
</script>
<template>
  <CodeHighlightWithPreview :code="buttonShapeVariantCode">
    <div class="flex flex-wrap items-end gap-4 px-2 py-3">
      <Button shape="icon"><PhosphorIconShoppingCart size="16" /></Button>
      <Button shape="circle"><PhosphorIconShoppingCart size="16" /></Button>
    </div>
  </CodeHighlightWithPreview>
</template>
