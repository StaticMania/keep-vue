<script lang="ts" setup>
import Rating from "~/src/components/Rating/Rating.vue";
import RatingStar from "~/src/components/Rating/RatingStar.vue";
</script>

<template>
  <Rating>
    <RatingStar :value="1">
      <PhosphorIconStar :size="20" />
    </RatingStar>
    <RatingStar :value="2">
      <PhosphorIconStar :size="20" />
    </RatingStar>
    <RatingStar :value="3">
      <PhosphorIconStar :size="20" />
    </RatingStar>
    <RatingStar :value="4">
      <PhosphorIconStar :size="20" />
    </RatingStar>
    <RatingStar :value="5">
      <PhosphorIconStar :size="20" />
    </RatingStar>
  </Rating>
</template>
