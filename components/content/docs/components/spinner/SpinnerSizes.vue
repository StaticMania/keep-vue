<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Spinner } from "~/src";
import { SpinnerSizesCode } from "./spinnerCode";
</script>

<template>
  <CodeHighlightWithPreview :code="SpinnerSizesCode">
    <div class="my-3 flex items-end gap-3">
      <Spinner color="info" size="xs" />
      <Spinner color="info" size="sm" />
      <Spinner color="info" size="md" />
      <Spinner color="info" size="lg" />
      <Spinner color="info" size="xl" />
    </div>
  </CodeHighlightWithPreview>
</template>
