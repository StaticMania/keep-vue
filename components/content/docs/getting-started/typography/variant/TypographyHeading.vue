<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { TypographyHeadingCode } from "../typographyCode";
</script>

<template>
  <CodeHighlightWithPreview :code="TypographyHeadingCode" :active-tab="1">
    <div class="space-y-4">
      <h1 class="text-heading-1 dark:text-white">The quick brown fox</h1>
      <p class="text-heading-2 dark:text-white">The quick brown fox</p>
      <h3 class="text-heading-3 dark:text-white">The quick brown fox</h3>
      <h4 class="text-heading-4 dark:text-white">The quick brown fox</h4>
      <h5 class="text-heading-5 dark:text-white">The quick brown fox</h5>
      <h6 class="text-heading-6 dark:text-white">The quick brown fox</h6>
    </div>
  </CodeHighlightWithPreview>
</template>
