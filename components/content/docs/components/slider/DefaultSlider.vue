<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Slider } from "~/src";
import { DefaultSliderCode } from "./sliderCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultSliderCode">
    <div class="p-6">
      <Slider :min="0" :max="100" :default-value="[70]" />
    </div>
  </CodeHighlightWithPreview>
</template>
