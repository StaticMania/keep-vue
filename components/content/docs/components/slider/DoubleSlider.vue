<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Slider } from "~/src";
import { DoubleSliderCode } from "./sliderCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DoubleSliderCode">
    <div class="p-6">
      <Slider :min="0" :max="100" :default-value="[55]" />
    </div>
  </CodeHighlightWithPreview>
</template>
