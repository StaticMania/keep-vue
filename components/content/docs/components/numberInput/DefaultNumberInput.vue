<script lang="ts" setup>
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Label, NumberInput, NumberInputBox, NumberInputButton } from "~/src";
import { DefaultNumberInputCode } from "./numberInputCode";

const num = ref(0);

const incrementNum = () => {
  num.value += 1;
};

const decrementNum = () => {
  num.value -= 1;
};
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultNumberInputCode">
    <div class="flex w-full items-center justify-center">
      <div class="w-full max-w-sm space-y-1">
        <Label>Choose Number</Label>
        <NumberInput>
          <NumberInputButton :disabled="num === 0" @click="decrementNum">
            <PhosphorIconMinus :size="16" weight="bold" />
          </NumberInputButton>
          <NumberInputBox v-model="num" />
          <NumberInputButton :disabled="num === 100" @click="incrementNum">
            <PhosphorIconPlus :size="16" weight="bold" />
          </NumberInputButton>
        </NumberInput>
        <p class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
          Number Must be between 1 to 100
        </p>
      </div>
    </div>
  </CodeHighlightWithPreview>
</template>
