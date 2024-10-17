<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { TypographyDisplayCode } from "../typographyCode";
</script>

<template>
  <CodeHighlightWithPreview :code="TypographyDisplayCode" :active-tab="1">
    <div class="py-3">
      <h1 class="text-display">Display</h1>
    </div>
  </CodeHighlightWithPreview>
</template>
