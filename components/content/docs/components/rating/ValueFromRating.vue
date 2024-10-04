<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Rating, RatingStar } from "~/src";
import { ValueFromRatingCode } from "./ratingCode";

const ratings = [1, 2, 3, 4, 5];
const handleRating = (value: number | undefined) => {};
</script>

<template>
  <CodeHighlightWithPreview :code="ValueFromRatingCode">
    <Rating :handle-rating="handleRating">
      <RatingStar
        v-for="rating in ratings"
        :value="rating"
        :key="rating"></RatingStar>
    </Rating>
  </CodeHighlightWithPreview>
</template>
