<script lang="ts" setup>
import { Button } from "~/src";
import { buttonRadiusVariantCode } from "../buttonCode";
</script>
<template>
  <CodeHighlightWithPreview :code="buttonRadiusVariantCode">
    <div class="flex items-center justify-center">
      <Button radius="full" color="warning">
        <PhosphorIconShoppingCart size="16" class="mr-1" />
        Add to cart
      </Button>
    </div>
  </CodeHighlightWithPreview>
</template>
