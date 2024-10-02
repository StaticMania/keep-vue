<script lang="ts" setup>
import { Spinner } from "~/src";
import { DefaultSpinnerCode } from "./spinnerCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultSpinnerCode">
    <div class="h-16 p-4">
      <Spinner color="info" size="lg" />
    </div>
  </CodeHighlightWithPreview>
</template>
