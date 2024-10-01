<script lang="ts" setup>
import { Button } from "~/src";
import { buttonShapeVariantCode } from "./buttonCode";
</script>
<template>
  <CodeHighlightWithPreview :code="buttonShapeVariantCode">
    <div class="flex flex-wrap items-end gap-2 px-2 py-3">
      <Button shape="icon"><PhShoppingCart size="16" /></Button>
      <Button shape="circle"><PhShoppingCart size="16" /></Button>
    </div>
  </CodeHighlightWithPreview>
</template>
