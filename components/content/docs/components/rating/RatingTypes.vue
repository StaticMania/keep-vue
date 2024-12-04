<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Rating, RatingStar } from "~/src";
import { RatingTypesCode } from "./ratingCode";
</script>

<template>
  <CodeHighlightWithPreview :code="RatingTypesCode">
    <div class="flex items-center justify-center">
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
    </div>
  </CodeHighlightWithPreview>
</template>
