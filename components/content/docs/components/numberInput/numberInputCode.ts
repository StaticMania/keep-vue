const DefaultNumberInputCode = {
  "NumberInputComponent.vue": `<script setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { ref } from "vue";
import { Label, NumberInput, NumberInputBox, NumberInputButton } from "keep-vue";

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
          <PhMinus :size="16" />
        </NumberInputButton>
        <NumberInputBox v-model="num" :min="0" :max="100" />
        <NumberInputButton :disabled="num === 100" @click="incrementNum">
          <PhPlus :size="16" />
        </NumberInputButton>
      </NumberInput>
      <p class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
        Number Must be between 1 to 100
      </p>
    </fieldset>
</template>`,
};

export { DefaultNumberInputCode };
