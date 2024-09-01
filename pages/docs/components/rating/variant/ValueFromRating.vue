<script lang="ts" setup>
import RatingStar from "~/src/components/Rating/RatingStar.vue";

const ratings = [1, 2, 3, 4, 5];
const handleRating = (value: number | undefined) => {
  console.log(value);
};
</script>

<template>
  <Rating :handle-rating="handleRating">
    <RatingStar
      v-for="rating in ratings"
      :value="rating"
      :key="rating"></RatingStar>
  </Rating>
</template>
