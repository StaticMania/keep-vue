<script lang="ts" setup>
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Input } from "~/src";
import { defaultInput } from "./inputCode";
const inputValue = ref("");

console.log(inputValue.value);
</script>

<template>
  <CodeHighlightWithPreview :code="defaultInput">
    <div class="max-w-md p-2">
      <Input
        @update:modelValue="inputValue as any"
        placeholder="Enter name"
        type="text" />
    </div>
  </CodeHighlightWithPreview>
</template>
