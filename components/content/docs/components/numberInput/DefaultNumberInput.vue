<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { NumberInput, NumberInputBox, NumberInputButton } from "~/src";
import { DefaultNumberInputCode } from "./numberInputCode";

const inputValue = ref(0);
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultNumberInputCode">
    <NumberInput>
      <NumberInputButton>
        <PhosphorIconMinus :size="16" color="#455468" />
      </NumberInputButton>
      <NumberInputBox v-model="inputValue" />
      <NumberInputButton>
        <PhosphorIconPlus :size="16" color="#455468" />
      </NumberInputButton>
    </NumberInput>
  </CodeHighlightWithPreview>
</template>
