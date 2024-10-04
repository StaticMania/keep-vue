<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { TypographyBodyCode } from "../typographyCode";
</script>

<template>
  <CodeHighlightWithPreview :code="TypographyBodyCode" :active-tab="1">
    <div class="space-y-4">
      <p class="text-body-1">The quick brown fox jumps over the lazy dog</p>
      <p class="text-body-2">The quick brown fox jumps over the lazy dog</p>
      <p class="text-body-3">The quick brown fox jumps over the lazy dog</p>
      <p class="text-body-4">The quick brown fox jumps over the lazy dog</p>
      <p class="text-body-5">The quick brown fox jumps over the lazy dog</p>
    </div>
  </CodeHighlightWithPreview>
</template>
