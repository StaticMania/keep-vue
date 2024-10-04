<script lang="ts" setup>
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Label, Textarea } from "~/src";
import { TextAreaWithHelperTextCode } from "./textareaCode";
const picked = ref("");
</script>

<template>
  <CodeHighlightWithPreview :code="TextAreaWithHelperTextCode">
    <fieldset className="space-y-1.5 p-2">
      <Label for="message">Your message*</Label>
      <Textarea
        id="message"
        v-model="picked"
        placeholder="Write your message here"
        :rows="8" />
      <p className="text-body-4 font-normal text-metal-300">
        Message must be a at least 100 words.
      </p>
    </fieldset>
  </CodeHighlightWithPreview>
</template>
