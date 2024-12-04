<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { NumberInput, NumberInputBox, NumberInputButton } from "~/src";
import { DefaultNumberInputCode } from "./numberInputCode";

const inputValue = ref(0);
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultNumberInputCode">
    <div class="flex items-center justify-center">
      <NumberInput class="w-full">
        <NumberInputButton>
          <PhosphorIconMinus :size="16" />
        </NumberInputButton>
        <NumberInputBox v-model="inputValue" />
        <NumberInputButton>
          <PhosphorIconPlus :size="16" />
        </NumberInputButton>
      </NumberInput>
    </div>
  </CodeHighlightWithPreview>
</template>
