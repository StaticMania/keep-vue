<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Input } from "~/src";
import { disabledInputCode } from "./inputCode";
</script>

<template>
  <CodeHighlightWithPreview :code="disabledInputCode">
    <div class="max-w-md p-2">
      <Input type="text" disabled placeholder="Enter name" />
    </div>
  </CodeHighlightWithPreview>
</template>
