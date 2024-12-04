<script setup lang="ts">
import { Badge } from "~/src";
import { colorsOfBadgeCode } from "./badgeCode";
</script>

<template>
  <CodeHighlightWithPreview :code="colorsOfBadgeCode">
    <div class="flex items-center justify-center gap-x-4">
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
    </div>
  </CodeHighlightWithPreview>
</template>
