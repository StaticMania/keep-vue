<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Button, Spinner } from "~/src";
import { SpinnerButtonCode } from "./spinnerCode";
</script>

<template>
  <CodeHighlightWithPreview :code="SpinnerButtonCode">
    <div class="flex w-full items-end gap-3">
      <Button>
        <span class="pr-2">
          <Spinner color="gray" size="sm" />
        </span>
        Loading
      </Button>
      <Button variant="outline">
        <span class="pr-2">
          <Spinner color="gray" size="sm" />
        </span>
        Loading
      </Button>
    </div>
  </CodeHighlightWithPreview>
</template>
