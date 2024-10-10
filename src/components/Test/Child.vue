<script setup lang="ts">
import { ref } from "vue";
import { Slider } from "~/src";

const sliderValue = ref([30, 50]);
</script>

<template>
  {{ sliderValue }}
  <Slider
    class="my-10 ml-5"
    v-model="sliderValue"
    :min="0"
    :max="100"
    :step="1" />
</template>
