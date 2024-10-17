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
        placeholder="Enter name"
        type="text"
        @update:model-value="inputValue as any" />
    </div>
  </CodeHighlightWithPreview>
</template>
