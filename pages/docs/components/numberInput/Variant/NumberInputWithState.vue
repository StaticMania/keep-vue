<script lang="ts" setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import Label from "~/src/components/Label/Label.vue";
import NumberInput from "~/src/components/NumberInput/NumberInput.vue";
import NumberInputBox from "~/src/components/NumberInput/NumberInputBox.vue";
import NumberInputButton from "~/src/components/NumberInput/NumberInputButton.vue";

const num = ref(0);

const incrementNum = () => {
  num.value += 1;
};

const decrementNum = () => {
  num.value -= 1;
};
</script>

<template>
  <fieldset class="space-y-1">
    <Label>Choose Number</Label>
    <NumberInput>
      <NumberInputButton :disabled="num === 0" @click="decrementNum">
        <PhMinus :size="16" :color="num === 0 ? '#455468' : '#000000'" />
      </NumberInputButton>
      <NumberInputBox :min="0" :max="100" v-model="num" />
      <NumberInputButton :disabled="num === 100" @click="incrementNum">
        <PhPlus :size="16" :color="num === 100 ? '#455468' : '#000000'" />
      </NumberInputButton>
    </NumberInput>
    <p class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
      Number Must be between 1 to 100
    </p>
  </fieldset>
</template>
