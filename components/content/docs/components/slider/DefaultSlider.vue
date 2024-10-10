<script lang="ts" setup>
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Slider } from "~/src";
import { DefaultSliderCode } from "./sliderCode";

const sliderValue = ref([25]);
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultSliderCode">
    <div class="p-6">
      <Slider :min="0" :max="100" v-model="sliderValue" />
    </div>
  </CodeHighlightWithPreview>
</template>
