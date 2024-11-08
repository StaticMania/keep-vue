<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { TypographyBodyCode } from "../typographyCode";
</script>

<template>
  <CodeHighlightWithPreview :code="TypographyBodyCode" :active-tab="1">
    <div class="space-y-4">
      <p class="text-body-1 dark:text-white">
        The quick brown fox jumps over the lazy dog
      </p>
      <p class="text-body-2 dark:text-white">
        The quick brown fox jumps over the lazy dog
      </p>
      <p class="text-body-3 dark:text-white">
        The quick brown fox jumps over the lazy dog
      </p>
      <p class="text-body-4 dark:text-white">
        The quick brown fox jumps over the lazy dog
      </p>
      <p class="text-body-5 dark:text-white">
        The quick brown fox jumps over the lazy dog
      </p>
    </div>
  </CodeHighlightWithPreview>
</template>
