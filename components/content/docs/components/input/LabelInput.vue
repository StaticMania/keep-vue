<script lang="ts" setup>
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Input, Label } from "~/src";
import { labelInput } from "./inputCode";

const inputValue = ref("");
</script>

<template>
  <CodeHighlightWithPreview :code="labelInput">
    <fieldset class="max-w-md space-y-1 p-2">
      <Label html-for="name">Enter Name</Label>
      <Input
        id="name"
        v-model="inputValue"
        placeholder="Enter name"
        type="text" />
    </fieldset>
  </CodeHighlightWithPreview>
</template>
