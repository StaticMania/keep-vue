<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Label, NumberInput, NumberInputBox, NumberInputButton } from "~/src";
import { NumberInputWithLabelCode } from "./numberInputCode";

const inputValue = ref(20);
</script>

<template>
  <CodeHighlightWithPreview :code="NumberInputWithLabelCode">
    <fieldset class="space-y-1">
      <Label>Choose Number</Label>
      <NumberInput>
        <NumberInputButton>
          <PhMinus :size="16" color="#455468" />
        </NumberInputButton>
        <NumberInputBox v-model="inputValue" />
        <NumberInputButton>
          <PhPlus :size="16" color="#455468" />
        </NumberInputButton>
      </NumberInput>
      <p class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
        Number Must be between 1 to 100
      </p>
    </fieldset>
  </CodeHighlightWithPreview>
</template>
