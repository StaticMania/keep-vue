<script lang="ts" setup></script>
<template>
  <div class="flex items-center justify-center">
    <CircleProgress :progress="45">
      <CircleProgressLine />
      <CircleProgressText>45%</CircleProgressText>
    </CircleProgress>
  </div>
</template>
