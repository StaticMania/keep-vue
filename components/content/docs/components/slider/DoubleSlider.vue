<script lang="ts" setup>
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Slider } from "~/src";
import { DoubleSliderCode } from "./sliderCode";
const sliderValue = ref([25, 75]);
</script>

<template>
  <CodeHighlightWithPreview :code="DoubleSliderCode">
    <div class="p-6">
      <Slider
        v-model="sliderValue"
        :default-value="sliderValue"
        :min="0"
        :max="100"
        :step="1" />
    </div>
  </CodeHighlightWithPreview>
</template>
