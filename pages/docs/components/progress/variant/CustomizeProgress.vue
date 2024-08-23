<script lang="ts" setup>
import CircleProgress from "~/src/components/Progress/CircleProgress.vue";
import CircleProgressLine from "~/src/components/Progress/CircleProgressLine.vue";
import CircleProgressText from "~/src/components/Progress/CircleProgressText.vue";
import LineProgress from "~/src/components/Progress/LineProgress.vue";
import LineProgressBar from "~/src/components/Progress/LineProgressBar.vue";
import LineProgressText from "~/src/components/Progress/LineProgressText.vue";
</script>
<template>
  <div class="mx-auto max-w-lg space-y-4">
    <CircleProgress :progress="45">
      <CircleProgressLine
        class="stroke-error-50"
        strokeColor="stroke-error-500" />
      <CircleProgressText class="text-error-500" />
    </CircleProgress>
    <LineProgress :progress="55">
      <LineProgressBar lineBackground="bg-error-50" class="bg-error-500" />
      <LineProgressText class="text-error-500" />
    </LineProgress>
  </div>
</template>
