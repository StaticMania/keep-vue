<script lang="ts" setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import NumberInput from "~/src/components/NumberInput/NumberInput.vue";
import NumberInputBox from "~/src/components/NumberInput/NumberInputBox.vue";
import NumberInputButton from "~/src/components/NumberInput/NumberInputButton.vue";

const inputValue = ref(0);
</script>

<template>
  <NumberInput>
    <NumberInputButton>
      <PhMinus size="16" color="#455468" />
    </NumberInputButton>
    <NumberInputBox v-model="inputValue" />
    <NumberInputButton>
      <PhPlus size="16" color="#455468" />
    </NumberInputButton>
  </NumberInput>
</template>
