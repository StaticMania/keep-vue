<script lang="ts" setup>
import LineProgress from "~/src/components/Progress/LineProgress.vue";
import LineProgressBar from "~/src/components/Progress/LineProgressBar.vue";
import LineProgressText from "~/src/components/Progress/LineProgressText.vue";
</script>
<template>
  <div class="mx-auto max-w-lg">
    <LineProgress :progress="55">
      <LineProgressBar />
      <LineProgressText />
    </LineProgress>
  </div>
</template>
