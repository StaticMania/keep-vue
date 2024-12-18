const CustomizeCircleProgressCode = {
  "ProgressComponent.vue": `<script setup>
import {
  CircleProgress,
  CircleProgressLine,
  CircleProgressText,
} from "keep-vue";
</script>

<template>
    <CircleProgress :progress="45">
      <CircleProgressLine
        class="stroke-error-50"
        stroke-color="stroke-error-500" />
      <CircleProgressText class="text-error-500" />
    </CircleProgress>
</template>`,
};

const customizeLineProgress = {
  "ProgressComponent.vue": `<script setup>
import {
  LineProgress,
  LineProgressBar,
  LineProgressText,
} from "keep-vue";
</script>

<template>
    <LineProgress :progress="55">
      <LineProgressBar line-background="bg-error-50" class="bg-error-500" />
      <LineProgressText class="text-error-500" />
    </LineProgress>
</template>
`,
};

const DefaultLineProgressCode = {
  "ProgressComponent.vue": `<script setup>
import { LineProgress, LineProgressBar, LineProgressText } from "keep-vue";
</script>

<template>
    <LineProgress :progress="55">
      <LineProgressBar />
      <LineProgressText />
    </LineProgress>
</template>`,
};

const DefaultProgressCode = {
  "ProgressComponent.vue": `<script setup>
import { CircleProgress, CircleProgressLine, CircleProgressText } from "keep-vue";
</script>

<template>
  <div class="flex items-center justify-center">
    <CircleProgress :progress="45">
      <CircleProgressLine />
      <CircleProgressText>45%</CircleProgressText>
    </CircleProgress>
  </div>
</template>`,
};
const VariantOfProgressCode = {
  "ProgressComponent.vue": `<script setup>
import {
  CircleProgress,
  CircleProgressLine,
  CircleProgressText,
} from "keep-vue";
</script>

<template>
  <div class="mx-auto flex max-w-lg flex-col gap-5">
    <CircleProgress :progress="55">
      <CircleProgressLine />
      <CircleProgressText />
    </CircleProgress>
  </div>
</template>`,
};

export {
  CustomizeCircleProgressCode,
  customizeLineProgress,
  DefaultLineProgressCode,
  DefaultProgressCode,
  VariantOfProgressCode,
};
