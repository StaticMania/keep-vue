<script setup lang="ts">
import { Badge } from "~/src";
import { defaultBadgeCode } from "./badgeCode";
</script>

<template>
  <CodeHighlightWithPreview :code="defaultBadgeCode">
    <div class="p-2">
      <Badge>Default Badge</Badge>
    </div>
  </CodeHighlightWithPreview>
</template>
