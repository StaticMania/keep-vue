<script lang="ts" setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { NumberInput, NumberInputBox, NumberInputButton } from "~/src";
import { DefaultNumberInputCode } from "./numberInputCode";

const inputValue = ref(0);
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultNumberInputCode">
    <NumberInput>
      <NumberInputButton>
        <PhMinus :size="16" color="#455468" />
      </NumberInputButton>
      <NumberInputBox v-model="inputValue" />
      <NumberInputButton>
        <PhPlus :size="16" color="#455468" />
      </NumberInputButton>
    </NumberInput>
  </CodeHighlightWithPreview>
</template>
