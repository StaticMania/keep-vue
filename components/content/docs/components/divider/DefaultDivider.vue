<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Divider } from "~/src";
import { DefaultDividerCode } from "./dividerCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultDividerCode">
    <div class="flex items-center justify-center">
      <section class="w-full space-y-3 text-metal-500 dark:text-metal-300">
        <p>I am alone, and feel the charm of existence in this spot.</p>
        <Divider />
        <p>
          I should be incapable of drawing a single stroke at the present
          moment.
        </p>
        <Divider />
        <p>A wonderful serenity has taken possession of my entire soul.</p>
      </section>
    </div>
  </CodeHighlightWithPreview>
</template>
