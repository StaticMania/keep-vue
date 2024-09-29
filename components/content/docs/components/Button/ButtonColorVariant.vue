<script lang="ts" setup>
import { Button } from "~/src";
import { buttonColorVariantCode } from "./buttonCode";
</script>

<template>
  <CodeHighlightWithPreview :code="buttonColorVariantCode">
    <div class="flex h-20 flex-wrap items-center gap-2 p-4">
      <Button color="primary">Button</Button>
      <Button color="secondary">Button</Button>
      <Button color="success">Button</Button>
      <Button color="warning">Button</Button>
      <Button color="error">Button</Button>
    </div>
  </CodeHighlightWithPreview>
</template>
