<script lang="ts" setup>
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Input, InputIcon } from "~/src";
import { inputWithIconCode } from "./inputCode";

const inputValue = ref("");
</script>

<template>
  <CodeHighlightWithPreview :code="inputWithIconCode">
    <div class="flex items-center justify-center p-2">
      <fieldset class="relative w-full max-w-md">
        <Input
          v-model="inputValue"
          type="text"
          placeholder="Enter email"
          class="ps-11" />
        <InputIcon>
          <PhosphorIconEnvelope :size="19" color="#AFBACA" />
        </InputIcon>
      </fieldset>
    </div>
  </CodeHighlightWithPreview>
</template>
