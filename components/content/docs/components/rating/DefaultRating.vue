<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Rating, RatingStar } from "~/src";
import { DefaultRatingCode } from "./ratingCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultRatingCode">
    <Rating>
      <RatingStar :value="1" />
      <RatingStar :value="2" />
      <RatingStar :value="3" />
      <RatingStar :value="4" />
      <RatingStar :value="5" />
    </Rating>
  </CodeHighlightWithPreview>
</template>
