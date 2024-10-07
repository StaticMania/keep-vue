<script lang="ts" setup>
import { Button } from "~/src";
import { buttonRadiusVariantCode } from "../buttonCode";
</script>
<template>
  <CodeHighlightWithPreview :code="buttonRadiusVariantCode">
    <div class="flex flex-wrap items-end gap-4 px-2 py-3">
      <Button radius="full">
        <PhosphorIconShoppingCart size="16" />
        Add to cart
      </Button>
    </div>
  </CodeHighlightWithPreview>
</template>
