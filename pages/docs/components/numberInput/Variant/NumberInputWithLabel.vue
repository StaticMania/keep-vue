<script lang="ts" setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import NumberInput from "~/src/components/NumberInput/NumberInput.vue";
import NumberInputBox from "~/src/components/NumberInput/NumberInputBox.vue";
import NumberInputButton from "~/src/components/NumberInput/NumberInputButton.vue";

const inputValue = ref(20);
</script>

<template>
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
</template>
