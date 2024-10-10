<script setup>
import { ref } from "vue";

const sliderValue = ref([25, 75]);
</script>

<template>
  {{ sliderValue }}
  <Slider :min="0" :max="100" :default-value="[33, 75]" v-model="sliderValue" />
</template>
