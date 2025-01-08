<script lang="ts" setup>
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Input, Label } from "~/src";
import { labelInput } from "./inputCode";

const inputValue = ref("");
</script>

<template>
  <CodeHighlightWithPreview :code="labelInput">
    <div class="flex items-center justify-center">
      <fieldset class="w-full max-w-md space-y-1 p-2">
        <Label for="name">Enter Name</Label>
        <Input
          id="name"
          v-model="inputValue"
          placeholder="Enter name"
          type="text" />
      </fieldset>
    </div>
  </CodeHighlightWithPreview>
</template>
