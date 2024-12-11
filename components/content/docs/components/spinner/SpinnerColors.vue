<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Spinner } from "~/src";
import { SpinnerColorsCode } from "./spinnerCode";
</script>

<template>
  <CodeHighlightWithPreview :code="SpinnerColorsCode">
    <div class="flex items-center justify-center gap-x-4">
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="error" />
      <Spinner color="warning" />
    </div>
  </CodeHighlightWithPreview>
</template>
