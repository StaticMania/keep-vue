<script lang="ts" setup>
import Rating from "~/src/components/Rating/Rating.vue";
import RatingStar from "~/src/components/Rating/RatingStar.vue";
</script>

<template>
  <Rating>
    <RatingStar :value="1">
      <PhStar :size="20" />
    </RatingStar>
    <RatingStar :value="2">
      <PhStar :size="20" />
    </RatingStar>
    <RatingStar :value="3">
      <PhStar :size="20" />
    </RatingStar>
    <RatingStar :value="4">
      <PhStar :size="20" />
    </RatingStar>
    <RatingStar :value="5">
      <PhStar :size="20" />
    </RatingStar>
  </Rating>
</template>
