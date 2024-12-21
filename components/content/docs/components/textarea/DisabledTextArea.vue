<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Textarea } from "~/src";
import { disabledTextareaCode } from "./textareaCode";
</script>

<template>
  <CodeHighlightWithPreview :code="disabledTextareaCode">
    <div class="p-2">
      <Textarea disabled placeholder="Write your message here" :rows="8" />
    </div>
  </CodeHighlightWithPreview>
</template>
