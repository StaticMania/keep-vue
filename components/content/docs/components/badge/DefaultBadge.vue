<script setup lang="ts">
import { Badge } from "~/src";
import { defaultBadgeCode } from "./badgeCode";
</script>

<template>
  <CodeHighlightWithPreview :code="defaultBadgeCode">
    <div class="flex items-center justify-center">
      <Badge variant="base" color="primary">Default Badge</Badge>
    </div>
  </CodeHighlightWithPreview>
</template>
