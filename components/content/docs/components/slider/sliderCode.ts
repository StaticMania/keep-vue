const DefaultSliderCode = {
  "SliderComponent.vue": `<script setup>
import { Slider } from "keep-vue";
</script>

<template>
    <Slider :min="0" :max="100" :default-value="[55]" />
</template>`,
};

const DoubleSliderCode = {
  "SliderComponent.vue": `<script setup>
import { Slider } from "keep-vue";
</script>

<template>
    <Slider :min="0" :max="100" :default-value="[33, 75]" />
</template>`,
};

export { DefaultSliderCode, DoubleSliderCode };
