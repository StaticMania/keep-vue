<script setup lang="ts">
import { Button } from "~/src";
import { buttonSizeVariantCode } from "../buttonCode";
</script>

<template>
  <CodeHighlightWithPreview :code="buttonSizeVariantCode">
    <div class="flex flex-wrap items-end gap-2 p-5">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="2xl">Button 2xl</Button>
    </div>
  </CodeHighlightWithPreview>
</template>
