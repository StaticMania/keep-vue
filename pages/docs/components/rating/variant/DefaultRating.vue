<script lang="ts" setup>
import Rating from "~/src/components/Rating/Rating.vue";
import RatingStar from "~/src/components/Rating/RatingStar.vue";
</script>

<template>
  <Rating>
    <RatingStar :value="1" />
    <RatingStar :value="2" />
    <RatingStar :value="3" />
    <RatingStar :value="4" />
    <RatingStar :value="5" />
  </Rating>
</template>
