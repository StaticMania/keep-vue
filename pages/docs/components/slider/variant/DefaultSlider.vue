<script lang="ts" setup>
import Slider from "~/src/components/Slider/Slider.vue";
</script>

<template>
  <div class="p-6">
    <Slider :min="0" :max="100" :defaultValue="[55]" />
  </div>
</template>
