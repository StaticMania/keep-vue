<script lang="ts" setup>
import CircleProgress from "~/src/components/Progress/CircleProgress.vue";
import CircleProgressLine from "~/src/components/Progress/CircleProgressLine.vue";
import CircleProgressText from "~/src/components/Progress/CircleProgressText.vue";
import LineProgress from "~/src/components/Progress/LineProgress.vue";
import LineProgressBar from "~/src/components/Progress/LineProgressBar.vue";
import LineProgressText from "~/src/components/Progress/LineProgressText.vue";
</script>
<template>
  <div class="mx-auto flex max-w-lg flex-col gap-5">
    <CircleProgress :progress="55">
      <CircleProgressLine />
      <CircleProgressText />
    </CircleProgress>
    <LineProgress :progress="55">
      <LineProgressBar />
      <LineProgressText />
    </LineProgress>
  </div>
</template>
