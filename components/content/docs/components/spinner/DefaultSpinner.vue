<script lang="ts" setup>
import { Spinner } from "~/src";
import { DefaultSpinnerCode } from "./spinnerCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultSpinnerCode">
    <div class="flex items-center justify-center">
      <Spinner color="info" size="lg" />
    </div>
  </CodeHighlightWithPreview>
</template>
