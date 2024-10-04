const DefaultRatingCode = {
  "RatingComponent.vue": `<script setup>
import { Rating, RatingStar } from "keep-vue";
</script>

<template>
  <Rating>
    <RatingStar :value="1" />
    <RatingStar :value="2" />
    <RatingStar :value="3" />
    <RatingStar :value="4" />
    <RatingStar :value="5" />
  </Rating>
</template>`,
};

const RatingTypesCode = {
  "RatingComponent.vue": `<script setup>
import { Rating, RatingStar } from "keep-vue";
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
`,
};

const ValueFromRatingCode = {
  "RatingComponent.vue": `<script setup>
import { Rating, RatingStar } from "keep-vue";

const ratings = [1, 2, 3, 4, 5];
const handleRating = (value) => {
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

`,
};

export { DefaultRatingCode, RatingTypesCode, ValueFromRatingCode };
