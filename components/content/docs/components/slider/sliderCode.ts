const DefaultSliderCode = {
  "SliderComponent.vue": `<script setup>
  import { ref } from "vue";
  import { Slider } from "keep-vue";

const sliderValue = ref([25]);
</script>

<template>
{{sliderValue}}
    <Slider :min="0" :max="100" v-model="sliderValue" />
</template>`,
};

const DoubleSliderCode = {
  "SliderComponent.vue": `<script setup>
import { ref } from "vue";
import { Slider } from "keep-vue";

const sliderValue = ref([25, 75);
</script>

<template>
{{sliderValue}}
    <Slider :min="0" :max="100" :default-value="[33, 75]" v-model="sliderValue" />
</template>`,
};

export { DefaultSliderCode, DoubleSliderCode };
