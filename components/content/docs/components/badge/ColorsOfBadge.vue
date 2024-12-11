<script setup lang="ts">
import { Badge } from "~/src";
import { colorsOfBadgeCode } from "./badgeCode";
</script>

<template>
  <CodeHighlightWithPreview :code="colorsOfBadgeCode">
    <div class="flex items-center justify-center gap-x-4">
      <Badge variant="base" color="primary">Primary</Badge>
      <Badge variant="base" color="secondary">Secondary</Badge>
      <Badge variant="base" color="success">Success</Badge>
      <Badge variant="base" color="warning">Warning</Badge>
      <Badge variant="base" color="error">Error</Badge>
    </div>
  </CodeHighlightWithPreview>
</template>
