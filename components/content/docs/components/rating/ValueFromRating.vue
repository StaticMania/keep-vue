<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Rating, RatingStar } from "~/src";
import { ValueFromRatingCode } from "./ratingCode";

const ratings = [1, 2, 3, 4, 5];
const handleRating = (value: number | undefined) => {
  console.log(value);
};
</script>

<template>
  <CodeHighlightWithPreview :code="ValueFromRatingCode">
    <div class="flex items-center justify-center">
      <Rating :handle-rating="handleRating">
        <RatingStar v-for="rating in ratings" :key="rating" :value="rating" />
      </Rating>
    </div>
  </CodeHighlightWithPreview>
</template>
