<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { TypographyHeadingCode } from "../typographyCode";
</script>

<template>
  <CodeHighlightWithPreview :code="TypographyHeadingCode" :active-tab="1">
    <div class="space-y-4">
      <h1 class="text-heading-1">The quick brown fox</h1>
      <h2 class="text-heading-2">The quick brown fox</h2>
      <h3 class="text-heading-3">The quick brown fox</h3>
      <h4 class="text-heading-4">The quick brown fox</h4>
      <h5 class="text-heading-5">The quick brown fox</h5>
      <h6 class="text-heading-6">The quick brown fox</h6>
    </div>
  </CodeHighlightWithPreview>
</template>
