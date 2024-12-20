<script lang="ts" setup>
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Textarea } from "~/src";
import { defaultTextAreaCode } from "./textareaCode";
const picked = ref("");
</script>

<template>
  <CodeHighlightWithPreview :code="defaultTextAreaCode">
    <div class="p-2">
      <Textarea
        v-model="picked"
        placeholder="Write your message here."
        :rows="8" />
    </div>
  </CodeHighlightWithPreview>
</template>
